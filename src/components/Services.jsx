import React, { useState } from 'react';
import { services } from '../data/services';
import { useApp } from '../context/AppContext';
import { Code2, Smartphone, Share2, Check, ArrowRight, Sparkles } from 'lucide-react';

export const Services = () => {
  const { openContactModal } = useApp();

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code2 size={26} />;
      case 'Smartphone': return <Smartphone size={26} />;
      case 'Share2': return <Share2 size={26} />;
      default: return <Sparkles size={26} />;
    }
  };

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="section-title">
            Tailored Digital Craftsmanship <br />
            <span className="text-gradient-pink">Engineered for Exponential Results</span>
          </h2>
          <p className="section-desc">
            Directly spearheaded by our domain leads — <strong>Hassan Munir</strong> (CEO), <strong>Sohail Khan</strong> (Web), and <strong>Waqas Khan</strong> (Apps).
          </p>
        </div>

        {/* 3-Column Services Grid (Responsive minmax) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1.25rem, 3vw, 2rem)',
          marginBottom: '2.5rem'
        }}>
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 4vw, 2.25rem) clamp(1.25rem, 3vw, 1.85rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all var(--transition-smooth)',
                borderTop: '4px solid var(--pink-500)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(244, 63, 94, 0.2)';
                e.currentTarget.style.borderColor = 'var(--pink-400)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = 'var(--pink-border)';
              }}
            >
              {/* Top Accent Pill */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'var(--grad-pink-soft)',
                  border: '1px solid var(--pink-border)',
                  color: 'var(--pink-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {getServiceIcon(service.iconName)}
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--pink-100)',
                  color: 'var(--pink-700)',
                  border: '1px solid rgba(244, 114, 182, 0.3)'
                }}>
                  {service.badge}
                </div>
              </div>

              {/* Title & Lead */}
              <div>
                <h3 style={{
                  fontSize: 'clamp(1.35rem, 3vw, 1.6rem)',
                  fontWeight: 800,
                  color: 'var(--slate-900)',
                  marginBottom: '0.4rem'
                }}>
                  {service.title}
                </h3>

                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--pink-600)',
                  marginBottom: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <span>Led by {service.lead} ({service.leadTitle})</span>
                </div>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--slate-600)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>

                {/* Features list */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--slate-400)',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem'
                  }}>
                    What's Included:
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {service.features.map((feat, fidx) => (
                      <li key={fidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--slate-700)' }}>
                        <span style={{
                          minWidth: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'var(--pink-100)',
                          color: 'var(--pink-600)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '2px',
                          flexShrink: 0
                        }}>
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                  {service.techStack.map((tech, tidx) => (
                    <span
                      key={tidx}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--hashwhite-subtle)',
                        color: 'var(--slate-700)',
                        border: '1px solid var(--hashwhite-muted)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div style={{ marginTop: 'auto' }}>
                <button
                  onClick={() => openContactModal(service.title)}
                  className="btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    width: '100%'
                  }}
                >
                  <span>Request Full Proposal</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner callout (Responsive) */}
        <div
          className="glass-panel services-bundle-banner"
          style={{
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1.25rem, 4vw, 2.5rem)',
            background: 'linear-gradient(135deg, rgba(255, 240, 245, 0.85) 0%, rgba(254, 226, 236, 0.85) 100%)',
            border: '1px solid rgba(244, 114, 182, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.35rem' }}>
              Need an Integrated Package? (Web + Mobile App + Social Marketing)
            </h3>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              Combine web, app, and social campaigns for a synchronized milestone launch.
            </p>
          </div>

          <button
            onClick={() => openContactModal('Full Agency Bundle (Web + App + Social)')}
            className="btn-primary services-bundle-btn"
            style={{ padding: '0.8rem 1.65rem', whiteSpace: 'nowrap' }}
          >
            <span>Get Bundle Quote</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .services-bundle-banner {
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: center !important;
          }
          .services-bundle-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
