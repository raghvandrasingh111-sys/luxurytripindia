import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'luxurytripindia.com',
      },
      {
        protocol: 'https',
        hostname: 'www.luxurytripindia.com',
      }
    ],
  },
};

export default nextConfig;
