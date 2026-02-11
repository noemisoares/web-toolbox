import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QrCode() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Gerador de QR Code</h2>

      <input
        placeholder="Digite o texto ou link"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      {text && <QRCodeCanvas value={text} size={200} />}
    </div>
  );
}
