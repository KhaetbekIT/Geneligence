import { ArrowUpRight } from "lucide-react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const WorksItem = ({
	image,
	className,
	title,
	href,
	imageClassName,
	...props
}: Props) => {
	return (
		<div
			className={cn(
				"overflow-hidden rounded-2xl relative bg-gray-400 border border-gray-400 group",
				className,
			)}
			{...props}
		>
			<Image
				src={image}
				alt={title}
				width={1600}
				height={960}
				priority
				className={cn(
					"object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out",
					imageClassName,
				)}
			/>

			<div className="absolute bg-black/70 top-full left-0 right-0 -bottom-full group-hover:top-0 group-hover:bottom-0 transition-all duration-300 ease-in-out">
				<div className="absolute top-8 left-8 right-8 text-white">
					<h3 className="text-4xl font-semibold uppercase">{title}</h3>
				</div>

				<div className="absolute right-8 bottom-8">
					<Link
						href={href}
						target="_blank"
						className="bg-[#C3FF3D] inline-block p-4 rounded-full hover:bg-[#C3FF3D]/70"
					>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	);
};

interface Props extends ComponentProps<"div"> {
	title: string;
	image: string | StaticImport;
	href: Url;
	imageClassName?: string;
}
