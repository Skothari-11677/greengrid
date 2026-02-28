import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { useBlockchain } from '../hooks/useBlockchain';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const {
        wallet, balance,
        connectWallet
    } = useBlockchain();

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'var(--color-white)',
            borderBottom: '1px solid var(--color-border)',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 var(--spacing-lg)'
        }}>
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--color-primary) 50%, var(--color-blue-primary) 100%)'
            }}></div>

            <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Leaf color="var(--color-primary)" size={24} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-primary)', fontSize: '20px' }}>
                        GreenGrid
                    </span>
                </Link>

                {/* Nav Links */}
                <nav style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                    <Link to="/marketplace" className="nav-link" style={{ color: 'var(--color-text-primary)' }}>Marketplace</Link>
                    <Link to="/invest" className="nav-link" style={{ color: 'var(--color-text-primary)' }}>Invest</Link>
                    <Link to="/community" className="nav-link" style={{ color: 'var(--color-text-primary)' }}>Community</Link>
                    <Link to="/dashboard" className="nav-link" style={{ color: 'var(--color-text-primary)' }}>Dashboard</Link>
                    <Link to="/chain-activity" className="nav-link" style={{ color: 'var(--color-blue-primary)' }}>⛓ Live Chain</Link>
                </nav>

                {/* Wallet Actions */}
                <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
                    {!wallet ? (
                        <button
                            onClick={connectWallet}
                            style={{
                                backgroundColor: 'var(--color-primary)',
                                color: 'var(--color-white)',
                                borderRadius: '6px',
                                padding: '12px 28px',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseOver={e => e.target.style.backgroundColor = 'var(--color-primary-hover)'}
                            onMouseOut={e => e.target.style.backgroundColor = 'var(--color-primary)'}
                        >
                            🔗 Connect Wallet
                        </button>
                    ) : (
                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    backgroundColor: 'var(--color-bg)',
                                    border: '1px solid var(--color-border)',
                                    padding: '8px 16px', borderRadius: '100px',
                                    fontSize: '13px', fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{
                                    display: 'inline-block', width: '8px', height: '8px',
                                    borderRadius: '50%', backgroundColor: '#00E676'
                                }}></span>
                                {wallet.slice(0, 6)}...{wallet.slice(-4)}
                                <span style={{ color: '#00E676', fontSize: '12px', fontWeight: 700 }}>
                                    {balance} ETH
                                </span>
                            </button>

                            {isDropdownOpen && (
                                <div style={{
                                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                                    backgroundColor: '#0D1117',
                                    border: '1px solid #30363D',
                                    borderRadius: '12px', padding: '8px 0', width: '220px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)', zIndex: 1000
                                }}>
                                    {/* Wallet Info */}
                                    <div style={{ padding: '8px 16px', borderBottom: '1px solid #30363D', marginBottom: '4px' }}>
                                        <div style={{ fontSize: '11px', color: '#8B949E', textTransform: 'uppercase', marginBottom: '4px' }}>Connected Wallet</div>
                                        <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#40C4FF' }}>
                                            {wallet.slice(0, 8)}...{wallet.slice(-6)}
                                        </div>
                                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginTop: '4px' }}>
                                            {balance} <span style={{ color: '#00E676' }}>ETH</span>
                                        </div>
                                    </div>

                                    {/* Links */}
                                    {[
                                        { to: '/marketplace', label: '⚡ Marketplace' },
                                        { to: '/dashboard/blockchain', label: '📊 Web3 Portfolio' },
                                        { to: '/nfts', label: '🌿 Carbon NFTs' },
                                        { to: '/investments/tokens', label: '💰 Investment Tokens' },
                                        { to: '/governance', label: '🗳 DAO Voting' },
                                        { to: '/chain-activity', label: '⛓ Live Chain Feed' },
                                    ].map(item => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            onClick={() => setIsDropdownOpen(false)}
                                            style={{
                                                display: 'block', padding: '10px 16px',
                                                fontSize: '14px', color: 'white',
                                                textDecoration: 'none',
                                                transition: 'background-color 0.2s'
                                            }}
                                            onMouseOver={e => e.currentTarget.style.backgroundColor = '#161B22'}
                                            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}