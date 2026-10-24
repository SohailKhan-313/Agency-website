import React from 'react';
import { teamMembers } from '../data/team';
import { Sparkles, UserCheck, Code2, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';

export const Team = () => {

  const getDepartmentIcon = (dept) => {
    switch (dept) {
      case 'Web Development': return <Code2 size={15} color="var(--pink-600)" />;
      case 'App Development': return <Smartphone size={15} color="var(--pink-600)" />;
      case 'Social Media Marketing': return <TrendingUp size={15} color="var(--pink-600)" />;
      default: return <Sparkles size={15} color="var(--pink-600)" />;
    }
  };

  return (
    <section id="team" className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={14} />
            <span>Leadership Team</span>
          </div>
          <h2 className="section-title">
            Meet the Specialists at <br />
            <span className="text-gradient-pink">Doorstep Solutions</span>
          </h2>
          <p className="section-desc">
            Direct collaboration with domain leads. You work directly with <strong>Hassan Munir</strong> (CEO), <strong>Sohail Khan</strong> (Web Lead), and <strong>Waqas Khan</strong> (App Lead) from day one.
          </p>
        </div>

        {/* 3-Column Team Grid (Responsive minmax 280px) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)'
        }}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: '#FFFFFF',
                border: '1px solid var(--pink-border)',
                transition: 'all var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(244, 63, 94, 0.2)';
                e.currentTarget.style.borderColor = 'var(--pink-400)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = 'var(--pink-border)';
              }}
            >
              {/* Member Image Frame */}
              <div style={{ position: 'relative', height: 'clamp(280px, 35vw, 340px)', overflow: 'hidden' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onError={(e) => {
                    if (member.id === 'sohail-khan') e.target.src = '/team_sohail.jpg';
                    else if (member.id === 'waqas-khan') e.target.src = '/team_waqas.jpg';
                    else if (member.id === 'hassan-munir') e.target.src = '/team_hassan.jpg';
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Gradient tint */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.78) 0%, rgba(15, 23, 42, 0.1) 50%, transparent 100%)'
                  }}
                />

                {/* Tag pill on top */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--slate-800)'
                }}>
                  {getDepartmentIcon(member.department)}
                  <span>{member.tag}</span>
                </div>

                {/* Name & Role overlay bottom of photo */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  color: '#fff'
                }}>
                  <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.6rem)', fontWeight: 800, color: '#fff', marginBottom: '0.15rem' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--pink-200)' }}>
                    {member.role}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                {/* Quote */}
                <div style={{
                  fontSize: '0.86rem',
                  fontStyle: 'italic',
                  color: 'var(--slate-600)',
                  borderLeft: '3px solid var(--pink-400)',
                  paddingLeft: '0.75rem',
                  marginBottom: '1.15rem',
                  lineHeight: 1.5
                }}>
                  "{member.quote}"
                </div>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--slate-600)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  flexGrow: 1
                }}>
                  {member.bio}
                </p>

                {/* Stats row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--pink-50)',
                  border: '1px solid var(--pink-100)',
                  marginBottom: '1.25rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--pink-700)', fontWeight: 700 }}>
                      Experience
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                      {member.experience}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--pink-700)', fontWeight: 700 }}>
                      Track Record
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                      {member.completedProjects}
                    </div>
                  </div>
                </div>

                {/* Skills tags */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-400)', letterSpacing: '0.04em', marginBottom: '0.55rem' }}>
                    Core Stacks:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {member.skills.map((skill, sidx) => (
                      <span
                        key={sidx}
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-xs)',
                          background: 'var(--hashwhite-subtle)',
                          color: 'var(--slate-700)',
                          border: '1px solid var(--hashwhite-muted)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Agency Leadership Consultation Banner */}
        <div
          className="glass-panel"
          style={{
            marginTop: '3rem',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 4vw, 2.25rem)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 240, 245, 0.9) 100%)',
            border: '1px solid var(--pink-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--pink-600)', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
              Direct Agency Channel
            </div>
            <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.45rem)', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.35rem' }}>
              Ready to Build Your Next Product with Our Specialists?
            </h3>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              Connect directly with Doorstep Solutions for end-to-end web architectures, high-performance mobile apps, and viral social campaigns.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.6rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '0.92rem',
                textDecoration: 'none'
              }}
            >
              <span>Connect with Our Team</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
