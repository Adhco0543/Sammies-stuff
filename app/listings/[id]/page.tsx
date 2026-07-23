import Link from "next/link";
import { notFound } from "next/navigation";
import { listings } from "@/data/listings";

type ListingPageProps = {
  params: {
    id: string;
  };
};

export default function ListingDetailPage({ params }: ListingPageProps) {
  const listing = listings.find((item) => item.id === params.id);

  if (!listing) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/listings">← Back to listings</Link>
      <article className="card detail">
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
        <p>
          Category: <strong>{listing.category}</strong>
        </p>
        <p>
          Era: <strong>{listing.era}</strong>
        </p>
        <p>
          Price: <strong>${listing.price.toFixed(2)}</strong>
        </p>
      </article>
    </main>
  );
}
