import type { Metadata, ResolvingMetadata } from "next";
import type { Locale } from "next-intl";
import type { FC, ReactNode } from "react";

type SearchParams = { [key: string]: string | string[] | undefined };
export interface ParamsWithLocale {
	locale: Locale;
	[key: string]: string;
}

export type PageType<Params extends ParamsWithLocale = ParamsWithLocale> = FC<{
	params: Promise<Params>;
	searchParams: Promise<SearchParams>;
}>;

export type LayoutType<Params extends ParamsWithLocale = ParamsWithLocale> =
	FC<{
		params: Params;
		children: ReactNode;
	}>;

export type ErrorRouteComponent = FC<{
	error: Error;
	reset: () => void;
}>;

export type DynamicMetadata<
	Params extends ParamsWithLocale = ParamsWithLocale,
	SearchParams extends object = object,
> = (
	params: {
		params: Promise<Params>;
		searchParams: Promise<SearchParams>;
	},
	parent: ResolvingMetadata,
) => Promise<Metadata> | Metadata;