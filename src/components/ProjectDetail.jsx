import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/portfolio'
import styles from './ProjectDetail.module.css'

const statusMap = {
  'in-progress': { label: 'En cours',  cls: 'wip' },
  'delivered':   { label: 'Livré',     cls: 'done' },
  'planned':     { label: 'Planifié',  cls: 'planned' },
}

function BackIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Projet introuvable.</p>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <BackIcon /> Retour à l'accueil
        </button>
      </div>
    )
  }

  const status = statusMap[project.status] || statusMap['planned']

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Navigation */}
        <button className={styles.backBtn} onClick={() => navigate('/#projects')}>
          <BackIcon /> Retour aux projets
        </button>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div>
              <div className={styles.subtitle}>{project.subtitle}</div>
              <h1 className={styles.title}>{project.title}</h1>
            </div>
            <span className={`${styles.status} ${styles[status.cls]}`}>{status.label}</span>
          </div>

          <div className={styles.meta}>
            <span className={styles.year}>{project.year}</span>
            <div className={styles.stackList}>
              {project.stack.map(s => (
                <span key={s} className={styles.stackItem}>{s}</span>
              ))}
            </div>
          </div>

          {/* CTA liens */}
          <div className={styles.ctas}>
            {project.demo
              ? <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  <ExternalIcon /> Voir la démo
                </a>
              : <span className={`${styles.btnPrimary} ${styles.disabled}`}>
                  <ExternalIcon /> Démo non disponible
                </span>
            }
            {project.github
              ? <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                  <GithubIcon /> Code source
                </a>
              : <span className={`${styles.btnSecondary} ${styles.disabled}`}>
                  <GithubIcon /> Dépôt privé
                </span>
            }
          </div>
        </header>

        {/* Image principale */}
        {project.thumb && (
          <div className={styles.mainThumb}>
            <img src={project.thumb} alt={project.title} />
          </div>
        )}
        {!project.thumb && (
          <div className={styles.thumbPlaceholder}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <span>
              Ajoute une image dans <code>public/images/</code> et renseigne <code>thumb</code> dans <code>portfolio.js</code>
            </span>
          </div>
        )}

        {/* Contenu principal */}
        <div className={styles.content}>

          {/* Description longue */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>À propos du projet</h2>
            <div className={styles.descLong}>
              {(project.descriptionLong || project.description).split('\n\n').map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </section>

          <div className={styles.twoCol}>

            {/* Fonctionnalités */}
            {project.features && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Fonctionnalités</h2>
                <ul className={styles.featureList}>
                  {project.features.map((f, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.checkIcon}><CheckIcon /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Stack détaillé */}
            {project.techDetails && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Technologies utilisées</h2>
                <div className={styles.techList}>
                  {project.techDetails.map((t, i) => (
                    <div key={i} className={styles.techItem}>
                      <div className={styles.techName}>{t.name}</div>
                      <div className={styles.techRole}>{t.role}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Galerie screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Captures d'écran</h2>
              <div className={styles.gallery}>
                {project.screenshots.map((src, i) => (
                  <div key={i} className={styles.galleryItem}>
                    <img src={src} alt={`${project.title} — capture ${i + 1}`} />
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Navigation entre projets */}
        <div className={styles.projectNav}>
          {(() => {
            const idx = projects.findIndex(p => p.slug === slug)
            const prev = projects[idx - 1]
            const next = projects[idx + 1]
            return (
              <>
                {prev
                  ? <button className={styles.projectNavBtn} onClick={() => navigate(`/projects/${prev.slug}`)}>
                      <BackIcon />
                      <span>
                        <span className={styles.navLabel}>Projet précédent</span>
                        <span className={styles.navTitle}>{prev.title}</span>
                      </span>
                    </button>
                  : <div />
                }
                {next
                  ? <button className={`${styles.projectNavBtn} ${styles.projectNavBtnRight}`} onClick={() => navigate(`/projects/${next.slug}`)}>
                      <span>
                        <span className={styles.navLabel}>Projet suivant</span>
                        <span className={styles.navTitle}>{next.title}</span>
                      </span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  : <div />
                }
              </>
            )
          })()}
        </div>

      </div>
    </div>
  )
}
