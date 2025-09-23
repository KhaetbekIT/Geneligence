import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export const ProjectItem = ({
	title,
	description,
	imageUrl,
	imageAlt,
	reverse = false,
	link,
}: Props) => {
	return (
		<li
			className={cn(
				"flex flex-col lg:flex-row gap-8 lg:gap-16 items-center",
				reverse && "lg:flex-row-reverse",
			)}
		>
			<div className="w-full lg:w-1/2 space-y-4">
				<h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-gray-800">
					{title}
				</h2>
				<p className="text-gray-600 text-lg leading-relaxed">{description}</p>
			</div>

			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="w-full lg:w-1/2 max-h-[345px] overflow-hidden border border-gray-200 rounded-2xl"
			>
				<Image
					src={imageUrl}
					alt={imageAlt}
					width={800}
					height={600}
					className="rounded-2xl object-top shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
				/>
			</a>
		</li>
	);
};

interface Props {
	title: string;
	description: string;
	imageUrl: StaticImageData | string;
	imageAlt: string;
	reverse?: boolean;
	link: string;
}
