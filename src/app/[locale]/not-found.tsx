import { Router } from "@/configs/router.config";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
	const t = await getTranslations("ErrorPage");
	return (
		<main className="flex min-h-[60vh] items-center justify-center text-center">
			<div className="space-y-6 p-8 text-center">
				<div className="text-9xl font-bold text-brand-primary/20">404</div>
				<h1 className="text-4xl">{t("notFound")}</h1>
				<div>
					<Link href={Router.homePage}>{t("goHomePage")}</Link>
				</div>
			</div>
		</main>
	);
}
