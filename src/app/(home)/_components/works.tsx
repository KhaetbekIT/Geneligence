import DeltaSolar from "@public/assets/delta-solar.png";
import Dikom from "@public/assets/dikom.jpg";
import Doirastan from "@public/assets/doirastan.png";
import Elite from "@public/assets/elite.png";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
import { WorksItem } from "./works-item";
export const Works = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<div className="space-y-4">
					<div className="flex gap-4 items-center flex-wrap md:flex-nowrap justify-center">
						<WorksItem
							image={DeltaSolar}
							title={'Поправка таблици карточка товара "Delta Solar"'}
							href={Routers.works.deltaSolar}
							className="w-full h-[275px] md:w-lg md:h-[300px] xl:w-[784px] xl:h-[500px]"
						/>

						<WorksItem
							image={Elite}
							title={'Разработка сайта "Elite" с админкой'}
							href={Routers.works.elite}
							className="w-full h-[275px] md:w-sm md:h-[300px] xl:w-[400px] xl:h-[500px]"
							imageClassName="object-top-left"
						/>
					</div>

					<div className="flex gap-4 items-center flex-wrap md:flex-nowrap justify-center">
						<WorksItem
							image={Doirastan}
							title={'Разработка сайт продаж "Doirastan"'}
							href={Routers.works.doirastan}
							className="w-full h-[275px] md:w-sm md:h-[300px] xl:w-[400px] xl:h-[500px]"
							imageClassName="object-top-left"
						/>

						<WorksItem
							image={Dikom}
							title={'Поправка сайта "Dikom"'}
							href={Routers.works.dikom}
							className="w-full h-[275px] md:w-lg md:h-[300px] xl:w-[784px] xl:h-[500px]"
							imageClassName="object-top-left"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
