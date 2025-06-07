import { Container } from "@/components/container";
import { PostItem } from "../_components/post-item";

const Page = () => {
	return (
		<article className="pt-20 pb-14">
			<Container>
				<div className="space-y-5">
					<h2 className="text-3xl font-bold">Works</h2>

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

					<PostItem
						title="Making a design system from scratch"
						shortText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
						postId={"1"}
						time={new Date()}
						userData={{ name: "John Doe", jobName: "Software Engineer" }}
					/>
				</div>
			</Container>
		</article>
	);
};

export default Page;
