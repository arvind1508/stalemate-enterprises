/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const useCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const repoName = "stalemate-enterprises";
const useRepoBasePath = isGithubPages && !useCustomDomain;
const basePath = useRepoBasePath ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
