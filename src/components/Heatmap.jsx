import React from 'react';

function Heatmap() {
    const sectors = [
        { name: 'FinTech', bg: 'rgba(239, 68, 68, 0.9)' }, // risk-high/90
        { name: 'Energy', bg: 'rgba(239, 68, 68, 0.7)' }, // risk-high/70
        { name: 'Logistics', bg: 'rgba(245, 158, 11, 0.8)' }, // risk-med/80
        { name: 'Real Estate', bg: 'rgba(239, 68, 68, 1)', border: '2px solid var(--primary)', outline: '2px solid var(--background-dark)' }, // risk-high/100
        { name: 'Health', bg: 'rgba(16, 185, 129, 0.4)' }, // risk-low/40
        { name: 'Retail', bg: 'rgba(245, 158, 11, 0.6)' }, // risk-med/60
        { name: 'Agri', bg: 'rgba(239, 68, 68, 0.6)' }, // risk-high/60
        { name: 'Edu', bg: 'rgba(16, 185, 129, 0.3)' } // risk-low/30
    ];

    return (
        <section className="space-y-4" style={{ marginBottom: '1.5rem' }}>
            <div className="flex items-center justify-between px-1" style={{ marginBottom: '1rem' }}>
                <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">grid_view</span>
                    Vulnerability Heatmap
                </h3>
                <span className="text-xs text-primary font-bold">BY SECTOR</span>
            </div>

            <div className="heatmap-grid" style={{ marginBottom: '1rem' }}>
                {sectors.map((sector, index) => (
                    <div
                        key={index}
                        className="heatmap-cell"
                        style={{
                            backgroundColor: sector.bg,
                            border: sector.border || 'none',
                            boxShadow: sector.outline ? `0 0 0 2px var(--background-dark), 0 0 0 4px var(--primary)` : 'none'
                        }}
                    >
                        <span className="text-[10px] leading-tight font-black uppercase">
                            {sector.name}
                        </span>
                    </div>
                ))}
            </div>

            <p className="text-xs text-muted px-1" style={{ fontStyle: 'italic' }}>
                Concentrated risk detected in Real Estate debt instruments. High contagion potential.
            </p>
        </section>
    );
}

export default Heatmap;
