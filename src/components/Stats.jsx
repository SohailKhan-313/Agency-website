import React from 'react';
import { agencyStats } from '../data/testimonials';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';

export const Stats = () => {
  const getIcon = (index) => {
    switch (index) {
      case 0: return <Award size={22} color="var(--pink-500)" />;
      case 1: return <Users size={22} color="var(--pink-500)" />;
      case 2: return <TrendingUp size={22} color="var(--pink-500)" />;
      default: return <Clock size={22} color="var(--pink-500)" />;
    }
  };

  return (
    <section style={{ padding: 'clamp(1.25rem, 3.5vw, 2.5rem) 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: 'clamp(0.65rem, 2vw, 1rem)'
        }} className="stats-grid">
          {agencyStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(1rem, 2.5vw, 1.75rem)',
                borderRadius: 'var(--radius-lg)',
                borderBottom: '3px solid var(--pink-400)',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--pink-100)',
                marginBottom: '0.85rem'
              }}>
                {getIcon(idx)}
              </div>

              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
                fontWeight: 900,
                color: 'var(--slate-900)',
                lineHeight: 1,
                marginBottom: '0.35rem'
              }}>
                {stat.value}
              </div>

              <div style={{
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                fontWeight: 700,
                color: 'var(--slate-800)',
                marginBottom: '0.2rem'
              }}>
                {stat.label}
              </div>

              <div style={{
                fontSize: '0.78rem',
                color: 'var(--slate-500)',
                fontWeight: 500
              }}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.65rem !important;
          }
        }
        @media (max-width: 320px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
