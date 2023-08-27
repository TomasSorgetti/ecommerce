import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Login from "./pages/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./pages/Profile/Profile";

function App() {
  const token = localStorage.getItem("token")
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {typeof token === "string" &&
        <Route path="/profile" element={<Profile />} />
          
        }
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
