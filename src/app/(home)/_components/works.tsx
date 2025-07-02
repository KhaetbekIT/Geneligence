import DeltaSolar from "@public/assets/delta-solar.png";
import Dikom from "@public/assets/dikom.jpg";
import Doirastan from "@public/assets/doirastan.png";
import Elite from "@public/assets/elite.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
export const Works = () => {
	return (
		<section className="pt-[136px]">
			<Container>
				<div className="space-y-4">
					<div className="flex gap-4 items-center">
						<div className="overflow-hidden rounded-2xl w-[784px] h-[500px] relative bg-gray-400 border border-gray-400 group">
							<Image
								src={DeltaSolar}
								alt="delta solar"
								width={1600}
								height={960}
								priority
								className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
							/>

							<div className="absolute top-8 left-8 text-white w-[416px]">
								<h3 className="text-4xl font-semibold uppercase">
									Поправка таблици карточка товара Delta Solar
								</h3>
							</div>

							<div className="absolute right-8 bottom-8">
								<Link
									href={Routers.works.deltaSolar}
									target="_blank"
									className="bg-[#C3FF3D] inline-block p-4 rounded-full hover:bg-[#C3FF3D]/70"
								>
									<ArrowUpRight />
								</Link>
							</div>
						</div>

						<div className="overflow-hidden rounded-2xl w-[400px] h-[500px] relative bg-gray-400 border border-gray-400 group">
							<Image
								src={Elite}
								alt="elite"
								width={1600}
								height={960}
								priority
								className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
							/>

							<div className="absolute top-8 left-8 text-white w-[416px]">
								<h3 className="text-4xl font-semibold uppercase">
									Разработка сайта Elite с админкой
								</h3>
							</div>

							<div className="absolute right-8 bottom-8">
								<Link
									href={Routers.works.elite}
									target="_blank"
									className="bg-[#C3FF3D] inline-block p-4 rounded-full hover:bg-[#C3FF3D]/70"
								>
									<ArrowUpRight />
								</Link>
							</div>
						</div>
					</div>

					<div className="flex gap-4 items-center">
						<div className="overflow-hidden rounded-2xl w-[400px] h-[500px] relative bg-gray-400 border border-gray-400 group">
							<Image
								src={Doirastan}
								alt="Doirastan"
								width={1600}
								height={960}
								priority
								className="object-top object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
							/>

							<div className="absolute top-2 left-8 text-black w-[416px]">
								<h3 className="text-sm font-semibold uppercase">									
									Разработка сайт продаж Doirastan
								</h3>
							</div>

							<div className="absolute right-8 bottom-8">
								<Link
									href={Routers.works.doirastan}
									target="_blank"
									className="bg-[#C3FF3D] inline-block p-4 rounded-full hover:bg-[#C3FF3D]/70"
								>
									<ArrowUpRight />
								</Link>
							</div>
						</div>

						<div className="overflow-hidden rounded-2xl w-[784px] h-[500px] relative bg-gray-400 border border-gray-400 group">
							<Image
								src={Dikom}
								alt="Dikom"
								width={1600}
								height={960}
								priority
								className="object-top object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
							/>

							<div className="absolute top-8 right-8 text-white w-[416px]">
								<h3 className="text-4xl font-semibold uppercase">
									Поправка верстки сайта Dikom
								</h3>
							</div>

							<div className="absolute right-8 bottom-8">
								<Link
									href={Routers.works.doirastan}
									target="_blank"
									className="bg-[#C3FF3D] inline-block p-4 rounded-full hover:bg-[#C3FF3D]/70"
								>
									<ArrowUpRight />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
