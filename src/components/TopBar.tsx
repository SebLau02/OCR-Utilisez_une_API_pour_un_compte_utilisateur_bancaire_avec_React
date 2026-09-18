import { Link } from "react-router";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import { CircleUser } from "lucide-react";

function TopBar() {
  return (
    <nav className="d-flex justify-space-between align-center px-2 py-1">
      <img
        src={ArgentBankLogo}
        alt="Argent Bank Logo"
        style={{
          maxWidth: 200,
        }}
      />
      <Link to="/se-connecter" className="d-flex align-center gap-1 font-bold">
        <CircleUser size={18} />
        Sign In
      </Link>
    </nav>
  );
}

export default TopBar;
