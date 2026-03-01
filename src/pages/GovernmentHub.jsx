import React, { useState } from 'react';
import { Shield, FileText, AlertTriangle, Search, Download, ChevronDown, Send, Clock, CheckCircle, XCircle, Eye, Filter, ArrowUpDown } from 'lucide-react';

// ── Mock Data ──────────────────────────────────────────────

const MOCK_TRANSACTIONS = [
    { id: 1, hash: '0xabc1...def2', from: '0x1A2b...3c4D', fromLabel: 'Surya Tech Park', to: '0x9xF2...1a3E', toLabel: 'Consumer #42', type: 'Trade', kwh: 520, value: 0.52, timestamp: '2026-02-28 14:32', flagged: true, flagReason: 'Unusually high volume' },
    { id: 2, hash: '0x77f2...99a0', from: '0x3a4F...8c2D', fromLabel: 'Aura Wind Co.', to: '0x5b3C...4f9A', toLabel: 'Consumer #18', type: 'Trade', kwh: 120, value: 0.12, timestamp: '2026-02-28 13:15', flagged: false },
    { id: 3, hash: '0xcc84...ee21', from: '0x88c2...11b4', fromLabel: 'GreenAgro Energy', to: '0x70B2...C8D1', toLabel: 'Consumer #7', type: 'Trade', kwh: 85, value: 0.085, timestamp: '2026-02-28 11:48', flagged: false },
    { id: 4, hash: '0x00f1...44a7', from: '0xf39F...2266', fromLabel: 'Rooftop Solarix', to: '0x3C44...93BC', toLabel: 'Consumer #55', type: 'Trade', kwh: 1200, value: 1.2, timestamp: '2026-02-27 22:01', flagged: true, flagReason: 'Transaction > 1 ETH threshold' },
    { id: 5, hash: '0xd4e5...ab12', from: '0x5b3C...4f9A', fromLabel: 'Vayu Farms', to: '0x1A2b...3c4D', toLabel: 'Consumer #31', type: 'Trade', kwh: 200, value: 0.2, timestamp: '2026-02-27 18:44', flagged: false },
    { id: 6, hash: '0x91a2...cd34', from: '0x70B2...C8D1', fromLabel: 'Waste2Watt', to: '0x88c2...11b4', toLabel: 'Consumer #63', type: 'Subscription', kwh: 300, value: 0.3, timestamp: '2026-02-27 15:22', flagged: false },
    { id: 7, hash: '0xef56...78ab', from: '0x3C44...93BC', fromLabel: 'Solar Producer #8', to: '0xf39F...2266', toLabel: 'B2B Investment', type: 'Investment', kwh: 0, value: 2.5, timestamp: '2026-02-27 10:10', flagged: true, flagReason: 'Large B2B transfer flagged for review' },
    { id: 8, hash: '0x12cd...ef90', from: '0x9xF2...1a3E', fromLabel: 'Hydro Grid Co.', to: '0x5b3C...4f9A', toLabel: 'Consumer #12', type: 'Trade', kwh: 450, value: 0.45, timestamp: '2026-02-26 09:33', flagged: false },
];

const MOCK_NOTICES = [
    { id: 1, title: 'New Solar Tariff Rates Effective April 2026', category: 'tariff', priority: 'critical', content: 'All solar energy producers must update their pricing to comply with the new government-mandated tariff ceiling of ₹4.50/kWh for residential consumers. Non-compliance will result in platform suspension.', publishedAt: '2026-02-28', author: 'Ministry of New & Renewable Energy' },
    { id: 2, title: 'KYC Compliance Deadline Extended', category: 'compliance', priority: 'warning', content: 'The deadline for mandatory KYC verification for all producers with >500 kWh monthly output has been extended to March 31, 2026. Producers must submit documentation through the portal.', publishedAt: '2026-02-25', author: 'CERC Compliance Division' },
    { id: 3, title: 'Green Energy Certificate Program Launch', category: 'policy', priority: 'info', content: 'The government is launching a new Green Energy Certificate (GEC) program. Producers meeting sustainability standards will receive verified certificates, boosting consumer trust and enabling premium pricing.', publishedAt: '2026-02-20', author: 'Ministry of Power' },
    { id: 4, title: 'Anti-Fraud Monitoring Enhanced', category: 'alert', priority: 'warning', content: 'Advanced AI-based fraud detection has been deployed on the GreenGrid network. Suspicious transaction patterns will be automatically flagged and reported to the oversight committee.', publishedAt: '2026-02-18', author: 'GreenGrid Security Division' },
];

