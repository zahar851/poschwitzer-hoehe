import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#about',   label: 'Über uns' },
  { href: '#menu',    label: 'Speisekarte' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.navScrolled : ''}`}>
        <a href="#hero" className={s.logo}>Poschwitzer Höhe</a>

        <ul className={s.links}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <a href="#reserve" className={s.reserveBtn}>Reservieren</a>

        <button
          className={s.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Menü öffnen"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`${s.mobileMenu} ${menuOpen ? s.open : ''}`}>
        <button className={s.mobileClose} onClick={closeMenu} aria-label="Schließen">
          ✕
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#reserve" onClick={closeMenu} style={{ color: 'var(--gold)' }}>
          Reservieren
        </a>
      </div>
    </>
  )
}
