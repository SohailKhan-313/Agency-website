import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import { Calculator, Check, MessageCircle, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export const QuoteCalculator = () => {
  const { openWhatsApp, showToast } = useApp();

  const [serviceType, setServiceType] = useState('web');
  const [timeline, setTimeline] = useState('standard');
  const [selectedFeatures, setSelectedFeatures] = useState(['Responsive Modern UI', 'SEO & Performance']);

  const servicesOptions = [
    { id: 'web', name: 'Web Development', lead: 'Sohail Khan', baseDays: '10 - 20 Days' },
    { id: 'app', name: 'App Development', lead: 'Waqas Khan', baseDays: '15 - 30 Days' },
    { id: 'social', name: 'Social Media Growth', lead: 'Hassan Munir', baseDays: 'Monthly Campaign' },
    { id: 'bundle', name: 'Full Digital Bundle (All 3)', lead: 'Sohail, Waqas & Hassan', baseDays: 'Custom Phased Delivery' },
  ];

  const featureOptionsByService = {
    web: [
      { id: 'Responsive UI', name: 'Responsive Modern UI / UX' },
      { id: 'SEO Setup', name: 'Advanced SEO & Schema Markup' },
      { id: 'Database & Auth', name: 'Secure Authentication & Database (MySQL/MongoDB)' },
      { id: 'E-commerce', name: 'Payment Gateway & E-Commerce Cart' },
      { id: 'REST APIs', name: 'Custom RESTful APIs & Backend Architecture' },
      { id: 'Admin Panel', name: 'Custom Role-Based Admin Dashboard (RBAC)' },
    ],
    app: [
      { id: 'Cross-Platform', name: 'Cross-Platform Mobile App (iOS & Android)' },
      { id: 'Push Notifications', name: 'Push Notifications & Cloud Messaging' },
      { id: 'Biometrics', name: 'Biometric FaceID / Fingerprint Security' },
      { id: 'Offline Mode', name: 'Offline-First Storage & Local Database' },
      { id: 'Store Publishing', name: 'App Store & Google Play Store Submission' },
    ],
    social: [
      { id: 'Viral Reels', name: 'Viral Short-Form Reels & Scriptwriting' },
      { id: 'Meta Ads', name: 'Targeted Meta (Facebook & Instagram) Ad Funnels' },
      { id: 'Influencers', name: 'Influencer Marketing & Brand Partnerships' },
      { id: 'Brand Identity', name: 'Complete Aesthetic Brand Identity Revamp' },
      { id: 'Analytics', name: 'Weekly ROI & Engagement Performance Reports' },
    ],
    bundle: [
      { id: 'Full Web App', name: 'Production Next.js / Laravel Web Portal' },
      { id: 'Mobile App', name: 'Cross-Platform Flutter Mobile Application' },
      { id: 'Social Campaign', name: 'Complete Launch Marketing & Viral Reels Campaign' },
      { id: 'Ongoing Maintenance', name: 'Dedicated Post-Launch Engineering & SLA Support' },
    ]
  };

  const currentFeatures = featureOptionsByService[serviceType] || featureOptionsByService.web;

  const toggleFeature = (featId) => {
    setSelectedFeatures(prev =>
      prev.includes(featId) ? prev.filter(f => f !== featId) : [...prev, featId]
    );
  };

  const currentService = servicesOptions.find(s => s.id === serviceType) || servicesOptions[0];

  // Dynamic scope level based on feature selection
  const getScopeTier = () => {
    if (serviceType === 'bundle') return 'Comprehensive Multi-Service Bundle';
    if (selectedFeatures.length <= 2) return 'Starter Milestone Scope';
    if (selectedFeatures.length <= 4) return 'Growth & Scaling Scope';
    return 'Full-Scale Enterprise Scope';
  };

  const getTimelineText = () => {
    if (timeline === 'rush') return 'Fast-Track Sprint (7 - 14 Days)';
    if (timeline === 'extended') return 'Phased Roadmap (4 - 8 Weeks)';
    return 'Standard Milestone (2 - 4 Weeks)';
  };

  const handleSendQuoteWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    const msg = `*Project Scope Inquiry - Doorstep Solutions*
• Service: ${currentService.name} (Lead: ${currentService.lead})
• Scope Tier: ${getScopeTier()}
• Preferred Velocity: ${getTimelineText()}
• Selected Deliverables: ${selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'Standard Core Features'}

Hi Doorstep Solutions team, I configured this custom project scope on your website and would like to discuss the tailored quote and milestone plan!`;

    openWhatsApp(msg);
    showToast('Launching WhatsApp to send your project scope!');
  };

  return (
    <section id="calculator" className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calculator size={14} />
            <span>Scope & Velocity Estimator</span>
          </div>
          <h2 className="section-title">
            Interactive Project Scope <br />
            <span className="text-gradient-pink">& Custom Milestone Builder</span>
          </h2>
          <p className="section-desc">
            We don’t believe in rigid, one-size-fits-all fixed prices. Select your desired capabilities below to construct a tailored brief, and connect directly with our leads for a transparent, milestone-based quote.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            background: '#FFFFFF',
            border: '2px solid var(--pink-border)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem'
          }} className="calc-grid">
            
            {/* Step 1: Choose Service */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                1. Choose Required Service:
              </label>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                {servicesOptions.map(option => {
                  const isSelected = serviceType === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => {
                        setServiceType(option.id);
                        setSelectedFeatures([]);
                      }}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        border: isSelected ? '2px solid var(--pink-500)' : '1px solid var(--pink-border)',
                        background: isSelected ? 'var(--pink-50)' : 'var(--hashwhite-base)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: isSelected ? 'var(--pink-700)' : 'var(--slate-800)' }}>
                        {option.name}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--slate-500)', marginTop: '0.2rem' }}>
                        Lead: {option.lead}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Step 2: Select Key Features */}
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                2. Select Core Features & Integrations:
              </label>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                {currentFeatures.map(f => {
                  const isChecked = selectedFeatures.includes(f.name);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleFeature(f.name)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.55rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        border: isChecked ? '1px solid var(--pink-500)' : '1px solid var(--slate-300)',
                        background: isChecked ? 'var(--pink-500)' : '#fff',
                        color: isChecked ? '#fff' : 'var(--slate-700)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {isChecked && <Check size={14} strokeWidth={3} />}
                      <span>{f.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Step 3: Choose Timeline */}
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                3. Preferred Delivery Velocity:
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                {[
                  { id: 'rush', label: 'Fast-Track', detail: 'Rapid Sprint' },
                  { id: 'standard', label: 'Standard Pace', detail: 'Balanced Milestones' },
                  { id: 'extended', label: 'Phased', detail: 'Enterprise Roadmap' }
                ].map(time => {
                  const isSelected = timeline === time.id;
                  return (
                    <div
                      key={time.id}
                      onClick={() => setTimeline(time.id)}
                      style={{
                        textAlign: 'center',
                        padding: '0.85rem 0.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: isSelected ? '2px solid var(--pink-500)' : '1px solid var(--pink-border)',
                        background: isSelected ? 'var(--pink-100)' : 'var(--hashwhite-base)',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--slate-800)' }}>
                        {time.label}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--slate-500)', marginTop: '0.2rem' }}>
                        {time.detail}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right: Estimate Summary Output Card */}
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(145deg, #FFF0F5 0%, #FCE7F3 100%)',
                border: '1px solid var(--pink-300)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.85)',
                  color: 'var(--pink-700)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}>
                  <Sparkles size={13} />
                  <span>Custom Scope Summary</span>
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--slate-600)', marginBottom: '0.35rem' }}>
                  Pricing Model:
                </div>

                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.1rem',
                  fontWeight: 900,
                  color: 'var(--slate-900)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}>
                  Custom Quotation
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  No rigid or fixed numbers. Every project is scoped to your exact requirements and milestones for fair, transparent pricing.
                </p>

                {/* Scope breakdown list */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.1rem 1.25rem',
                  marginBottom: '1.75rem',
                  fontSize: '0.86rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-600)' }}>Service:</span>
                    <strong style={{ color: 'var(--slate-900)' }}>{currentService.name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-600)' }}>Lead Specialist:</span>
                    <strong style={{ color: 'var(--pink-600)' }}>{currentService.lead}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-600)' }}>Scope Level:</span>
                    <strong style={{ color: 'var(--slate-900)' }}>{getScopeTier()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-600)' }}>Velocity:</span>
                    <strong style={{ color: 'var(--slate-900)' }}>{getTimelineText()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-600)' }}>Selected Modules:</span>
                    <strong style={{ color: 'var(--slate-900)' }}>{selectedFeatures.length} capabilities</strong>
                  </div>
                </div>
              </div>

              {/* Action buttons (NO phone digits) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={handleSendQuoteWhatsApp}
                  className="btn-whatsapp"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.55rem',
                    padding: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.95rem'
                  }}
                >
                  <MessageCircle size={19} />
                  <span>Send Project Brief to WhatsApp</span>
                </button>

                <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--slate-500)' }}>
                  ⚡ Free initial consultation & milestone breakdown within 15 minutes.
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 860px) {
          .calc-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};