const MOCK_DISPUTES = [
    {
        id: 'TKT-042', type: 'billing', reporter: '0x9xF2...1a3E', reporterLabel: 'Consumer #42', against: '0x1A2b...3c4D', againstLabel: 'Surya Tech Park', status: 'under_review', description: 'Charged for 520 kWh but smart meter shows only 380 kWh consumed. Requesting refund for 140 kWh overcharge.', evidence: '0xabc1...def2', createdAt: '2026-02-28', assignedTo: 'Inspector Kumar', messages: [
            { author: 'Consumer #42', text: 'My meter reading clearly shows 380 kWh. Please investigate.', time: '2026-02-28 14:45' },
            { author: 'Inspector Kumar', text: 'Under investigation. We have requested on-chain verification of the usage data.', time: '2026-02-28 16:20' },
        ]
    },
    { id: 'TKT-039', type: 'fraud', reporter: '0x70B2...C8D1', reporterLabel: 'Consumer #7', against: '0x88c2...11b4', againstLabel: 'Unknown Producer', status: 'open', description: 'A producer listing energy at 0.0001 ETH/kWh — suspiciously low pricing that may indicate fraudulent activity or energy siphoning.', evidence: '0x00f1...44a7', createdAt: '2026-02-27', assignedTo: null, messages: [] },
    {
        id: 'TKT-035', type: 'quality', reporter: '0x5b3C...4f9A', reporterLabel: 'Consumer #18', against: '0x3a4F...8c2D', againstLabel: 'Aura Wind Co.', status: 'resolved', description: 'Energy supply intermittent for 3 days. Contract guarantees 99.5% uptime. Requesting compensation.', evidence: '0x77f2...99a0', createdAt: '2026-02-22', assignedTo: 'Inspector Sharma', messages: [
            { author: 'Consumer #18', text: 'Supply dropped to 60% for 3 consecutive days.', time: '2026-02-22 10:00' },
            { author: 'Inspector Sharma', text: 'Verified via on-chain records. Producer issued warning.', time: '2026-02-24 11:30' },
            { author: 'System', text: 'Dispute resolved. Producer compensated consumer with 50 kWh credit.', time: '2026-02-25 09:00' },
        ]
    },
    {
        id: 'TKT-031', type: 'other', reporter: '0x3C44...93BC', reporterLabel: 'Consumer #55', against: '-', againstLabel: 'Platform', status: 'escalated', description: 'Unable to withdraw investment returns. Transaction keeps failing with "insufficient gas" error despite having sufficient ETH balance.', evidence: '0xd4e5...ab12', createdAt: '2026-02-19', assignedTo: 'Senior Inspector Patel', messages: [
            { author: 'Consumer #55', text: 'Tried 5 times, same error each time.', time: '2026-02-19 16:00' },
            { author: 'Senior Inspector Patel', text: 'Escalated to engineering team. Appears to be a smart contract gas estimation issue.', time: '2026-02-21 10:00' },
        ]
    },
];

// ── Styles ──────────────────────────────────────────────────

const darkBg = '#0D1117';
const cardBg = '#161B22';
const border = '#30363D';
const muted = '#8B949E';

const tabStyle = (active) => ({
    padding: '12px 24px', fontSize: '14px', fontWeight: 700,
    fontFamily: 'var(--font-heading)', cursor: 'pointer',
    border: 'none', borderBottom: active ? '3px solid #FFD740' : '3px solid transparent',
    backgroundColor: 'transparent', color: active ? 'white' : muted,
    transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '0.5px'
});

const badgeStyle = (color) => ({
    display: 'inline-block', padding: '3px 10px', borderRadius: '100px',
    fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-heading)',
    backgroundColor: color + '22', color: color, letterSpacing: '0.3px'
});

const statCardStyle = {
    padding: '24px', borderRadius: '12px', backgroundColor: cardBg,
    border: `1px solid ${border}`, textAlign: 'center'
};

