# Tim Garcia — Portfolio

Personal site: tech stack, AWS certification, the MBQ app, and three playable robot games.
Vite + React 19 + TypeScript + Tailwind v4 + Motion.

```bash
pnpm install
pnpm dev          # http://localhost:5190
pnpm build        # type-check + production build into dist/
```

## Change the colors

Edit the four values in [`src/styles/palette.css`](src/styles/palette.css). Everything else
(backgrounds, text, borders, glows, light and dark mode) is mixed from them in
[`src/styles/theme.css`](src/styles/theme.css).

## Change the words

All copy, the stack, certificates, awards, MBQ and game details live in [`src/content.ts`](src/content.ts).
Set `profile.linkedin` there to show a LinkedIn link in Contact.

## Update the games

The games are built from their own repos (`~/Documents/games/robogolf`, `roboblast`, `robojump`)
and copied into `public/games/<id>/`:

```bash
pnpm sync:games            # all three
pnpm sync:games robojump   # just one
```

Set `GAMES_DIR` if the games live somewhere else. Commit the updated `public/games/`.
Cover images are in `public/covers/`.

## Contact form (EmailJS)

Copy `.env.example` to `.env` and fill in the service ID, template ID and public key from
[EmailJS](https://dashboard.emailjs.com). The template receives `from_name`, `reply_to`,
`company` and `message`. For the deployed site, add the same three values as repository
secrets (Settings → Secrets and variables → Actions).

## Deploy

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
The repo is meant to be named `timgarciaa.github.io` so the site is served from the domain root.
In the repo's Settings → Pages, set Source to "GitHub Actions".

## Easter eggs

- `~` (or the `>_` button) opens a terminal: try `help`, `play robojump`, `sudo hire tim`.
- ↑ ↑ ↓ ↓ ← → ← → B A turns on arcade mode.
- Click the TG logo five times quickly.
- The stack marquee hides a coin.
- Open the browser console.
- Hover the hero photo; dark mode has a cursor trail.
