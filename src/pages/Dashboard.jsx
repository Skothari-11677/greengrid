import React, { useState } from 'react';
import { LayoutDashboard, ShoppingBag, Zap, TrendingUp, Leaf, Activity, Plus, BarChart2 } from 'lucide-react';
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

// ── Role Configs ───────────────────────────────────────────
const ROLES = [
    { key: 'consumer', label: 'Consumer', icon: <ShoppingBag size={18} />, color: 'var(--color-blue-primary)' },
    { key: 'producer', label: 'Producer', icon: <Zap size={18} />, color: 'var(--color-primary)' },
    { key: 'investor', label: 'Investor', icon: <TrendingUp size={18} />, color: 'var(--color-gold)' },
];

export default function Dashboard() {
    const [activeRole, setActiveRole] = useState('consumer');

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
                                onClick={() => setActiveRole(role.key)}
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
                        <li style={{ padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.15)', borderLeft: '4px solid var(--color-blue-primary)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                            <LayoutDashboard size={18} />
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>Overview</span>
                        </li>
                        {activeRole === 'consumer' && (
                            <>
                                <SidebarItem icon={<ShoppingBag size={18} />} label="My Purchases" />
                                <SidebarItem icon={<Leaf size={18} />} label="Carbon Footprint" />
                            </>
                        )}
                        {activeRole === 'producer' && (
                            <>
                                <SidebarItem icon={<Zap size={18} />} label="My Listings" />
                                <SidebarItem icon={<Activity size={18} />} label="Generation Stats" />
                                <SidebarItem icon={<Plus size={18} />} label="Add Listing" />
                            </>
                        )}
                        {activeRole === 'investor' && (
                            <>
                                <SidebarItem icon={<BarChart2 size={18} />} label="Portfolio" />
                                <SidebarItem icon={<TrendingUp size={18} />} label="Dividends" />
                            </>
                        )}
                    </ul>
                </nav>
            </aside>

            {/* ── Main Content ── */}
            <main style={{ flex: 1, padding: 'var(--spacing-2xl)', overflowY: 'auto' }}>

                {/* Role Badge Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                    <div>
                        <h1 className="section-title" style={{ marginBottom: '4px' }}>
                            {activeRole === 'consumer' && 'Consumer Dashboard'}
                            {activeRole === 'producer' && 'Producer Dashboard'}
                            {activeRole === 'investor' && 'Investor Dashboard'}
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

                {/* ═══════ Consumer View ═══════ */}
                {activeRole === 'consumer' && (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                            <StatCard label="Energy Purchased" value="3,450 kWh" color="var(--color-primary)" />
                            <StatCard label="Total Spent" value="₹14,200" color="var(--color-blue-primary)" />
                            <StatCard label="Active Subscriptions" value="2" color="var(--color-primary)" />
                            <StatCard label="Carbon Saved" value="2.4 Tons" color="var(--color-blue-primary)" />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)' }}>
                            {/* Recent Purchases */}
                            <Card hoverEffect={false}>
                                <h3 className="card-title" style={{ marginBottom: '16px' }}>Recent Purchases</h3>
                                {[
                                    { source: 'Surya Tech Park', amount: '120 kWh', date: 'Today', type: 'solar' },
                                    { source: 'Aura Wind Co.', amount: '240 kWh', date: 'Yesterday', type: 'wind' },
                                    { source: 'GreenAgro Energy', amount: '80 kWh', date: '2 days ago', type: 'biogas' },
                                ].map((p, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none' }}>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--color-text-primary)' }}>{p.source}</div>
                                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{p.date}</div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <Badge type={p.type}>{p.type}</Badge>
                                            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--color-primary)', marginTop: '4px' }}>{p.amount}</div>
                                        </div>
                                    </div>
                                ))}
                            </Card>

                            {/* Carbon Footprint Chart */}
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

                {/* ═══════ Producer View ═══════ */}
                {activeRole === 'producer' && (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                            <StatCard label="Active Listings" value="5" color="var(--color-primary)" />
                            <StatCard label="Units Sold" value="12,450 kWh" color="var(--color-blue-primary)" />
                            <StatCard label="Total Revenue" value="₹52,290" color="var(--color-primary)" />
                            <StatCard label="Average Rating" value="4.8 ★" color="var(--color-gold)" />
                        </div>

                        {/* Revenue Chart */}
                        <Card hoverEffect={false} style={{ marginBottom: 'var(--spacing-2xl)' }}>
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

                        {/* Active Listings Table */}
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
                                    ].map((l, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '16px 0' }}><Badge type={l.type}>{l.type}</Badge></td>
                                            <td style={{ padding: '16px 0', fontSize: '14px', color: 'var(--color-text-primary)' }}>{l.loc}</td>
                                            <td style={{ padding: '16px 0', fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>{l.price}</td>
                                            <td style={{ padding: '16px 0', fontSize: '14px' }}>{l.units.toLocaleString()} kWh</td>
                                            <td style={{ padding: '16px 0' }}>
                                                <span style={{ backgroundColor: 'rgba(30,124,58,0.1)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>● {l.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Card>
                    </>
                )}

                {/* ═══════ Investor View ═══════ */}
                {activeRole === 'investor' && (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                            <StatCard label="Total Invested" value="₹1,20,000" color="var(--color-gold)" />
                            <StatCard label="Portfolio Value" value="₹1,44,000" color="var(--color-primary)" />
                            <StatCard label="Total ROI" value="+20.0%" color="var(--color-chain-glow, var(--color-primary))" />
                            <StatCard label="Active Projects" value="3" color="var(--color-blue-primary)" />
                        </div>

                        {/* Portfolio Growth Chart */}
                        <Card hoverEffect={false} style={{ marginBottom: 'var(--spacing-2xl)' }}>
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

                        {/* Investment Projects */}
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
                    </>
                )}
            </main>
        </div>
    );
}

// ── Helper Components ──────────────────────────────────────
function SidebarItem({ icon, label }) {
    return (
        <li style={{ padding: '12px 24px', borderLeft: '4px solid transparent', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', opacity: 0.8, transition: 'opacity 0.2s' }}
            onMouseOver={e => e.currentTarget.style.opacity = '1'}
            onMouseOut={e => e.currentTarget.style.opacity = '0.8'}
        >
            {icon}
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>{label}</span>
        </li>
    );
}

function StatCard({ label, value, color }) {
    return (
        <Card hoverEffect={false}>
            <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px', fontSize: '13px' }}>{label}</div>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color }}>{value}</div>
        </Card>
    );
}
