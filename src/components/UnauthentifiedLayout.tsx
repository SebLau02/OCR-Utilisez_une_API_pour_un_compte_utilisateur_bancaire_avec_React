import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router";

function UnauthentifiedLayout() {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) return <Navigate to="/sign-in" replace />;

  return <Outlet />;
}

export default UnauthentifiedLayout;
