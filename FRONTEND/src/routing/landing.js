import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import LandingPage from "../pages/LandingPage"

export const landingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/landing',
    component: LandingPage,
  })
