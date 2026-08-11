# Ibrahim Alabi — Portfolio

A "drawing set" themed portfolio built with React, Vite, Tailwind CSS v4 and Framer Motion.
Sections are laid out like architectural drawing sheets (A-001 to A-006), with a custom
drafting-crosshair cursor on desktop and a plotter-style animated hero.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push this folder to a new GitHub repo (e.g. `hybriqprime/portfolio`).
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite. Framework preset: Vite. Build command: `npm run build`.
   Output directory: `dist`. No env vars needed.
4. Deploy. Done.

## Editing content

- `src/components/FeaturedWork.jsx` — the 3 case-study projects (EduTrack, ProTrack NG, Stop The Leak).
  Add real screenshots by dropping images into `src/assets/` and rendering an `<img>` above the text block.
- `src/components/OtherBuilds.jsx` — Click-Chop, Ember & Table, DecodeFXGroup.
- `src/components/Hero.jsx` — headline, tagline, rotating "currently mapping" words.
- `src/components/Approach.jsx` — the trades-background story section.
- `src/components/Contact.jsx` — email and links.
- `src/index.css` — color tokens (`--color-ink`, `--color-amber`, etc.) and fonts.

## Notes

- The custom crosshair cursor and hero draw-in respect `prefers-reduced-motion` and are
  disabled on touch devices automatically.
- All copy is placeholder-free — it's already written from what you've actually built and
  shipped. Swap in real screenshots and repo links where noted.
