import { lazy } from "react";

const SignIn = lazy(() => import("./SignIn/SignIn.tsx"));
const Home = lazy(() => import("./Home/Home.tsx"));
const Transactions = lazy(() => import("./Transactions/Transactions.tsx"));
const TransactionCategory = lazy(
  () => import("./TransactionCategory/TransactionCategory.tsx"),
);

export { SignIn, Home, Transactions, TransactionCategory };
