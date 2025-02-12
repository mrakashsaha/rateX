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
import ErrorPage from './components/ErrorPage'
import PrivateRouter from './layouts/PrivateRouter';
import Faqs from './components/Faqs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/faqs",
        element: <Faqs></Faqs>
      },
      {
        path: "/addServices",
        element: <PrivateRouter><AddServices></AddServices></PrivateRouter>
      },
      {
        path: "/myReviews",
        element: <PrivateRouter><MyReviews></MyReviews></PrivateRouter>,
      },
      {
        path: "/myServices",
        element: <PrivateRouter><MyServices></MyServices></PrivateRouter>,
      },
      {
        path: "/serviceDetails/:id",
        element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
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
