import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Resume: React.FC = () => {
    return (
        <div className="container">
            {/* Hero Section */}
            <header style={{ padding: '3.5rem 0 2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Diana Zaraza</h1>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Operations Specialist | Systems Builder | AI-Augmented Workflows
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                    <a href="mailto:dianalzaraza@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Mail size={15} /> dianalzaraza@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/dianazaraza" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Linkedin size={15} /> linkedin.com/in/dianazaraza
                    </a>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                        <Phone size={15} /> +4167717906
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                        <MapPin size={15} /> Toronto, Canada
                    </span>
                </div>
            </header>

            {/* Summary */}
            <section style={{ padding: '1.5rem 0' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Summary</h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                    Operations specialist with a bias toward action and a track record of building systems that move fast. I take ambiguous problems, figure out the right tools (including AI agents), and own the outcome end to end. At Ecosi, I reduced operational cycle times by 25% and cut manual tasks by 40% by designing and automating workflows across internal platforms. At the University of Toronto, I led independent research with minimal oversight, managing competing workstreams and iterating quickly to deliver publishable results.
                </p>
            </section>

            {/* Key Skills */}
            <section style={{ padding: '1.5rem 0' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Key Skills</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['AI-augmented operations', 'Tooling & systems adaptability', 'Process improvement', 'Communication & relationship management', 'Project management'].map((skill) => (
                        <span
                            key={skill}
                            style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-primary)',
                                backgroundColor: 'var(--secondary)',
                                padding: '0.4rem 0.85rem',
                                borderRadius: '20px',
                                border: '1px solid var(--border)'
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section style={{ padding: '1.5rem 0' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Relevant Experience</h2>

                <div style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1rem'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem' }}>Research Assistant - Sustainable Systems Research Group</h3>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Sept 2023 - Feb 2026</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>University of Toronto</p>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        <li style={{ marginBottom: '0.5rem' }}>Validated complex model outputs before downstream impact, assessing technical strategies through KPIs and performance metrics to deliver data-driven recommendations that informed large-scale decision-making</li>
                        <li>Identified process gaps and drove continuous improvement by transitioning manual data collection into automated workflows, improving throughput, data consistency, and overall operational speed</li>
                    </ul>
                </div>

                <div style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1rem'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem' }}>Process Analyst</h3>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>March 2021 - Aug 2023</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>Ecosi</p>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        <li style={{ marginBottom: '0.5rem' }}>Owned end-to-end execution of operational workflows, leading the implementation and integration of digital tools that reduced cycle times by 25% and cut manual tasks by 40%</li>
                        <li style={{ marginBottom: '0.5rem' }}>Validated and quality-checked outputs before downstream impact by applying data analysis to measure cross-departmental KPIs, presenting findings on dashboards that enabled fast, accurate decision-making</li>
                        <li style={{ marginBottom: '0.5rem' }}>Identified process gaps and drove tooling improvements by researching, evaluating, and implementing project management and analytics software to support multidisciplinary engineering operations at scale</li>
                        <li style={{ marginBottom: '0.5rem' }}>Automated workflows across internal platforms using custom Python integrations and business analytics tools including PowerBI and Zoho Analytics, improving KPI reporting speed by 30%</li>
                        <li style={{ marginBottom: '0.5rem' }}>Managed a portfolio of concurrent workstreams against hard deadlines, coordinating with external vendors and service providers on procurement, onboarding logistics, and platform alignment</li>
                        <li>Maintained detailed documentation habits across all operational tools (cloud productivity, time-tracking, and file management systems) ensuring platforms evolved with company needs</li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section style={{ padding: '1.5rem 0' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Education</h2>

                <div style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0.15rem' }}>Master of Applied Science in Engineering</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>University of Toronto - Data Analysis, Project Management and Communication</p>
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Sept 2023 - Sept 2025</span>
                </div>

                <div style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0.15rem' }}>BASc in Chemical Engineering</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Universidad Industrial de Santander - Process Engineering, Business Process Management</p>
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>2014 - 2019</span>
                </div>
            </section>

            {/* Awards */}
            <section style={{ padding: '1.5rem 0 6rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Awards</h2>
                <div style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <h3 style={{ fontSize: '1rem' }}>Outstanding Student Award</h3>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>2020</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                        Awarded for achieving the highest score in the Chemical Engineering program at Universidad Industrial de Santander on the national undergraduate competency exam.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;
