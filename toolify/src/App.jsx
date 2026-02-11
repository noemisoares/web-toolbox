import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Compress from "./pages/Compress";
import QrCode from "./pages/QrCode";
import Convert from "./pages/Convert";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compress" element={<Compress />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/convert" element={<Convert />} />
      </Routes>
    </BrowserRouter>
  );
}
