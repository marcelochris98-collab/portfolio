import { skills } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Skills.module.css'

const categoryIcons = {
  'Backend': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  ),
  'Frontend': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  'Outils & Environnement': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  'Architecture & Méthodes': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
  ),
  'Sécurité & Auth': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  'Autres': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
  ),
}

function SkillCard({ cat, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.cardIcon}>{categoryIcons[cat.category]}</div>
      <div className={styles.cardTitle}>{cat.category}</div>
      <div className={styles.tags}>
        {cat.items.map(item => (
          <span key={item.name} className={`${styles.tag} ${item.featured ? styles.featured : ''}`}>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Compétences</div>
        <h2 ref={ref} className={`${styles.h2} ${visible ? styles.visible : ''}`}>
          Stack technique
        </h2>
        <div className={styles.grid}>
          {skills.map((cat, i) => (
            <SkillCard key={cat.category} cat={cat} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
