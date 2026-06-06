import { useState } from 'react'
import s from './Reserve.module.css'

export default function Reserve() {
  const [phone,   setPhone]   = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!phone.trim()) return

    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      setPhone('')
    }, 3000)
  }

  return (
    <section id="reserve" className={s.section}>
      <span className={`${s.label} reveal`}>Tischreservierung</span>

      <h2 className={`${s.title} reveal`}>
        Reservieren Sie<br /><em>Ihren Tisch</em>
      </h2>

      <p className={`${s.subtitle} reveal`}>
        Wir freuen uns auf Ihren Besuch
      </p>

      <form className={`${s.form} reveal`} onSubmit={handleSubmit} noValidate>
        <input
          className={s.input}
          type="tel"
          placeholder="Ihre Telefonnummer"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-label="Telefonnummer für Reservierung"
        />
        <button
          type="submit"
          className={`${s.button} ${success ? s.buttonSuccess : ''}`}
        >
          {success ? '✓ Anfrage gesendet' : 'Anfragen'}
        </button>
      </form>

      <p className={s.phoneNote}>
        Oder rufen Sie uns an:{' '}
        <a href="tel:+4934470000">+49 3447 00000</a>
      </p>
    </section>
  )
}
