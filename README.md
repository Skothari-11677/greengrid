# 🌿 GreenGrid — Renewable Energy Marketplace

A decentralized peer-to-peer renewable energy marketplace built with **React + Vite** and **Ethereum (Hardhat)** smart contracts.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MetaMask](https://metamask.io/) browser extension
- Git

### 1. Clone & Install

```bash
git clone https://github.com/Skothari-11677/greengrid.git
cd greengrid
npm install
```

### 2. Start the Frontend

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 3. Smart Contract Setup (for blockchain features)

The smart contract lives in a separate repo/folder (`greengrid-blockchain`). To run locally:

```bash
# In the blockchain project directory
npm install
npx hardhat node          # Terminal 1 — starts local blockchain
npx hardhat run scripts/deploy.js --network localhost   # Terminal 2 — deploys contract
```

The contract deploys to `0x5FbDB2315678afecb367f032d93F642f64180aa3` by default.

### 4. MetaMask Setup

1. Open MetaMask → Networks → **Add Network Manually**
2. Fill in:
   | Field | Value |
   |-------|-------|
   | Network Name | `Hardhat Localhost` |
   | RPC URL | `http://127.0.0.1:8545` |
   | Chain ID | `1337` |
   | Currency Symbol | `ETH` |
3. Import a test account using one of the private keys printed by `npx hardhat node`

---

## 🏗️ Project Structure

```
greengrid/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Card.jsx, Badge.jsx, Button.jsx
│   │   ├── WalletConnectModal.jsx
│   │   ├── OnChainVerificationPanel.jsx
│   │   ├── NFTCard.jsx
│   │   ├── AddressDisplay.jsx
│   │   └── TransactionStatusChip.jsx
│   ├── pages/           # Route pages
│   │   ├── Home.jsx
│   │   ├── Marketplace.jsx         # Buy/sell energy (blockchain integrated)
│   │   ├── Dashboard.jsx           # Consumer / Producer / Investor views
│   │   ├── BlockchainDashboard.jsx # Web3 portfolio
│   │   ├── NFTGallery.jsx          # Carbon credit NFTs
│   │   ├── InvestmentTokens.jsx    # Token portfolio
│   │   ├── Governance.jsx          # DAO voting
│   │   └── ChainActivityFeed.jsx   # Live on-chain feed
│   ├── hooks/
│   │   └── useBlockchain.js        # Wallet + smart contract interactions
│   ├── utils/
│   │   └── priceConverter.js       # ETH ↔ INR dual pricing
│   └── index.css                   # Global styles + design tokens
├── index.html
├── package.json
└── vite.config.js
```

---

## 💰 Dual Pricing System

Energy is priced in **₹ (INR)** for stability, with the **ETH equivalent** shown alongside. The conversion uses a mock rate defined in `src/utils/priceConverter.js`:

```
1 ETH = ₹2,00,000 (mock rate)
```

In production, this would be replaced with a **Chainlink Price Feed** or **CoinGecko API** for live rates.

---

## 👥 Team Collaboration Guide

### Git Workflow

1. **Clone the repo** and create your own branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make changes, then:
   ```bash
   git add .
   git commit -m "feat: description of your change"
   git push origin feature/your-feature-name
   ```
3. Open a **Pull Request** on GitHub for review.

### Blockchain Testing (Shared Testnet)

#### Option A: Each teammate runs their own local Hardhat node
- Simple, but each person has their own isolated blockchain — **no shared state**.

#### Option B: Shared Testnet (Recommended for team testing) ⭐
Deploy to **Sepolia** testnet so all teammates see the same transactions:

1. Get free Sepolia ETH from [sepoliafaucet.com](https://sepoliafaucet.com)
2. Update `hardhat.config.js`:
   ```javascript
   networks: {
     sepolia: {
       url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY",
       accounts: ["YOUR_DEPLOYER_PRIVATE_KEY"]
     }
   }
   ```
3. Deploy: `npx hardhat run scripts/deploy.js --network sepolia`
4. Update the contract address in `src/hooks/useBlockchain.js`
5. All teammates add Sepolia network in MetaMask and use the same contract

> **This is the recommended approach** — everyone sees the same listings, trades, and feeds in real time across all PCs.

#### Option C: One teammate hosts Hardhat for the team
1. One person runs `npx hardhat node` and shares their IP.
2. Others update `useBlockchain.js` to point to `http://<host-ip>:8545`.
3. Works on a local LAN but fragile.

### Who Does What

| Role | Responsibility |
|------|---------------|
| Frontend Dev | UI components, pages, styling |
| Smart Contract Dev | Solidity contracts, deployment scripts |
| Integration Dev | `useBlockchain.js` hook, price conversion |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Vanilla CSS with design tokens |
| Charts | Recharts |
| Icons | Lucide React |
| Blockchain | Ethers.js v6 |
| Smart Contracts | Solidity + Hardhat |
| Network | Ethereum (local Hardhat / Sepolia testnet) |

---

## 📝 Key Files to Know

| File | Purpose |
|------|---------|
| `src/hooks/useBlockchain.js` | Wallet connection, listing/buying energy |
| `src/utils/priceConverter.js` | ETH ↔ INR conversion (change rate here) |
| `src/pages/Marketplace.jsx` | Main trading page |
| `src/pages/Dashboard.jsx` | Consumer/Producer/Investor toggle |
| `src/index.css` | All CSS variables (colors, fonts, tokens) |
