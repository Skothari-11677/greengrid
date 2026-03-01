import React, { useState } from 'react';
import { Search, ChevronDown, Heart, RefreshCw } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { useBlockchainContext } from '../context/BlockchainContext';
import { ETH_INR_RATE, inrToEth, ethToInr, formatDualPrice, formatEthWithInr } from '../utils/priceConverter';

const DUMMY_LISTINGS = [
    { id: 1, type: 'solar', name: 'Surya Tech Park', location: 'Bengaluru', price: 4.20, units: 150, rating: 4.8 },
    { id: 2, type: 'wind', name: 'Aura Wind Co.', location: 'Kanyakumari', price: 3.80, units: 8400, rating: 4.9 },
    { id: 3, type: 'biogas', name: 'GreenAgro Energy', location: 'Punjab', price: 5.10, units: 320, rating: 4.5 },
    { id: 4, type: 'solar', name: 'Rooftop Solarix', location: 'Pune', price: 4.40, units: 80, rating: 4.7 },
    { id: 5, type: 'wind', name: 'Vayu Farms', location: 'Tamil Nadu', price: 3.75, units: 12000, rating: 5.0 },
    { id: 6, type: 'biogas', name: 'Waste2Watt', location: 'Delhi', price: 4.90, units: 450, rating: 4.6 },
];

