import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { ListingsProvider } from "@/components/listings-provider";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Sammies Stuff | Rocks, Crystals, Minerals & Antiques",
  description:
    "Shop Sammies Stuff for hand-picked rocks, crystals, minerals, antiques, and unusual one-of-a-kind treasures.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ListingsProvider>
          <CartProvider>
            <SiteHeader />
            {children}
          </CartProvider>
        </ListingsProvider>
      </body>
    </html>
  );
}
