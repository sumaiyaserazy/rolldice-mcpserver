import { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  author?: string
  ogImage?: string
  ogType?: "website" | "article"
  canonicalUrl?: string
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  author = "Sumaiya Serazy",
  ogImage = "/og-image.png",
  ogType = "website",
  canonicalUrl,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  
  return {
    title: `${title} | Roll Dice MCP Server`,
    description,
    keywords: [
      ...keywords,
      "MCP Server",
      "Model Context Protocol",
      "AI Agent Security",
      "Next.js",
      "Claude Desktop",
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: author,
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
    alternates: {
      canonical: canonicalUrl || baseUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl || baseUrl,
      siteName: "Roll Dice MCP Server",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@sumaiyaserazy",
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
    verification: {
      google: "your-google-verification-code",
      // Add other verification codes as needed
    },
  }
}

// JSON-LD Schema for structured data
export function generateWebPageSchema(data: {
  title: string
  description: string
  url: string
  author: string
  datePublished?: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.title,
    description: data.description,
    url: data.url,
    author: {
      "@type": "Person",
      name: data.author,
    },
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
  }
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Roll Dice MCP Server",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "A Model Context Protocol (MCP) server that brings dice rolling functionality to Claude Desktop with advanced security features.",
  }
}
