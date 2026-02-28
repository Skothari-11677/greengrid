import React from 'react';
import { Home, List, FileText, TrendingUp, Settings, Plus, Zap, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';

const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 7500 },
];

export default function ProducerDashboard() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>

            {/* Sidebar */}
            <aside style={{ width: '240px', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px' }}>Dashboard</h2>
                </div>

                <nav style={{ flex: 1, padding: 'var(--spacing-md) 0' }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        <li style={{ padding: '12px 24px', backgroundColor: 'var(--color-primary-hover)', borderLeft: '4px solid var(--color-blue-primary)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                            <Home size={20} /> <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>Overview</span>
                        </li>
                        <li style={{ padding: '12px 24px', borderLeft: '4px solid transparent', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', opacity: 0.8 }}>
                            <List size={20} /> <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>My Listings</span>
                        </li>
                        <li style={{ padding: '12px 24px', borderLeft: '4px solid transparent', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', opacity: 0.8 }}>
                            <FileText size={20} /> <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>Transactions</span>
                        </li>
                        <li style={{ padding: '12px 24px', borderLeft: '4px solid transparent', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', opacity: 0.8 }}>
                            <TrendingUp size={20} /> <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>Revenue</span>
                        </li>
                    </ul>
                </nav>

                <div style={{ padding: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            RK
                        </div>
                        <div>
                            <div style={{ fontSize: '14px', fontWeight: 600 }}>Roshni Kapoor</div>
                            <div style={{ fontSize: '12px', opacity: 0.7 }}>Producer Account</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: 'var(--spacing-2xl)', overflowY: 'auto' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                    <h1 className="section-title">Overview</h1>
                    <Button variant="primary">Add New Listing <Plus size={16} /> </Button>
                </div>

                {/* Stats Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                    <Card hoverEffect={false}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Units Listed (kWh)</div>
                                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>12,450</div>
                            </div>
                            <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}>
                                <Zap size={24} />
                            </div>
                        </div>
                    </Card>

                    <Card hoverEffect={false}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Units Sold</div>
                                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-blue-primary)' }}>8,230</div>
                            </div>
                            <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--color-blue-light)', color: 'var(--color-blue-primary)' }}>
                                <Activity size={24} />
                            </div>
                        </div>
                    </Card>

                    <Card hoverEffect={false}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Revenue (₹)</div>
                                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>₹42,850</div>
                            </div>
                            <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}>
                                <TrendingUp size={24} />
                            </div>
                        </div>
                    </Card>

                    <Card hoverEffect={false}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <div className="label" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Carbon Credits</div>
                                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-blue-primary)' }}>145 CC</div>
                            </div>
                            <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--color-blue-light)', color: 'var(--color-blue-primary)' }}>
                                <Leaf size={24} />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Charts & Tables Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)' }}>

                    {/* Revenue Chart */}
                    <Card hoverEffect={false}>
                        <h3 className="card-subtitle" style={{ marginBottom: 'var(--spacing-lg)' }}>Revenue Overview</h3>
                        <div style={{ height: '300px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={revenueData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-blue-light)" />
                                    <XAxis dataKey="name" stroke="var(--color-text-secondary)" fontSize={12} />
                                    <YAxis stroke="var(--color-text-secondary)" fontSize={12} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: '1px solid var(--color-primary)' }}
                                        itemStyle={{ color: 'var(--color-primary)', fontWeight: 600 }}
                                    />
                                    <Line type="monotone" dataKey="revenue" stroke="var(--color-blue-mid)" strokeWidth={3} dot={{ fill: 'var(--color-blue-primary)', r: 4 }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Active Listings Table Placeholder */}
                    <Card hoverEffect={false}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
                            <h3 className="card-subtitle">Active Listings</h3>
                            <a href="#" style={{ fontSize: '12px', color: 'var(--color-blue-primary)', fontWeight: 600 }}>View All</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                            <div style={{ border: '1px solid var(--color-border)', borderRadius: '6px', padding: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <div style={{ fontWeight: 600 }}>Surya Tech Phase 1</div>
                                    <Badge type="default">Active</Badge>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                                    <span>₹4.20 / kWh</span>
                                    <span>150 units left</span>
                                </div>
                            </div>

                            <div style={{ border: '1px solid var(--color-border)', borderRadius: '6px', padding: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <div style={{ fontWeight: 600 }}>Surya Tech Phase 2</div>
                                    <Badge type="blue">Pending</Badge>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                                    <span>₹4.50 / kWh</span>
                                    <span>500 units left</span>
                                </div>
                            </div>

                        </div>
                    </Card>

                </div>

                {/* Add New Listing CTA */}
                <div style={{ backgroundColor: 'var(--color-accent-light)', padding: 'var(--spacing-xl)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--color-border)' }}>
                    <div>
                        <h3 className="card-title" style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>Ready to list more energy?</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Tap into GreenGrid's network of thousands of conscious consumers and investors.</p>
                    </div>
                    <Button variant="primary">Add a New Listing &rarr;</Button>
                </div>

            </main>
        </div>
    );
}
