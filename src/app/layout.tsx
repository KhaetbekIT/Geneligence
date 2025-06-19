import type { LayoutType } from "@/types/type";
import "@/css/globals.css";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { Nav } from "@/layout/nav";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
	title: "Akhmadzhonov Khaetbek — Frontend Developer Portfolio",
	description:
		"Портфолио Ахмаджонова Хаётбека — Frontend-разработчика с опытом в React, Next.js, TypeScript. Работаю в компании Мегабит-ЦРМ, преподавал в IT-академии, владею современными технологиями фронтенда.",
	keywords: [
		"Khaetbek Akhmadzhonov",
		"Frontend developer",
		"React.js",
		"Next.js",
		"TypeScript",
		"JavaScript",
		"Программист Ташкент",
		"Портфолио Frontend",
		"Мегабит-ЦРМ",
		"IT-academy",
		"Frontend разработка",
		"HTML CSS",
		"Git GitHub",
		"Разработчик сайтов Узбекистан",
		"Разработчик сайтов",
		"Разработчик веб-сайтов",
		"Разработчик веб-сайтов Узбекистан",
		"Meiji Media",
	],
	authors: [{ name: "Akhmadzhonov Khaetbek", url: "https://khaetbek.dev" }],
	creator: "Akhmadzhonov Khaetbek",
	openGraph: {
		title: "Akhmadzhonov Khaetbek — Frontend Developer Portfolio",
		description:
			"Портфолио и профессиональные достижения Ахмаджонова Хаётбека — frontend-разработчика из Узбекистана. Технологии: React, Next.js, TypeScript, Git.",
		url: "https://khaetbek.dev",
		type: "website",
	},
};

const RootLayout: LayoutType = ({ children }) => {
	return (
		<html className={cn(bebas.className)} lang="en" translate="no">
			<body className="flex flex-col min-h-screen justify-between bg-black text-white">
				<Nav className="z-10 shrink-0" />
				<main className="grow">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
