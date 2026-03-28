import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Professional Landscaping in San Antonio, TX`,
  description:
    "San Antonio's trusted landscaping experts. Lawn care, landscape design, irrigation, and seasonal maintenance. Free estimates. Licensed & insured. Call today!",
  keywords: [
    "landscaping San Antonio",
    "lawn care San Antonio TX",
    "landscape design San Antonio",
    "irrigation installation San Antonio",
    "yard maintenance San Antonio",
    "Daniel Saldiver Landscaping",
  ],
  openGraph: {
    title: `${BUSINESS.name} | Professional Landscaping San Antonio`,
    description:
      "Transform your outdoor space with San Antonio's premier landscaping service. Free estimates on all projects.",
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Landscaping San Antonio TX`,
    description:
      "Professional landscaping, lawn care, and outdoor living design in San Antonio, Texas.",
  },
  robots: {
    index:  true,
    follow: true,
  },
  icons: {
    icon:  "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BUSINESS.name,
              description:
                "Professional landscaping, lawn care, and outdoor design services in San Antonio, Texas.",
              telephone: BUSINESS.phone,
              email: BUSINESS.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.4241",
                longitude: "-98.4936",
              },
              areaServed: "San Antonio, Texas",
              priceRange: "$$",
              openingHours: "Mo-Sa 07:00-18:00",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
