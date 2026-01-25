import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Briefcase } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav style={{
      padding: '2rem 0',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(10, 25, 47, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)' }}>
          DZ<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: location.pathname === '/' ? 'var(--accent)' : 'var(--text-secondary)'
            }}
          >
            <FileText size={18} /> Resume
          </Link>
          <Link
            to="/portfolio"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: location.pathname === '/portfolio' ? 'var(--accent)' : 'var(--text-secondary)'
            }}
          >
            <Briefcase size={18} /> Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
