import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import postgres from "postgres";

export const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "allow",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "as1.ftcdn.net" },
      { hostname: "other-allowed-domain.com" },
      { hostname: "thumbs.dreamstime.com" },
    ],
  },
  pageExtensions: ["mdx", "ts", "tsx"],
  async redirects() {
    if (!process.env.POSTGRES_URL) {
      return [];
    }

    const redirects = await sql`
      SELECT source, destination, permanent
      FROM redirects;
    `;

    return redirects.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent: !!permanent,
    }));
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
