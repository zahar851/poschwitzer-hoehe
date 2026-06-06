import s from './Gallery.module.css'

const ITEMS = [
  { bg: s.bg1, label: 'Der Gastraum',          height: '440px' },
  { bg: s.bg2, label: 'Speisekarte & Weine',   height: '217px' },
  { bg: s.bg3, label: 'Auszeichnungen',         height: '217px' },
  { bg: s.bg4, label: 'Regionale Küche',        height: '217px' },
  { bg: s.bg5, label: 'Terrasse & Garten',      height: '217px' },
]

/* Decorative SVG icons per cell */
const ICONS = [
  <svg key="a" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <circle cx="40" cy="40" r="38" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
    <path d="M28 52 Q40 28 52 52" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.5"/>
    <circle cx="40" cy="34" r="6" stroke="#C9A84C" strokeWidth="0.5" fill="#C9A84C" fillOpacity="0.15" opacity="0.6"/>
  </svg>,
  <svg key="b" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
    <rect x="10" y="8" width="30" height="34" rx="2" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5"/>
    <line x1="16" y1="18" x2="34" y2="18" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
    <line x1="16" y1="24" x2="34" y2="24" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
    <line x1="16" y1="30" x2="28" y2="30" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
  </svg>,
  <svg key="c" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
    <path d="M25 8 L30 20 L43 20 L33 28 L37 41 L25 33 L13 41 L17 28 L7 20 L20 20 Z" stroke="#C9A84C" strokeWidth="0.5" fill="#C9A84C" fillOpacity="0.1" opacity="0.5"/>
  </svg>,
  <svg key="d" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
    <path d="M25 10 C25 10 15 22 15 30 C15 36 19.5 41 25 41 C30.5 41 35 36 35 30 C35 22 25 10 25 10Z" stroke="#C9A84C" strokeWidth="0.5" fill="#C9A84C" fillOpacity="0.12" opacity="0.6"/>
  </svg>,
  <svg key="e" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
    <circle cx="25" cy="25" r="16" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
    <circle cx="25" cy="25" r="8"  stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>
    <circle cx="25" cy="25" r="2"  fill="#C9A84C" opacity="0.5"/>
  </svg>,
]

export default function Gallery() {
  return (
    <section id="gallery" className={s.section}>
      <div className={s.header}>
        <span className="sectionLabel reveal">Impressionen</span>
        <h2 className={`${s.titleLight} reveal`}>
          Unser <em>Restaurant</em>
        </h2>
      </div>

      <div className={s.grid}>
        {ITEMS.map(({ bg, label, height }, i) => (
          <div key={label} className={s.item}>
            <div
              className={`${s.bg} ${bg}`}
              style={{ minHeight: height }}
            >
              {ICONS[i]}
            </div>
            <div className={s.label}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
