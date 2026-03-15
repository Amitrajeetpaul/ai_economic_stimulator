import React, { useState } from 'react';

function ScenarioBuilder() {
    const [scenario, setScenario] = useState({
        interestRate: 4.5,
        bankReserves: 12,
        employmentRate: 94.2
    });

    return (
        <div className="scenario-builder max-w-2xl mx-auto py-8 px-4 space-y-8">
            <div className="builder-header">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    New Simulation Scenario
                </h2>
            </div>

            <div className="hero-viz glass rounded-xl border-primary/20">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <p className="hero-tag">Current Model</p>
                    <h3 className="hero-title text-2xl font-bold">Standard Recovery 2024</h3>
                    <p className="hero-subtitle italic">Adjust parameters below to trigger divergence.</p>
                </div>
            </div>

            <section className="params-form space-y-6">
                <div className="section-divider-header">
                    <h3 className="text-lg font-bold">Scenario Parameters</h3>
                </div>

                {/* Interest Rate */}
                <div className="glass param-card">
                    <div className="card-top">
                        <div className="card-label">
                            <span className="material-symbols-outlined text-primary">account_balance</span>
                            <p className="font-medium">Interest Rate</p>
                        </div>
                        <span className="param-value-badge">{scenario.interestRate}%</span>
                    </div>
                    <div className="range-container">
                        <input
                            type="range"
                            className="builder-range"
                            min="0" max="10" step="0.1"
                            value={scenario.interestRate}
                            onChange={(e) => setScenario({ ...scenario, interestRate: e.target.value })}
                        />
                    </div>
                    <div className="range-footer">
                        <span>0.0% (Deflationary)</span>
                        <span>10.0% (Hyper-Restrictive)</span>
                    </div>
                </div>

                {/* Bank Reserves */}
                <div className="glass param-card">
                    <div className="card-top">
                        <div className="card-label">
                            <span className="material-symbols-outlined text-primary">payments</span>
                            <p className="font-medium">Bank Reserves</p>
                        </div>
                        <span className="param-value-badge">{scenario.bankReserves}%</span>
                    </div>
                    <div className="range-container">
                        <input
                            type="range"
                            className="builder-range"
                            min="0" max="30" step="1"
                            value={scenario.bankReserves}
                            onChange={(e) => setScenario({ ...scenario, bankReserves: e.target.value })}
                        />
                    </div>
                    <div className="range-footer">
                        <span>Low Liquidity</span>
                        <span>High Stability</span>
                    </div>
                </div>

                {/* Employment Rate */}
                <div className="glass param-card">
                    <div className="card-top">
                        <div className="card-label">
                            <span className="material-symbols-outlined text-primary">work</span>
                            <p className="font-medium">Employment Rate</p>
                        </div>
                        <span className="param-value-badge">{scenario.employmentRate}%</span>
                    </div>
                    <div className="range-container">
                        <input
                            type="range"
                            className="builder-range"
                            min="50" max="100" step="0.1"
                            value={scenario.employmentRate}
                            onChange={(e) => setScenario({ ...scenario, employmentRate: e.target.value })}
                        />
                    </div>
                    <div className="range-footer">
                        <span>Mass Unemployment</span>
                        <span>Full Employment</span>
                    </div>
                </div>
            </section>

            <section className="builder-actions grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="btn-secondary flex items-center justify-center gap-2 py-4 rounded-xl font-bold">
                    <span className="material-symbols-outlined">save</span>
                    Save Scenario
                </button>
                <button className="btn-primary flex items-center justify-center gap-2 py-4 rounded-xl font-bold shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">compare_arrows</span>
                    Run Comparison
                </button>
            </section>
        </div>
    );
}

export default ScenarioBuilder;
