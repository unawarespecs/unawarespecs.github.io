import { About } from './components/About'
import { Activities } from './components/Activities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { useTheme } from './hooks/useTheme'
import { useEffect } from 'react'

function App() {
  const { theme, toggleTheme } = useTheme()
  const title = "CDG Test"

  // Set document title
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
