import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Container = ({ children, className }: Props) => {
	return <div className={cn("container mx-auto", className)}>{children}</div>;
};

interface Props {
	children: ReactNode;
	className?: string;
}
