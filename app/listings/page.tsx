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
      {listings.length ? (
        <div className="grid">
          {listings.map((item) => (
            <Link key={item.id} className="card listing-card" href={`/listings/${item.id}`}>
              <p className="eyebrow">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p><strong>${item.price.toFixed(2)}</strong></p>
              <span className="card-action">View &amp; buy item</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card empty-state">
          <h2>No listings yet</h2>
          <p>Create the first listing to start the marketplace.</p>
          <Link className="button" href="/listings/new">Create Listing</Link>
        </div>
      )}
    </main>
  );
}
