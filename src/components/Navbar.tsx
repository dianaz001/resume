import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Briefcase, FolderOpen, Layers } from 'lucide-react';

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
          Diana Zaraza<span style={{ color: 'var(--accent)' }}>.</span>
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
            <Briefcase size={18} /> Portfolio
          </Link>
          <Link
            to="/project"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: location.pathname === '/project' ? 'var(--accent)' : 'var(--text-secondary)'
            }}
          >
            <FolderOpen size={18} /> Project
          </Link>
          <Link
            to="/projects"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: location.pathname === '/projects' ? 'var(--accent)' : 'var(--text-secondary)'
            }}
          >
            <Layers size={18} /> Projects
          </Link>
          <Link
            to="/resume"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: location.pathname === '/resume' ? 'var(--accent)' : 'var(--text-secondary)'
            }}
          >
            <FileText size={18} /> Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
