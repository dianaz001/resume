import React from 'react';

interface PortfolioItem {
    id: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
}

interface TimelineGroup {
    period: string;
    items: PortfolioItem[];
}

const timelineData: TimelineGroup[] = [
    {
        period: '2026',
        items: [
            {
                id: 'ai-scaling',
                title: 'AI-Augmented Process Scaling',
                company: '',
                description: 'Utilized LLM-based agents (Claude Code) to transition from manual tasks management to automated, script-driven operation oversight.',
                skills: ['AI Agents', 'LLMs', 'Claude Code', 'Automation']
            }
        ]
    },
    {
        period: '2023 – 2025',
        items: [
            {
                id: 'cdr-research',
                title: 'Carbon Dioxide Removal Assessment',
                company: 'University of Toronto',
                description: 'Applied research assessing carbon dioxide removal (CDR) strategies to support national climate goals. Focused on scalability and sustainability impact.',
                skills: ['Climate Policy', 'Data Analysis', 'Sustainability']
            }
        ]
    },
    {
        period: '2021 – 2023',
        items: [
            {
                id: 'hiring-logistics',
                title: 'Project Management Platform Deployment',
                company: 'Ecosi',
                description: 'Drove cross-functional deployment of a new project management platform in partnership with engineering, owning adoption and workflow integration end-to-end.',
                skills: ['HR Ops', 'Logistics', 'Platform Deployment']
            },
            {
                id: 'workflow-automation',
                title: 'Internal Workflow Automation',
                company: 'Ecosi',
                description: 'Designed and automated workflows between internal tools, reducing manual tasks by 40% and improving KPI reporting speed by 30%.',
                skills: ['Process Engineering', 'Automation', 'KPI Tracking']
            },
            {
                id: 'operations-systematization',
                title: 'Operations Systematization',
                company: 'Ecosi',
                description: 'Led the implementation and integration of new digital tools, achieving a 25% reduction in operational cycle times across the company.',
                skills: ['Digital Transformation', 'System Integration', 'Cycle Time Reduction']
            }
        ]
    }
];

const Portfolio: React.FC = () => {
    return (
        <div className="container">
            <header style={{ padding: '3.5rem 0 2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Portfolio</h1>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '550px' }}>
                    Selected projects and achievements from my professional journey.
                </p>
            </header>

            <div style={{ paddingBottom: '6rem' }}>
                {timelineData.map((group, groupIndex) => (
                    <div key={group.period} style={{ display: 'flex', gap: '2rem', marginBottom: groupIndex < timelineData.length - 1 ? '0' : '0' }}>
                        {/* Left: period label + line */}
                        <div style={{
                            width: '120px',
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            paddingTop: '1.5rem',
                            position: 'relative'
                        }}>
                            <span style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: 'var(--heading-secondary)',
                                fontFamily: "'Source Serif 4', Georgia, serif",
                                whiteSpace: 'nowrap'
                            }}>
                                {group.period}
                            </span>
                        </div>

                        {/* Center: vertical line + dots */}
                        <div style={{
                            width: '24px',
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            {/* Dot */}
                            <div style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--accent)',
                                marginTop: '1.65rem',
                                zIndex: 1,
                                flexShrink: 0
                            }} />
                            {/* Line */}
                            {groupIndex < timelineData.length - 1 && (
                                <div style={{
                                    width: '2px',
                                    flexGrow: 1,
                                    backgroundColor: 'var(--border)',
                                    marginTop: '0.5rem'
                                }} />
                            )}
                        </div>

                        {/* Right: cards */}
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem',
                            padding: '1rem 0 2.5rem'
                        }}>
                            {group.items.map((item) => (
                                <div
                                    key={item.id}
                                    style={{
                                        backgroundColor: 'var(--white)',
                                        borderRadius: '12px',
                                        border: '1px solid var(--border)',
                                        padding: '1.25rem 1.5rem',
                                        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                                        cursor: 'default'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                                        e.currentTarget.style.borderColor = '#D1D5DB';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{item.title}</h3>
                                        {item.company && (
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.company}</span>
                                        )}
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                                        {item.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    color: 'var(--text-secondary)',
                                                    backgroundColor: 'var(--secondary)',
                                                    padding: '0.2rem 0.6rem',
                                                    borderRadius: '12px',
                                                    border: '1px solid var(--border)'
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
