"use client";

import LogoImage from "@public/logo.jpg";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, useEffect, useState } from "react";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
import { cn, isActive } from "@/lib/utils";

// Выносим данные для навигации для чистоты кода
const navLinks = [
	{ href: Routers.pages.home, label: "Главная" },
	{ href: Routers.pages.services, label: "Услуги" },
	{ href: Routers.pages.portfolio, label: "Портфолио" },
	{ href: Routers.pages.about, label: "О нас" },
	{ href: Routers.pages.vacancies, label: "Вакансии" },
];

export const Nav = ({ className, ...props }: ComponentProps<"nav">) => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Эффект для блокировки скролла и закрытия меню при ресайзе
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		const handleResize = () => {
			if (window.innerWidth >= 640) {
				// sm breakpoint in Tailwind
				setIsMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);

		// Функция очистки при размонтировании компонента
		return () => {
			document.body.style.overflow = "auto";
			window.removeEventListener("resize", handleResize);
		};
	}, [isMenuOpen]);

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className={cn("py-6 sm:py-10", className)} {...props}>
			{/* --- Основной блок навигации (Pill/Капсула) --- */}
			<Container>
				<div className="flex rounded-[20px] w-full sm:w-max mx-auto bg-[#696969]/70 backdrop-blur-sm p-3 gap-4 items-center justify-between z-20 relative">
					<Link href={Routers.pages.home}>
						<div className="w-[50px] h-[50px] rounded-full overflow-hidden block shrink-0">
							<Image
								className="w-full h-full object-cover"
								src={LogoImage}
								alt="Geneligence logo"
								width={64}
								height={64}
								priority
							/>
						</div>
					</Link>

					{/* --- Навигация для десктопа (скрыта на мобильных) --- */}
					<div className="sm:flex gap-1 items-center hidden">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								className={cn(
									"text-base py-2.5 px-5 rounded-xl text-white hover:bg-white/70 hover:text-[#696969] transition-all duration-300 ease-in-out",
									{ "bg-white text-[#696969]": isActive(pathname, link.href) },
								)}
								href={link.href}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* --- Кнопка "Бургер" (видна на мобильных) --- */}
					<button
						type="button"
						onClick={() => setIsMenuOpen(true)}
						className="sm:hidden text-white cursor-pointer p-2"
						aria-label="Открыть меню"
					>
						<AlignJustify size={30} />
					</button>
				</div>
			</Container>

			{/* --- Оверлей мобильного меню --- */}
			<div
				className={cn(
					"fixed inset-0 bg-[#696969]/95 backdrop-blur-lg z-50 transition-all duration-300 ease-in-out sm:hidden",
					isMenuOpen
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-full pointer-events-none",
				)}
			>
				<Container>
					{/* Шапка внутри мобильного меню */}
					<div className="flex justify-between items-center py-6">
						<Link href={Routers.pages.home} onClick={handleLinkClick}>
							<div className="w-[50px] h-[50px] rounded-full overflow-hidden block">
								<Image
									className="w-full h-full object-cover"
									src={LogoImage}
									alt="Geneligence logo"
									width={64}
									height={64}
								/>
							</div>
						</Link>
						<button
							type="button"
							onClick={() => setIsMenuOpen(false)}
							className="text-white cursor-pointer p-2"
							aria-label="Закрыть меню"
						>
							<X size={30} />
						</button>
					</div>

					{/* Ссылки в мобильном меню */}
					<div className="flex flex-col text-center space-y-5 mt-10">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								className={cn(
									"text-lg py-3 px-5 rounded-xl text-white hover:bg-white/70 hover:text-[#696969] transition-colors duration-300 ease-in-out block",
									{ "bg-white text-[#696969]": isActive(pathname, link.href) },
								)}
								href={link.href}
								onClick={handleLinkClick}
							>
								{link.label}
							</Link>
						))}
					</div>
				</Container>
			</div>
		</nav>
	);
};
