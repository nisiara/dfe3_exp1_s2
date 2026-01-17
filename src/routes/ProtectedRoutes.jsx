import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

const ProtectedRoutes = () => {
  const authContext = useContext(AuthenticationContext);

  if (!authContext.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
 
export default ProtectedRoutes;