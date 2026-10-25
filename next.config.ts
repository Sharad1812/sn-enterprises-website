import type { NextConfig } from "next";

// GitHub Actions sets GITHUB_ACTIONS=true during CI builds. Locally (npm run dev/build)
// this is unset, so the site still runs at the root path for development.
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "sn-enterprises-website";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
