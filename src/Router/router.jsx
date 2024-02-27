import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element:<Login></Login>
        },
        {
            path: "/register",
            element:<Register></Register>
        },
        {
            path: "/dashboard",
            element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);

  export default router;