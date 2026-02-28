import React, { useState, useEffect } from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import AddressDisplay from '../components/AddressDisplay';

const SEED_TRADES = [
    { id: 1, type: 'Trade', producer: '0x1A2b...3c4D', consumer: '0x9xF2...1a3E', kwh: 120, val: 540, hash: '0xabc1...def2', isNew: false, color: 'var(--color-chain-glow)' },
    { id: 2, type: 'Mint', producer: 'GreenGrid Registry', consumer: '0x3a4F...8c2D', kwh: '-', val: 247, hash: '0x77f2...99a0', isNew: false, color: 'var(--color-chain-pulse)' },
    { id: 3, type: 'Investment', producer: 'Navi Mumbai Grid', consumer: '0x5b3C...4f9A', kwh: '-', val: 12500, hash: '0xcc84...ee21', isNew: false, color: 'var(--color-chain-gold)' },
    { id: 4, type: 'Vote', producer: 'GIP-042', consumer: '0x88c2...11b4', kwh: '-', val: '-', hash: '0x00f1...44a7', isNew: false, color: 'var(--color-polygon-purple)' },
];

export default function ChainActivityFeed() {
    const [trades, setTrades] = useState(SEED_TRADES);
    const [stats, setStats] = useState({ totalObj: 14205, kwhObj: 845000, co2Obj: 4200, contractObj: 342 });

    useEffect(() => {
        // Simulate live incoming feed
        const interval = setInterval(() => {
            const types = [
                { t: 'Trade', c: 'var(--color-chain-glow)' },
                { t: 'Mint', c: 'var(--color-chain-pulse)' },
                { t: 'Investment', c: 'var(--color-chain-gold)' }
            ];
            const randomType = types[Math.floor(Math.random() * types.length)];
            const randomKwh = Math.floor(Math.random() * 500) + 10;

            const newTrade = {
                id: Date.now(),
                type: randomType.t,
                producer: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
                consumer: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
                kwh: randomType.t === 'Trade' ? randomKwh : '-',
                val: randomType.t === 'Trade' ? randomKwh * 4.5 : Math.floor(Math.random() * 5000) + 500,
                hash: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
                isNew: true,
                color: randomType.c
            };

            setTrades(current => [newTrade, ...current].slice(0, 15)); // Keep last 15

            setStats(s => ({
                totalObj: s.totalObj + 1,
                kwhObj: randomType.t === 'Trade' ? s.kwhObj + randomKwh : s.kwhObj,
                co2Obj: randomType.t === 'Mint' ? s.co2Obj + 2 : s.co2Obj,
                contractObj: s.contractObj
            }));

        }, 8000); // New trade every 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="theme-dark" style={{ minHeight: '100vh', backgroundColor: 'var(--color-dark-surface)' }}>

            {/* Header spanning full width */}
            <div style={{ borderBottom: '1px solid var(--color-dark-border)', padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>Live Energy Trades on Polygon</h1>
                        <p style={{ color: 'var(--color-dark-muted)', fontSize: '16px' }}>
                            Every transaction is public, permanent, and verified.
                        </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(0,230,118,0.1)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(0,230,118,0.3)' }}>
                        <span className="glow-active" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-chain-glow)' }}></span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-chain-glow)', letterSpacing: '0.1em' }}>LIVE</span>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>

                {/* Global Stats */}
                <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', padding: '24px', borderRadius: '12px', marginBottom: 'var(--spacing-2xl)' }}>
                    <div style={{ borderRight: '1px solid var(--color-dark-border)' }}>
                        <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Total Trades Today</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--color-chain-glow)' }}>{stats.totalObj.toLocaleString()}</div>
                    </div>
                    <div style={{ borderRight: '1px solid var(--color-dark-border)' }}>
                        <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>kWh Traded Today</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--color-chain-glow)' }}>{stats.kwhObj.toLocaleString()}</div>
                    </div>
                    <div style={{ borderRight: '1px solid var(--color-dark-border)' }}>
                        <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Carbon Offset (Tons)</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--color-chain-glow)' }}>{stats.co2Obj.toLocaleString()}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Active Smart Contracts</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--color-chain-glow)' }}>{stats.contractObj.toLocaleString()}</div>
                    </div>
                </div>

                {/* Live Feed Table */}
                <div className="card" style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: 'var(--spacing-3xl)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'rgba(255,255,255,0.02)', color: 'var(--color-dark-muted)', fontSize: '12px', textTransform: 'uppercase' }}>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Type</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Producer / Contract</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Consumer</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Amount</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Value (₹)</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>TX Hash</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trades.map((trade, idx) => (
                                <tr key={trade.id} style={{
                                    borderBottom: '1px solid var(--color-dark-border)',
                                    backgroundColor: trade.isNew ? 'rgba(0,230,118,0.08)' : 'transparent',
                                    transition: 'background-color 2s ease-out'
                                }}
                                    ref={(el) => {
                                        // Hacky way to trigger fade out after render
                                        if (el && trade.isNew) {
                                            setTimeout(() => { el.style.backgroundColor = 'transparent'; trade.isNew = false; }, 100);
                                        }
                                    }}
                                >
                                    <td style={{ padding: '16px 24px' }}>
                                        <span style={{ color: trade.color, fontWeight: 600, fontSize: '13px', border: `1px solid ${trade.color}`, padding: '4px 8px', borderRadius: '4px' }}>
                                            {trade.type}
                                        </span>
                                    </td>
                                    <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-dark-muted)' }}>{trade.producer}</td>
                                    <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-dark-muted)' }}>{trade.consumer}</td>
                                    <td style={{ padding: '16px 24px', color: 'white', fontWeight: 600 }}>{trade.kwh} {trade.kwh !== '-' && 'kWh'}</td>
                                    <td style={{ padding: '16px 24px', color: 'white', fontWeight: 600 }}>{trade.val}</td>
                                    <td style={{ padding: '16px 24px' }}>
                                        <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-chain-pulse)', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                                            {trade.hash} <ExternalLink size={12} />
                                        </a>
                                    </td>
                                    <td style={{ padding: '16px 24px' }}>
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-chain-glow)', fontSize: '12px', fontWeight: 600 }}>
                                            <CheckCircle size={14} /> Confirmed
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Fake Geographic map and explorer link */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-xl)' }}>
                    <div className="card" style={{ padding: '24px', borderRadius: '12px', position: 'relative', height: '300px', backgroundColor: 'var(--color-dark-card)' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'white', marginBottom: '8px' }}>Live Geographic Nodes (India)</h3>
                        <p style={{ color: 'var(--color-dark-muted)', fontSize: '13px' }}>Simulated node map plotting active smart contract interactions.</p>

                        {/* Simple SVG placeholder for Map */}
                        <svg width="100%" height="100%" viewBox="0 0 400 300" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.2, pointerEvents: 'none' }}>
                            <path d="M150,50 L250,50 L300,150 L200,280 L100,200 Z" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>

                        {/* Glowing Dots */}
                        <div className="glow-active" style={{ position: 'absolute', top: '150px', left: '120px', width: '12px', height: '12px', backgroundColor: 'var(--color-solar)', borderRadius: '50%' }} title="Mumbai Solar Grid"></div>
                        <div className="glow-active" style={{ animationDelay: '0.5s', position: 'absolute', top: '100px', left: '160px', width: '8px', height: '8px', backgroundColor: 'var(--color-wind)', borderRadius: '50%' }}></div>
                        <div className="glow-active" style={{ animationDelay: '1.2s', position: 'absolute', top: '220px', left: '180px', width: '16px', height: '16px', backgroundColor: 'var(--color-chain-glow)', borderRadius: '50%' }}></div>
                    </div>

                    <div className="card" style={{ padding: '32px 24px', borderRadius: '12px', backgroundColor: '#161B22', border: '1px solid var(--color-polygon-purple)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: 'white', marginBottom: '16px' }}>Want to verify independently?</h3>
                        <p style={{ color: 'var(--color-dark-muted)', fontSize: '14px', marginBottom: '24px' }}>
                            We believe in trustless systems. You don't have to take our word for any of these trades. Verify the raw state on the Polygon blockchain.
                        </p>
                        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: 'var(--color-polygon-purple)', color: 'white', padding: '12px 24px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none' }}>
                            View Contract on Polygonscan <ExternalLink size={16} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
