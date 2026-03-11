import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploader from '../components/FileUploader';
import DownloadButton from '../components/DownloadButton';
import Container from '../components/Container';

export default function Convert() {
  const [image, setImage] = useState(null);
  const [converted, setConverted] = useState(null);
  const [format, setFormat] = useState('image/png');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      setConverted(null);
    };
    reader.readAsDataURL(file);
  };

  const convert = () => {
    if (!image) return;

    setLoading(true);
    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const data = canvas.toDataURL(format);
      setConverted(data);
      setLoading(false);
    };
  };

  const getFileExtension = () => {
    const formatMap = {
      'image/png': 'png',
      'image/jpeg': 'jpg',
      'image/webp': 'webp',
    };
    return formatMap[format] || 'png';
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
        <h1>Conversor de Imagem</h1>
        <p>Converta suas imagens entre diferentes formatos</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label>Selecione uma imagem</label>
          <FileUploader
            onFileSelect={handleFileSelect}
            accept="image/*"
            label="Clique ou arraste uma imagem"
          />
        </div>

        {image && (
          <>
            <div className="form-group">
              <label htmlFor="format">Formato de saída</label>
              <select
                id="format"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPEG</option>
                <option value="image/webp">WEBP</option>
              </select>
            </div>

            <div className="preview-section">
              <div className="preview-box">
                <h3>Original</h3>
                <img src={image} alt="Original" />
              </div>
              {converted && (
                <div className="preview-box">
                  <h3>Convertida</h3>
                  <img src={converted} alt="Convertida" />
                </div>
              )}
            </div>

            <div className="button-group">
              <button
                onClick={convert}
                className="btn btn-primary"
                disabled={loading || !image}
              >
                {loading ? 'Convertendo...' : 'Converter'}
              </button>

              {converted && (
                <DownloadButton
                  href={converted}
                  filename={`convertida.${getFileExtension()}`}
                  label="Download"
                  variant="primary"
                />
              )}
            </div>
          </>
        )}
      </div>
    </Container>
  );
}