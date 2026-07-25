"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Listing } from "@/data/listings";

type CartContextValue = {
  itemCount: number;
  addToCart: (listing: Listing) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [itemCount, setItemCount] = useState(0);

  const value = useMemo(
    () => ({
      itemCount,
      addToCart: () => setItemCount((current) => current + 1),
    }),
    [itemCount],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
}
