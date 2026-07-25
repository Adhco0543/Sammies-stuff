"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { useListings } from "@/components/listings-provider";

export default function ListingDetailPage() {
  const params = useParams<{ id: string }>();
  const { listings } = useListings();
  const listing = listings.find((item) => item.id === params.id);

  if (!listing) {
    return (
      <main className="container">
        <h1>Listing Not Found</h1>
        <p>We couldn’t find the item you were looking for.</p>
        <Link href="/listings">Back to listings</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <Link href="/listings">← Back to listings</Link>
      <article className="card detail">
        <p className="eyebrow">{listing.category}</p>
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
        <dl className="facts">
          <div><dt>Era</dt><dd>{listing.era}</dd></div>
          <div><dt>Price</dt><dd>${listing.price.toFixed(2)}</dd></div>
        </dl>
        <AddToCartButton listing={listing} />
      </article>
    </main>
  );
}
