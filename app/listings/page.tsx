import Link from "next/link";
import { listings } from "@/data/listings";

export default function ListingsPage() {
  return (
    <main className="container">
      <h1>All Listings</h1>
      <div className="grid">
        {listings.map((item) => (
          <article key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>
              <strong>${item.price.toFixed(2)}</strong>
            </p>
            <Link href={`/listings/${item.id}`}>View Details</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
