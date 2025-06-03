import type { LayoutType } from "@/types/types";
import { setRequestLocale } from "next-intl/server";

const MainLayout: LayoutType = async ({ params, children }) => {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<header>header</header>

			<main className="flex-1">{children}</main>

			<footer>footer</footer>
		</>
	);
};

export default MainLayout;
