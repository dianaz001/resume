import { Mail, Linkedin, Phone, MapPin, User, BrainCircuit, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume: React.FC = () => {
    return (
        <div className="container">
            {/* Hero Section */}
            <header style={{ padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Diana Zaraza</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Operations Specialist | Systems Builder | AI-Augmented Workflows
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <a href="mailto:dianalzaraza@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={16} /> dianalzaraza@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/dianazaraza" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Linkedin size={16} /> linkedin.com/in/dianazaraza
                    </a>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <Phone size={16} /> +4167717906
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <MapPin size={16} /> Toronto, Canada
                    </span>
                </div>
            </header>

            {/* Summary */}
            <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    <User size={24} color="var(--accent)" />
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Summary</h2>
                </div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    Operations specialist with a bias toward action and a track record of building systems that move fast. I take ambiguous problems, figure out the right tools (including AI agents), and own the outcome end to end. At Ecosi, I reduced operational cycle times by 25% and cut manual tasks by 40% by designing and automating workflows across internal platforms. At the University of Toronto, I led independent research with minimal oversight, managing competing workstreams and iterating quickly to deliver publishable results.
                </p>
            </section>

            {/* Key Skills */}
            <section style={{ marginTop: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    <BrainCircuit size={24} color="var(--accent)" />
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Key Skills</h2>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {['AI-augmented operations', 'Tooling & systems adaptability', 'Process improvement', 'Communication & relationship management', 'Project management'].map((skill) => (
                        <span
                            key={skill}
                            style={{
                                fontSize: '0.9rem',
                                color: 'var(--accent)',
                                backgroundColor: 'rgba(46, 139, 87, 0.1)',
                                padding: '0.4rem 0.85rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(46, 139, 87, 0.2)'
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section style={{ marginTop: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    <Briefcase size={24} color="var(--accent)" />
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Relevant Experience</h2>
                </div>

                <div style={{ marginBottom: ‘3rem’ }}>
                    <div style={{ display: ‘flex’, justifyContent: ‘space-between’, alignItems: ‘baseline’, marginBottom: ‘0.5rem’ }}>
                        <h3>Research Assistant – Sustainable Systems Research Group</h3>
                        <span style={{ color: ‘var(--text-secondary)’ }}>Sept 2023 – Feb 2026</span>
                    </div>
                    <p style={{ color: ‘var(--accent)’, marginBottom: ‘1rem’ }}>University of Toronto</p>
                    <ul style={{ color: ‘var(--text-secondary)’, paddingLeft: ‘1.2rem’, listStyleType: ‘disc’ }}>
                        <li style={{ marginBottom: ‘0.75rem’ }}>Validated complex model outputs before downstream impact, assessing technical strategies through KPIs and performance metrics to deliver data-driven recommendations that informed large-scale decision-making</li>
                        <li style={{ marginBottom: ‘0.75rem’ }}>Identified process gaps and drove continuous improvement by transitioning manual data collection into automated workflows, improving throughput, data consistency, and overall operational speed</li>
                    </ul>
                </div>

                <div style={{ marginBottom: ‘3rem’ }}>
                    <div style={{ display: ‘flex’, justifyContent: ‘space-between’, alignItems: ‘baseline’, marginBottom: ‘0.5rem’ }}>
                        <h3>Process Analyst</h3>
                        <span style={{ color: ‘var(--text-secondary)’ }}>March 2021 – Aug 2023</span>
                    </div>
                    <p style={{ color: ‘var(--accent)’, marginBottom: ‘1rem’ }}>Ecosi</p>
                    <ul style={{ color: ‘var(--text-secondary)’, paddingLeft: ‘1.2rem’, listStyleType: ‘disc’ }}>
                        <li style={{ marginBottom: ‘0.75rem’ }}>Owned end-to-end execution of operational workflows, leading the implementation and integration of digital tools that reduced cycle times by 25% and cut manual tasks by 40%</li>
                        <li style={{ marginBottom: ‘0.75rem’ }}>Validated and quality-checked outputs before downstream impact by applying data analysis to measure cross-departmental KPIs, presenting findings on dashboards that enabled fast, accurate decision-making</li>
                        <li style={{ marginBottom: ‘0.75rem’ }}>Identified process gaps and drove tooling improvements by researching, evaluating, and implementing project management and analytics software to support multidisciplinary engineering operations at scale</li>
                        <li style={{ marginBottom: ‘0.75rem’ }}>Automated workflows across internal platforms using custom Python integrations and business analytics tools including PowerBI and Zoho Analytics, improving KPI reporting speed by 30%</li>
                        <li style={{ marginBottom: ‘0.75rem’ }}>Managed a portfolio of concurrent workstreams against hard deadlines, coordinating with external vendors and service providers on procurement, onboarding logistics, and platform alignment</li>
                        <li style={{ marginBottom: ‘0.75rem’ }}>Maintained detailed documentation habits across all operational tools (cloud productivity, time-tracking, and file management systems) ensuring platforms evolved with company needs</li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    <GraduationCap size={24} color="var(--accent)" />
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Education</h2>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                        <h3>Master of Applied Science in Engineering</h3>
                        <span style={{ color: 'var(--text-secondary)' }}>Sept 2023 – Sept 2025</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src="/assets/uoft-logo.png" alt="UofT Logo" style={{ width: '40px', height: 'auto' }} />
                        <p style={{ color: 'var(--accent)' }}>University of Toronto</p>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        Relevant courses: Data Analysis, Project Management and Communication
                    </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                        <h3>BASc in Chemical Engineering</h3>
                        <span style={{ color: 'var(--text-secondary)' }}>2014 – 2019</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src="/assets/uis-logo.png" alt="UIS Logo" style={{ width: '40px', height: 'auto', borderRadius: '4px' }} />
                        <p style={{ color: 'var(--accent)' }}>Universidad Industrial de Santander</p>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        Relevant courses: Process Engineering, Business Process Management
                    </p>
                </div>
            </section>

            {/* Awards */}
            <section style={{ paddingBottom: '8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    <Award size={24} color="var(--accent)" />
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Awards</h2>
                </div>
                <div>
                    <h3>Outstanding Student Award</h3>
                    <p style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Universidad Industrial de Santander, 2020</p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Awarded for achieving the highest score in my university’s Chemical Engineering program on the national undergraduate competency exam.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;
