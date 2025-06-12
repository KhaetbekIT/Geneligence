import { Router } from "@/configs/router.config";
import { Time } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const WorkItem = ({
	imageUrl,
	title = "Title",
	year = new Date(),
	workType = "Portfolio",
	shortText,
}: Props) => {
	return (
		<Link href={Router.workItemPage("1")} className="flex gap-[18px]">
			<div className="rounded-lg overflow-hidden w-60 h-44 shrink-0">
				<Image
					className="object-cover w-full h-full"
					priority
					src={imageUrl}
					alt={title}
					width={300}
					height={300}
				/>
			</div>

			<div className="space-y-4 flex-1">
				<h3 className="text-2xl font-bold">{title}</h3>

				<div className="flex items-center gap-5">
					<time
						dateTime="2022-10-10"
						className="bg-[#142850] text-white text-lg py-1.5 px-2.5 rounded-[16px]"
					>
						{Time(year).format("YYYY")}
					</time>

					<span className="text-xl text-[#8695A4]">{workType}</span>
				</div>

				<p>{shortText}</p>
			</div>
		</Link>
	);
};

interface Props {
	className?: string;
	imageUrl: string;
	title: string;
	year: Date;
	workType: string;
	shortText: string;
}
