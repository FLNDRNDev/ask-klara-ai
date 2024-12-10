import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: ["/", "/auth(.*)", "/portal(.*)", "/chatbot"],
	ignoredRoutes: ["/favicon.svg"],
});

export const config = {
	matcher: [
		"/((?!.*\\..*|_next).*)", // Match all routes except static files and _next
		"/", // Root route
		"/(api|trpc)(.*)", // API and TRPC routes
	],
};
