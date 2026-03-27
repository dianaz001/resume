import React from 'react';
import { Target, Cpu, TrendingUp, Users, LayoutDashboard } from 'lucide-react';

interface PortfolioItem {
    id: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
    placeholderIcon: React.ReactNode;
    category: string;
    image: string;
}

const portfolioData: PortfolioItem[] = [
    {
        id: 'opendoor-grocery',
        title: 'Opendoor — Grocery Expense Tracker',
        company: 'Personal Project',
        description: 'Built a personal finance dashboard that tracks grocery spending across Toronto stores, with receipt scanning, category breakdowns, monthly trends, and budget allocation views.',
        skills: ['Full-Stack Development', 'Data Visualization', 'Supabase', 'React'],
        placeholderIcon: <LayoutDashboard size={24} />,
        category: 'Software',
        image: '/assets/opendoor-grocery.png'
    },
    {
        id: 'opendoor-health',
        title: 'Opendoor — Health & Lab Results',
        company: 'Personal Project',
        description: 'Designed a health tracking module that parses lab reports, displays key biomarkers with status indicators, and tracks trends over time for proactive health management.',
        skills: ['Health Data', 'Document Parsing', 'UX Design', 'React'],
        placeholderIcon: <LayoutDashboard size={24} />,
        category: 'Software',
        image: '/assets/opendoor-health.png'
    },
    {
        id: 'opendoor-rentals',
        title: 'Opendoor — Toronto Rental Search',
        company: 'Personal Project',
        description: 'Created a rental search tool with interactive map integration, listing comparisons, and neighborhood scoring to streamline apartment hunting in Toronto.',
        skills: ['Map Integration', 'Web Scraping', 'Geospatial Data', 'React'],
        placeholderIcon: <LayoutDashboard size={24} />,
        category: 'Software',
        image: '/assets/opendoor-rentals.png'
    },
    {
        id: 'cdr-research',
        title: 'Carbon Dioxide Removal Assessment',
        company: 'University of Toronto',
        description: 'Applied research assessing carbon dioxide removal (CDR) strategies to support national climate goals. Focused on scalability and sustainability impact.',
        skills: ['Climate Policy', 'Data Analysis', 'Sustainability'],
        placeholderIcon: <TrendingUp size={24} />,
        category: 'Research',
        image: '/assets/cdr-research.png'
    },
    {
        id: 'ai-scaling',
        title: 'AI-Enabled Process Scaling',
        company: '',
        description: 'Utilized LLM-based agents (Claude Code) to transition from manual tasks management to automated, script-driven operation oversight.',
        skills: ['AI Agents', 'LLMs', 'Claude Code', 'Automation'],
        placeholderIcon: <Cpu size={24} />,
        category: 'Operations',
        image: '/assets/ai-scaling.png'
    },
    {
        id: 'operations-systematization',
        title: 'Operations Systematization',
        company: 'Ecosi',
        description: 'Led the implementation and integration of new digital tools, achieving a 25% reduction in operational cycle times across the company.',
        skills: ['Digital Transformation', 'System Integration', 'Cycle Time Reduction'],
        placeholderIcon: <Target size={24} />,
        category: 'Operations',
        image: '/assets/ops-systematization-new.png'
    },
    {
        id: 'workflow-automation',
        title: 'Internal Workflow Automation',
        company: 'Ecosi',
        description: 'Designed and automated workflows between internal tools, reducing manual tasks by 40% and improving KPI reporting speed by 30%.',
        skills: ['Process Engineering', 'Automation', 'KPI Tracking'],
        placeholderIcon: <Cpu size={24} />,
        category: 'Operations',
        image: '/assets/ops-workflow.png' // Using same style for now or duplicate logic if wanted
    },
    {
        id: 'hiring-logistics',
        title: 'Hiring Platform Deployment',
        company: 'Ecosi',
        description: 'Collaborated with HR to deploy a new hiring platform and supported end-to-end onboarding coordination.',
        skills: ['HR Ops', 'Logistics', 'Platform Deployment'],
        placeholderIcon: <Users size={24} />,
        category: 'Admin',
        image: '/assets/hiring.png'
    }
];

const Portfolio: React.FC = () => {
    return (
        <div className="container">
            <header style={{ padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Portfolio</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Selected projects and achievements from my professional journey.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2.5rem',
                paddingBottom: '8rem'
            }}>
                {portfolioData.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            backgroundColor: 'var(--secondary)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: '1px solid rgba(0, 0, 0, 0.05)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow)';
                            e.currentTarget.style.borderColor = 'var(--accent)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                        }}
                    >
                        {/* Image Section */}
                        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                        </div>

                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{item.title}</h3>
                            {item.company && <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 500 }}>{item.company}</p>}
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                                {item.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                {item.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--accent)',
                                            backgroundColor: 'rgba(46, 139, 87, 0.1)',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '4px',
                                            border: '1px solid rgba(46, 139, 87, 0.2)'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
