import { useState } from 'react'
import { personal } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

const socials = [
  {
    name: 'GitHub',
    handle: 'marcelochris98-collab',
    href: personal.github,
    icon: <GithubIcon />,
  },
  {
    name: 'LinkedIn',
    handle: 'chris-nguefah',
    href: personal.linkedin,
    icon: <LinkedinIcon />,
  },
  {
    name: 'Email',
    handle: personal.email,
    href: `mailto:${personal.email}`,
    icon: <MailIcon />,
  },
]

export default function Contact() {
  const { ref: r1, visible: v1 } = useScrollReveal()
  const { ref: r2, visible: v2 } = useScrollReveal()

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || 'Contact depuis mon portfolio')}&body=${encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Contact</div>
        <div className={styles.grid}>

          {/* Gauche */}
          <div ref={r1} className={`${styles.left} ${v1 ? styles.visible : ''}`}>
            <h2 className={styles.h2}>Travaillons<br />ensemble.</h2>
            <p className={styles.intro}>
              Tu as un projet, une opportunité de stage, ou tu veux simplement échanger sur la tech ?
              Envoie-moi un message — je lis et réponds à tout.
            </p>
            <div className={styles.socials}>
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <span className={styles.socialIcon}>{s.icon}</span>
                  <span className={styles.socialInfo}>
                    <span className={styles.socialName}>{s.name}</span>
                    <span className={styles.socialHandle}>{s.handle}</span>
                  </span>
                  <span className={styles.socialArrow}><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </div>

          {/* Droite — formulaire */}
          <div ref={r2} className={`${styles.right} ${v2 ? styles.visible : ''}`}>
            <div className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label2}>Nom complet</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Jean Mbarga"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label2}>Adresse email</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="jean@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label2}>Sujet</label>
                <input
                  className={styles.input}
                  type="text"
                  name="subject"
                  placeholder="Proposition de stage / projet..."
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label2}>Message</label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="Décris ton projet ou ta demande..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className={`${styles.submit} ${sent ? styles.sent : ''}`}
                onClick={handleSubmit}
              >
                {sent ? 'Message envoyé !' : 'Envoyer le message'}
                {!sent && <ArrowIcon />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
