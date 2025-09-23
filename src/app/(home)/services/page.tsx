import { Container } from "@/components/container";
import type { PageType } from "@/types/type";
import { ServicesGrid } from "./_components/service-grid";

const Page: PageType = () => {
	return (
		<>
			<section>
				<Container>
					<div className="space-y-6">
						<ServicesGrid />
					</div>
				</Container>
			</section>
		</>
	);
};

export default Page;
