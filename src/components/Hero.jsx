import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, Code2, Smartphone, TrendingUp, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const { openContactModal } = useApp();

  return (
    <section style={{
      position: 'relative',
      paddingTop: 'clamp(2rem, 5vw, 3.5rem)',
      paddingBottom: 'clamp(3rem, 7vw, 5.5rem)',
      overflow: 'hidden'
    }}>
      {/* Ambient background pink glow */}
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'clamp(280px, 45vw, 550px)',
          height: 'clamp(280px, 45vw, 550px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 205, 211, 0.45) 0%, rgba(252, 231, 243, 0.15) 70%, transparent 100%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(2rem, 5vw, 3.5rem)',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Hero Content */}
          <div style={{ maxWidth: '640px' }}>
            {/* Top Pill */}
            <div
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.95rem',
                marginBottom: '1.25rem',
                boxShadow: 'var(--shadow-sm)',
                maxWidth: '100%'
              }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'var(--pink-500)',
                color: '#fff',
                flexShrink: 0
              }}>
                <Sparkles size={11} />
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--pink-700)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Your Dedicated Digital Agency
              </span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
              fontWeight: 900,
              color: 'var(--slate-900)',
              lineHeight: 1.18,
              marginBottom: '1.15rem',
              letterSpacing: '-0.03em'
            }}>
              High-Impact <span className="text-gradient-pink">Web</span>, <span className="text-gradient-pink">Mobile Apps</span> & <span className="text-gradient-pink">Social Growth</span>.
            </h1>

            {/* Concise Description */}
            <p style={{
              fontSize: 'clamp(0.98rem, 2.5vw, 1.1rem)',
              color: 'var(--slate-600)',
              lineHeight: 1.65,
              marginBottom: '1.75rem'
            }}>
              At <strong>Doorstep Solutions</strong>, we engineer market-ready digital products and growth campaigns. Led by <strong>Hassan Munir</strong> (CEO), <strong>Sohail Khan</strong> (Web), and <strong>Waqas Khan</strong> (Apps).
            </p>

            {/* Service Pillars */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--pink-border)',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--slate-700)'
              }}>
                <Code2 size={15} color="var(--pink-500)" />
                <span>Web Development</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--pink-border)',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--slate-700)'
              }}>
                <Smartphone size={15} color="var(--pink-500)" />
                <span>App Development</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--pink-border)',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--slate-700)'
              }}>
                <TrendingUp size={15} color="var(--pink-500)" />
                <span>Social Media Marketing</span>
              </div>
            </div>

            {/* Action CTA Buttons (Responsive on mobile) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }} className="hero-cta-group">
              <button
                onClick={() => openContactModal('General Inquiry')}
                className="btn-primary"
                style={{ fontSize: '0.94rem', padding: '0.85rem 1.65rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={17} />
              </button>

              <a
                href="#projects"
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.85rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none'
                }}
              >
                <span>Explore Projects</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              paddingTop: '1.15rem',
              borderTop: '1px solid rgba(244, 114, 182, 0.2)',
              fontSize: '0.84rem',
              color: 'var(--slate-500)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} color="var(--pink-500)" />
                <span>Zero Upfront Risk</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} color="var(--pink-500)" />
                <span>Direct Founder Communication</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} color="var(--pink-500)" />
                <span>Milestone-Based Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'var(--grad-hash-card)',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                boxShadow: 'var(--shadow-lg), 0 0 50px -10px rgba(244, 63, 94, 0.25)'
              }}
            >
              <img
                src="/hero_mockup.jpg"
                alt="Doorstep Solutions Web, Mobile App & Social Media Growth Agency"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: 'calc(var(--radius-xl) - 2px)',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Floating Badge 1: Real Deployments */}
            <div
              className="animate-float glass-panel hero-floating-badge-1"
              style={{
                position: 'absolute',
                top: '-12px',
                left: '-10px',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                zIndex: 2,
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--grad-pink-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                flexShrink: 0
              }}>
                <Sparkles size={16} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--slate-900)' }}>Live Production Systems</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', fontWeight: 500 }}>Railway, Vercel & Netlify</div>
              </div>
            </div>

            {/* Floating Badge 2: Quality & Milestone Guarantee */}
            <div
              className="animate-float-reverse glass-panel hero-floating-badge-2"
              style={{
                position: 'absolute',
                bottom: '-12px',
                right: '-10px',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                zIndex: 2,
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--grad-pink-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                flexShrink: 0
              }}>
                <CheckCircle2 size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--slate-900)' }}>100% Milestone Delivery</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', fontWeight: 600 }}>Zero Risk Guarantee</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 640px) {
          .hero-floating-badge-1 {
            position: static !important;
            margin-top: 1rem !important;
            display: flex !important;
          }
          .hero-floating-badge-2 {
            position: static !important;
            margin-top: 0.75rem !important;
            display: flex !important;
          }
        }
        @media (max-width: 480px) {
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-group button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
