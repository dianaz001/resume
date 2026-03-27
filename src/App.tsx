// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Projects from './pages/Projects';

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Portfolio />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>

                <footer style={{
                    textAlign: 'center',
                    padding: '4rem 0',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    <p>© {new Date().getFullYear()} Diana Zaraza. Built with React & Vite.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
