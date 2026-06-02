# Pantelis Kouridakis — Personal Portfolio

Personal portfolio website built with Astro and Tailwind CSS v4.

## Tech Stack

- **[Astro](https://astro.build/)** — Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS
- **TypeScript** — Type-safe configuration

## Features

- Dark / Light mode toggle
- Responsive design (mobile bottom nav, desktop sidebar)
- Tab navigation — About, Resume, Portfolio, Contact
- All content managed from a single `src/config.ts` file

## Getting Started

```bash
npm install
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Customization

Edit [`src/config.ts`](src/config.ts) to update all content:

- Personal info, avatar, location
- Social links (email, LinkedIn, GitHub)
- About me text & skills
- "What I'm Doing" services
- Projects (with categories)
- Work experience & education

## Deployment

Deployed on [Vercel](https://vercel.com). Any push to `master` triggers an automatic deploy.
