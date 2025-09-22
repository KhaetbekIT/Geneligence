import ServiceImage from "@public/assets/service-image.png";
import { ArrowUpRight } from "lucide-react";
import { Exo_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700", "400"],
});

// --- 1. Данные об услугах вынесены в массив для чистоты и гибкости ---
const servicesData = [
	{ title: "верстка", price: "ОТ 5.000₽" },
	{ title: "РАЗРАБОТКА САЙТОВ", price: "ОТ 20.000₽" },
	{ title: "под ключ", price: "ОТ 50.000₽" },
];

// --- Вспомогательный компонент для карточки услуги ---
const ServiceCard = ({ title, price }: { title: string; price: string }) => (
	<div className="bg-white rounded-3xl shadow-xl p-6 flex justify-between items-center gap-4 transition-transform duration-300 hover:-translate-y-1.5">
		<div className="space-y-2">
			<p className="text-[#898989] uppercase font-bold text-base sm:text-lg">
				{title}
			</p>
			<p
				className={cn(
					"uppercase font-bold text-[clamp(22px,3vw,28px)]",
					exo2.className,
				)}
			>
				{price}
			</p>
		</div>
		<Link
			href={Routers.socials.telegram}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-[#C3FF3D] text-black inline-block p-4 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110"
			aria-label={`Заказать услугу ${title}`}
		>
			<ArrowUpRight />
		</Link>
	</div>
);

export const Services = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<div className="space-y-10">
					<h2
						className={cn(
							"uppercase text-[clamp(28px,4vw,36px)] font-semibold",
							exo2.className,
						)}
					>
						Фриланс услуги
					</h2>

					{/* --- 2. Основной блок сделан полностью адаптивным --- */}
					<div className="flex gap-6 flex-col md:flex-row">
						{/* --- Левая колонка с услугами --- */}
						<div className="w-full md:max-w-[416px] space-y-4 md:space-y-6 shrink-0">
							{servicesData.map((service) => (
								<ServiceCard
									key={service.title}
									title={service.title}
									price={service.price}
								/>
							))}
						</div>

						{/* --- Правая колонка с акцией --- */}
						<div className="rounded-3xl relative grow bg-white p-6 md:py-8 md:pl-8 shadow-xl overflow-hidden min-h-[330px] flex flex-col">
							<h3
								className={cn(
									"text-[clamp(24px,3vw,36px)] font-bold text-[#11141D] relative z-10",
									exo2.className,
								)}
							>
								МЫ ГАРАНТИРУЕМ <br />
								<span className="text-[#C3FF3D]">СКИДКУ</span> НА ПОВТОРНЫЙ
								<br />
								ЗАКАЗ
							</h3>

							{/* Адаптивное изображение */}
							<div className="absolute top-0 -bottom-12 -right-16 sm:-right-8 md:-right-20 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
								<Image
									priority
									className="object-contain w-full h-full"
									src={ServiceImage}
									alt="service image"
									width={400}
									height={400}
								/>
							</div>

							<Link
								href={Routers.socials.telegram}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex gap-2.5 items-center font-semibold text-[#696969] rounded-full hover:text-black absolute bottom-8 left-8 z-10 transition-colors"
							>
								АКЦИЯ <ArrowUpRight />
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
