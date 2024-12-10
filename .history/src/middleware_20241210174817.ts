import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
   publicRoutes: ["/favicon.svg", "/", "/auth(.*)", "/portal(.*)"],
   ignoredRoutes: ["/favicon.svg", "/chatbot"],
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}