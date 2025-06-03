import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
