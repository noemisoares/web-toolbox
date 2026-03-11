import ToolCard from '../components/ToolCard';

export default function Home() {
  const tools = [
    { title: 'Comprimir Imagem', description: 'Reduza o tamanho mantendo qualidade', path: '/compress' },
    { title: 'QR Code', description: 'Gere códigos QR personalizados', path: '/qrcode' },
    { title: 'Converter Imagem', description: 'Converta entre formatos PNG, JPG, WEBP', path: '/convert' },
    { title: 'Gerador de Senha', description: 'Crie senhas fortes e seguras', path: '/password-generator' },
    { title: 'Formatador JSON', description: 'Valide, formate e minifique JSON', path: '/json-formatter' },
    { title: 'Base64', description: 'Codifique e decodifique Base64', path: '/base64' },
    { title: 'Paleta de Cores', description: 'Gere paletas de cores harmônicas', path: '/color-palette' },
    { title: 'Markdown', description: 'Visualize Markdown em tempo real', path: '/markdown' },
    { title: 'Timestamp', description: 'Converta timestamps e datas', path: '/timestamp' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)',
      paddingTop: '60px',
      paddingBottom: '60px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', paddingX: '20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#fff',
            margin: '0 0 16px 0',
            background: 'linear-gradient(135deg, #fff 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Web Toolbox
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#a0a0a0',
            margin: '0',
            marginBottom: '12px',
          }}>
            Uma coleção de ferramentas web modernas e poderosas
          </p>
          <div style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #10b981, transparent)',
            margin: '0 auto',
          }} />
        </div>

        {/* Tools Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          paddingX: '20px',
        }}>
          {tools.map((tool) => (
            <ToolCard
              key={tool.path}
              title={tool.title}
              description={tool.description}
              path={tool.path}
              icon={tool.icon}
            />
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid #2a2a2a',
        }}>
          <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>
            © 2026 Web Toolbox. Ferramentas sempre à sua disposição.
          </p>
        </div>
      </div>
    </div>
  );
}