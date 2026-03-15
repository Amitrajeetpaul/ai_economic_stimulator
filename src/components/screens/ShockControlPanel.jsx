import React from 'react';

function ShockControlPanel() {
    const shockVectors = [
        { title: 'Interest Rate Hike (+2%)', desc: 'Instant monetary tightening across all central banks.', icon: 'trending_up', color: 'bg-primary/20', textColor: 'text-primary' },
        { title: 'Major Bank Failure', desc: 'Tier-1 institution collapse. Systemic liquidity drain.', icon: 'account_balance', color: 'bg-warning/20', textColor: 'text-warning' },
        { title: 'Supply Chain Collapse', desc: 'Critical logistics breakdown. Global trade halt.', icon: 'link_off', color: 'bg-primary/20', textColor: 'text-primary' },
        { title: 'Mass Layoffs (5%)', desc: 'Unemployment surge. Consumer confidence drop.', icon: 'person_remove', color: 'bg-danger/20', textColor: 'text-danger' },
        { title: 'Market Flash Crash', desc: 'Algorithmic sell-off. -15% in major indices.', icon: 'flash_on', color: 'bg-danger/20', textColor: 'text-danger' }
    ];

    return (
        <div className="shock-control flex h-full overflow-hidden">
            <div className="flex h-full w-full max-w-sm lg:max-w-md flex-col gap-6 p-6 lg:p-8 glass border-r border-slate-800 shadow-2xl overflow-y-auto shrink-0">
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-muted text-xs font-bold uppercase tracking-widest">System Status</h3>
                        <span className="flex items-center gap-1.5 text-danger text-xs font-bold">
                            <span className="flex size-2 rounded-full bg-danger animate-pulse"></span>
                            CRITICAL
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800/60 border border-slate-700/50 p-4 rounded-2xl shadow-inner">
                            <p className="text-muted text-[10px] uppercase font-black tracking-widest mb-1">Global GDP</p>
                            <p className="text-danger text-2xl font-black">-4.2%</p>
                        </div>
                        <div className="bg-slate-800/60 border border-slate-700/50 p-4 rounded-2xl shadow-inner">
                            <p className="text-muted text-[10px] uppercase font-black tracking-widest mb-1">Instability Index</p>
                            <p className="text-warning text-2xl font-black">88.4</p>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-slate-800/50 w-full"></div>

                <section className="flex flex-col gap-4">
                    <h3 className="text-muted text-xs font-bold uppercase tracking-widest px-1">Available Shock Vectors</h3>
                    <ul className="flex flex-col gap-3">
                        {shockVectors.map((shock, i) => (
                            <li key={i} className="flex flex-col gap-3 bg-slate-800/30 border border-slate-700 p-4 rounded-xl hover:bg-slate-800/50 transition-all group">
                                <div className="flex items-start gap-4">
                                    <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${shock.color} ${shock.textColor} border border-white/5`}>
                                        <span className="material-symbols-outlined">{shock.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-slate-100 text-base font-bold leading-snug">{shock.title}</p>
                                        <p className="text-muted text-sm mt-0.5">{shock.desc}</p>
                                    </div>
                                </div>
                                <button className="w-full py-2.5 px-4 bg-danger/10 hover:bg-danger text-danger hover:text-white border border-danger/30 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">bolt</span>
                                    Trigger Shock
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8 pt-6 border-t border-slate-800">
                    <button className="w-full h-14 bg-danger text-white rounded-xl font-black text-lg tracking-widest shadow-lg shadow-danger/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                        <span className="material-symbols-outlined">skull</span>
                        TOTAL COLLAPSE
                    </button>
                    <p className="text-center text-muted text-[10px] mt-3 font-medium uppercase tracking-tighter italic">Warning: This action is irreversible within the current seed.</p>
                </section>
            </div>

            {/* Background Visual (Hidden on mobile) */}
            <div className="hidden lg:flex flex-1 items-center justify-center bg-[#0c0915] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,53,237,0.1)_0%,transparent_70%)]"></div>
                    <div className="grid grid-cols-12 h-full w-full gap-4 p-4 opacity-5">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="col-span-1 border-r border-slate-400"></div>
                        ))}
                    </div>
                </div>
                <div className="text-center z-10 px-8 animate-fade-in">
                    <span className="material-symbols-outlined text-8xl text-slate-700/50 mb-4 block">public</span>
                    <h2 className="text-slate-500 font-bold text-xl uppercase tracking-widest">Simulator Main Feed</h2>
                    <p className="text-slate-600 mt-2 max-w-sm">Global economic visualization active. Select a shock vector from the sidebar to observe impacts.</p>
                </div>
            </div>
        </div>
    );
}

export default ShockControlPanel;
