import Link from "next/link";
import { Container } from "@/components/container";
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
				<div className="text-right">
					<Link href={"/contact"} className="text-4xl uppercase">
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
