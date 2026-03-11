import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Compress from "./pages/Compress";
import QrCode from "./pages/QrCode";
import Convert from "./pages/Convert";
import PasswordGenerator from "./pages/PasswordGenerator";
import JsonFormatter from "./pages/JsonFormatter";
import Base64Tool from "./pages/Base64Tool";
import ColorPalette from "./pages/ColorPalette";
import MarkdownPreviewer from "./pages/MarkdownPreviewer";
import TimestampConverter from "./pages/TimestampConverter";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compress" element={<Compress />} />
            <Route path="/qrcode" element={<QrCode />} />
            <Route path="/convert" element={<Convert />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="/json-formatter" element={<JsonFormatter />} />
            <Route path="/base64" element={<Base64Tool />} />
            <Route path="/color-palette" element={<ColorPalette />} />
            <Route path="/markdown" element={<MarkdownPreviewer />} />
            <Route path="/timestamp" element={<TimestampConverter />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
