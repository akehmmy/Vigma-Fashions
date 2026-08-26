import Link from "next/link";
import CollectionCard from "@/components/CollectionCard";
import { collections } from "@/data/collections";

export default function Home() {
  const featured = collections.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero__bg" src="/images/hero.jpg" alt="VIgma Fashion signature look" />
        <div className="container hero__content">
          <span className="eyebrow">VIgma Fashion</span>
          <h1>Modern elegance, quietly made.</h1>
          <p>
            A contemporary label crafting refined, minimal pieces designed to
            move with you — and to last well beyond the season.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/collections" className="btn btn--ghost">View Collections</Link>
            <Link href="/about" className="btn btn--ghost">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured collections */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">The Collections</span>
              <h2>Considered pieces for the modern wardrobe.</h2>
            </div>
            <p>
              Each collection is built around a small, intentional palette —
              made to be worn, layered, and kept.
            </p>
          </div>

          <div className="collection-grid">
            {featured.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link href="/collections" className="btn btn--ghost">
              Explore All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Brand intro split */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container split">
          <div className="split__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ankara.jpg" alt="VIgma Fashion Ankara tailoring" />
          </div>
          <div>
            <span className="eyebrow">Our Philosophy</span>
            <h2>Designed slowly. Made to be lived in.</h2>
            <p>
              VIgma Fashion began with a simple belief: that beautiful clothing
              should feel effortless. We design in quiet, neutral tones and
              clean lines that flatter without shouting.
            </p>
            <p>
              Every piece is produced in small runs using considered fabrics and
              finishing — so what you wear feels personal, not mass-produced.
            </p>
            <Link href="/about" className="btn btn--ghost">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="banner">
        <div className="container">
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            Stockists &amp; Inquiries
          </span>
          <h2>Bring VIgma to your wardrobe or boutique.</h2>
          <p>
            For private appointments, press, or wholesale, we&apos;d love to
            hear from you.
          </p>
          <Link href="/contact" className="btn">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