// ── Main Component ──────────────────────────────────────────

export default function GovernmentHub() {
    const [activeTab, setActiveTab] = useState('ledger');
    const [selectedDispute, setSelectedDispute] = useState(null);
    const [filterType, setFilterType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const tabs = [
        { id: 'ledger', label: 'Master Ledger', icon: <Eye size={16} /> },
        { id: 'regulatory', label: 'Regulatory Feed', icon: <FileText size={16} /> },
        { id: 'disputes', label: 'Dispute Center', icon: <AlertTriangle size={16} /> },
    ];

    const filteredTx = MOCK_TRANSACTIONS.filter(tx => {
        if (filterType === 'flagged') return tx.flagged;
        if (filterType !== 'all') return tx.type.toLowerCase() === filterType;
        return true;
    }).filter(tx =>
        searchQuery === '' ||
        tx.hash.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.fromLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.toLabel.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const stats = {
        totalTrades: MOCK_TRANSACTIONS.length,
        totalVolume: MOCK_TRANSACTIONS.reduce((s, t) => s + t.kwh, 0),
        totalValue: MOCK_TRANSACTIONS.reduce((s, t) => s + t.value, 0),
        flagged: MOCK_TRANSACTIONS.filter(t => t.flagged).length,
        openDisputes: MOCK_DISPUTES.filter(d => d.status === 'open' || d.status === 'under_review').length,
    };

    const getStatusStyle = (status) => {
        const map = {
            open: { bg: '#FFD74022', color: '#FFD740', label: '● Open' },
            under_review: { bg: '#40C4FF22', color: '#40C4FF', label: '◐ Under Review' },
            resolved: { bg: '#00E67622', color: '#00E676', label: '✓ Resolved' },
            escalated: { bg: '#FF525222', color: '#FF5252', label: '⚠ Escalated' },
        };
        return map[status] || map.open;
    };

    const getPriorityStyle = (priority) => {
        const map = {
            info: '#40C4FF', warning: '#FFD740', critical: '#FF5252'
        };
        return map[priority] || '#40C4FF';
    };

    const getCategoryLabel = (cat) => {
        const map = { policy: '📋 Policy', tariff: '💰 Tariff', compliance: '✅ Compliance', alert: '🚨 Alert' };
        return map[cat] || cat;
    };

    return (
        <div style={{ backgroundColor: darkBg, minHeight: '100vh', color: 'white' }}>

            {/* ── Hero Header ── */}
            <section style={{
                padding: '48px 32px 0', textAlign: 'center',
                borderBottom: `1px solid ${border}`,
                background: 'linear-gradient(180deg, #0D1117 0%, #111922 100%)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                        <Shield size={28} color="#FFD740" />
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800 }}>
                            Government Oversight Hub
                        </h1>
                    </div>
                    <p style={{ color: muted, fontSize: '16px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                        Monitor energy transactions, enforce regulatory compliance, and resolve disputes across the GreenGrid network.
                    </p>

                    {/* Tabs */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={tabStyle(activeTab === tab.id)}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {tab.icon} {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Tab Content ── */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px' }}>

                {/* ═══════ MASTER LEDGER ═══════ */}
                {activeTab === 'ledger' && (
                    <div>
                        {/* Stats Row */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '32px' }}>
                            {[
                                { label: 'Total Trades', value: stats.totalTrades, color: '#40C4FF' },
                                { label: 'Energy Traded', value: `${stats.totalVolume.toLocaleString()} kWh`, color: '#00E676' },
                                { label: 'Total Value', value: `${stats.totalValue.toFixed(2)} ETH`, color: '#FFD740' },
                                { label: 'Active Producers', value: '6', color: '#BB86FC' },
                                { label: 'Flagged TXs', value: stats.flagged, color: '#FF5252' },
                            ].map((s, i) => (
                                <div key={i} style={statCardStyle}>
                                    <div style={{ fontSize: '12px', color: muted, textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>{s.label}</div>
                                    <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: s.color }}>{s.value}</div>
                                </div>
                            ))}
                        </div>

                        {/* Filter Bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                {['all', 'trade', 'subscription', 'investment', 'flagged'].map(f => (
                                    <button key={f} onClick={() => setFilterType(f)}
                                        style={{
                                            padding: '6px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 600,
                                            fontFamily: 'var(--font-heading)', textTransform: 'uppercase', cursor: 'pointer',
                                            border: filterType === f ? 'none' : `1px solid ${border}`,
                                            backgroundColor: filterType === f ? (f === 'flagged' ? '#FF5252' : '#FFD740') : 'transparent',
                                            color: filterType === f ? (f === 'flagged' ? 'white' : '#0D1117') : muted
                                        }}>
                                        {f === 'flagged' ? '⚠ Flagged' : f.charAt(0).toUpperCase() + f.slice(1)}
                                    </button>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text" placeholder="Search TX / Producer / Consumer..."
                                        value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                                        style={{
                                            padding: '8px 16px 8px 36px', borderRadius: '8px', border: `1px solid ${border}`,
                                            backgroundColor: cardBg, color: 'white', fontSize: '13px', width: '280px', outline: 'none'
                                        }}
                                    />
                                    <Search size={14} color={muted} style={{ position: 'absolute', left: '12px', top: '10px' }} />
                                </div>
                                <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', border: `1px solid ${border}`, backgroundColor: 'transparent', color: muted, fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                                    <Download size={14} /> Export CSV
                                </button>
                            </div>
                        </div>

                        {/* Transaction Table */}
                        <div style={{ borderRadius: '12px', border: `1px solid ${border}`, overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#1C2333', textAlign: 'left' }}>
                                        {['TX Hash', 'From', 'To', 'Type', 'kWh', 'Value (ETH)', 'Time', 'Status'].map(h => (
                                            <th key={h} style={{ padding: '14px 16px', color: muted, fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: `1px solid ${border}` }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                                                    {h} <ArrowUpDown size={10} />
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTx.map(tx => (
                                        <tr key={tx.id} style={{ borderBottom: `1px solid ${border}`, transition: 'background 0.2s' }}
                                            onMouseOver={e => e.currentTarget.style.backgroundColor = '#1C2333'}
                                            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                            <td style={{ padding: '14px 16px', fontFamily: 'monospace', color: '#40C4FF' }}>{tx.hash}</td>
                                            <td style={{ padding: '14px 16px' }}>
                                                <div style={{ color: 'white', fontWeight: 500 }}>{tx.fromLabel}</div>
                                                <div style={{ color: muted, fontSize: '11px', fontFamily: 'monospace' }}>{tx.from}</div>
                                            </td>
                                            <td style={{ padding: '14px 16px' }}>
                                                <div style={{ color: 'white', fontWeight: 500 }}>{tx.toLabel}</div>
                                                <div style={{ color: muted, fontSize: '11px', fontFamily: 'monospace' }}>{tx.to}</div>
                                            </td>
                                            <td style={{ padding: '14px 16px' }}>
                                                <span style={badgeStyle(tx.type === 'Trade' ? '#00E676' : tx.type === 'Investment' ? '#BB86FC' : '#40C4FF')}>
                                                    {tx.type}
                                                </span>
                                            </td>
                                            <td style={{ padding: '14px 16px', fontWeight: 600 }}>{tx.kwh > 0 ? tx.kwh.toLocaleString() : '—'}</td>
                                            <td style={{ padding: '14px 16px', color: '#FFD740', fontWeight: 700 }}>{tx.value.toFixed(3)}</td>
                                            <td style={{ padding: '14px 16px', color: muted, fontSize: '12px' }}>{tx.timestamp}</td>
                                            <td style={{ padding: '14px 16px' }}>
                                                {tx.flagged ? (
                                                    <div>
                                                        <span style={badgeStyle('#FF5252')}>⚠ Flagged</span>
                                                        <div style={{ fontSize: '10px', color: '#FF5252', marginTop: '4px' }}>{tx.flagReason}</div>
                                                    </div>
                                                ) : (
                                                    <span style={badgeStyle('#00E676')}>✓ Clean</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ═══════ REGULATORY FEED ═══════ */}
                {activeTab === 'regulatory' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px' }}>Active Regulatory Notices</h2>
                            <button style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '10px 20px', borderRadius: '8px', border: 'none',
                                backgroundColor: '#FFD740', color: '#0D1117', fontWeight: 700,
                                fontSize: '13px', cursor: 'pointer', fontFamily: 'var(--font-heading)'
                            }}>
                                <Send size={14} /> Publish New Notice
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {MOCK_NOTICES.map(notice => {
                                const prColor = getPriorityStyle(notice.priority);
                                return (
                                    <div key={notice.id} style={{
                                        backgroundColor: cardBg, borderRadius: '12px',
                                        border: `1px solid ${border}`, borderLeft: `4px solid ${prColor}`,
                                        padding: '24px', transition: 'transform 0.2s'
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                                                <span style={{
                                                    ...badgeStyle(prColor),
                                                    textTransform: 'uppercase'
                                                }}>
                                                    {notice.priority}
                                                </span>
                                                <span style={badgeStyle('#8B949E')}>
                                                    {getCategoryLabel(notice.category)}
                                                </span>
                                            </div>
                                            <span style={{ fontSize: '12px', color: muted }}>{notice.publishedAt}</span>
                                        </div>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', marginBottom: '8px', lineHeight: 1.4 }}>
                                            {notice.title}
                                        </h3>
                                        <p style={{ color: muted, fontSize: '14px', lineHeight: 1.6, marginBottom: '12px' }}>
                                            {notice.content}
                                        </p>
                                        <div style={{ fontSize: '12px', color: muted }}>
                                            Published by <span style={{ color: '#40C4FF', fontWeight: 600 }}>{notice.author}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* ═══════ DISPUTE CENTER ═══════ */}
                {activeTab === 'disputes' && (
                    <div>
                        {/* Stats */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
                            {[
                                { label: 'Open', count: MOCK_DISPUTES.filter(d => d.status === 'open').length, color: '#FFD740', icon: <Clock size={20} /> },
                                { label: 'Under Review', count: MOCK_DISPUTES.filter(d => d.status === 'under_review').length, color: '#40C4FF', icon: <Eye size={20} /> },
                                { label: 'Resolved', count: MOCK_DISPUTES.filter(d => d.status === 'resolved').length, color: '#00E676', icon: <CheckCircle size={20} /> },
                                { label: 'Escalated', count: MOCK_DISPUTES.filter(d => d.status === 'escalated').length, color: '#FF5252', icon: <XCircle size={20} /> },
                            ].map((s, i) => (
                                <div key={i} style={{ ...statCardStyle, display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: s.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>{s.icon}</div>
                                    <div>
                                        <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: s.color }}>{s.count}</div>
                                        <div style={{ fontSize: '12px', color: muted, textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Ticket List + Detail Split View */}
                        <div style={{ display: 'grid', gridTemplateColumns: selectedDispute ? '380px 1fr' : '1fr', gap: '24px' }}>
                            {/* Ticket List */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px' }}>All Tickets</h3>
                                    <button style={{
                                        padding: '8px 16px', borderRadius: '8px', border: 'none',
                                        backgroundColor: '#FFD740', color: '#0D1117', fontWeight: 700,
                                        fontSize: '12px', cursor: 'pointer', fontFamily: 'var(--font-heading)'
                                    }}>
                                        + New Ticket
                                    </button>
                                </div>
                                {MOCK_DISPUTES.map(d => {
                                    const st = getStatusStyle(d.status);
                                    return (
                                        <div key={d.id}
                                            onClick={() => setSelectedDispute(d)}
                                            style={{
                                                backgroundColor: selectedDispute?.id === d.id ? '#1C2333' : cardBg,
                                                borderRadius: '10px', border: `1px solid ${selectedDispute?.id === d.id ? '#FFD740' : border}`,
                                                padding: '16px', cursor: 'pointer', transition: 'all 0.2s'
                                            }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                                <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#FFD740', fontWeight: 700 }}>#{d.id}</span>
                                                <span style={{ ...badgeStyle(st.color) }}>{st.label}</span>
                                            </div>
                                            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px', lineHeight: 1.3 }}>
                                                {d.type.charAt(0).toUpperCase() + d.type.slice(1)} — {d.againstLabel}
                                            </div>
                                            <div style={{ fontSize: '12px', color: muted }}>
                                                by {d.reporterLabel} · {d.createdAt}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Ticket Detail */}
                            {selectedDispute && (
                                <div style={{
                                    backgroundColor: cardBg, borderRadius: '12px',
                                    border: `1px solid ${border}`, padding: '28px'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                                <span style={{ fontFamily: 'monospace', fontSize: '18px', color: '#FFD740', fontWeight: 700 }}>#{selectedDispute.id}</span>
                                                <span style={badgeStyle(getStatusStyle(selectedDispute.status).color)}>
                                                    {getStatusStyle(selectedDispute.status).label}
                                                </span>
                                                <span style={badgeStyle('#8B949E')}>
                                                    {selectedDispute.type.toUpperCase()}
                                                </span>
                                            </div>
                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '4px' }}>
                                                Dispute against {selectedDispute.againstLabel}
                                            </h3>
                                            <div style={{ fontSize: '13px', color: muted }}>
                                                Filed by <span style={{ color: '#40C4FF' }}>{selectedDispute.reporterLabel}</span> on {selectedDispute.createdAt}
                                                {selectedDispute.assignedTo && (
                                                    <> · Assigned to <span style={{ color: '#00E676' }}>{selectedDispute.assignedTo}</span></>
                                                )}
                                            </div>
                                        </div>
                                        <button onClick={() => setSelectedDispute(null)} style={{
                                            background: 'none', border: `1px solid ${border}`, color: muted,
                                            padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px'
                                        }}>✕ Close</button>
                                    </div>

                                    {/* Description */}
                                    <div style={{ backgroundColor: '#0D1117', borderRadius: '8px', padding: '16px', marginBottom: '20px', border: `1px solid ${border}` }}>
                                        <div style={{ fontSize: '11px', color: muted, textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Description</div>
                                        <p style={{ fontSize: '14px', color: '#E6EDF3', lineHeight: 1.6 }}>{selectedDispute.description}</p>
                                    </div>

                                    {/* Evidence */}
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{ fontSize: '11px', color: muted, textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Evidence TX Hash</div>
                                        <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#40C4FF', backgroundColor: '#0D1117', padding: '6px 12px', borderRadius: '6px' }}>
                                            {selectedDispute.evidence}
                                        </span>
                                    </div>

                                    {/* Message Thread */}
                                    <div>
                                        <div style={{ fontSize: '11px', color: muted, textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
                                            Communication Thread ({selectedDispute.messages.length})
                                        </div>
                                        {selectedDispute.messages.length === 0 ? (
                                            <div style={{ color: muted, fontSize: '13px', fontStyle: 'italic', padding: '16px', textAlign: 'center', backgroundColor: '#0D1117', borderRadius: '8px' }}>
                                                No messages yet. Awaiting assignment.
                                            </div>
                                        ) : (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                {selectedDispute.messages.map((msg, i) => (
                                                    <div key={i} style={{
                                                        padding: '12px 16px', borderRadius: '8px',
                                                        backgroundColor: msg.author === 'System' ? '#00E67611' : '#0D1117',
                                                        borderLeft: `3px solid ${msg.author === 'System' ? '#00E676' : msg.author.includes('Inspector') ? '#FFD740' : '#40C4FF'}`
                                                    }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                                            <span style={{ fontSize: '12px', fontWeight: 700, color: msg.author.includes('Inspector') ? '#FFD740' : msg.author === 'System' ? '#00E676' : '#40C4FF' }}>
                                                                {msg.author}
                                                            </span>
                                                            <span style={{ fontSize: '11px', color: muted }}>{msg.time}</span>
                                                        </div>
                                                        <p style={{ fontSize: '13px', color: '#E6EDF3', lineHeight: 1.5 }}>{msg.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Reply Box */}
                                        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                                            <input placeholder="Type a response..."
                                                style={{
                                                    flex: 1, padding: '10px 16px', borderRadius: '8px', fontSize: '13px',
                                                    backgroundColor: '#0D1117', border: `1px solid ${border}`, color: 'white', outline: 'none'
                                                }}
                                            />
                                            <button style={{
                                                padding: '10px 20px', borderRadius: '8px', border: 'none',
                                                backgroundColor: '#FFD740', color: '#0D1117', fontWeight: 700,
                                                fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
                                            }}>
                                                <Send size={14} /> Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
