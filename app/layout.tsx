import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natalie Cervantes | Fractional Chief Product Officer",
  description: "Fractional executive partnering with SaaS leaders to strengthen product strategy, align roadmaps with business goals, and build the systems that drive execution.",
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
          {/* Google Tag Manager */}
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJ69XMBP');`,
            }}
          />
          {/* End Google Tag Manager */}
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

      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJ69XMBP"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <Analytics />
          <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
