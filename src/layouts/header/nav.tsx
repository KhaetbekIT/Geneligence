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

	useEffect(() => {
		const handleResize = () => {
			setIsMenuOpen(false);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<nav className={cn("py-6 sm:py-10 relative", className)} {...props}>
			<Container>
				<div className="flex rounded-[20px] sm:w-max mx-auto bg-[#696969]/70 p-3 gap-4 items-center relative justify-between z-20">
					<Link
						href={Routers.pages.home}
						className="w-[50] h-[50] rounded-full overflow-hidden block"
					>
						<Image
							className="w-full h-full object-cover block"
							src={LogoImage}
							alt="logo"
							width={640}
							height={640}
							priority
						/>
					</Link>

					<button
						type="button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="sm:hidden text-white cursor-pointer transition-all duration-300 ease-in-out"
						data-slot="mobile-menu"
						aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
					>
						{isMenuOpen ? <X size={30} /> : <AlignJustify size={30} />}
					</button>

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
				</div>
			</Container>

			<div
				className={cn(
					"fixed left-0 right-0 bg-[#696969]/70 z-10 transition-all duration-500 ease-in-out pt-32 sm:hidden",
					isMenuOpen ? "top-0 bottom-0" : "-top-full bottom-full",
				)}
				data-slot="mobile-menu "
			>
				<Container>
					<div className="text-center space-y-5">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								className={cn(
									"text-base py-2.5 px-5 rounded-xl text-white hover:bg-white/70 hover:text-[#696969] transition-all duration-300 ease-in-out block",
									{ "bg-white text-[#696969]": isActive(pathname, link.href) },
								)}
								href={link.href}
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
