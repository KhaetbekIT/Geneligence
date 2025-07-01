import { Footer } from "@/layouts/footer/footer";
import { Nav } from "@/layouts/header/nav";
import type { LayoutType } from "@/types/type";

export const metadata = {
	title: "Khaetbek's Portfolio",
	description: "Welcome to my portfolio website!",
};

const HomeLayout: LayoutType = async ({ children }) => {
	return (
		<body className="flex min-h-screen flex-col justify-between">
			<Nav className="shrink-0" />

			<main className="grow pt-8 pb-32">{children}</main>

			<Footer className="shrink-0" />
		</body>
	);
};

export default HomeLayout;
