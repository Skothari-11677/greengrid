import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import Button from './Button';

export default function WalletConnectModal({ isOpen, onClose, onConnect }) {
    const [step, setStep] = useState(1);
    const [walletAddress, setWalletAddress] = useState('');

    if (!isOpen) return null;

    const handleWalletSelect = (walletName) => {
        setStep(2);
        // Simulate connection delay
        setTimeout(() => {
            setWalletAddress('0x3a4F...8c2D');
            setStep(3);
        }, 2000);
    };

    const handleVerify = () => {
        setStep(4);
        setTimeout(() => {
            if (onConnect) onConnect('0x3a4F...8c2D');
            onClose();
            // Reset for next time
            setTimeout(() => setStep(1), 500);
        }, 3000);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(13,17,23,0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 'var(--spacing-md)'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '480px',
                backgroundColor: 'var(--color-dark-surface)',
                border: '1px solid var(--color-dark-border)',
                borderRadius: '16px',
                padding: 'var(--spacing-xl)',
                position: 'relative',
                color: 'var(--color-dark-text)',
                boxShadow: '0 24px 48px rgba(0,0,0,0.5)'
            }}>

                {/* Close Button */}
                {step !== 2 && step !== 4 && (
                    <button
                        onClick={onClose}
                        style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--color-dark-muted)' }}
                    >
                        <X size={24} />
                    </button>
                )}

                {/* STEP 1: Choose Wallet */}
                {step === 1 && (
                    <div style={{ animation: 'fade-in-up 0.4s ease forwards' }} className="fade-in-up visible">
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: 'white' }}>
                            Connect Your Wallet
                        </h2>
                        <p style={{ color: 'var(--color-dark-muted)', marginBottom: 'var(--spacing-xl)', fontSize: '15px' }}>
                            Your wallet is your identity on GreenGrid. No passwords needed.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: 'var(--spacing-xl)' }}>

                            {/* MetaMask */}
                            <button onClick={() => handleWalletSelect('MetaMask')} style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                padding: '0 20px', height: '64px',
                                backgroundColor: 'var(--color-dark-card)',
                                border: '1px solid var(--color-dark-border)',
                                borderRadius: '12px',
                                transition: 'all 0.2s',
                                textAlign: 'left'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.backgroundColor = 'var(--color-dark-surface)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-dark-border)'; e.currentTarget.style.backgroundColor = 'var(--color-dark-card)'; }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '32px', height: '32px', backgroundColor: '#F6851B', borderRadius: '50%' }}></div>
                                    <span style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>MetaMask</span>
                                </div>
                                <span style={{ backgroundColor: 'rgba(30,124,58,0.2)', color: 'var(--color-chain-glow)', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Most Popular</span>
                            </button>

                            {/* WalletConnect */}
                            <button onClick={() => handleWalletSelect('WalletConnect')} style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                padding: '0 20px', height: '64px',
                                backgroundColor: 'var(--color-dark-card)',
                                border: '1px solid var(--color-dark-border)',
                                borderRadius: '12px',
                                transition: 'all 0.2s',
                                textAlign: 'left'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.backgroundColor = 'var(--color-dark-surface)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-dark-border)'; e.currentTarget.style.backgroundColor = 'var(--color-dark-card)'; }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '32px', height: '32px', backgroundColor: '#3B99FC', borderRadius: '50%' }}></div>
                                    <div>
                                        <div style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>WalletConnect</div>
                                        <div style={{ fontSize: '12px', color: 'var(--color-dark-muted)' }}>Scan with any wallet</div>
                                    </div>
                                </div>
                            </button>

                            {/* Coinbase */}
                            <button onClick={() => handleWalletSelect('Coinbase')} style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                padding: '0 20px', height: '64px',
                                backgroundColor: 'var(--color-dark-card)',
                                border: '1px solid var(--color-dark-border)',
                                borderRadius: '12px',
                                transition: 'all 0.2s',
                                textAlign: 'left'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.backgroundColor = 'var(--color-dark-surface)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-dark-border)'; e.currentTarget.style.backgroundColor = 'var(--color-dark-card)'; }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '32px', height: '32px', backgroundColor: '#0052FF', borderRadius: '50%' }}></div>
                                    <span style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>Coinbase Wallet</span>
                                </div>
                            </button>

                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <a href="#" style={{ color: 'var(--color-blue-mid)', fontSize: '14px', fontWeight: 600 }}>New to wallets? Learn how to set one up &rarr;</a>
                        </div>
                    </div>
                )}

                {/* STEP 2: Connecting */}
                {step === 2 && (
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0', animation: 'fade-in-up 0.4s ease forwards' }} className="fade-in-up visible">
                        <div style={{
                            width: '48px', height: '48px',
                            border: '3px solid rgba(30,124,58,0.2)',
                            borderTopColor: 'var(--color-primary)',
                            borderRadius: '50%',
                            margin: '0 auto 24px',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>

                        <h3 style={{ color: 'white', fontSize: '18px', marginBottom: '8px' }}>Waiting for wallet confirmation...</h3>
                        <p style={{ color: 'var(--color-dark-muted)', marginBottom: '32px' }}>Check your browser extension</p>

                        <button onClick={() => setStep(1)} style={{ color: 'var(--color-chain-red)', fontWeight: 600 }}>Cancel Request</button>
                    </div>
                )}

                {/* STEP 3: KYC */}
                {step === 3 && (
                    <div style={{ animation: 'fade-in-up 0.4s ease forwards' }} className="fade-in-up visible">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0,230,118,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-chain-glow)' }}>
                                <Check size={24} />
                            </div>
                            <div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'white' }}>Wallet Connected!</h2>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-dark-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {walletAddress} <span style={{ color: 'var(--color-blue-mid)', cursor: 'pointer' }}>copy</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: 600, color: 'var(--color-dark-muted)' }}>Aadhaar Number (Optional for basic trade)</label>
                            <input type="text" placeholder="XXXX-XXXX-XXXX" style={{
                                width: '100%', padding: '12px 16px', backgroundColor: 'var(--color-dark-card)', border: '1px solid var(--color-dark-border)', borderRadius: '8px', color: 'white', fontFamily: 'var(--font-mono)', outline: 'none'
                            }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--color-dark-border)'}
                            />
                        </div>

                        <div style={{ marginBottom: '32px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: 600, color: 'var(--color-dark-muted)' }}>PAN Number (Required for investing)</label>
                            <input type="text" placeholder="ABCDE1234F" style={{
                                width: '100%', padding: '12px 16px', backgroundColor: 'var(--color-dark-card)', border: '1px solid var(--color-dark-border)', borderRadius: '8px', color: 'white', fontFamily: 'var(--font-mono)', outline: 'none', textTransform: 'uppercase'
                            }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--color-dark-border)'}
                            />
                        </div>

                        <Button variant="primary" style={{ width: '100%', marginBottom: '16px' }} onClick={handleVerify}>Verify Identity</Button>
                        <p style={{ textAlign: 'center', fontSize: '11px', color: 'var(--color-dark-muted)' }}>Your data is hashed. GreenGrid never stores raw personal information.</p>
                    </div>
                )}

                {/* STEP 4: Complete */}
                {step === 4 && (
                    <div style={{ textAlign: 'center', animation: 'fade-in-up 0.4s ease forwards' }} className="fade-in-up visible">
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(0,230,118,0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                            border: '2px solid var(--color-chain-glow)',
                            boxShadow: '0 0 24px rgba(0,230,118,0.3)'
                        }}>
                            <Check size={40} color="var(--color-chain-glow)" />
                        </div>

                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '24px' }}>You're verified!</h2>

                        <p style={{ color: 'var(--color-dark-muted)', marginBottom: '32px' }}>Welcome to the decentralized energy grid. Redirecting you to the marketplace...</p>

                    </div>
                )}

            </div>
        </div>
    );
}
