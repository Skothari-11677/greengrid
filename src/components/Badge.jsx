import React from 'react';

export default function Badge({ children, type = 'default', style = {} }) {
    const getBadgeStyle = () => {
        switch (type) {
            case 'solar':
                return { backgroundColor: '#FFF8E1', color: 'var(--color-solar)' }; // Amber
            case 'wind':
                return { backgroundColor: 'var(--color-blue-light)', color: 'var(--color-blue-mid)' }; // Blue
            case 'biogas':
                return { backgroundColor: 'var(--color-accent-light)', color: 'var(--color-biogas)' }; // Emerald
            case 'blue':
                return { backgroundColor: 'var(--color-blue-light)', color: 'var(--color-blue-primary)' }; // Trust/Investment
            case 'default':
            default:
                return { backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }; // Green
        }
    };

    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: '4px',
            padding: '4px 10px',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '12px',
            ...getBadgeStyle(),
            ...style
        }}>
            {children}
        </span>
    );
}
