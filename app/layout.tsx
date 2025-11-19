import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/analytics";
import { PortfolioNav } from "@/components/portfolio-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roll Dice MCP Server | AI Agent Security Portfolio",
  description: "A Model Context Protocol server for rolling dice, compatible with Claude Desktop. Advanced security implementations with WAF, OAuth 2.0, and Arcjet protection.",
  keywords: [
    "MCP Server",
    "Model Context Protocol",
    "Claude Desktop",
    "AI Agent Security",
    "Dice Rolling",
    "Next.js",
    "OAuth 2.0",
    "Web Application Firewall",
  ],
  authors: [{ name: "Sumaiya Serazy" }],
  openGraph: {
    title: "Roll Dice MCP Server",
    description: "Model Context Protocol server with advanced security features",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PortfolioNav />
          {children}
        </ThemeProvider>
        <GoogleAnalytics measurementId={gaId} />
      </body>
    </html>
  );
}
