"use client";

import Link from "next/link";
import { useListings } from "@/components/listings-provider";

const categories = [
  { name: "Rocks & Minerals", symbol: "◆", description: "Natural specimens, polished stones, and display pieces." },
  { name: "Crystals", symbol: "✦", description: "Clusters, points, geodes, and one-of-a-kind crystal finds." },
  { name: "Antiques", symbol: "◈", description: "Vintage pieces with character, history, and a story to tell." },
  { name: "Ancient Finds", symbol: "◇", description: "Distinctive objects inspired by and connected to the past." },
];

export default function HomePage() {
  const { listings } = useListings();
  const featured = listings.slice(0, 4);

  return (
    <main>
      <section className="store-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Collected with curiosity</p>
            <h1>Beautiful things deserve to be discovered.</h1>
            <p className="hero-copy">
              Shop Sammy&apos;s hand-picked collection of rocks, crystals, minerals,
              antiques, and unusual treasures. Every piece has its own character.
            </p>
            <div className="action-row">
              <Link className="button" href="/listings">Shop the Collection</Link>
              <Link className="button button-secondary" href="/listings/new">Sell an Item</Link>
            </div>
            <div className="trust-row">
              <span>One-of-a-kind finds</span>
              <span>Clear item details</span>
              <span>New treasures added regularly</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative gemstone display">
            <div className="gem gem-one">✦</div>
            <div className="gem gem-two">◆</div>
            <div className="gem gem-three">◇</div>
            <p>Rocks · Crystals · Antiques</p>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading centered-heading">
          <div>
            <p className="eyebrow">Explore</p>
            <h2>Find your kind of treasure</h2>
          </div>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link href="/listings" className="category-card" key={category.name}>
              <span className="category-symbol">{category.symbol}</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <strong>Browse collection →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="container section-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Sammy&apos;s picks</p>
              <h2>Featured treasures</h2>
            </div>
            <Link href="/listings">View all items →</Link>
          </div>

          <div className="grid product-grid">
            {featured.map((item) => (
              <article key={item.id} className="card product-card">
                <div className="product-placeholder" aria-hidden="true">
                  <span>{item.category === "Crystal" ? "✦" : item.category === "Mineral" ? "◆" : "◇"}</span>
                </div>
                <div className="product-card-body">
                  <p className="eyebrow">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="product-footer">
                    <strong>${item.price.toFixed(2)}</strong>
                    <Link href={`/listings/${item.id}`}>View Details →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container story-section">
        <div>
          <p className="eyebrow">Why Sammies Stuff?</p>
          <h2>Not everything worth owning comes from a big-box store.</h2>
        </div>
        <p>
          This shop is for people who love objects with personality — unusual stones,
          beautiful crystals, old pieces, and interesting finds you won&apos;t see everywhere else.
          Browse slowly. The fun is finding the piece that speaks to you.
        </p>
      </section>

      <section className="shop-cta">
        <div className="container">
          <p className="eyebrow">See what&apos;s waiting</p>
          <h2>Your next favorite find might already be here.</h2>
          <Link className="button" href="/listings">Browse All Listings</Link>
        </div>
      </section>
    </main>
  );
}
