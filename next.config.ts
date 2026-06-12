import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.petschoice.co.uk",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "private-user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "user-attachments.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
