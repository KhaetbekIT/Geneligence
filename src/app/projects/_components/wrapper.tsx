import { Sidebar } from "@/app/_components/sidebar";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { Content } from "./content";
import { Header } from "./header";

export const Wrapper = () => {
	return (
		<section
			className={cn(
				`bg-[url('/assets/projects-bg-image.jpg')] bg-cover bg-no-repeat min-h-screen overflow-hidden `,
			)}
		>
			<Container className="relative min-h-screen">
				<Header />
				<Sidebar />
				<Content />
			</Container>
		</section>
	);
};
