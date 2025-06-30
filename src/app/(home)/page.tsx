import type { PageType } from "@/types/type";
import { Experience } from "./_components/experience";
import { Headers } from "./_components/header";
import { Services } from "./_components/services";
import { Works } from "./_components/works";

const Page: PageType = async () => {
	return (
		<>
			<Headers />

			<Works />

			<Experience />

			<Services />
		</>
	);
};

export default Page;
