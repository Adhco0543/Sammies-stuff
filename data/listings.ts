export type Listing = {
  id: string;
  title: string;
  description: string;
  category: "Antique" | "Crystal" | "Mineral" | "Ancient";
  era: string;
  price: number;
};

export const listings: Listing[] = [];
