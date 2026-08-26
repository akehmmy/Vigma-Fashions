import Link from "next/link";

export default function CollectionCard({ collection }) {
  const { title, season, image } = collection;

  return (
    <Link href="/collections" className="card">
      <div className="card__media">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} />
        ) : (
          <span className="card__placeholder">{title}</span>
        )}
      </div>
      <div className="card__meta">
        <div className="card__title">{title}</div>
        <div className="card__sub">{season}</div>
      </div>
    </Link>
  );
}
