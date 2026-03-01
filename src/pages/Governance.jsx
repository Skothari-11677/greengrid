import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, Leaf, Users } from 'lucide-react';

const MOCK_PROPOSALS = [
    { id: '#GIP-042', title: 'Increase Solar Subsidies for Tier 2 Cities', status: 'active', forVotes: 65, againstVotes: 35, totalVotes: 1240, endsIn: '3 days', quorum: '67% reached', voted: null },
    { id: '#GIP-041', title: 'Integrate New Chainlink Oracle for Biogas Verification', status: 'active', forVotes: 88, againstVotes: 12, totalVotes: 3100, endsIn: '1 day', quorum: '140% reached', voted: 'for' },
];

export default function Governance() {
    const [proposals, setProposals] = useState(MOCK_PROPOSALS);
    const [animTrigger, setAnimTrigger] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        const timer = setTimeout(() => setAnimTrigger(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleVote = (id, direction) => {
        setProposals(current =>
            current.map(p => {
                if (p.id === id) {
                    // Dummy logic to update state locally
                    let newFor = p.forVotes;
                    let newAgainst = p.againstVotes;
                    if (direction === 'for') newFor += 1;
                    if (direction === 'against') newAgainst += 1;

                    return { ...p, voted: direction, forVotes: newFor, againstVotes: newAgainst, totalVotes: p.totalVotes + 1 };
                }
                return p;
            })
        );
    };

    return (
        <div className="theme-dark" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-dark-surface)' }}>
            {/* Sidebar Placeholder */}
            <aside style={{ width: '240px', backgroundColor: 'var(--color-dark-card)', borderRight: '1px solid var(--color-dark-border)', display: 'flex', flexDirection: 'column', padding: 'var(--spacing-lg)' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px', color: 'white', marginBottom: '32px' }}>Web3 Hub</h2>
                <div style={{ color: 'var(--color-dark-muted)', fontSize: '14px', marginBottom: '16px' }}>DAO Voting</div>
            </aside>

            <main style={{ flex: 1, padding: 'var(--spacing-2xl)', overflowY: 'auto' }}>

                <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>GRID Governance</h1>
                    <p style={{ color: 'var(--color-ethereum-blue)', fontSize: '18px', fontWeight: 600 }}>Your tokens = Your vote. Shape the future of GreenGrid.</p>
                </div>

                {/* Token Balance Card */}
                <div className="card" style={{ padding: '32px', borderRadius: '12px', borderLeft: '4px solid var(--color-ethereum-blue)', marginBottom: 'var(--spacing-2xl)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
                    <div style={{ gridColumn: 'span 1' }}>
                        <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>GRID Balance</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', fontWeight: 800, color: 'var(--color-ethereum-blue)', lineHeight: 1 }}>3,200</div>
                    </div>

                    <div style={{ gridColumn: 'span 1', borderLeft: '1px solid var(--color-dark-border)', paddingLeft: 'var(--spacing-xl)' }}>
                        <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Voting Power</div>
                        <div style={{ fontSize: '24px', fontWeight: 700, color: 'white' }}>3,200 votes</div>
                    </div>

                    <div style={{ gridColumn: 'span 1', borderLeft: '1px solid var(--color-dark-border)', paddingLeft: 'var(--spacing-xl)' }}>
                        <div style={{ fontSize: '13px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Rank</div>
                        <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-chain-gold)' }}>Top 12%</div>
                    </div>

                    <div style={{ gridColumn: 'span 1', textAlign: 'right' }}>
                        <a href="#" style={{ color: 'var(--color-chain-pulse)', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>How to earn more GRID &rarr;</a>
                    </div>
                </div>

                {/* How to Earn */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-3xl)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                        <ArrowLeftRight size={24} color="var(--color-dark-muted)" />
                        <div>
                            <div style={{ fontSize: '14px', color: 'white', fontWeight: 500 }}>Trade energy</div>
                            <div style={{ fontSize: '13px', color: 'var(--color-chain-gold)', fontWeight: 600 }}>+5 GRID per trade</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                        <Leaf size={24} color="var(--color-dark-muted)" />
                        <div>
                            <div style={{ fontSize: '14px', color: 'white', fontWeight: 500 }}>Buy green energy</div>
                            <div style={{ fontSize: '13px', color: 'var(--color-chain-gold)', fontWeight: 600 }}>+2 GRID per kWh</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                        <Users size={24} color="var(--color-dark-muted)" />
                        <div>
                            <div style={{ fontSize: '14px', color: 'white', fontWeight: 500 }}>Refer a producer</div>
                            <div style={{ fontSize: '13px', color: 'var(--color-chain-gold)', fontWeight: 600 }}>+100 GRID</div>
                        </div>
                    </div>
                </div>

                {/* Active Proposals */}
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: 'var(--spacing-xl)' }}>Active Proposals</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                    {proposals.map(prop => {
                        const forPct = Math.round((prop.forVotes / (prop.forVotes + prop.againstVotes)) * 100) || 0;
                        const againstPct = 100 - forPct;

                        return (
                            <div key={prop.id} className="card" style={{ padding: '24px', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{
                                            backgroundColor: 'rgba(0,230,118,0.12)', color: 'var(--color-chain-glow)', border: '1px solid rgba(0,230,118,0.3)',
                                            padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase'
                                        }}>
                                            <span className="glow-active" style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-chain-glow)', marginRight: '6px' }}></span>
                                            VOTING OPEN
                                        </span>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-dark-muted)' }}>{prop.id}</span>
                                    </div>
                                </div>

                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{prop.title}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--color-dark-muted)', marginBottom: '24px' }}>
                                    This proposal aims to reallocate protocol revenue towards subsidizing new solar installations in emerging markets.
                                    <a href="#" style={{ color: 'var(--color-chain-pulse)', marginLeft: '4px', textDecoration: 'none' }}>Read full text.</a>
                                </p>

                                {/* Voting Bar */}
                                <div style={{ marginBottom: '16px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                                        <span style={{ color: 'var(--color-chain-glow)' }}>For: {forPct}%</span>
                                        <span style={{ color: 'var(--color-chain-red)' }}>Against: {againstPct}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '12px', backgroundColor: 'var(--color-dark-border)', borderRadius: '8px', display: 'flex', overflow: 'hidden' }}>
                                        <div style={{
                                            height: '100%', width: animTrigger ? `${forPct}%` : '0%',
                                            background: 'linear-gradient(90deg, var(--color-chain-glow), var(--color-primary))',
                                            transition: 'width 1s cubic-bezier(0.2, 0.8, 0.2, 1)'
                                        }}></div>
                                        <div style={{
                                            height: '100%', width: animTrigger ? `${againstPct}%` : '0%',
                                            background: 'linear-gradient(90deg, #C62828, var(--color-chain-red))',
                                            transition: 'width 1s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                            marginLeft: 'auto'
                                        }}></div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: 'var(--color-dark-muted)', marginBottom: '24px', borderBottom: '1px solid var(--color-dark-border)', paddingBottom: '24px' }}>
                                    <span>{prop.totalVotes.toLocaleString()} votes cast</span>
                                    <span>Ends in {prop.endsIn}</span>
                                    <span>Quorum: {prop.quorum}</span>
                                </div>

                                {/* Vote Actions */}
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    {prop.voted ? (
                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            color: prop.voted === 'for' ? 'var(--color-chain-glow)' : 'var(--color-chain-red)',
                                            fontWeight: 600, fontSize: '14px',
                                            padding: '10px 16px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px'
                                        }}>
                                            You voted: {prop.voted.toUpperCase()} ✓
                                        </div>
                                    ) : (
                                        <>
                                            <button onClick={() => handleVote(prop.id, 'for')} style={{ padding: '10px 24px', borderRadius: '6px', backgroundColor: 'rgba(0,230,118,0.1)', color: 'var(--color-chain-glow)', border: '1px solid var(--color-chain-glow)', fontWeight: 600, fontSize: '14px', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0,230,118,0.2)'} onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0,230,118,0.1)'}>
                                                Vote For
                                            </button>
                                            <button onClick={() => handleVote(prop.id, 'against')} style={{ padding: '10px 24px', borderRadius: '6px', backgroundColor: 'transparent', color: 'var(--color-chain-red)', border: '1px solid var(--color-chain-red)', fontWeight: 600, fontSize: '14px', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,82,82,0.1)'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                                                Vote Against
                                            </button>
                                            <button style={{ padding: '10px 24px', borderRadius: '6px', backgroundColor: 'transparent', color: 'var(--color-dark-muted)', border: '1px solid var(--color-dark-border)', fontWeight: 600, fontSize: '14px', marginLeft: 'auto', hover: 'color: white' }}>
                                                Abstain
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </main>
        </div>
    );
}
