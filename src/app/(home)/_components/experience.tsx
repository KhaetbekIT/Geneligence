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
		<section className={cn("pt-[clamp(76px,10vw,136px)]", exo2.className)}>
			<Container>
				<div className="bg-white rounded-2xl shadow-xl p-5 xl:p-8 space-y-[clamp(24px,3vw,56px)]">
					<div className="flex justify-between items-center">
						<h2 className="uppercase text-[clamp(24px,3vw,36px)] font-semibold">
							Опыт работы
						</h2>

						<Link
							href={Routers.socials.telegram}
							target="_blank"
							className="inline-flex gap-2.5 text-[#C3FF3D] bg-[#11141D] rounded-[40px] px-4 py-3 hover:text-[#C3FF3D]/70"
						>
							<span className="hidden md:inline-block">Обсудить проект</span>{" "}
							<ArrowUpRight />
						</Link>
					</div>

					<p className="text-[clamp(14px,2vw,18px)] text-[#4a4a4a] text-justify">
						<strong>
							Ахмаджонов Хаётбек — основатель и React-разработчик, Geneligence
						</strong>{" "}
						cоздал и развиваю молодую IT-команду, занимающуюся разработкой
						сайтов любой сложности. Отвечаю за техническое руководство,
						разработку архитектуры проектов, внедрение современных технологий
						(React, Next.js, TypeScript) и взаимодействие с клиентами. Опыт в
						коммерческих и образовательных проектах более 3 лет.{" "}
						<strong>Meiji Media — верстальщик</strong>: выполнял кроссбраузерную
						и адаптивную вёрстку, оптимизацию интерфейсов и работу с макетами.
						Участвовал в доработке и поддержке существующих проектов.{" "}
						<strong>IT-Academy — преподаватель по Frontend</strong>: обучал
						студентов основам HTML, CSS, JavaScript и работе с современными
						библиотеками. Консультировал по адаптивной вёрстке, работе с Figma и
						внедрению UI/UX решений. <strong>Фриланс</strong>: реализовал
						проекты различной сложности — от лендингов до многостраничных сайтов
						и админ-панелей. Работал напрямую с заказчиками, вел полный цикл
						разработки. <strong>MEGABIT-CRM — Frontend-разработчик</strong>:
						участвую в разработке интерфейсов для CRM-систем и корпоративных
						порталов. Разрабатываю новые модули, интегрирую API, поддерживаю и
						оптимизирую существующие решения.
					</p>

					<Carousel
						opts={{
							align: "center",
							loop: true,
						}}
					>
						<CarouselContent className="md:justify-center">
							<CarouselItem className="sm:basis-2/5 md:basis-1/5">
								<div className="w-[150px] mx-auto">
									<Image
										src={MeijiMedia}
										alt="meiji media"
										className="object-cover"
										width={150}
										height={150}
										priority
									/>
								</div>
							</CarouselItem>
							<CarouselItem className="sm:basis-2/5 md:basis-1/5">
								<div className="w-[150px] mx-auto">
									<Image
										src={Academy}
										alt="it academy"
										className="object-cover"
										width={150}
										height={150}
										priority
									/>
								</div>
							</CarouselItem>
							<CarouselItem className="sm:basis-2/5 md:basis-1/5">
								<div className="w-[150px] mx-auto">
									<Image
										className="object-cover"
										width={150}
										height={150}
										priority
										src={MCRM}
										alt="mcrm"
									/>
								</div>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</Container>
		</section>
	);
};
