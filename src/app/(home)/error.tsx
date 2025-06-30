"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function AppErrorPage({ error, reset }: Props) {
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
					Произошла ошибка
				</h2>
				<p className="mx-auto mb-8 max-w-md text-gray-600">
					К сожалению, что-то пошло не так. Пожалуйста, попробуйте еще раз.
				</p>
				<p className="mx-auto mb-8 max-w-md text-gray-600">
					{error.message} <br />
				</p>
				<Button
					onClick={() => reset()}
					className="mx-auto"
					variant="destructive"
				>
					Попробовать снова
				</Button>
			</div>
		</div>
	);
}

interface Props {
	error: Error & { digest?: string };
	reset: () => void;
}
