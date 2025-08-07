import { createRoute, redirect } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    beforeLoad: async ({ context }) => {
        try {
            const { queryClient, store } = context;
            const { getCurrentUser } = await import("../api/user.api");
            const { login } = await import("../store/slice/authSlice");
            
            const user = await queryClient.ensureQueryData({
                queryKey: ["currentUser"],
                queryFn: getCurrentUser,
            });
            
            if (user) {
                store.dispatch(login(user));
                const { isAuthenticated } = store.getState().auth;
                if (isAuthenticated) {
                    throw redirect({ to: "/shorten" });
                }
            }
            
            throw redirect({ to: "/landing" });
        } catch (error) {
            if (error.redirect) {
                throw error; // Re-throw redirect
            }
            throw redirect({ to: "/landing" });
        }
    }
})
