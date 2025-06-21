import Link from "next/link";
import { Container } from "@/components/container";
import { Router } from "@/configs/router.config";
import { cn } from "@/lib/utils";

export const Nav = ({ className }: Props) => {
	return (
		<nav
			className={cn(
				"absolute top-0 left-0 right-0 pt-[56px] pb-[37px]",
				className,
			)}
		>
			<Container>
				<div className="text-right space-x-6">
					<Link
						href={Router.projectsPage}
						className="text-4xl uppercase text-white inline-block"
					>
						Projects
					</Link>

					<Link
						href={Router.homePage}
						scroll={false}
						className="text-4xl uppercase text-white inline-block"
					>
						contact me
					</Link>
				</div>
			</Container>
		</nav>
	);
};

interface Props {
	className?: string;
}
