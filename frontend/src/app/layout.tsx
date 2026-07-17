import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";

export const metadata: Metadata = {
  title: {
    default:
      "U-Turn4Nature B2B — Wholesale Natural Products | Simply Homemade",
    template: "%s | U-Turn4Nature B2B",
  },
  description:
    "Partner with India's village women SHGs for wholesale natural products. 100% chemical-free, preservative-free homemade food products — cold-pressed oils, spices, atta, dal, jaggery, pickles & more. Bulk orders with GST invoicing.",
  keywords: [
    "wholesale natural products India",
    "B2B organic food",
    "bulk cold pressed oil",
    "wholesale spices India",
    "SHG products wholesale",
    "chemical free food wholesale",
    "homemade products bulk",
    "B2B food supplier India",
    "wholesale ghee",
    "bulk jaggery supplier",
  ],
  authors: [{ name: "U-Turn4Nature LLP" }],
  creator: "U-Turn4Nature LLP",
  publisher: "U-Turn4Nature LLP",
  metadataBase: new URL("https://b2b.u-turn.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "U-Turn4Nature B2B",
    title: "U-Turn4Nature B2B — Wholesale Natural Products | Simply Homemade",
    description:
      "Partner with India's village women for wholesale natural, chemical-free food products. Cold-pressed oils, spices, atta, dal & more at wholesale prices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "U-Turn4Nature B2B Wholesale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "U-Turn4Nature B2B — Wholesale Natural Products",
    description:
      "Bulk natural products from India's village women SHGs. Chemical-free, preservative-free, Simply Homemade.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "U-Turn4Nature",
              legalName: "U-TURN4NATURE LLP",
              url: "https://b2b.u-turn.in",
              logo: "/logo.png",
              description:
                "100% Natural, Chemical-Free Homemade Food Products from Rural Women SHGs",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7703944883",
                contactType: "Sales",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Plot No. 4, Sector Kheda Chauganpur, Ecotech 3",
                addressLocality: "Greater Noida",
                addressRegion: "Uttar Pradesh",
                postalCode: "201306",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.youtube.com/@u-turn4nature",
                "https://mobile.x.com/UTurn4nature",
                "https://www.facebook.com/UTurn4Nature",
                "https://t.me/uturn4nature",
                "https://www.instagram.com/uturn4nature/",
                "https://www.linkedin.com/company/u-turn4nature/",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
