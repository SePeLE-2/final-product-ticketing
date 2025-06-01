import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import eventRoutes from "@/event/routes";
import newsArticleRoutes from "@/newsArticle/routes";
import paymentRoutes from "@/payment/routes";
import commentRoutes from "./comment/routes";
import reportRoutes from "./report/routes";
import ticketRoutes from "./ticket/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
    ...commonRoutes,
    ...staticPageRoutes,
    ...userRoutes,
    ...roleRoutes,
    ...homeRoutes,
    ...eventRoutes,
    ...reportRoutes,
    ...newsArticleRoutes,
    ...paymentRoutes,
    ...ticketRoutes,
    // ...commentRoutes,
  ])
  return router
}

const MobileRoutes = () => {
  const router = useRoutes([
    ...commonMobileRoutes,
  ])
  return router
}

export { GlobalRoutes, MobileRoutes }
