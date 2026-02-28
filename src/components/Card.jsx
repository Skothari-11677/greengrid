import React from 'react';

export default function Card({
    children,
    className = '',
    style = {},
    hoverEffect = true,
    leftBorderColor = null
}) {
    const baseStyle = {
        backgroundColor: 'var(--color-white)',
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        padding: 'var(--spacing-lg)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        position: 'relative',
        overflow: 'hidden',
        ...style
    };

    if (leftBorderColor) {
        baseStyle.borderLeft = `4px solid ${leftBorderColor}`;
    }

    return (
        <div
            className={`${hoverEffect ? 'hover-card' : ''} ${className}`}
            style={baseStyle}
        >
            {children}
        </div>
    );
}
