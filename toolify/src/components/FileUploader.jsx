import { useRef, useState } from 'react';

export default function FileUploader({
  onFileSelect,
  accept = 'image/*',
  multiple = false,
  label = 'Clique para selecionar ou arraste um arquivo',
}) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = multiple ? e.dataTransfer.files : e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = multiple ? e.target.files : e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    if (multiple && file instanceof FileList) {
      setFileName(`${file.length} arquivo(s) selecionado(s)`);
      onFileSelect(file);
    } else if (file instanceof File) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      style={{
        padding: '32px',
        border: `2px dashed ${dragActive ? '#10b981' : '#2a2a2a'}`,
        borderRadius: '8px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s',
        background: dragActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
      }}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
        style={{ display: 'none' }}
        aria-label="File upload"
      />

      <div>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>
          {fileName ? '✓' : '☁️'}
        </div>

        {fileName ? (
          <div>
            <p style={{ color: '#fff', margin: '0 0 4px 0' }}>{fileName}</p>
            <p style={{ color: '#a0a0a0', margin: '0', fontSize: '12px' }}>Clique para trocar</p>
          </div>
        ) : (
          <div>
            <p style={{ color: '#fff', margin: '0 0 4px 0' }}>{label}</p>
            <p style={{ color: '#a0a0a0', margin: '0', fontSize: '12px' }}>Suportado: {accept}</p>
          </div>
        )}
      </div>
    </div>
  );
}
