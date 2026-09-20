import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router";

interface Props {
  children: React.ReactNode;
}
function UnauthentifiedLayout({ children }: Props) {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/se-connecter");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <>{children}</>;
}

export default UnauthentifiedLayout;
