"use client";

import Link from "next/link";
import { useListings } from "@/components/listings-provider";

export default function ListingsPage() {
  const { listings } = useListings();

  return (
    <main className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Marketplace</p>
          <h1>All Listings</h1>
        </div>
        <Link className="button" href="/listings/new">Create Listing</Link>
      </div>
      <div className="grid">
        {listings.map((item) => (
          <article key={item.id} className="card">
            <p className="eyebrow">{item.category}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p><strong>${item.price.toFixed(2)}</strong></p>
            <Link href={`/listings/${item.id}`}>View Details</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
