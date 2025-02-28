import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/sprites/master/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(svg|png|jpg|gif|webp)$/,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = {
  images: {
    domains: ["https://firstgenn.netlify.app/"],
  },
};

export default nextConfig;
