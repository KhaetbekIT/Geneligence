import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Container = ({ children, className }: Props) => {
	return (
		<div
			className={cn("max-w-[calc(856px+2rem)] px-4 w-full mx-auto", className)}
		>
			{children}
		</div>
	);
};

interface Props {
	children: ReactNode;
	className?: string;
}
