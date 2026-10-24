import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, ArrowUpRight, MessageCircle, Send } from 'lucide-react';

export const Navbar = () => {
  const { agencyInfo, openContactModal, openWhatsApp } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Process', href: '#process' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-bar: Email address is hidden from navbar; shows live availability & WhatsApp */}
      <div style={{
        background: 'linear-gradient(90deg, #FFF0F5 0%, #FCE7F3 50%, #FFF5F7 100%)',
        borderBottom: '1px solid rgba(244, 114, 182, 0.2)',
        padding: '0.4rem 0',
        fontSize: '0.82rem',
        color: 'var(--slate-700)',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.25)'
            }} />
            <span style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.82rem)' }}>Available for new projects</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* WhatsApp Quick Link */}
            <a
              href={agencyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--slate-800)',
                fontWeight: 600,
                fontSize: 'clamp(0.75rem, 2.5vw, 0.82rem)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#25D366'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-800)'}
              title="Chat on WhatsApp"
            >
              <MessageCircle size={15} color="#25D366" />
              <span>WhatsApp</span>
            </a>

            {/* Quick Contact Link (Email address hidden from navbar) */}
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--slate-800)',
                fontWeight: 600,
                fontSize: 'clamp(0.75rem, 2.5vw, 0.82rem)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-800)'}
              title="Contact Doorstep Solutions"
            >
              <Send size={13} color="var(--pink-500)" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 990,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(248, 249, 252, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(244, 114, 182, 0.25)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(244, 63, 94, 0.08)' : 'none',
          padding: isScrolled ? '0.65rem 0' : '0.9rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--grad-pink-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: '1.15rem',
                boxShadow: 'var(--shadow-pink-glow)',
                flexShrink: 0
              }}
            >
              DS
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.05rem, 3.8vw, 1.35rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--slate-900)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                lineHeight: 1.1
              }}>
                Doorstep<span className="text-gradient-pink">Solutions</span>
              </div>
              <div className="nav-subtitle" style={{ fontSize: '0.68rem', color: 'var(--slate-500)', fontWeight: 600, letterSpacing: '0.04em' }}>
                WEB • APP • SOCIAL
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--slate-700)',
                  transition: 'color var(--transition-fast)',
                  padding: '0.35rem 0'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-600)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate-700)'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Desktop WhatsApp Nav Button */}
            <button
              onClick={() => openWhatsApp()}
              className="btn-whatsapp whatsapp-nav-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.86rem',
                fontWeight: 600,
              }}
              title="Chat on WhatsApp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </button>

            {/* Quote Button (Scales cleanly on mobile) */}
            <button
              onClick={() => openContactModal('General Inquiry')}
              className="btn-primary"
              style={{
                padding: '0.55rem 1rem',
                fontSize: '0.82rem',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Get Quote</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--pink-100)',
                color: 'var(--pink-700)',
                flexShrink: 0
              }}
              className="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Email address is hidden from navbar) */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '1.25rem 1.25rem 1.75rem 1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderBottom: '1px solid var(--pink-border)',
              boxShadow: 'var(--shadow-lg)',
              animation: 'slideDownFade 0.25s ease-out'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--slate-800)',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--hashwhite-subtle)'
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href={agencyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-whatsapp"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModal('Mobile Menu Inquiry');
                }}
                className="btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.92rem'
                }}
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
          .whatsapp-nav-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 360px) {
          .nav-subtitle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
