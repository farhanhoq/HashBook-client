import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Main from "../layout/Main";
import About from "../pages/About";
import Details from "../pages/Details";
import Media from "../pages/Media";

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
                loader: ({params}) => fetch(`http://localhost:5000/allmedias/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])

export default router;