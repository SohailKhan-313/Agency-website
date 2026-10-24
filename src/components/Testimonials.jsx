import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, Quote, MessageSquare } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Client Endorsements</span>
          </div>
          <h2 className="section-title">
            Trusted by Visionary Founders <br />
            <span className="text-gradient-pink">& Fast-Growing Companies</span>
          </h2>
          <p className="section-desc">
            See what founders and business leaders say about Doorstep Solutions, our work ethic, and our dedicated project leads.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem 2rem',
                background: '#FFFFFF',
                border: '1px solid var(--pink-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div>
                {/* Rating Stars & Category Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--pink-100)',
                    color: 'var(--pink-700)'
                  }}>
                    {t.tag}
                  </span>
                </div>

                {/* Content Quote */}
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--slate-700)',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '2rem'
                }}>
                  "{t.content}"
                </p>
              </div>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--hashwhite-subtle)'
              }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--pink-300)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--slate-900)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 500 }}>
                    {t.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
