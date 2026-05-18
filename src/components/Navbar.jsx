import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { personal } from '../data/portfolio'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',      label: 'À propos'    },
  { href: '#skills',     label: 'Compétences' },
  { href: '#projects',   label: 'Projets'     },
  { href: '#experience', label: 'Parcours'    },
  { href: '#contact',    label: 'Contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
            <a href={personal.cv} download className={styles.cvBtn}>
              CV
            </a>
          </li>
        )}
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}