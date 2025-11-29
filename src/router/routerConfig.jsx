import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@templates/MainLayout";
import Home from "@pages/Home";
import coursesRoutes from "@router/routes/courses.jsx";
import profileRoutes from "@router/routes/profile.jsx";



export const router = createBrowserRouter([
    {
        element: (
            <MainLayout />
        ),
        children: [
            { path: "/", element: <Home/> },
            ...profileRoutes,
            ...coursesRoutes,
        ]
    }
])

export default router