import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { ListingsProvider } from "@/components/listings-provider";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Sammies Stuff",
  description: "Marketplace for antiques, crystals, minerals, and ancient items",
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
