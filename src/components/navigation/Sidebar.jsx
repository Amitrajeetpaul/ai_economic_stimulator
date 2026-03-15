import React from 'react';

function Sidebar({ activeView, setActiveView, user }) {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', section: 'Main' },
        { id: 'insights', label: 'AI Insights', icon: 'insights', section: 'Main' },
        { id: 'indicators', label: 'Eco Indicators', icon: 'monitoring', section: 'Main' },
        { id: 'simulation', label: 'Simulation Lab', icon: 'hub', section: 'Main' },
        { id: 'scenario-builder', label: 'Scenario Builder', icon: 'analytics', section: 'Main' },
        { id: 'shocks', label: 'Shock Control', icon: 'bolt', section: 'Main' },
        { id: 'interactive-shocks', label: 'Interactive Shocks', icon: 'offline_bolt', section: 'Main' },
        { id: 'nodes', label: 'Global Network', icon: 'public', section: 'Main' },
        { id: 'alerts', label: 'Risk Alerts', icon: 'notification_important', section: 'Main', badge: 3 },
        { id: 'history', label: 'History', icon: 'history', section: 'Management' },
        { id: 'settings', label: 'Settings', icon: 'settings', section: 'Management' }
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-box">
                    <span className="material-symbols-outlined">query_stats</span>
                </div>
                <h1 className="logo-text">CrisisSim AI</h1>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {index > 0 && menuItems[index - 1].section !== item.section && (
                            <div className="nav-section-label">{item.section}</div>
                        )}
                        <button
                            onClick={() => setActiveView(item.id)}
                            className={`sidebar-link ${activeView === item.id ? 'active' : ''}`}
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="link-label">{item.label}</span>
                            {item.badge && <span className="nav-badge">{item.badge}</span>}
                        </button>
                    </React.Fragment>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="user-glass-card">
                    <div className="user-avatar">
                        <span className="material-symbols-outlined">person</span>
                    </div>
                    <div className="user-info">
                        <p className="user-name">{user?.name || 'Guest User'}</p>
                        <p className="user-role">{user?.role || 'Lead Economist'}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
