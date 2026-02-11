import { useState } from "react";
import imageCompression from "browser-image-compression";

export default function Compress() {
  const [result, setResult] = useState(null);

  const handleImage = async (e) => {
    const file = e.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1200,
    };

    const compressed = await imageCompression(file, options);
    setResult(URL.createObjectURL(compressed));
  };

  return (
    <div>
      <h2>Comprimir Imagem</h2>

      <input type="file" onChange={handleImage} />

      {result && <img src={result} width="200" />}
    </div>
  );
}
