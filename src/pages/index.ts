import { lazy } from "react";

const SignIn = lazy(() => import("./SignIn/SignIn.tsx"));
const Home = lazy(() => import("./Home/Home.tsx"));

export { SignIn, Home };
