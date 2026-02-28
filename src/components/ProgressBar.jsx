import React from 'react';

export default function ProgressBar({ label, target, raised, showStats = true, type = 'gradient' }) {
    const percentage = Math.min((raised / target) * 100, 100);

    const getFillStyle = () => {
        if (type === 'gradient') {
            return { background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-blue-mid) 100%)' };
        }
        return { background: 'var(--color-primary)' };
    };

    return (
        <div style={{ width: '100%' }}>
            {showStats && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    <span>{label}</span>
                    <span style={{ color: 'var(--color-blue-primary)' }}>{Math.round(percentage)}%</span>
                </div>
            )}
            <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'var(--color-border)',
                borderRadius: '4px',
                overflow: 'hidden'
            }}>
                <div style={{
                    height: '100%',
                    width: `${percentage}%`,
                    borderRadius: '4px',
                    transition: 'width 1s ease-out',
                    ...getFillStyle()
                }}></div>
            </div>
            {showStats && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                    <span>₹{raised.toLocaleString()} raised</span>
                    <span>Target: ₹{target.toLocaleString()}</span>
                </div>
            )}
        </div>
    );
}
