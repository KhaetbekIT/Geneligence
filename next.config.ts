import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/название-репозитория',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
