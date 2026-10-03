import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'
import { useLanguage } from '../context/LanguageContext'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function Hero() {
  const { lang, t } = useLanguage()

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.inner}>
        <motion.div
          className={styles.heroGrid}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Colonne Gauche : Titre, intro et boutons */}
          <div className={styles.leftCol}>
            <motion.div variants={fadeUp} className={styles.badge}>
              <span className={styles.badgeDot} />
              {t('hero.available')}
            </motion.div>

            <motion.h1 variants={fadeUp} className={styles.nameTitle}>
              Chris Nguefah
              <span className={styles.subtitleTitle}>
                {lang === 'fr' ? 'Développeur Full Stack' : 'Full Stack Developer'}
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className={styles.sub}>
              {lang === 'fr'
                ? "Développeur full stack chez Bestcorp & titulaire d'une Licence Pro en Génie Logiciel (IUC). Spécialisé en React 19, Next.js 15, TypeScript et PHP/Laravel."
                : "Full stack developer at Bestcorp & Software Engineering Bachelor graduate (IUC). Specialized in React 19, Next.js 15, TypeScript and PHP/Laravel."}
            </motion.p>

            <motion.div variants={fadeUp} className={styles.ctas}>
              <button className={styles.btnPrimary} onClick={() => scrollToSection('#projects')}>
                {t('hero.projectsBtn')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <button className={styles.btnOutline} onClick={() => scrollToSection('#contact')}>
                {t('hero.contactBtn')}
              </button>
              {personal.cv && (
                <a href={personal.cv} download className={styles.btnCv}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {t('nav.cv')}
                </a>
              )}
            </motion.div>
          </div>

          {/* Colonne Droite : Photo circulaire avec effet d'éclairage */}
          <motion.div variants={fadeUp} className={styles.rightCol}>
            <div className={styles.avatarWrapper}>
              <img src={personal.photo} alt={personal.name} className={styles.avatarImg} />
              <div className={styles.avatarGlow} />
            </div>
          </motion.div>
        </motion.div>

        {/* Section Basse : Organisations & Expériences */}
        <motion.div
          className={styles.workedWith}
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          <span className={styles.workedLabel}>
            {lang === 'fr' ? 'Parcours & Écosystème' : 'Worked with'}
          </span>
          <div className={styles.workedLogos}>
            <span className={styles.logoBadge}>Bestcorp</span>
            <span className={styles.logoBadge}>Afriland First Bank</span>
            <span className={styles.logoBadge}>EPFA PRO</span>
            <span className={styles.logoBadge}>IUC Douala</span>
            <span className={styles.logoBadge}>JFN High-Tech</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}