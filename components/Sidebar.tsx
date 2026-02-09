
import React from 'react';
import { LayoutDashboard, Scale, ShieldAlert, BookOpen, Map, FileText, Menu, X, Users, ClipboardCheck, DollarSign, Phone, Globe } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, mobileOpen, setMobileOpen }) => {
  
  const menuGroups = [
    {
      label: "Intelligence",
      items: [
        { id: 'reality', label: 'Mission Dashboard', icon: LayoutDashboard },
        { id: 'assess', label: 'Risk Assessment', icon: ClipboardCheck },
      ]
    },
    {
      label: "Legal Framework",
      items: [
        { id: 'law', label: 'Statutes & Science', icon: Scale },
        { id: 'caselaw', label: 'Case Law Database', icon: BookOpen },
        { id: 'treaty', label: 'Treaty Violations', icon: Globe },
      ]
    },
    {
      label: "Operations",
      items: [
        { id: 'strategy', label: 'Strategy Guide', icon: ShieldAlert },
        { id: 'calculator', label: 'Financial Model', icon: DollarSign },
        { id: 'directory', label: 'Directory', icon: Phone },
      ]
    },
    {
      label: "Evidence",
      items: [
        { id: 'stories', label: 'Case Narratives', icon: Users },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm transition-opacity lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 text-slate-300 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col border-r border-slate-800 shadow-2xl ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Brand Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-800 bg-slate-950 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center font-serif font-bold text-white shadow-lg shadow-red-900/50">213</div>
             <div>
                <span className="text-lg font-bold tracking-wider text-slate-100 block font-serif leading-none">PROJECT 213</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Tactical Console</span>
             </div>
          </div>
          <button className="lg:hidden text-slate-400 hover:text-white" onClick={() => setMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Nav Area */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-thin scrollbar-thumb-slate-800">
          {menuGroups.map((group, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3 px-3">{group.label}</h4>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                      activeTab === item.id 
                        ? 'bg-red-700/10 text-red-500 border-l-2 border-red-500' 
                        : 'hover:bg-slate-900 hover:text-slate-100 border-l-2 border-transparent'
                    }`}
                  >
                    <item.icon size={18} className={`transition-colors ${activeTab === item.id ? 'text-red-500' : 'text-slate-500 group-hover:text-slate-300'}`} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
        
        {/* Status Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50 shrink-0">
          <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 shadow-inner">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">System Alert</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
                Philippine Courts currently prioritize <strong>Article 213</strong> over Hague Convention protocols for US Citizens.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
