import type { PageType } from "@/types/type";
import { Root } from "./_components/root";
import { Stacks } from "./_components/stacks";

const Page: PageType = async () => {
	return (
		<>
			<Root />

			<Stacks />
		</>
	);
};

export default Page;
