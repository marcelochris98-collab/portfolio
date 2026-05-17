import { Routes, Route } from 'react-router-dom'
import Navbar       from './components/Navbar'
import Footer       from './components/Footer'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Projects     from './components/Projects'
import Experience   from './components/Experience'
import Contact      from './components/Contact'
import ProjectDetail from './components/ProjectDetail'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </>
  )
}
