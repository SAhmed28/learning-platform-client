import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Courses/Course/Course";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch("http://localhost:5000/courses")
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch("http://localhost:5000/courses")
            },
            {
                path:'/courses/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)            
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
        ]
    }
])