import React from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle, Mail, ArrowUpRight, Heart, Sparkles, Code2, Smartphone, TrendingUp } from 'lucide-react';

export const Footer = () => {
  const { agencyInfo, openContactModal, openWhatsApp, openEmail } = useApp();

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #F8F9FC 0%, #FFFFFF 100%)',
      borderTop: '1px solid var(--pink-border)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top subtle pink glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, var(--pink-400) 50%, transparent 100%)',
        }}
      />

      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
        }}>
          
          {/* Column 1: Brand Info */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--grad-pink-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  boxShadow: 'var(--shadow-pink-glow)'
                }}
              >
                DS
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'var(--slate-900)'
              }}>
                Doorstep<span className="text-gradient-pink">Solutions</span>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Your dedicated digital growth agency. We engineer bespoke web platforms, mobile apps, and viral social campaigns that scale modern businesses.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => openWhatsApp()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#25D366',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
                  transition: 'transform var(--transition-fast)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                title="Chat on WhatsApp"
              >
                <MessageCircle size={20} />
              </button>

              <button
                onClick={() => openEmail()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--grad-pink-primary)',
                  color: '#fff',
                  boxShadow: 'var(--shadow-pink-glow)',
                  transition: 'transform var(--transition-fast)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                title="Email Us via Gmail"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a
                  href="#services"
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--slate-600)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-600)'}
                >
                  <Code2 size={15} color="var(--pink-500)" />
                  <span>Web Development</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--slate-600)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-600)'}
                >
                  <Smartphone size={15} color="var(--pink-500)" />
                  <span>App Development</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--slate-600)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-600)'}
                >
                  <TrendingUp size={15} color="var(--pink-500)" />
                  <span>Social Media Marketing</span>
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--slate-600)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-600)'}
                >
                  <Sparkles size={15} color="var(--pink-500)" />
                  <span>Scope Estimator</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Team Leads */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Leadership Team
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a
                  href="#team"
                  style={{ fontSize: '0.92rem', color: 'var(--slate-600)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-600)'}
                >
                  <strong>Hassan Munir</strong> — CEO
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  style={{ fontSize: '0.92rem', color: 'var(--slate-600)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-600)'}
                >
                  <strong>Sohail Khan</strong> — Web Lead
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  style={{ fontSize: '0.92rem', color: 'var(--slate-600)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-600)'}
                >
                  <strong>Waqas Khan</strong> — App Lead
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Reach (NO raw phone digits) */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Direct Reach
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              <button
                onClick={() => openWhatsApp()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--slate-700)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                title="Chat on WhatsApp"
              >
                <MessageCircle size={17} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={() => openEmail()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--slate-700)',
                  fontWeight: 600,
                  wordBreak: 'break-all',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                title="Send Email via Gmail"
              >
                <Mail size={17} color="var(--pink-500)" />
                <span>{agencyInfo.email}</span>
              </button>

              <div style={{ fontSize: '0.82rem', color: 'var(--slate-500)', marginTop: '0.5rem' }}>
                Availability: 24/7 Rapid Consultation & Global Remote Execution
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--hashwhite-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.86rem',
          color: 'var(--slate-500)'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Doorstep Solutions</strong>. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Crafted with</span>
            <Heart size={14} color="var(--pink-500)" fill="var(--pink-500)" />
            <span>by Doorstep Solutions</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
