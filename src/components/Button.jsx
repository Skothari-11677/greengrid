import React from 'react';

export default function Button({
    children,
    variant = 'primary',
    onClick,
    className = '',
    style = {}
}) {
    const baseStyle = {
        borderRadius: '6px',
        padding: '12px 28px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '14px',
        textTransform: 'uppercase',
        transition: 'all 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        ...style
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            border: 'none',
        },
        'secondary-green': {
            backgroundColor: 'transparent',
            color: 'var(--color-primary)',
            border: '2px solid var(--color-primary)',
        },
        'secondary-blue': {
            backgroundColor: 'transparent',
            color: 'var(--color-blue-primary)',
            border: '2px solid var(--color-blue-primary)',
        },
        white: {
            backgroundColor: 'var(--color-white)',
            color: 'var(--color-primary)',
            border: 'none',
        }
    };

    const getHoverStyle = (v) => {
        switch (v) {
            case 'primary': return { backgroundColor: 'var(--color-primary-hover)' };
            case 'secondary-green': return { backgroundColor: 'var(--color-accent-light)' };
            case 'secondary-blue': return { backgroundColor: 'var(--color-blue-light)' };
            case 'white': return { backgroundColor: 'var(--color-bg)' };
            default: return {};
        }
    };

    const handleMouseOver = (e) => {
        const hoverStyles = getHoverStyle(variant);
        for (const key in hoverStyles) {
            e.currentTarget.style[key] = hoverStyles[key];
        }
    };

    const handleMouseOut = (e) => {
        const normalStyles = variants[variant];
        for (const key in normalStyles) {
            if (key === 'backgroundColor' && normalStyles[key] === 'transparent') {
                e.currentTarget.style[key] = 'transparent';
            } else {
                e.currentTarget.style[key] = normalStyles[key];
            }
        }
    };

    return (
        <button
            style={{ ...baseStyle, ...variants[variant] }}
            className={className}
            onClick={onClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {children}
        </button>
    );
}
