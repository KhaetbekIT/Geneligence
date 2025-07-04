import DeltaSolar from "@public/assets/delta-solar.png";
import Dikom from "@public/assets/dikom.jpg";
import Doirastan from "@public/assets/doirastan.png";
import Elite from "@public/assets/elite.png";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
import { WorksItem } from "./works-item";
export const Works = () => {
	return (
		<section className="pt-[136px]">
			<Container>
				<div className="space-y-4">
					<div className="flex gap-4 items-center">
						<WorksItem
							image={DeltaSolar}
							title={'Поправка таблици карточка товара "Delta Solar"'}
							href={Routers.works.deltaSolar}
							className="w-[784px] h-[500px]"
						/>

						<WorksItem
							image={Elite}
							title={'Разработка сайта "Elite" с админкой'}
							href={Routers.works.elite}
							className="w-[400px] h-[500px]"
						/>
					</div>

					<div className="flex gap-4 items-center">
						<WorksItem
							image={Doirastan}
							title={'Разработка сайт продаж "Doirastan"'}
							href={Routers.works.doirastan}
							className="w-[400px] h-[500px]"
							imageClassName="object-top"
						/>

						<WorksItem
							image={Dikom}
							title={'Поправка сайта "Dikom"'}
							href={Routers.works.dikom}
							className="w-[784px] h-[500px]"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
