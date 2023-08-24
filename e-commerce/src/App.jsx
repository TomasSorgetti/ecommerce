import {Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home/Home"
import CreateUser from "./pages/Login/Create/CreateUser";
function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createUser" element={<CreateUser/>} />
    </Routes>
  );
}

export default App
