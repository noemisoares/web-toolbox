import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyButton from '../components/CopyButton';
import Container from '../components/Container';
import './JsonFormatter.css';

export default function JsonFormatter() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatJson = () => {
    setError('');
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
    } catch (err) {
      setError(`Erro: ${err.message}`);
    }
  };

  const minifyJson = () => {
    setError('');
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
    } catch (err) {
      setError(`Erro: ${err.message}`);
    }
  };

  const validateJson = () => {
    setError('');
    try {
      JSON.parse(input);
      setError('✓ JSON válido!', 'success');
    } catch (err) {
      setError(`✗ JSON inválido: ${err.message}`);
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
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
        <h1>Formatador de JSON</h1>
        <p>Formate, valide e minifique JSON</p>
      </div>

      <div className="json-container">
        <div className="json-section">
          <label htmlFor="input">Cole seu JSON</label>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Cole um JSON válido, ex: {"name": "John", "age": 30}'
            spellCheck="false"
          />
        </div>

        <div className="json-section">
          <label htmlFor="output">JSON Processado</label>
          <textarea
            id="output"
            value={output}
            readOnly
            placeholder="O resultado aparecerá aqui"
            spellCheck="false"
          />
        </div>
      </div>

      {error && (
        <div className={`alert alert-${error.includes('✓') ? 'success' : 'error'}`}>
          {error}
        </div>
      )}

      <div className="button-group">
        <button onClick={formatJson} className="btn btn-primary" disabled={!input}>
          Formatar
        </button>

        <button onClick={minifyJson} className="btn btn-primary" disabled={!input}>
          Minificar
        </button>

        <button onClick={validateJson} className="btn btn-secondary" disabled={!input}>
          Validar
        </button>

        {output && <CopyButton text={output} label="Copiar" variant="primary" />}

        {(input || output) && (
          <button onClick={handleClear} className="btn btn-secondary">
            Limpar
          </button>
        )}
      </div>
    </Container>
  );
}
