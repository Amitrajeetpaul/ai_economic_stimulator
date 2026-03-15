import React, { useState, useEffect, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

function SimulationLab() {
    const [params, setParams] = useState({
        interestRate: 45,
        correlation: 70
    });

    const graphRef = useRef();

    // Generate dynamic network data simulating an economy
    const [graphData] = useState(() => {
        const nodes = [
            { id: 'CB', name: 'Central Bank', group: 'hq', val: 30, color: '#6635ed' },
            { id: 'B1', name: 'Tier 1 Bank A', group: 'bank', val: 20, color: '#3b82f6' },
            { id: 'B2', name: 'Tier 1 Bank B', group: 'bank', val: 20, color: '#3b82f6' },
            { id: 'B3', name: 'Tier 2 Bank', group: 'bank', val: 15, color: '#ef4444' }, // Distressed
            { id: 'C1', name: 'Corp Conglomerate', group: 'biz', val: 12, color: '#10b981' },
            { id: 'C2', name: 'Tech Sector', group: 'biz', val: 10, color: '#10b981' },
            { id: 'C3', name: 'Real Estate', group: 'biz', val: 10, color: '#ef4444' }, // Distressed
            { id: 'H1', name: 'Urban Households', group: 'house', val: 8, color: '#f59e0b' },
            { id: 'H2', name: 'Suburban Households', group: 'house', val: 8, color: '#f59e0b' },
            { id: 'H3', name: 'Rural Households', group: 'house', val: 6, color: '#f59e0b' }
        ];

        const links = [
            { source: 'CB', target: 'B1', value: 10, color: '#6635ed' },
            { source: 'CB', target: 'B2', value: 10, color: '#6635ed' },
            { source: 'CB', target: 'B3', value: 5, color: '#ef4444' },
            { source: 'B1', target: 'C1', value: 8, color: '#3b82f6' },
            { source: 'B1', target: 'C2', value: 6, color: '#3b82f6' },
            { source: 'B2', target: 'C3', value: 7, color: '#ef4444' },
            { source: 'B3', target: 'H1', value: 4, color: '#ef4444' },
            { source: 'B2', target: 'H2', value: 5, color: '#3b82f6' },
            { source: 'C1', target: 'H1', value: 6, color: '#10b981' },
            { source: 'C2', target: 'H2', value: 4, color: '#10b981' },
            { source: 'C3', target: 'H3', value: 3, color: '#ef4444' },
            { source: 'B1', target: 'B2', value: 5, color: '#3b82f6' },
            { source: 'B2', target: 'B3', value: 3, color: '#ef4444' }
        ];

        return { nodes, links };
    });

    const logs = [
        { time: '14:22:01', tag: 'Liquidity Freeze', desc: 'Node BANK_A04 reporting reserve deficit > 15%.', type: 'critical' },
        { time: '14:21:45', tag: 'Asset Revaluation', desc: 'Commercial real estate nodes adjusted -4.2% globally.', type: 'info' },
        { time: '14:21:30', tag: 'Step Complete', desc: 'Cycle T+12 processed across 450 network nodes.', type: 'info' },
        { time: '14:20:12', tag: 'Consumer Warning', desc: 'Household debt-to-income reaching historical peak.', type: 'warning' }
    ];

    // Effect to auto-center the force graph
    useEffect(() => {
        if (graphRef.current) {
            // Give layout a moment to settle
            setTimeout(() => {
                graphRef.current.zoomToFit(400, 50);
            }, 1000);
        }
    }, [graphData]);

    return (
        <div className="simulation-lab">
            <div className="lab-workspace">
                {/* Left Sidebar: Parameters */}
                <aside className="lab-params-sidebar hidden lg:block">
                    <h2 className="sidebar-section-title">Simulation Parameters</h2>
                    <div className="params-list">
                        <div className="param-item">
                            <label className="param-label">Interest Rate (%)</label>
                            <input
                                type="range"
                                className="param-range"
                                value={params.interestRate}
                                onChange={(e) => setParams({ ...params, interestRate: e.target.value })}
                            />
                            <div className="range-labels">
                                <span>0%</span><span>5.25%</span><span>10%</span>
                            </div>
                        </div>

                        <div className="param-item">
                            <label className="param-label">Default Correlation</label>
                            <input
                                type="range"
                                className="param-range"
                                value={params.correlation}
                                onChange={(e) => setParams({ ...params, correlation: e.target.value })}
                            />
                            <div className="range-labels">
                                <span>Low</span><span>High</span>
                            </div>
                        </div>

                        <div className="sidebar-divider"></div>

                        <h3 className="section-subtitle">Node Legend</h3>
                        <div className="legend-list">
                            <div className="legend-item"><span className="dot dot-blue"></span> Banks</div>
                            <div className="legend-item"><span className="dot dot-emerald"></span> Businesses</div>
                            <div className="legend-item"><span className="dot dot-amber"></span> Households</div>
                            <div className="legend-item"><span className="dot dot-red pulse"></span> Critical Stress</div>
                        </div>
                    </div>
                </aside>

                {/* Central Graph Viewport */}
                <section className="graph-viewport network-grid relative flex-1 min-h-[400px] flex flex-col bg-[#0c0915] overflow-hidden">
                    <div className="flex-1 w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/5 relative">
                        <ForceGraph2D
                            ref={graphRef}
                            width={typeof window !== 'undefined' ? window.innerWidth * 0.5 : 800}
                            height={320}
                            graphData={graphData}
                            nodeLabel="name"
                            nodeColor={node => node.color}
                            nodeVal={node => node.val}
                            linkColor={() => 'rgba(255, 255, 255, 0.1)'}
                            linkWidth={link => link.value}
                            d3AlphaDecay={0.01}
                            d3VelocityDecay={0.08}
                            cooldownTicks={100}
                            onEngineStop={() => {
                                if (graphRef.current) {
                                    graphRef.current.zoomToFit(400, 20);
                                }
                            }}
                            enableNodeDrag={true}
                        />
                    </div>

                    {/* Floating Health Card */}
                    <div className="floating-health-card glass absolute top-6 right-6 z-10 w-64 animate-fade-in pointer-events-none">
                        <div className="health-header">
                            <h3 className="health-title text-sm">Network Health</h3>
                            <span className="badge-critical text-[10px]">CRITICAL</span>
                        </div>
                        <div className="health-stats mt-3 space-y-3">
                            <div className="health-stat-item">
                                <div className="stat-info text-xs mb-1 flex justify-between">
                                    <span className="text-slate-400">Leverage Ratio</span>
                                    <span className="val-red font-bold text-red-500">18.4x</span>
                                </div>
                                <div className="progress-bg h-1.5"><div className="progress-bar bg-red-500" style={{ width: '85%' }}></div></div>
                            </div>
                            <div className="health-stat-item">
                                <div className="stat-info text-xs mb-1 flex justify-between">
                                    <span className="text-slate-400">Contagion Prob.</span>
                                    <span className="val-amber font-bold text-amber-500">62.1%</span>
                                </div>
                                <div className="progress-bg h-1.5"><div className="progress-bar bg-amber-500" style={{ width: '62%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Graph Controls */}
                    <div className="graph-controls absolute bottom-6 left-6 z-10 flex gap-2">
                        <button className="control-btn bg-slate-800/80 p-2 rounded-lg border border-white/10 hover:bg-slate-700 transition-colors" onClick={() => graphRef.current.zoom(graphRef.current.zoom() * 1.2, 400)}>
                            <span className="material-symbols-outlined text-white">add</span>
                        </button>
                        <button className="control-btn bg-slate-800/80 p-2 rounded-lg border border-white/10 hover:bg-slate-700 transition-colors" onClick={() => graphRef.current.zoom(graphRef.current.zoom() / 1.2, 400)}>
                            <span className="material-symbols-outlined text-white">remove</span>
                        </button>
                        <button className="control-btn bg-slate-800/80 p-2 rounded-lg border border-white/10 hover:bg-slate-700 transition-colors" onClick={() => graphRef.current.zoomToFit(400, 50)}>
                            <span className="material-symbols-outlined text-white">filter_center_focus</span>
                        </button>
                    </div>
                </section>

                {/* Right Sidebar: Logs */}
                <aside className="lab-logs-sidebar hidden-xl">
                    <h2 className="sidebar-section-title flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">list_alt</span> Live Events
                    </h2>
                    <div className="logs-container">
                        {logs.map((log, i) => (
                            <div key={i} className={`log-entry log-${log.type}`}>
                                <span className="log-time">{log.time}</span>
                                <p className="log-tag">{log.tag}</p>
                                <p className="log-desc">{log.desc}</p>
                            </div>
                        ))}
                    </div>
                    <button className="btn-secondary w-full text-xs mt-4 py-3 rounded-xl font-bold">EXPORT DATA (.JSON)</button>
                </aside>
            </div>
        </div>
    );
}

export default SimulationLab;
