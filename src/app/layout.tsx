import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    template: "%s | Luxury Trip India",
    default: "Best Tour & Travel Agency - Luxury Trip India",
  },
  description: "Explore the best India travel packages with Luxury Trip India. We offer customized & pre-made tours for spiritual, adventure, and cultural experiences.",
  keywords: ["India Travel", "Luxury Tours", "Golden Triangle", "Char Dham Yatra", "India Trip", "Tour Agency", "Holiday Packages"],
  authors: [{ name: "Luxury Trip India" }],
  openGraph: {
    title: "Best Tour & Travel Agency - Luxury Trip India",
    description: "Explore the best India travel packages with Luxury Trip India.",
    url: "https://luxurytripindia.com",
    siteName: "Luxury Trip India",
    images: [{ url: "https://luxurytripindia.com/img/travel-with-luxury-trip-india.jpg", width: 1080, height: 1080, alt: "Luxury Trip India" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tour & Travel Agency - Luxury Trip India",
    description: "Explore the best India travel packages with Luxury Trip India.",
    images: ["https://luxurytripindia.com/img/travel-with-luxury-trip-india.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-luxury-dark bg-luxury-cream min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
