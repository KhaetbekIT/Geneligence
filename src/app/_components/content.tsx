import Arrow1Image from "@public/assets/quote-arrow-1.svg";
import Arrow2Image from "@public/assets/quote-arrow-2.svg";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const Content = () => {
	return (
		<div
			className={cn("max-w-[895px] w-full mx-auto pt-48", montserrat.className)}
		>
			<div className="relative">
				<span className="absolute -top-14 -left-14 w-[61px] h-[54px] ">
					<Image width={61} height={54} src={Arrow1Image} alt="arrow" />
				</span>

				<blockquote className="border-3 border-primary px-14 py-16 bg-black/30">
					<p className="text-white text-lg">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled
					</p>
				</blockquote>

				<span className="absolute -bottom-14 -right-14 w-[61px] h-[54px] ">
					<Image width={61} height={54} src={Arrow2Image} alt="arrow" />
				</span>
			</div>
		</div>
	);
};
