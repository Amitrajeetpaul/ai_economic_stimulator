import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-slate-900/95 border border-white/10 p-3 rounded-lg shadow-xl backdrop-blur-md">
                <p className="font-bold text-white text-sm mb-1">{data.name}</p>
                <p className="text-xs text-slate-300">Failure Probability: <span className="text-white font-mono">{data.score.toFixed(1)}%</span></p>
            </div>
        );
    }
    return null;
};

function SimulationResults({ onReplay }) {
    // Dynamic Gapminder Bar Rank Data
    const [barData, setBarData] = useState([
        { name: 'Financial Markets', score: 92, fill: '#ef4444' }, // red-500
        { name: 'Supply Chain', score: 74, fill: '#f87171' }, // red-400
        { name: 'Energy Grid', score: 45, fill: '#fb923c' }, // orange-400
        { name: 'Healthcare', score: 28, fill: '#facc15' }, // yellow-400
        { name: 'Telecom', score: 15, fill: '#4ade80' } // green-400
    ]);

    // Simulate animated evolution typical of Gapminder
    useEffect(() => {
        const interval = setInterval(() => {
            setBarData(prev => prev.map(item => ({
                ...item,
                score: Math.min(100, Math.max(0, item.score + (Math.random() * 10 - 5)))
            })).sort((a, b) => b.score - a.score));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="simulation-results max-w-2xl mx-auto py-10 px-6 space-y-10">
            <div className="results-hero text-center animate-fade-in">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-red-500/10 text-red-500 mb-6 border border-red-500/20">
                    <span className="material-symbols-outlined text-5xl">warning</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">
                    Economic Damage Score: <span className="text-red-500">8.4/10</span>
                </h1>
                <p className="subtitle mt-3 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    High Crisis Severity Level
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass p-6 rounded-2xl border-slate-200/20">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-muted">GDP Drop</p>
                        <span className="material-symbols-outlined text-red-500">trending_down</span>
                    </div>
                    <p className="text-3xl font-bold">-4.2%</p>
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-xs">south</span> 1.2% from forecast
                    </p>
                </div>

                <div className="glass p-6 rounded-2xl border-slate-200/20">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-muted">Unemployment</p>
                        <span className="material-symbols-outlined text-red-500">group</span>
                    </div>
                    <p className="text-3xl font-bold">+3.5%</p>
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-xs">north</span> 0.8% weekly spike
                    </p>
                </div>
            </div>

            <section className="sector-report glass p-6 rounded-2xl border-slate-200/20">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-orange-400">bar_chart</span>
                            Dynamic Sector Failure Risk
                        </h3>
                        <p className="text-[10px] text-muted tracking-widest uppercase mt-1">Live AI Simulation Forecast</p>
                    </div>
                </div>

                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis type="number" domain={[0, 100]} hide={true} />
                            <YAxis
                                type="category"
                                dataKey="name"
                                stroke="rgba(255,255,255,0.5)"
                                tick={{ fill: '#cbd5e1', fontSize: 12 }}
                                width={120}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                            <Bar dataKey="score" radius={[0, 4, 4, 0]} animationDuration={1000}>
                                {barData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>

            <div className="results-actions flex flex-col gap-3">
                <button onClick={onReplay} className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg">
                    <span className="material-symbols-outlined">refresh</span>
                    Replay Simulation
                </button>
                <button className="btn-secondary w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold">
                    <span className="material-symbols-outlined">description</span>
                    Export Full Report
                </button>
            </div>
        </div>
    );
}

export default SimulationResults;
