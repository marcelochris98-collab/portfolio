import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Projects      from './components/Projects'
import Experience    from './components/Experience'
import Contact       from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import PageTransition from './components/PageTransition'

function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </PageTransition>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"                  element={<Home />} />
          <Route path="/projects/:slug"    element={<ProjectDetail />} />
          <Route path="*"                  element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}