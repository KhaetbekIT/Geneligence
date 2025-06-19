import Title1 from "@public/assets/home-title-1.png";
import Title2 from "@public/assets/home-title-2.png";
import Title3 from "@public/assets/home-title-3.png";
import { Press_Start_2P } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const Header = () => {
	return (
		<header className="pt-[145px]">
			<div className="max-w-[895px] w-full mx-auto space-y-2">
				<div className="flex gap-[18px]">
					<div className="h-4 grow border border-[#CEB7FF]" />
					<p
						className={cn(
							"uppercase font-black text-[#CEB7FF]",
							pressStart2P.className,
						)}
					>
						a message from earth
					</p>
				</div>

				<div>
					<Image
						className="block w-full"
						priority
						src={Title1}
						alt="title"
						width={895}
						height={100}
					/>
				</div>

				<div className="flex gap-[18px]">
					<p
						className={cn(
							"uppercase font-black text-[#CEB7FF]",
							pressStart2P.className,
						)}
					>
						a message from earth
					</p>

					<div className="h-4 grow border border-[#CEB7FF]" />
				</div>
			</div>
		</header>
	);
};
