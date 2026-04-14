import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/bobo_portfolio',
  images: { unoptimized: true },
};
module.exports = nextConfig;

export default nextConfig;
