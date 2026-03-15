import React from 'react';

function RiskScore({ isAnalyzing }) {
    return (
        <section className="score-section risk-glow-red" style={{ marginBottom: '1.5rem' }}>
            <div className="bg-icon">
                <span className="material-symbols-outlined text-9xl">warning</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="text-xs font-bold tracking-widest uppercase text-muted">Systemic Risk Score</h2>

                <div className="relative flex items-center justify-center">
                    <svg style={{ width: '12rem', height: '12rem', transform: 'rotate(-90deg)' }}>
                        <circle cx="96" cy="96" r="88" fill="transparent" stroke="var(--border-light)" strokeWidth="8"></circle>
                        <circle
                            cx="96" cy="96" r="88"
                            fill="transparent"
                            stroke={isAnalyzing ? 'var(--primary)' : 'var(--risk-high)'}
                            strokeWidth="12"
                            strokeDasharray="552.9"
                            strokeDashoffset={isAnalyzing ? '0' : '121.6'}
                            strokeLinecap="round"
                            className={isAnalyzing ? 'animate-spin' : 'risk-pulse'}
                            style={{
                                filter: isAnalyzing ? 'drop-shadow(0 0 15px var(--primary))' : 'drop-shadow(0 0 8px rgba(239,68,68,0.8))',
                                transition: 'stroke 0.5s, stroke-dashoffset 2s, filter 0.5s'
                            }}
                        ></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-5xl font-black">{isAnalyzing ? '--' : '78'}</span>
                        <span className={`text-sm font-bold tracking-widest ${isAnalyzing ? 'text-primary' : 'text-risk-high'}`}>
                            {isAnalyzing ? 'ANALYZING' : 'CRITICAL'}
                        </span>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-2" style={{ maxWidth: '20rem', margin: '0 auto' }}>
                    <div className="flex justify-between text-xs" style={{ fontWeight: 500 }}>
                        <span className="text-muted" style={{ fontStyle: 'italic' }}>Target Threshold: 45/100</span>
                        <span className={isAnalyzing ? 'text-primary' : 'text-risk-high'}>
                            {isAnalyzing ? 'RE-CALCULATING...' : '+33 Deviation'}
                        </span>
                    </div>
                    <div style={{ height: '0.375rem', width: '100%', backgroundColor: 'var(--section-bg-dark)', borderRadius: '9999px', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%',
                            backgroundColor: isAnalyzing ? 'var(--primary)' : 'var(--risk-high)',
                            width: isAnalyzing ? '100%' : '78%',
                            transition: 'width 2s ease-in-out, background-color 0.5s'
                        }}></div>
                    </div>
                    <p className="text-xs text-muted" style={{ lineHeight: 1.6, marginTop: '0.5rem' }}>
                        {isAnalyzing ? 'Synthesizing global market data packets...' : <>Probability of market collapse within 72h: <span className="font-bold" style={{ color: 'var(--text-dark)' }}>84.2%</span></>}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RiskScore;
