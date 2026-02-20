import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Mehrshad Ghasemi | Web & Mobile Developer - Live Apps",
  description: "Web & Mobile Developer shipping real applications to production. PropDesk and HookMeUp available on App Store & Google Play. VanKirk Property Development website.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Mehrshad Ghasemi | Web & Mobile Developer",
    description: "Web & Mobile Developer shipping real applications to production. PropDesk and HookMeUp on App Store & Google Play.",
    type: "website",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
