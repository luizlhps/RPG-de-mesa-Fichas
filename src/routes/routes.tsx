import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import All from "../Pages/All";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      element: <App />,
  
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/all',
          element: <All />,
        },
      ],
    },
  ]);