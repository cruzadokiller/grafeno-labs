import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://grafenolabs.cl/",
      lastModified: new Date(),
    },
  ];
}
