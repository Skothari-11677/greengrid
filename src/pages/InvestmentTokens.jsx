import React from 'react';
import { ArrowUpRight, Copy, ExternalLink, Activity } from 'lucide-react';
import AddressDisplay from '../components/AddressDisplay';
import TransactionStatusChip from '../components/TransactionStatusChip';

export default function InvestmentTokens() {
    return (
        <div className="theme-dark" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-dark-surface)' }}>
            {/* Same sidebar structure as Blockchain Dashboard would go here... skipping for brevity to focus on main content */}
            <aside style={{ width: '240px', backgroundColor: 'var(--color-dark-card)', borderRight: '1px solid var(--color-dark-border)', display: 'flex', flexDirection: 'column', padding: 'var(--spacing-lg)' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px', color: 'white', marginBottom: '32px' }}>Web3 Hub</h2>
                <div style={{ color: 'var(--color-dark-muted)', fontSize: '14px', marginBottom: '16px' }}>Investment Tokens</div>
                {/* Placeholder for nav logic */}
            </aside>

            <main style={{ flex: 1, padding: 'var(--spacing-2xl)', overflowY: 'auto' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                    <h1 className="section-title" style={{ color: 'white' }}>Investment Tokens</h1>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>Total Portfolio Value</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: 'var(--color-chain-gold)' }}>₹ 84,500</div>
                    </div>
                </div>

                {/* Active Investments Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-3xl)' }}>

                    <div className="card" style={{ padding: '24px', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', backgroundColor: 'var(--color-solar)' }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px', marginTop: '8px' }}>
                            <div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>Navi Mumbai Solar Grid</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-dark-muted)' }}>
                                    <span style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: 'var(--color-solar)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Solar</span>
                                    📍 Mumbai, MH
                                </div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(0,230,118,0.1)', color: 'var(--color-chain-glow)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Activity size={14} /> Active
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-dark-border)', borderBottom: '1px solid var(--color-dark-border)', padding: '16px 0', marginBottom: '20px' }}>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)', marginBottom: '4px' }}>Tokens Owned</div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--color-chain-gold)' }}>450 SOLAR-MH-04</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)', marginBottom: '4px' }}>Current Value</div>
                                <div style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>₹ 22,500</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)', marginBottom: '4px' }}>ROI to Date</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: 'var(--color-chain-glow)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <ArrowUpRight size={24} /> +14.2%
                                </div>
                            </div>
                            <div style={{ textAlign: 'right', fontSize: '13px', color: 'var(--color-dark-muted)' }}>
                                Maturity Date: <span style={{ color: 'white', fontWeight: 500 }}>Dec 2027</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--color-dark-muted)', marginBottom: '8px' }}>
                                <span>Funding Progress</span>
                                <span>85%</span>
                            </div>
                            <div style={{ height: '8px', backgroundColor: 'var(--color-dark-border)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: '85%', background: 'linear-gradient(90deg, var(--color-primary), var(--color-blue-primary))', borderRadius: '4px' }}></div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button style={{ flex: 1, padding: '10px', borderRadius: '6px', backgroundColor: 'var(--color-primary)', color: 'white', fontWeight: 600, fontSize: '14px' }}>
                                Claim Revenue
                            </button>
                            <button style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid var(--color-blue-primary)', color: 'var(--color-blue-primary)', fontWeight: 600, fontSize: '14px' }}>
                                Trade Tokens
                            </button>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '24px', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', backgroundColor: 'var(--color-wind)' }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px', marginTop: '8px' }}>
                            <div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>Karnataka Wind Phase II</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-dark-muted)' }}>
                                    <span style={{ backgroundColor: 'rgba(33,150,243,0.1)', color: 'var(--color-wind)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Wind</span>
                                    📍 Hubli, KA
                                </div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(0,230,118,0.1)', color: 'var(--color-chain-glow)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Activity size={14} /> Active
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-dark-border)', borderBottom: '1px solid var(--color-dark-border)', padding: '16px 0', marginBottom: '20px' }}>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)', marginBottom: '4px' }}>Tokens Owned</div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--color-chain-gold)' }}>1,240 WIND-KA-02</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)', marginBottom: '4px' }}>Current Value</div>
                                <div style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>₹ 62,000</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)', marginBottom: '4px' }}>ROI to Date</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: 'var(--color-chain-glow)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <ArrowUpRight size={24} /> +9.4%
                                </div>
                            </div>
                            <div style={{ textAlign: 'right', fontSize: '13px', color: 'var(--color-dark-muted)' }}>
                                Maturity Date: <span style={{ color: 'white', fontWeight: 500 }}>Oct 2028</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--color-dark-muted)', marginBottom: '8px' }}>
                                <span>Funding Progress</span>
                                <span>45%</span>
                            </div>
                            <div style={{ height: '8px', backgroundColor: 'var(--color-dark-border)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: '45%', background: 'linear-gradient(90deg, var(--color-primary), var(--color-blue-primary))', borderRadius: '4px' }}></div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button style={{ flex: 1, padding: '10px', borderRadius: '6px', backgroundColor: 'var(--color-primary)', color: 'white', fontWeight: 600, fontSize: '14px' }}>
                                Claim Revenue
                            </button>
                            <button style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid var(--color-blue-primary)', color: 'var(--color-blue-primary)', fontWeight: 600, fontSize: '14px' }}>
                                Trade Tokens
                            </button>
                        </div>
                    </div>
                </div>

                {/* Revenue Distribution History */}
                <div className="card" style={{ padding: '24px', borderRadius: '12px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '20px' }}>Revenue Distribution History</h3>

                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ color: 'var(--color-dark-muted)', fontSize: '12px', textTransform: 'uppercase', borderBottom: '1px solid var(--color-dark-border)' }}>
                                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Project</th>
                                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Date</th>
                                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Revenue Share</th>
                                <th style={{ padding: '12px 16px', fontWeight: 600 }}>TX Hash (Payout)</th>
                                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '16px', color: 'white', fontWeight: 500 }}>Karnataka Wind Phase II</td>
                                <td style={{ padding: '16px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>Feb 1, 2026</td>
                                <td style={{ padding: '16px', color: 'var(--color-chain-glow)', fontWeight: 600 }}>₹ 1,450</td>
                                <td style={{ padding: '16px' }}><AddressDisplay address="0x12aB34cD56Ef78Gh90Ij12kl34Mn56Op78Qr90St" showExternalLink /></td>
                                <td style={{ padding: '16px' }}><TransactionStatusChip status="confirmed" /></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '16px', color: 'white', fontWeight: 500 }}>Navi Mumbai Solar Grid</td>
                                <td style={{ padding: '16px', color: 'var(--color-dark-muted)', fontSize: '13px' }}>Jan 15, 2026</td>
                                <td style={{ padding: '16px', color: 'var(--color-chain-glow)', fontWeight: 600 }}>₹ 820</td>
                                <td style={{ padding: '16px' }}><AddressDisplay address="0xAbC89d4E2Bc4a1eb8c2D91fff12eCb3a2a8Bca93" showExternalLink /></td>
                                <td style={{ padding: '16px' }}><TransactionStatusChip status="confirmed" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ fontSize: '12px', color: 'var(--color-dark-muted)', fontStyle: 'italic', marginTop: '16px', textAlign: 'center' }}>
                        All distributions are automatic via smart contract — no manual processing.
                    </p>
                </div>

            </main>
        </div>
    );
}
