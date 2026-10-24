import React from 'react';
import { projects } from '../data/projects';
import { useApp } from '../context/AppContext';
import { Sparkles, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Projects = () => {
  const { activeFilter, setActiveFilter, setSelectedProject } = useApp();

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'app', label: 'App Development', count: projects.filter(p => p.category === 'app').length },
    { id: 'social', label: 'Social Media Marketing', count: projects.filter(p => p.category === 'social').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Production Systems & <br />
            <span className="text-gradient-pink">Live Client Deployments</span>
          </h2>
          <p className="section-desc">
            Explore live applications engineered for real-world reliability, high concurrency, and clean user experience. Click any project to open live previews or inspect technical details.
          </p>
        </div>

        {/* Filter Navigation Tabs (Mobile-responsive wrap) */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem'
        }}>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)',
                  background: isActive ? 'var(--grad-pink-primary)' : 'rgba(255, 255, 255, 0.85)',
                  color: isActive ? '#FFFFFF' : 'var(--slate-700)',
                  border: isActive ? '1px solid transparent' : '1px solid var(--pink-border)',
                  boxShadow: isActive ? 'var(--shadow-pink-glow)' : 'var(--shadow-sm)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer'
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.12rem 0.45rem',
                    borderRadius: 'var(--radius-full)',
                    background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--pink-100)',
                    color: isActive ? '#fff' : 'var(--pink-700)',
                    fontWeight: 700
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid (Responsive minmax 280px) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1.25rem, 3vw, 2rem)'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                transition: 'all var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--pink-border)',
                background: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(244, 63, 94, 0.2)';
                const img = e.currentTarget.querySelector('.project-card-img');
                if (img) img.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                const img = e.currentTarget.querySelector('.project-card-img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Image Preview Container */}
              <div style={{ position: 'relative', height: 'clamp(190px, 22vw, 230px)', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onError={(e) => {
                    e.target.src = '/project_web.jpg';
                  }}
                />

                {/* Top overlay category & lead badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  left: '0.85rem',
                  display: 'flex',
                  gap: '0.4rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--pink-700)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {project.categoryLabel}
                  </span>

                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(15, 23, 42, 0.78)',
                    backdropFilter: 'blur(6px)',
                    color: '#fff'
                  }}>
                    Lead: {project.lead}
                  </span>
                </div>

                {/* Bottom Metric Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.85rem',
                  left: '0.85rem',
                  right: '0.85rem',
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}>
                  <span style={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.96)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--slate-900)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <Sparkles size={12} color="var(--pink-500)" />
                    <span>{project.metric}</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--pink-600)', marginBottom: '0.25rem' }}>
                  Client: {project.client}
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.3rem)',
                  fontWeight: 800,
                  color: 'var(--slate-900)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--slate-600)',
                  lineHeight: 1.55,
                  marginBottom: '1.15rem',
                  flexGrow: 1
                }}>
                  {project.summary}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {project.techStack.slice(0, 4).map((tech, tidx) => (
                    <span
                      key={tidx}
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--pink-50)',
                        color: 'var(--pink-700)',
                        border: '1px solid var(--pink-200)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span style={{ fontSize: '0.7rem', color: 'var(--slate-500)', alignSelf: 'center' }}>
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Action Buttons (Responsive wrap) */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  paddingTop: '1.1rem',
                  borderTop: '1px solid var(--hashwhite-subtle)',
                  flexWrap: 'wrap'
                }}>
                  {/* Live Link Button */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        padding: '0.55rem 1rem',
                        fontSize: '0.82rem',
                        flex: '1 1 auto',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.35rem'
                      }}
                      title="Open Live Deployed Application"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {/* Case Study Modal Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-secondary"
                    style={{
                      padding: '0.55rem 0.85rem',
                      fontSize: '0.82rem'
                    }}
                    title="Read Case Study Details"
                  >
                    <span>Details</span>
                  </button>

                  {/* GitHub Link if available */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--hashwhite-subtle)',
                        border: '1px solid var(--hashwhite-muted)',
                        color: 'var(--slate-700)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform var(--transition-fast)',
                        flexShrink: 0
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
