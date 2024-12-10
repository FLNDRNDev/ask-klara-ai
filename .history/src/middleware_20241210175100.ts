import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: ["/", "/auth(.*)", "/portal(.*)"], // Publicly accessible routes
	ignoredRoutes: ["/favicon.svg", "/chatbot"], // Completely bypass middleware for the favicon
});

export const config = {
	matcher: [
		"/((?!.*\\..*|_next).*)", // Match all routes except static files and _next
		"/", // Root route
		"/(api|trpc)(.*)", // API and TRPC routes
	],
};
