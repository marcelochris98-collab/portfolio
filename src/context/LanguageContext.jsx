/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    if (saved && (saved === 'fr' || saved === 'en')) return saved
    const browserLang = navigator.language || navigator.userLanguage || ''
    return browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleLang = () => {
    setLang(prev => (prev === 'fr' ? 'en' : 'fr'))
  }

  // Permet de récupérer une traduction imbriquée comme t('nav.about')
  const t = (path) => {
    const keys = path.split('.')
    let current = translations[lang] || translations.fr
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key]
      } else {
        return path
      }
    }
    return current
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
