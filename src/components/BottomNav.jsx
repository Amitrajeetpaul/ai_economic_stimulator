import React from 'react';

function BottomNav({ activeView, setActiveView, onTriggerAnalysis, isAnalyzing }) {
    const navItems = [
        { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
        { id: 'insights', icon: 'insights', label: 'Insights' },
        { id: 'timeline', icon: 'history', label: 'Timeline' },
        { id: 'settings', icon: 'settings', label: 'Settings' }
    ];

    return (
        <nav className="bottom-nav">
            {navItems.slice(0, 2).map(item => (
                <button
                    key={item.id}
                    className={`nav-item ${activeView === item.id ? 'active' : ''}`}
                    onClick={() => setActiveView(item.id)}
                >
                    <span className="material-symbols-outlined">{item.icon}</span>
                </button>
            ))}

            <button
                className={`center-bolt-btn ${isAnalyzing ? 'analyzing' : ''}`}
                onClick={onTriggerAnalysis}
                title="Analyze Markets"
            >
                <span className="material-symbols-outlined text-white text-3xl">bolt</span>
            </button>

            {navItems.slice(2).map(item => (
                <button
                    key={item.id}
                    className={`nav-item ${activeView === item.id ? 'active' : ''}`}
                    onClick={() => setActiveView(item.id)}
                >
                    <span className="material-symbols-outlined">{item.icon}</span>
                </button>
            ))}
        </nav>
    );
}

export default BottomNav;
