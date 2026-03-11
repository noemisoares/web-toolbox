export default function DownloadButton({
  href,
  filename = 'download',
  label = 'Download',
  className = '',
  variant = 'primary',
}) {
  const handleDownload = () => {
    if (!href) return;

    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`download-button download-button-${variant} ${className}`}
      title={`Download ${filename}`}
      disabled={!href}
      style={{
        padding: '8px 16px',
        background: '#10b981',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      <span>↓ {label}</span>
    </button>
  );
}
