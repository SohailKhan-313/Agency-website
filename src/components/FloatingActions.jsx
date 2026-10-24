import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';

export const FloatingActions = () => {
  const { agencyInfo, openWhatsApp, openEmail } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 900,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.85rem'
      }}
    >
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid var(--pink-border)',
            boxShadow: 'var(--shadow-md)',
            color: 'var(--slate-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--pink-100)';
            e.currentTarget.style.color = 'var(--pink-600)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            e.currentTarget.style.color = 'var(--slate-700)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Direct Email Floating Button */}
      <button
        onClick={() => openEmail('Project Inquiry - Doorstep Solutions')}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#FFFFFF',
          border: '1px solid var(--pink-border)',
          boxShadow: 'var(--shadow-md)',
          color: 'var(--pink-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        }}
        aria-label="Email Doorstep Solutions"
        title="Open Email in Gmail"
      >
        <Mail size={22} />
      </button>

      {/* Primary Floating WhatsApp Button with Notification Pulse (NO number digits) */}
      <div style={{ position: 'relative' }}>
        {/* Unread badge pill */}
        <span
          className="animate-badge-ping"
          style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#25D366',
            zIndex: 3
          }}
        />

        <button
          onClick={() => openWhatsApp('Hi Doorstep Solutions! I would like to consult with Sohail, Waqas, or Hassan regarding a project.')}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.12)';
            e.currentTarget.style.boxShadow = '0 12px 36px rgba(37, 211, 102, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.45)';
          }}
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp (Instant Reply)"
        >
          <MessageCircle size={32} />
        </button>
      </div>
    </div>
  );
};
