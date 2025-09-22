import Academy from "@public/assets/it-academy.png";
import MCRM from "@public/assets/mcrm.png";
import MeijiMedia from "@public/assets/meiji.png";
import { ArrowUpRight } from "lucide-react";
import { Exo_2 } from "next/font/google";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700"],
});

const experiences = [
	{
		company: "Geneligence",
		role: "Основатель и React-разработчик",
		description:
			"Создал и развиваю IT-команду, занимающуюся разработкой сайтов. Отвечаю за техническое руководство, архитектуру проектов, внедрение технологий (React, Next.js, TypeScript) и взаимодействие с клиентами.",
	},
	{
		company: "MEGABIT-CRM",
		role: "Frontend-разработчик",
		description:
			"Участвую в разработке интерфейсов для CRM-систем и корпоративных порталов. Разрабатываю новые модули, интегрирую API, поддерживаю и оптимизирую существующие решения.",
	},
	{
		company: "IT-Academy",
		role: "Преподаватель по Frontend",
		description:
			"Обучал студентов основам HTML, CSS, JavaScript и работе с современными библиотеками. Консультировал по адаптивной вёрстке, работе с Figma и внедрению UI/UX решений.",
	},
	{
		company: "Meiji Media",
		role: "Верстальщик",
		description:
			"Выполнял кроссбраузерную и адаптивную вёрстку, оптимизацию интерфейсов и работу с макетами. Участвовал в доработке и поддержке существующих проектов.",
	},
];

const logos: { src: StaticImageData; alt: string }[] = [
	{ src: MCRM, alt: "MEGABIT-CRM logo" },
	{ src: MeijiMedia, alt: "Meiji Media logo" },
	{ src: Academy, alt: "IT Academy logo" },
];

export const Experience = () => {
	return (
		<section className={cn("pt-[clamp(76px,10vw,136px)]", exo2.className)}>
			<Container>
				<div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 xl:p-12 space-y-[clamp(32px,5vw,64px)]">
					{/* --- Заголовок --- */}
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<h2 className="uppercase text-center sm:text-left text-[clamp(28px,4vw,36px)] font-semibold">
							Опыт работы
						</h2>
						<Link
							href={Routers.socials.telegram}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2.5 text-[#C3FF3D] bg-[#11141D] rounded-full px-5 py-3 hover:bg-opacity-80 transition-colors duration-300 shrink-0"
						>
							<span className="font-semibold text-sm sm:text-base">
								Обсудить проект
							</span>
							<ArrowUpRight />
						</Link>
					</div>

					{/* --- Опыт работы в виде таймлайна --- */}
					<div className="border-l-2 border-gray-200/80 space-y-12 pl-6 sm:pl-10">
						{experiences.map((exp, index) => (
							<div key={index.toString()} className="relative">
								<div className="absolute -left-[calc(1.5rem+2px)] sm:-left-[calc(2.5rem+2px)] top-1 w-4 h-4 bg-[#C3FF3D] rounded-full border-4 border-white" />
								<h3 className="text-xl sm:text-2xl font-bold text-gray-900">
									{exp.role}
								</h3>
								<p className="text-base sm:text-lg text-gray-700 font-semibold">
									{exp.company}
								</p>
								<p className="mt-3 text-sm sm:text-base text-gray-600">
									{exp.description}
								</p>
							</div>
						))}
					</div>

					{/* --- 3. Анимированная лента с логотипами (ИСПРАВЛЕНО) --- */}
					<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
						<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
							{logos.map((logo, index) => (
								<li key={index.toString()}>
									<Image
										src={logo.src}
										alt={logo.alt}
										className="max-w-none h-16 w-auto"
									/>
								</li>
							))}
						</ul>
						{/* Дублируем список для создания бесшовной анимации */}
						<ul
							className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
							aria-hidden="true"
						>
							{logos.map((logo, index) => (
								<li key={index.toString()}>
									<Image
										src={logo.src}
										alt={logo.alt}
										className="max-w-none h-16 w-auto"
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};
