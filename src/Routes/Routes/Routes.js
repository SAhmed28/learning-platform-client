import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Terms from "../../Pages/Terms/Terms";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch("https://learning-platform-server-roan.vercel.app/courses")
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch("https://learning-platform-server-roan.vercel.app/courses")
            },
            {
                path:'/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://learning-platform-server-roan.vercel.app/courses/${params.id}`)            
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://learning-platform-server-roan.vercel.app/courses/${params.id}`)            
            },
            {
                path: '/terms',
                element: <Terms></Terms>
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
    },
    {path: '*', element: <div><h2 className='text-center'>404 Link not Found!</h2></div>},
])