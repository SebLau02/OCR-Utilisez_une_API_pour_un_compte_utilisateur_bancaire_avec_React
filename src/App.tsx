import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router";
import { Home, SignIn } from "./pages";
import Circular from "./components/Circular";
import User from "./pages/User/User";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "./store/store";
import { setToken, setUser } from "./store/reducers";
import Cookies from "js-cookie";
import { COOKIE_KEY } from "./config/constant";
import { getProfile } from "./services/auth";

function App() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const storedToken = Cookies.get(COOKIE_KEY);
    if (!storedToken) return;

    getProfile(storedToken).then((profile) => {
      dispatch(setToken(storedToken));
      dispatch(setUser(profile));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
