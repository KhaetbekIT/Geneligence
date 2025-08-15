import AboutImage1 from "@public/assets/about-image2.avif";
import { Exo_2 } from "next/font/google";
import Image from "next/image";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700", "400"],
});

export const Root = () => {
	return (
		<section>
			<Container>
				<div className="space-y-5">
					<h2
						className={cn("uppercase text-4xl font-semibold", exo2.className)}
					>
						О КОРНЯХ Geneligence
					</h2>

					<div className="flex flex-col gap-5 lg:flex-row">
						<div className="rounded-2xl overflow-hidden shrink-0 h-96 lg:max-w-xl w-full">
							<Image
								src={AboutImage1}
								alt="about image 1"
								width={1740}
								height={1740}
								className="object-cover block w-full h-full"
							/>
						</div>

						<div className="grow space-y-2.5 text-justify">
							<p className="text-[#4A4A4A]">
								<strong>Geneligence</strong> — молодая и динамично развивающаяся
								команда, специализирующаяся на создании сайтов и веб-приложений
								любой сложности. Мы объединяем опыт, современные технологии и
								креативный подход, чтобы создавать продукты, которые работают
								быстро, выглядят стильно и приносят результат.
							</p>

							<p className="text-[#4A4A4A]">
								Наша история началась с идеи основателя —{" "}
								<strong>Ахмаджонова Хаётбека</strong>, React-разработчика с
								опытом более 3 лет. За это время мы реализовали десятки
								коммерческих и демонстрационных проектов, от лендингов до
								масштабных корпоративных порталов и CRM-систем.
							</p>

							<p className="text-[#4A4A4A]">
								Мы ценим <strong>качество, сроки и прозрачность работы</strong>.
								Каждый проект для нас — это возможность сделать что-то
								уникальное, а для клиента — инструмент, который помогает
								достигать целей.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
