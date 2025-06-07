import type { Metadata, ResolvingMetadata } from "next";
import type { FC, ReactNode } from "react";

type SearchParams = { [key: string]: string | string[] | undefined };
export interface ParamsWithLocale {
	id: string;
	[key: string]: string;
}

export type PageType<Params extends ParamsWithLocale = ParamsWithLocale> = FC<{
	searchParams: Promise<SearchParams>;
	params: Promise<Params>;
}>;

export type LayoutType = FC<{
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
