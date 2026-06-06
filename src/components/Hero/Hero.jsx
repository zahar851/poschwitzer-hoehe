import s from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={s.hero}>
      <div className={s.bg} />
      <div className={s.overlay} />
      <div className={s.grain} />

      <div className={s.content}>
        <div className={s.eyebrow}>Gasthof &amp; Restaurant</div>

        <h1 className={s.title}>
          Poschwitzer<br /><em>Höhe</em>
        </h1>

        <p className={s.subtitle}>Herzlichkeit seit Generationen</p>
        <div className={s.divider} />
        <a href="#reserve" className={s.cta}>Tisch reservieren</a>
      </div>

      <div className={s.scrollIndicator}>
        <span>Entdecken</span>
        <div className={s.scrollLine} />
      </div>

      <div className={s.badge}>
        <div className={s.badgeText}>
          Thüringische<br />Küche<br />seit 1987
        </div>
      </div>
    </section>
  )
}
