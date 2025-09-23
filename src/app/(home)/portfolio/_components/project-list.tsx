import { Container } from "@/components/container";
import { projectsData } from "@/defaults/projects.data";
import { ProjectItem } from "./project-item";

export const ProjectList = () => {
	return (
		<section className="pt-[clamp(76px,10vw,136px)]">
			<Container>
				<ul className="space-y-20 md:space-y-24">
					{projectsData.map((project) => (
						<ProjectItem key={project.id} {...project} />
					))}
				</ul>
			</Container>
		</section>
	);
};
