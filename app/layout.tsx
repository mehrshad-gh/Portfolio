import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://mehrshadghasemi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mehrshad Ghasemi | Web & Mobile Developer - Live Apps",
  description: "Web & Mobile Developer shipping real applications to production. PropDesk and HookMeUp available on App Store & Google Play. VanKirk Property Development website.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Mehrshad Ghasemi | Web & Mobile Developer",
    description: "Web & Mobile Developer shipping real applications to production. PropDesk and HookMeUp on App Store & Google Play.",
    type: "website",
    url: siteUrl,
    siteName: "Mehrshad Ghasemi",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Mehrshad Ghasemi | Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehrshad Ghasemi | Web & Mobile Developer",
    description: "Web & Mobile Developer shipping real applications to production.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
