import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const Container = ({ className, ...props }: ComponentProps<"div">) => {
	return (
		<div
			className={cn("max-w-[1236px] w-full px-4 mx-auto", className)}
			{...props}
		/>
	);
};
