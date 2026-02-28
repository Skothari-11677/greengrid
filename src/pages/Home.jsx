import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Wind, Flame, Users, Leaf, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const heroSlides = [
        {
            label: 'Decentralized Energy Exchange',
            labelColor: 'var(--color-accent-green)',
            title: 'Power your life with pure solar energy.',
            subtitle: 'Join thousands of households trading directly with local solar producers.',
            bg: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80") center/cover'
        },
        {
            label: 'Trade Clean Wind Power',
            labelColor: 'var(--color-blue-mid)', // blue eyebrow
            title: 'Harness the sky. Invest in wind.',
            subtitle: 'Direct peer-to-peer trading for wind farms and conscious consumers.',
            bg: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1600&q=80") center/cover'
        },
        {
            label: 'Power Your Neighborhood',
            labelColor: 'var(--color-accent-green)',
            title: 'Community microgrids are here.',
            subtitle: 'Form sustainable energy pacts with your neighbors and track collective impact.',
            bg: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80") center/cover'
        }
    ];

    return (
        <div style={{ paddingBottom: 'var(--section-padding)' }}>
            {/* SECTION 1: HERO */}
            <section style={{
                position: 'relative',
                height: '80vh',
                minHeight: '600px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-white)',
                textAlign: 'center'
            }}>
                {heroSlides.map((s, i) => (
                    <div key={i} className="ken-burns-anim" style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: s.bg,
                        opacity: slide === i ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        zIndex: -1
                    }}></div>
                ))}

                <div style={{ maxWidth: '800px', padding: '0 var(--spacing-lg)' }}>
                    <div style={{ color: heroSlides[slide].labelColor, marginBottom: 'var(--spacing-md)' }} className="label">
                        {heroSlides[slide].label}
                    </div>
                    <h1 className="hero-title" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        {heroSlides[slide].title}
                    </h1>
                    <p style={{ fontSize: '16px', marginBottom: 'var(--spacing-xl)', maxWidth: '80%', margin: '0 auto var(--spacing-xl)' }}>
                        {heroSlides[slide].subtitle}
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
                        <Link to="/marketplace">
                            <Button variant="primary">Explore the Marketplace</Button>
                        </Link>
                        <Link to="/invest">
                            <Button style={{ border: '2px solid rgba(144,202,249,0.8)', color: 'rgba(144,202,249,0.8)', backgroundColor: 'transparent' }}
                                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(144,202,249,0.1)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                List Your Energy
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Slider Dots */}
                <div style={{ position: 'absolute', bottom: '32px', display: 'flex', gap: '12px' }}>
                    {[0, 1, 2].map(i => (
                        <div key={i} onClick={() => setSlide(i)} style={{
                            width: slide === i ? '32px' : '12px',
                            height: '4px',
                            backgroundColor: slide === i ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}></div>
                    ))}
                </div>
            </section>

            {/* SECTION 2: STATS STRIP */}
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', padding: 'var(--spacing-2xl) 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                    <div>
                        <div className="stat-number">2,400+</div>
                        <div className="label" style={{ color: 'var(--color-gold)', marginTop: '8px' }}>Producers</div>
                    </div>
                    <div>
                        <div className="stat-number">18,700</div>
                        <div className="label" style={{ color: '#90CAF9', marginTop: '8px' }}>MWh Traded</div>
                    </div>
                    <div>
                        <div className="stat-number">₹12Cr</div>
                        <div className="label" style={{ color: 'var(--color-gold)', marginTop: '8px' }}>Invested</div>
                    </div>
                    <div>
                        <div className="stat-number">34</div>
                        <div className="label" style={{ color: '#90CAF9', marginTop: '8px' }}>Communities Active</div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: HOW IT WORKS */}
            <section style={{ padding: 'var(--section-padding) var(--spacing-lg)', backgroundColor: 'var(--color-bg)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <SectionHeading title="How GreenGrid Works" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)' }}>
                        {[
                            { num: 1, title: 'Register & Verify', desc: 'Secure blockchain-backed identity verification for consumers and green energy producers.', color: 'var(--color-primary)' },
                            { num: 2, title: 'List or Browse Energy', desc: 'Producers set real-time dynamic pricing. Consumers browse live local energy availability.', color: 'var(--color-blue-primary)' },
                            { num: 3, title: 'Trade, Invest & Track', desc: 'Smart contracts match trades instantly. Track your carbon offset on the live dashboard.', color: 'var(--color-primary)' }
                        ].map((step, i) => (
                            <div key={i}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: step.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 800, marginBottom: 'var(--spacing-md)' }}>
                                    {step.num}
                                </div>
                                <h3 className="card-title" style={{ marginBottom: '8px' }}>{step.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: MARKETPLACE PREVIEW */}
            <section style={{ padding: 'var(--section-padding) var(--spacing-lg)', backgroundColor: 'var(--color-white)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <SectionHeading title="Active Energy Listings" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)' }}>

                        <Card leftBorderColor="var(--color-primary)">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                                <Badge type="solar">Solar Rooftop</Badge>
                                <span className="label" style={{ color: 'var(--color-text-secondary)' }}>Bengaluru</span>
                            </div>
                            <h3 className="card-title" style={{ marginBottom: '4px' }}>Surya Tech Park</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: 'var(--spacing-md)' }}>
                                <span style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>₹4.20</span>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>/ kWh</span>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>150 Units Available Now</p>
                            <Button variant="primary" style={{ width: '100%' }}>View Deal</Button>
                        </Card>

                        <Card leftBorderColor="var(--color-blue-primary)">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                                <Badge type="wind">Wind Farm</Badge>
                                <span className="label" style={{ color: 'var(--color-text-secondary)' }}>Kanyakumari</span>
                            </div>
                            <h3 className="card-title" style={{ marginBottom: '4px' }}>Aura Wind Co.</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: 'var(--spacing-md)' }}>
                                <span style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>₹3.80</span>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>/ kWh</span>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>8,400 Units Available Now</p>
                            <Button variant="primary" style={{ width: '100%' }}>View Deal</Button>
                        </Card>

                        <Card leftBorderColor="var(--color-primary)">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                                <Badge type="biogas">Biogas Plant</Badge>
                                <span className="label" style={{ color: 'var(--color-text-secondary)' }}>Punjab</span>
                            </div>
                            <h3 className="card-title" style={{ marginBottom: '4px' }}>GreenAgro Energy</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: 'var(--spacing-md)' }}>
                                <span style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>₹5.10</span>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>/ kWh</span>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>320 Units Available Now</p>
                            <Button variant="primary" style={{ width: '100%' }}>View Deal</Button>
                        </Card>

                    </div>
                </div>
            </section>

            {/* SECTION 5: ENERGY TYPES GRID */}
            <section style={{ padding: 'var(--section-padding) var(--spacing-lg)', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <SectionHeading title="Energy Sources We Support" decoratorColor="var(--color-accent-green)" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                <Sun size={28} color="white" />
                            </div>
                            <h3 className="card-title" style={{ marginBottom: '8px' }}>Solar Rooftop</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Harness the power of the sun. Partner with residential and commercial solar installations in your city.</p>
                        </div>
                        <div>
                            <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                <Flame size={28} color="white" />
                            </div>
                            <h3 className="card-title" style={{ marginBottom: '8px' }}>Biogas Plants</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Support circular economy by purchasing energy derived from organic waste treatment.</p>
                        </div>
                        <div>
                            <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                <Wind size={28} color="white" />
                            </div>
                            <h3 className="card-title" style={{ marginBottom: '8px' }}>Wind Farms</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Invest in scalable wind generation. Perfect for large industrial consumers seeking bulk green energy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: COMMUNITY */}
            <section style={{ padding: 'var(--section-padding) var(--spacing-lg)', backgroundColor: 'var(--color-white)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3xl)', alignItems: 'center' }}>
                    <div>
                        <SectionHeading title="Community Sustainability" />
                        <p style={{ marginBottom: 'var(--spacing-lg)', fontSize: '16px', color: 'var(--color-text-secondary)' }}>
                            Join local energy pooling. Communities that generate and share power locally build resilience and get rewarded.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <ShieldCheck color="var(--color-accent-green)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>Gain access to group volume discounts on green energy.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <ShieldCheck color="var(--color-blue-mid)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>Smart grid analytics for community net-zero tracking.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <ShieldCheck color="var(--color-accent-green)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>Earn tradable carbon credits for community offsets.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Card hoverEffect={false} style={{ marginBottom: 'var(--spacing-md)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <h4 className="card-subtitle">Sunrise Valley HOA</h4>
                                <Badge type="default">42 Members</Badge>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                                <span>Carbon Offset Goal</span>
                                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>1,200 Tons</span>
                            </div>
                            <ProgressBar raised={840} target={1200} showStats={false} type="gradient" />
                        </Card>
                        <Card hoverEffect={false}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <h4 className="card-subtitle">Tech Park East</h4>
                                <Badge type="blue">18 Members</Badge>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                                <span>Carbon Offset Goal</span>
                                <span style={{ fontWeight: 600, color: 'var(--color-blue-primary)' }}>5,000 Tons</span>
                            </div>
                            <ProgressBar raised={4200} target={5000} showStats={false} type="gradient" />
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 7: INVESTMENT OPPORTUNITIES (BLUE BG) */}
            <section style={{ padding: 'var(--section-padding) var(--spacing-lg)', backgroundColor: 'var(--color-blue-light)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <SectionHeading title="Invest in Clean Energy Projects" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-xl)' }}>

                        <Card hoverEffect={true} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <h3 className="card-title">Karnataka Wind Expansion Phase II</h3>
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                        <Badge type="wind">Wind</Badge>
                                        <span className="label" style={{ color: 'var(--color-text-secondary)', alignSelf: 'center' }}>Hubli, KA</span>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-blue-primary)', fontFamily: 'var(--font-heading)' }}>12.5%</div>
                                    <div className="label">Proj. ROI</div>
                                </div>
                            </div>
                            <ProgressBar label="Funding Progress" raised={4500000} target={10000000} type="gradient" />
                            <Button variant="primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Invest Now</Button>
                        </Card>

                        <Card hoverEffect={true} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <h3 className="card-title">Navi Mumbai Solar Grid</h3>
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                        <Badge type="solar">Solar</Badge>
                                        <span className="label" style={{ color: 'var(--color-text-secondary)', alignSelf: 'center' }}>Mumbai, MH</span>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>9.8%</div>
                                    <div className="label">Proj. ROI</div>
                                </div>
                            </div>
                            <ProgressBar label="Funding Progress" raised={8500000} target={12000000} type="gradient" />
                            <Button variant="primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Invest Now</Button>
                        </Card>

                    </div>
                </div>
            </section>

            {/* SECTION 8: LEADERBOARD PREVIEW */}
            <section style={{ padding: 'var(--section-padding) var(--spacing-lg)', backgroundColor: 'var(--color-white)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <SectionHeading title="Top Communities" style={{ marginBottom: 0 }} />
                        <Link to="/community">
                            <Button variant="secondary-blue">See Full Leaderboard</Button>
                        </Link>
                    </div>
                    <div style={{ marginTop: 'var(--spacing-xl)', borderRadius: '8px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
                            <thead>
                                <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                                    <th style={{ padding: '16px 24px' }}>Rank</th>
                                    <th style={{ padding: '16px 24px' }}>Community Name</th>
                                    <th style={{ padding: '16px 24px' }}>Members</th>
                                    <th style={{ padding: '16px 24px' }}>CO2 Offset (Tons)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)' }}>
                                    <td style={{ padding: '16px 24px' }}><Badge style={{ backgroundColor: 'var(--color-gold)', color: 'white' }}>#1</Badge></td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600 }}>Eco Village Greens</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--color-text-secondary)' }}>142</td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-primary)' }}>12,450</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-blue-light)' }}>
                                    <td style={{ padding: '16px 24px' }}><Badge style={{ backgroundColor: '#90CAF9', color: 'white' }}>#2</Badge></td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600 }}>Tech Park East</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--color-text-secondary)' }}>88</td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-blue-primary)' }}>9,320</td>
                                </tr>
                                <tr style={{ backgroundColor: 'var(--color-white)' }}>
                                    <td style={{ padding: '16px 24px' }}><Badge style={{ backgroundColor: 'var(--color-accent-green)', color: 'white' }}>#3</Badge></td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600 }}>Riverside Apartments</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--color-text-secondary)' }}>215</td>
                                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-primary)' }}>8,100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SECTION 9: TESTIMONIALS */}
            <section style={{ padding: 'var(--section-padding) var(--spacing-lg)', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <SectionHeading title="What Our Network Says" decoratorColor="var(--color-gold)" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)' }}>

                        <Card style={{ backgroundColor: 'var(--color-dark)', border: 'none', color: 'white' }}>
                            <div style={{ fontSize: '48px', color: 'var(--color-gold)', fontFamily: 'serif', lineHeight: 0.5, marginBottom: '16px' }}>"</div>
                            <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)', color: 'rgba(255,255,255,0.8)' }}>
                                GreenGrid totally transformed how we monetize excess solar. We trade straight to local businesses.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)' }}></div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Rajan S.</div>
                                    <div className="label" style={{ color: 'var(--color-gold)', fontSize: '10px' }}>Producer</div>
                                </div>
                            </div>
                        </Card>

                        <Card style={{ backgroundColor: 'var(--color-dark)', border: 'none', color: 'white' }}>
                            <div style={{ fontSize: '48px', color: '#90CAF9', fontFamily: 'serif', lineHeight: 0.5, marginBottom: '16px' }}>"</div>
                            <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)', color: 'rgba(255,255,255,0.8)' }}>
                                The transparency of block-chain verified wind energy is what gave our firm the confidence to invest.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-blue-mid)' }}></div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Anita W.</div>
                                    <div className="label" style={{ color: '#90CAF9', fontSize: '10px' }}>Investor</div>
                                </div>
                            </div>
                        </Card>

                        <Card style={{ backgroundColor: 'var(--color-dark)', border: 'none', color: 'white' }}>
                            <div style={{ fontSize: '48px', color: 'var(--color-gold)', fontFamily: 'serif', lineHeight: 0.5, marginBottom: '16px' }}>"</div>
                            <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)', color: 'rgba(255,255,255,0.8)' }}>
                                We power our entire bakery purely off local biogas. The community impact is truly beautiful.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)' }}></div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Preeti M.</div>
                                    <div className="label" style={{ color: 'var(--color-gold)', fontSize: '10px' }}>Consumer</div>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </section>

        </div>
    );
}
