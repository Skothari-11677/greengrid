import React from 'react';

export default function TransactionStatusChip({ status }) {

    if (status === 'confirmed') {
        return (
            <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                backgroundColor: 'rgba(0,230,118,0.12)', color: 'var(--color-chain-glow)', border: '1px solid rgba(0,230,118,0.3)',
                padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase'
            }}>
                <span className="glow-active" style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-chain-glow)' }}></span>
                CONFIRMED
            </span>
        );
    }

    if (status === 'pending') {
        return (
            <span className="shimmer-bg" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                color: 'var(--color-chain-pulse)', border: '1px solid rgba(64,196,255,0.3)',
                padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase'
            }}>
                PENDING...
            </span>
        );
    }

    if (status === 'failed') {
        return (
            <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                backgroundColor: 'rgba(255,82,82,0.12)', color: 'var(--color-chain-red)', border: '1px solid rgba(255,82,82,0.3)',
                padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase'
            }}>
                FAILED
            </span>
        );
    }

    return null;
}
