import Logo from "@public/logo.jpg";
import { Instagram, Send, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config"; // Предполагается, что у вас есть этот файл
import { cn } from "@/lib/utils";

export const Footer = ({ className, ...props }: ComponentProps<"footer">) => {
	const year = new Date().getFullYear();
	const linkClasses =
		"text-white/70 hover:text-white transition-colors duration-300";

	return (
		<footer
			className={cn("py-16 bg-[#4A4A4A] text-white", className)}
			{...props}
		>
			<Container>
				{/* Адаптивная сетка для колонок */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center md:text-left">
					{/* 1. Лого и соцсети */}
					<div className="flex flex-col items-center md:items-start">
						<Link
							href={Routers.pages.home}
							className="w-20 h-20 rounded-full overflow-hidden block mb-6"
						>
							<Image
								className="w-full h-full object-cover"
								src={Logo}
								alt="Geneligence Logo"
								width={80}
								height={80}
								priority
							/>
						</Link>
						<div className="flex gap-4">
							<SocialLink href={Routers.socials.insta} icon={<Instagram />} />
							<SocialLink href={Routers.socials.youtube} icon={<Youtube />} />
							<SocialLink href={Routers.socials.telegram} icon={<Send />} />
						</div>
					</div>

					{/* 2. Навигация */}
					<div className="space-y-4">
						<h3 className="font-bold text-lg uppercase tracking-wider">
							Навигация
						</h3>
						<ul className="space-y-3">
							<li>
								<Link href={Routers.pages.home} className={linkClasses}>
									Главная
								</Link>
							</li>
							<li>
								<Link href={Routers.pages.about} className={linkClasses}>
									Обо мне
								</Link>
							</li>
							<li>
								<Link href={Routers.pages.portfolio} className={linkClasses}>
									Портфолио
								</Link>
							</li>
							<li>
								<Link href={"#!"} className={linkClasses}>
									Контакты
								</Link>
							</li>
						</ul>
					</div>

					{/* 3. Контакты */}
					<div className="space-y-4">
						<h3 className="font-bold text-lg uppercase tracking-wider">
							Связаться
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href={`mailto:${Routers.linksTarget.email}`}
									className={linkClasses}
								>
									{Routers.linksTarget.email}
								</a>
							</li>
							<li>
								<a
									href={Routers.socials.telegram}
									target="_blank"
									rel="noopener noreferrer"
									className={linkClasses}
								>
									Telegram: @geneligence
								</a>
							</li>
						</ul>
					</div>

					{/* 4. Призыв к действию */}
					<div className="space-y-4 bg-black/20 p-6 rounded-lg text-center">
						<h3 className="font-bold text-lg">Есть проект?</h3>
						<p className="text-white/70 text-sm">
							Давайте обсудим, как я могу помочь в его реализации.
						</p>
						<Link
							href={"#!"}
							className="inline-block mt-2 bg-[#C3FF3D] text-black font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all"
						>
							Написать мне
						</Link>
					</div>
				</div>

				{/* Нижняя часть с копирайтом */}
				<div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-[#B8B8B8]">
					<p>&copy; 2024 - {year} Все права защищены</p>
					<p className="mt-2">
						Разработано с ❤️ by{" "}
						<a
							href={Routers.pages.home}
							target="_blank"
							rel="noopener noreferrer"
							className="text-white font-semibold hover:underline"
						>
							Geneligence
						</a>
					</p>
				</div>
			</Container>
		</footer>
	);
};

// Вспомогательный компонент для иконок соцсетей
const SocialLink = ({
	href,
	icon,
}: {
	href: string;
	icon: React.ReactNode;
}) => (
	<Link
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="bg-[#C3FF3D] text-black p-3 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110"
	>
		{icon}
	</Link>
);
