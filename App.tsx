
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import LegalFramework from './components/LegalFramework';
import StrategyGuide from './components/StrategyGuide';
import RiskAssessment from './components/RiskAssessment';
import WarChestCalculator from './components/WarChestCalculator';
import TreatyViolations from './components/TreatyViolations';
import Directory from './components/Directory';
import FathersStories from './components/FathersStories';
import CaseLawDb from './components/CaseLawDb';
import WelcomeModal from './components/WelcomeModal';
import AiAssistant from './components/AiAssistant';
import { AlertTriangle, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('reality');
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Ref for the main scrollable container
  const mainContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Show modal on initial load
    setShowModal(true);
  }, []);

  // Scroll to top whenever activeTab changes
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

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
      case 'caselaw':
        return <CaseLawDb />;
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
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <WelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      {/* Sidebar Component - The Navigation Engine */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
      />

      {/* Main Content Area - The Workspace */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Mobile Header (Only visible on small screens) */}
        <div className="lg:hidden bg-slate-900 text-white p-4 flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-serif font-bold text-lg">213</div>
                <span className="font-serif font-bold tracking-wide">PROJECT 213</span>
            </div>
            <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-slate-300 hover:text-white">
                <Menu size={24} />
            </button>
        </div>

        {/* Global Liability Banner (Sticky Top) */}
        {activeTab === 'reality' && (
            <div className="bg-red-700 text-white text-[10px] md:text-xs font-bold text-center py-2 px-4 shadow-sm z-10 shrink-0">
                <div className="flex items-center justify-center gap-2">
                    <AlertTriangle size={12} className="shrink-0" />
                    <span>STRATEGIC USE ONLY. VERIFY ALL PROTOCOLS WITH COUNSEL.</span>
                </div>
            </div>
        )}

        {/* Scrollable Content Container */}
        <main 
            ref={mainContentRef}
            className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth p-4 md:p-8 lg:p-12 relative"
        >
            {renderContent()}

            {/* Footer embedded in scroll area */}
            <footer className="mt-20 pt-10 border-t border-slate-200 text-center pb-8">
                <p className="font-serif text-slate-900 text-lg mb-2 opacity-50">PROJECT 213</p>
                <p className="text-xs text-slate-400">© 2026 Philippine Custody Resource Initiative.</p>
            </footer>
        </main>

        {/* AI Assistant Floating Component */}
        <AiAssistant />
      </div>
    </div>
  );
};

export default App;
