import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/components/LanguageProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cebanbarber.com"),
  // metadataBase: new URL("https://ceban-barber.vercel.app/"),
  title: {
    default: "CebanBarber — Tunsori Perfecte. Stil Modern. Chișinău",
    template: "%s | CebanBarber Chișinău",
  },
  description:
    "Barbershop premium în Chișinău, Moldova. Tunsori perfecte, contur barbă, bărbierit cu prosop fierbinte și multe altele. Vino fără programare — Str. Ion Doncev 2.",
  keywords: [
    "barbershop Chișinău",
    "frizerie Chișinău",
    "tunsoare bărbați Chișinău",
    "barbershop Moldova",
    "tunsoare Chișinău",
    "fade Chișinău",
    "beard trim Chișinău",
    "bărbierit Chișinău",
    "CebanBarber",
    "Ceban barber",
    "frizerie Moldova",
    "barbershop centru Chișinău",
  ],
  openGraph: {
    title: "CebanBarber — Barbershop Premium în Chișinău",
    description:
      "Tunsori perfecte, contur barbă și bărbierit clasic în inima Chișinăului. Vino fără programare — Str. Ion Doncev 2.",
    locale: "ro_MD",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CebanBarber — Barbershop Premium în Chișinău",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CebanBarber — Barbershop Premium în Chișinău",
    description:
      "Tunsori perfecte, contur barbă și bărbierit clasic în inima Chișinăului. Str. Ion Doncev 2.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "CebanBarber",
  description:
    "Barbershop premium în Chișinău, Moldova. Tunsori precise, contur barbă, bărbierit cu prosop fierbinte.",
  url: "https://cebanbarber.md",
  telephone: "+373 691 50 348",
  email: "hello@cebanbarber.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Ion Doncev 2",
    addressLocality: "Chișinău",
    addressRegion: "Chișinău",
    addressCountry: "MD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.0319666,
    longitude: 28.8337879,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/cebanbarber",
    "https://www.tiktok.com/@cebanthebarber",
  ],
  priceRange: "$$",
  currenciesAccepted: "MDL",
  paymentAccepted: "Cash, Card",
  areaServed: "Chișinău, Moldova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
