import { useState } from 'react'
import s from './Menu.module.css'

const TABS = [
  { id: 'starters', label: 'Vorspeisen' },
  { id: 'mains',    label: 'Hauptgänge' },
  { id: 'drinks',   label: 'Getränke' },
]

const ITEMS = {
  starters: [
    { name: 'Thüringer Bratwurst-Suppe',    desc: 'Kräftige Brühe mit feinen Bratwurstscheiben, Gemüseeinlage und frischen Kräutern',            price: '€ 7,90' },
    { name: 'Hausgemachte Pastete',          desc: 'Wildpastete mit Preiselbeeren, Cornichons und geröstetem Sauerteigbrot',                      price: '€ 9,50' },
    { name: 'Poschwitzer Vorspeisenteller',  desc: 'Auswahl an regionalen Spezialitäten, Aufschnitt und hausgemachten Dips',                      price: '€ 12,90' },
    { name: 'Zwiebelsuppe gratiniert',       desc: 'Nach altdeutscher Art, mit Gruyère überbacken und Baguette',                                  price: '€ 8,50' },
  ],
  mains: [
    { name: 'Thüringer Rostbraten',    desc: 'Zarter Rinderbraten mit Zwiebelkruste, Rotkohl und Klößen nach Hausart',                            price: '€ 22,90' },
    { name: 'Sauerbraten vom Rind',    desc: '48-Stunden-Marinade, Lebkuchensauce, Kartoffelklöße und Rotkraut',                                  price: '€ 21,50' },
    { name: 'Forelle Blau',            desc: 'Frisch aus thüringischen Gewässern, Mandelbutter, Kartoffeln und Gurkenrelish',                     price: '€ 19,90' },
    { name: 'Wildschweingulasch',      desc: 'Geschmortes Wildschwein in Rotweinsauce mit Semmelknödeln und Preiselbeeren',                       price: '€ 24,50' },
    { name: 'Vegetarische Käsespätzle',desc: 'Handgemachte Spätzle mit Bergkäse überbacken, Röstzwiebeln und Blattsalat',                        price: '€ 16,90' },
    { name: 'Poschwitzer Gutsküche',   desc: 'Saisonaler Tagesbraten nach Art des Hauses – bitte anfragen',                                      price: 'Tagespreis' },
  ],
  drinks: [
    { name: 'Altenburger Landbier',        desc: 'Regionales Fassbier, frisch gezapft, 0,5 l',                                                   price: '€ 4,20' },
    { name: 'Thüringer Weißburgunder',     desc: 'Feinherb, fruchtig, aus der Saale-Unstrut-Region, 0,2 l',                                      price: '€ 5,90' },
    { name: 'Holunderblüten-Schorle',      desc: 'Hausgemachter Holunderblütensirup mit Mineralwasser, 0,3 l',                                   price: '€ 3,50' },
    { name: 'Glühwein nach Hausart',       desc: 'Gewürzter Rotwein mit Zimtstange und Orangenzeste, 0,2 l',                                     price: '€ 4,80' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('starters')

  return (
    <section id="menu" className={s.section}>
      <div className={s.header}>
        <span className={`sectionLabel reveal`}>Unsere Küche</span>
        <h2 className={`sectionTitle reveal`}>
          Die <em>Speisekarte</em>
        </h2>
        <div className={`ornament reveal`}><div className="ornamentDiamond" /></div>
      </div>

      <div className={`${s.tabs} reveal`}>
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            className={`${s.tab} ${active === id ? s.tabActive : ''}`}
            onClick={() => setActive(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={s.grid}>
        {ITEMS[active].map(({ name, desc, price }) => (
          <div key={name} className={`${s.card} reveal`}>
            <div className={s.cardName}>{name}</div>
            <div className={s.cardDesc}>{desc}</div>
            <div className={s.cardPrice}>{price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
