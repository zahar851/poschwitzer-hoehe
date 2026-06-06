import s from './Contact.module.css'

const DETAILS = [
  {
    label: 'Adresse',
    text: <>Poschwitzer Str. 100<br />04600 Altenburg</>,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    label: 'Telefon',
    text: <a href="tel:+4934470000">+49 3447 00000</a>,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
    ),
  },
  {
    label: 'Öffnungszeiten',
    text: <>Mo–Fr: 11:30 – 22:00 Uhr<br />Sa–So: 11:00 – 23:00 Uhr</>,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <div className={s.wrapper} id="contact">
      <div className={s.section}>
        {/* Info */}
        <div className="reveal-left">
          <span className="sectionLabel">Kontakt &amp; Anfahrt</span>
          <h2 className="sectionTitle">
            Besuchen Sie<br /><em>uns</em>
          </h2>
          <div className="ornament"><div className="ornamentDiamond" /></div>

          {DETAILS.map(({ label, text, icon }) => (
            <div key={label} className={s.detail}>
              <div className={s.icon}>{icon}</div>
              <div>
                <div className={s.detailLabel}>{label}</div>
                <div className={s.detailText}>{text}</div>
              </div>
            </div>
          ))}

          <a
            href="https://maps.google.com/?q=Poschwitzer+Str.+100,+04600+Altenburg"
            target="_blank"
            rel="noopener noreferrer"
            className={s.mapLink}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Google Maps öffnen
          </a>
        </div>

        {/* Map */}
        <div className={`${s.map} reveal-right`}>
          <div className={s.mapGrid} />
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 400"
            className={s.mapRoads}
            aria-hidden="true"
          >
            <path d="M80 200 Q150 180 200 210 Q250 240 300 200 Q350 160 420 190" fill="none" stroke="#8B7355" strokeWidth="8" strokeLinecap="round"/>
            <path d="M0 280 Q100 260 200 280 Q300 300 400 270 Q450 255 500 270" fill="none" stroke="#8B7355" strokeWidth="5" strokeLinecap="round"/>
            <path d="M250 0 Q260 100 255 200 Q250 300 258 400" fill="none" stroke="#8B7355" strokeWidth="4" strokeLinecap="round"/>
            <rect x="100" y="120" width="60" height="40" rx="3" fill="#C9A84C" opacity="0.08"/>
            <rect x="300" y="220" width="50" height="35" rx="3" fill="#C9A84C" opacity="0.08"/>
            <rect x="180" y="260" width="70" height="45" rx="3" fill="#C9A84C" opacity="0.08"/>
          </svg>

          <div className={s.pin}>
            <div className={s.pinDot} />
            <div className={s.pinLabel}>Poschwitzer Höhe</div>
          </div>
        </div>
      </div>
    </div>
  )
}
