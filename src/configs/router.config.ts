export const Router = {
	homePage: "/",
	postsPage: "/posts",
	postItemPage: (id: string) => `/posts/${id}`,
	worksPage: "/works",
	workItemPage: (id: string) => `/works/${id}`,
} as const;
