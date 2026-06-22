import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://95.217.98.112:3002",
    "http://95.217.98.112",
  ],
  devIndicators: false,
};

export default nextConfig;
