import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
   publicRoutes: ["/", "/auth(.*)", "/portal(.*)"],
   ignoredRoutes: ["/chatbot"],
});