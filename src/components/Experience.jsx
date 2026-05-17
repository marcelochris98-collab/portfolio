import { experience } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Experience.module.css'

function TimelineItem({ item, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`${styles.item} ${item.type === 'education' ? styles.education : styles.internship} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.dot} />
      <div className={styles.content}>
        <div className={styles.period}>{item.period}</div>
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.org}>{item.org}</div>
        <p className={styles.desc}>{item.description}</p>
        <div className={styles.tags}>
          {item.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Parcours</div>
        <h2 ref={ref} className={`${styles.h2} ${visible ? styles.visible : ''}`}>
          Formation &amp; Expériences
        </h2>

        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.eduDot}`} /> Formation
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.intDot}`} /> Stage professionnel
          </span>
        </div>

        <div className={styles.timeline}>
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
