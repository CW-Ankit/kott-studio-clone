import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tildacdn.net",
      },
      {
        protocol: "https",
        hostname: "static.tildacdn.one",
      },
      {
        protocol: "https",
        hostname: "thb.tildacdn.net",
      },
      {
        protocol: "https",
        hostname: "thb.tildacdn.one",
      },
    ],
  },
};

export default nextConfig;
