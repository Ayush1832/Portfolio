# Ayush Nayak: Portfolio

Personal portfolio for a blockchain and full-stack developer. Built with React, Vite, Tailwind CSS and Framer Motion.

## Sections

Hero, About, Tech Stack, Work Experience, Projects, Hackathon Wins, Education, Contact.

## Editing content

All text content lives in [`src/constants/index.js`](src/constants/index.js):

- `HERO_CONTENT`, `ABOUT_TEXT`: intro and about copy
- `EXPERIENCES`: work history
- `PROJECTS`: project cards (`image` and `badge` are optional; projects without an image get a gradient tile)
- `HACKATHONS`: hackathon wins
- `CONTACT`, `LINKS`: contact details and social links

Project screenshots go in `src/assets/projects/`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
