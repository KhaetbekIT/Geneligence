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

export const Services = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<div className="space-y-10">
					<h2
						className={cn("uppercase text-4xl font-semibold", exo2.className)}
					>
						Услуги
					</h2>

					<div className="flex gap-6">
						<div className="w-[416px] space-y-2">
							<div className="bg-white rounded-3xl shadow-xl p-6 flex justify-between gap-4">
								<div className="space-y-3">
									<p className="text-[#898989] uppercase font-bold text-xl">
										верстка
									</p>

									<p className="uppercase text-[28px] font-bold text-xl">
										ОТ 5.000₽
									</p>
								</div>

								<div>
									<Link
										href={Routers.socials.telegram}
										target="_blank"
										className="bg-[#C3FF3D] inline-block p-4 rounded-full hover:bg-[#C3FF3D]/70"
									>
										<ArrowUpRight />
									</Link>
								</div>
							</div>

							<div className="bg-white rounded-3xl shadow-xl p-6 flex justify-between gap-4">
								<div className="space-y-3">
									<p className="text-[#898989] uppercase font-bold text-xl">
										РАЗРАБОТКА САЙТОВ
									</p>

									<p className="uppercase text-[28px] font-bold text-xl">
										ОТ 20.000₽
									</p>
								</div>

								<div>
									<Link
										href={Routers.socials.telegram}
										target="_blank"
										className="bg-[#C3FF3D] inline-block p-4 rounded-full hover:bg-[#C3FF3D]/70"
									>
										<ArrowUpRight />
									</Link>
								</div>
							</div>

							<div className="bg-white rounded-3xl shadow-xl p-6 flex justify-between gap-4">
								<div className="space-y-3">
									<p className="text-[#898989] uppercase font-bold text-xl">
										под ключ
									</p>

									<p className="uppercase text-[28px] font-bold text-xl">
										ОТ 50.000₽
									</p>
								</div>

								<div>
									<Link
										href={Routers.socials.telegram}
										target="_blank"
										className="bg-[#C3FF3D] inline-block p-4 rounded-full hover:bg-[#C3FF3D]/70"
									>
										<ArrowUpRight />
									</Link>
								</div>
							</div>
						</div>

						<div className="rounded-2xl relative grow bg-white py-8 pl-8 pr-[85px] shadow-xl overflow-hidden">
							<h4
								className={cn(
									"text-4xl font-bold text-[#11141D] relative z-10",
									exo2.className,
								)}
							>
								МЫ ГАРАНТИРУЕМ <span className="text-[#C3FF3D]">СКИДКУ</span>{" "}
								<br />
								НА ПОВТОРНЫЙ ЗАКАЗ
							</h4>

							<div className="absolute top-0 right-0 bottom-0 w-[400px] h-[400px]">
								<Image
									priority
									className="object-cover w-full h-full"
									src={ServiceImage}
									alt="service image"
									width={400}
									height={400}
								/>
							</div>

							<Link
								href={Routers.socials.telegram}
								target="_blank"
								className="inline-flex gap-2.5 text-[#696969] rounded-[40px] hover:text-[#696969]/70 absolute bottom-8 left-8"
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
