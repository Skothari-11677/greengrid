import { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const ABI = [
    "function listEnergy(string,string,uint256,uint256) returns (uint256)",
    "function buyEnergy(uint256,uint256) payable",
    "function getListing(uint256) view returns (tuple(uint256,address,string,string,uint256,uint256,bool))",
    "function listingCount() view returns (uint256)",
    "function tradeCount() view returns (uint256)",
    "event EnergyListed(uint256 indexed,address indexed,string,string,uint256,uint256)",
    "event EnergyPurchased(uint256 indexed,uint256 indexed,address indexed,address,uint256,uint256,uint256)"
];

export function useBlockchain() {
    const [wallet, setWallet] = useState(null);
    const [contract, setContract] = useState(null);
    const [listings, setListings] = useState([]);
    const [trades, setTrades] = useState([]);
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState("0");

    // ── Connect MetaMask ──────────────────────────────────────
    async function connectWallet() {
        if (!window.ethereum) {
            alert("Please install MetaMask!");
            return;
        }
        try {
            // Switch MetaMask to the local Hardhat network (chainId 31337 = 0x7A69)
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x539" }],
                });
            } catch (switchError) {
                // If the chain hasn't been added to MetaMask yet, add it
                if (switchError.code === 4902) {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: "0x539",
                            chainName: "Hardhat Localhost",
                            rpcUrls: ["http://127.0.0.1:8545"],
                            nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
                        }],
                    });
                }
            }

            const provider = new ethers.BrowserProvider(window.ethereum, {
                chainId: 1337,
                name: "localhost"
            });
            // Force MetaMask to show the account picker (not auto-connect)
            await provider.send("wallet_requestPermissions", [{ eth_accounts: {} }]);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            const bal = await provider.getBalance(address);
            const c = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

            setWallet(address);
            setContract(c);
            setBalance(ethers.formatEther(bal).slice(0, 6));
            setStatus("✅ Wallet connected!");
            await loadListings(c);
        } catch (e) {
            setStatus("❌ " + e.message);
        }
    }

    // ── Load All Listings from Blockchain ─────────────────────
    async function loadListings(c) {
        const con = c || contract;
        if (!con) return;
        try {
            const count = await con.listingCount();
            const loaded = [];
            for (let i = 1; i <= Number(count); i++) {
                const l = await con.getListing(i);
                loaded.push({
                    id: Number(l[0]),
                    producer: l[1],
                    type: l[2],
                    location: l[3],
                    price: ethers.formatEther(l[4]),
                    units: Number(l[5]),
                    active: l[6]
                });
            }
            setListings(loaded);
        } catch (e) {
            setStatus("❌ Error loading listings: " + e.message);
        }
    }

    // ── Producer: List Energy ─────────────────────────────────
    async function listEnergy(energyType, location, price, units) {
        if (!contract) { alert("Connect wallet first!"); return; }
        setLoading(true);
        setStatus("⏳ Listing energy on blockchain...");
        try {
            const priceWei = ethers.parseEther(price.toString());
            const tx = await contract.listEnergy(energyType, location, priceWei, units);
            setStatus(`⏳ Submitted! TX: ${tx.hash.slice(0, 16)}...`);
            await tx.wait();
            setStatus(`✅ Energy listed on blockchain!`);
            await loadListings();
        } catch (e) {
            setStatus("❌ " + e.message);
        }
        setLoading(false);
    }

    // ── Consumer: Buy Energy ──────────────────────────────────
    async function buyEnergy(listingId, pricePerUnit, unitsToBuy) {
        if (!contract) { alert("Connect wallet first!"); return; }
        setLoading(true);
        setStatus("⏳ Sending payment to smart contract...");
        try {
            const totalCost = ethers.parseEther(
                (parseFloat(pricePerUnit) * unitsToBuy).toFixed(8)
            );
            const tx = await contract.buyEnergy(listingId, unitsToBuy, {
                value: totalCost
            });
            setStatus(`⏳ TX submitted! Hash: ${tx.hash.slice(0, 16)}...`);
            setTrades(prev => [{
                hash: tx.hash,
                listing: listingId,
                units: unitsToBuy,
                paid: (parseFloat(pricePerUnit) * unitsToBuy).toFixed(4),
                time: new Date().toLocaleTimeString(),
                status: "Pending ⏳"
            }, ...prev]);
            await tx.wait();
            setStatus("✅ Purchase complete! Producer paid instantly.");
            setTrades(prev => prev.map(t =>
                t.hash === tx.hash ? { ...t, status: "Confirmed ✅" } : t
            ));
            await loadListings();
        } catch (e) {
            setStatus("❌ " + e.message);
        }
        setLoading(false);
    }

    return {
        wallet, balance, listings, trades,
        status, loading,
        connectWallet, listEnergy,
        buyEnergy, loadListings
    };
}