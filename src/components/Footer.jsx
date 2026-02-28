import React from 'react';
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(135deg, #1A1A2E 0%, #0D2137 100%)',
            color: 'var(--color-white)',
            padding: 'var(--section-padding) var(--spacing-lg) var(--spacing-lg)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-2xl)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

                {/* Column 1: Logo & Tagline */}
                <div>
                    <h3 style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-md)' }}>
                        GreenGrid
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                        Decentralized peer-to-peer renewable energy marketplace powering a sustainable future.
                    </p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Twitter size={20} color="var(--color-accent-green)" />
                        <Linkedin size={20} color="var(--color-accent-green)" />
                        <Instagram size={20} color="var(--color-accent-green)" />
                    </div>
                </div>

                {/* Column 2: Links */}
                <div>
                    <h4 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-white)' }} className="card-subtitle">Platform</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><Link to="/marketplace" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>Energy Marketplace</Link></li>
                        <li><Link to="/invest" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>Investment Portal</Link></li>
                        <li><Link to="/community" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>Community Hub</Link></li>
                        <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>How it Works</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div>
                    <h4 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-white)' }} className="card-subtitle">Contact</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)' }}>
                            <Mail size={18} color="#90CAF9" />
                            <span>hello@greengrid.network</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)' }}>
                            <Phone size={18} color="#90CAF9" />
                            <span>+1 (800) 123-4567</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)' }}>
                            <MapPin size={18} color="#90CAF9" />
                            <span>San Francisco, CA</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                &copy; {new Date().getFullYear()} GreenGrid Network. All rights reserved.
            </div>
        </footer>
    );
}
