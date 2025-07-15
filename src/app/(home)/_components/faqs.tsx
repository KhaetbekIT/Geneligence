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
		answer:
			"1) Цели сайта\n2) Референсы (примеры понравившихся сайтов)\n3) Бренд-материалы (лого, цвета, шрифты)\n4) Контент (тексты, фото)\nЕсли чего-то нет — поможем с подготовкой.",
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
							"uppercase text-4xl font-semibold text-center",
							exo2.className,
						)}
					>
						ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
					</h2>

					<Accordion type="single" collapsible className="space-y-4">
						{faqItems.map((item, index) => (
							<AccordionItem
								key={item.question}
								value={`item-${index}`}
								className="rounded-3xl border border-[#E4E4E4] p-6 data-[state=open]:bg-[#F8F8F8] transition-colors"
							>
								<AccordionTrigger className="text-xl font-semibold text-[#11141D] hover:no-underline text-left">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-[#4A4A4A] whitespace-pre-line">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</Container>
		</section>
	);
};
