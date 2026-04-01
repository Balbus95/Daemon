<p align="center">
  <img src="public/favicon.png" alt="Daemon" width="120">
</p>

<h1 align="center">Daemon</h1>

<p align="center">
  <strong>A live public profile and context layer for AI systems and humans</strong>
</p>

<p align="center">
  <a href="https://balbus95.github.io/Daemon">Live Site</a> ·
  <a href="https://github.com/Balbus95">GitHub</a> ·
  <a href="https://www.linkedin.com/in/mario-balbi">LinkedIn</a>
</p>

---

## What is this?

A **Daemon** is a public personal profile designed to be read by both humans and AI systems. It exposes structured information about who I am, what I build, and what drives me — always accessible, always up to date.

Think of it as a living business card:

- **For humans**: A clean site showing my background, projects, and direction
- **For AI systems**: A structured [`/daemon.json`](https://balbus95.github.io/Daemon/daemon.json) endpoint with all my data

Forked and heavily customized from [danielmiessler/Daemon](https://github.com/danielmiessler/Daemon).

## Tech Stack

- [Astro](https://astro.build) — static site generation
- [React](https://react.dev) — interactive components
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [GitHub Pages](https://pages.github.com) — hosting and deployment

## Quick Start

```bash
git clone https://github.com/Balbus95/Daemon.git
cd Daemon
npm install
npm run dev
```

## Customization

1. **Update your profile**: Edit `public/daemon.json` with your data
2. **Mirror to markdown**: Keep `public/daemon.md` in sync (human-readable version)
3. **Adjust pages**: Edit components in `src/` and pages in `src/pages/`
4. **Deploy**: Push to `main` — GitHub Actions handles the rest

## Data Format

All profile data lives in `public/daemon.json`:

```json
{
  "about": "...",
  "mission": "...",
  "telos": ["P1: ...", "M1: ...", "G1: ..."],
  "current_location": "...",
  "preferences": ["..."],
  "daily_routine": ["..."],
  "favorite_books": ["..."],
  "favorite_movies": ["..."],
  "favorite_podcasts": ["..."],
  "predictions": ["..."],
  "projects": {
    "technical": ["..."],
    "creative": ["..."],
    "personal": ["..."]
  },
  "last_updated": "YYYY-MM-DD"
}
```

The JSON is publicly accessible at `/daemon.json` — any AI assistant or tool can fetch it directly for context.

## License

MIT — fork it, customize it, make it yours.
