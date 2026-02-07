import React from 'react';
import { Menu, X, Shield, Map, Compass, ClipboardCheck, DollarSign, Phone, Globe, Users } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'reality', label: 'Reality', icon: Map },
    { id: 'stories', label: 'Stories', icon: Users },
    { id: 'law', label: 'Law & Science', icon: Shield },
    { id: 'treaty', label: 'Treaties', icon: Globe },
    { id: 'strategy', label: 'Strategy', icon: Compass },
    { id: 'calculator', label: 'War Chest', icon: DollarSign },
    { id: 'directory', label: 'Directory', icon: Phone },
    { id: 'assess', label: 'Risk', icon: ClipboardCheck },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('reality')}>
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-playfair font-bold text-xl">
              213
            </div>
            <div>
              <span className="font-playfair font-bold text-xl tracking-wide block leading-none">PROJECT 213</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Custody Resource</span>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-all duration-200 ${
                    activeTab === item.id
                      ? 'text-white bg-slate-800 border border-slate-700 shadow-sm ring-1 ring-slate-700'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  activeTab === item.id
                    ? 'text-white bg-slate-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
