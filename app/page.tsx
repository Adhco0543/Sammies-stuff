"use client";

import Link from "next/link";
import { useListings } from "@/components/listings-provider";

export default function HomePage() {
  const { listings } = useListings();
  const featured = listings.slice(0, 3);

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Curated treasures</p>
        <h1>Sammies Stuff</h1>
        <p>
          Discover antiques, crystals, minerals, and ancient finds from independent sellers.
        </p>
        <div className="action-row">
          <Link className="button" href="/listings">
            Browse Listings
          </Link>
          <Link className="button button-secondary" href="/listings/new">
            Sell an Item
          </Link>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <h2>Featured Items</h2>
          <Link href="/listings">View all</Link>
        </div>
        {featured.length ? (
          <div className="grid">
            {featured.map((item) => (
              <Link key={item.id} className="card listing-card" href={`/listings/${item.id}`}>
                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><strong>${item.price.toFixed(2)}</strong></p>
                <span className="card-action">View &amp; buy item</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="card empty-state">
            <h3>No listings yet</h3>
            <p>Start building the collection by adding the first item.</p>
            <Link className="button" href="/listings/new">Add an Item</Link>
          </div>
        )}
      </section>
    </main>
  );
}
