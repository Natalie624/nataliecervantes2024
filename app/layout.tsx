import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natalie Cervantes | Fractional Head of Programs & Technical Delivery",
  description: "Fractional executive helping mid-market SaaS, and enterprise tech leaders deliver faster, cut engineering waste, and scale without burnout. Insights on Agile, TPM tactics, and software delivery leadership.",
  icons: {
    icon: "/favicon-nc.ico",
  }
};

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
          {/* Favicons and mobile metadata */}
          <link rel="icon" href="/favicon-nc.ico" />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content="NCWeb" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Calendly wideget  assets */}
          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
          <script
            src="https://assets.calendly.com/assets/external/widget.js"
            type="text/javascript"
            async
          ></script>

          {/* TODO: bloom.io messenger widget */}
          <Script id="bloom-widget" strategy="afterInteractive">
              {`
                window.bloomSettings = {
                  userId: "8vk9nv0wx7pe6",
                  profileId: "l0zdgov3r93go"
                };

                if (typeof window !== 'undefined' && !window.bloomScriptLoaded) {
                  window.bloomScriptLoaded = true;
                  const bloomScript = document.createElement("script");
                  bloomScript.async = true;

                  fetch("https://code.bloom.io/version?t=" + Date.now())
                    .then(res => res.text())
                    .then(version => {
                      bloomScript.src = "https://code.bloom.io/widget.js?v=" + version;
                      document.head.appendChild(bloomScript);
                    })
                    .catch(err => console.error("Bloom script failed to load:", err));
                }
              `}
            </Script>
          
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <Analytics />
          <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
