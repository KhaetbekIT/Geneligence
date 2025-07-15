import AboutImage1 from "@public/assets/about-image1.avif";
import AboutImage2 from "@public/assets/about-image2.avif";
import { Exo_2 } from "next/font/google";
import Image from "next/image";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700", "400"],
});

export const Into = () => {
	return (
		<section>
			<Container>
				<div className="flex gap-6">
					<div className="w-full max-w-3xl h-[430px] overflow-hidden rounded-2xl shrink-0">
						<Image
							priority
							width={1740}
							height={1740}
							className="object-cover block w-full h-full"
							src={AboutImage1}
							alt="about image 1"
						/>
					</div>

					<div className="grow space-y-6">
						<div className="w-full h-[175px] overflow-hidden rounded-2xl">
							<Image
								priority
								width={1740}
								height={1740}
								className="object-cover block w-full h-full"
								src={AboutImage2}
								alt="about image 1"
							/>
						</div>
						<h2
							className={cn("uppercase text-4xl font-semibold", exo2.className)}
						>
							ФИЛОСОФИЯ КОМПАНИИ
						</h2>

						<p className="text-[#4A4A4A]">
							Мы создаем самые инновационные и простые решения, которые
							гармонично сочетают технологии, дизайн и партнерство для улучшения
							бизнеса
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};
