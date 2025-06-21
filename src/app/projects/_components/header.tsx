import { Press_Start_2P } from "next/font/google";
import { cn } from "@/lib/utils";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const Header = () => {
	return (
		<header className="pt-[145px]">
			<div className="max-w-[895px] w-full mx-auto space-y-16">
				<div className="space-y-4">
					<div className="border border-primary h-4" />

					<h1
						className={cn(
							"uppercase text-3xl text-primary text-center",
							pressStart2P.className,
						)}
					>
						My Projects
					</h1>

					<div className="border border-primary h-4" />
				</div>

				<h2
					className={cn(
						"uppercase text-2xl text-primary text-center",
						pressStart2P.className,
					)}
				>
					Here is a list of some of my projects
				</h2>
			</div>
		</header>
	);
};
