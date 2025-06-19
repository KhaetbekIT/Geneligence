import { cn } from "@/lib/utils";
import { Header } from "./header";

export const Wrapper = () => {
	return (
		<section
			className={cn(
				`bg-[url('/assets/home-bg-image.jpg')] bg-cover bg-no-repeat min-h-screen overflow-hidden`,
			)}
		>
			<Header />
		</section>
	);
};
