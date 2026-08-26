# VIgma Fashion

An elegant, minimal showcase / lookbook website for **VIgma Fashion**, built with
Next.js (App Router) and React.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js          Root layout, fonts, <Navbar/> + <Footer/>
  page.js            Home (hero, featured collections, philosophy, CTA)
  globals.css        All styling (design tokens at the top under :root)
  collections/       Collections grid + lookbook
  about/             Brand story + values
  contact/           Inquiry form + studio details
components/
  Navbar.js          Sticky nav with mobile menu
  Footer.js
  CollectionCard.js  Reusable collection tile
  ContactForm.js     Inquiry form (currently opens the visitor's email client)
data/
  collections.js     Edit collections + lookbook here (single source of truth)
```

## How to customise

**Add real photos**
1. Drop images into `public/images/` (e.g. `aurelia.jpg`).
2. In `data/collections.js`, set the `image` field, e.g. `image: "/images/aurelia.jpg"`.
   Any item left as `image: null` shows an elegant text placeholder.

**Change collections / lookbook** — edit `data/collections.js` only.

**Change colours & fonts** — see the `:root` block at the top of `app/globals.css`.
Fonts are loaded in `app/layout.js` (Cormorant Garamond for headings, Jost for body).

**Update brand copy** — text lives directly in each page file under `app/`.

## Contact form

Right now the form opens the visitor's email app pre-filled (no server needed).
To collect submissions automatically, swap the handler in
`components/ContactForm.js` for a form service such as
[Formspree](https://formspree.io) or [Resend](https://resend.com), or a Next.js
API route.

## Deploy

Easiest is [Vercel](https://vercel.com) (made by the Next.js team): push to a Git
repo and import it, or run `npx vercel`. Netlify also works.
