import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function EconomicIndicators() {
    const [timeframe, setTimeframe] = useState('1M');

    // Gapminder style data - Multiple overlapping areas showing different regional economies
    const chartData = [
        { date: 'Jan 01', northAmerica: 4000, europe: 2400, asia: 2400 },
        { date: 'Jan 05', northAmerica: 3000, europe: 1398, asia: 2210 },
        { date: 'Jan 10', northAmerica: 2000, europe: 9800, asia: 2290 },
        { date: 'Jan 15', northAmerica: 2780, europe: 3908, asia: 2000 },
        { date: 'Jan 20', northAmerica: 1890, europe: 4800, asia: 2181 },
        { date: 'Jan 25', northAmerica: 2390, europe: 3800, asia: 2500 },
        { date: 'Jan 30', northAmerica: 3490, europe: 4300, asia: 2100 },
    ];

    const kpis = [
        { label: 'Global GDP', value: '$84.97T', change: '+1.2%', trend: 'up', color: 'bg-emerald-500', percent: 75 },
        { label: 'Inflation Rate', value: '4.21%', change: '+8.4%', trend: 'up', color: 'bg-rose-500', percent: 50 },
        { label: 'Liquidity Index', value: '64.2', change: 'Stable', trend: 'check', color: 'bg-primary', percent: 66 },
        { label: 'Deficit Ratio', value: '12.8%', change: '-0.4%', trend: 'down', color: 'bg-amber-500', percent: 25 }
    ];

    const sectors = [
        { name: 'Technology', change: '+4.8%', score: 85, color: 'bg-emerald-500' },
        { name: 'Financials', change: '-2.1%', score: 45, color: 'bg-rose-500' },
        { name: 'Energy', change: '+1.2%', score: 60, color: 'bg-emerald-500' },
        { name: 'Healthcare', change: '0.0%', score: 50, color: 'bg-primary/40' },
        { name: 'Real Estate', change: '-5.4%', score: 25, color: 'bg-rose-500' }
    ];

    return (
        <div className="economic-indicators p-8 space-y-8 animate-fade-in">
            <style>{`
        .grid-bg {
          background-image: radial-gradient(circle, rgba(102, 53, 237, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .recharts-tooltip-cursor {
          fill: rgba(255, 255, 255, 0.05);
        }
      `}</style>
            <header className="flex justify-between items-center bg-slate-900/40 p-5 md:p-7 rounded-2xl border border-white/5 backdrop-blur-md">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Economic Indicators</h1>
                    <p className="subtitle mt-1">Real-time simulation data for Project: Global Recession Alpha</p>
                </div>
                <div className="flex gap-4 items-center flex-shrink-0">
                    <div className="bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap min-w-fit">
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Simulation Live</span>
                    </div>
                    <button className="btn-primary px-5 py-2 rounded-lg font-bold flex items-center gap-2 whitespace-nowrap min-w-fit transition-all hover:scale-[1.02]">
                        <span className="material-symbols-outlined text-sm flex-shrink-0">play_arrow</span>
                        Advance Simulation
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi, i) => (
                    <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all group cursor-pointer">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-muted text-xs font-bold uppercase tracking-wider">{kpi.label}</span>
                            <span className={`flex items-center text-[10px] font-black px-2 py-0.5 rounded-full ${kpi.trend === 'up' ? 'text-emerald-400 bg-emerald-400/10' : kpi.trend === 'down' ? 'text-rose-400 bg-rose-400/10' : 'text-primary bg-primary/10'}`}>
                                {kpi.change}
                            </span>
                        </div>
                        <div className="text-2xl font-bold">{kpi.value}</div>
                        <div className="mt-4 progress-bg h-1">
                            <div className={`progress-bar ${kpi.color}`} style={{ width: `${kpi.percent}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8 glass rounded-2xl border-white/5 overflow-hidden flex flex-col">
                    <div className="p-6 flex justify-between items-center border-b border-white/5">
                        <div>
                            <h3 className="font-bold text-lg">GDP Performance Over Time</h3>
                            <p className="text-[10px] text-muted uppercase tracking-widest mt-1">Regional Market Analysis (Gapminder Style)</p>
                        </div>
                        <div className="flex bg-white/5 p-1 rounded-lg">
                            {['1D', '1W', '1M', '1Y', 'ALL'].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTimeframe(t)}
                                    className={`px-3 py-1 text-xs font-bold rounded cursor-pointer transition-colors ${timeframe === t ? 'bg-primary text-white' : 'text-muted hover:text-white'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 relative h-80 flex-1 flex items-end">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={chartData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorNA" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6635ed" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#6635ed" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorEU" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorASIA" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="date" stroke="rgba(255,255,255,0.2)" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis stroke="rgba(255,255,255,0.2)" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                    itemStyle={{ fontWeight: 'bold' }}
                                />
                                <Area type="monotone" dataKey="northAmerica" stroke="#6635ed" fillOpacity={1} fill="url(#colorNA)" />
                                <Area type="monotone" dataKey="europe" stroke="#10b981" fillOpacity={1} fill="url(#colorEU)" />
                                <Area type="monotone" dataKey="asia" stroke="#f59e0b" fillOpacity={1} fill="url(#colorASIA)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 glass rounded-2xl border-white/5 flex flex-col items-center justify-center p-8">
                    <h3 className="font-bold text-lg mb-8">Liquidity Stress Gauge</h3>
                    <div className="relative w-48 h-48">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeDasharray="210 360" strokeLinecap="round" strokeWidth="8" transform="rotate(135 50 50)" />
                            <circle cx="50" cy="50" fill="none" r="45" stroke="#6635ed" strokeDasharray="140 360" strokeLinecap="round" strokeWidth="8" transform="rotate(135 50 50)" className="transition-all duration-1000" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
                            <span className="text-4xl font-bold">64.2</span>
                            <span className="text-xs text-muted font-bold uppercase tracking-widest mt-1">Moderate</span>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="text-xs text-muted font-medium mb-1">Reserves</div>
                            <div className="font-bold">14.2B</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="text-xs text-muted font-medium mb-1">Cash Ratio</div>
                            <div className="font-bold">0.82</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-5 glass rounded-2xl border-white/5 p-6 space-y-6">
                    <h3 className="font-bold text-lg">Sector Performance Matrix</h3>
                    <div className="space-y-6">
                        {sectors.map((sector, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>{sector.name}</span>
                                    <span className={`${sector.color.replace('bg-', 'text-')} font-bold`}>{sector.change}</span>
                                </div>
                                <div className="progress-bg h-2">
                                    <div className={`progress-bar ${sector.color}`} style={{ width: `${sector.score}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-7 glass rounded-2xl border-white/5 p-6 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Global Risk Heatmap</h3>
                        <div className="flex gap-4">
                            <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-muted">
                                <span className="w-2 h-2 rounded-full bg-rose-500"></span> High Risk
                            </span>
                            <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-muted">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Low Risk
                            </span>
                        </div>
                    </div>
                    <div className="relative h-64 rounded-xl bg-primary/5 flex items-center justify-center border border-white/5">
                        <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg"></div>
                        <span className="material-symbols-outlined text-8xl text-primary/20">public</span>
                        {/* Abstract Markers */}
                        <div className="absolute top-1/4 left-1/4 group cursor-pointer">
                            <div className="w-3 h-3 bg-rose-500 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-rose-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 group cursor-pointer">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                        </div>
                        <div className="text-center z-10 px-8">
                            <p className="text-muted text-sm italic font-medium">Geospatial risk visualization active</p>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-between items-center text-xs font-bold text-muted uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-primary">update</span>
                            Updated: 42s ago
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-primary">data_usage</span>
                            Confidence: 98.4%
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-primary/5 border border-primary/20 rounded-2xl p-4 overflow-hidden relative">
                <div className="flex items-center gap-6">
                    <div className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded-md tracking-tighter">FLASH NEWS</div>
                    <div className="flex gap-12 text-xs font-bold text-muted whitespace-nowrap animate-marquee">
                        <span className="flex items-center gap-2"><span className="text-primary">CRYPTO:</span> Bitcoin stabilizes at $64k following Fed announcement.</span>
                        <span className="flex items-center gap-2"><span className="text-rose-500">WARNING:</span> Potential bank run detected in simulation quadrant 4-C.</span>
                        <span className="flex items-center gap-2"><span className="text-emerald-500">TECH:</span> AI-driven automation boosts manufacturing productivity by 15%.</span>
                        <span className="flex items-center gap-2"><span className="text-primary">FOREX:</span> USD gains strength against major European currencies.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}



export default EconomicIndicators;
