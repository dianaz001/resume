import React from 'react';

interface Module {
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

const modules: Module[] = [
    {
        id: 'grocery',
        title: 'Grocery Expenses',
        description: 'Tracks grocery spending across Toronto stores with receipt scanning, automatic categorization, and budget insights.',
        features: ['Receipt scanning & OCR', 'Category breakdowns & allocation charts', 'Monthly spending trends with 3-month averages', 'Multi-store tracking (No Frills, Costco, T&T, etc.)'],
        image: '/assets/opendoor-grocery.png'
    },
    {
        id: 'health',
        title: 'Health & Lab Results',
        description: 'Parses lab reports to display key biomarkers with status indicators, making it easy to track health trends over time.',
        features: ['Lab report upload & parsing', 'Biomarker cards with status indicators', 'Historical trend tracking', 'Support for multiple providers (LifeLabs, etc.)'],
        image: '/assets/opendoor-health.png'
    },
    {
        id: 'rentals',
        title: 'Toronto Rentals',
        description: 'A rental search tool with interactive map integration to streamline apartment hunting in Toronto.',
        features: ['Interactive map with listing pins', 'Price comparison across neighborhoods', 'Listing details with photos', 'Rating and scoring system'],
        image: '/assets/opendoor-rentals.png'
    }
];

const techStack = [
    'React', 'TypeScript', 'Supabase', 'Vite', 'Claude Code', 'Vercel'
];

const Project: React.FC = () => {
    return (
        <div className="container">
            <header style={{ padding: '4rem 0 2rem' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Personal Project
                </p>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>DianaZ's Operations Hub</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '650px' }}>
                    A personal life management app that centralizes finances, health, rentals, and more into one clean dashboard.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            style={{
                                fontSize: '0.8rem',
                                color: 'var(--accent)',
                                backgroundColor: 'rgba(46, 139, 87, 0.1)',
                                padding: '0.3rem 0.75rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(46, 139, 87, 0.2)'
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '8rem' }}>
                {modules.map((mod, index) => (
                    <section
                        key={mod.id}
                        style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            gap: '3rem',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        {/* Screenshot */}
                        <div style={{
                            flex: '1 1 55%',
                            minWidth: '300px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            boxShadow: 'var(--shadow)'
                        }}>
                            <img
                                src={mod.image}
                                alt={mod.title}
                                style={{
                                    width: '100%',
                                    display: 'block'
                                }}
                            />
                        </div>

                        {/* Details */}
                        <div style={{ flex: '1 1 35%', minWidth: '260px' }}>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{mod.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                                {mod.description}
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {mod.features.map((feature) => (
                                    <li
                                        key={feature}
                                        style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)',
                                            paddingLeft: '1.25rem',
                                            position: 'relative'
                                        }}
                                    >
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--accent)'
                                        }}>
                                            &bull;
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Project;
