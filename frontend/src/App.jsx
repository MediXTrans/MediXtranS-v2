import Navbar from "./components/Navbar-static/Navbar-static";
import NavbarScroll from "./components/Navbar-scroll/Navbar-scroll";
import {Login,Register,Upload,Transcription,Record} from "./pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

export const server = "https://medixtrans.onrender.com/api/v2/users";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/login" element={<Login />} />,
    <Route path="/register" element={<Register />} />,
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
