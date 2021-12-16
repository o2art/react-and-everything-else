import { useAuth } from "../firebase";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const currentUser = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};
