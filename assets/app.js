// start the Stimulus application
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./src/pages/Home";
import Client from "./src/pages/client";
import Product from "./src/pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/client",
    element: <Client />
  },
  {
    path: "/product",
    element: <Product />
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={router} /> )