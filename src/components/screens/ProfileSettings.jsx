import React from 'react';

function ProfileSettings({ onLogout }) {
    return (
        <div className="profile-settings max-w-2xl mx-auto min-h-full px-4 pb-32 animate-fade-in">
            <div className="flex p-6">
                <div className="flex w-full flex-col gap-6 items-center">
                    <div className="flex gap-4 flex-col items-center">
                        <div className="relative">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFgKKvnJTgQc_lDMEJRoNXdeb3UflqcKBv-9U_6hyCM_Of7wbwO2ULUl1begIL8M3bmHq8-tuCsHOEI051_9Y5D8DfbwC3tniGhYL6tC9ChxnZPOj657G3vHNP6qyeDbtM2fK7gxG_IPABpqVDEq3ltDvdlsOuAn2967XH-jFumUjnvCw_mUEccTqEgxEY50ns6Twecx_a6K6_Fdg9CiWskqGU8GixaR83rfRqfYP9BTuGYTiQMIx1yn_6Xm1rRT2mgrVAFOPO_Kc")' }}
                            ></div>
                            <div className="absolute bottom-1 right-1 bg-primary p-1.5 rounded-full border-2 border-background-dark">
                                <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold tracking-tight">Alex Rivera</p>
                            <p className="text-primary font-medium text-sm">Economic Strategist • Level 12</p>
                            <p className="text-muted text-xs mt-1">Member since Oct 2023</p>
                        </div>
                    </div>
                    <button className="btn-primary flex min-w-[140px] items-center justify-center rounded-xl h-11 px-6 text-sm font-bold shadow-lg">
                        <span className="material-symbols-outlined mr-2 text-sm">edit</span>
                        Edit Profile
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 px-2 py-3">
                <div className="flex min-w-[120px] flex-1 flex-col gap-2 rounded-xl border border-primary/10 bg-primary/5 p-5 items-center text-center hover:bg-primary/10 transition-colors shadow-sm">
                    <p className="text-3xl font-bold">24</p>
                    <p className="text-muted text-[10px] uppercase tracking-wider font-extrabold">Sims</p>
                </div>
                <div className="flex min-w-[120px] flex-1 flex-col gap-2 rounded-xl border border-primary/10 bg-primary/5 p-5 items-center text-center hover:bg-primary/10 transition-colors shadow-sm">
                    <p className="text-3xl font-bold">82%</p>
                    <p className="text-muted text-[10px] uppercase tracking-wider font-extrabold">Avg Score</p>
                </div>
                <div className="flex min-w-[120px] flex-1 flex-col gap-2 rounded-xl border border-primary/10 bg-primary/5 p-5 items-center text-center hover:bg-primary/10 transition-colors shadow-sm">
                    <p className="text-3xl font-bold">1.2k</p>
                    <p className="text-muted text-[10px] uppercase tracking-wider font-extrabold">Rank</p>
                </div>
            </div>

            <div className="px-4 pt-6 pb-2">
                <div className="flex justify-between items-end mb-4">
                    <h3 className="text-lg font-bold">Saved Simulations</h3>
                    <a className="text-primary text-sm font-semibold hover:underline cursor-pointer">View All</a>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-transparent hover:border-primary/30 hover:bg-slate-800/60 transition-all cursor-pointer group">
                        <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined">trending_down</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-slate-100">Hyperinflation 2025</p>
                            <p className="text-xs text-slate-400">Mar 12, 2024 • Difficulty: High</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-green-500">92/100</p>
                            <p className="text-[10px] text-slate-500 uppercase">Score</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-transparent hover:border-primary/30 hover:bg-slate-800/60 transition-all cursor-pointer group">
                        <div className="size-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined">oil_barrel</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-slate-100">Energy Crisis: Nordics</p>
                            <p className="text-xs text-slate-400">Feb 28, 2024 • Difficulty: Med</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-primary">78/100</p>
                            <p className="text-[10px] text-slate-500 uppercase">Score</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 pt-8">
                <h3 className="text-lg font-bold mb-4">Settings</h3>
                <div className="space-y-1 bg-slate-800/20 rounded-2xl p-2 border border-white/5">
                    <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">dark_mode</span>
                            <p className="text-sm font-medium">Dark Mode</p>
                        </div>
                        <div className="relative inline-flex items-center cursor-pointer">
                            <div className="w-11 h-6 bg-primary rounded-full"></div>
                            <div className="absolute left-6 w-4 h-4 bg-white rounded-full transition-all"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">notifications</span>
                            <p className="text-sm font-medium">Push Notifications</p>
                        </div>
                        <div className="relative inline-flex items-center cursor-pointer">
                            <div className="w-11 h-6 bg-slate-700 rounded-full"></div>
                            <div className="absolute left-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">lock</span>
                            <p className="text-sm font-medium">Account Privacy</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">sync</span>
                            <p className="text-sm font-medium">Data Synchronization</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                </div>

                <button
                    onClick={onLogout}
                    className="w-full mt-8 py-4 px-4 rounded-xl border border-red-500/20 text-red-500 text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-500/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-sm">logout</span>
                    Log Out
                </button>
            </div>
        </div>
    );
}

export default ProfileSettings;
