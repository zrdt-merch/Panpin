# PANPIN SHOE TREATMENT

Website for PANPIN SHOE TREATMENT, shoe cleaning, repair, repaint and restoration in Purwokerto.

Built with Vite, React, TypeScript and Tailwind CSS.

Live site: https://zrdt-merch.github.io/Panpin/

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repo, set **Settings → Pages → Source** to **GitHub Actions** (one-time).

Images live in `public/images/`. Reference them with `import.meta.env.BASE_URL` so paths work under `/Panpin/`.
