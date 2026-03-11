# Web Toolbox 🛠️

Uma coleção moderna de 9 ferramentas web desenvolvidas com **React 19** + **Vite**, com design minimalista em tema escuro e interface altamente responsiva.

## 🚀 Ferramentas Disponíveis

### Imagem
1. **Compressor de Imagem** - Reduza tamanho com slider de qualidade e visualização antes/depois
2. **Conversor de Imagem** - Converta entre PNG, JPG, WEBP com preview
3. **Gerador de QR Code** - Crie QR codes com color picker e diversas tamanhos

### Texto & Dados
4. **Gerador de Senha** - Senha aleatória customizável com tamanho e tipos de caracteres
5. **Formatador JSON** - Formatter/minificador/validador JSON com visualização split
6. **Base64 Encoder/Decoder** - Codifique texto para Base64 e vice-versa

### Design & Conversão
7. **Paleta de Cores** - Gere paletas aleatórias com cópia de HEX
8. **Markdown Previewer** - Editor Markdown com visualização em tempo real
9. **Conversor de Timestamp** - Bidirecional entre Unix timestamp e data

## 🎨 Design System

- **Tema**: Escuro moderno (#0a0a0a fundo, #111111 cards)
- **Accent**: Roxo (#7c3aed)
- **Componentes**: CSS variables + classes utilitárias
- **Responsivo**: Mobile-first com breakpoints em 640px, 768px, 1024px
- **Ícones**: React Icons (456+ ícones disponíveis)

## ⚛️ Stack Técnico

- React 19.2
- Vite 7.3
- React Router DOM 7.13
- Material Icons via react-icons
- React Markdown
- Browser Image Compression

## 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx       # Navbar global
│   ├── ToolCard.jsx     # Card de ferramenta
│   ├── FileUploader.jsx # Upload com drag-drop
│   ├── CopyButton.jsx   # Botão copiar com feedback
│   ├── DownloadButton.jsx
│   └── Container.jsx    # Wrapper com padding/max-width
├── pages/               # Páginas de ferramentas
│   ├── Home.jsx         # Grid de todas as tools
│   ├── Compress.jsx
│   ├── Convert.jsx
│   ├── QrCode.jsx
│   ├── PasswordGenerator.jsx
│   ├── JsonFormatter.jsx
│   ├── Base64Tool.jsx
│   ├── ColorPalette.jsx
│   ├── MarkdownPreviewer.jsx
│   └── TimestampConverter.jsx
├── styles/
│   ├── theme.js         # Design system em JS
│   └── globals.css      # CSS global (500+ linhas)
├── App.jsx              # Router principal
├── App.css              # Estilos específicos da app
└── main.jsx
```

## 🎯 Componentes Reutilizáveis

### FileUploader
Suporta drag-drop e input tradicional
```jsx
<FileUploader 
  onFileSelect={(file) => handleFile(file)}
  accept="image/*"
  label="Escolha uma imagem"
/>
```

### ToolCard
Para navegar entre ferramentas
```jsx
<ToolCard 
  icon={MdIcon}
  title="Ferramenta"
  description="Desc"
  path="/tool-path"
/>
```

### CopyButton & DownloadButton
Com feedback visual e fallback para navegadores antigos
```jsx
<CopyButton text={content} label="Copiar" />
<DownloadButton href={dataUrl} filename="file.png" />
```

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install

# Dev server (http://localhost:5173)
npm run dev

# Build
npm run build

# Preview build
npm npm preview
```

## 🎨 Customização de Cores

Edite [src/styles/globals.css](src/styles/globals.css) para mudar a paleta:
```css
:root {
  --color-accent: #7c3aed; /* Roxo */
  --color-background: #0a0a0a; /* Preto */
  --color-surface: #111111; /* Cards */
  /* ... mais variáveis */
}
```

## 📱 Responsividade

- **Mobile** (<640px): Stack vertical, 1 coluna
- **Tablet** (<1024px): 2 colunas
- **Desktop** (≥1024px): 3 colunas

## 🔧 Dicas de Adição de Nova Ferramenta

1. Criar arquivo em `src/pages/MyTool.jsx`
2. Usar `Container` como wrapper
3. Importar ícone do `react-icons`
4. Adicionar rota em `src/App.jsx`
5. Adicionar card em `src/pages/Home.jsx`

## 📦 Dependências Principais

- **react-icons**: 456+ ícones Material, Bootstrap, Feather etc
- **react-markdown**: Rendering Markdown com suporte a HTML
- **browser-image-compression**: Compressão de imagem sem servidor
- **qrcode.react**: Gerador QR Code

## 🎓 Padrões de Código

- Hooks: `useState`, `useEffect`, `useRef`
- Composição: Props drilling minimizado
- CSS: Classes utilitárias + específicas por componente
- Acessibilidade: Labels semânticas, ARIA quando necessário

## 📝 Licença

Open Source - Use livremente!
