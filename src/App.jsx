import { useEffect } from 'react'
import Navbar   from './components/Navbar/Navbar.jsx'
import Hero     from './components/Hero/Hero.jsx'
import About    from './components/About/About.jsx'
import Menu     from './components/Menu/Menu.jsx'
import Gallery  from './components/Gallery/Gallery.jsx'
import Contact  from './components/Contact/Contact.jsx'
import Reserve  from './components/Reserve/Reserve.jsx'
import Footer   from './components/Footer/Footer.jsx'

export default function App() {
  /* Scroll-reveal observer — runs once on mount */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
        <Reserve />
      </main>
      <Footer />
    </>
  )
}
