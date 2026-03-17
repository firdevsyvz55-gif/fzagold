import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FZA Gold | Toptan Kuyumcu - Fatih, İstanbul",
  description: "1980'den bu yana İstanbul Fatih'te toptan kuyumculuk. 14K, 18K, 22K altın takı üretimi ve satışı. Bilezik, kolye, yüzük, küpe, zincir.",
  keywords: "toptan kuyumcu, altın takı, fza gold, fatih istanbul, 22 ayar altın, bilezik toptan, altın kolye",
  verification: {
    google: "tJxzjS4TiooHvt_Pm2xDXUFZ_wham22cmHsOPMapFXA",
  },
  openGraph: {
    title: "FZA Gold | Toptan Kuyumcu - Fatih, İstanbul",
    description: "1980'den bu yana İstanbul Fatih'te toptan kuyumculuk.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}