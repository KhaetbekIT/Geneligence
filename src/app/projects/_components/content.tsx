import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Router } from "@/configs/router.config";
import { ProjectsData } from "@/const/projects.const";

export const Content = () => {
	return (
		<div className="mx-auto w-[930px] pt-10">
			<div className="grid grid-cols-4 gap-6">
				{ProjectsData.map((project) => (
					<Dialog key={project.id}>
						<DialogTrigger className="bg-black/30 border border-primary py-10 px-7 text-white cursor-pointer">
							{project.title}
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>{project.title}</DialogTitle>
								<div>
									<Image
										src={project.image}
										alt={project.title}
										priority
										width={930}
										height={500}
										className="w-full h-full object-cover"
									/>
								</div>
								<DialogDescription className="font-normal">
									{project.description}
								</DialogDescription>
								<DialogFooter>
									<Link
										href={project.link.github ?? Router.projects.keyboard}
										target="_blank"
										className="inline-block hover:text-blue-400"
									>
										<Github />
									</Link>

									<Link
										href={project.link.global}
										target="_blank"
										className="inline-block hover:text-blue-400"
									>
										<Globe />
									</Link>
								</DialogFooter>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				))}
			</div>
		</div>
	);
};
