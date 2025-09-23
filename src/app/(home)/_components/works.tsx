import { Exo_2 } from "next/font/google";
import { Container } from "@/components/container";
import { projectsData } from "@/defaults/projects.data";
import { WorksItem } from "./works-item";

const exo2 = Exo_2({
	subsets: ["cyrillic", "latin"],
	weight: ["600", "700"],
});

const worksData = [
	{
		id: 1,
		image: projectsData[0].imageUrl,
		title: projectsData[0].title,
		href: projectsData[0].link,
		className: "md:col-span-2",
	},
	{
		id: 2,
		image: projectsData[1].imageUrl,
		title: projectsData[1].title,
		href: projectsData[1].link,
		className: "",
	},
	{
		id: 3,
		image: projectsData[2].imageUrl,
		title: projectsData[2].title,
		href: projectsData[2].link,
		className: "",
	},
	{
		id: 4,
		image: projectsData[3].imageUrl,
		title: projectsData[3].title,
		href: projectsData[3].link,
		className: "md:col-span-2",
	},
];

export const Works = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<div className="space-y-8">
					<h2
						className={`text-center text-[clamp(28px,4vw,36px)] font-semibold uppercase ${exo2.className}`}
					>
						Портфолио
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{worksData.map((work) => (
							<WorksItem
								key={work.id}
								image={work.image}
								title={work.title}
								href={work.href}
								className={work.className}
								imageClassName="object-top"
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
