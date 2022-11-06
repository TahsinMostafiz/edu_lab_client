import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import FAQ from "../Pages/FAQ/FAQ";
import Home from '../Pages/Home/Home'
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/SignUp/Register";


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
                element : <Courses></Courses>,
                loader : () => fetch(`http://localhost:5000/courses`)
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
                loader : ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path : '/course/:id',
                element : <CourseDetails></CourseDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/login',
                element : <SignIn></SignIn>
            }
        ]
    }
]);