import React, { useState } from 'react';
import { LayoutDashboard, ShoppingBag, PieChart as PieChartIcon, Wind, Leaf } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Card from '../components/Card';
import Badge from '../components/Badge';

const carbonData = [
    { name: 'Solar', value: 400, color: '#4CAF50' },
    { name: 'Wind', value: 300, color: '#2196F3' },
    { name: 'Biogas', value: 150, color: '#10B981' },
];

export default function ConsumerDashboard() {
    const [activeTab, setActiveTab] = useState('Overview');

    const tabs = ['Overview', 'Purchases', 'Investments', 'Carbon Footprint'];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            {/* Sidebar */}
            <aside style={{ width: '240px', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px' }}>Dashboard</h2>
                </div>

                <nav style={{ flex: 1, padding: 'var(--spacing-md) 0' }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {tabs.map((tab, idx) => (
                            <li key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '12px 24px',
                                    backgroundColor: activeTab === tab ? 'var(--color-primary-hover)' : 'transparent',
                                    borderLeft: activeTab === tab ? '4px solid var(--color-blue-primary)' : '4px solid transparent',
                                    display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                                    opacity: activeTab === tab ? 1 : 0.8
                                }}>
                                {idx === 0 && <LayoutDashboard size={20} />}
                                {idx === 1 && <ShoppingBag size={20} />}
                                {idx === 2 && <PieChartIcon size={20} />}
                                {idx === 3 && <Leaf size={20} />}
                                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>{tab}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: 'var(--spacing-2xl)', overflowY: 'auto' }}>
                <h1 className="section-title" style={{ marginBottom: 'var(--spacing-2xl)' }}>{activeTab}</h1>

                {activeTab === 'Overview' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)' }}>
                        <Card hoverEffect={false}>
                            <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Energy Purchased (kWh)</div>
                            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>3,450</div>
                        </Card>
                        <Card hoverEffect={false}>
                            <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Total Spent (₹)</div>
                            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-blue-primary)' }}>₹14,200</div>
                        </Card>
                        <Card hoverEffect={false}>
                            <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Active Investments</div>
                            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>2</div>
                        </Card>
                        <Card hoverEffect={false}>
                            <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Carbon Saved (Tons)</div>
                            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-blue-primary)' }}>2.4t</div>
                        </Card>
                    </div>
                )}

                {activeTab === 'Purchases' && (
                    <Card hoverEffect={false}>
                        <p style={{ color: 'var(--color-text-secondary)' }}>Timeline of recent energy purchases will appear here.</p>
                    </Card>
                )}

                {activeTab === 'Investments' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        <Card hoverEffect={true} style={{ backgroundColor: 'var(--color-blue-light)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <h3 className="card-title">Karnataka Wind Expansion</h3>
                                <Badge type="blue">Active</Badge>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>₹50,000 Invested • 12.5% Proj. ROI</p>
                        </Card>
                    </div>
                )}

                {activeTab === 'Carbon Footprint' && (
                    <Card hoverEffect={false} style={{ width: '400px' }}>
                        <h3 className="card-subtitle" style={{ marginBottom: '16px' }}>Offset by Source</h3>
                        <div style={{ height: '240px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={carbonData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
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
                )}
            </main>
        </div>
    );
}
