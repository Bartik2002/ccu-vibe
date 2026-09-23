import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://ccuvibe.in"),
  title: "CCU.Vibe — Kolkata Has Plans.",
  description:
    "Kolkata's live cultural calendar. Proscenium drama, live jazz, street addas, and riverfront sound. Direct admission, zero corporate clutter.",
  keywords: [
    "CCU.Vibe",
    "The Calcutta Dreams",
    "Kolkata festival",
    "Kolkata events",
    "music festival Kolkata",
    "Kolkata culture",
  ],
  openGraph: {
    title: "CCU.Vibe — Kolkata Has Plans.",
    description:
      "Kolkata's live cultural calendar. Direct admission, zero corporate clutter.",
    type: "website",
    locale: "en_IN",
    siteName: "CCU.Vibe",
    images: [{ url: "/logo-ccu-vibe.jpg", width: 1200, height: 900, alt: "CCU.Vibe logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCU.Vibe — Kolkata Has Plans.",
    description:
      "Kolkata's live cultural calendar. Direct admission, zero corporate clutter.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F5EF",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Festival",
  name: "The Calcutta Dreams",
  description:
    "The flagship music and culture festival from CCU.Vibe at Nazrul Mancha, Kolkata.",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "City",
    name: "Kolkata",
    address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressCountry: "IN" },
  },
  organizer: { "@type": "Organization", name: "CCU.Vibe" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    url: "https://ccuvibe.in/#dreamlist",
  },
};

const nightInit = `try{if(localStorage.getItem("ccu-night")==="1")document.documentElement.classList.add("night")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: nightInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers />
        {children}
      </body>
    </html>
  );
}
