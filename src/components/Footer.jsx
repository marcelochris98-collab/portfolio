import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          © {year} <span className={styles.name}>Chris Nguefah</span> — Douala, Cameroun
        </span>
        <button className={styles.top} onClick={scrollTop} aria-label="Retour en haut">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
          </svg>
          Retour en haut
        </button>
      </div>
    </footer>
  )
}
