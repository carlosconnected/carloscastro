import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Noto_Sans_Mono } from "next/font/google";
import SiteLayout from "@/components/SiteLayout";
import Script from "next/script";

const noto = Noto_Sans_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const siteUrl = "https://carloscastro.bio";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Carlos Castro Vargas | Senior Fullstack & Platform Engineer",
    template: "%s | Carlos Castro Vargas",
  },

  description:
    "Senior Fullstack & Platform Engineer (React, Node.js, AWS, Kubernetes, Terraform). Building scalable, production-grade systems. Open to remote contract & full-time opportunities.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Carlos Castro Vargas | Senior Fullstack & Platform Engineer",
    description:
      "React · Node.js · AWS · Kubernetes · Terraform · PostgreSQL. Open to remote contract & full-time opportunities.",
    siteName: "Carlos Castro Vargas",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Carlos Castro Vargas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Carlos Castro Vargas | Senior Fullstack & Platform Engineer",
    description:
      "Senior engineer specializing in React, Node.js, AWS, Kubernetes, Terraform. Open to remote contract & full-time opportunities.",
    images: ["/og.png"],
  },

  authors: [{ name: "Carlos Castro Vargas", url: siteUrl }],
  creator: "Carlos Castro Vargas",
  category: "Technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos Castro Vargas",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/carlosconnected",
    "https://github.com/carlosconnected",
  ],
  jobTitle: "Senior Fullstack / Platform Engineer",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Kubernetes",
    "Terraform",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
