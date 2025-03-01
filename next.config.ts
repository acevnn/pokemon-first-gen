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
};

export default nextConfig;
