import { Press_Start_2P } from "next/font/google";
import { cn } from "@/lib/utils";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const Header = () => {
	return (
		<header className="pt-[145px]">
			<div className="max-w-[895px] w-full mx-auto space-y-[94px]">
				<div className="space-y-2">
					<div className="flex gap-[18px]">
						<div className="h-4 grow border border-primary" />
						<p
							className={cn(
								"uppercase font-black text-primary",
								pressStart2P.className,
							)}
						>
							a message from earth
						</p>
					</div>

					<h1
						className={cn(
							"uppercase text-3xl text-primary text-center",
							pressStart2P.className,
						)}
					>
						hello fellow galaxy member
					</h1>

					<div className="flex gap-[18px]">
						<p
							className={cn(
								"uppercase font-black text-primary",
								pressStart2P.className,
							)}
						>
							a message from earth
						</p>

						<div className="h-4 grow border border-primary" />
					</div>
				</div>

				<p
					className={cn(
						"uppercase font-black text-primary text-center text-5xl",
						pressStart2P.className,
					)}
				>
					I am Khaetbek
				</p>
			</div>
		</header>
	);
};
