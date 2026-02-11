import { useState } from "react";
import imageCompression from "browser-image-compression";
import { useNavigate } from "react-router-dom";

export default function Compress() {
  const [original, setOriginal] = useState(null);
  const [compressed, setCompressed] = useState(null);
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  const handleImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setOriginal(URL.createObjectURL(file));

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1280,
      useWebWorker: true,
    };

    try {
      const result = await imageCompression(file, options);

      setCompressed(URL.createObjectURL(result));

      setInfo({
        before: (file.size / 1024).toFixed(2),
        after: (result.size / 1024).toFixed(2),
      });
    } catch (error) {
      alert("Erro ao comprimir imagem");
    }
  };

  const download = () => {
    const a = document.createElement("a");
    a.href = compressed;
    a.download = "imagem-comprimida.jpg";
    a.click();
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>← Voltar</button>

      <h2>Compressor de Imagem</h2>

      <input type="file" accept="image/*" onChange={handleImage} />

      {original && (
        <div className="preview">
          <div>
            <h4>Original</h4>
            <img src={original} width="200" />
          </div>

          {compressed && (
            <div>
              <h4>Comprimida</h4>
              <img src={compressed} width="200" />
            </div>
          )}
        </div>
      )}

      {info && (
        <div>
          <p>Antes: {info.before} KB</p>
          <p>Depois: {info.after} KB</p>

          <button className="btn" onClick={download}>
            Baixar imagem
          </button>
        </div>
      )}
    </div>
  );
}