import { Link } from 'react-router-dom';
import './ToolCard.css';

export default function ToolCard({ title, description, path, icon: Icon }) {
  return (
    <Link to={path} className="tool-card-button" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
