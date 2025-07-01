"use client";

import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
import { cn, isActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import LogoImage from "@public/logo.jpg";
import Image from "next/image";

const navLinks = [
	{ href: Routers.pages.home, label: "Главная" },
	{ href: Routers.pages.services, label: "Услуги" },
	{ href: Routers.pages.portfolio, label: "Портфолио" },
	{ href: Routers.pages.about, label: "О нас" },
	{ href: Routers.pages.vacancies, label: "Вакансии" },
];

export const Nav = ({ className, ...props }: ComponentProps<"nav">) => {
	const pathname = usePathname();

	return (
		<nav className={cn("py-10", className)} {...props}>
			<Container>
				<div className="flex rounded-[20px] w-max mx-auto bg-[#696969]/70 p-3 gap-4 items-center">
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

					<div className="flex gap-1 items-center">
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
		</nav>
	);
};
