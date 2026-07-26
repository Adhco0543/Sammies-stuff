"use client";

import Link from "next/link";

export default function HomePage() {
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
    </main>
  );
}
