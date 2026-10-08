import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Projects      from './components/Projects'
import Experience    from './components/Experience'
import Testimonials  from './components/Testimonials'
import Contact       from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import PageTransition from './components/PageTransition'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </PageTransition>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/projects/:slug"    element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="*"                  element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}