import { Container } from "@/components/container";
import { ServiceCard } from "./service-card";

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
];

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
