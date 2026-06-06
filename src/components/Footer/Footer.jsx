import s from './Footer.module.css'

const NAV_LINKS = [
  { href: '#about',   label: 'Über uns' },
  { href: '#menu',    label: 'Speisekarte' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#contact', label: 'Kontakt' },
  { href: '#reserve', label: 'Reservieren' },
]

const CONTACT_LINKS = [
  { href: '#',                                     label: 'Poschwitzer Str. 100' },
  { href: '#',                                     label: '04600 Altenburg' },
  { href: 'tel:+4934470000',                       label: '+49 3447 00000' },
  { href: 'mailto:info@poschwitzer-hoehe.de',      label: 'info@poschwitzer-hoehe.de' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={s.footer}>
      <div className={s.grid}>
        {/* Brand */}
        <div>
          <div className={s.brandName}>Poschwitzer Höhe</div>
          <p className={s.brandText}>
            Gasthaus &amp; Restaurant in Altenburg.<br />
            Traditionelle deutsche Küche mit Herzlichkeit<br />
            und regionalen Spezialitäten seit 1987.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className={s.colTitle}>Navigation</div>
          <ul className={s.links}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className={s.colTitle}>Kontakt</div>
          <ul className={s.links}>
            {CONTACT_LINKS.map(({ href, label }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={s.bottom}>
        <span>© {year} Poschwitzer Höhe · Altenburg</span>
        <span>
          <a href="#">Impressum</a>
          {' · '}
          <a href="#">Datenschutz</a>
        </span>
      </div>
    </footer>
  )
}
