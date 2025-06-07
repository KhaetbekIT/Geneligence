import { Container } from "@/components/container";
import { Router } from "@/configs/router.config";
import Link from "next/link";
import { PostItem } from "./post-item";

export const Posts = () => {
	return (
		<section className="pt-[28px] pb-8 bg-[#EDF7FA]">
			<Container>
				<div className="space-y-5">
					<div className="flex justify-between items-center">
						<h2 className="text-2xl">Recent posts</h2>

						<Link
							className="text-[#00A8CC] hover:underline"
							href={Router.postsPage}
						>
							View all
						</Link>
					</div>

					<div className="grid grid-cols-2 gap-5">
						<PostItem
							title="Making a design system from scratch"
							shortText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
							postId={"1"}
							time={new Date()}
							userData={{ name: "John Doe", jobName: "Software Engineer" }}
						/>

						<PostItem
							title="Making a design system from scratch"
							shortText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
							postId={"1"}
							time={new Date()}
							userData={{ name: "John Doe", jobName: "Software Engineer" }}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
