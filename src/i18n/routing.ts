import { defaultLocale, locales } from "@/configs/i18n.config";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales,
	defaultLocale,
	localePrefix: {
		mode: "as-needed",
	},
	localeDetection: false,
});