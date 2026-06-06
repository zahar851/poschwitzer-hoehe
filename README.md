# Poschwitzer Höhe — Restaurant Website

Vite + React + CSS Modules.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
poschwitzer-hoehe/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── global.css              ← CSS variables, resets, shared utilities
    └── components/
        ├── Navbar/
        │   ├── Navbar.jsx
        │   └── Navbar.module.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.module.css
        ├── About/
        │   ├── About.jsx
        │   └── About.module.css
        ├── Menu/
        │   ├── Menu.jsx
        │   └── Menu.module.css
        ├── Gallery/
        │   ├── Gallery.jsx
        │   └── Gallery.module.css
        ├── Contact/
        │   ├── Contact.jsx
        │   └── Contact.module.css
        ├── Reserve/
        │   ├── Reserve.jsx
        │   └── Reserve.module.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.module.css
```

## Replacing placeholder images

Gallery and About sections use SVG placeholders.
Drop real `.jpg/.webp` images in `public/images/` and update the
`background-image` or `<img src>` in the relevant component.

## Customising content

- **Menu items** → `src/components/Menu/Menu.jsx` — edit the `ITEMS` object
- **Contact info** → `src/components/Contact/Contact.jsx`
- **Colors / fonts** → `src/global.css` (CSS custom properties under `:root`)
