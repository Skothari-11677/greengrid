import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Leaf, Diamond, BarChart2, Vote, ArrowUpRight, ArrowDownRight, Clock, ExternalLink } from 'lucide-react';
import TransactionStatusChip from '../components/TransactionStatusChip';
import AddressDisplay from '../components/AddressDisplay';

const portfolioData = [
    { month: 'Jan', rec: 12000, inv: 45000 },
    { month: 'Feb', rec: 18000, inv: 52000 },
    { month: 'Mar', rec: 24000, inv: 58000 },
    { month: 'Apr', rec: 22000, inv: 65000 },
    { month: 'May', rec: 35000, inv: 72000 },
    { month: 'Jun', rec: 42000, inv: 84500 },
];

export default function BlockchainDashboard() {
    return (
        <div className="theme-dark" style={{ minHeight: '100vh', display: 'flex', backgroundColor: 'var(--color-dark-surface)' }}>

            {/* Sidebar - Dark Mode specific styling */}
            <aside style={{ width: '240px', backgroundColor: 'var(--color-dark-card)', borderRight: '1px solid var(--color-dark-border)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid var(--color-dark-border)' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px', color: 'white' }}>Web3 Hub</h2>
                </div>

                <nav style={{ flex: 1, padding: 'var(--spacing-md) 0' }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        <li style={{ padding: '12px 24px', backgroundColor: 'rgba(30,124,58,0.15)', borderLeft: '4px solid var(--color-primary)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', color: 'white' }}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>Overview</span>
                        </li>
                        <li style={{ padding: '12px 24px', borderLeft: '4px solid transparent', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', color: 'var(--color-dark-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark-muted)'}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>My Trades</span>
                        </li>
                        <li style={{ padding: '12px 24px', borderLeft: '4px solid transparent', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', color: 'var(--color-dark-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark-muted)'}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>Carbon NFTs</span>
                        </li>
                        <li style={{ padding: '12px 24px', borderLeft: '4px solid transparent', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', color: 'var(--color-dark-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark-muted)'}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>Investment Tokens</span>
                        </li>
                        <li style={{ padding: '12px 24px', borderLeft: '4px solid transparent', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', color: 'var(--color-dark-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark-muted)'}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>DAO Voting</span>
                        </li>
                    </ul>
                </nav>

                <div style={{ padding: 'var(--spacing-lg)', borderTop: '1px solid var(--color-dark-border)' }}>
                    <div style={{ fontSize: '11px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Connected Wallet</div>
                    <AddressDisplay address="0x3a4F92dE8bC4e7aB8c2d91fFF12Ecb3A2A8c2D4A" showExternalLink />
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: 'var(--spacing-2xl)', overflowY: 'auto' }}>
                <h1 className="section-title" style={{ marginBottom: 'var(--spacing-2xl)', color: 'white' }}>Portfolio Overview</h1>

                {/* Top Stats Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                    <div className="card" style={{ padding: '24px', borderRadius: '12px', transition: 'all 0.2s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                            <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', fontWeight: 600, textTransform: 'uppercase' }}>REC Tokens</div>
                            <Leaf size={20} color="var(--color-chain-glow)" />
                        </div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800, color: 'var(--color-chain-glow)' }}>
                            1,240 <span style={{ fontSize: '16px' }}>REC</span>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '24px', borderRadius: '12px', transition: 'all 0.2s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                            <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Carbon NFTs</div>
                            <Diamond size={20} color="var(--color-chain-pulse)" />
                        </div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800, color: 'var(--color-chain-pulse)' }}>
                            18 <span style={{ fontSize: '16px' }}>NFTs</span>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '24px', borderRadius: '12px', transition: 'all 0.2s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                            <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Investments</div>
                            <BarChart2 size={20} color="var(--color-chain-gold)" />
                        </div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800, color: 'var(--color-chain-gold)' }}>
                            ₹84k <span style={{ fontSize: '16px' }}>Value</span>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '24px', borderRadius: '12px', transition: 'all 0.2s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                            <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Governance</div>
                            <Vote size={20} color="var(--color-ethereum-blue)" />
                        </div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800, color: 'var(--color-ethereum-blue)' }}>
                            3.2k <span style={{ fontSize: '16px' }}>GRID</span>
                        </div>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="card" style={{ padding: '24px', borderRadius: '12px', marginBottom: 'var(--spacing-2xl)' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '24px' }}>Portfolio Value Over Time</h3>
                    <div style={{ height: '320px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={portfolioData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRec" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-chain-glow)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--color-chain-glow)" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-chain-pulse)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--color-chain-pulse)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-dark-border)" vertical={false} />
                                <XAxis dataKey="month" stroke="var(--color-dark-muted)" tick={{ fill: 'var(--color-dark-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis stroke="var(--color-dark-muted)" tick={{ fill: 'var(--color-dark-muted)', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val / 1000}k`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--color-dark-card)', border: '1px solid var(--color-dark-border)', borderRadius: '8px', color: 'white' }}
                                    itemStyle={{ color: 'white', fontWeight: 600 }}
                                    labelStyle={{ color: 'var(--color-dark-muted)', marginBottom: '4px' }}
                                />
                                <Area type="monotone" dataKey="inv" stroke="var(--color-chain-pulse)" strokeWidth={2} fillOpacity={1} fill="url(#colorInv)" name="Investments" />
                                <Area type="monotone" dataKey="rec" stroke="var(--color-chain-glow)" strokeWidth={2} fillOpacity={1} fill="url(#colorRec)" name="REC Value (Estimated)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-dark-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: 'white' }}>Recent Transactions</h3>
                        <button style={{ color: 'var(--color-chain-pulse)', fontSize: '13px', fontWeight: 600 }}>View All</button>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'rgba(255,255,255,0.02)', color: 'var(--color-dark-muted)', fontSize: '12px', textTransform: 'uppercase' }}>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Type</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Amount</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Counterparty</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Status</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>TX Hash</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr style={{ borderBottom: '1px solid var(--color-dark-border)', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <ArrowDownRight size={16} color="var(--color-chain-glow)" />
                                        <span style={{ color: 'white', fontWeight: 500 }}>Energy Purchase</span>
                                    </div>
                                </td>
                                <td style={{ padding: '16px 24px', color: 'white', fontWeight: 600 }}>240 kWh</td>
                                <td style={{ padding: '16px 24px' }}><AddressDisplay address="0x8F2B9D4e2bC4A1eB8C2D91FFf12Ecb3A2A8bCa93" /></td>
                                <td style={{ padding: '16px 24px' }}><TransactionStatusChip status="confirmed" /></td>
                                <td style={{ padding: '16px 24px' }}>
                                    <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-chain-pulse)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>0xdf3a...912a <ExternalLink size={12} /></a>
                                </td>
                                <td style={{ padding: '16px 24px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>2 hrs ago</td>
                            </tr>

                            <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <ArrowUpRight size={16} color="var(--color-chain-gold)" />
                                        <span style={{ color: 'white', fontWeight: 500 }}>Dividend Claim</span>
                                    </div>
                                </td>
                                <td style={{ padding: '16px 24px', color: 'white', fontWeight: 600 }}>₹ 1,450</td>
                                <td style={{ padding: '16px 24px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>Smart Contract</td>
                                <td style={{ padding: '16px 24px' }}><TransactionStatusChip status="pending" /></td>
                                <td style={{ padding: '16px 24px' }}>
                                    <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-chain-pulse)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>0xa12b...b45c <ExternalLink size={12} /></a>
                                </td>
                                <td style={{ padding: '16px 24px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>15 mins ago</td>
                            </tr>

                            <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Vote size={16} color="var(--color-ethereum-blue)" />
                                        <span style={{ color: 'white', fontWeight: 500 }}>DAO Vote Cast</span>
                                    </div>
                                </td>
                                <td style={{ padding: '16px 24px', color: 'white', fontWeight: 600 }}>140 GRID (FOR)</td>
                                <td style={{ padding: '16px 24px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>GIP-042 Contract</td>
                                <td style={{ padding: '16px 24px' }}><TransactionStatusChip status="confirmed" /></td>
                                <td style={{ padding: '16px 24px' }}>
                                    <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-chain-pulse)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>0xe66c...89dd <ExternalLink size={12} /></a>
                                </td>
                                <td style={{ padding: '16px 24px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>1 day ago</td>
                            </tr>

                            <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Diamond size={16} color="var(--color-chain-pulse)" />
                                        <span style={{ color: 'white', fontWeight: 500 }}>NFT Mint</span>
                                    </div>
                                </td>
                                <td style={{ padding: '16px 24px', color: 'white', fontWeight: 600 }}>1 Carbon Credit</td>
                                <td style={{ padding: '16px 24px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>GreenGrid Registry</td>
                                <td style={{ padding: '16px 24px' }}><TransactionStatusChip status="failed" /></td>
                                <td style={{ padding: '16px 24px' }}>
                                    <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-chain-pulse)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>0x54ab...12ef <ExternalLink size={12} /></a>
                                </td>
                                <td style={{ padding: '16px 24px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>3 days ago</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    );
}
