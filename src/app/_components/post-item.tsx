import { Router } from "@/configs/router.config";
import { Time, cn } from "@/lib/utils";
import Link from "next/link";

export const PostItem = ({
	postId,
	title = "Title",
	time = new Date(),
	userData = {
		name: "Khaetbek",
		jobName: "Frontend Developer",
	},
	shortText,
	className,
}: Props) => {
	return (
		<Link
			href={Router.postItemPage(postId)}
			className={cn(
				"bg-white p-6 rounded-lg space-y-4 hover:bg-white/90 transition-colors duration-200",
				className,
			)}
		>
			<h3 className="text-2xl font-bold">{title}</h3>

			<div className="flex items-center gap-6">
				<time dateTime="2022-10-10">{Time(time).format("DD MMM YYYY")}</time>

				<span>&#124;</span>

				<p>
					{userData.name} - {userData.jobName}
				</p>
			</div>

			<blockquote>{shortText}</blockquote>
		</Link>
	);
};

interface Props {
	postId: string;
	title: string;
	time: Date;
	userData: {
		name: string;
		jobName: string;
	};
	shortText: string;
	className?: string;
}
