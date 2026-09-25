# EXPOSE — Unified React Vite App

Merged EXPOSE website with a single global navigation and route-based pages.

## Routes

- `/` — Main EXPOSE landing page
- `/presale` — EXPOSE Presale
- `/staking` — EXPOSE Staking

## Navigation

The navigation is rendered once at the top-level app layout, not inside individual pages.

- Home sections: `#about`, `#ai-platform`, `#ecosystem`, `#faq`
- Presale: `/presale`
- Staking: `/staking`
- Section links from Presale/Staking return to the Home route and scroll to the selected section.
- Active navigation automatically follows the current route/section.
- Staking uses a dark/solid navigation surface; Home and Presale use a transparent/glass surface.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The project uses React, Vite, Tailwind CSS, React Router, Framer Motion, GSAP and Lucide React.
