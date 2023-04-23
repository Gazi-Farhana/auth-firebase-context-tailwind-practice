import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
    },
  ]);