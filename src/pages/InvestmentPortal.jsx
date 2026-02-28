import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import { ChevronDown, AlertTriangle, Target, Lock, TrendingUp } from 'lucide-react';

export default function InvestmentPortal() {
    return (
        <div style={{ paddingBottom: 'var(--section-padding)', backgroundColor: 'var(--color-blue-light)', minHeight: '100vh' }}>

            {/* SECTION 1: HERO */}
            <section style={{
                height: '320px',
                backgroundColor: 'var(--color-blue-primary)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <div>
                    <h1 className="hero-title" style={{ fontSize: '48px', marginBottom: '8px' }}>Fund the Future</h1>
                    <p style={{ fontSize: '18px', opacity: 0.9 }}>Invest directly into high-yield, blockchain-verified renewable energy projects.</p>
                </div>
            </section>

            {/* FILTER BAR */}
            <div style={{
                backgroundColor: 'var(--color-white)',
                borderBottom: '1px solid var(--color-border)',
                padding: '16px var(--spacing-lg)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '16px' }}>
                    <button style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Project Type <ChevronDown size={16} />
                    </button>
                    <button style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Region <ChevronDown size={16} />
                    </button>
                    <button style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Min Investment <ChevronDown size={16} />
                    </button>
                    <button style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        ROI Range <ChevronDown size={16} />
                    </button>
                </div>
            </div>

            {/* GRID */}
            <div style={{ maxWidth: '1200px', margin: 'var(--spacing-3xl) auto', padding: '0 var(--spacing-lg)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-2xl)' }}>

                    <Card style={{ padding: 0 }}>
                        <div style={{ height: '240px', background: 'url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80") center/cover' }}></div>
                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                                <div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <Badge type="wind">Wind</Badge>
                                        <span className="label" style={{ color: 'var(--color-text-secondary)', alignSelf: 'center' }}>Hubli, KA</span>
                                    </div>
                                    <h3 className="card-title">Karnataka Wind Expansion Phase II</h3>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <Badge type="blue" style={{ fontSize: '18px', padding: '6px 12px', fontWeight: 800 }}>12.5% ROI</Badge>
                                </div>
                            </div>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                                Help scale an existing 50MW wind farm to 100MW. Providing power to over 40,000 households across the state.
                            </p>
                            <ProgressBar label="Funding Progress" raised={4500000} target={10000000} type="gradient" />
                            <Button variant="primary" style={{ marginTop: 'var(--spacing-lg)', width: '100%' }}>Invest Now</Button>
                        </div>
                    </Card>

                    <Card style={{ padding: 0 }}>
                        <div style={{ height: '240px', background: 'url("https://images.unsplash.com/photo-1548611716-e3a514d24602?w=800&q=80") center/cover' }}></div>
                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                                <div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <Badge type="solar">Solar</Badge>
                                        <span className="label" style={{ color: 'var(--color-text-secondary)', alignSelf: 'center' }}>Mumbai, MH</span>
                                    </div>
                                    <h3 className="card-title">Navi Mumbai Solar Grid</h3>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <Badge type="blue" style={{ fontSize: '18px', padding: '6px 12px', fontWeight: 800 }}>9.8% ROI</Badge>
                                </div>
                            </div>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                                A major rooftop solar initiative covering 15 commercial buildings in Navi Mumbai, generating 10MW distributed power.
                            </p>
                            <ProgressBar label="Funding Progress" raised={8500000} target={12000000} type="gradient" />
                            <Button variant="primary" style={{ marginTop: 'var(--spacing-lg)', width: '100%' }}>Invest Now</Button>
                        </div>
                    </Card>

                </div>
            </div>

            {/* HOW INVESTMENT WORKS */}
            <section style={{ backgroundColor: 'var(--color-blue-primary)', color: 'white', padding: 'var(--section-padding) var(--spacing-lg)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ marginBottom: 'var(--spacing-3xl)' }}>How Smart Investments Work</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                <Target size={32} color="var(--color-accent-light)" />
                            </div>
                            <h3 className="card-subtitle" style={{ marginBottom: '8px' }}>1. Select High-Yield Projects</h3>
                            <p style={{ opacity: 0.8, fontSize: '15px' }}>Browse heavily vetted, risk-assessed renewable projects targeting substantial regional impact.</p>
                        </div>
                        <div>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                <Lock size={32} color="var(--color-accent-light)" />
                            </div>
                            <h3 className="card-subtitle" style={{ marginBottom: '8px' }}>2. Smart Contract Funding</h3>
                            <p style={{ opacity: 0.8, fontSize: '15px' }}>Your funds are locked in secure smart contracts, released only when project milestones are verified.</p>
                        </div>
                        <div>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                <TrendingUp size={32} color="var(--color-accent-light)" />
                            </div>
                            <h3 className="card-subtitle" style={{ marginBottom: '8px' }}>3. Real-time Dividend Yields</h3>
                            <p style={{ opacity: 0.8, fontSize: '15px' }}>As the project generates energy and revenue, returns flow automatically into your GreenGrid wallet.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RISK DISCLAIMER */}
            <div style={{ maxWidth: '1200px', margin: 'var(--spacing-2xl) auto', padding: '0 var(--spacing-lg)' }}>
                <div style={{ backgroundColor: 'var(--color-blue-light)', borderLeft: '4px solid var(--color-blue-accent)', padding: '16px', display: 'flex', gap: '16px', borderRadius: '0 8px 8px 0' }}>
                    <AlertTriangle color="var(--color-blue-accent)" style={{ flexShrink: 0 }} />
                    <p style={{ fontSize: '13px', color: 'var(--color-text-primary)' }}>
                        <strong>Investment Disclaimer:</strong> All investments carry inherent risks. The projected ROI figures are estimates based on expected energy generation and current market rates. GreenGrid employs blockchain-based verification but cannot guarantee minimum returns. Please review the full project prospectus before committing capital.
                    </p>
                </div>
            </div>

        </div>
    );
}
