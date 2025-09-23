import { CirclePercent } from "lucide-react";
import { Exo_2 } from "next/font/google";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700", "400"],
});

export const ServiceCard = ({
	title,
	description,
	price,
	gradientFrom,
	gradientTo,
}: Props) => (
	<div className="p-2 sm:p-3 bg-white shadow-xl rounded-4xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border">
		<div
			style={
				{
					"--gradient-from": gradientFrom,
					"--gradient-to": gradientTo,
				} as CSSProperties
			}
			className={cn(
				"p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between bg-gradient-to-b",
				"from-[var(--gradient-from)] to-[var(--gradient-to)]",
			)}
		>
			<div className="space-y-6">
				<span className="inline-flex items-center gap-3 w-max text-[#C3FF3D] py-2 px-3 rounded-full bg-black/20 text-sm sm:text-base">
					<CirclePercent className="hidden sm:inline-block w-5 h-5" />
					<span>Скидка на первый заказ</span>
				</span>
				<div className="space-y-4 max-w-xl">
					<h2
						className={cn(
							"text-[clamp(24px,4vw,36px)] text-white font-semibold uppercase",
							exo2.className,
						)}
					>
						{title}
					</h2>
					<p className="text-white/90 text-justify">{description}</p>
				</div>
			</div>
			<span
				className={cn(
					"text-[#C3FF3D] text-2xl sm:text-3xl font-semibold mt-8 block",
					exo2.className,
				)}
			>
				{price}
			</span>
		</div>
	</div>
);

// Интерфейс Props остается без изменений
interface Props {
	title: string;
	description: string;
	price: string;
	gradientFrom: string;
	gradientTo: string;
}
