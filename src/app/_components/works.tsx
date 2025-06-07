import { Container } from "@/components/container";
import { WorkItem } from "./work-item";

export const Works = () => {
	return (
		<section className="pt-[28px] pb-8">
			<Container>
				<div className="space-y-5">
					<div className="flex justify-between items-center">
						<h2 className="text-2xl">Featured works</h2>
					</div>

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
		</section>
	);
};
