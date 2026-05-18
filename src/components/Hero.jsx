import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

// Mots qui défilent en boucle
const roles = ['Full Stack', 'javaScript', 'Backend', 'React', 'Next.js' ,'Full Stack']

export default function Hero() {
  const navigate = useNavigate()
  const roleRef  = useRef(null)

  // Animation texte défilant
  useEffect(() => {
    let i = 0
    let charIdx = 0
    let deleting = false
    let timeout

    const tick = () => {
      const word = roles[i % roles.length]
      const el   = roleRef.current
      if (!el) return

      if (!deleting) {
        el.textContent = word.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === word.length) {
          deleting = true
          timeout = setTimeout(tick, 1800)
          return
        }
      } else {
        el.textContent = word.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          i++
        }
      }
      timeout = setTimeout(tick, deleting ? 60 : 90)
    }

    timeout = setTimeout(tick, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Glow d'arrière-plan */}
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge disponible */}
        <motion.div variants={fadeUp} className={styles.badge}>
          <span className={styles.badgeDot} />
          Disponible pour stages &amp; missions
        </motion.div>

        {/* Titre principal */}
        <motion.div variants={fadeUp} className={styles.titleBlock}>
          <h2 className={styles.h2}>
            <span className={styles.line}>Développeur</span>
            <span className={styles.lineAccent}>
              <span ref={roleRef} className={styles.typed} />
              <span className={styles.caret} />
            </span>
          </h2>
        </motion.div>

        {/* Sous-titre */}
        <motion.p variants={fadeUp} className={styles.sub}>
          Étudiant en Licence 3 à l'IUC Douala — je conçois des applications web
          robustes et maintenables, de la base de données jusqu'à l'interface.
        </motion.p>

        {/* Séparateur animé */}
        <motion.div variants={fadeIn} className={styles.sep}>
          <motion.span
            className={styles.sepLine}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* CTAs */}
        <motion.div variants={fadeUp} className={styles.ctas}>
          <button className={styles.btnPrimary} onClick={() => navigate('#projets')}>
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <button className={styles.btnOutline} onClick={() => navigate('#about')}>
            Mon profil
          </button>
          <button className={styles.btnOutline} onClick={() => navigate('#contact')}>
            Me contacter
          </button>
          {personal.cv && (
            <a href={personal.cv} download className={styles.btnCv}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Mon CV
            </a>
          )}
        </motion.div>

        {/* Infos rapides en bas */}
        <motion.div variants={fadeUp} className={styles.meta}>
          {[
            { icon: '', val: 'Douala, Cameroun' },
            { icon: '', val: 'IUC · Licence 3' },
            { icon: '', val: 'Laravel · MySQL · React' },
          ].map(m => (
            <span key={m.val} className={styles.metaItem}>
              <span className={styles.metaIcon}>{m.icon}</span>
              {m.val}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}