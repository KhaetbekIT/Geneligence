import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type { LayoutType } from "@/types/types";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Heebo } from "next/font/google";
import { notFound } from "next/navigation";

// export function generateStaticParams() {
// 	return routing.locales.map((locale) => ({ locale }));
// }

export const metadata: Metadata = {
	title: "Khaetbek Portfolio",
	description: "Khaetbek Portfolio",
	icons: {
		apple: "/apple-touch-icon.png",
		shortcut: "/favicon-96x96.png",
	},
};

const heebo = Heebo({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

const RootLayout: LayoutType = async ({ params, children }) => {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	setRequestLocale(locale);

	return (
		<html lang={locale} className={cn(heebo.className, "antialiased")}>
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-96x96.png"
					sizes="96x96"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
			</head>
			<body className="min-h-screen flex flex-col justify-between">
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
