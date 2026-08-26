// Central place to manage collections. To use real photos, drop images in
// /public/images and set `image` to e.g. "/images/emerald-1.jpg".
// Leave `image` as null to show an elegant placeholder.

export const collections = [
  {
    slug: "emerald",
    title: "Emerald",
    season: "Signature / Evening",
    description:
      "A hand-beaded mermaid gown in emerald kente — sculpted tailoring, a jewelled bodice, and a sweeping train.",
    image: "/images/emerald-1.jpg",
  },
  {
    slug: "rouge",
    title: "Rouge",
    season: "Aso-Ebi / Occasion",
    description:
      "Deep burgundy beadwork paired with a structured gele — quiet opulence for weddings and celebrations.",
    image: "/images/rouge-1.jpg",
  },
  {
    slug: "ivoire",
    title: "Ivoire",
    season: "Bridal / White",
    description:
      "Hand-beaded illusion bodices over fluid crêpe — sculpted white pieces for brides and milestone moments.",
    image: "/images/ivoire-1.jpg",
  },
  {
    slug: "onyx",
    title: "Onyx",
    season: "Evening",
    description:
      "A liquid one-shoulder silhouette with a dramatic sweeping train — evening dressing at its most assured.",
    image: "/images/onyx-1.jpg",
  },
  {
    slug: "coral",
    title: "Coral",
    season: "Traditional / Bridal",
    description:
      "A hand-beaded corset over a fringed white george wrapper, finished with coral beads and gele — a regal take on Igbo traditional bridal.",
    image: "/images/coral-1.jpg",
  },
  {
    slug: "coming-soon",
    title: "Coming Soon",
    season: "New Collection",
    description:
      "The next VIgma collection is in the atelier. Join the list to be the first to see it.",
    image: null,
  },
];

// Lookbook tiles — purely visual. Mix of captions for an editorial feel.
export const lookbook = [
  { id: 1, caption: "Emerald 01", image: "/images/emerald-1.jpg" },
  { id: 2, caption: "Ivoire 01", image: "/images/ivoire-1.jpg" },
  { id: 3, caption: "Coral 01", image: "/images/coral-1.jpg" },
  { id: 4, caption: "Rouge 01", image: "/images/hero.jpg" },
  { id: 5, caption: "Onyx 01", image: "/images/onyx-1.jpg" },
  { id: 6, caption: "Coral 02", image: "/images/coral-3.jpg" },
  { id: 7, caption: "Emerald 02", image: "/images/emerald-2.jpg" },
  { id: 8, caption: "Ivoire 02", image: "/images/ivoire-2.jpg" },
  { id: 9, caption: "Atelier 01", image: "/images/ankara.jpg" },
  { id: 10, caption: "Coral 03", image: "/images/coral-2.jpg" },
  { id: 11, caption: "Emerald 03", image: "/images/emerald-3.jpg" },
  { id: 12, caption: "Rouge 02", image: "/images/rouge-1.jpg" },
  { id: 13, caption: "Emerald 04", image: "/images/emerald-4.jpg" },
  { id: 14, caption: "Rouge 03", image: "/images/rouge-2.jpg" },
];
