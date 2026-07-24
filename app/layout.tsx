import type { Metadata, Viewport } from "next";
import { Playfair_Display, Questrial } from "next/font/google";
import { BIZ, SERVICES } from "./data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
  display: "swap",
});

// Canonical page for the Alexandra Hills practice. Update if this deploys elsewhere.
const CANONICAL =
  "https://www.sparklingwhitedental.com.au/locations/dentists-in-alexandra-hills/";
const OG_IMAGE =
  "https://www.sparklingwhitedental.com.au/wp-content/uploads/2024/07/Affordable-Dentists-in-Alexandra-Hills-1-modified.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sparklingwhitedental.com.au"),
  title: "Alexandra Hills Dentist Brisbane | Sparkling White Dental",
  description:
    "Trusted family dentist in Alexandra Hills for 45 years. General, cosmetic & emergency dentistry, implants, orthodontics & same-day crowns. Payment plans.",
  keywords: [
    "dentist Alexandra Hills",
    "Alexandra Hills dentist",
    "emergency dentist Alexandra Hills",
    "family dentist Redlands",
    "dental implants Alexandra Hills",
    "same-day crowns Alexandra Hills",
    "children's dentist Alexandra Hills",
    "teeth whitening Redlands",
  ],
  authors: [{ name: "Sparkling White Dental" }],
  creator: "Sparkling White Dental",
  publisher: "Sparkling White Dental",
  category: "Dentist",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Dentists in Alexandra Hills | Sparkling White Dental",
    description:
      "45 years of trusted dental care in Alexandra Hills. Comprehensive, gentle care under one roof. Interest-free payment plans available.",
    url: CANONICAL,
    siteName: "Sparkling White Dental",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: OG_IMAGE,
        width: 812,
        height: 510,
        alt: "A happy patient at Sparkling White Dental, Alexandra Hills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentists in Alexandra Hills | Sparkling White Dental",
    description:
      "Your trusted family dentist in Alexandra Hills for 45 years. Book online or call (07) 3824 2484.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0082b3",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${CANONICAL}#dentist`,
  name: "Sparkling White Dental — Alexandra Hills",
  alternateName: "Dentists in Alexandra Hills",
  description:
    "Trusted family dentist in Alexandra Hills for 45 years. General, cosmetic and emergency dentistry, implants, orthodontics, same-day crowns and children's dentistry, led by Dr. Bik.",
  url: CANONICAL,
  telephone: "+61738242484",
  image: OG_IMAGE,
  logo: "https://www.sparklingwhitedental.com.au/wp-content/uploads/2024/05/Logo-1.webp",
  priceRange: "$$",
  currenciesAccepted: "AUD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Bluebell St",
    addressLocality: "Alexandra Hills",
    addressRegion: "QLD",
    postalCode: "4161",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -27.5386, longitude: 153.228 },
  areaServed: [
    { "@type": "Place", name: "Alexandra Hills" },
    { "@type": "Place", name: "Capalaba" },
    { "@type": "Place", name: "Redland City" },
  ],
  sameAs: [BIZ.facebook, BIZ.instagram],
  medicalSpecialty: "Dentistry",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "4",
    bestRating: "5",
    worstRating: "1",
  },
  availableService: SERVICES.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.name,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${questrial.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
