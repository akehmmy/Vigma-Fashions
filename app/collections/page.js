import CollectionCard from "@/components/CollectionCard";
import { collections, lookbook } from "@/data/collections";

export const metadata = {
  title: "Collections — VIgma Fashion",
  description:
    "Browse the VIgma Fashion collections and lookbook — elegant, minimal pieces across seasons.",
};

export default function CollectionsPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Collections</span>
          <h1>The full edit.</h1>
          <p>
            Six considered collections, each built around a small palette of
            colour and texture. Designed in-house and produced in limited runs.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="collection-grid">
            {collections.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff", paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Lookbook</span>
              <h2>Seen in the season.</h2>
            </div>
            <p>An editorial glimpse of the pieces styled and worn.</p>
          </div>

          <div className="lookbook">
            {lookbook.map((item) => (
              <div className="lookbook__item" key={item.id}>
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={item.caption} />
                ) : (
                  <span className="card__placeholder">{item.caption}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
