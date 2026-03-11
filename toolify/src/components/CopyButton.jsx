import { useState } from 'react';

export default function CopyButton({
  text,
  label = 'Copiar',
  className = '',
  variant = 'primary',
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!text) return;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        fallbackCopy();
      });
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-button copy-button-${variant} ${className} ${copied ? 'copied' : ''}`}
      title={label}
      disabled={!text}
      style={{
        padding: '8px 16px',
        background: copied ? '#10b981' : '#2a2a2a',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      <span>{copied ? '✓ Copiado!' : label}</span>
    </button>
  );
}
