import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  const tools = [
    {
      title: "Comprimir Imagem",
      desc: "Reduza o tamanho das suas imagens sem perder qualidade.",
      path: "/compress"
    },
    {
      title: "Gerar QR Code",
      desc: "Transforme links e textos em QR Code rapidamente.",
      path: "/qrcode"
    },
    {
      title: "Converter Imagem",
      desc: "Converta entre PNG, JPG e WEBP.",
      path: "/convert"
    }
  ];

  return (
    <div className="container">
      <h1>Toolify</h1>
      <p>Sua caixa de ferramentas online</p>

      <div className="grid">
        {tools.map(tool => (
          <div
            key={tool.title}
            className="card"
            onClick={() => navigate(tool.path)}
          >
            <h3>{tool.title}</h3>
            <p>{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}