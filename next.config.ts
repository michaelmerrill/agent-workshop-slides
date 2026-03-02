import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ["just-bash"],
};

const toolbarConfig = withVercelToolbar()(nextConfig);
export default toolbarConfig;
