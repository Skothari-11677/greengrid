import React, { useState } from 'react';
import NFTCard from '../components/NFTCard';

const MOCK_NFTS = [
    { id: '#CC-2024-00847', type: 'solar', title: 'Solar Rooftop Offset', location: 'Jaipur, Rajasthan', co2kg: 247, date: 'Feb 2026', status: 'active' },
    { id: '#CC-2023-11204', type: 'wind', title: 'Wind Farm Expansion', location: 'Hubli, Karnataka', co2kg: 1850, date: 'Nov 2025', status: 'active' },
    { id: '#CC-2023-09411', type: 'biogas', title: 'Agro-Waste Conversion', location: 'Punjab', co2kg: 520, date: 'Sep 2025', status: 'active' },
    { id: '#CC-2023-04222', type: 'solar', title: 'Navi Mumbai Grid', location: 'Mumbai, MH', co2kg: 410, date: 'Apr 2025', status: 'retired' },
    { id: '#CC-2022-12005', type: 'wind', title: 'Coastal Wind Initiative', location: 'Tamil Nadu', co2kg: 2200, date: 'Dec 2024', status: 'retired' },
];

export default function NFTGallery() {
    const [theme, setTheme] = useState('theme-dark');
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'Active', 'Retired', 'For Sale'];

    const filteredNFTs = MOCK_NFTS.filter(nft => {
        if (filter === 'All') return true;
        if (filter === 'Active') return nft.status === 'active';
        if (filter === 'Retired') return nft.status === 'retired';
        return true; // For Sale mock logic
    });

    return (
        <div className={theme} style={{ minHeight: '100vh', paddingBottom: 'var(--section-padding)', backgroundColor: 'var(--color-dark-surface)' }}>

            {/* Header */}
            <div style={{ borderBottom: '1px solid var(--color-dark-border)', padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--color-dark-text)', marginBottom: '8px' }}>Your Carbon Credits</h1>
                        <p style={{ color: 'var(--color-dark-muted)', fontSize: '16px', maxWidth: '600px' }}>
                            Each NFT represents a verified carbon offset event. Retire to claim. Trade to earn.
                        </p>
                    </div>

                    <button
                        onClick={() => setTheme(theme === 'theme-dark' ? 'theme-light' : 'theme-dark')}
                        style={{
                            padding: '8px 16px', borderRadius: '100px', border: '1px solid var(--color-dark-border)',
                            color: 'var(--color-dark-text)', fontSize: '13px', fontWeight: 600,
                            backgroundColor: 'var(--color-dark-card)'
                        }}
                    >
                        {theme === 'theme-dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--spacing-lg)' }}>

                {/* Total Impact Bar */}
                <div className="card" style={{
                    marginTop: '-40px', marginBottom: 'var(--spacing-2xl)',
                    padding: '24px 32px', borderRadius: '12px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10
                }}>
                    <div>
                        <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '8px' }}>Your Total Carbon Impact</div>
                        <div style={{ display: 'flex', gap: '48px' }}>
                            <div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--color-chain-glow)' }}>4,820</div>
                                <div style={{ fontSize: '14px', color: 'var(--color-dark-muted)' }}>kg CO₂ Offset</div>
                            </div>
                            <div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--color-chain-pulse)' }}>18</div>
                                <div style={{ fontSize: '14px', color: 'var(--color-dark-muted)' }}>Credits Owned</div>
                            </div>
                            <div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--color-chain-gold)' }}>3</div>
                                <div style={{ fontSize: '14px', color: 'var(--color-dark-muted)' }}>Credits Retired</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                style={{
                                    padding: '6px 16px',
                                    borderRadius: '100px',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    transition: 'all 0.2s',
                                    backgroundColor: filter === f ? 'var(--color-primary)' : 'transparent',
                                    color: filter === f ? 'white' : 'var(--color-dark-muted)',
                                    border: filter === f ? '1px solid var(--color-primary)' : '1px solid var(--color-dark-border)'
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button style={{ padding: '8px 16px', borderRadius: '6px', backgroundColor: 'var(--color-primary)', color: 'white', fontWeight: 600, fontSize: '14px' }}>
                            Retire Selected
                        </button>
                        <button style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid var(--color-blue-primary)', color: 'var(--color-blue-primary)', fontWeight: 600, fontSize: '14px' }}>
                            List for Sale
                        </button>
                    </div>
                </div>

                {/* NFT Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)' }}>
                    {filteredNFTs.map((nft) => (
                        <NFTCard key={nft.id} {...nft} />
                    ))}
                </div>

            </div>
        </div>
    );
}
