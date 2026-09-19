import { CircleUser } from "lucide-react";
import RootLayout from "../../components/RootLayout";
import Input from "../../components/Input/Input";
import CheckBox from "../../components/CheckBox/CheckBox";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getProfile, login } from "../../services/auth";
import Cookies from "js-cookie";
import { COOKIE_KEY, USER_ID_KEY } from "../../config/constant";

function SignIn() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const rememberMe = formData.get("rememberMe") === "on";

    setLoading(true);
    setError(null);

    try {
      const { token } = await login(email, password);
      Cookies.set(COOKIE_KEY, token, rememberMe ? { expires: 1 } : undefined);
      const profile = await getProfile(token);
      Cookies.set(
        USER_ID_KEY,
        profile.id,
        rememberMe ? { expires: 1 } : undefined,
      );
      navigate(`/user/${profile.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connexion impossible");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RootLayout>
      <main
        className="bg-dark-blue d-flex align-center flex-column"
        style={{
          minHeight: "80vh",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="d-flex align-center  mt-6 justify-center flex-column gap-2 bg-secondary p-4"
          style={{
            width: 300,
          }}
        >
          <CircleUser size={18} />
          <h1>Sign In</h1>
          <Input label="Email" id="email" name="email" type="email" required />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            required
          />
          <CheckBox
            label="Remember Me"
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
          />
          {error && <p role="alert">{error}</p>}
          <button type="submit" className="Button-Base" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </main>
    </RootLayout>
  );
}

export default SignIn;
