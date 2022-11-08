import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import CorsBlog from "../Pages/Blog/BlogComponent/CorsBlog";
import FirebaseBlog from "../Pages/Blog/BlogComponent/FirebaseBlog";
import NodeJsBlog from "../Pages/Blog/BlogComponent/NodeJsBlog";
import PrivetrouteBlog from "../Pages/Blog/BlogComponent/PrivetrouteBlog";
import Category from "../Pages/Category/Category";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import FAQ from "../Pages/FAQ/FAQ";
import Home from '../Pages/Home/Home'
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/SignUp/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/home',
                element : <Home></Home>,
            },
            {
                path : '/courses',
                element : <PrivetRoute><Courses></Courses></PrivetRoute>,
                loader : () => fetch(`https://edu-lab-server-seven.vercel.app/courses`)
            },
            {
                path : '/faq',
                element : <FAQ></FAQ>,
            },
            {
                path : '/blog',
                element : <Blog></Blog>,
            },
            {
                path : '/category/:id',
                element : <Category></Category>,
                loader : ({params}) => fetch(`https://edu-lab-server-seven.vercel.app/category/${params.id}`)
            },
            {
                path : '/course/:id',
                element : <PrivetRoute><CourseDetails></CourseDetails></PrivetRoute>,
                loader : ({params}) => fetch(`https://edu-lab-server-seven.vercel.app/course/${params.id}`)
            },
            {
                path : '/checkout/:id',
                element : <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader : ({params}) => fetch(`https://edu-lab-server-seven.vercel.app/checkout/${params.id}`)
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/login',
                element : <SignIn></SignIn>
            },
            {
                path : '/corsBlog',
                element : <CorsBlog></CorsBlog>
            },
            {
                path : '/fireBaseBlog',
                element : <FirebaseBlog></FirebaseBlog>
            },
            {
                path : '/privetRouteBlog',
                element : <PrivetrouteBlog></PrivetrouteBlog>
            },
            {
                path : '/nodeBlog',
                element : <NodeJsBlog></NodeJsBlog>
            }
        ]
    }
]);