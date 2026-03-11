import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyButton from '../components/CopyButton';
import Container from '../components/Container';
import './TimestampConverter.css';

export default function TimestampConverter() {
  const navigate = useNavigate();
  const [timestamp, setTimestamp] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [result, setResult] = useState('');
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  useEffect(() => {
    // Set current datetime in the input
    const now = new Date();
    const isoString = now.toISOString().slice(0, 16);
    setDateTime(isoString);
  }, []);

  const convertTimestampToDate = () => {
    if (!timestamp) return;
    try {
      const ts = parseInt(timestamp);
      if (isNaN(ts)) {
        setResult('Timestamp inválido');
        return;
      }
      const date = new Date(ts * 1000);
      setResult(date.toString());
    } catch (err) {
      setResult('Erro ao converter');
    }
  };

  const convertDateToTimestamp = () => {
    if (!dateTime) return;
    try {
      const date = new Date(dateTime);
      const ts = Math.floor(date.getTime() / 1000);
      setResult(ts.toString());
    } catch (err) {
      setResult('Erro ao converter');
    }
  };

  const handleClear = () => {
    setTimestamp('');
    setDateTime('');
    setResult('');
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
        <h1>Conversor de Timestamp</h1>
        <p>Converta entre timestamp Unix e data/hora legível</p>
      </div>

      <div className="timestamp-container">
        <div className="timestamp-section">
          <h3>Timestamp → Data</h3>
          <div className="form-group">
            <label htmlFor="timestamp">Timestamp (em segundos)</label>
            <input
              id="timestamp"
              type="text"
              placeholder="Ex: 1699564800"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
            />
          </div>
          <button
            onClick={convertTimestampToDate}
            className="btn btn-primary"
            disabled={!timestamp}
          >
            Converter
          </button>
        </div>

        <div className="timestamp-section">
          <h3>Data → Timestamp</h3>
          <div className="form-group">
            <label htmlFor="datetime">Data e Hora</label>
            <input
              id="datetime"
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />
          </div>
          <button
            onClick={convertDateToTimestamp}
            className="btn btn-primary"
            disabled={!dateTime}
          >
            Converter
          </button>
        </div>
      </div>

      {result && (
        <div className="result-section">
          <p className="result-label">Resultado:</p>
          <div className="result-box">
            <p className="result-value">{result}</p>
            <CopyButton text={result} label="Copiar" variant="primary" />
          </div>
        </div>
      )}

      <div className="timezone-info">
        <p>Timezone: <strong>{timezone}</strong></p>
      </div>

      <div className="button-group">
        {(timestamp || dateTime || result) && (
          <button onClick={handleClear} className="btn btn-secondary">
            Limpar
          </button>
        )}
      </div>
    </Container>
  );
}
