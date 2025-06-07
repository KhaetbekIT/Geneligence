import { Container } from "@/components/container";
import { globalUrls } from "@/const/global-urls";
import Avatar from "@public/avatar.jpg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	return (
		<section className="pt-[134px] pb-[86px]">
			<Container>
				<div className="flex items-center justify-between gap-10">
					<div className="w-[506px] space-y-10 flex-shrink-0">
						<h1 className="text-[44px] font-bold">
							Hi, I am Khaetbek, a Frontend Developer
						</h1>

						<p className="text-base">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>

						<div>
							<Link
								href={globalUrls.cv}
								target="_blank"
								className="inline-block bg-[#FF6464] rounded-[2px] px-5 py-4 text-white text-xl hover:bg-[#FF6464]/90 font-medium transition-colors"
								title="Download CV"
							>
								Download Resume
							</Link>
						</div>
					</div>

					<div className="w-60 h-60 rounded-full bg-[#EDF7FA] overflow-hidden">
						<Image
							width={300}
							height={300}
							priority
							src={Avatar}
							alt="avatar"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
