import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import styles from './Projects.module.css'

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function ProjectCard({ project, delay }) {
  const navigate = useNavigate()
  const { ref, visible } = useScrollReveal()
  const { t } = useLanguage()

  const statusLabel = project.status === 'in-progress' 
    ? t('projects.statusInProgress') 
    : project.status === 'delivered' 
      ? t('projects.statusDelivered') 
      : t('projects.statusPlanned')

  const statusCls = project.status === 'in-progress' ? 'wip' : 'done'

  return (
    <article
      ref={ref}
      className={`${styles.card} ${project.featured ? styles.featured : ''} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms`, cursor: 'pointer' }}
      onClick={() => navigate(`/projects/${project.slug}`)}
    >
      <div className={styles.thumb}>
        {project.thumb ? (
          <img src={project.thumb} alt={project.title} className={styles.thumbImg} loading="lazy" />
        ) : (
          <div className={styles.thumbPlaceholder}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <span className={styles.thumbHint}>{t('projects.previewComing')}</span>
          </div>
        )}
        <span className={`${styles.status} ${styles[statusCls]}`}>{statusLabel}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <div className={styles.stackList}>
            {project.stack.map(s => <span key={s} className={styles.stackItem}>{s}</span>)}
          </div>
          <span className={styles.year}>{project.year}</span>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.footer}>
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkActive}`}>
              <ExternalIcon /> {t('projects.demo')}
            </a>
          ) : (
            <span className={`${styles.link} ${styles.linkDisabled}`}><ExternalIcon /> {t('projects.demo')}</span>
          )}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkActive}`}>
              <GithubIcon /> {t('projects.code')}
            </a>
          ) : (
            <span className={`${styles.link} ${styles.linkDisabled}`}><GithubIcon /> {t('projects.code')}</span>
          )}
        </div>
      </div>
    </article>
  )
}

function EmptySlot({ delay }) {
  const { ref, visible } = useScrollReveal()
  const { t } = useLanguage()

  return (
    <article
      ref={ref}
      className={`${styles.card} ${styles.empty} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms`, cursor: 'default' }}
    >
      <div className={styles.emptyContent}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        <span className={styles.emptyLabel}>{t('projects.emptySlot')}</span>
      </div>
    </article>
  )
}

export default function Projects() {
  const { ref, visible } = useScrollReveal()
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('ALL')

  // Extraire les technologies principales
  const availableTechs = useMemo(() => {
    const set = new Set()
    projects.forEach(p => {
      p.stack.forEach(tech => {
        if (tech.toLowerCase().includes('laravel')) set.add('Laravel')
        else if (tech.toLowerCase().includes('react')) set.add('React')
        else if (tech.toLowerCase().includes('php')) set.add('PHP')
        else if (tech.toLowerCase().includes('mysql')) set.add('MySQL')
        else set.add(tech)
      })
    })
    return Array.from(set)
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return projects
    return projects.filter(p =>
      p.stack.some(s => s.toLowerCase().includes(activeFilter.toLowerCase()))
    )
  }, [activeFilter])

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <div className={styles.label}>{t('projects.label')}</div>
            <h2 ref={ref} className={`${styles.h2} ${visible ? styles.visible : ''}`}>
              {t('projects.heading')}
            </h2>
          </div>
          
          {/* Boutons de filtres */}
          <div className={styles.filtersContainer}>
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`${styles.filterBtn} ${activeFilter === 'ALL' ? styles.filterActive : ''}`}
            >
              {t('projects.allTech')}
            </button>
            {availableTechs.map(tech => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`${styles.filterBtn} ${activeFilter === tech ? styles.filterActive : ''}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}
          {filteredProjects.length < 3 && (
            <EmptySlot delay={filteredProjects.length * 80} />
          )}
        </div>
      </div>
    </section>
  )
}