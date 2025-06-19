import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Container = ({ children, className }: Props) => {
	return (
		<div
			className={cn(
				"max-w-[calc(1600px+(65px*2))] px-[65px] w-full mx-auto",
				className,
			)}
		>
			{children}
		</div>
	);
};

interface Props {
	children: ReactNode;
	className?: string;
}
