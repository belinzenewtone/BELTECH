# BELTECH

Business website for BELTECH, a backend and cloud engineering practice in Nairobi, Kenya.
Built with Nuxt 4 as a static site.

## Develop

```bash
npm install
npm run dev
```

Requires Node.js 20 or later.

## Build

```bash
npm run generate   # static output in .output/public
npm run preview
```

## Configuration

Copy `.env.example` to `.env`. All values are optional at build time.

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_SITE_URL` | Canonical and social URL |
| `NUXT_PUBLIC_FORM_ENDPOINT` | POST endpoint for the contact form (JSON) |
| `NUXT_PUBLIC_CONTACT_EMAIL` | Fallback: the form opens a prefilled email instead |

With neither form variable set, the contact form is disabled and says so. The email address is
never written into the page markup unless you set it.

## Content

Edit `app/data/site.ts`. Entries in brackets, such as `[Project name]`, are placeholders to replace
before launch.

## Design

Matches the portfolio at belinze.site: IBM Plex Mono, near-black ground, cream text, gold accent,
1px gold borders and square corners. Tokens live in `app/assets/css/main.css`.
