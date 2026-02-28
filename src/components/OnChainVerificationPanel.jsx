import React, { useState } from 'react';
import { ExternalLink, Copy, ChevronDown, ChevronUp } from 'lucide-react';

export default function OnChainVerificationPanel({ isDark = false }) {
    const [expanded, setExpanded] = useState(false);

    // Use props for theme if available, otherwise fallback to CSS variables (assumes dark mode context usually)
    const bg = isDark ? 'var(--color-dark-surface)' : 'var(--color-dark-surface)';
    const border = isDark ? 'var(--color-dark-border)' : 'var(--color-dark-border)';
    const textPrimary = 'white'; // Always dark aesthetic for blockchain proof
    const textMuted = 'var(--color-dark-muted)';

    return (
        <div style={{ marginTop: '16px', borderTop: `1px solid ${border}`, paddingTop: '16px' }}>

            {/* Collapsed Toggle */}
            <button
                onClick={() => setExpanded(!expanded)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '8px',
                    borderRadius: '6px',
                    backgroundColor: expanded ? bg : 'transparent',
                    transition: 'background-color 0.2s'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-polygon-purple)', boxShadow: '0 0 8px var(--color-polygon-purple)' }}></div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: isDark ? 'white' : 'var(--color-text-primary)' }}>Verified on Polygon Blockchain</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-blue-mid)', fontSize: '13px', fontWeight: 600 }}>
                    View Proof {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
            </button>

            {/* Expanded Panel */}
            <div style={{
                maxHeight: expanded ? '400px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out',
                opacity: expanded ? 1 : 0
            }}>
                <div style={{
                    backgroundColor: bg,
                    borderRadius: '12px',
                    padding: '24px',
                    marginTop: '12px',
                    display: 'grid',
                    gridTemplateColumns: '3fr 2fr',
                    gap: '24px',
                    color: textPrimary
                }}>

                    {/* Left Column */}
                    <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: textMuted, textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
                            SMART CONTRACT DETAILS
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                            <span style={{ fontSize: '12px', color: textMuted, display: 'block', marginBottom: '4px' }}>Contract Address</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-chain-glow)' }}>
                                0x7f3A...4e9B <ExternalLink size={14} color={textMuted} style={{ cursor: 'pointer' }} />
                            </div>
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                            <span style={{ fontSize: '12px', color: textMuted, display: 'block', marginBottom: '4px' }}>Last TX Hash</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-chain-pulse)' }}>
                                0xab12...ff34 <Copy size={14} color={textMuted} style={{ cursor: 'pointer' }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '24px' }}>
                            <div>
                                <span style={{ fontSize: '12px', color: textMuted, display: 'block', marginBottom: '4px' }}>Block</span>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: textMuted }}>#46,832,104</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '12px', color: textMuted, display: 'block', marginBottom: '4px' }}>Timestamp</span>
                                <span style={{ fontSize: '13px', color: 'var(--color-dark-text)' }}>Feb 26, 2026 · 14:32 IST</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: `1px solid ${border}`, paddingLeft: '24px' }}>

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <span style={{ backgroundColor: 'var(--color-polygon-purple)', color: 'white', padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>POLYGON MAINNET</span>
                            <span style={{ backgroundColor: '#375BD2', color: 'white', padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>CHAINLINK VERIFIED</span>
                        </div>

                        <div>
                            <span style={{ fontSize: '12px', color: textMuted, display: 'block', marginBottom: '4px' }}>IoT Meter ID</span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: textMuted }}>METER-RJ-00472</span>
                        </div>

                        <div>
                            <span style={{ fontSize: '12px', color: textMuted, display: 'block', marginBottom: '4px' }}>Verified Reading</span>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: 'var(--color-chain-glow)' }}>247.3 <span style={{ fontSize: '16px' }}>kWh</span></span>
                        </div>

                        <div>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                backgroundColor: 'rgba(0,230,118,0.12)', color: 'var(--color-chain-glow)', border: '1px solid rgba(0,230,118,0.3)',
                                padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase'
                            }}>
                                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-chain-glow)', boxShadow: '0 0 6px var(--color-chain-glow)' }}></span>
                                CONFIRMED
                            </span>
                        </div>

                    </div>

                    {/* Bottom Strip */}
                    <div style={{ gridColumn: 'span 2', borderTop: `1px solid ${border}`, paddingTop: '16px', marginTop: '8px' }}>
                        <p style={{ fontSize: '12px', color: textMuted, fontStyle: 'italic', margin: 0 }}>
                            This listing is governed by a smart contract. No intermediary controls this trade. Validated by cryptographic proof.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}
