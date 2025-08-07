import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./homepage"
import { authRoute } from "./auth.route"
import { dasboardRoute } from "./dashboard"
import { landingRoute } from "./landing"
import { indexRoute } from "./index"
import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([
    indexRoute,
    homePageRoute,
    authRoute,
    dasboardRoute,
    landingRoute
])