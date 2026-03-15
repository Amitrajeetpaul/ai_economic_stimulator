import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, LineChart, Line, Legend } from 'recharts';

// Meaningful multi-series data for high-fidelity interactive charts
const mockHistory = {
    gdp: [
        { time: '2023 Q1', current: 21.0, average: 20.8 },
        { time: '2023 Q2', current: 21.4, average: 21.0 },
        { time: '2023 Q3', current: 20.9, average: 21.2 },
        { time: '2023 Q4', current: 20.5, average: 21.3 },
        { time: '2024 Q1', current: 21.2, average: 21.1 },
        { time: '2024 Q2', current: 21.4, average: 21.3 }
    ],
    unemployment: [
        { time: '2023 Q1', current: 3.5, average: 4.0 },
        { time: '2023 Q2', current: 3.8, average: 4.0 },
        { time: '2023 Q3', current: 4.2, average: 3.9 },
        { time: '2023 Q4', current: 4.5, average: 3.8 },
        { time: '2024 Q1', current: 4.3, average: 3.9 },
        { time: '2024 Q2', current: 4.2, average: 4.0 }
    ],
    inflation: [
        { time: '2023 Q1', current: 4.2, average: 3.0 },
        { time: '2023 Q2', current: 3.8, average: 2.8 },
        { time: '2023 Q3', current: 3.1, average: 2.5 },
        { time: '2023 Q4', current: 2.4, average: 2.2 },
        { time: '2024 Q1', current: 2.1, average: 2.1 },
        { time: '2024 Q2', current: 2.1, average: 2.0 }
    ],
    liquidity: [
        { time: '2023 Q1', current: 95, average: 90 },
        { time: '2023 Q2', current: 88, average: 89 },
        { time: '2023 Q3', current: 82, average: 88 },
        { time: '2023 Q4', current: 75, average: 87 },
        { time: '2024 Q1', current: 81, average: 86 },
        { time: '2024 Q2', current: 84.2, average: 86 }
    ]
};

const stats = [
    { label: 'GDP Growth', value: '$21.4T', change: '-1.2%', trend: 'down', color: '#ef4444', data: mockHistory.gdp, unit: 'T' },
    { label: 'Unemployment', value: '4.2%', change: '+0.5%', trend: 'up', color: '#10b981', data: mockHistory.unemployment, unit: '%' },
    { label: 'Inflation Rate', value: '2.1%', change: 'Stable', trend: 'neutral', color: '#6366f1', data: mockHistory.inflation, unit: '%' },
    { label: 'Liquidity Index', value: '84.2', change: 'Critical', trend: 'down', color: '#f59e0b', data: mockHistory.liquidity, unit: '' }
];

const recentHistory = [
    { title: 'Scenario: Energy Crisis 2024', duration: '18 months', severity: 'Grade A', impact: '-14.2% Market Cap', time: '2 hours ago', icon: 'trending_down' },
    { title: 'Scenario: Hyperinflation Spiral', duration: '4 years', severity: 'Grade S', impact: '+120% Price Index', time: 'Yesterday', icon: 'payments' }
];

// Gapminder Bubble Chart Data
const bubbleDataAsia = [
    { name: 'China', gdp: 18000, health: 76, size: 1400, fill: '#f59e0b' },
    { name: 'India', gdp: 6000, health: 68, size: 1380, fill: '#f59e0b' },
    { name: 'Japan', gdp: 40000, health: 84, size: 125, fill: '#f59e0b' },
];

const bubbleDataAmericas = [
    { name: 'USA', gdp: 65000, health: 78, size: 330, fill: '#6635ed' },
    { name: 'Brazil', gdp: 15000, health: 75, size: 212, fill: '#6635ed' },
    { name: 'Mexico', gdp: 19000, health: 75, size: 128, fill: '#6635ed' },
];