export default function Marketplace() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showListForm, setShowListForm] = useState(false);
    const [buyQty, setBuyQty] = useState({});  // { [listingId]: quantity }

    // List energy form state
    const [energyType, setEnergyType] = useState('Solar');
    const [location, setLocation] = useState('Jaipur, Rajasthan');
    const [price, setPrice] = useState('0.001');
    const [units, setUnits] = useState('100');

    const {
        wallet, balance, listings, trades,
        status, loading,
        connectWallet, listEnergy,
        buyEnergy, loadListings
    } = useBlockchainContext();

    const filters = ['All', 'Solar', 'Wind', 'Biogas', 'Available Now'];

    const getFilterStyle = (f) => {
        if (activeFilter !== f) return { backgroundColor: 'var(--color-bg)', color: 'var(--color-text-secondary)' };
        if (f === 'Wind') return { backgroundColor: 'var(--color-blue-mid)', color: 'var(--color-white)' };
        return { backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' };
    };

    async function handleListEnergy() {
        await listEnergy(energyType, location, price, parseInt(units));
        setShowListForm(false);
    }

    // Merge blockchain listings with dummy listings for display
    const chainListings = listings.map(l => ({
        id: l.id + 100,
        type: l.type.toLowerCase(),
        name: `${l.type} Producer`,
        location: l.location,
        priceInr: ethToInr(l.price),
        priceEth: parseFloat(l.price),
        units: l.units,
        rating: 5.0,
        onChain: true,
        chainId: l.id,
        chainPrice: l.price,
        producer: l.producer,
        active: l.active
    }));

    const allListings = [...chainListings, ...DUMMY_LISTINGS];
    const filtered = allListings.filter(l =>
        activeFilter === 'All' ||
        l.type.toLowerCase() === activeFilter.toLowerCase()
    );

    return (
        <div style={{ paddingBottom: 'var(--section-padding)', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>

            {/* Short Hero */}
            <section style={{
                height: '320px',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)'
            }}>
                <div>
                    <div className="label" style={{ color: 'var(--color-accent-green)', marginBottom: '8px' }}>Home / Marketplace</div>
                    <h1 className="hero-title" style={{ fontSize: '42px' }}>Energy Marketplace</h1>

                    {/* ── Wallet Connect Button ── */}
                    <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
                        <button
                            onClick={connectWallet}
                            style={{
                                backgroundColor: wallet ? '#00E676' : '#1565C0',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '10px 24px',
                                fontWeight: 700,
                                fontSize: '14px',
                                cursor: 'pointer'
                            }}>
                            {wallet
                                ? `✅ ${wallet.slice(0, 6)}...${wallet.slice(-4)} | ${balance} ETH`
                                : '🔗 Connect MetaMask to Trade'}
                        </button>
                        {wallet && (
                            <button
                                onClick={() => setShowListForm(!showListForm)}
                                style={{
                                    backgroundColor: 'white',
                                    color: 'var(--color-primary)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '10px 24px',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    cursor: 'pointer'
                                }}>
                                ⚡ List Your Energy
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Status Bar ── */}
            {status && (
                <div style={{
                    backgroundColor: status.includes('❌') ? '#2D0A0A' : '#0A2D1A',
                    color: status.includes('❌') ? '#FF5252' : '#00E676',
                    padding: '12px 32px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center'
                }}>
                    {status}
                </div>
            )}

            {/* ── List Energy Form (Producer) ── */}
            {showListForm && (
                <div style={{
                    backgroundColor: '#0D1117',
                    padding: '32px',
                    margin: '0',
                    borderBottom: '2px solid #1E7C3A'
                }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h3 style={{ color: 'white', fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '20px' }}>
                            📡 List Energy on Blockchain
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                                <label style={{ color: '#8B949E', fontSize: '12px', display: 'block', marginBottom: '6px' }}>ENERGY TYPE</label>
                                <select value={energyType} onChange={e => setEnergyType(e.target.value)}
                                    style={{ width: '100%', padding: '10px', backgroundColor: '#161B22', border: '1px solid #30363D', borderRadius: '6px', color: 'white', fontSize: '14px' }}>
                                    <option>Solar</option>
                                    <option>Wind</option>
                                    <option>Biogas</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ color: '#8B949E', fontSize: '12px', display: 'block', marginBottom: '6px' }}>LOCATION</label>
                                <input value={location} onChange={e => setLocation(e.target.value)}
                                    style={{ width: '100%', padding: '10px', backgroundColor: '#161B22', border: '1px solid #30363D', borderRadius: '6px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div>
                                <label style={{ color: '#8B949E', fontSize: '12px', display: 'block', marginBottom: '6px' }}>PRICE PER UNIT (ETH)</label>
                                <input value={price} onChange={e => setPrice(e.target.value)} type="number"
                                    style={{ width: '100%', padding: '10px', backgroundColor: '#161B22', border: '1px solid #30363D', borderRadius: '6px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }} />
                                {price && <div style={{ color: '#40C4FF', fontSize: '12px', marginTop: '4px' }}>≈ ₹{ethToInr(price).toLocaleString('en-IN', { maximumFractionDigits: 2 })} INR / kWh</div>}
                            </div>
                            <div>
                                <label style={{ color: '#8B949E', fontSize: '12px', display: 'block', marginBottom: '6px' }}>UNITS AVAILABLE (kWh)</label>
                                <input value={units} onChange={e => setUnits(e.target.value)} type="number"
                                    style={{ width: '100%', padding: '10px', backgroundColor: '#161B22', border: '1px solid #30363D', borderRadius: '6px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                        </div>
                        <button onClick={handleListEnergy} disabled={loading}
                            style={{ marginTop: '20px', width: '100%', padding: '12px', backgroundColor: '#1E7C3A', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
                            {loading ? '⏳ Processing...' : '📡 List on Blockchain'}
                        </button>
                    </div>
                </div>
            )}

            {/* Filter + Search Bar */}
            <div style={{
                position: 'sticky', top: '64px', zIndex: 900,
                backgroundColor: 'var(--color-white)',
                borderBottom: '1px solid var(--color-border)',
                padding: '16px var(--spacing-lg)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {filters.map(f => (
                            <button key={f} onClick={() => setActiveFilter(f)}
                                style={{ padding: '6px 16px', borderRadius: '100px', fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 600, transition: 'all 0.2s', border: 'none', cursor: 'pointer', ...getFilterStyle(f) }}>
                                {f}
                            </button>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <input type="text" placeholder="Search producers..."
                                style={{ padding: '10px 16px', paddingRight: '40px', borderRadius: '6px', border: '1px solid var(--color-border)', outline: 'none', fontFamily: 'var(--font-body)', width: '240px' }} />
                            <Search size={18} color="var(--color-text-secondary)" style={{ position: 'absolute', right: '12px', top: '10px' }} />
                        </div>
                        <button style={{ color: 'var(--color-blue-primary)', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                            Location <ChevronDown size={16} />
                        </button>
                        <button onClick={() => loadListings()}
                            style={{ color: 'var(--color-blue-primary)', fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 600, marginLeft: '16px', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <RefreshCw size={14} /> Refresh
                        </button>
                    </div>
                </div>
            </div>

            {/* Listings Grid */}
            <div style={{ maxWidth: '1200px', margin: 'var(--spacing-3xl) auto 0', padding: '0 var(--spacing-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <h2 className="section-title" style={{ fontSize: '24px' }}>
                        {activeFilter === 'All' ? 'All Available Units' : `${activeFilter} Listings`}
                    </h2>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                        Sort by: <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600, cursor: 'pointer' }}>
                            Newest <ChevronDown size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                        </span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)' }}>
                    {filtered.map(item => (
                        <Card key={item.id} leftBorderColor={item.type === 'wind' ? 'var(--color-blue-primary)' : 'var(--color-primary)'}>

                            {/* On-Chain Badge */}
                            {item.onChain && (
                                <div style={{
                                    backgroundColor: '#0D1117', borderRadius: '6px',
                                    padding: '6px 12px', marginBottom: '12px',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                                }}>
                                    <span style={{ color: '#627EEA', fontSize: '11px', fontWeight: 700 }}>
                                        ⛓ ETHEREUM · ON-CHAIN
                                    </span>
                                    <span style={{
                                        color: item.active ? '#00E676' : '#8B949E',
                                        fontSize: '11px', fontWeight: 700
                                    }}>
                                        {item.active ? '● LIVE' : '● SOLD'}
                                    </span>
                                </div>
                            )}

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                                <Badge type={item.type}>
                                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}{' '}
                                    {item.type === 'solar' ? 'Rooftop' : item.type === 'wind' ? 'Farm' : 'Plant'}
                                </Badge>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-gold)', fontWeight: 700, fontSize: '14px' }}>
                                    ★ {item.rating}
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 600, color: 'var(--color-primary)' }}>
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="card-title" style={{ fontSize: '18px', marginBottom: '2px' }}>{item.name}</h3>
                                    <span className="label" style={{ color: 'var(--color-text-secondary)', fontSize: '10px' }}>
                                        📍 {item.location}
                                        {item.onChain && (
                                            <span style={{ fontFamily: 'monospace', marginLeft: '8px', color: '#40C4FF' }}>
                                                {item.producer?.slice(0, 6)}...{item.producer?.slice(-4)}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                                    <span style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                                        {item.onChain ? `₹${item.priceInr.toFixed(2)}` : `₹${item.price.toFixed(2)}`}
                                    </span>
                                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>/ kWh</span>
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--color-blue-primary)', fontFamily: 'var(--font-mono, monospace)', marginTop: '2px' }}>
                                    ≈ {item.onChain
                                        ? `${item.priceEth.toFixed(6)} ETH`
                                        : `${inrToEth(item.price).toFixed(6)} ETH`
                                    } / kWh
                                </div>
                            </div>

                            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', fontWeight: 500 }}>
                                {item.units.toLocaleString()} Units Available
                            </p>

                            <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                                {item.onChain && item.active && wallet ? (
                                    <>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <button
                                                onClick={() => setBuyQty(prev => ({ ...prev, [item.id]: Math.max(1, (prev[item.id] || 10) - 5) }))}
                                                style={{ width: '36px', height: '36px', borderRadius: '6px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', fontSize: '18px', fontWeight: 700, cursor: 'pointer', color: 'var(--color-text-primary)' }}
                                            >−</button>
                                            <input
                                                type="number"
                                                min="1"
                                                max={item.units}
                                                value={buyQty[item.id] || 10}
                                                onChange={e => setBuyQty(prev => ({ ...prev, [item.id]: Math.max(1, Math.min(item.units, parseInt(e.target.value) || 1)) }))}
                                                style={{ width: '64px', height: '36px', textAlign: 'center', borderRadius: '6px', border: '1px solid var(--color-border)', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}
                                            />
                                            <button
                                                onClick={() => setBuyQty(prev => ({ ...prev, [item.id]: Math.min(item.units, (prev[item.id] || 10) + 5) }))}
                                                style={{ width: '36px', height: '36px', borderRadius: '6px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', fontSize: '18px', fontWeight: 700, cursor: 'pointer', color: 'var(--color-text-primary)' }}
                                            >+</button>
                                            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>kWh</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                            <Button
                                                variant="primary"
                                                style={{ flex: 1 }}
                                                onClick={() => buyEnergy(item.chainId, item.chainPrice, buyQty[item.id] || 10)}
                                                disabled={loading}>
                                                {loading ? '⏳ Processing...' : `⚡ Buy ${buyQty[item.id] || 10} kWh`}
                                            </Button>
                                            <button style={{
                                                width: '44px', height: '40px', borderRadius: '6px',
                                                border: '2px solid var(--color-blue-light)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                backgroundColor: 'white', cursor: 'pointer', transition: 'background-color 0.2s'
                                            }}
                                                onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--color-blue-light)'}
                                                onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}>
                                                <Heart size={20} color="var(--color-blue-primary)" />
                                            </button>
                                        </div>
                                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                                            Total: ≈ {((buyQty[item.id] || 10) * (item.priceEth || inrToEth(item.price))).toFixed(6)} ETH
                                            <span style={{ marginLeft: '8px' }}>(₹{((buyQty[item.id] || 10) * (item.priceInr || item.price)).toFixed(2)})</span>
                                        </div>
                                    </>
                                ) : (
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <Button variant="primary" style={{ flex: 1 }}>
                                            Buy / Negotiate
                                        </Button>
                                        <button style={{
                                            width: '44px', borderRadius: '6px',
                                            border: '2px solid var(--color-blue-light)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            backgroundColor: 'white', cursor: 'pointer', transition: 'background-color 0.2s'
                                        }}
                                            onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--color-blue-light)'}
                                            onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}>
                                            <Heart size={20} color="var(--color-blue-primary)" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* ── Live Transaction Feed ── */}
                {trades.length > 0 && (
                    <div style={{
                        marginTop: '48px', backgroundColor: '#0D1117',
                        borderRadius: '12px', padding: '24px',
                        border: '1px solid #30363D'
                    }}>
                        <h3 style={{ color: 'white', fontFamily: 'var(--font-heading)', fontSize: '18px', marginBottom: '4px' }}>
                            📋 Live Transaction Feed
                        </h3>
                        <div style={{ width: '48px', height: '3px', backgroundColor: '#D4A017', marginBottom: '20px' }} />
                        {trades.map((t, i) => (
                            <div key={i} style={{
                                borderBottom: '1px solid #30363D', padding: '12px 0',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                            }}>
                                <div>
                                    <span style={{ color: 'white', fontWeight: 600 }}>⚡ Bought {t.units} kWh</span>
                                    <span style={{ color: '#8B949E', fontSize: '13px', marginLeft: '12px' }}>
                                        Listing #{t.listing} · {t.time}
                                    </span>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ color: '#FFD740', fontWeight: 700 }}>{t.paid} ETH <span style={{ color: '#8B949E', fontWeight: 400, fontSize: '12px' }}>≈ ₹{ethToInr(t.paid).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span></div>
                                    <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#40C4FF' }}>
                                        {t.hash.slice(0, 14)}...
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: 700, color: t.status.includes('Confirmed') ? '#00E676' : '#40C4FF' }}>
                                        {t.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: 'var(--spacing-3xl)' }}>
                    <button style={{ padding: '8px 16px', border: '1px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-white)', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Prev</button>
                    <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', fontWeight: 600, cursor: 'pointer' }}>1</button>
                    <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', color: 'var(--color-text-primary)', cursor: 'pointer' }}>2</button>
                    <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', color: 'var(--color-text-primary)', cursor: 'pointer' }}>3</button>
                    <button style={{ padding: '8px 16px', border: '1px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-white)', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Next</button>
                </div>
            </div>
        </div>
    );
}
