"use client";

import { AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function AppErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const t = useTranslations("ErrorPage");

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex min-h-[400px] items-center justify-center p-6">
			<div className="text-center">
				<div className="mb-6 flex justify-center">
					<AlertTriangle className="text-destructive h-16 w-16" />
				</div>
				<h2 className="mb-4 text-2xl font-semibold text-gray-900">
					{t("error")}
				</h2>
				<p className="mx-auto mb-8 max-w-md text-gray-600">
					{t("serverError")}
				</p>
				<p className="mx-auto mb-8 max-w-md text-gray-600">
					{error.message} <br />
				</p>
				<button
					type="button"
					onClick={() => reset()}
					className="mx-auto bg-red-400 text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
				>
					{t("tryAgain")}
				</button>
			</div>
		</div>
	);
}
