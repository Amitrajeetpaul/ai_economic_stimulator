import React from 'react';

function SignUpScreen({ onBack, onSignUp }) {
    return (
        <div className="login-screen">
            <div className="auth-mesh-bg"></div>

            <div className="auth-header-nav p-4 flex items-center justify-between w-full max-w-2xl mx-auto absolute top-0">
                <button onClick={onBack} className="glass-icon-btn rounded-full">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-lg font-bold">Create Account</h2>
            </div>

            <main className="auth-main flex flex-col items-center justify-center p-4">
                <div className="max-w-[480px] w-full space-y-8 animate-fade-in">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-2">
                            <span className="material-symbols-outlined text-primary text-4xl">query_stats</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight">AI Economic Crisis Simulator</h1>
                        <p className="subtitle px-8">Join the world's most advanced economic playground.</p>
                    </div>

                    <div className="glass p-8 rounded-2xl space-y-6">
                        <div className="space-y-4">
                            <div className="input-group">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted ml-1 mb-2 block">Full Name</span>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted">person</span>
                                    <input className="login-input" placeholder="John Doe" type="text" />
                                </div>
                            </div>

                            <div className="input-group">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted ml-1 mb-2 block">Email Address</span>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted">alternate_email</span>
                                    <input className="login-input" placeholder="john@example.com" type="email" />
                                </div>
                            </div>

                            <div className="input-group">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted ml-1 mb-2 block">Account Type</span>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted">badge</span>
                                    <select className="login-input appearance-none">
                                        <option value="student">Student</option>
                                        <option value="researcher">Researcher</option>
                                        <option value="policy">Policy Maker</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none">expand_more</span>
                                </div>
                            </div>

                            <div className="input-group">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted ml-1 mb-2 block">Password</span>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted">lock</span>
                                    <input className="login-input" placeholder="••••••••" type="password" />
                                </div>
                            </div>
                        </div>

                        <button onClick={onSignUp} className="btn-primary w-full py-4 rounded-xl text-lg shadow-lg">
                            Start Simulation
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-muted">
                            Already have an account?
                            <button onClick={onBack} className="text-primary font-bold hover:underline ml-1">Log in</button>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="absolute bottom-8 w-full text-center text-xs text-muted">
                © 2024 AI Economic Crisis Simulator. All rights reserved.
            </footer>
        </div>
    );
}

export default SignUpScreen;
