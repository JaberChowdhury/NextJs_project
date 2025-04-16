/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-hosting.imagekit.io",
        pathname: "/39d763d847c94ed9/**",
      },
    ],
  },
};

export default nextConfig;
