import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../pages/Booking/Bookings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
])

export default router;