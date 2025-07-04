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
export const Headers = () => {
	return (
		<header className={cn(exo2.className)}>
			<Container>
				<div className="space-y-[clamp(16px,3vw,56px)]">
					<HeaderTitle
						titles={[
							"Из идей — в интерфейсы. Из макетов — в результат",
							"Веб-разработка, где каждая деталь имеет значение",
						]}
					/>

					<div className="flex items-center gap-[clamp(24px,3vw,64px)] flex-col md:flex-row">
						<div className="max-w-[445px] w-full h-[210px] sm:h-[168px] overflow-hidden rounded-2xl">
							<Image
								priority
								className="object-cover block w-full h-full"
								src={HeaderImage2}
								alt="header image 2"
								width={445}
								height={168}
							/>
						</div>

						<div className="grow grid grid-cols-3 max-w-[670px] w-full">
							<div className="border-r space-y-1 pr-[clamp(12px,3vw,56px)]">
								<h4 className="text-[clamp(22px,3vw,40px)]">250+</h4>

								<p className="text-[clamp(12px,2vw,18px)] text-[#696969]">
									Выполненных проектов
								</p>
							</div>

							<div className=" border-r space-y-1 px-[clamp(12px,3vw,56px)]">
								<h4 className="text-[clamp(22px,3vw,40px)]">23+</h4>

								<p className="text-[clamp(12px,2vw,18px)] text-[#696969]">
									Постоянных клиента
								</p>
							</div>

							<div className=" space-y-1 pl-[clamp(12px,3vw,56px)]">
								<h4 className="text-[clamp(22px,3vw,40px)]">3</h4>

								<p className="text-[clamp(12px,2vw,18px)] text-[#696969]">
									Года работы в дружной команде
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
};
