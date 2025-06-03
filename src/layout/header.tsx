import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = ({ className }: Props) => {
	return (
		<header className={cn("py-6", className)}>
			<Container>
				<nav className="text-right space-x-7">
					<Link
						className="inline-block hover:text-black/70 font-medium text-xl"
						href={"#!"}
						scroll={false}
					>
						Works
					</Link>

					<Link
						className="inline-block hover:text-black/70 font-medium text-xl"
						href={"#!"}
						scroll={false}
					>
						Blog
					</Link>

					<Link
						className="inline-block hover:text-black/70 font-medium text-xl"
						href={"#!"}
						scroll={false}
					>
						Contact
					</Link>
				</nav>
			</Container>
		</header>
	);
};

interface Props {
	className?: string;
}
