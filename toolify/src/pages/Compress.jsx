import { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useNavigate } from 'react-router-dom';
import FileUploader from '../components/FileUploader';
import DownloadButton from '../components/DownloadButton';
import Container from '../components/Container';
import './Compress.css';

export default function Compress() {
  const [original, setOriginal] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);
  const [compressed, setCompressed] = useState(null);
  const [info, setInfo] = useState(null);
  const [quality, setQuality] = useState(80);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = async (file) => {
    setOriginalFile(file);
    setOriginal(URL.createObjectURL(file));
    setCompressed(null);
    setInfo(null);

    // Auto compress with default quality
    await compressImage(file, quality);
  };

  const compressImage = async (file, qualityValue) => {
    if (!file) return;

    setLoading(true);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1280,
      useWebWorker: true,
      initialQuality: qualityValue / 100,
    };

    try {
      const result = await imageCompression(file, options);
      setCompressed(URL.createObjectURL(result));

      const originalSize = file.size;
      const compressedSize = result.size;
      const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(1);

      setInfo({
        before: (originalSize / 1024).toFixed(2),
        after: (compressedSize / 1024).toFixed(2),
        reduction,
      });
    } catch (error) {
      console.error('Erro ao comprimir:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleQualityChange = async (newQuality) => {
    setQuality(newQuality);
    if (originalFile) {
      await compressImage(originalFile, newQuality);
    }
  };

  return (
    <Container>
      <button
        onClick={() => navigate('/')}
        className="back-link"
        style={{ background: '#10b981', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', marginBottom: '20px' }}
      >
        ← Voltar
      </button>

      <div className="page-header">
        <h1>Compressor de Imagem</h1>
        <p>Reduza o tamanho de suas imagens mantendo qualidade</p>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div className="form-group">
          <label>Selecione uma imagem</label>
          <FileUploader
            onFileSelect={handleFileSelect}
            accept="image/*"
            label="Clique ou arraste uma imagem"
          />
        </div>

        {original && (
          <>
            <div className="form-group">
              <label htmlFor="quality">
                Qualidade: <strong>{quality}%</strong>
              </label>
              <input
                id="quality"
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={(e) => handleQualityChange(Number(e.target.value))}
                disabled={loading}
              />
            </div>

            <div className="preview-section">
              <div className="preview-box">
                <h3>Original</h3>
                <img src={original} alt="Original" />
                {info && <p className="file-size">{info.before} KB</p>}
              </div>

              {compressed && (
                <div className="preview-box">
                  <h3>Comprimida</h3>
                  <img src={compressed} alt="Comprimida" />
                  {info && <p className="file-size">{info.after} KB</p>}
                </div>
              )}
            </div>

            {info && (
              <div className="compress-stats">
                <div className="stat-item">
                  <span className="stat-label">Redução:</span>
                  <span className="stat-value">{info.reduction}%</span>
                </div>
              </div>
            )}

            <div className="button-group">
              {compressed && (
                <DownloadButton
                  href={compressed}
                  filename="imagem-comprimida.jpg"
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