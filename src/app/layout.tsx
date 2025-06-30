import type { LayoutType } from "@/types/type";
import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
	weight: ["400", "500", "600", "700", "800"],
});

const RootLayout: LayoutType = async ({ children }) => {
	return (
		<html
			className={cn("scroll-smooth", manrope.className)}
			lang="ru"
			translate="no"
		>
			{children}
		</html>
	);
};

export default RootLayout;
