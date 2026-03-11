import './Container.css';

export default function Container({
  children,
  className = '',
  maxWidth = 'lg',
}) {
  return (
    <div className={`page-container page-container-${maxWidth} ${className}`}>
      {children}
    </div>
  );
}
