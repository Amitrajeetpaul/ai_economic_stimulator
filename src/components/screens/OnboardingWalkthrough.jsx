import React, { useState } from 'react';

function OnboardingWalkthrough({ onComplete, onSkip }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: <>Understand the <span className="text-primary">Economy</span></>,
            desc: "Visualize the intricate web of households, businesses, and banks in a stable environment.",
            icon: "home",
            iconColor: "text-primary",
            bgColor: "bg-primary/20",
            borderColor: "border-primary/30",
            label: "Households"
        },
        {
            title: <>Witness the <span className="text-red-500">Ripple</span></>,
            desc: "Observe how economic shocks spread through the network, creating systemic volatility.",
            icon: "warning",
            iconColor: "text-red-500",
            bgColor: "bg-red-500/20",
            borderColor: "border-red-500/30",
            label: "Systemic Risk"
        },
        {
            title: <>Take <span className="text-emerald-500">Control</span></>,
            desc: "Leverage advanced AI strategist suggestions to stabilize the network or test extreme scenarios.",
            icon: "smart_toy",
            iconColor: "text-emerald-500",
            bgColor: "bg-emerald-500/20",
            borderColor: "border-emerald-500/30",
            label: "AI Strategy"
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            onComplete();
        }
    };

    const slide = slides[currentSlide];

    return (
        <div className="onboarding-screen">
            <div className="auth-mesh-bg"></div>

            <header className="auth-header-nav p-6 flex items-center justify-between z-10 w-full max-w-2xl mx-auto">
                <button onClick={onSkip} className="text-muted hover:text-white transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-center flex-1">Simulate. Learn. Survive.</h2>
                <div className="w-10"></div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center px-6 relative">
                <div className="w-full max-w-md mx-auto flex flex-col items-center animate-fade-in" key={currentSlide}>
                    {/* Visualization Area */}
                    <div className="w-full aspect-square relative mb-12 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-20"></div>

                        <div className="glass relative w-72 h-72 rounded-3xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-col items-center">
                                    <div className={`p-4 ${slide.bgColor} rounded-2xl border ${slide.borderColor} ${slide.iconColor}`}>
                                        <span className="material-symbols-outlined text-5xl">{slide.icon}</span>
                                    </div>
                                    <span className="text-xs mt-2 font-bold opacity-60 uppercase tracking-wider">{slide.label}</span>
                                </div>

                                {/* Decorative Flow Lines */}
                                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
                                    <path className="text-primary" d="M100,55 L100,145" fill="none" stroke="currentColor" strokeDasharray="4 2" />
                                    <path className="text-primary" d="M55,100 L145,100" fill="none" stroke="currentColor" strokeDasharray="4 2" />
                                </svg>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-24 h-24 glass rounded-full flex items-center justify-center p-4 shadow-xl">
                            <div className="text-center">
                                <div className="text-sm font-bold text-primary">$1.2T</div>
                                <div className="text-[9px] opacity-60 uppercase font-bold">Circulation</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center space-y-4 px-4">
                        <h1 className="text-3xl font-bold tracking-tight leading-tight">
                            {slide.title}
                        </h1>
                        <p className="subtitle text-base leading-relaxed max-w-[300px] mx-auto">
                            {slide.desc}
                        </p>
                    </div>
                </div>
            </main>

            <footer className="p-12 flex flex-col items-center gap-8 w-full max-w-md mx-auto">
                <div className="flex items-center gap-3">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-8 bg-primary' : 'w-1.5 bg-primary/20'}`}
                        ></div>
                    ))}
                </div>

                <div className="w-full flex flex-col gap-3">
                    <button
                        onClick={nextSlide}
                        className="btn-primary w-full py-4 text-white font-bold rounded-xl shadow-lg shadow-primary/25"
                    >
                        {currentSlide === slides.length - 1 ? 'Get Started' : 'Continue'}
                    </button>
                    <button
                        onClick={onSkip}
                        className="w-full py-3 text-muted hover:text-white font-bold rounded-xl transition-all"
                    >
                        Skip Introduction
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default OnboardingWalkthrough;
