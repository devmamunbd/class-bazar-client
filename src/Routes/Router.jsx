import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";

import Instructors from "../Components/Instructors/Instructors";
import Classes from "../Components/Classes/Classes";
import Login from './../pages/Login/Login';
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: "/classes",
            element: <Classes></Classes>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
      ]
    }
  ]);
