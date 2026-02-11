import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Convert() {
  const [image, setImage] = useState(null);
  const [converted, setConverted] = useState(null);
  const [format, setFormat] = useState("image/png");

  const navigate = useNavigate();

  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const convert = () => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const data = canvas.toDataURL(format);
      setConverted(data);
    };
  };

  const download = () => {
    const a = document.createElement("a");
    a.href = converted;

    const ext =
      format === "image/png"
        ? "png"
        : format === "image/jpeg"
        ? "jpg"
        : "webp";

    a.download = `convertido.${ext}`;
    a.click();
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>← Voltar</button>

      <h2>Converter Imagem</h2>

      <input type="file" accept="image/*" onChange={handleFile} />

      <select onChange={(e) => setFormat(e.target.value)}>
        <option value="image/png">PNG</option>
        <option value="image/jpeg">JPG</option>
        <option value="image/webp">WEBP</option>
      </select>

      {image && (
        <>
          <button className="btn" onClick={convert}>
            Converter
          </button>

          <div className="preview">
            <img src={image} width="200" />
            {converted && <img src={converted} width="200" />}
          </div>
        </>
      )}

      {converted && (
        <button className="btn" onClick={download}>
          Baixar
        </button>
      )}
    </div>
  );
}