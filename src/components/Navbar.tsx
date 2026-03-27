import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const linkStyle = (path: string) => ({
    fontSize: '0.95rem',
    fontWeight: 400 as const,
    color: location.pathname === path ? 'var(--text-primary)' : 'var(--text-secondary)',
    transition: 'color 0.2s ease',
    padding: '0.25rem 0',
    borderBottom: location.pathname === path ? '2px solid var(--text-primary)' : '2px solid transparent',
  });

  return (
    <nav style={{
      padding: '1.25rem 0',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          fontFamily: "'Source Serif 4', Georgia, serif",
          letterSpacing: '-0.01em'
        }}>
          Diana Zaraza
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={linkStyle('/')}>Project</Link>
          <Link to="/portfolio" style={linkStyle('/portfolio')}>Portfolio</Link>
          <Link to="/resume" style={linkStyle('/resume')}>Resume</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
