import React from 'react';
import { Sun, Wind, Leaf } from 'lucide-react';
import Badge from './Badge';

export default function NFTCard({ id, type, title, location, co2kg, date, status = 'active' }) {
    const isRetired = status === 'retired';

    // Select appropriate icon based on energy type
    const getIcon = () => {
        switch (type) {
            case 'solar': return <Sun size={48} color="white" />;
            case 'wind': return <Wind size={48} color="white" />;
            case 'biogas': return <Leaf size={48} color="white" />;
            default: return <Leaf size={48} color="white" />;
        }
    };

    return (
        <div className="holo-card" style={{
            backgroundColor: 'var(--color-dark-card)',
            borderRadius: '12px',
            padding: '24px',
            position: 'relative',
            opacity: isRetired ? 0.5 : 1,
            overflow: 'hidden'
        }}>

            {/* Status Badge Top Right */}
            <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
                {status === 'active' ? (
                    <span style={{
                        backgroundColor: 'rgba(0,230,118,0.12)', color: 'var(--color-chain-glow)', border: '1px solid rgba(0,230,118,0.3)',
                        padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
                        boxShadow: '0 0 8px rgba(0,230,118,0.2)'
                    }}>Active</span>
                ) : (
                    <span style={{
                        backgroundColor: 'rgba(139,148,158,0.12)', color: 'var(--color-dark-muted)', border: '1px solid rgba(139,148,158,0.3)',
                        padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase'
                    }}>Retired</span>
                )}
            </div>

            {/* Retired Watermark overlay */}
            {isRetired && (
                <div style={{
                    position: 'absolute', top: '40px', left: '-20px', width: '150%', textAlign: 'center',
                    transform: 'rotate(-45deg)', transformOrigin: 'center center', zIndex: 5, pointerEvents: 'none',
                    fontFamily: 'var(--font-heading)', fontSize: '48px', fontWeight: 800, color: 'rgba(139,148,158,0.15)', letterSpacing: '0.2em'
                }}>
                    RETIRED
                </div>
            )}

            {/* Gradient Header Block */}
            <div style={{
                height: '120px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-blue-primary))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Subtle Circuit Overlay Pattern */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'radial-gradient(circle at center, transparent 40%, rgba(255,255,255,0.4) 45%, transparent 50%), radial-gradient(circle at 20% 80%, transparent 20%, rgba(255,255,255,0.3) 25%, transparent 30%)', backgroundSize: '40px 40px' }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    {getIcon()}
                </div>
            </div>

            {/* Details section */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-dark-muted)', marginBottom: '4px' }}>
                    {id}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
                    {title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-dark-muted)', marginBottom: '16px' }}>
                    📍 {location}
                </p>

                {/* Micro Stats */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderTop: '1px solid var(--color-dark-border)', borderBottom: '1px solid var(--color-dark-border)', padding: '12px 0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '11px', color: 'var(--color-dark-muted)', textTransform: 'uppercase' }}>Offset</span>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: 'var(--color-chain-glow)' }}>{co2kg} kg CO₂</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'center' }}>
                        <span style={{ fontSize: '11px', color: 'var(--color-dark-muted)', textTransform: 'uppercase' }}>Minted</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'white' }}>{date}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'right' }}>
                        <span style={{ fontSize: '11px', color: 'var(--color-dark-muted)', textTransform: 'uppercase' }}>Oracle</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-chain-pulse)' }}>Chainlink ✓</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button disabled={isRetired} style={{
                        flex: 1, padding: '8px', borderRadius: '6px', fontSize: '13px', fontWeight: 600,
                        border: '1px solid var(--color-primary)', color: 'var(--color-primary)',
                        opacity: isRetired ? 0.5 : 1, cursor: isRetired ? 'not-allowed' : 'pointer'
                    }}>
                        Retire NFT
                    </button>
                    <button disabled={isRetired} style={{
                        flex: 1, padding: '8px', borderRadius: '6px', fontSize: '13px', fontWeight: 600,
                        border: '1px solid var(--color-blue-primary)', color: 'var(--color-blue-primary)',
                        opacity: isRetired ? 0.5 : 1, cursor: isRetired ? 'not-allowed' : 'pointer'
                    }}>
                        List for Sale
                    </button>
                </div>
            </div>

        </div>
    );
}
