import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ExternalLink, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = () => {
  const { selectedProject, setSelectedProject, openWhatsApp, openContactModal } = useApp();

  if (!selectedProject) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.75rem, 3vw, 1.5rem)',
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'slideDownFade 0.25s ease-out'
      }}
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--pink-border)',
          boxShadow: '0 30px 60px -15px rgba(244, 63, 94, 0.3)',
          position: 'relative',
          padding: 0
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid var(--pink-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--slate-700)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all var(--transition-fast)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--pink-500)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            e.currentTarget.style.color = 'var(--slate-700)';
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Image Header */}
        <div style={{ position: 'relative', height: 'clamp(180px, 28vw, 300px)', width: '100%', overflow: 'hidden' }}>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = '/project_web.jpg';
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.25) 60%, transparent 100%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 'clamp(1rem, 3vw, 1.5rem)',
              left: 'clamp(1rem, 3vw, 2rem)',
              right: 'clamp(1rem, 3vw, 2rem)',
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span style={{
                background: 'var(--grad-pink-primary)',
                color: '#fff',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                {selectedProject.categoryLabel}
              </span>

              <span style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.74rem',
                fontWeight: 600
              }}>
                Lead: {selectedProject.lead}
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.75rem)', fontWeight: 800, color: '#fff', lineHeight: 1.25 }}>
              {selectedProject.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
          
          {/* Key Metric Banner & Live Link Button */}
          <div
            style={{
              background: 'var(--pink-50)',
              border: '1px solid var(--pink-200)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.85rem',
              marginBottom: '1.5rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--pink-700)', textTransform: 'uppercase' }}>
                Deployment Status:
              </div>
              <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 800, color: 'var(--slate-900)' }}>
                {selectedProject.metric}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginTop: '0.15rem' }}>
                Client / Architecture: <strong>{selectedProject.client}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '0.6rem 1.2rem',
                    fontSize: '0.84rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>Open Live App</span>
                  <ExternalLink size={15} />
                </a>
              )}

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '0.6rem 1rem',
                    fontSize: '0.84rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--slate-900)' }}>
              Project Architecture & Features
            </h4>
            <p style={{ color: 'var(--slate-600)', lineHeight: 1.65, fontSize: '0.94rem' }}>
              {selectedProject.description}
            </p>
          </div>

          {/* Highlights */}
          {selectedProject.highlights && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.65rem', color: 'var(--slate-900)' }}>
                Key Technical Deliverables
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--slate-700)' }}>
                    <CheckCircle size={16} color="var(--pink-500)" style={{ minWidth: '16px', marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-400)', letterSpacing: '0.04em', marginBottom: '0.55rem' }}>
              Technologies & Frameworks Deployed:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {selectedProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--hashwhite-subtle)',
                    border: '1px solid var(--hashwhite-muted)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--slate-800)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--hashwhite-subtle)'
            }}
          >
            <button
              onClick={() => {
                setSelectedProject(null);
                openWhatsApp(`Hi Doorstep Solutions! I was looking at your project "${selectedProject.title}" and want to discuss building something similar.`);
              }}
              className="btn-whatsapp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.35rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <MessageCircle size={17} />
              <span>Discuss on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                setSelectedProject(null);
                openContactModal(`Similar to: ${selectedProject.title}`);
              }}
              className="btn-primary"
              style={{ padding: '0.8rem 1.35rem', fontSize: '0.92rem' }}
            >
              <span>Request Custom Proposal</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
