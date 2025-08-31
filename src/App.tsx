import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserSignin from "./pages/UserSignin";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainSignin from "./pages/CaptainSignin";
import UserSignup from "./pages/UserSignup";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userSignup" element={<UserSignup />} />
        <Route path="/userSignin" element={<UserSignin />} />
        <Route path="/captainSignup" element={<CaptainSignup />} />
        <Route path="/captainSignin" element={<CaptainSignin />} />
      </Routes>
    </div>
  );
}
