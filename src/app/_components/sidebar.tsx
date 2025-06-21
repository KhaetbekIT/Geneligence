import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import { Router } from "@/configs/router.config";

export const Sidebar = () => {
	return (
		<aside className="flex flex-col gap-10 w-[46px] fixed top-1/2 -translate-y-1/2">
			<Link
				className="inline-block"
				href={Router.socials.github}
				target="_blank"
			>
				<Github size={46} stroke="white" />
			</Link>

			<Link
				href={Router.socials.instagram}
				target="_blank"
				className="inline-block"
			>
				<Instagram size={46} stroke="white" />
			</Link>
		</aside>
	);
};
