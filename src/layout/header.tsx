import { Container } from "@/components/container";
import { Router } from "@/configs/router.config";
import { cn } from "@/lib/utils";
import Logo from "@public/favicon.ico";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ className }: Props) => {
	return (
		<header className={cn("py-6", className)}>
			<Container>
				<div className="flex justify-between">
					<Link href={Router.homePage} className="overflow-hidden rounded-full">
						<Image src={Logo} width={50} height={50} alt="Logo" />
					</Link>

					<nav className="text-right space-x-7 flex-1">
						<Link
							className="inline-block hover:text-black/70 font-medium text-xl"
							href={Router.worksPage}
						>
							Works
						</Link>

						<Link
							className="inline-block hover:text-black/70 font-medium text-xl"
							href={Router.postsPage}
						>
							Blog
						</Link>

						<Link
							className="inline-block hover:text-black/70 font-medium text-xl"
							href={"#footer"}
						>
							Contact
						</Link>
					</nav>
				</div>
			</Container>
		</header>
	);
};

interface Props {
	className?: string;
}
