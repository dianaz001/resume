import React from 'react';
import { MapPin } from 'lucide-react';

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
            <header style={{ padding: '3.5rem 0 2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>DianaZ's Operations Hub</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    <MapPin size={14} /> Toronto
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '650px', lineHeight: 1.7 }}>
                    A personal life management app that centralizes finances, health, rentals, and more into one clean dashboard.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem' }}>
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-secondary)',
                                backgroundColor: 'var(--secondary)',
                                padding: '0.3rem 0.75rem',
                                borderRadius: '16px',
                                border: '1px solid var(--border)'
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingBottom: '6rem' }}>
                {modules.map((mod, index) => (
                    <section
                        key={mod.id}
                        style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            gap: '2.5rem',
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
                            border: '1px solid var(--border)',
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
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{mod.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.7 }}>
                                {mod.description}
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                {mod.features.map((feature) => (
                                    <li
                                        key={feature}
                                        style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            paddingLeft: '1rem',
                                            position: 'relative'
                                        }}
                                    >
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--text-muted)'
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
