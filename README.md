# BELTECH

Business website for BELTECH, a backend and cloud engineering practice in Nairobi, Kenya.
Built with Nuxt 4 as a static site.

## Develop

```bash
pnpm install
pnpm dev
```

Requires Node.js 20 or later and pnpm.

## Build

```bash
pnpm generate   # static output in .output/public
pnpm preview
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

Brand colours come from the portfolio at belinzenewtone's site: near-black ground, cream text and gold accent,
with its light cream theme as an alternative. Type is IBM Plex Sans.

Dark and light themes are CSS variables in `app/assets/css/main.css`, switched with `data-theme` on `<html>`.
The first visit follows the system preference; the toggle stores the choice in `localStorage`. An inline script
in `<head>` applies it before first paint to avoid a flash.
