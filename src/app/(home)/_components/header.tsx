import HeaderImage2 from "@public/assets/header-image2.png";
import { Exo_2 } from "next/font/google";
import Image from "next/image";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { HeaderTitle } from "./header-title";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700"],
});

// 1. Данные для статистики вынесены в массив для чистоты кода
const statsData = [
	{ value: "15+", label: "Выполненных проектов" },
	{ value: "5+", label: "Постоянных клиента" },
	{ value: "3", label: "Года работы в дружной команде" },
];

// Компонент переименован в единственное число для соответствия стандартам
export const Header = () => {
	return (
		<header className={cn("py-10", exo2.className)}>
			<Container>
				<div className="space-y-[clamp(16px,3vw,56px)]">
					<HeaderTitle
						titles={[
							"Из идей — в интерфейсы. Из макетов — в результат",
							"Веб-разработка, где каждая деталь имеет значение",
						]}
					/>

					{/* 2. Основной блок сделан адаптивным (flex-col -> md:flex-row) */}
					<div className="flex items-center gap-[clamp(24px,3vw,64px)] flex-col md:flex-row">
						<div className="w-full max-w-[445px] shrink-0 overflow-hidden rounded-2xl aspect-[445/168]">
							<Image
								priority
								className="object-cover block w-full h-full"
								src={HeaderImage2}
								alt="Абстрактное изображение технологичного интерфейса"
								width={445}
								height={168}
							/>
						</div>

						<div className="grid w-full max-w-[670px] grid-cols-3 gap-8 text-center sm:text-left sm:gap-0 sm:divide-x sm:divide-gray-200">
							{statsData.map((stat, index) => (
								<div
									key={index.toString()}
									className="space-y-1 sm:px-[clamp(12px,3vw,56px)]"
								>
									<h4 className="font-bold text-[clamp(28px,3vw,40px)]">
										{stat.value}
									</h4>
									<p className="text-[clamp(14px,2vw,18px)] text-[#696969]">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
};
