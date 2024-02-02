import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Footer } from "./layouts/Footer";
import { User } from "./pages/User";
import { useSelector } from "react-redux";

function App() {
  const authState = useSelector((state) => state.auth);
  const isConnected = authState.isConnected;
  const token = authState.token;


  return (
    <>
      <Navbar isConnected={isConnected}/>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {isConnected && <Route path="/user" element={<User token={token} />} />}
        </Routes>
      </>
      <Footer />
    </>
  );
}

export default App;
