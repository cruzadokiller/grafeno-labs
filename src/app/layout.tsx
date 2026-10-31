import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grafeno Labs — Crecimiento digital: marketing, desarrollo e IA",
  description:
    "Marketing digital, funnels de conversión, tecnología e IA en un solo equipo para atraer, convertir y vender más. Especialistas en educación superior (admisión y matrícula), eCommerce y empresas.",
  icons: {
    icon: [
      { url: "/favicon-48.png",  sizes: "48x48",   type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico",     type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
  },
  other: {
    "msvalidate.01": "AF34C7A7EB7C10F97986D73D22DE01CF",
  },
  alternates: {
    canonical: "https://grafenolabs.cl/",
  },
  openGraph: {
    title: "Grafeno Labs — No construimos webs, construimos crecimiento digital",
    description:
      "Marketing, funnels de conversión, tecnología e IA en un solo equipo para atraer, convertir y vender más.",
    type: "website",
    url: "https://grafenolabs.cl",
    images: [{ url: "https://grafenolabs.cl/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grafeno Labs — Construimos crecimiento digital",
    description: "Marketing, funnels, tecnología e IA para atraer, convertir y vender más.",
    images: ["https://grafenolabs.cl/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${chakraPetch.variable} ${hankenGrotesk.variable}`}
      style={
        {
          "--display": "var(--font-chakra), sans-serif",
          "--body": "var(--font-hanken), sans-serif",
        } as React.CSSProperties
      }
    >
      <body>
        {children}
        <Analytics />
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x4ha9fvvfi");
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H775WZY614"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H775WZY614');
          `}
        </Script>
      </body>
    </html>
  );
}
