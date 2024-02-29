import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Pages/Register/Register";
import Client from "../Pages/Clients/Client";
import Tables from "../Pages/Tables/Tables";

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
        },
        {
          path: "/clients",
          element:<Client></Client>
        },
        {
          path: "/tables",
          element: <Tables></Tables>
        }
      ]
    },
  ]);

  export default router;