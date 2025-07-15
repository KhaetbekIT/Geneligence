import type { PageType } from "@/types/type";
import { Into } from "./_components/into";
import { Root } from "./_components/root";
import { Stacks } from "./_components/stacks";

const Page: PageType = async () => {
	return (
		<>
			<Into />

			<Root />

			<Stacks />
		</>
	);
};

export default Page;
