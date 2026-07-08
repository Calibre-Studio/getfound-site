import "./globals.css";
import { Inter, Fragment_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://getfound.calibrestudio.co"),
  title: "Get Found: Be the Brand AI Recommends | Calibre Studio",
  description:
    "When customers ask ChatGPT, Claude, Gemini, Grok, Perplexity, Copilot and Google AI Overviews for the best option, be the answer. Calibre Studio reads your site the way the engines do, fixes what they cannot understand, and gets you into the answers. Audit from €350.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Get Found: Be the Brand AI Recommends | Calibre Studio",
    description:
      "AI visibility for growing brands. A free 60-second check, a paid audit and plan, a one-time fix, or always-on monitoring. Audit from €350.",
    url: "https://getfound.calibrestudio.co",
    siteName: "Get Found by Calibre Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Found: Be the Brand AI Recommends | Calibre Studio",
    description:
      "AI visibility for growing brands, from one studio that also does the brand work. Audit from €350.",
  },
  robots: { index: true, follow: true },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.calibrestudio.co/#org",
      name: "Calibre Studio",
      url: "https://www.calibrestudio.co/",
      logo: "https://framerusercontent.com/images/DNz730VdRk76gPUHXillIWOOI.png",
      sameAs: [
        "https://www.instagram.com/calibrestudio_",
        "https://twitter.com/Thor_Elias",
        "https://www.linkedin.com/company/calibrestudio/",
        "https://dribbble.com/CalibreStudio",
        "https://www.facebook.com/CalibreStudio.Co",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://getfound.calibrestudio.co/#website",
      url: "https://getfound.calibrestudio.co/",
      name: "Get Found by Calibre Studio",
      publisher: { "@id": "https://www.calibrestudio.co/#org" },
    },
    {
      "@type": "WebPage",
      "@id": "https://getfound.calibrestudio.co/#webpage",
      url: "https://getfound.calibrestudio.co/",
      name: "Get Found: Be the Brand AI Recommends",
      isPartOf: { "@id": "https://getfound.calibrestudio.co/#website" },
      about: { "@id": "https://www.calibrestudio.co/#org" },
      description:
        "AI visibility for growing brands: get recommended when customers ask ChatGPT, Claude, Gemini, Grok, Perplexity, Copilot and Google AI Overviews.",
    },
    {
      "@type": "Service",
      "@id": "https://getfound.calibrestudio.co/#service",
      name: "AI Visibility (Be Found)",
      serviceType: "Answer Engine Optimisation",
      provider: { "@id": "https://www.calibrestudio.co/#org" },
      areaServed: "Worldwide",
      url: "https://getfound.calibrestudio.co/",
      description:
        "An audit of how AI reads your brand, scored on the DCAT method (Discoverability, Clarity, Authority, Trust), then the fixes and monitoring that get you recommended by AI engines.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Be Found offerings",
        itemListElement: [
          {
            "@type": "Offer",
            name: "AI Visibility Audit + 90-Day Plan",
            price: "350",
            priceCurrency: "EUR",
            description: "One-time audit scored across DCAT with a prioritised 90-day plan. Credited if you continue.",
          },
          {
            "@type": "Offer",
            name: "Get Found Sprint",
            price: "1800",
            priceCurrency: "EUR",
            description: "One-time, done-for-you fix of site structure and schema, content and entities, citations and reputation.",
          },
          {
            "@type": "Offer",
            name: "Always-On Visibility, Starter",
            price: "390",
            priceCurrency: "EUR",
            description: "Monthly monitoring across the main AI engines, ongoing fixes and a score report. Three-month minimum.",
          },
          {
            "@type": "Offer",
            name: "Always-On Visibility, Growth",
            price: "890",
            priceCurrency: "EUR",
            description: "Monthly monitoring plus active content and citation building and deeper reporting. Three-month minimum.",
          },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fragmentMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
        {children}
      </body>
    </html>
  );
}
