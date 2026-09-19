import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { Home, SignIn } from "./pages";
import Circular from "./components/Circular";
import User from "./pages/User/User";

function App() {
  return (
    <Suspense fallback={<Circular />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/se-connecter" element={<SignIn />} />
        <Route path="/user/:id" element={<User />}>
          <Route index element={<User />} />
          <Route path="transactions">
            {/* <Route index element={<Transactions />} />
            <Route path=":transactionId" element={<Transaction />} /> */}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
