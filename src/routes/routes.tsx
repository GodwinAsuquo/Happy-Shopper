import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SignUp";
import LandingPage from "../pages/shop/LandingPage";
import { AppRoute } from "../utils/types";

export const PUBLIC_ROUTES: AppRoute[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  }
];

export const PRIVATE_ROUTES: AppRoute[] = [
  {
    path: "/signup",
    element: <Signup />,
  },
];
