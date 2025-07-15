import { Container } from "@/components/container";
import type { PageType } from "@/types/type";
import { Development } from "./_components/development";
import { HTMLDesign } from "./_components/html-design";

const Page: PageType = () => {
	return (
		<>
			<section className="pt-[clamp(76px,10vw,136px)]">
				<Container>
					<div className="space-y-6">
						<HTMLDesign />

						<Development />
					</div>
				</Container>
			</section>
		</>
	);
};

export default Page;
