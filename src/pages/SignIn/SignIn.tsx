import { CircleUser } from "lucide-react";
import RootLayout from "../../components/RootLayout";
import Input from "../../components/Input/Input";
import CheckBox from "../../components/CheckBox/CheckBox";

function SignIn() {
  return (
    <RootLayout>
      <main
        className="bg-dark-blue d-flex align-center flex-column"
        style={{
          minHeight: "80vh",
        }}
      >
        <article
          className="d-flex align-center  mt-6 justify-center flex-column gap-2 bg-secondary p-4"
          style={{
            width: 300,
          }}
        >
          <CircleUser size={18} />
          <h1>Sign In</h1>
          <Input label="Username" id="username" type="text" />
          <Input label="Password" id="password" type="password" />
          <CheckBox label="Remember Me" id="rememberMe" type="checkbox" />
          <button className="Button-Base">Sign In</button>
        </article>
      </main>
    </RootLayout>
  );
}

export default SignIn;
