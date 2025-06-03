"use client";

import { AlertCircle } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="ru">
            <body>
                <main className="flex min-h-screen items-center justify-center bg-linear-to-b from-gray-50 to-gray-100 p-4">
                    <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-6 text-center shadow-lg">
                        <div className="animate-bounce">
                            <AlertCircle className="mx-auto h-16 w-16 text-red-500" />
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Упс! Что-то пошло не так 🙈
                            </h1>

                            <p className="text-gray-600">
                                Не волнуйтесь, наши разработчики уже получили
                                сигнал SOS и спешат на помощь!
                            </p>

                            <div className="rounded-md bg-gray-100 p-4 text-left">
                                <code className="text-sm text-red-600">
                                    {error.message}
                                </code>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => reset()}
                            className="mt-6 w-full bg-blue-600 transition-colors duration-200 hover:bg-blue-700"
                        >
                            🚀 Давайте попробуем еще раз
                        </button>

                        <p className="mt-4 text-sm text-gray-500">
                            P.S. Если проблема повторяется, попробуйте выключить
                            и включить 😉
                        </p>
                    </div>
                </main>
            </body>
        </html>
    );
}
