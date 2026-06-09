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
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grafeno Labs — Crecimiento digital: marketing, desarrollo e IA",
  description:
    "Laboratorio digital de punta a punta: posicionamiento orgánico (SEO, GEO, AEO), medios pagados, CRO, desarrollo web y de apps, e-commerce e inteligencia artificial aplicada para hacer crecer tu negocio.",
  openGraph: {
    title: "Grafeno Labs — No construimos webs, construimos crecimiento digital",
    description:
      "Laboratorio de experimentación donde la arquitectura técnica es el soporte de una estrategia comercial de alto rendimiento.",
    type: "website",
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
      lang="es"
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H775WZY614"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
