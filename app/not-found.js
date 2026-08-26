import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", margin: "1rem 0 1.5rem" }}>
          This page slipped off the rail.
        </h1>
        <p style={{ color: "var(--color-muted)", maxWidth: "40ch", margin: "0 auto 2rem" }}>
          The page you&apos;re looking for can&apos;t be found. Let&apos;s get you
          back to the collection.
        </p>
        <Link href="/" className="btn">Return Home</Link>
      </div>
    </section>
  );
}
