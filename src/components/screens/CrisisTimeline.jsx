import React, { useState } from 'react';

function CrisisTimeline() {
    const [currentDay] = useState(15);

    const timelineEvents = [
        { day: 1, title: 'Market Shock', desc: 'First algorithmic divergence detected in high-frequency trading pools.', icon: 'bolt' },
        { day: 5, title: 'Liquidity Crisis', desc: 'Inter-bank lending rates skyrocket as AI-led trust protocols lock up.', icon: 'water_drop' },
        { day: 10, title: 'Bank Runs', desc: 'Retail panic as automated wealth managers liquidate diversified assets.', icon: 'warning' },
        { day: 15, title: 'Systemic Failure', desc: 'Core clearing houses go offline. Global settlements halted indefinitely.', icon: 'emergency_home', active: true },
        { day: 20, title: 'Fed Intervention', desc: 'Emergency manual overrides enacted by global central banks.', icon: 'balance', future: true }
    ];

    return (
        <div className="crisis-timeline max-w-6xl mx-auto py-6 px-4 space-y-8">
            <div className="timeline-viewport relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-800 shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-primary/5 to-background-dark flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 blur-3xl rounded-full"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/20 blur-3xl rounded-full"></div>
                    </div>
                    <div className="relative z-10 text-center animate-fade-in">
                        <span className="material-symbols-outlined text-primary text-6xl mb-4 opacity-50">hub</span>
                        <h2 className="text-3xl font-bold">Day {currentDay}: Systemic Failure</h2>
                        <p className="subtitle mt-2">Network Liquidity: -42.8%</p>
                    </div>
                </div>

                <div className="absolute top-4 left-4">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-white tracking-widest uppercase">Live Simulation</span>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                    <button className="text-white/60 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">fast_rewind</span>
                    </button>
                    <button className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-xl hover:scale-105 active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </button>
                    <button className="text-white/60 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">fast_forward</span>
                    </button>
                </div>
            </div>

            <div className="timeline-scrubber space-y-4 px-2">
                <div className="flex items-center justify-between text-xs font-bold text-muted uppercase tracking-widest">
                    <span>Day 01: Trigger</span>
                    <span className="text-primary">Day 15: Crisis Peak</span>
                    <span>Day 30: Recovery</span>
                </div>
                <div className="relative h-6 flex items-center group cursor-pointer">
                    <div className="absolute w-full h-1.5 bg-slate-800 rounded-full">
                        <div className="h-full bg-primary w-[45%] rounded-full shadow-[0_0_10px_var(--primary)]"></div>
                    </div>
                    <div className="absolute left-[45%] -translate-x-1/2 size-5 bg-white border-4 border-primary rounded-full shadow-lg group-hover:scale-125 transition-transform z-10"></div>
                </div>
            </div>

            <section className="timeline-events-section space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-primary">event_list</span>
                    Crisis Timeline
                </h3>
                <div className="flex overflow-x-auto gap-4 pb-6 custom-scrollbar snap-x">
                    {timelineEvents.map((event, i) => (
                        <div key={i} className={`flex-shrink-0 w-72 p-5 rounded-2xl border snap-start transition-all ${event.active ? 'bg-primary/20 border-primary scale-105 shadow-xl' : 'bg-slate-900/40 border-primary/10 opacity-70 hover:opacity-100 hover:bg-slate-900/60'}`}>
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-xs font-bold uppercase tracking-widest ${event.active ? 'text-primary' : 'text-muted'}`}>Day {event.day}</span>
                                <span className={`material-symbols-outlined text-xl ${event.active ? 'text-primary' : 'text-muted'}`}>{event.icon}</span>
                            </div>
                            <h4 className={`font-bold text-base mb-2 ${event.active ? 'text-white' : 'text-slate-300'}`}>{event.title}</h4>
                            <p className={`text-xs leading-relaxed ${event.active ? 'text-white/80' : 'text-muted'}`}>{event.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default CrisisTimeline;
