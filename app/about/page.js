import Link from "next/link";

export const metadata = {
  title: "About — VIgma Fashion",
  description:
    "The story behind VIgma Fashion — a contemporary label built on slow design, considered materials, and timeless elegance.",
};

const values = [
  {
    num: "01",
    title: "Considered Design",
    body: "We design in small, intentional palettes — clean lines meant to be worn for years, not weeks.",
  },
  {
    num: "02",
    title: "Honest Materials",
    body: "Natural fibres and responsibly sourced fabrics, chosen for how they feel and how they last.",
  },
  {
    num: "03",
    title: "Made in Small Runs",
    body: "Limited production keeps each piece personal and reduces waste — quality over quantity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h1>Quiet design, made to last.</h1>
          <p>
            VIgma Fashion is a contemporary label founded on a love of
            understated elegance and the belief that great clothing should feel
            effortless.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container split">
          <div className="split__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/rouge-2.jpg" alt="VIgma Fashion detail" />
          </div>
          <div>
            <span className="eyebrow">Beginnings</span>
            <h2>It started with a single, perfect piece.</h2>
            <p>
              VIgma Fashion grew from a simple frustration — the difficulty of
              finding clothing that was elegant, comfortable, and made to last.
              So we set out to make it ourselves.
            </p>
            <p>
              Today, every collection is designed in-house around a restrained
              palette and produced in limited runs. We focus on the details that
              matter: the drape of a fabric, the weight of a seam, the way a
              piece moves when you wear it.
            </p>
            <p>
              The result is a wardrobe of quiet essentials — pieces you reach for
              again and again, season after season.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What We Believe</span>
              <h2>Our principles.</h2>
            </div>
          </div>
          <div className="values">
            {values.map((v) => (
              <div key={v.num}>
                <span className="values__num">{v.num}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container">
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            Say Hello
          </span>
          <h2>Let&apos;s create something timeless together.</h2>
          <p>
            For appointments, collaborations, or wholesale inquiries, our door
            is always open.
          </p>
          <Link href="/contact" className="btn">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
