import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingActions = () => {
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

  if (!showScrollTop) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'clamp(1rem, 3vw, 2rem)',
        right: 'clamp(1rem, 3vw, 2rem)',
        zIndex: 900
      }}
    >
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
    </div>
  );
};

