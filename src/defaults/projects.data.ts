import DeltaSolarImage from "@public/assets/delta-solar.png";
import DikomImage from "@public/assets/dikom.jpg";
import DoirastanImage from "@public/assets/doirastan.png";
import EliteImage from "@public/assets/elite.png";
import IpTelephonyImage from "@public/assets/ip-telefoniya.png";
import { Routers } from "@/configs/routers.config";

export const projectsData = [
	{
		id: 1,
		title: "Редизайн таблицы характеристик для Delta Solar",
		description:
			"Для сайта Delta Solar была выполнена верстка нового компонента таблицы «Характеристики». Я создал адаптивный и готовый к интеграции модуль, который позволяет бэкенд-системе динамически управлять и отображать все технические параметры продукта.",
		imageUrl: DeltaSolarImage,
		imageAlt:
			"Таблица технических характеристик на странице продукта Delta Solar",
		reverse: false, // Картинка справа
		link: Routers.works.deltaSolar,
	},
	{
		id: 2,
		title: "Frontend-поддержка для e-commerce платформы Диком",
		description:
			"В рамках работы с e-commerce платформой «Диком» я отвечал за верстку. Моя работа включала реализация новых страниц по макетам из Figma, поддержку существующего верстку и внедрение правок в соответствии с задачами от менеджера проекта.",
		imageUrl: DikomImage,
		imageAlt: "Главная страница интернет-магазина металлической мебели Диком",
		reverse: true, // Картинка слева
		link: Routers.works.dikom,
	},
	{
		id: 3,
		title: "Разработка и поддержка сайта для IT-компании Doirastan",
		description:
			"Осуществлял полную верстку и последующую техническую поддержку сайта Doirastan. Работа велась в строгом соответствии с дизайн-макетами в Figma и техническим заданием клиента. В мои обязанности также входило первичное наполнение сайта контентом на основе анализа референсов.",
		imageUrl: DoirastanImage,
		imageAlt: "Главная страница сайта IT-интегратора Doirastan",
		reverse: false,
		link: Routers.works.doirastan,
	},
	{
		id: 4,
		title: "Разработка сайта для студии дизайна Elite Design",
		description:
			"Выполнил полную frontend-разработку и последующую поддержку сайта в строгом соответствии с макетами в Figma. В мои задачи входила реализация правок от дизайнера как на клиентской части, так и в административной панели сайта.",
		imageUrl: EliteImage,
		imageAlt: "Главная страница сайта студии интерьерного дизайна Elite Design",
		reverse: true,
		link: Routers.works.elite,
	},
	{
		id: 5,
		title: "Верстка и поддержка лендинга для сервиса IP-телефонии",
		description:
			"Выполнил полную frontend-разработку и последующую техническую поддержку лендинга по макетам из Figma. В мои задачи входила подготовка материалов из аналогичных лендингов, реализация правок от клиента в клиентской части сайта.",
		imageUrl: IpTelephonyImage,
		imageAlt: "Главная страница сайта сервиса IP-телефонии в Узбекистане",
		reverse: false,
		link: Routers.works.ipTelephoniya,
	},
] as const;
