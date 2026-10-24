import React from 'react';
import { workProcess } from '../data/testimonials';
import { Compass, Layers, Cpu, Rocket, Sparkles } from 'lucide-react';

export const Process = () => {
  const getProcessIcon = (iconName) => {
    switch (iconName) {
      case 'Compass': return <Compass size={24} color="var(--pink-600)" />;
      case 'Layers': return <Layers size={24} color="var(--pink-600)" />;
      case 'Cpu': return <Cpu size={24} color="var(--pink-600)" />;
      case 'Rocket': return <Rocket size={24} color="var(--pink-600)" />;
      default: return <Sparkles size={24} color="var(--pink-600)" />;
    }
  };

  return (
    <section id="process" className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>How We Work</span>
          </div>
          <h2 className="section-title">
            From Blueprint to Reality <br />
            <span className="text-gradient-pink">Directly at Your Doorstep</span>
          </h2>
          <p className="section-desc">
            A frictionless, transparent 4-stage pipeline that eliminates surprises, keeps turnaround tight, and delivers world-class results.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          position: 'relative'
        }}>
          {workProcess.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: '2.25rem 1.75rem',
                position: 'relative',
                background: '#FFFFFF',
                border: '1px solid var(--pink-border)',
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
              {/* Step Number Top Badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'var(--pink-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getProcessIcon(item.icon)}
                </div>

                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: 'var(--pink-200)',
                  lineHeight: 1
                }}>
                  {item.step}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--slate-900)',
                marginBottom: '0.65rem'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: 'var(--slate-600)',
                lineHeight: 1.6
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
