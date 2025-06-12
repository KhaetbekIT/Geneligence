import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	output: "export",
	transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default nextConfig;
