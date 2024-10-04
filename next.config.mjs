/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    missingSuspenseWithCSRBailout: false,
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
