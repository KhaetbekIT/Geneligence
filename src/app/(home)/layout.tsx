import { Footer } from "@/layouts/footer/footer";
import { Nav } from "@/layouts/header/nav";
import type { LayoutType } from "@/types/type";

export const metadata = {
	title: "Geneligence — Веб-разработка и дизайн | Портфолио",
	description:
		"Создаем современные сайты и приложения. Верстка, дизайн и разработка под ключ. Быстро, качественно и с гарантией.",
	keywords: [
		"веб-разработка",
		"дизайн сайтов",
		"портфолио",
		"верстка",
		"React",
		"Next.js",
	].join(", "),
	openGraph: {
		title: "Geneligence — Веб-разработка и дизайн",
		description:
			"Профессиональное создание сайтов и приложений. Посмотрите наши работы.",
		url: "https://geneligence.vercel.app/",
		siteName: "Geneligence",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
			},
		],
		locale: "ru_RU",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Geneligence — Веб-разработка и дизайн",
		description:
			"Профессиональное создание сайтов и приложений. Посмотрите наши работы.",
		images: ["/og-image.jpg"],
	},
	alternates: {
		canonical: "https://geneligence.vercel.app/",
	},
};

const HomeLayout: LayoutType = async ({ children }) => {
	return (
		<body className="flex min-h-screen flex-col justify-between">
			<Nav className="shrink-0" />

			<main className="grow py-5 sm:pt-8 sm:pb-32">{children}</main>

			<Footer className="shrink-0" />
		</body>
	);
};

export default HomeLayout;
