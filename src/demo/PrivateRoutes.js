import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated === "true" ? <Outlet /> : <Navigate to="/login" />;
};

export const AuthRoutes = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated === "false" ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" />
  );
};
export default PrivateRoutes;
