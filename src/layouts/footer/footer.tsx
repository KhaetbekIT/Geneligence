import Logo from "@public/logo.jpg";
import { Instagram, Send, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { Container } from "@/components/container";
import { Routers } from "@/configs/routers.config";
import { cn } from "@/lib/utils";

export const Footer = ({ className, ...props }: ComponentProps<"footer">) => {
	return (
		<footer className={cn("py-[56px] bg-[#4A4A4A]", className)} {...props}>
			<Container>
				<div className="flex justify-between gap-5">
					<div className="w-max shrink-0">
						<Link
							href={Routers.pages.home}
							className="w-[70] h-[70] rounded-full overflow-hidden block mb-6"
						>
							<Image
								className="w-full h-full object-cover block"
								src={Logo}
								alt="logo"
								width={640}
								height={640}
								priority
							/>
						</Link>

						<p className="text-[#B8B8B8] text-sm mb-2">
							&copy; 2024 - {new Date().getFullYear()} Все права защищены
						</p>

						<p className="text-white text-sm mb-6">Выполнено Geneligence</p>

						<div className="flex gap-2.5 justify-between">
							<Link
								href={Routers.socials.insta}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#C3FF3D] p-3 rounded-full hover:bg-[#C3FF3D]/70 transition-colors"
							>
								<Instagram />
							</Link>

							<Link
								href={Routers.socials.youtube}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#C3FF3D] p-3 rounded-full hover:bg-[#C3FF3D]/70 transition-colors"
							>
								<Youtube />
							</Link>

							<Link
								href={Routers.socials.telegram}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#C3FF3D] p-3 rounded-full hover:bg-[#C3FF3D]/70 transition-colors"
							>
								<Send />
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
