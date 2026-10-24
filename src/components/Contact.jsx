import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import { MessageCircle, Mail, Send, Copy, Check, Clock, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export const Contact = () => {
  const { agencyInfo, openWhatsApp, openEmail, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: 'Flexible Scope',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(agencyInfo.email);
    setCopiedEmail(true);
    showToast(`Copied ${agencyInfo.email} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const summary = `*New Website Consultation Inquiry - Doorstep Solutions*
• Client Name: ${formData.name}
• Client Email: ${formData.email}
• Client WhatsApp/Phone: ${formData.phone || 'N/A'}
• Service Required: ${formData.service}
• Budget Category: ${formData.budget}
• Project Notes: ${formData.message}`;

    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Thank you! Launching WhatsApp to send your inquiry.', 'success');
      openWhatsApp(summary);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Web Development',
        budget: 'Flexible Scope',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Connect Directly</span>
          </div>
          <h2 className="section-title">
            Let's Bring Digital Excellence <br />
            <span className="text-gradient-pink">Directly to Your Doorstep</span>
          </h2>
          <p className="section-desc">
            Ready to build a web platform, native mobile app, or viral social campaign? Connect with our team leads through WhatsApp or Email.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem'
        }} className="contact-grid">

          {/* Left Column: Direct Contact Hub */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* WhatsApp Card (NO phone number digits in text) */}
            <div
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.25rem, 3.5vw, 2rem)',
                background: '#FFFFFF',
                border: '1px solid rgba(37, 211, 102, 0.4)',
                borderLeft: '6px solid #25D366',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'rgba(37, 211, 102, 0.15)',
                  color: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MessageCircle size={28} />
                </div>

                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(37, 211, 102, 0.15)',
                  color: '#128C7E'
                }}>
                  Live 24/7 Response
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-400)', letterSpacing: '0.04em' }}>
                Direct Founder Channel
              </div>

              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 900,
                color: 'var(--slate-900)',
                margin: '0.25rem 0 0.5rem 0'
              }}>
                WhatsApp Consultation
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Chat immediately with our agency leadership team. Typical response time is under 15 minutes.
              </p>

              <button
                type="button"
                onClick={() => openWhatsApp('Hi Doorstep Solutions! I would like to discuss a project.')}
                className="btn-whatsapp"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.55rem'
                }}
              >
                <MessageCircle size={19} />
                <span>Open WhatsApp Chat Now</span>
              </button>
            </div>

            {/* Email Card (doorstepsolutions59@gmail.com with Gmail webmail & copy) */}
            <div
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.25rem, 3.5vw, 2rem)',
                background: '#FFFFFF',
                border: '1px solid var(--pink-border)',
                borderLeft: '6px solid var(--pink-500)',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'var(--pink-100)',
                  color: 'var(--pink-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={26} />
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--hashwhite-subtle)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--slate-600)',
                    cursor: 'pointer'
                  }}
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-400)', letterSpacing: '0.04em' }}>
                Official Agency Email
              </div>

              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 800,
                color: 'var(--slate-900)',
                margin: '0.25rem 0 0.5rem 0',
                wordBreak: 'break-all'
              }}>
                {agencyInfo.email}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Send us your RFP or specifications. Works via Gmail Web or standard mail client.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => openEmail('Project Inquiry - Doorstep Solutions')}
                  className="btn-primary"
                  style={{
                    flex: '1 1 auto',
                    padding: '0.8rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem'
                  }}
                >
                  <Mail size={17} />
                  <span>Open in Gmail</span>
                  <ExternalLink size={14} />
                </button>

                <a
                  href={agencyInfo.emailLink}
                  className="btn-secondary"
                  style={{
                    padding: '0.8rem 1.15rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span>Mail Client</span>
                </a>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '0.85rem'
            }}>
              <div style={{
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.85)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--pink-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Clock size={24} color="var(--pink-500)" />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--slate-900)' }}>15 Min Reply</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Direct WhatsApp Reply</div>
                </div>
              </div>

              <div style={{
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.85)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--pink-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <ShieldCheck size={24} color="var(--pink-500)" />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--slate-900)' }}>Free NDA Available</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Your IP is 100% Protected</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div
            className="glass-panel"
            style={{
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.25rem, 4vw, 2.5rem)',
              background: '#FFFFFF',
              border: '2px solid var(--pink-border)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.4rem' }}>
                Request a Free Consultation & Proposal
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--slate-600)' }}>
                Fill in the details below and we will prepare a bespoke roadmap for your project.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.4rem' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--pink-border)',
                    background: 'var(--hashwhite-base)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: 'var(--slate-800)',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--pink-500)';
                    e.target.style.background = '#FFFFFF';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--pink-border)';
                    e.target.style.background = 'var(--hashwhite-base)';
                  }}
                />
              </div>

              {/* Email & Phone Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--pink-border)',
                      background: 'var(--hashwhite-base)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: 'var(--slate-800)',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--pink-500)';
                      e.target.style.background = '#FFFFFF';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--pink-border)';
                      e.target.style.background = 'var(--hashwhite-base)';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.4rem' }}>
                    Your WhatsApp / Phone (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="For instant call or WhatsApp"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--pink-border)',
                      background: 'var(--hashwhite-base)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: 'var(--slate-800)',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--pink-500)';
                      e.target.style.background = '#FFFFFF';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--pink-border)';
                      e.target.style.background = 'var(--hashwhite-base)';
                    }}
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.4rem' }}>
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--pink-border)',
                      background: 'var(--hashwhite-base)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: 'var(--slate-800)',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Full Agency Bundle (Web + App + Social)">Full Agency Bundle (All 3)</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.4rem' }}>
                    Scope Expectation
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--pink-border)',
                      background: 'var(--hashwhite-base)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: 'var(--slate-800)',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="Starter Sprint Scope">Starter Sprint Scope</option>
                    <option value="Growth & Scaling Scope">Growth & Scaling Scope</option>
                    <option value="Full-Featured Custom Build">Full-Featured Custom Build</option>
                    <option value="Enterprise Architecture">Enterprise Architecture</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: '0.4rem' }}>
                  Project Overview & Goals *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you'd like to build (e.g. web portal, mobile app, or viral growth campaign)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--pink-border)',
                    background: 'var(--hashwhite-base)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: 'var(--slate-800)',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--pink-500)';
                    e.target.style.background = '#FFFFFF';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--pink-border)';
                    e.target.style.background = 'var(--hashwhite-base)';
                  }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Connecting...' : 'Submit Inquiry & Chat on WhatsApp'}</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--slate-500)' }}>
                🔒 Direct consultation guaranteed with Doorstep Solutions leadership.
              </div>

            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
