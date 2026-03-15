import React, { useState } from 'react';
import Header from './components/Header';
import RiskScore from './components/RiskScore';
import Heatmap from './components/Heatmap';
import CascadeFailures from './components/CascadeFailures';
import BottomNav from './components/BottomNav';
import LoginScreen from './components/screens/LoginScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import OnboardingWalkthrough from './components/screens/OnboardingWalkthrough';
import Sidebar from './components/navigation/Sidebar';
import MainDashboard from './components/screens/MainDashboard';
import SimulationLab from './components/screens/SimulationLab';
import ScenarioBuilder from './components/screens/ScenarioBuilder';
import ShockControlPanel from './components/screens/ShockControlPanel';
import SimulationResults from './components/screens/SimulationResults';
import CrisisTimeline from './components/screens/CrisisTimeline';
import EconomicIndicators from './components/screens/EconomicIndicators';
import ProfileSettings from './components/screens/ProfileSettings';
import InteractiveShockControl from './components/screens/InteractiveShockControl';

// Screen Components
const AIInsights = ({ isAnalyzing }) => (
  <>
    <RiskScore isAnalyzing={isAnalyzing} />
    <Heatmap />
    <CascadeFailures />
  </>
);

const PlaceholderScreen = ({ title }) => (
  <div className="flex flex-col items-center justify-center space-y-4 py-20 text-center">
    <span className="material-symbols-outlined text-primary text-9xl opacity-20">construction</span>
    <h2 className="text-2xl font-bold uppercase tracking-widest">{title}</h2>
    <p className="subtitle">Module currently in synthesis. Please check back during Phase V.</p>
  </div>
);

function App() {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState('login'); // login, signup, onboarding
  const [activeView, setActiveView] = useState('dashboard');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Sync hash with auth state
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#signup') setAuthState('signup');
      else if (hash === '#login') setAuthState('login');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLogin = () => {
    setUser({ name: 'Dr. Julian Vance', role: 'Lead Economist' });
    setActiveView('dashboard');
  };

  const handleSignUp = () => {
    setAuthState('onboarding');
  };

  const handleOnboardingComplete = () => {
    setUser({ name: 'New Analyst', role: 'Junior Researcher' });
    setAuthState('login');
    setActiveView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setAuthState('login');
    window.location.hash = '#login';
  };

  const handleTriggerAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  if (!user) {
    if (authState === 'signup') {
      return <SignUpScreen onBack={() => window.location.hash = '#login'} onSignUp={handleSignUp} />;
    }
    if (authState === 'onboarding') {
      return <OnboardingWalkthrough onComplete={handleOnboardingComplete} onSkip={handleOnboardingComplete} />;
    }
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <MainDashboard />;
      case 'insights':
        return <AIInsights isAnalyzing={isAnalyzing} />;
      case 'simulation':
        return <SimulationLab />;
      case 'scenario-builder':
        return <ScenarioBuilder />;
      case 'shocks':
        return <ShockControlPanel />;
      case 'results':
        return <SimulationResults onReplay={() => setActiveView('simulation')} />;
      case 'timeline':
        return <CrisisTimeline />;
      case 'indicators':
        return <EconomicIndicators />;
      case 'settings':
        return <ProfileSettings onLogout={handleLogout} />;
      case 'interactive-shocks':
        return <InteractiveShockControl />;
      default:
        return <PlaceholderScreen title={activeView.charAt(0).toUpperCase() + activeView.slice(1)} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar user={user} activeView={activeView} setActiveView={setActiveView} />
      <main className="main-content">
        {/* We reuse the original Header for simple screens, or use the dashboard header in MainDashboard */}
        {activeView !== 'dashboard' && <Header onLogout={handleLogout} />}

        <div className={activeView === 'dashboard' ? '' : 'content-wrapper px-4 lg:px-8 py-6 lg:py-10 space-y-8'}>
          {renderContent()}
        </div>

        <BottomNav
          activeView={activeView}
          setActiveView={setActiveView}
          onTriggerAnalysis={handleTriggerAnalysis}
          isAnalyzing={isAnalyzing}
        />
      </main>
    </div>
  );
}


export default App;
