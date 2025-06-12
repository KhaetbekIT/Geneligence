import type { PageType } from "@/types/types";
import { Header } from "./_components/header";
import { Posts } from "./_components/posts";
import { Works } from "./_components/works";

const Page: PageType = () => {
	return (
		<>
			<Header />

			<Posts />

			<Works />
		</>
	);
};

export default Page;
