import type { Metadata, Viewport } from "next";
import { Playfair_Display, Questrial } from "next/font/google";
import { BIZ, FAQS } from "./data";
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

// CONFIRM BEFORE GO-LIVE: canonical URL for this veneers landing page.
// Must match wherever the page is actually deployed.
const CANONICAL =
  "https://www.sparklingwhitedental.com.au/alexandra-hills-veneers/";
// TODO: swap for a veneers-specific social image when one is available.
const OG_IMAGE =
  "https://www.sparklingwhitedental.com.au/wp-content/uploads/2024/07/Affordable-Dentists-in-Alexandra-Hills-1-modified.webp";

const TITLE = "Porcelain Veneers Alexandra Hills | Sparkling White Dental";
const DESCRIPTION =
  "Custom porcelain veneers in Alexandra Hills, Brisbane. See real before & after results. Flexible payment plans. Book your free consultation today.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sparklingwhitedental.com.au"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "veneers Alexandra Hills",
    "porcelain veneers Alexandra Hills",
    "composite veneers Alexandra Hills",
    "dental veneers Redland City",
    "cosmetic dentist Alexandra Hills",
    "smile makeover Alexandra Hills",
    "fix chipped teeth Alexandra Hills",
    "veneers cost Brisbane",
  ],
  authors: [{ name: BIZ.name }],
  creator: BIZ.name,
  publisher: BIZ.name,
  category: "Dentist",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description:
      "Custom porcelain veneers in Alexandra Hills — fix chips, gaps and staining. Real before & after results, flexible payment plans, free consultation.",
    url: CANONICAL,
    siteName: BIZ.name,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: OG_IMAGE,
        width: 812,
        height: 812,
        alt: `Dr Bikramjit at ${BIZ.name}, ${BIZ.location}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: `Porcelain veneers in Alexandra Hills. Book your free consultation — call ${BIZ.phone}.`,
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

const dentistLd = {
  "@type": "Dentist",
  "@id": `${CANONICAL}#dentist`,
  name: `${BIZ.name} — ${BIZ.location}`,
  description:
    "Porcelain and composite veneers in Alexandra Hills, Brisbane. Custom-made veneers to correct chips, gaps and staining, led by Dr Bikramjit with more than 30 years of experience.",
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
  medicalSpecialty: "Dentistry",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "4",
    bestRating: "5",
    worstRating: "1",
  },
  availableService: [
    { "@type": "MedicalProcedure", name: "Porcelain Veneers" },
    { "@type": "MedicalProcedure", name: "Composite Veneers" },
    { "@type": "MedicalProcedure", name: "Cosmetic Dentistry" },
  ],
  employee: {
    "@type": "Person",
    name: "Dr Bikramjit",
    jobTitle: "Principal Dentist",
  },
};

// FAQPage markup for the on-page FAQs — eligible for rich results.
const faqLd = {
  "@type": "FAQPage",
  "@id": `${CANONICAL}#faq`,
  mainEntity: FAQS.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [dentistLd, faqLd],
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
