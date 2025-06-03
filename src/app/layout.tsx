import { globalUrls } from "@/const/global-urls";
import { Header } from "@/layout/header";
import "@/styles/global.css";
import type { LayoutType } from "@/types/types";
import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Head from "next/head";

export const metadata: Metadata = {
	title: "Khaetbek Portfolio",
	description:
		"Frontend Developer — Portfolio of Khaetbek, showcasing projects, skills, and contact information.",
	applicationName: "Khaetbek Portfolio",
	generator: "Next.js",
	keywords: [
		"Khaetbek",
		"Portfolio",
		"Frontend Developer",
		"React",
		"Strapi CMS",
		"Next.js",
		"Web Development",
	],
	authors: [{ name: "Khaetbek", url: globalUrls.domain }],
	creator: "Khaetbek",
	publisher: "Khaetbek",
	colorScheme: "light",
	metadataBase: new URL(globalUrls.domain),
	openGraph: {
		title: "Khaetbek Portfolio",
		description: "Frontend & Java Developer — Portfolio of Khaetbek",
		url: globalUrls.domain,
		siteName: "Khaetbek Portfolio",
		images: [
			{
				url: `${globalUrls.domain}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: "Khaetbek Portfolio preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Khaetbek Portfolio",
		description: "Frontend Developer — Portfolio of Khaetbek",
		images: [`${globalUrls.domain}/og-image.jpg`],
		creator: "khaetbek",
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

const heebo = Heebo({
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

const RootLayout: LayoutType = async ({ children }) => {
	return (
		<html className={heebo.className} lang="en" translate="no">
			<Head>
				<meta name="apple-mobile-web-app-title" content="Khaetbek" />
			</Head>
			<body className="flex flex-col justify-between min-h-screen bg-white">
				<Header className="flex-shrink-0" />

				<main className="flex-1">{children}</main>

				<footer className="flex-shrink-0">footer</footer>
			</body>
		</html>
	);
};

export default RootLayout;
