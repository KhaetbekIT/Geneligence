import { CirclePercent } from "lucide-react";
import { Exo_2 } from "next/font/google";
import { Container } from "@/components/container"; // Предполагается, что у вас есть этот компонент
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700", "400"],
});

// --- 1. Все данные об услугах теперь в одном массиве ---
const servicesData = [
	{
		title: "Верстка",
		description:
			"Адаптивная верстка сайтов по макету с мобильной оптимизацией и SEO-настройкой. Чистый валидный код, кроссбраузерность и высокая скорость загрузки.",
		price: "от 1.200-5.000₽",
		gradientFrom: "#74B4EF/40",
		gradientTo: "#1B99FB",
	},
	{
		title: "Разработка",
		description:
			"Разработка сайтов и интерфейсов для бизнеса, повышающая его онлайн-видимость, функциональность и прибыль.",
		price: "от 7.000₽",
		gradientFrom: "#48CA8C/70",
		gradientTo: "#29B279",
	},
	// Вы можете легко добавить сюда новые карточки услуг
];

// --- 2. Создан единый, переиспользуемый компонент ServiceCard ---
interface ServiceCardProps {
	title: string;
	description: string;
	price: string;
	gradientFrom: string;
	gradientTo: string;
}

const ServiceCard = ({
	title,
	description,
	price,
	gradientFrom,
	gradientTo,
}: ServiceCardProps) => (
	<div className="p-2 sm:p-3 bg-white shadow-xl rounded-4xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
		<div
			className={cn(
				"p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between bg-gradient-to-b",
				`from-[${gradientFrom}] to-[${gradientTo}]`,
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

// --- 3. Основной компонент, который выводит все карточки ---
export const ServicesGrid = () => {
	return (
		<section className="py-16">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{servicesData.map((service) => (
						<ServiceCard key={service.title} {...service} />
					))}
				</div>
			</Container>
		</section>
	);
};
