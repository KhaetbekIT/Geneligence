import { Link } from "@/i18n/navigation";
import { AlertOctagon } from "lucide-react";

export default function NotFound() {
    return (
        <html lang="ru">
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
                            Global Not Found
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-md text-xl">
                            The requested page could not be found on the server.
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="inline-flex transform items-center justify-center rounded-md bg-brand-primary px-8 py-3 text-base font-medium text-white shadow-lg transition-colors duration-200 hover:-translate-y-0.5 hover:bg-brand-primary/90 hover:shadow-xl"
                    >
                        Return to Homepage
                    </Link>
                </main>
            </body>
        </html>
    );
}
