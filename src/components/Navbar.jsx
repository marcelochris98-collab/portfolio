import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { personal } from '../data/portfolio'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import styles from './Navbar.module.css'

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()

  const links = [
    { href: '#about',      label: t('nav.about')      },
    { href: '#skills',     label: t('nav.skills')     },
    { href: '#projects',   label: t('nav.projects')   },
    { href: '#experience', label: t('nav.experience') },
    { href: '#contact',    label: t('nav.contact')    },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleAnchor = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
        Chris<span>.</span>
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={styles.link} onClick={e => handleAnchor(e, l.href)}>
              {l.label}
            </a>
          </li>
        ))}
        {personal.cv && (
          <li>
            <a href={personal.cv} download className={styles.cvBtn} onClick={() => setMenuOpen(false)}>
              {t('nav.cv')}
            </a>
          </li>
        )}
        
        {/* Contrôles Thème & Langue */}
        <li className={styles.controlsItem}>
          <button
            onClick={toggleTheme}
            className={styles.controlBtn}
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Passer en Mode Clair' : 'Passer en Mode Sombre'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={toggleLang}
            className={`${styles.controlBtn} ${styles.langBtn}`}
            aria-label="Toggle Language"
            title={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </li>
      </ul>

      <div className={styles.mobileActions}>
        <button
          onClick={toggleTheme}
          className={styles.controlBtn}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <button
          onClick={toggleLang}
          className={`${styles.controlBtn} ${styles.langBtn}`}
          aria-label="Toggle Language"
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}