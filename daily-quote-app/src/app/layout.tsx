import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citát Dne | Denní dávka inspirace",
  description: "Každý den nový motivační citát, který vám pomůže nastartovat den. Inspirujte se a sdílejte moudrost s ostatními.",
  keywords: ["citáty", "motivace", "inspirace", "denní citát", "úspěch"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
