import { Link, useNavigate } from "react-router";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import { CircleUser, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { logout } from "../store/reducers";

function TopBar() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="d-flex justify-space-between align-center px-2 py-1">
        <Link to="/">
          <img
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
            style={{
              maxWidth: 200,
            }}
          />
        </Link>

        {user ? (
          <div className="d-flex align-center gap-2 gap-sm-0">
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
                minWidth: "fit-content",
                fontSize: "1rem",
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
    </>
  );
}

export default TopBar;
