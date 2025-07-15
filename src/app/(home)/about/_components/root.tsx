import AboutImage1 from "@public/assets/about-image2.avif";
import { Exo_2 } from "next/font/google";
import Image from "next/image";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700", "400"],
});

export const Root = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<div className="space-y-5">
					<h2
						className={cn("uppercase text-4xl font-semibold", exo2.className)}
					>
						О КОРНЯХ Geneligence
					</h2>

					<div className="flex gap-5">
						<div className="w-xl rounded-2xl h-96 overflow-hidden shrink-0">
							<Image
								src={AboutImage1}
								alt="about image 1"
								width={1740}
								height={1740}
								className="object-cover block w-full h-full"
							/>
						</div>

						<div className="grow space-y-2.5">
							<p className="text-[#4A4A4A]">
								<strong>Geneligence</strong> — современная веб-студия,
								основанная в 2024 году. Мы создаем цифровые продукты, которые
								сочетают безупречную техническую реализацию и продуманный
								дизайн.
							</p>

							<p className="text-[#4A4A4A]">
								Мы верим в силу инноваций и стремимся к тому, чтобы каждый наш
								проект был не просто функциональным, но и вдохновляющим.
								Объединив опыт, креативность и страсть к делу, мы создаем
								продукты, которые превращают идеи в реальность и оставляют
								неизгладимый след в цифровом мире.
							</p>

							<p className="text-[#4A4A4A]">
								Наша философия направляет нас в каждом проекте, вдохновляя на
								создание инновационных и значимых решений, которые оставляют
								след в цифровом мире. Мы верим, что только через креативность,
								инновации и тесное сотрудничество можно достигать больших целей
								и менять мир к лучшему
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
