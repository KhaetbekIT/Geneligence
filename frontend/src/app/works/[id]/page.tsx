import { Container } from "@/components/container";
import type { PageType } from "@/types/types";

const Page: PageType = async ({ params }) => {
	const { id } = await params;

	return (
		<article className="pt-20 pb-14">
			<Container>
				<div className="space-y-5">
					<h2 className="text-3xl font-bold">{id}</h2>
				</div>
			</Container>
		</article>
	);
};

export default Page;
