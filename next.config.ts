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
	output: "standalone",
	transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],

	headers: async () => {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Developed-By",
						value: "khaetbek.dev",
					},
				],
			},
		];
	},
	experimental: {
		optimizePackageImports: [
			"@radix-ui/react-accordion",
			"@radix-ui/react-dialog",
			"@radix-ui/react-slot",
			"class-variance-authority",
			"lucide-react",
			"embla-carousel-react",
		]
	}
};

export default nextConfig;
