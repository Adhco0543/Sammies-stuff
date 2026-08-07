"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";

export function SiteHeader() {
  const { itemCount } = useCart();

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand" aria-label="Sammies Stuff home">
          <span className="brand-mark">S</span>
          <span>
            <strong>Sammies Stuff</strong>
            <small>Rocks · Crystals · Antiques</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/listings">Shop</Link>
          <Link href="/listings/new">Sell an Item</Link>
          <span className="cart-badge" aria-label={`${itemCount} items in cart`}>
            Cart ({itemCount})
          </span>
        </nav>
      </div>
    </header>
  );
}
