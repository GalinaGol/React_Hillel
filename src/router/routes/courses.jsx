import CourseInfo from "@pages/CourseInfo";
import Courses from "@pages/Courses";

export default [
    { path: "/courses", element: <Courses /> },
    { path: "/courses/:id", element: <CourseInfo /> }
]