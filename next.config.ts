import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: 'chaocatering.com.au',
      port:''
    }],
},
};

export default nextConfig;
