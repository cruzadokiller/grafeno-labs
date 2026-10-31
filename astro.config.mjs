// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";

// Sitio estático; solo /api/contacto corre en el servidor (prerender = false).
export default defineConfig({
  site: "https://grafenolabs.cl",
  trailingSlash: "never",
  adapter: vercel(),
  // Secretos leidos en el servidor en cada request (no se incrustan en el build).
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
      CONTACT_FROM_EMAIL: envField.string({ context: "server", access: "secret", optional: true }),
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Chakra Petch",
      cssVariable: "--font-chakra",
      weights: [300, 400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Hanken Grotesk",
      cssVariable: "--font-hanken",
      weights: ["300 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
});
