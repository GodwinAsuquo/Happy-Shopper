import { useRoutes, useLocation } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";

const PublicRouteWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const PrivateRouteWrapper = () => {
  const routes = useRoutes(PRIVATE_ROUTES);
  return routes;
};

export const Page = () => {
  return <div>index</div>;
};

export const Pages = () => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  return user ? (
    <PrivateRouteWrapper key={location.pathname} />
  ) : (
    <PublicRouteWrapper key={location.pathname} />
  );
};
