import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyButton from '../components/CopyButton';
import Container from '../components/Container';
import './Base64Tool.css';

export default function Base64Tool() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');
  const [error, setError] = useState('');

  const encode = () => {
    if (!text) return;
    setError('');
    try {
      const encoded = btoa(unescape(encodeURIComponent(text)));
      setEncoded(encoded);
    } catch (err) {
      setError('Erro ao codificar');
    }
  };

  const decode = () => {
    if (!text) return;
    setError('');
    try {
      const decoded = decodeURIComponent(escape(atob(text)));
      setDecoded(decoded);
    } catch (err) {
      setError('Erro ao decodificar: Base64 inválido');
    }
  };

  const swap = () => {
    if (!text) return;
    setError('');
    try {
      if (encoded) {
        // Se temos encoded, decodificar
        const decoded = decodeURIComponent(escape(atob(encoded)));
        setDecoded(decoded);
      } else if (decoded) {
        // Se temos decoded, codificar
        const encoded = btoa(unescape(encodeURIComponent(decoded)));
        setEncoded(encoded);
      }
    } catch (err) {
      setError('Erro ao processar');
    }
  };

  const handleClear = () => {
    setText('');
    setEncoded('');
    setDecoded('');
    setError('');
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
        <h1>Base64 Encoder/Decoder</h1>
        <p>Codifique texto para Base64 ou decodifique Base64 para texto</p>
      </div>

      <div className="base64-container">
        <div className="base64-section">
          <div className="form-group">
            <label htmlFor="text">Insira Texto ou Base64</label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Cole seu texto ou Base64"
              spellCheck="false"
            />
          </div>

          <div className="button-group">
            <button
              onClick={encode}
              className="btn btn-primary"
              disabled={!text}
            >
              Codificar para Base64
            </button>

            <button
              onClick={decode}
              className="btn btn-secondary"
              disabled={!text}
            >
              Decodificar Base64
            </button>
          </div>
        </div>

        <div className="base64-outputs">
          {encoded && (
            <div className="base64-result">
              <h3>Encoded (Base64)</h3>
              <textarea
                value={encoded}
                readOnly
                spellCheck="false"
              />
              <CopyButton text={encoded} label="Copiar" variant="primary" />
            </div>
          )}

          {decoded && (
            <div className="base64-result">
              <h3>Decoded (Texto)</h3>
              <textarea
                value={decoded}
                readOnly
                spellCheck="false"
              />
              <CopyButton text={decoded} label="Copiar" variant="primary" />
            </div>
          )}
        </div>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {(text || encoded || decoded) && (
        <div className="button-group" style={{ marginTop: 'var(--spacing-lg)' }}>
          <button onClick={handleClear} className="btn btn-secondary">
            Limpar Tudo
          </button>
        </div>
      )}
    </Container>
  );
}
