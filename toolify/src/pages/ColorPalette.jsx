import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyButton from '../components/CopyButton';
import Container from '../components/Container';
import './ColorPalette.css';

export default function ColorPalette() {
  const navigate = useNavigate();
  const [colors, setColors] = useState([
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
    '#98D8C8',
  ]);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generatePalette = () => {
    const newColors = Array.from({ length: 5 }, () =>
      generateRandomColor()
    );
    setColors(newColors);
  };

  const regenerateColor = (index) => {
    const newColors = [...colors];
    newColors[index] = generateRandomColor();
    setColors(newColors);
  };

  const handleClearPalette = () => {
    generatePalette();
  };

  return (
    <Container>
      <button
        onClick={() => navigate('/')}
        style={{ background: '#10b981', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', marginBottom: '20px' }}
      >
        ← Voltar
      </button>

      <div className="page-header">
        <h1>Gerador de Paleta de Cores</h1>
        <p>Gere combinações de cores aleatórias para seu projeto</p>
      </div>

      <div className="palette-grid">
        {colors.map((color, index) => (
          <div key={index} className="color-card">
            <div
              className="color-preview"
              style={{ backgroundColor: color }}
            />
            <div className="color-info">
              <p className="color-hex">{color}</p>
              <CopyButton text={color} label="Copiar HEX" variant="secondary" />
            </div>
            <button
              onClick={() => regenerateColor(index)}
              className="btn btn-small btn-secondary"
              title="Gerar nova cor"
              style={{ background: '#10b981', color: '#fff', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              🔄
            </button>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button onClick={generatePalette} className="btn btn-primary" style={{ background: '#10b981', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          🔄 Gerar Nova Paleta
        </button>
      </div>
    </Container>
  );
}
