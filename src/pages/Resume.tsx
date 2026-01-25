import { Mail, Linkedin, Phone, MapPin, User, BrainCircuit, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume: React.FC = () => {
    return (
        <div className="container">
            {/* Hero Section */}
            <header style={{ padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Diana Zaraza</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Operations Systematization | Coordination | Sustainability
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
                    Chemical Engineering professional and University of Toronto MASc graduate with a track record of optimizing technical systems and workflows.
                    Proficient in autonomous workflow architecting, leveraging Claude Code agents to transition business operations from manual processes to scalable, automated digital infrastructure.
                    Proven ability to reduce cycle times and manual tasks in high-growth, sustainability-focused environments.
                </p>
            </section>

            {/* Key Skills */}
            <section style={{ marginTop: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    <BrainCircuit size={24} color="var(--accent)" />
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Key Skills</h2>
                </div>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Automation & Systems:</strong> Workflow automation, digital tool integration
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Business Operations:</strong> Internal tools management, process documentation
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>AI-Enabled Process Scaling:</strong> Utilizing LLM-based agents (Claude Code) to transition from manual tasks management to automated, script-driven operation oversight
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Independent Work:</strong> Effective time management
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Communication:</strong> Strong verbal and written skills
                    </li>
                </ul>
            </section>

            {/* Experience */}
            <section style={{ marginTop: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    <Briefcase size={24} color="var(--accent)" />
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Relevant Experience</h2>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                        <h3>Research Assistant – Sustainable Systems Research Group</h3>
                        <span style={{ color: 'var(--text-secondary)' }}>Sept 2023 – Nov 2025</span>
                    </div>
                    <p style={{ color: 'var(--accent)', marginBottom: '1rem' }}>University of Toronto</p>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                        <li>Conducted applied research on assessing carbon dioxide removal strategies to support national climate goals.</li>
                        <li>Co-supervised by Dr. Heather Maclean and Dr. Bradley Saville.</li>
                        <li>Relevant skills: organization, attention to detail, verbal and written communication.</li>
                    </ul>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                        <h3>Process Analyst</h3>
                        <span style={{ color: 'var(--text-secondary)' }}>March 2021 – Aug 2023</span>
                    </div>
                    <p style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Ecosi</p>

                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', marginTop: '1rem', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Operations Systematization:</strong> Led the implementation and integration of new digital tools, achieving a 25% reduction in operational cycle times.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Workflow Automation:</strong> Designed and automated workflows between internal tools, reducing manual tasks by 40% and improving KPI reporting speed by 30%.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Systems Management:</strong> Managed internal operational tools (cloud productivity suite, time-tracking, Dropbox), ensuring platforms remained aligned with evolving company needs.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Data Organization:</strong> Established scalable folder structures and naming conventions, optimizing the company’s file management system.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Financial Administration:</strong> Liaised with bookkeepers for budget tracking and reconciliation while managing digital tool procurement.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Hiring Logistics:</strong> Collaborated with HR to deploy a new hiring platform and supported end-to-end onboarding coordination.
                        </li>
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
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coat_of_arms_classic.png" alt="UofT Logo" style={{ width: '40px', height: 'auto' }} />
                        <p style={{ color: 'var(--accent)' }}>University of Toronto</p>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        Relevant courses: Data Analysis, Project Management and Communication, Strategies for achieving Net-Zero
                    </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                        <h3>BASc in Chemical Engineering</h3>
                        <span style={{ color: 'var(--text-secondary)' }}>2014 – 2019</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src="https://media.licdn.com/dms/image/v2/C4E0BAQHkEwD-G3zGhg/company-logo_200_200/company-logo_200_200/0/1630656094605?e=1745452800&v=beta&t=H3-w2tGqH7T9zOq7gq6o2R8sR5o3P5g6l7sq5z5o5q5" alt="UIS Logo" style={{ width: '40px', height: 'auto', borderRadius: '4px' }} />
                        <p style={{ color: 'var(--accent)' }}>Universidad Industrial de Santander</p>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        Relevant courses: Bioprocesses I&II, Business Process Management, Finance for Engineers
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
