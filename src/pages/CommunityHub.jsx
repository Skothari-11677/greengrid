import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { MapPin } from 'lucide-react';

export default function CommunityHub() {
    return (
        <div style={{ paddingBottom: 'var(--section-padding)' }}>

            {/* HERO */}
            <section style={{
                height: '400px',
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1600&q=80") center/cover',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <div>
                    <h1 className="hero-title" style={{ fontSize: '52px', marginBottom: '16px' }}>Power Your Community</h1>
                    <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                        Team up with neighbors to build local microgrids, negotiate better rates, and maximize your collective carbon offset.
                    </p>
                </div>
            </section>

            {/* FULL LEADERBOARD */}
            <section style={{ backgroundColor: 'var(--color-accent-light)', padding: 'var(--section-padding) var(--spacing-lg)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <SectionHeading title="National Community Leaderboard" decoratorColor="var(--color-primary)" />

                    <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
                            <thead>
                                <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                                    <th style={{ padding: '16px 24px' }}>Rank</th>
                                    <th style={{ padding: '16px 24px' }}>Community Name</th>
                                    <th style={{ padding: '16px 24px' }}>Location</th>
                                    <th style={{ padding: '16px 24px' }}>Members</th>
                                    <th style={{ padding: '16px 24px' }}>CO2 Offset (Tons)</th>
                                    <th style={{ padding: '16px 24px' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '16px 24px' }}><Badge style={{ backgroundColor: 'var(--color-gold)', color: 'white' }}>#1</Badge></td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600 }}>Eco Village Greens</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--color-text-secondary)' }}>Bengaluru</td>
                                    <td style={{ padding: '16px 24px' }}>142</td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-primary)' }}>12,450</td>
                                    <td style={{ padding: '16px 24px', textAlign: 'right' }}><Button variant="primary" style={{ padding: '6px 12px', fontSize: '12px' }}>Join</Button></td>
                                </tr>
                                <tr style={{ backgroundColor: 'var(--color-blue-light)', borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '16px 24px' }}><Badge style={{ backgroundColor: '#90CAF9', color: 'white' }}>#2</Badge></td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600 }}>Tech Park East</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--color-text-secondary)' }}>Hyderabad</td>
                                    <td style={{ padding: '16px 24px' }}>88</td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-blue-primary)' }}>9,320</td>
                                    <td style={{ padding: '16px 24px', textAlign: 'right' }}><Button variant="primary" style={{ padding: '6px 12px', fontSize: '12px' }}>Join</Button></td>
                                </tr>
                                <tr style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '16px 24px' }}><Badge style={{ backgroundColor: 'var(--color-accent-green)', color: 'white' }}>#3</Badge></td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600 }}>Riverside Apartments</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--color-text-secondary)' }}>Pune</td>
                                    <td style={{ padding: '16px 24px' }}>215</td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-primary)' }}>8,100</td>
                                    <td style={{ padding: '16px 24px', textAlign: 'right' }}><Button variant="primary" style={{ padding: '6px 12px', fontSize: '12px' }}>Join</Button></td>
                                </tr>
                                <tr style={{ backgroundColor: 'var(--color-blue-light)', borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '16px 24px' }}><Badge type="default">#4</Badge></td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600 }}>Sunrise Valley HOA</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--color-text-secondary)' }}>Jaipur</td>
                                    <td style={{ padding: '16px 24px' }}>42</td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-text-primary)' }}>3,200</td>
                                    <td style={{ padding: '16px 24px', textAlign: 'right' }}><Button variant="primary" style={{ padding: '6px 12px', fontSize: '12px' }}>Join</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* MAP VIEW */}
            <section style={{ backgroundColor: 'var(--color-blue-light)', padding: 'var(--section-padding) var(--spacing-lg)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <SectionHeading title="Active Communities Map" decoratorColor="var(--color-blue-primary)" />
                    <div style={{ height: '400px', backgroundColor: 'var(--color-bg)', borderRadius: '8px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white', padding: '16px', borderRadius: '8px', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <h4 className="card-subtitle" style={{ marginBottom: '8px' }}>Legend</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--color-solar)" /> Solar Dominant</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--color-wind)" /> Wind Dominant</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--color-biogas)" /> Biogas Dominant</div>
                            </div>
                        </div>

                        {/* Placeholder graphic for map */}
                        <div style={{ opacity: 0.1, width: '100%', height: '100%', background: 'repeating-linear-gradient(45deg, #bbb 0, #bbb 1px, transparent 1px, transparent 10px)' }}></div>

                        {/* Fake Pins */}
                        <MapPin size={32} color="var(--color-solar)" style={{ position: 'absolute', top: '40%', left: '30%' }} />
                        <MapPin size={32} color="var(--color-wind)" style={{ position: 'absolute', top: '60%', left: '45%' }} />
                        <MapPin size={32} color="var(--color-biogas)" style={{ position: 'absolute', top: '25%', left: '60%' }} />
                        <MapPin size={32} color="var(--color-solar)" style={{ position: 'absolute', top: '75%', left: '70%' }} />
                    </div>
                </div>
            </section>

            {/* CREATE COMMUNITY CTA */}
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: 'var(--section-padding) var(--spacing-lg)', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>Ready to Start Your Own Community?</h2>
                    <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: 'var(--spacing-xl)' }}>
                        Become a local pioneer. Pool energy resources, secure massive discounts, and track the real-world carbon offset of your neighborhood.
                        The future is decentralized.
                    </p>
                    <Button variant="white" style={{ fontSize: '16px', padding: '16px 36px' }}>Create a Community</Button>
                </div>
            </section>

        </div>
    );
}
