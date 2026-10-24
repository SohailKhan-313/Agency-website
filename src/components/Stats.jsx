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
    <section style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }} className="stats-grid">
          {agencyStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
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
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--pink-100)',
                marginBottom: '1rem'
              }}>
                {getIcon(idx)}
              </div>

              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                fontWeight: 900,
                color: 'var(--slate-900)',
                lineHeight: 1,
                marginBottom: '0.4rem'
              }}>
                {stat.value}
              </div>

              <div style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--slate-800)',
                marginBottom: '0.2rem'
              }}>
                {stat.label}
              </div>

              <div style={{
                fontSize: '0.8rem',
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
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
