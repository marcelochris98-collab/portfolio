import { personal } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import styles from './About.module.css'

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

export default function About() {
  const { ref: r1, visible: v1 } = useScrollReveal()
  const { ref: r2, visible: v2 } = useScrollReveal()
  const { t } = useLanguage()

  const infoItems = [
    [t('about.info.fullName'),     personal.name],
    [t('about.info.location'),     personal.location],
    [t('about.info.educationBts'), t('about.info.educationBtsVal')],
    [t('about.info.educationL3'),  t('about.info.educationL3Val')],
    [t('about.info.stack'),        t('about.info.stackVal')],
    [t('about.info.email'),        personal.email],
  ]

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>{t('about.label')}</div>
        <div className={styles.grid}>

          {/* Colonne gauche */}
          <div ref={r1} className={`${styles.left} ${v1 ? styles.visible : ''}`}>

            {/* Photo de profil */}
            <div className={styles.photoWrapper}>
              {personal.photo
                ? <img src={personal.photo} alt={personal.name} className={styles.photo} loading="lazy" />
                : (
                  <div className={styles.photoPlaceholder}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span className={styles.photoHint}>
                      {t('about.photoHint')}
                    </span>
                  </div>
                )
              }
            </div>

            <h2 className={styles.h2}>{t('about.subheading')}</h2>
            {personal.bio.map((p, i) => (
              <p key={i} className={styles.bio}>{p}</p>
            ))}

            <div className={styles.actions}>
              <div className={styles.available}>
                <span className={styles.pulse} />
                {t('about.availableTag')}
              </div>

              {/* Bouton téléchargement CV */}
              {personal.cv
                ? (
                  <a href={personal.cv} download className={styles.cvBtn}>
                    <DownloadIcon /> {t('about.downloadCv')}
                  </a>
                )
                : (
                  <div className={styles.cvPlaceholder}>
                    <DownloadIcon />
                    <span>
                      {t('about.cvHint')}
                    </span>
                  </div>
                )
              }
            </div>

            <div className={styles.stats}>
              {personal.stats.map((s, i) => (
                <div key={i} className={styles.statBox}>
                  <div className={styles.statVal}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite */}
          <div ref={r2} className={`${styles.right} ${v2 ? styles.visible : ''}`}>
            <ul className={styles.infoList}>
              {infoItems.map(([key, val]) => (
                <li key={key} className={styles.infoItem}>
                  <span className={styles.infoKey}>{key}</span>
                  <span className={styles.infoVal}>{val}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
