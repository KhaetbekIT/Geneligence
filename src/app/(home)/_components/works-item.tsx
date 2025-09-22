import { ArrowUpRight } from "lucide-react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"div"> {
	title: string;
	image: string | StaticImport;
	href: Url;
	imageClassName?: string;
}

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
				// 3. Добавлен aspect-video для сохранения пропорций 16:9
				"overflow-hidden max-h-[450px] h-full rounded-2xl relative bg-gray-400 border border-gray-400 group ",
				className,
			)}
			{...props}
		>
			<Image
				src={image}
				alt={title}
				width={1600}
				height={900}
				priority
				className={cn(
					"object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out",
					imageClassName,
				)}
			/>

			<div className="absolute bg-black/70 top-full left-0 right-0 -bottom-full group-hover:top-0 group-hover:bottom-0 transition-all duration-300 ease-in-out p-6 sm:p-8">
				<h3 className="text-white text-[clamp(20px,3vw,32px)] font-semibold uppercase">
					{title}
				</h3>

				<div className="absolute right-6 bottom-6 sm:right-8 sm:bottom-8">
					<Link
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#C3FF3D] text-black inline-block p-4 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110"
						aria-label={`Подробнее о проекте ${title}`}
					>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	);
};
