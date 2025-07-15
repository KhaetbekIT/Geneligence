import { CirclePercent } from "lucide-react";
import { Exo_2 } from "next/font/google";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700", "400"],
});

export const Development = () => {
	return (
		<div className="p-4 bg-white shadow-2xl rounded-4xl">
			<div className="bg-gradient-to-b from-[#48CA8C]/70 to-[#29B279] p-4 sm:p-8 rounded-4xl space-y-16">
				<div className="space-y-6">
					<span className="flex gap-3 w-max text-[#C3FF3D] py-2 px-2.5 rounded-full bg-[#565656]/31">
						<CirclePercent className="hidden sm:block" />

						<span>Скидка на первый заказ</span>
					</span>

					<div className="space-y-4 max-w-xl ">
						<h2
							className={cn(
								"text-[clamp(20px,4vw,36px)] text-white font-semibold uppercase",
								exo2.className,
							)}
						>
							РАЗРАБОТКА
						</h2>

						<p className="text-[#E3E3E3] text-justify">
							Разработка сайтов и интерфейсов обеспечивает уникальные решения
							для бизнеса, повышая его онлайн-видимость, функциональность и
							прибыль.
						</p>
					</div>
				</div>

				<span className="text-[#C3FF3D] text-2xl font-semibold">
					от 7.000&#8381;
				</span>
			</div>
		</div>
	);
};
