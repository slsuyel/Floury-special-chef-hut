import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefRecipes from "../components/ChefRecipes";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../components/Blog";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
        loader: () =>
          fetch("https://assignment-server-slsuyel.vercel.app/allData"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/recipes/:id",
        element: (
          <PrivateRoutes>
            <ChefRecipes />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://assignment-server-slsuyel.vercel.app/allData"),
      },
    ],
  },
]);

export default Route;
