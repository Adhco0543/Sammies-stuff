"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useListings } from "@/components/listings-provider";
import type { Listing } from "@/data/listings";

const categories: Listing["category"][] = ["Antique", "Crystal", "Mineral", "Ancient"];

export default function NewListingPage() {
  const router = useRouter();
  const { addListing } = useListings();
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const price = Number(form.get("price"));

    if (!Number.isFinite(price) || price <= 0) {
      setError("Enter a price greater than zero.");
      return;
    }

    const listing = addListing({
      title: String(form.get("title")),
      description: String(form.get("description")),
      category: String(form.get("category")) as Listing["category"],
      era: String(form.get("era")),
      price,
    });

    router.push(`/listings/${listing.id}`);
  }

  return (
    <main className="container narrow">
      <p className="eyebrow">Seller tools</p>
      <h1>Create a Listing</h1>
      <p>Share an item with collectors browsing Sammies Stuff.</p>
      <form className="listing-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" required minLength={3} placeholder="e.g. Vintage brass compass" />
        </label>
        <label>
          Description
          <textarea name="description" required minLength={10} rows={5} placeholder="Describe the item, condition, and provenance." />
        </label>
        <div className="form-row">
          <label>
            Category
            <select name="category" defaultValue="Antique">
              {categories.map((category) => <option key={category}>{category}</option>)}
            </select>
          </label>
          <label>
            Era or origin
            <input name="era" required placeholder="e.g. Circa 1920" />
          </label>
        </div>
        <label>
          Price (USD)
          <input name="price" required type="number" min="0.01" step="0.01" placeholder="0.00" />
        </label>
        {error ? <p className="form-error" role="alert">{error}</p> : null}
        <button className="button" type="submit">Publish Listing</button>
      </form>
    </main>
  );
}
