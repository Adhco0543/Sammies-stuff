"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { listings as starterListings, type Listing } from "@/data/listings";

type ListingInput = Omit<Listing, "id">;

type ListingsContextValue = {
  listings: Listing[];
  addListing: (listing: ListingInput) => Listing;
};

const ListingsContext = createContext<ListingsContextValue | null>(null);

export function ListingsProvider({ children }: { children: React.ReactNode }) {
  const [listings, setListings] = useState<Listing[]>(starterListings);

  const value = useMemo(
    () => ({
      listings,
      addListing: (listing: ListingInput) => {
        const id = `${listing.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Date.now()}`;
        const newListing = { ...listing, id };
        setListings((current) => [newListing, ...current]);
        return newListing;
      },
    }),
    [listings],
  );

  return <ListingsContext.Provider value={value}>{children}</ListingsContext.Provider>;
}

export function useListings() {
  const context = useContext(ListingsContext);

  if (!context) {
    throw new Error("useListings must be used within a ListingsProvider.");
  }

  return context;
}
