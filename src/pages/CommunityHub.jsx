import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import { MessageCircle, ThumbsUp, Share2, Send, TrendingUp, Users, Leaf, Award } from 'lucide-react';

// ── Mock Data ──────────────────────────────────────────────

const COMMUNITIES = [
    { id: 1, name: 'Eco Village Greens', location: 'Bengaluru', members: 142, co2: '12,450', rank: 1, joined: true },
    { id: 2, name: 'Tech Park East', location: 'Hyderabad', members: 88, co2: '9,320', rank: 2, joined: false },
    { id: 3, name: 'Riverside Apartments', location: 'Pune', members: 215, co2: '8,100', rank: 3, joined: false },
    { id: 4, name: 'Sunrise Valley HOA', location: 'Jaipur', members: 42, co2: '3,200', rank: 4, joined: false },
];

const INITIAL_POSTS = [
    {
        id: 1, author: 'Aarav S.', community: 'Eco Village Greens', avatar: '🌱',
        time: '2 hours ago', type: 'discussion',
        title: 'Has anyone switched from grid to 100% solar? What was your payback period?',
        content: 'I\'m considering going fully off-grid with a 5kW rooftop solar setup. My current electricity bill is around ₹3,500/month. Would love to hear from anyone who has made the switch — how long did it take to break even?',
        likes: 24, comments: 8, liked: false
    },
    {
        id: 2, author: 'Priya M.', community: 'Tech Park East', avatar: '⚡',
        time: '5 hours ago', type: 'tip',
        title: 'Pro Tip: Buy in bulk (100+ kWh) to get the automatic 10% discount',
        content: 'Just discovered that orders ≥100 kWh on the GreenGrid marketplace get an automatic 10% discount! The discount is built into the smart contract, so it\'s guaranteed. Saved ₹420 on my last purchase. 💰',
        likes: 47, comments: 12, liked: true
    },
    {
        id: 3, author: 'Rajesh K.', community: 'Riverside Apartments', avatar: '🏠',
        time: '1 day ago', type: 'question',
        title: 'How do I verify that I\'m actually getting renewable energy and not just regular grid power?',
        content: 'When I buy "solar" energy on the marketplace, how can I be sure it\'s actually solar? Is there any on-chain verification? Can someone explain the verification process?',
        likes: 31, comments: 15, liked: false
    },
    {
        id: 4, author: 'Sneha R.', community: 'Eco Village Greens', avatar: '🌿',
        time: '2 days ago', type: 'announcement',
        title: '🎉 Our community just hit 12,000 tons of CO₂ offset!',
        content: 'Incredible milestone for Eco Village Greens! In just 18 months, our collective solar and wind purchases have offset over 12,000 tons of CO₂. That\'s equivalent to planting 200,000 trees. Keep going everyone!',
        likes: 89, comments: 23, liked: false
    },
    {
        id: 5, author: 'Vikram D.', community: 'Sunrise Valley HOA', avatar: '☀️',
        time: '3 days ago', type: 'discussion',
        title: 'Government just announced new solar tariff rates — how does it affect us?',
        content: 'The Ministry of New & Renewable Energy published new tariff ceilings (₹4.50/kWh for residential). I saw the notice in the Govt Hub Regulatory Feed. Producers, how will this affect your pricing? Consumers, are we going to see lower prices?',
        likes: 56, comments: 34, liked: false
    },
];

const POST_TYPE_STYLES = {
    discussion: { bg: '#2196F322', color: '#2196F3', label: '💬 Discussion' },
    tip: { bg: '#00E67622', color: '#00E676', label: '💡 Pro Tip' },
    question: { bg: '#FFD74022', color: '#FFD740', label: '❓ Question' },
    announcement: { bg: '#FF525222', color: '#FF5252', label: '📢 Announcement' },
};

