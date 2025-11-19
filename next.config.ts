import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true // This disables all optimization but allows all domains
  }
};

export default nextConfig;
