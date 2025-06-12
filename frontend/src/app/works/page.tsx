import { Container } from "@/components/container";
import { WorkItem } from "../_components/work-item";

const Page = () => {
	return (
		<article className="pt-20 pb-14">
			<Container>
				<div className="space-y-5">
					<h2 className="text-3xl font-bold">Works</h2>

					<ul>
						<li className="py-[30px] border-b border-b-[#E0E0E0]">
							<WorkItem
								imageUrl="/images/works/1.png"
								title="Designing Dashboards"
								year={new Date()}
								workType="Portfolio"
								shortText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
							/>
						</li>
						<li className="py-[30px] border-b border-b-[#E0E0E0]">
							<WorkItem
								imageUrl="/images/works/1.png"
								title="Designing Dashboards"
								year={new Date()}
								workType="Portfolio"
								shortText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
							/>
						</li>
						<li className="py-[30px] border-b border-b-[#E0E0E0]">
							<WorkItem
								imageUrl="/images/works/1.png"
								title="Designing Dashboards"
								year={new Date()}
								workType="Portfolio"
								shortText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
							/>
						</li>
					</ul>
				</div>
			</Container>
		</article>
	);
};

export default Page;
