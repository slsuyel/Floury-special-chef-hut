import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';
import Login from '../components/Login';
import Register from '../components/Register';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
   
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: '/login',
        element : <Login/>
      },{
        path : '/register',
        element : <Register/>
      }
    ],
  }
]);

export default Route;
