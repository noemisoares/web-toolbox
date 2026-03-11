import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyButton from '../components/CopyButton';
import Container from '../components/Container';
import './PasswordGenerator.css';

export default function PasswordGenerator() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const generatePassword = () => {
    const chars = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    };

    let availableChars = '';
    if (options.uppercase) availableChars += chars.uppercase;
    if (options.lowercase) availableChars += chars.lowercase;
    if (options.numbers) availableChars += chars.numbers;
    if (options.symbols) availableChars += chars.symbols;

    if (!availableChars) {
      alert('Selecione pelo menos uma opção');
      return;
    }

    let generated = '';
    for (let i = 0; i < length; i++) {
      generated += availableChars.charAt(
        Math.floor(Math.random() * availableChars.length)
      );
    }
    setPassword(generated);
  };

  const toggleOption = (key) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleClear = () => {
    setPassword('');
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
        <h1>Gerador de Senha</h1>
        <p>Crie senhas fortes e seguras personalizadas</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label htmlFor="length">
            Tamanho da Senha: <strong>{length}</strong>
          </label>
          <input
            id="length"
            type="range"
            min="8"
            max="128"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="form-group options-group">
          <label>Opções</label>
          <div className="checkbox-list">
            {[
              { key: 'uppercase', label: 'Letras maiúsculas (A-Z)' },
              { key: 'lowercase', label: 'Letras minúsculas (a-z)' },
              { key: 'numbers', label: 'Números (0-9)' },
              { key: 'symbols', label: 'Símbolos (!@#$...)' },
            ].map((opt) => (
              <label key={opt.key} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={options[opt.key]}
                  onChange={() => toggleOption(opt.key)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {password && (
          <div className="password-display">
            <input
              type="text"
              value={password}
              readOnly
              className="password-input"
            />
          </div>
        )}

        <div className="button-group">
          <button onClick={generatePassword} className="btn btn-primary" style={{ background: '#10b981', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            🔄 Gerar Senha
          </button>

          {password && (
            <>
              <CopyButton text={password} label="Copiar" variant="primary" />
              <button
                onClick={handleClear}
                className="btn btn-secondary"
              >
                Limpar
              </button>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
