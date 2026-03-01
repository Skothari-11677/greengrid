import React, { useState } from 'react';
import { LayoutDashboard, ShoppingBag, Zap, TrendingUp, Leaf, Activity, Plus, BarChart2, Users, FileText } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '../components/Card';
import Badge from '../components/Badge';

// ── Mock Data ──────────────────────────────────────────────
const revenueData = [
    { name: 'Jan', revenue: 4000 }, { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 }, { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 }, { name: 'Jun', revenue: 7500 },
];

const carbonData = [
    { name: 'Solar', value: 400, color: '#F59E0B' },
    { name: 'Wind', value: 300, color: '#2196F3' },
    { name: 'Biogas', value: 150, color: '#10B981' },
];

const investmentData = [
    { name: 'Jan', value: 20000 }, { name: 'Feb', value: 28000 },
    { name: 'Mar', value: 35000 }, { name: 'Apr', value: 42000 },
    { name: 'May', value: 58000 }, { name: 'Jun', value: 72000 },
];

const consumptionData = [
    { name: 'Mon', kwh: 12 }, { name: 'Tue', kwh: 19 },
    { name: 'Wed', kwh: 15 }, { name: 'Thu', kwh: 22 },
    { name: 'Fri', kwh: 18 }, { name: 'Sat', kwh: 8 }, { name: 'Sun', kwh: 5 },
];

// ── Role Configs ───────────────────────────────────────────
const ROLES = [
    { key: 'consumer', label: 'Consumer', icon: <ShoppingBag size={18} />, color: 'var(--color-blue-primary)' },
    { key: 'producer', label: 'Producer', icon: <Zap size={18} />, color: 'var(--color-primary)' },
    { key: 'investor', label: 'Investor', icon: <TrendingUp size={18} />, color: 'var(--color-gold)' },
];

const SIDEBAR_ITEMS = {
    consumer: [
        { key: 'overview', label: 'Overview', icon: <LayoutDashboard size={18} /> },
        { key: 'purchases', label: 'My Purchases', icon: <ShoppingBag size={18} /> },
        { key: 'carbon', label: 'Carbon Footprint', icon: <Leaf size={18} /> },
    ],
    producer: [
        { key: 'overview', label: 'Overview', icon: <LayoutDashboard size={18} /> },
        { key: 'listings', label: 'My Listings', icon: <Zap size={18} /> },
        { key: 'stats', label: 'Generation Stats', icon: <Activity size={18} /> },
        { key: 'clients', label: 'Client List', icon: <Users size={18} /> },
    ],
    investor: [
        { key: 'overview', label: 'Overview', icon: <LayoutDashboard size={18} /> },
        { key: 'portfolio', label: 'Portfolio', icon: <BarChart2 size={18} /> },
        { key: 'dividends', label: 'Dividends', icon: <TrendingUp size={18} /> },
    ],
};

