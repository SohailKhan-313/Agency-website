import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import { X, ArrowRight, Sparkles } from 'lucide-react';

export const ContactModal = () => {
  const { contactModalOpen, closeContactModal, modalInitialService, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: modalInitialService || 'General Inquiry',
    notes: ''
  });

  useEffect(() => {
    if (modalInitialService) {
      setFormData(prev => ({ ...prev, service: modalInitialService }));
    }
  }, [modalInitialService]);

  if (!contactModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.6 }
    });

    closeContactModal();
    showToast('Consultation request received! Our team will contact you shortly.');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'slideDownFade 0.25s ease-out'
      }}
      onClick={closeContactModal}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-xl)',
          background: '#FFFFFF',
          padding: 'clamp(1.25rem, 4vw, 2.25rem)',
          position: 'relative',
          border: '2px solid var(--pink-border)',
          boxShadow: '0 25px 60px -15px rgba(244, 63, 94, 0.35)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeContactModal}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--hashwhite-base)',
            border: '1px solid var(--pink-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--slate-600)',
            cursor: 'pointer'
          }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--pink-100)',
            color: 'var(--pink-700)',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: '0.75rem'
          }}>
            <Sparkles size={13} />
            <span>Fast Consultation Booking</span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', fontWeight: 800, color: 'var(--slate-900)' }}>
            Start Your Project with Doorstep Solutions
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)', marginTop: '0.35rem' }}>
            Direct connection with Doorstep Solutions leadership — rapid response and tailored proposal.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.3rem' }}>
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--pink-border)',
                background: 'var(--hashwhite-base)',
                fontSize: '0.92rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '0.75rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.3rem' }}>
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--pink-border)',
                  background: 'var(--hashwhite-base)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.3rem' }}>
                Your Phone / WhatsApp
              </label>
              <input
                type="text"
                placeholder="For instant message"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--pink-border)',
                  background: 'var(--hashwhite-base)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.3rem' }}>
              Service Needed
            </label>
            <input
              type="text"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--pink-border)',
                background: 'var(--hashwhite-base)',
                fontSize: '0.92rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.3rem' }}>
              Brief Project Notes
            </label>
            <textarea
              rows={3}
              placeholder="Tell us what you'd like to achieve..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--pink-border)',
                background: 'var(--hashwhite-base)',
                fontSize: '0.92rem',
                outline: 'none',
                fontFamily: 'inherit',
                resize: 'none'
              }}
            />
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <button
              type="submit"
              className="btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.9rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '0.95rem',
                width: '100%'
              }}
            >
              <span>Submit Consultation Request</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
