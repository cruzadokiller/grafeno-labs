import type { APIRoute } from "astro";
import { SITE_URL } from "@/lib/site";

const pages = ["/", "/educacion"];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const urls = pages.map((p) => `<url><loc>${SITE_URL}${p === "/" ? "/" : p}</loc><lastmod>${lastmod}</lastmod></url>`).join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
