import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";

export default function QrCode() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const navigate = useNavigate();

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "qrcode-toolify.png";
    link.click();
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("Texto copiado!");
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>
        ← Voltar
      </button>

      <h2>Gerador de QR Code</h2>

      <input
        className="input"
        placeholder="Cole um link, telefone ou texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <label>Tamanho:</label>
        <select
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        >
          <option value={150}>Pequeno</option>
          <option value={200}>Médio</option>
          <option value={300}>Grande</option>
        </select>
      </div>

      {text && (
        <>
          <div className="qr-box">
            <QRCodeCanvas value={text} size={size} />
          </div>

          <button className="btn" onClick={downloadQR}>
            Baixar QR Code
          </button>

          <button className="btn" onClick={copyText}>
            Copiar texto
          </button>
        </>
      )}
    </div>
  );
}
