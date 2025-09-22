import { Exo_2 } from "next/font/google";
import { Container } from "@/components/container";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700"],
});

// 2. Улучшена структура данных для ответа со списком
const faqItems = [
	{
		question: "Сколько времени занимает разработка сайта?",
		answer:
			"Сроки зависят от сложности проекта. Лендинг — 1-2 недели, корпоративный сайт — 2-4 недели, интернет-магазин — от 1 месяца. Точные сроки назовем после обсуждения задач.",
	},
	{
		question: "Какие типы сайтов вы разрабатываете?",
		answer:
			"Создаем все основные типы: лендинги, корпоративные сайты, интернет-магазины, промо-страницы, веб-приложения. Работаем с Next.js, React и другими современными технологиями.",
	},
	{
		question: "Какая информация нужна для начала работы?",
		answer: [
			"Цели и задачи будущего сайта.",
			"Референсы (примеры сайтов, которые вам нравятся).",
			"Бренд-материалы (логотип, фирменные цвета, шрифты).",
			"Контент (тексты, изображения, видео).",
		],
		isList: true,
		note: "Если чего-то нет — мы поможем с подготовкой.",
	},
	{
		question: "Как вы обеспечиваете безопасность сайта?",
		answer:
			"Используем HTTPS, регулярные обновления, защиту от DDoS, резервное копирование. Для магазинов — сертифицированные платежные системы. Даем рекомендации по защите после запуска.",
	},
];

export const Faqs = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<div className="space-y-10">
					<h2
						className={cn(
							"uppercase text-center text-[clamp(28px,4vw,36px)] font-semibold",
							exo2.className,
						)}
					>
						ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
					</h2>

					<Accordion
						type="single"
						collapsible
						defaultValue="item-0" // 3. Первый элемент открыт по умолчанию
						className="w-full max-w-4xl mx-auto space-y-4"
					>
						{faqItems.map((item, index) => (
							<AccordionItem
								key={item.question}
								value={`item-${index}`}
								className="group rounded-2xl sm:rounded-3xl border border-[#E4E4E4] px-5 py-3 md:px-8 md:py-4 data-[state=open]:bg-[#F8F8F8] transition-colors duration-300"
							>
								<AccordionTrigger className="text-lg md:text-xl font-semibold text-[#11141D] hover:no-underline text-left">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="pt-4 text-base text-[#4A4A4A]">
									{/* 2. Улучшенное отображение для ответов-списков */}
									{item.isList && Array.isArray(item.answer) ? (
										<>
											<ol className="list-decimal space-y-2 pl-5">
												{item.answer.map((listItem, i) => (
													<li key={i.toString()}>{listItem}</li>
												))}
											</ol>
											{item.note && <p className="mt-4 text-sm">{item.note}</p>}
										</>
									) : (
										<p>{item.answer}</p>
									)}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</Container>
		</section>
	);
};
