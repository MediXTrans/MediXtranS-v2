// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/Navbar-static/Navbar-static";
import NavbarScroll from "./components/Navbar-scroll/Navbar-scroll";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Navbar />} />,
    <Route path="/nav" element={<NavbarScroll/>} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/signup" element={<SignUp />} />
  ])
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
