import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Sammies Stuff",
  description: "Marketplace for antiques, crystals, minerals, and ancient items",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="container topbar-inner">
            <Link href="/" className="brand">
              Sammies Stuff
            </Link>
            <nav>
              <Link href="/listings">Listings</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
