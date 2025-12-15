import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-tool-box-murex.vercel.app/"),
  title: {
    default: "DevToolbox - Free Developer Tools & Utilities",
    template: "%s | DevToolbox"
  },
  description: "Free, fast, and privacy-focused developer tools. JSON formatter, Regex tester, Base64 encoder, JWT decoder, and more. All processing happens in your browser.",
  keywords: ["developer tools", "json formatter", "regex tester", "base64 encoder", "jwt decoder", "url encoder", "timestamp converter", "developer utilities", "free dev tools", "online developer tools", "json validator", "regex validator", "base64 converter", "jwt parser"],
  authors: [{ name: "DevToolbox" }],
  creator: "DevToolbox",
  publisher: "DevToolbox",
  alternates: {
    canonical: "https://dev-tool-box-murex.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev-tool-box-murex.vercel.app/",
    title: "DevToolbox - Free Developer Tools & Utilities",
    description: "Free, fast, and privacy-focused developer tools. All processing happens in your browser.",
    siteName: "DevToolbox",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevToolbox - Free Developer Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevToolbox - Free Developer Tools & Utilities",
    description: "Free, fast, and privacy-focused developer tools.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "s13S3vHoZbCfAxv_UiPV2kEXfyE9HcSMqhNPmb-y1XQ",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "DevToolbox",
    "applicationCategory": "DeveloperApplication",
    "description": "Free, fast, and privacy-focused developer tools. JSON formatter, Regex tester, Base64 encoder, JWT decoder, and more.",
    "url": "https://dev-tool-box-murex.vercel.app/",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    },
    "featureList": [
      "JSON Formatter & Validator",
      "Regex Tester",
      "Base64 Encoder/Decoder",
      "JWT Decoder",
      "URL Encoder/Decoder",
      "Timestamp Converter"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="LxuOQEkcgspypMsiFZi_lvCcVqPbLASfiZtkUY5DAHk" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3282210684438133"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
