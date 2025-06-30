import type { PageType } from "@/types/type";
import { Headers } from "./_components/header";
import { Works } from "./_components/works";
import { Experience } from "./_components/experience";

const Page: PageType = async () => {
	return (
		<>
			<Headers />

			<Works />

			<Experience />
		</>
	);
};

export default Page;
