import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import CopyButton from '../components/CopyButton';
import Container from '../components/Container';
import './MarkdownPreviewer.css';

const MARKDOWN_TEMPLATE = `# Bem-vindo ao Markdown Previewer!

## Formatação Básica

Este é um parágrafo com **texto em negrito** e *itálico*.

### Listas

- Item 1
- Item 2
- Item 3

1. Primeiro
2. Segundo
3. Terceiro

### Links e Imagens

[Clique aqui](https://example.com)

### Código

Código inline: \`const x = 10\`

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Citação

> Esta é uma citação
> Pode ter múltiplas linhas

---

Edite o lado esquerdo para ver a visualização em tempo real!`;

export default function MarkdownPreviewer() {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState(MARKDOWN_TEMPLATE);

  const handleClear = () => {
    setMarkdown('');
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
        <h1>Markdown Previewer</h1>
        <p>Edite e visualize Markdown em tempo real</p>
      </div>

      <div className="markdown-container">
        <div className="markdown-section">
          <label htmlFor="editor">Editor</label>
          <textarea
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Cole ou escreva seu Markdown aqui..."
            spellCheck="false"
          />
        </div>

        <div className="markdown-section preview-section">
          <label>Visualização</label>
          <div className="markdown-preview">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
      </div>

      <div className="button-group">
        {markdown && (
          <>
            <CopyButton text={markdown} label="Copiar Markdown" variant="primary" />
            <button onClick={handleClear} className="btn btn-secondary">
              Limpar
            </button>
          </>
        )}
      </div>
    </Container>
  );
}
