import { AlertOctagon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<>
			<head>
				<title>404 - Page Not Found</title>
			</head>
			<body className="from-background to-muted/30 flex min-h-screen items-center justify-center bg-linear-to-b p-4">
				<main className="mx-auto w-full max-w-3xl space-y-8 text-center">
					<div className="animate-bounce">
						<AlertOctagon className="text-destructive/60 mx-auto h-24 w-24" />
					</div>

					<div className="space-y-4">
						<h2 className="text-foreground/80 text-4xl font-bold">
							404 - Страница не найдена
						</h2>
						<p className="text-muted-foreground mx-auto max-w-md text-xl">
							К сожалению, запрашиваемая страница не существует или была
							удалена. Возможно, вы ошиблись в адресе или страница была
							перемещена.
						</p>
					</div>

					<Link
						href="/"
						className="inline-flex transform items-center justify-center rounded-md bg-brand-primary px-8 py-3 text-base font-medium bg-black text-white shadow-lg transition-colors duration-200 hover:-translate-y-0.5 hover:bg-brand-primary/90 hover:shadow-xl"
					>
						Вернуться на главную
					</Link>
				</main>
			</body>
		</>
	);
}
