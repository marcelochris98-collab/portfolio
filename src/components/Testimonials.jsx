import { testimonials } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import styles from './Testimonials.module.css'

function QuoteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 7-4 8z"/>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 7-4 8z"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

export default function Testimonials() {
  const { ref, visible } = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>{t('testimonials.label')}</div>
        <h2 ref={ref} className={`${styles.h2} ${visible ? styles.visible : ''}`}>
          {t('testimonials.heading')}
        </h2>

        <div className={styles.grid}>
          {testimonials.map(item => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <QuoteIcon />
                <div className={styles.stars}>
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>

              <p className={styles.content}>"{item.content}"</p>

              <div className={styles.author}>
                <div className={styles.avatarPlaceholder}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.name}>{item.name}</h4>
                  <p className={styles.role}>{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
