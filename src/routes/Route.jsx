import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefRecipes from "../components/ChefRecipes";
import PrivateRoutes from "./PrivateRoutes";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
        loader: () => fetch("http://localhost:3000/allData"),
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
        path: "/recipes/:id",
        element: (
          <PrivateRoutes>
            <ChefRecipes />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:3000/allData"),
      },
    ],
  },
]);

export default Route;