const bubbleDataEurope = [
    { name: 'Germany', gdp: 53000, health: 81, size: 83, fill: '#10b981' },
    { name: 'UK', gdp: 46000, health: 81, size: 67, fill: '#10b981' },
    { name: 'France', gdp: 45000, health: 82, size: 65, fill: '#10b981' },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-slate-900/95 border border-white/10 p-3 rounded-lg shadow-xl backdrop-blur-md">
                <p className="font-bold text-white text-sm mb-1">{data.name}</p>
                <p className="text-xs text-slate-300">GDP/Capita: <span className="text-white font-mono">${data.gdp.toLocaleString()}</span></p>
                <p className="text-xs text-slate-300">Eco Health Index: <span className="text-white font-mono">{data.health}</span></p>
                <p className="text-xs text-slate-300">Market Size: <span className="text-white font-mono">{data.size}M</span></p>
            </div>
        );
    }
    return null;
};

const StatChartTooltip = ({ active, payload, label, unit }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/95 border border-white/20 p-2 rounded shadow-2xl backdrop-blur-md text-[10px]">
                <p className="text-white font-bold mb-1 border-b border-white/10 pb-1">{label}</p>
                {payload.map((entry, index) => (
                    <div key={index} className="flex justify-between gap-4 py-0.5">
                        <span style={{ color: entry.color }}>{entry.name}:</span>
                        <span className="text-white font-mono">{entry.value}{unit}</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

function MainDashboard() {
    return (
        <div className="dashboard-content">
            <header className="dashboard-header">
                <div className="header-titles">
                    <h2 className="title-text">Global Economic Overview</h2>
                    <p className="subtitle-text">Real-time simulation status: <span className="status-highlight">Stabilized</span></p>
                </div>
                <div className="header-actions">
                    <button className="btn-primary btn-with-icon">
                        <span className="material-symbols-outlined">add_circle</span>
                        New Simulation
                    </button>
                    <button className="glass-icon-btn relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="notification-dot"></span>
                    </button>
                </div>
            </header>

            <div className="dashboard-grid-wrapper">
                <section className="stats-row grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="glass card-stat overflow-hidden relative flex flex-col p-5 min-h-[220px]">
                            <div className="stat-header flex justify-between items-start mb-2">
                                <span className="stat-label text-muted text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                                <span className="stat-badge px-2 py-0.5 rounded text-[10px] font-bold" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>{stat.change}</span>
                            </div>
                            <div className="stat-value text-3xl font-black mb-4 tracking-tight">{stat.value}</div>

                            <div className="flex-grow w-full relative -mx-2">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={stat.data} margin={{ top: 5, right: 5, bottom: 20, left: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                                        <XAxis
                                            dataKey="time"
                                            hide={false}
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 8 }}
                                            interval="preserveStartEnd"
                                        />
                                        <YAxis hide domain={['dataMin - 1', 'dataMax + 1']} />
                                        <Tooltip
                                            content={<StatChartTooltip unit={stat.unit} />}
                                            cursor={{ stroke: stat.color, strokeWidth: 1, strokeDasharray: '3 3' }}
                                        />
                                        <Line
                                            type="monotone"
                                            name="Current"
                                            dataKey="current"
                                            stroke={stat.color}
                                            strokeWidth={3}
                                            dot={{ r: 2, fill: stat.color, strokeWidth: 0 }}
                                            activeDot={{ r: 4, strokeWidth: 0, fill: '#fff' }}
                                            isAnimationActive={true}
                                        />
                                        <Line
                                            type="monotone"
                                            name="Average"
                                            dataKey="average"
                                            stroke="rgba(255,255,255,0.15)"
                                            strokeWidth={2}
                                            strokeDasharray="5 5"
                                            dot={false}
                                            activeDot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="text-[9px] text-muted-foreground mt-2 flex justify-between uppercase tracking-tighter opacity-50">
                                <span>Benchmark: Global Avg</span>
                                <span>Real-time Feed</span>
                            </div>
                        </div>
                    ))}
                </section>

                <div className="main-grid-layout gap-8">
                    <div className="primary-column flex flex-col gap-8">
                        <section className="glass network-preview-card flex flex-col p-6 rounded-2xl border-white/5">
                            <div className="card-header pb-4 border-b border-white/5 flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="card-title text-lg font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">bubble_chart</span>
                                        Gapminder: Wealth vs Health
                                    </h3>
                                    <p className="text-[10px] text-muted tracking-widest uppercase mt-1">Global Market Distribution Setup</p>
                                </div>
                                <div className="legend flex gap-4 text-xs font-semibold">
                                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span> Asia</span>
                                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#6635ed]"></span> Americas</span>
                                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10b981]"></span> Europe</span>
                                </div>
                            </div>
                            <div className="h-80 w-full relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                        <XAxis
                                            type="number"
                                            dataKey="gdp"
                                            name="GDP per Capita"
                                            stroke="rgba(255,255,255,0.2)"
                                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                                            domain={[0, 80000]}
                                            tickFormatter={(val) => `$${val / 1000}k`}
                                        />
                                        <YAxis
                                            type="number"
                                            dataKey="health"
                                            name="Economic Health"
                                            stroke="rgba(255,255,255,0.2)"
                                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                                            domain={[60, 90]}
                                        />
                                        <ZAxis type="number" dataKey="size" range={[50, 2000]} name="Market Size" />
                                        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: 'rgba(255,255,255,0.1)' }} />

                                        <Scatter name="Asia" data={bubbleDataAsia} fillOpacity={0.7} />
                                        <Scatter name="Americas" data={bubbleDataAmericas} fillOpacity={0.7} />
                                        <Scatter name="Europe" data={bubbleDataEurope} fillOpacity={0.7} />
                                    </ScatterChart>
                                </ResponsiveContainer>
                            </div>
                        </section>

                        <section className="history-section mt-8">
                            <h3 className="section-title">
                                <span className="material-symbols-outlined text-primary">history</span>
                                Recent Simulation History
                            </h3>
                            <div className="history-list">
                                {recentHistory.map((item, i) => (
                                    <div key={i} className="glass history-card group">
                                        <div className="history-main">
                                            <div className="history-icon-box">
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="item-title">{item.title}</h4>
                                                <p className="item-meta">Duration: {item.duration} • Severity: {item.severity}</p>
                                            </div>
                                        </div>
                                        <div className="history-side">
                                            <p className="impact-text">{item.impact}</p>
                                            <p className="time-text">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="secondary-column relative flex flex-col gap-6">
                        <div className="glass alert-card-container">
                            <div className="alert-header">
                                <h3 className="alert-title">
                                    <span className="material-symbols-outlined text-red-500">warning</span>
                                    AI Risk Alerts
                                </h3>
                                <span className="alert-badge-top">Critical</span>
                            </div>
                            <div className="alert-list">
                                <div className="alert-item">
                                    <p className="alert-subject">Sudden Liquidity Drop</p>
                                    <p className="alert-body">AI detected a -22% variance in overnight repo markets. High contagion risk detected for EU banking sector.</p>
                                    <div className="alert-actions">
                                        <button className="action-btn-link">Analyze Impact</button>
                                        <button className="action-btn-ghost">Dismiss</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass ai-strategist-card mt-6">
                            <div className="strategist-header">
                                <div className="strategist-avatar">
                                    <span className="material-symbols-outlined">smart_toy</span>
                                </div>
                                <div>
                                    <h3 className="strategist-name">AI Strategist</h3>
                                    <p className="strategist-status">Online & Analyzing</p>
                                </div>
                            </div>
                            <div className="strategist-quote">
                                "Based on current trajectories, I suggest initiating a 'Debt Deleveraging' simulation focused on the G7 nations to prepare for Q4 volatility."
                            </div>
                            <button className="btn-primary w-full shadow-md mt-4">Launch Suggested Sim</button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default MainDashboard;
