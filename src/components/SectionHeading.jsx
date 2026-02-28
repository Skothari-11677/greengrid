import React from 'react';

export default function SectionHeading({ title, style = {}, decoratorColor = 'var(--color-gold)' }) {
    return (
        <div style={{ marginBottom: 'var(--spacing-xl)', ...style }}>
            <h2 className="section-title">{title}</h2>
            <div style={{
                width: '48px',
                height: '3px',
                backgroundColor: decoratorColor,
                marginTop: '12px',
            }}></div>
        </div>
    );
}
