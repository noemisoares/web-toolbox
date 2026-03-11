export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: '#111',
      borderBottom: '1px solid #2a2a2a',
      padding: '16px 24px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ color: '#10b981', fontSize: '1.25rem', fontWeight: 600 }}>
          Web Toolbox
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        </nav>
      </div>
    </header>
  );
}
