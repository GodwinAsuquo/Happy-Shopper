import { Navigate } from "react-router-dom";
import HomeLayout from "../../src/pages/HomeLayout";
import { AppRoute } from "../utils/types";
import { lazy } from "react";
import withSuspense from "../utils/helpers/withSuspense";

const LandingPage = withSuspense(
  lazy(() => import("../pages/shop/LandingPage"))
);

const Categories = withSuspense(
  lazy(() => import("../../src/pages/shop/Categories"))
);

const ProductDetails = withSuspense(
  lazy(() => import("../../src/pages/shop/ProductDetails"))
);

const CartPage = withSuspense(
  lazy(() => import("../../src/pages/shop/cart/CartPage"))
);

const PersonalDetails = withSuspense(
  lazy(() => import("../../src/pages/shop/checkout/PersonalDetails"))
);

const AddProduct = withSuspense(
  lazy(() => import("../../src/admin/AddProduct"))
);

const Signup = withSuspense(lazy(() => import("../../src/pages/auth/SignUp")));

const Login = withSuspense(lazy(() => import("../../src/pages/auth/Login")));
export const PUBLIC_ROUTES: AppRoute[] = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/category",
        element: <Categories />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <PersonalDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AddProduct />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const PRIVATE_ROUTES: AppRoute[] = [
 
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];
