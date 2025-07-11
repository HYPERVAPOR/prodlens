import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 注释掉 output: 'export' 以支持 API 路由
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/prodlens' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prodlens/' : '',
};

export default nextConfig;
