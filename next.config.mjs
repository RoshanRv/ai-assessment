/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
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
  webpack: (config, { isServer }) => {
    // Add file-loader to handle video files like mp4
    config.module.rules.push({
      test: /\.(mp4|avi|mov|wmv|flv)$/, // Match video file extensions
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]", // Keep the original file name
            outputPath: "static/videos/", // Output the videos to this folder
            publicPath: "/_next/static/videos/", // Path Next.js will use to access the videos
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
