import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import AdoptionList from "./pages/AdoptionList";
import Vaccines from "./pages/Vaccines";
import Chat from "./pages/Chat";
import PetDetails from "./pages/PetDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route path="/adoption/:type" element={<AdoptionList />} />
        <Route path="/vaccines" element={<Vaccines />} />
        <Route path="/chat/:room" element={<Chat />} />
        <Route path="/pet/:id" element={<PetDetails />} />

      </Routes>
    </BrowserRouter>
  );
}