export default function CommunityHub() {
    const [communities, setCommunities] = useState(COMMUNITIES);
    const [posts, setPosts] = useState(INITIAL_POSTS);
    const [activeFilter, setActiveFilter] = useState('all');
    const [newPostOpen, setNewPostOpen] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', content: '', type: 'discussion' });

    const toggleJoin = (id) => {
        setCommunities(prev => prev.map(c =>
            c.id === id ? { ...c, joined: !c.joined, members: c.joined ? c.members - 1 : c.members + 1 } : c
        ));
    };

    const toggleLike = (id) => {
        setPosts(prev => prev.map(p =>
            p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
        ));
    };

    const submitPost = () => {
        if (!newPost.title.trim()) return;
        setPosts(prev => [{
            id: Date.now(), author: 'You', community: 'Eco Village Greens', avatar: '👤',
            time: 'Just now', type: newPost.type,
            title: newPost.title, content: newPost.content,
            likes: 0, comments: 0, liked: false
        }, ...prev]);
        setNewPost({ title: '', content: '', type: 'discussion' });
        setNewPostOpen(false);
    };

    const filteredPosts = activeFilter === 'all' ? posts : posts.filter(p => p.type === activeFilter);

    return (
        <div style={{ paddingBottom: 'var(--section-padding)' }}>

            {/* HERO */}
            <section style={{
                height: '340px',
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1600&q=80") center/cover',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <div>
                    <h1 className="hero-title" style={{ fontSize: '48px', marginBottom: '12px' }}>GreenGrid Community</h1>
                    <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                        Discuss, learn, and grow with fellow energy pioneers. Ask questions, share tips, and celebrate milestones.
                    </p>
                </div>
            </section>

            {/* MAIN LAYOUT */}
            <section style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px' }}>

                    {/* ── LEFT: Feed ── */}
                    <div>
                        {/* Create Post */}
                        <div style={{
                            backgroundColor: 'var(--color-white)', borderRadius: '12px',
                            border: '1px solid var(--color-border)', padding: '16px',
                            marginBottom: '20px'
                        }}>
                            {!newPostOpen ? (
                                <button
                                    onClick={() => setNewPostOpen(true)}
                                    style={{
                                        width: '100%', padding: '12px 16px', borderRadius: '100px',
                                        border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)',
                                        color: 'var(--color-text-secondary)', textAlign: 'left', fontSize: '14px',
                                        cursor: 'pointer', fontFamily: 'var(--font-body)'
                                    }}
                                >
                                    💬 Start a discussion, ask a question, or share a tip...
                                </button>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {Object.entries(POST_TYPE_STYLES).map(([key, style]) => (
                                            <button key={key}
                                                onClick={() => setNewPost(p => ({ ...p, type: key }))}
                                                style={{
                                                    padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 600,
                                                    border: newPost.type === key ? `2px solid ${style.color}` : '1px solid var(--color-border)',
                                                    backgroundColor: newPost.type === key ? style.bg : 'transparent',
                                                    color: newPost.type === key ? style.color : 'var(--color-text-secondary)',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {style.label}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        placeholder="Title..."
                                        value={newPost.title}
                                        onChange={e => setNewPost(p => ({ ...p, title: e.target.value }))}
                                        style={{
                                            padding: '10px 14px', borderRadius: '8px', fontSize: '15px', fontWeight: 600,
                                            border: '1px solid var(--color-border)', fontFamily: 'var(--font-heading)', outline: 'none'
                                        }}
                                    />
                                    <textarea
                                        placeholder="What's on your mind? (optional)"
                                        value={newPost.content}
                                        onChange={e => setNewPost(p => ({ ...p, content: e.target.value }))}
                                        rows={3}
                                        style={{
                                            padding: '10px 14px', borderRadius: '8px', fontSize: '14px',
                                            border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)',
                                            resize: 'vertical', outline: 'none'
                                        }}
                                    />
                                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                        <button onClick={() => setNewPostOpen(false)} style={{ padding: '8px 20px', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Cancel</button>
                                        <button onClick={submitPost} style={{ padding: '8px 20px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--color-primary)', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <Send size={14} /> Post
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Filter Bar */}
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                            {[{ key: 'all', label: '🔥 All' }, ...Object.entries(POST_TYPE_STYLES).map(([k, v]) => ({ key: k, label: v.label }))].map(f => (
                                <button key={f.key}
                                    onClick={() => setActiveFilter(f.key)}
                                    style={{
                                        padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600,
                                        border: activeFilter === f.key ? 'none' : '1px solid var(--color-border)',
                                        backgroundColor: activeFilter === f.key ? 'var(--color-primary)' : 'var(--color-white)',
                                        color: activeFilter === f.key ? 'white' : 'var(--color-text-secondary)',
                                        cursor: 'pointer', fontFamily: 'var(--font-heading)'
                                    }}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        {/* Posts Feed */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {filteredPosts.map(post => {
                                const typeStyle = POST_TYPE_STYLES[post.type];
                                return (
                                    <article key={post.id} style={{
                                        backgroundColor: 'var(--color-white)', borderRadius: '12px',
                                        border: '1px solid var(--color-border)', padding: '20px',
                                        transition: 'box-shadow 0.2s'
                                    }}
                                        onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'}
                                        onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}
                                    >
                                        {/* Header */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                            <span style={{ fontSize: '28px' }}>{post.avatar}</span>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--color-text-primary)' }}>{post.author}</span>
                                                    <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>in</span>
                                                    <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>{post.community}</span>
                                                </div>
                                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{post.time}</div>
                                            </div>
                                            <span style={{
                                                padding: '3px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 700,
                                                backgroundColor: typeStyle.bg, color: typeStyle.color
                                            }}>
                                                {typeStyle.label}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.4, color: 'var(--color-text-primary)' }}>
                                            {post.title}
                                        </h3>
                                        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                                            {post.content}
                                        </p>

                                        {/* Actions */}
                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
                                            <button
                                                onClick={() => toggleLike(post.id)}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '6px', border: 'none',
                                                    backgroundColor: 'transparent', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
                                                    color: post.liked ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                                                }}
                                            >
                                                <ThumbsUp size={16} fill={post.liked ? 'var(--color-primary)' : 'none'} /> {post.likes}
                                            </button>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                                                <MessageCircle size={16} /> {post.comments} Comments
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 600, cursor: 'pointer' }}>
                                                <Share2 size={16} /> Share
                                            </span>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── RIGHT: Sidebar ── */}
                    <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* Community Stats */}
                        <div style={{
                            backgroundColor: 'var(--color-primary)', color: 'white',
                            borderRadius: '12px', padding: '24px'
                        }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', marginBottom: '16px' }}>🌍 Platform Stats</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                {[
                                    { label: 'Communities', value: '4', icon: <Users size={16} /> },
                                    { label: 'Members', value: '487', icon: <Users size={16} /> },
                                    { label: 'CO₂ Offset', value: '33K tons', icon: <Leaf size={16} /> },
                                    { label: 'Posts Today', value: '12', icon: <MessageCircle size={16} /> },
                                ].map((s, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {s.icon}
                                        <div>
                                            <div style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{s.value}</div>
                                            <div style={{ fontSize: '11px', opacity: 0.8 }}>{s.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Community Leaderboard */}
                        <div style={{
                            backgroundColor: 'var(--color-white)', borderRadius: '12px',
                            border: '1px solid var(--color-border)', padding: '20px'
                        }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Award size={18} color="var(--color-gold)" /> Leaderboard
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {communities.map(c => (
                                    <div key={c.id} style={{
                                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                                        borderRadius: '8px', backgroundColor: c.joined ? 'rgba(30,124,58,0.06)' : 'transparent',
                                        border: c.joined ? '1px solid rgba(30,124,58,0.2)' : '1px solid transparent'
                                    }}>
                                        <span style={{
                                            width: '28px', height: '28px', borderRadius: '50%', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800,
                                            backgroundColor: c.rank <= 3 ? 'var(--color-gold)' : 'var(--color-border)',
                                            color: c.rank <= 3 ? 'white' : 'var(--color-text-secondary)',
                                            fontFamily: 'var(--font-heading)'
                                        }}>
                                            {c.rank}
                                        </span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--color-text-primary)' }}>{c.name}</div>
                                            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>{c.location} · {c.members} members</div>
                                        </div>
                                        <button
                                            onClick={() => toggleJoin(c.id)}
                                            style={{
                                                padding: '4px 14px', borderRadius: '100px', fontSize: '11px', fontWeight: 700,
                                                border: c.joined ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                                                backgroundColor: c.joined ? 'var(--color-primary)' : 'transparent',
                                                color: c.joined ? 'white' : 'var(--color-text-secondary)',
                                                cursor: 'pointer', fontFamily: 'var(--font-heading)',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {c.joined ? '✓ Joined' : 'Join'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trending Topics */}
                        <div style={{
                            backgroundColor: 'var(--color-white)', borderRadius: '12px',
                            border: '1px solid var(--color-border)', padding: '20px'
                        }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <TrendingUp size={18} color="var(--color-blue-primary)" /> Trending
                            </h3>
                            {[
                                { tag: '#SolarTariff2026', posts: 34 },
                                { tag: '#BulkDiscount', posts: 28 },
                                { tag: '#OffGrid', posts: 21 },
                                { tag: '#WindEnergy', posts: 15 },
                                { tag: '#CarbonOffset', posts: 12 },
                            ].map((t, i) => (
                                <div key={i} style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '8px 0', borderBottom: i < 4 ? '1px solid var(--color-border)' : 'none'
                                }}>
                                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-blue-primary)' }}>{t.tag}</span>
                                    <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{t.posts} posts</span>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}
