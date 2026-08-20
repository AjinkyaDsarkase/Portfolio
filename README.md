# Ajinkya Darkase — Portfolio

Personal portfolio site built with Next.js (App Router) + TypeScript, styled
with Tailwind CSS, animated with Framer Motion, icons from lucide-react.
Configured for static export, so it deploys to Vercel, Netlify, or GitHub
Pages with no backend.

## Tech stack

- Next.js 14 (App Router), TypeScript
- Tailwind CSS
- Framer Motion (entrance/scroll animations)
- lucide-react (icons)
- React Hook Form + Zod (contact form validation)
- Static export (`output: 'export'`)

## Project structure

```
src/
  app/
    layout.tsx      # root layout: fonts, metadata, OpenGraph, JSON-LD, theme init
    page.tsx         # assembles all page sections
    globals.css      # Tailwind layers + base styles
    robots.ts        # generates /robots.txt
    sitemap.ts        # generates /sitemap.xml
  components/
    layout/
      Navbar.tsx, Footer.tsx   # site chrome: header nav + footer
    Hero.tsx, About.tsx, Skills.tsx, WorkProcess.tsx, Experience.tsx,
    Projects.tsx, ProjectCard.tsx, ProjectCover.tsx, Education.tsx, Contact.tsx
    HeroPortrait.tsx, BackgroundEffects.tsx
    Section.tsx, Card.tsx, Tag.tsx, ThemeToggle.tsx, ScrollToTop.tsx   # reusable primitives
  data/
    data.ts          # ALL resume content lives here (typed) — edit this, not the components
  lib/
    use-theme.ts          # dark/light toggle hook (persists to localStorage)
    use-active-section.ts # scroll-spy hook for nav highlighting
    theme-script.ts        # inline script to avoid flash of wrong theme
public/
  images/projects/    # project screenshots go here
  resume/             # resume PDF goes here
```

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Visit http://localhost:3000.

## Build (static export)

```bash
npm run build
```

This produces a static site in the `out/` directory (via Next's
`output: 'export'`). You can preview it locally with any static file
server, e.g.:

```bash
npx serve out
```

## Deployment

### Vercel

Push to a Git repo and import it in Vercel — it detects Next.js
automatically. No extra config needed (Vercel also supports the export
output directly, or you can deploy it as a standard Next.js app).

### Netlify

- Build command: `npm run build`
- Publish directory: `out`

### GitHub Pages

1. `npm run build` to generate `out/`.
2. Deploy the contents of `out/` to your `gh-pages` branch (e.g. with the
   `gh-pages` npm package, or a GitHub Actions workflow).
3. If deploying to a project page (`username.github.io/repo-name`), set
   `basePath` and `assetPrefix` in `next.config.js` to `/repo-name`.

## Editing content

All resume content — personal info, bio, skills, experience, projects,
education, nav links, and the Formspree endpoint — lives in
[`src/data/data.ts`](src/data/data.ts). Edit that file; you shouldn't need
to touch component markup for routine content changes.

## Placeholders to fill in before launch

Search the codebase for `PLACEHOLDER` to find these in context. Full list:

| # | What | Where |
|---|------|-------|
| 1 | Formspree form endpoint | `src/data/data.ts` → `formspreeEndpoint`. Create a form at [formspree.io](https://formspree.io) and paste its endpoint URL. |
| 2 | Resume PDF | Add your resume file at `public/resume/Ajinkya_Darkase_Resume.pdf` (or update `resumeUrl` in `src/data/data.ts` if you use a different filename). |
| 3 | Live demo / GitHub links for each project | `src/data/data.ts` → `projects[].liveUrl` and `projects[].githubUrl` (currently `null`, which renders as disabled/greyed-out links). |
| 4 | Project screenshots (optional) | Each project shows a generated gradient + icon cover (`ProjectCover.tsx`) by default — no screenshot required. If you're ever able to add real ones, drop an image in `public/images/projects/` and set that project's `image` field in `src/data/data.ts`; `ProjectCard.tsx` will use it automatically instead of the generated cover. |
| 5 | Education institution & graduation year | `src/data/data.ts` → `education[0].institution` and `education[0].year` (currently bracketed placeholder text). |
| 6 | Site domain | `src/data/data.ts` → `personalInfo.siteUrl`, used for metadata/OpenGraph/JSON-LD/sitemap. Update once you know your deployed domain. |
| 7 | OpenGraph image | Add a 1200×630 image at `public/images/og-image.png` (referenced in `src/app/layout.tsx`). |
| 8 | Hero profile photo (optional) | The Hero shows a generated placeholder avatar by default. To use a real photo, add a square image (480×480+) at `public/images/avatar.jpg` and set `personalInfo.avatarUrl` in `src/data/data.ts` to `'/images/avatar.jpg'`. |

## Accessibility & SEO notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and
  `aria-*` attributes are used throughout; interactive elements are
  keyboard-reachable with visible focus rings.
- Framer Motion entrance animations degrade gracefully: a `<noscript>`
  stylesheet in `layout.tsx` forces animated content visible if
  JavaScript is unavailable, so nothing is ever permanently hidden.
- Per-page metadata, OpenGraph tags, and JSON-LD `Person` structured data
  are set in `src/app/layout.tsx`.
- Dark/light theme defaults to the OS preference and persists via
  `localStorage`; an inline script in `<head>` applies it before paint to
  avoid a flash of the wrong theme.
