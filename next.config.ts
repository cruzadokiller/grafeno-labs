import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.grafenolabs.cl" }],
        destination: "https://grafenolabs.cl/:path*",
        permanent: true, // 301 — le dice a Google que la versión canónica es sin www
      },
    ];
  },
};

export default nextConfig;
