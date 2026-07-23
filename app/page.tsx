import Link from "next/link";
import { listings } from "@/data/listings";

export default function HomePage() {
  const featured = listings.slice(0, 3);

  return (
    <main className="container">
      <section className="hero">
        <h1>Sammies Stuff</h1>
        <p>
          Discover antiques, crystals, minerals, and ancient finds from trusted sellers.
        </p>
        <Link className="button" href="/listings">
          Browse Listings
        </Link>
      </section>

      <section>
        <h2>Featured Items</h2>
        <div className="grid">
          {featured.map((item) => (
            <article key={item.id} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>
                <strong>${item.price.toFixed(2)}</strong>
              </p>
              <Link href={`/listings/${item.id}`}>View Details</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
