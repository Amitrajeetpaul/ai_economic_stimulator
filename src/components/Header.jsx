import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
                <div>
                    <h1 className="text-sm font-bold tracking-tight uppercase text-primary" style={{ opacity: 0.8 }}>Simulator Phase IV</h1>
                    <p className="text-xs text-muted">Real-time AI Synthesis</p>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="icon-button">
                    <span className="material-symbols-outlined text-muted">search</span>
                </button>
                <button className="icon-button relative">
                    <span className="material-symbols-outlined text-muted">notifications</span>
                    <span className="absolute" style={{ top: '0.25rem', right: '0.25rem', width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--risk-high)', borderRadius: '50%', border: '1px solid var(--background-dark)' }}></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
