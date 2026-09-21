import { Link } from "react-router";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import { CircleUser, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { logout } from "../store/reducers";
import UnauthentifiedLayout from "./UnauthentifiedLayout";

function TopBar() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <UnauthentifiedLayout>
      <nav className="d-flex justify-space-between align-center px-2 py-1">
        <img
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
          style={{
            maxWidth: 200,
          }}
        />
        {user ? (
          <div className="d-flex align-center gap-2">
            <Link
              to={`/user/${user.id}`}
              className="d-flex align-center gap-1 font-bold"
            >
              <CircleUser size={18} />
              {user.firstName}
            </Link>
            <button
              className="Button-Base variant-text d-flex align-center gap-1"
              style={{
                color: "var(--dark)",
              }}
              onClick={onLogout}
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/sign-in" className="d-flex align-center gap-1 font-bold">
            <CircleUser size={18} />
            Sign In
          </Link>
        )}
      </nav>
    </UnauthentifiedLayout>
  );
}

export default TopBar;