export default function Dashboard() {
    const [activeRole, setActiveRole] = useState('consumer');
    const [activeSection, setActiveSection] = useState('overview');

    const switchRole = (role) => {
        setActiveRole(role);
        setActiveSection('overview');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>

            {/* ── Sidebar ── */}
            <aside style={{ width: '260px', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px', marginBottom: '4px' }}>Dashboard</h2>
                    <p style={{ opacity: 0.7, fontSize: '13px' }}>Manage your GreenGrid account</p>
                </div>

                {/* Role Switcher */}
                <div style={{ padding: '16px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em', opacity: 0.5, marginBottom: '12px' }}>Switch Role</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {ROLES.map(role => (
                            <button
                                key={role.key}
                                onClick={() => switchRole(role.key)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '10px 14px', borderRadius: '8px', border: 'none',
                                    backgroundColor: activeRole === role.key ? 'rgba(255,255,255,0.2)' : 'transparent',
                                    color: 'white', cursor: 'pointer', textAlign: 'left',
                                    fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600,
                                    transition: 'background-color 0.2s'
                                }}
                            >
                                {role.icon}
                                {role.label}
                                {activeRole === role.key && (
                                    <span style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: role.color }}></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation Items */}
                <nav style={{ flex: 1, padding: '12px 0' }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {SIDEBAR_ITEMS[activeRole].map(item => (
                            <li key={item.key}
                                onClick={() => setActiveSection(item.key)}
                                style={{
                                    padding: '12px 24px',
                                    backgroundColor: activeSection === item.key ? 'rgba(255,255,255,0.15)' : 'transparent',
                                    borderLeft: activeSection === item.key ? '4px solid var(--color-blue-primary)' : '4px solid transparent',
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    cursor: 'pointer', opacity: activeSection === item.key ? 1 : 0.75,
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={e => { if (activeSection !== item.key) e.currentTarget.style.opacity = '1'; }}
                                onMouseOut={e => { if (activeSection !== item.key) e.currentTarget.style.opacity = '0.75'; }}
                            >
                                {item.icon}
                                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* ── Main Content ── */}
            <main style={{ flex: 1, padding: 'var(--spacing-2xl)', overflowY: 'auto' }}>

                {/* Role Badge Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                    <div>
                        <h1 className="section-title" style={{ marginBottom: '4px' }}>
                            {SIDEBAR_ITEMS[activeRole].find(s => s.key === activeSection)?.label || 'Overview'}
                        </h1>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                            {activeRole === 'consumer' && 'Track your energy purchases and carbon impact.'}
                            {activeRole === 'producer' && 'Manage your energy listings and revenue.'}
                            {activeRole === 'investor' && 'Monitor your investments and returns.'}
                        </p>
                    </div>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        backgroundColor: ROLES.find(r => r.key === activeRole)?.color,
                        color: 'white', padding: '8px 16px', borderRadius: '100px',
                        fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '0.04em'
                    }}>
                        {ROLES.find(r => r.key === activeRole)?.icon}
                        {activeRole}
                    </div>
                </div>

                {/* ═══════ Consumer Views ═══════ */}
                {activeRole === 'consumer' && activeSection === 'overview' && (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                            <StatCard label="Energy Purchased" value="3,450 kWh" color="var(--color-primary)" />
                            <StatCard label="Total Spent" value="₹14,200" color="var(--color-blue-primary)" />
                            <StatCard label="Active Subscriptions" value="2" color="var(--color-primary)" />
                            <StatCard label="Carbon Saved" value="2.4 Tons" color="var(--color-blue-primary)" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                            <Card hoverEffect={false}>
                                <h3 className="card-title" style={{ marginBottom: '16px' }}>This Week's Consumption</h3>
                                <div style={{ height: '240px' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={consumptionData}>
                                            <defs>
                                                <linearGradient id="conGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="var(--color-blue-primary)" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="var(--color-blue-primary)" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                                            <XAxis dataKey="name" tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                            <YAxis tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `${v} kWh`} />
                                            <Tooltip />
                                            <Area type="monotone" dataKey="kwh" stroke="var(--color-blue-primary)" strokeWidth={3} fill="url(#conGrad)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>
                            <Card hoverEffect={false}>
                                <h3 className="card-title" style={{ marginBottom: '16px' }}>Carbon Offset by Source</h3>
                                <div style={{ height: '240px' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie data={carbonData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                                {carbonData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>
                        </div>
                    </>
                )}

                {activeRole === 'consumer' && activeSection === 'purchases' && (
                    <Card hoverEffect={false}>
                        <h3 className="card-title" style={{ marginBottom: '16px' }}>Purchase History</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ color: 'var(--color-text-secondary)', fontSize: '12px', textTransform: 'uppercase', borderBottom: '1px solid var(--color-border)' }}>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Source</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Type</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Amount</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Cost</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Date</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { source: 'Surya Tech Park', type: 'solar', amount: '120 kWh', cost: '₹504', date: 'Today', status: 'Confirmed' },
                                    { source: 'Aura Wind Co.', type: 'wind', amount: '240 kWh', cost: '₹912', date: 'Yesterday', status: 'Confirmed' },
                                    { source: 'GreenAgro Energy', type: 'biogas', amount: '80 kWh', cost: '₹360', date: '2 days ago', status: 'Confirmed' },
                                    { source: 'Rooftop Solarix', type: 'solar', amount: '500 kWh', cost: '₹1,800', date: '5 days ago', status: 'Confirmed' },
                                    { source: 'Vayu Farms', type: 'wind', amount: '150 kWh', cost: '₹570', date: '1 week ago', status: 'Confirmed' },
                                ].map((p, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '16px 0', fontWeight: 600, fontSize: '14px' }}>{p.source}</td>
                                        <td style={{ padding: '16px 0' }}><Badge type={p.type}>{p.type}</Badge></td>
                                        <td style={{ padding: '16px 0', fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>{p.amount}</td>
                                        <td style={{ padding: '16px 0', fontSize: '14px' }}>{p.cost}</td>
                                        <td style={{ padding: '16px 0', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{p.date}</td>
                                        <td style={{ padding: '16px 0' }}>
                                            <span style={{ backgroundColor: 'rgba(30,124,58,0.1)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>✓ {p.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                )}

                {activeRole === 'consumer' && activeSection === 'carbon' && (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                            <StatCard label="Total CO₂ Offset" value="2.4 Tons" color="var(--color-primary)" />
                            <StatCard label="Trees Equivalent" value="40 Trees" color="var(--color-blue-primary)" />
                            <StatCard label="Green Score" value="87/100" color="var(--color-gold)" />
                        </div>
                        <Card hoverEffect={false}>
                            <h3 className="card-title" style={{ marginBottom: '16px' }}>Carbon Offset by Source</h3>
                            <div style={{ height: '300px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={carbonData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={5} dataKey="value" label>
                                            {carbonData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                    </>
                )}

                {/* ═══════ Producer Views ═══════ */}
                {activeRole === 'producer' && activeSection === 'overview' && (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                            <StatCard label="Active Listings" value="5" color="var(--color-primary)" />
                            <StatCard label="Units Sold" value="12,450 kWh" color="var(--color-blue-primary)" />
                            <StatCard label="Total Revenue" value="₹52,290" color="var(--color-primary)" />
                            <StatCard label="Average Rating" value="4.8 ★" color="var(--color-gold)" />
                        </div>
                        <Card hoverEffect={false}>
                            <h3 className="card-title" style={{ marginBottom: '16px' }}>Monthly Revenue</h3>
                            <div style={{ height: '280px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={revenueData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                                        <XAxis dataKey="name" tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `₹${v / 1000}k`} />
                                        <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--color-border)' }} />
                                        <Line type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={3} dot={{ fill: 'var(--color-primary)', r: 5 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                    </>
                )}

                {activeRole === 'producer' && activeSection === 'listings' && (
                    <Card hoverEffect={false}>
                        <h3 className="card-title" style={{ marginBottom: '16px' }}>Your Active Listings</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ color: 'var(--color-text-secondary)', fontSize: '12px', textTransform: 'uppercase', borderBottom: '1px solid var(--color-border)' }}>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Type</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Location</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Price / kWh</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Units Available</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { type: 'solar', loc: 'Jaipur, Rajasthan', price: '₹4.20', units: 150, status: 'Live' },
                                    { type: 'solar', loc: 'Bengaluru, KA', price: '₹3.90', units: 320, status: 'Live' },
                                    { type: 'wind', loc: 'Kanyakumari, TN', price: '₹3.80', units: 8400, status: 'Live' },
                                    { type: 'biogas', loc: 'Nashik, MH', price: '₹4.50', units: 200, status: 'Paused' },
                                    { type: 'solar', loc: 'Udaipur, RJ', price: '₹3.60', units: 1200, status: 'Live' },
                                ].map((l, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '16px 0' }}><Badge type={l.type}>{l.type}</Badge></td>
                                        <td style={{ padding: '16px 0', fontSize: '14px', color: 'var(--color-text-primary)' }}>{l.loc}</td>
                                        <td style={{ padding: '16px 0', fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>{l.price}</td>
                                        <td style={{ padding: '16px 0', fontSize: '14px' }}>{l.units.toLocaleString()} kWh</td>
                                        <td style={{ padding: '16px 0' }}>
                                            <span style={{
                                                backgroundColor: l.status === 'Live' ? 'rgba(30,124,58,0.1)' : 'rgba(255,152,0,0.1)',
                                                color: l.status === 'Live' ? 'var(--color-primary)' : '#FF9800',
                                                padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600
                                            }}>● {l.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                )}

                {activeRole === 'producer' && activeSection === 'stats' && (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                            <StatCard label="Today's Generation" value="245 kWh" color="var(--color-primary)" />
                            <StatCard label="This Month" value="5,820 kWh" color="var(--color-blue-primary)" />
                            <StatCard label="Efficiency" value="94.2%" color="var(--color-gold)" />
                        </div>
                        <Card hoverEffect={false}>
                            <h3 className="card-title" style={{ marginBottom: '16px' }}>Daily Generation (This Week)</h3>
                            <div style={{ height: '280px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={[
                                        { name: 'Mon', kwh: 180 }, { name: 'Tue', kwh: 220 }, { name: 'Wed', kwh: 245 },
                                        { name: 'Thu', kwh: 200 }, { name: 'Fri', kwh: 260 }, { name: 'Sat', kwh: 190 }, { name: 'Sun', kwh: 150 },
                                    ]}>
                                        <defs>
                                            <linearGradient id="genGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                                        <XAxis dataKey="name" tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `${v} kWh`} />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="kwh" stroke="var(--color-primary)" strokeWidth={3} fill="url(#genGrad)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                    </>
                )}

                {activeRole === 'producer' && activeSection === 'clients' && (
                    <Card hoverEffect={false}>
                        <h3 className="card-title" style={{ marginBottom: '16px' }}>Subscribed Consumers</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ color: 'var(--color-text-secondary)', fontSize: '12px', textTransform: 'uppercase', borderBottom: '1px solid var(--color-border)' }}>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Consumer</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Plan</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Monthly kWh</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Revenue / Month</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Since</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Eco Village Greens', plan: 'Solar Basic', kwh: '300', rev: '₹1,260', since: 'Oct 2025', status: 'Active' },
                                    { name: 'Tech Park East', plan: 'Solar Premium', kwh: '1,200', rev: '₹4,560', since: 'Jan 2026', status: 'Active' },
                                    { name: 'Riverside Apartments', plan: 'Wind Standard', kwh: '800', rev: '₹3,040', since: 'Nov 2025', status: 'Active' },
                                    { name: 'Sunrise Valley HOA', plan: 'Solar Basic', kwh: '200', rev: '₹840', since: 'Feb 2026', status: 'Active' },
                                ].map((c, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '16px 0', fontWeight: 600, fontSize: '14px' }}>{c.name}</td>
                                        <td style={{ padding: '16px 0', fontSize: '13px' }}>{c.plan}</td>
                                        <td style={{ padding: '16px 0', fontSize: '14px', fontWeight: 600 }}>{c.kwh}</td>
                                        <td style={{ padding: '16px 0', fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>{c.rev}</td>
                                        <td style={{ padding: '16px 0', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{c.since}</td>
                                        <td style={{ padding: '16px 0' }}>
                                            <span style={{ backgroundColor: 'rgba(30,124,58,0.1)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>● {c.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                )}

                {/* ═══════ Investor Views ═══════ */}
                {activeRole === 'investor' && activeSection === 'overview' && (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                            <StatCard label="Total Invested" value="₹1,20,000" color="var(--color-gold)" />
                            <StatCard label="Portfolio Value" value="₹1,44,000" color="var(--color-primary)" />
                            <StatCard label="Total ROI" value="+20.0%" color="var(--color-chain-glow, var(--color-primary))" />
                            <StatCard label="Active Projects" value="3" color="var(--color-blue-primary)" />
                        </div>
                        <Card hoverEffect={false}>
                            <h3 className="card-title" style={{ marginBottom: '16px' }}>Portfolio Growth</h3>
                            <div style={{ height: '280px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={investmentData}>
                                        <defs>
                                            <linearGradient id="invGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--color-gold)" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="var(--color-gold)" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                                        <XAxis dataKey="name" tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `₹${v / 1000}k`} />
                                        <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--color-border)' }} />
                                        <Area type="monotone" dataKey="value" stroke="var(--color-gold)" strokeWidth={3} fillOpacity={1} fill="url(#invGrad)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                    </>
                )}

                {activeRole === 'investor' && activeSection === 'portfolio' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        {[
                            { name: 'Karnataka Wind Phase II', type: 'wind', invested: '₹50,000', roi: '+14.2%', progress: 85, maturity: 'Dec 2027' },
                            { name: 'Navi Mumbai Solar Grid', type: 'solar', invested: '₹40,000', roi: '+9.4%', progress: 62, maturity: 'Oct 2028' },
                            { name: 'Punjab Biogas Collective', type: 'biogas', invested: '₹30,000', roi: '+22.1%', progress: 100, maturity: 'Mar 2026' },
                        ].map((proj, i) => (
                            <Card key={i} leftBorderColor={proj.type === 'wind' ? 'var(--color-blue-primary)' : proj.type === 'solar' ? 'var(--color-gold)' : 'var(--color-primary)'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <h3 className="card-title">{proj.name}</h3>
                                    <Badge type={proj.type}>{proj.type}</Badge>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '16px' }}>
                                    <span style={{ color: 'var(--color-text-secondary)' }}>Invested: <strong style={{ color: 'var(--color-text-primary)' }}>{proj.invested}</strong></span>
                                    <span style={{ color: 'var(--color-text-secondary)' }}>ROI: <strong style={{ color: 'var(--color-primary)' }}>{proj.roi}</strong></span>
                                </div>
                                <div style={{ marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
                                        <span>Funding Progress</span>
                                        <span>{proj.progress}%</span>
                                    </div>
                                    <div style={{ height: '6px', backgroundColor: 'var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ height: '100%', width: `${proj.progress}%`, background: 'linear-gradient(90deg, var(--color-primary), var(--color-blue-primary))', borderRadius: '4px' }}></div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                                    Maturity: <strong style={{ color: 'var(--color-text-primary)' }}>{proj.maturity}</strong>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {activeRole === 'investor' && activeSection === 'dividends' && (
                    <Card hoverEffect={false}>
                        <h3 className="card-title" style={{ marginBottom: '16px' }}>Dividend History</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ color: 'var(--color-text-secondary)', fontSize: '12px', textTransform: 'uppercase', borderBottom: '1px solid var(--color-border)' }}>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Project</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Amount</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Period</th>
                                    <th style={{ padding: '12px 0', fontWeight: 600 }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { project: 'Karnataka Wind Phase II', amount: '₹2,130', period: 'Feb 2026', status: 'Paid' },
                                    { project: 'Navi Mumbai Solar Grid', amount: '₹1,120', period: 'Feb 2026', status: 'Paid' },
                                    { project: 'Punjab Biogas Collective', amount: '₹1,990', period: 'Feb 2026', status: 'Paid' },
                                    { project: 'Karnataka Wind Phase II', amount: '₹1,980', period: 'Jan 2026', status: 'Paid' },
                                    { project: 'Punjab Biogas Collective', amount: '₹2,100', period: 'Jan 2026', status: 'Paid' },
                                ].map((d, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '16px 0', fontWeight: 600, fontSize: '14px' }}>{d.project}</td>
                                        <td style={{ padding: '16px 0', fontWeight: 700, color: 'var(--color-primary)', fontSize: '14px' }}>{d.amount}</td>
                                        <td style={{ padding: '16px 0', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{d.period}</td>
                                        <td style={{ padding: '16px 0' }}>
                                            <span style={{ backgroundColor: 'rgba(30,124,58,0.1)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>✓ {d.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                )}
            </main>
        </div>
    );
}

// ── Helper Components ──────────────────────────────────────

function StatCard({ label, value, color }) {
    return (
        <Card hoverEffect={false}>
            <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px', fontSize: '13px' }}>{label}</div>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color }}>{value}</div>
        </Card>
    );
}
