// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Project />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>

                <footer style={{
                    textAlign: 'center',
                    padding: '3rem 0',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    borderTop: '1px solid var(--border-light)'
                }}>
                    <p>© {new Date().getFullYear()} Diana Zaraza. Built with React & Vite.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
