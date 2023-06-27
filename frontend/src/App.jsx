// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/Navbar-static/Navbar-static";
import NavbarScroll from "./components/Navbar-scroll/Navbar-scroll";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Record from "./pages/Record/Record";
import Upload from "./pages/Upload/Upload";
import Transcription from "./pages/Transcription/Transcription";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/login" element={<Login />} />,
    <Route path="/signup" element={<SignUp />} />,
    <Route path="/record" element={<Record />} />,
    <Route path="/upload" element={<Upload />} />,
    <Route path="/transcription" element={<Transcription />} />,
    <Route path="/" element={<Navbar />} />,
    <Route path="/nav" element={<NavbarScroll/>} />,
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
