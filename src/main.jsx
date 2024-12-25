import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './layouts/Home';
import Login from './layouts/Login';
import Register from './layouts/Register';
import MyReviews from './layouts/MyReviews'
import Root from './Root';
import AuthProvider from './context/AuthProvider';
import Services from './layouts/Services';
import AddServices from './layouts/AddServices';
import MyServices from './layouts/MyServices';
import ServiceDetails from './components/ServiceDetails';
import axiosAPI from './axios/axiosAPI';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addServices",
        element: <AddServices></AddServices>
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/myServices",
        element: <MyServices></MyServices>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) => {
          const response = await axiosAPI.get(`/services/${params.id}`)
          return response.data;

        }
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
