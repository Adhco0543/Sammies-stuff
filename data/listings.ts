export type Listing = {
  id: string;
  title: string;
  description: string;
  category: "Antique" | "Crystal" | "Mineral" | "Ancient";
  era: string;
  price: number;
};

export const listings: Listing[] = [
  {
    id: "amphora-001",
    title: "Terracotta Amphora Fragment",
    description: "A weathered shard from a classical storage amphora.",
    category: "Ancient",
    era: "Estimated 2nd century BCE",
    price: 185.0,
  },
  {
    id: "geode-002",
    title: "Amethyst Cathedral Geode",
    description: "Deep violet crystal cluster with polished rim.",
    category: "Crystal",
    era: "Natural formation",
    price: 420.0,
  },
  {
    id: "clock-003",
    title: "Brass Mantel Clock",
    description: "Early 20th-century mantel clock with ornate engravings.",
    category: "Antique",
    era: "Circa 1910",
    price: 260.0,
  },
  {
    id: "malachite-004",
    title: "Polished Malachite Specimen",
    description: "Vivid green concentric banding, display-grade polish.",
    category: "Mineral",
    era: "Natural formation",
    price: 145.0,
  },
];
