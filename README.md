# StudyGateway Asia — Website

A React (Vite) website for StudyGateway Asia.

## Run it

You need [Node.js](https://nodejs.org) installed (version 18 or newer). Then, in this folder:

```bash
npm install
npm run dev
```

The site opens automatically at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

The finished site appears in the `dist/` folder, ready to upload to any web host
(Netlify, Vercel, cPanel, etc.).

## Where things live

- `src/App.jsx` — the entire website (all sections, styles and images).
- `index.html` — the page shell.
- `src/main.jsx` — mounts the app.

## Notes

- Images (logo, student photo, university logos) are embedded directly in
  `src/App.jsx`, so nothing else needs wiring.
- To go live you'll still want to: connect the contact form, add your real
  Facebook/TikTok links, and add a real quote from your student.
