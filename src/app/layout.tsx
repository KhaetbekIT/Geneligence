import "@/styles/global.css";
import type { LayoutType } from "@/types/types";

const RootLayout: LayoutType = async ({ children }) => {
	return (
		<html lang="en" translate="no">
			<body className="flex flex-col justify-between min-h-screen">
				<header className="flex-shrink-0">header</header>

				<main className="flex-1">{children}</main>

				<footer className="flex-shrink-0">footer</footer>
			</body>
		</html>
	);
};

export default RootLayout;
