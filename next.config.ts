import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {},   // ✅ tells Next you’re intentionally using Turbopack
};

export default nextConfig;
