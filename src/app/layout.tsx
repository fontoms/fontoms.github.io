import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fontom's - Développeur Full-Stack & Créateur d'Expériences",
    template: "%s | Fontom's Portfolio",
  },
  description:
    "Portfolio de Fontom's, développeur Full-Stack passionné par l'innovation technologique. Créateur du bot CyberCompanion et fondateur de communautés comme The Mechanic Community et Ami en Tête.",
  keywords: [
    "Fontom's",
    "développeur",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "CyberCompanion",
    "bot Discord",
    "développement web",
    "applications mobiles",
    "portfolio",
    "France",
  ],
  authors: [{ name: "Fontom's", url: "https://fontoms.com" }],
  creator: "Fontom's",
  publisher: "Fontom's",
  metadataBase: new URL("https://fontoms.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fontoms.com",
    title: "Fontom's - Développeur Full-Stack & Créateur d'Expériences",
    description:
      "Portfolio de Fontom's, développeur Full-Stack passionné par l'innovation technologique. Découvrez mes projets comme CyberCompanion et mes communautés.",
    siteName: "Portfolio Fontom's",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fontom's - Développeur Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fontom's - Développeur Full-Stack & Créateur d'Expériences",
    description:
      "Portfolio de Fontom's, développeur Full-Stack passionné par l'innovation technologique.",
    images: ["/og-image.jpg"],
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
    google: "votre-code-google-search-console",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff7300" />
        <meta name="color-scheme" content="dark" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
