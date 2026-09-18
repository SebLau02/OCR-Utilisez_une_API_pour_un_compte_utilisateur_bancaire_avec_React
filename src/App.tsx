import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { Home, SignIn } from "./pages";
import Circular from "./components/Circular";

function App() {
  return (
    <Suspense fallback={<Circular />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/se-connecter" element={<SignIn />} />
      </Routes>
    </Suspense>
  );
}

export default App;
