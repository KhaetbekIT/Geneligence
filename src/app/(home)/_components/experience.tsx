import Academy from "@public/assets/it-academy.png";
import MCRM from "@public/assets/mcrm.png";
import MeijiMedia from "@public/assets/meiji.png";
import { ArrowUpRight } from "lucide-react";
import { Exo_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Routers } from "@/configs/routers.config";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700"],
});

export const Experience = () => {
	return (
		<section className={cn("pt-[136px]", exo2.className)}>
			<Container>
				<div className="bg-white rounded-2xl shadow-xl p-8 space-y-1">
					<div className="flex justify-between">
						<h2 className="uppercase text-4xl font-semibold">Опыт работы</h2>

						<Link
							href={Routers.socials.telegram}
							target="_blank"
							className="inline-flex gap-2.5 text-[#C3FF3D] bg-[#11141D] rounded-[40px] px-4 py-3 hover:text-[#C3FF3D]/70"
						>
							Обсудить проект <ArrowUpRight />
						</Link>
					</div>

					<p className="text-lg text-[#4a4a4a]">
						Я работаю в сфере веб-разработки с 2021 года. За это время я успел
						поработать над множеством проектов, от небольших сайтов-визиток до
						крупных корпоративных порталов. Мой опыт охватывает фронтенд
						разработку, что позволяет мне создавать полноценные решения с
						использованием современных технологий.
					</p>

					<Carousel
						opts={{
							align: "center",
							loop: true,
						}}
					>
						<CarouselContent className="justify-center">
							<CarouselItem className="basis-1/5">
								<Image
									src={MeijiMedia}
									alt="meiji media"
									className="object-contain"
									width={150}
									height={150}
									priority
								/>
							</CarouselItem>
							<CarouselItem className="basis-1/5">
								<Image
									src={Academy}
									alt="it academy"
									className="object-contain"
									width={150}
									height={150}
									priority
								/>
							</CarouselItem>
							<CarouselItem className="basis-1/5">
								<Image
									className="object-contain"
									width={150}
									height={150}
									priority
									src={MCRM}
									alt="mcrm"
								/>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</Container>
		</section>
	);
};
