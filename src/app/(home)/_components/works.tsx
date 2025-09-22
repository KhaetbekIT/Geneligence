import DeltaSolar from "@public/assets/delta-solar.png";
import Dikom from "@public/assets/dikom.jpg";
import Doirastan from "@public/assets/doirastan.png";
import Elite from "@public/assets/elite.png";
import { Exo_2 } from "next/font/google";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
import { WorksItem } from "./works-item";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700"],
});

// --- 1. Данные о работах вынесены в массив для гибкости и масштабируемости ---
const worksData = [
	{
		id: 1,
		image: DeltaSolar,
		title: 'Поправка таблицы карточки товара "Delta Solar"',
		href: Routers.works.deltaSolar,
		className: "md:col-span-2", // Эта работа будет занимать 2 колонки на средних экранах и больше
	},
	{
		id: 2,
		image: Elite,
		title: 'Разработка сайта "Elite" с админкой',
		href: Routers.works.elite,
		className: "", // Стандартный размер
	},
	{
		id: 3,
		image: Doirastan,
		title: 'Разработка сайта продаж "Doirastan"',
		href: Routers.works.doirastan,
		className: "", // Стандартный размер
	},
	{
		id: 4,
		image: Dikom,
		title: 'Поправка сайта "Dikom"',
		href: Routers.works.dikom,
		className: "md:col-span-2", // Эта работа также будет занимать 2 колонки
	},
];

export const Works = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<div className="space-y-8">
					<h2
						className={`text-center text-[clamp(28px,4vw,36px)] font-semibold uppercase ${exo2.className}`}
					>
						Портфолио
					</h2>

					{/* --- 2. Создана единая адаптивная сетка --- */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{worksData.map((work) => (
							<WorksItem
								key={work.id}
								image={work.image}
								title={work.title}
								href={work.href}
								className={work.className}
								imageClassName="object-top"
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
