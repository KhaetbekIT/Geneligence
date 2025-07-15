import { Exo_2 } from "next/font/google";
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

export const Stacks = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<div className="space-y-10">
					<h2
						className={cn(
							"uppercase text-[clamp(24px,3vw,36px)] font-semibold",
							exo2.className,
						)}
					>
						ТЕХНОЛОГИЧЕСКИЙ СТЕК
					</h2>

					<div className="space-y-8">
						{techCategories.map((category) => (
							<div key={category.title} className="space-y-4">
								<h3 className="text-lg font-medium">{category.title}</h3>
								<div className="flex flex-wrap gap-3">
									{category.items.map((tech) => (
										<span
											className="px-4 py-2.5 text-[#11141D] border border-[#11141D] rounded-full"
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
			</Container>
		</section>
	);
};
