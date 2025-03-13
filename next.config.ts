import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/en.json",
  },
});
const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
};

export default withNextIntl(nextConfig);
