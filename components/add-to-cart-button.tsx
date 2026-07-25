"use client";

import { useCart } from "@/components/cart-provider";
import type { Listing } from "@/data/listings";

export function AddToCartButton({ listing }: { listing: Listing }) {
  const { addToCart } = useCart();

  return (
    <button className="button" type="button" onClick={() => addToCart(listing)}>
      Add to Cart
    </button>
  );
}
