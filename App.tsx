import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import LegalFramework from './components/LegalFramework';
import StrategyGuide from './components/StrategyGuide';
import RiskAssessment from './components/RiskAssessment';
import WarChestCalculator from './components/WarChestCalculator';
import TreatyViolations from './components/TreatyViolations';
import Directory from './components/Directory';
import FathersStories from './components/FathersStories';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('reality');

  const renderContent = () => {
    switch (activeTab) {
      case 'reality':
        return <Home />;
      case 'stories':
        return <FathersStories />;
      case 'law':
        return (
          <div className="max-w-7xl mx-auto pt-8 pb-12">
            <LegalFramework />
          </div>
        );
      case 'treaty':
        return <TreatyViolations />;
      case 'strategy':
        return <StrategyGuide />;
      case 'calculator':
        return <WarChestCalculator />;
      case 'directory':
        return <Directory />;
      case 'assess':
        return <RiskAssessment />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p className="font-serif text-slate-900 text-lg mb-2">PROJECT 213</p>
          <p>© 2026 Philippine Custody Resource Initiative.</p>
          <p className="mt-4 max-w-2xl mx-auto text-xs text-slate-300">
            Disclaimer: This resource is for informational purposes regarding Philippine Family Law and International Child Abduction. It does not constitute legal advice. Article 213 and Article 176 are complex statutory provisions requiring specific legal counsel.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
