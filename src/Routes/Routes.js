import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Enrollment from "../Pages/Enrollment/Enrollment";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Tutorials from "../Pages/Shared/Tutorials/Tutorials";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('http://localhost:5000/courses')
            },
            {
                path:'/tutorials/:id',
                element:<Tutorials></Tutorials>,
                loader:({params}) =>fetch(`http://localhost:5000/tutorials/${params.id}`)
            },
            {
                path:'/tutorial/:id',
                element:<Enrollment></Enrollment>,
            },
            {
                path:'/FA',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path:'*',
        element: <h2 className="text-center">404 page not found</h2>
    }
])