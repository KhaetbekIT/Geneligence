import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { Exo_2 } from "next/font/google";
import HeaderImage from "@public/assets/header-image.png";
import HeaderImage2 from "@public/assets/header-image2.png";
import Image from "next/image";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700"],
});
export const Headers = () => {
	return (
		<header className={cn(exo2.className)}>
			<Container>
				<div className="space-y-[56px]">
					<div className="max-w-[1127px] w-full">
						<h1 className={"uppercase text-[80px] font-semibold"}>
							РАЗРАБОТКА ВЕБ <br /> САЙТОВ{" "}
							<div className="inline-block relative">
								<Image
									priority
									className="object-contain block w-full h-full"
									src={HeaderImage}
									alt="header image"
									width={287}
									height={76}
								/>
							</div>
						</h1>
					</div>

					<div className="flex items-center gap-[64px]">
						<div className="w-[445px] h-[168px] overflow-hidden">
							<Image
								priority
								className="object-contain block w-full h-full"
								src={HeaderImage2}
								alt="header image 2"
								width={445}
								height={168}
							/>
						</div>

						<div className="grow flex justify-between">
							<div className="w-[217px] border-r space-y-1 pr-[56px]">
								<h4 className="text-[40px]">250+</h4>

								<p className="text-lg text-[#696969]">Выполненных проектов</p>
							</div>

							<div className="w-[217px] border-r space-y-1 px-[56px]">
								<h4 className="text-[40px]">23+</h4>

								<p className="text-lg text-[#696969]">Постоянных клиента</p>
							</div>

							<div className="w-[217px] space-y-1 pl-[56px]">
								<h4 className="text-[40px]">3</h4>

								<p className="text-lg text-[#696969]">
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
