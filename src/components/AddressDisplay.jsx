import React, { useState } from 'react';
import { Copy, ExternalLink, Check } from 'lucide-react';

export default function AddressDisplay({ address, showExternalLink = false }) {
    const [copied, setCopied] = useState(false);

    // Default block address: "0x1234567890abcdef1234567890abcdef12345678" -> "0x1234...5678"
    const truncateAddress = (addr) => {
        if (!addr) return '';
        return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: copied ? 'var(--color-chain-glow)' : 'var(--color-dark-muted)',
                transition: 'color 0.2s',
            }}>
                {truncateAddress(address)}
            </span>

            <button onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', color: copied ? 'var(--color-chain-glow)' : 'var(--color-dark-muted)' }}>
                {copied ? <Check size={14} /> : <Copy size={14} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-chain-pulse)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark-muted)'} />}
            </button>

            {showExternalLink && (
                <a href={`https://etherscan.io/address/${address}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: 'var(--color-dark-muted)' }}>
                    <ExternalLink size={14} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-chain-pulse)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark-muted)'} />
                </a>
            )}
        </div>
    );
}
