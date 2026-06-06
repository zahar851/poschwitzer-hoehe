import s from './About.module.css'

const FEATURES = [
  { title: 'Familiengeführt',     text: 'Drei Generationen Gastlichkeit in jedem Detail' },
  { title: 'Regionale Küche',     text: 'Frische Zutaten direkt von lokalen Produzenten' },
  { title: 'Heimelige Atmosphäre',text: 'Gemütliche Gasträume für jeden Anlass' },
  { title: 'Thüringer Biere',     text: 'Ausgewählte Regionalbrauereien vom Fass' },
]

export default function About() {
  return (
    <div className={s.wrapper} id="about">
      <div className={s.section}>
        {/* Visual */}
        <div className={`${s.visual} reveal-left`}>
          <div className={s.frame}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 533"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="rg" cx="50%" cy="40%">
                  <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="533" fill="url(#rg)" />
              <text
                x="200" y="200"
                textAnchor="middle"
                fontFamily="'Playfair Display',serif"
                fontSize="120"
                fill="#C9A84C"
                opacity="0.06"
                fontStyle="italic"
              >P</text>
              <circle cx="200" cy="240" r="80"  fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
              <circle cx="200" cy="240" r="55"  fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
              <line x1="120" y1="240" x2="280" y2="240" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25" />
              <line x1="200" y1="160" x2="200" y2="320" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25" />
              <text x="200" y="248" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontSize="14" fill="#C9A84C" opacity="0.7" letterSpacing="3">ALTENBURG</text>
              <text x="200" y="490" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="11" fill="#C9A84C" opacity="0.5" letterSpacing="4">SEIT 1987</text>
            </svg>
          </div>
          <div className={s.frameDeco} />
          <div className={s.year}>87</div>
        </div>

        {/* Text */}
        <div className={`${s.body} reveal-right`}>
          <span className="sectionLabel">Über uns</span>
          <h2 className="sectionTitle">
            Eine Oase der<br /><em>Gastlichkeit</em>
          </h2>
          <div className="ornament"><div className="ornamentDiamond" /></div>

          <p>
            Das Restaurant Poschwitzer Höhe vereint traditionelle deutsche Gastfreundschaft
            mit dem unverwechselbaren Charme Thüringens. Seit Jahrzehnten empfangen wir
            unsere Gäste in einer Atmosphäre, die Wärme und Geborgenheit ausstrahlt.
          </p>
          <p>
            Unsere Küche spiegelt die Seele der Region wider – ehrlich, saisonal und voller
            Geschmack. Jedes Gericht erzählt eine Geschichte von Handwerk und Leidenschaft.
          </p>

          <div className={s.features}>
            {FEATURES.map(({ title, text }) => (
              <div key={title} className={s.feature}>
                <div className={s.featureTitle}>{title}</div>
                <div className={s.featureText}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
