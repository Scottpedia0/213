
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import LegalFramework from './components/LegalFramework';
import StrategyGuide from './components/StrategyGuide';
import RiskAssessment from './components/RiskAssessment';
import WarChestCalculator from './components/WarChestCalculator';
import TreatyViolations from './components/TreatyViolations';
import Directory from './components/Directory';
import FathersStories from './components/FathersStories';
import WelcomeModal from './components/WelcomeModal';
import AiAssistant from './components/AiAssistant';
import { AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('reality');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal on initial load
    setShowModal(true);
  }, []);

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
    <div className="min-h-screen bg-slate-50 font-sans relative">
      <WelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      {/* GLOBAL LIABILITY BANNER - ONLY SHOW ON HOME TAB */}
      {activeTab === 'reality' && (
        <div className="bg-red-700 border-b border-red-800 px-4 py-2 text-white text-[10px] md:text-xs font-bold text-center relative z-[60] tracking-wide shadow-md animate-fade-in">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
                <AlertTriangle size={14} className="text-white shrink-0" />
                <span className="uppercase md:normal-case">
                    CRITICAL WARNING: This resource is maintained by AI and <u>may contain some false or outdated information</u>. Use for strategic planning only. Verify all legal details with counsel.
                </span>
            </div>
        </div>
      )}

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p className="font-serif text-slate-900 text-lg mb-2">PROJECT 213</p>
          <p>© 2026 Philippine Custody Resource Initiative.</p>
          
          <div className="mt-8 max-w-3xl mx-auto border-t border-slate-100 pt-6 space-y-4">
             <p className="text-xs text-slate-400 leading-relaxed">
                <strong>Disclaimer:</strong> This resource is for informational purposes regarding Philippine Family Law and International Child Abduction. It does not constitute legal advice. Article 213 and Article 176 are complex statutory provisions requiring specific legal counsel.
             </p>
             <p className="text-xs text-slate-400 leading-relaxed">
                <strong>AI Transparency Statement:</strong> This tool utilizes artificial intelligence to aggregate legal statutes, case law, and procedural guidelines. While every effort is made to ensure accuracy, AI-generated content may contain hallucinations, outdated jurisprudence, or factual errors. Do not rely on this tool as your sole source of legal authority. Always cross-reference citations with the Supreme Court E-Library or the Official Gazette.
             </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant Floating Component */}
      <AiAssistant />
    </div>
  );
};

export default App;
