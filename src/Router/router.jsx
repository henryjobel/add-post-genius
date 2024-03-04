import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Pages/Register/Register";
import Client from "../Pages/Clients/Client";
import Tables from "../Pages/Tables/Tables";
import ClientProfile from "../Components/ClientProfile/ClientProfile";
import UpdateClients from "../Pages/UpdateClients/UpdateClients";

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
        },
        {
          path: "/client-profile",
          element: <ClientProfile></ClientProfile>
        },
        {
          path: "/update-client",
          element:<UpdateClients></UpdateClients>
        }
      ]
    },
  ]);

  export default router;