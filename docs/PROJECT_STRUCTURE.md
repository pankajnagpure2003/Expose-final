# Project Structure

```text
EXPOSE-Merged/
├── public/
│   ├── assets/
│   └── videos/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   │       └── home/
│   ├── hooks/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Presale/
│   │   │   └── components/
│   │   └── Staking/
│   │       └── components/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Organization
- `components/layout`: shared Navbar and Footer.
- `components/common`: reusable UI primitives.
- `components/sections/home`: Home page sections.
- `pages/Presale` and `pages/Staking`: feature-specific page code and components.
- `pages/Home`: Home page entry.
- `hooks`: reusable React hooks.
- `assets` / `public`: existing application assets and media.

The application logic and visual styling were preserved; only project organization and relative import paths were adjusted.
