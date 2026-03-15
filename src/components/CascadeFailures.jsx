import React from 'react';

function CascadeFailures() {
    const failures = [
        {
            title: 'Liquidity Freeze',
            time: 'T + 12h',
            desc: 'Tier-1 banks expected to halt interbank lending following automated margin calls.',
            icon: 'account_balance',
            severity: 'high'
        },
        {
            title: 'Algorithm Volatility',
            time: 'T + 18h',
            desc: 'Positive feedback loops in HFT algorithms triggering 15% flash-crash across APAC markets.',
            icon: 'terminal',
            severity: 'med'
        },
        {
            title: 'Sovereign Debt Default',
            time: 'T + 36h',
            desc: 'Emerging markets lose ability to roll over short-term dollar-denominated debt.',
            icon: 'public',
            severity: 'low'
        }
    ];

    return (
        <section className="space-y-4 pb-20">
            <div className="flex items-center justify-between px-1" style={{ marginBottom: '1rem' }}>
                <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">rebase_edit</span>
                    Predicted Cascade Failures
                </h3>
            </div>

            <div className="space-y-3">
                {failures.map((f, i) => (
                    <div key={i} className={`cascade-item ${f.severity}`}>
                        <div className="cascade-icon-box">
                            <span className="material-symbols-outlined">{f.icon}</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center" style={{ marginBottom: '0.25rem' }}>
                                <h4 className="text-sm font-bold uppercase" style={{ color: 'var(--text-dark)' }}>{f.title}</h4>
                                <span className="tag-pill">{f.time}</span>
                            </div>
                            <p className="text-xs text-muted" style={{ lineHeight: 1.5 }}>{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CascadeFailures;
