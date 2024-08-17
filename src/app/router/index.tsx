import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "pages/home";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
