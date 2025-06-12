import { Container } from "@/components/container";
import { globalUrls } from "@/const/global-urls";
import { cn } from "@/lib/utils";
import Instagram from "@public/assets/insta.svg";
import Telegram from "@public/assets/telegram.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = ({ className }: Props) => {
	return (
		<footer className={cn("py-[51px]", className)} id="footer">
			<Container>
				<div className="space-y-[26px] text-center">
					<div className="flex items-center justify-center gap-6">
						<Link
							className="inline-block"
							target="_blank"
							href={globalUrls.insta}
						>
							<Image
								priority
								className="w-full h-full object-cover"
								src={Instagram}
								alt="Instagram"
								width={24}
							/>
						</Link>

						<Link
							className="inline-block"
							target="_blank"
							href={globalUrls.telegram}
						>
							<Image
								priority
								className="w-full h-full object-cover"
								src={Telegram}
								alt="Telegram"
								width={24}
							/>
						</Link>
					</div>

					<p className="text-base">
						&copy; {new Date().getFullYear()} Khaetbek. All rights reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
};

interface Props {
	className?: string;
}
