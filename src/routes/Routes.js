import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Main from "../layout/Main";
import Login from "../login/Login";
import About from "../pages/About";
import Details from "../pages/Details";
import Media from "../pages/Media";
import SignUp from "../signup/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://hashbook-server.vercel.app/allmedias/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default router;