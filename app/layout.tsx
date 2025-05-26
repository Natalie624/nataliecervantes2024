import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natalie Cervantes | Blog",
  description: "My personal musings of all things agile, technical program management, and software development.",
};

const isPreview = process.env.NEXT_PUBLIC_USE_CONTENTFUL_PREVIEW === 'true';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-B5EKW2ECL5"></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B5EKW2ECL5');
          `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {isPreview && <Banner />}
        <Navbar />
        <Analytics />
          <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
