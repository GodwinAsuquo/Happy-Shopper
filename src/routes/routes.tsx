import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SignUp";
import Categories from "../pages/shop/Categories";
import LandingPage from "../pages/shop/LandingPage";
import ProductDetails from "../pages/shop/ProductDetails";
import { AppRoute } from "../utils/types";

export const PUBLIC_ROUTES: AppRoute[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/category",
    element: <Categories />,
  },
  {
    path: "/details",
    element: <ProductDetails />,
  },
];

export const PRIVATE_ROUTES: AppRoute[] = [
  {
    path: "/signup",
    element: <Signup />,
  },
];
