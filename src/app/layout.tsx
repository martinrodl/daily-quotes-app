import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citát Dne | Denní dávka inspirace",
  description: "Každý den nový motivační citát, který vám pomůže nastartovat den. Inspirujte se a sdílejte moudrost s ostatními.",
  keywords: ["citáty", "motivace", "inspirace", "denní citát", "úspěch", "wisdom", "quotes"],
  authors: [{ name: "DailyQuoteApp" }],
  creator: "DailyQuoteApp",
  publisher: "DailyQuoteApp",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    alternateLocale: ['en_US'],
    url: '/',
    title: 'Citát Dne | Denní dávka inspirace',
    description: 'Každý den nový motivační citát, který vám pomůže nastartovat den. Inspirujte se a sdílejte moudrost s ostatními.',
    siteName: 'Citát Dne',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Citát Dne - Denní inspirace',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Citát Dne | Denní dávka inspirace',
    description: 'Každý den nový motivační citát, který vám pomůže nastartovat den.',
    images: ['/og-image.png'],
    creator: '@dailyquoteapp',
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/manifest.json',
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
