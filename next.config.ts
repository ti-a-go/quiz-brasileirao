import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logodetimes.com",
        port: "",
        pathname: "/times/**"
      }
    ]
  }
};

export default nextConfig;
