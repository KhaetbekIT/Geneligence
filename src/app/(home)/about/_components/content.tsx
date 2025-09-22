import AboutImage1 from "@public/assets/about-image2.avif";
import { Exo_2 } from "next/font/google";
import Image from "next/image";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700", "400"],
});

// Группировка технологий по категориям
const techCategories = [
	{
		title: "Основные технологии",
		items: ["React", "Next.js", "TypeScript", "JavaScript"],
	},
	{
		title: "Стилизация",
		items: ["Tailwind CSS", "SASS/SCSS", "CSS3", "HTML5", "Pug"],
	},
	{
		title: "State management",
		items: ["Zustand", "Redux Toolkit"],
	},
	{
		title: "Работа с API",
		items: ["TanStack Query", "React Hook Form"],
	},
	{
		title: "Инструменты",
		items: ["Figma", "Git", "Storybook", "React Router"],
	},
];

// Объединенный компонент для страницы "О нас"
export const Content = () => {
	return (
		<section className="py-16 md:py-24">
			<Container>
				<div className="space-y-16 md:space-y-24">
					{/* --- Верхняя секция: О компании + Изображение --- */}
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
						{/* Изображение */}
						<div className="w-full lg:w-1/2 shrink-0 rounded-2xl overflow-hidden aspect-square lg:aspect-[4/5] shadow-lg">
							<Image
								src={AboutImage1}
								alt="Команда Geneligence за работой"
								width={1740}
								height={2175} // Соотношение сторон 4:5
								className="object-cover block w-full h-full"
							/>
						</div>

						{/* Текст о компании */}
						<div className="w-full lg:w-1/2">
							<h2
								className={cn(
									"uppercase text-3xl md:text-4xl font-semibold",
									exo2.className,
								)}
							>
								О Geneligence
							</h2>
							<div className="mt-6 space-y-4 text-justify text-base md:text-lg text-[#4A4A4A]">
								<p>
									<strong>Geneligence</strong> — молодая и динамично
									развивающаяся команда, специализирующаяся на создании сайтов и
									веб-приложений любой сложности. Мы объединяем опыт,
									современные технологии и креативный подход, чтобы создавать
									продукты, которые работают быстро, выглядят стильно и приносят
									результат.
								</p>
								<p>
									Наша история началась с идеи основателя —{" "}
									<strong>Ахмаджонова Хаётбека</strong>, React-разработчика с
									опытом более 3 лет. За это время мы реализовали десятки
									коммерческих и демонстрационных проектов, от лендингов до
									масштабных корпоративных порталов и CRM-систем.
								</p>
								<p>
									Мы ценим{" "}
									<strong>качество, сроки и прозрачность работы</strong>. Каждый
									проект для нас — это возможность сделать что-то уникальное, а
									для клиента — инструмент, который помогает достигать целей.
								</p>
							</div>
						</div>
					</div>

					{/* --- Нижняя секция: Технологический стек --- */}
					<div className="space-y-10">
						<h2
							className={cn(
								"uppercase text-center text-[clamp(28px,4vw,36px)] font-semibold",
								exo2.className,
							)}
						>
							Технологический стек
						</h2>
						<div className="space-y-8 max-w-5xl mx-auto">
							{techCategories.map((category) => (
								<div key={category.title}>
									<h3 className="font-bold text-xl text-gray-800">
										{category.title}
									</h3>
									<div className="flex flex-wrap gap-3 mt-4">
										{category.items.map((tech) => (
											<span
												className="px-4 py-2 text-sm md:text-base text-[#11141D] border border-gray-300 rounded-full transition-colors duration-300 cursor-default hover:bg-[#11141D] hover:text-white"
												key={tech}
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
