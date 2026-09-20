import AOS from 'aos'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    })
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div
      className={
        darkMode
          ? 'bg-linear-to-br from-[#071312] via-[#0d211c] to-[#12352d] min-h-screen text-[#F5FFFC]'
          : 'bg-linear-to-br from-[#f5fffc] via-[#e8f5f0] to-[#dceee7] min-h-screen text-[#10201c]'
      }
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  )
}

export default App