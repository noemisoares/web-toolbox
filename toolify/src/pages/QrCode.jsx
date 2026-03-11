import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import CopyButton from '../components/CopyButton';
import DownloadButton from '../components/DownloadButton';
import Container from '../components/Container';
import './QrCode.css';

export default function QrCode() {
  const [text, setText] = useState('');
  const [size, setSize] = useState(200);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const qrRef = useRef();
  const navigate = useNavigate();

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qrcode.png';
    link.click();
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
        <h1>Gerador de QR Code</h1>
        <p>Transforme links e textos em QR Code</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label htmlFor="text">Texto ou Link</label>
          <input
            id="text"
            type="text"
            placeholder="Cole um link, telefone ou texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="size">Tamanho</label>
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            >
              <option value={150}>Pequeno (150px)</option>
              <option value={200}>Médio (200px)</option>
              <option value={300}>Grande (300px)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fgColor">Cor do QR</label>
            <input
              id="fgColor"
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bgColor">Cor de Fundo</label>
            <input
              id="bgColor"
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
        </div>

        {text && (
          <>
            <div className="qr-preview">
              <div ref={qrRef} className="qr-box">
                <QRCodeCanvas
                  value={text}
                  size={size}
                  fgColor={fgColor}
                  bgColor={bgColor}
                  level="H"
                  includeMargin
                />
              </div>
            </div>

            <div className="button-group">
              <button
                onClick={downloadQR}
                className="btn btn-primary"
              >
                Download PNG
              </button>

              <CopyButton
                text={text}
                label="Copiar Texto"
                variant="secondary"
              />
            </div>
          </>
        )}

        {!text && (
          <div className="alert alert-info">
            Insira um texto ou link para gerar o QR Code
          </div>
        )}
      </div>
    </Container>
  );
}
