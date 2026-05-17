import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'
import styles from './Hero.module.css'

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

const codeLines = [
  { tokens: [{ t: '// portfolio.php', c: 'comment' }] },
  { tokens: [] },
  { tokens: [{ t: 'class ', c: 'kw' }, { t: 'Developer', c: 'fn' }, { t: ' {', c: 'text' }] },
  { tokens: [{ t: '  private ', c: 'kw' }, { t: '$name', c: 'var' }, { t: ' = ', c: 'text' }, { t: "'Chris Nguefah'", c: 'str' }, { t: ';', c: 'text' }] },
  { tokens: [{ t: '  private ', c: 'kw' }, { t: '$location', c: 'var' }, { t: ' = ', c: 'text' }, { t: "'Douala, Cameroun'", c: 'str' }, { t: ';', c: 'text' }] },
  { tokens: [{ t: '  private ', c: 'kw' }, { t: '$stack', c: 'var' }, { t: ' = [', c: 'text' }] },
  { tokens: [{ t: "    'Laravel'", c: 'str' }, { t: ', ', c: 'text' }, { t: "'MySQL'", c: 'str' }, { t: ',', c: 'text' }] },
  { tokens: [{ t: "    'Tailwind'", c: 'str' }, { t: ', ', c: 'text' }, { t: "'React'", c: 'str' }, { t: ',', c: 'text' }] },
  { tokens: [{ t: '  ];', c: 'text' }] },
  { tokens: [] },
  { tokens: [{ t: '  public function ', c: 'kw' }, { t: 'status', c: 'fn' }, { t: '(): ', c: 'text' }, { t: 'string', c: 'type' }, { t: ' {', c: 'text' }] },
  { tokens: [{ t: '    return ', c: 'kw' }, { t: "'Disponible'", c: 'str' }, { t: ';', c: 'text' }] },
  { tokens: [{ t: '  }', c: 'text' }] },
  { tokens: [{ t: '}', c: 'text' }] },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(v => {
        if (v >= codeLines.length) { clearInterval(timer); return v }
        return v + 1
      })
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.tag}>
            <span className={styles.dot} />
            Disponible pour stages &amp; missions
          </div>

          <h1 className={styles.h1}>
            Développeur<br />
            <span className={styles.accent}>Full Stack</span>
          </h1>

          <p className={styles.desc}>
            Étudiant en Licence 3 à l'IUC — je conçois des applications web robustes,
            de la base de données jusqu'à l'interface.
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.btnPrimary}>
              Voir mes projets
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" className={styles.btnSecondary}>Me contacter</a>
            {personal.cv && (
              <a href={personal.cv} download className={styles.btnCv}>
                <DownloadIcon /> Mon CV
              </a>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span className={`${styles.dot2} ${styles.red}`} />
              <span className={`${styles.dot2} ${styles.yellow}`} />
              <span className={`${styles.dot2} ${styles.green}`} />
              <span className={styles.filename}>portfolio.php</span>
            </div>
            <pre className={styles.code}>
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className={styles.codeLine}>
                  <span className={styles.lineNum}>{i + 1}</span>
                  {line.tokens.length === 0
                    ? <span>&nbsp;</span>
                    : line.tokens.map((tok, j) => (
                        <span key={j} className={styles[tok.c]}>{tok.t}</span>
                      ))
                  }
                  {i === visibleLines - 1 && <span className={styles.cursor} />}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
