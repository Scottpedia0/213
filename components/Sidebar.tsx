import React from 'react';
import { LayoutDashboard, Scale, ShieldAlert, BookOpen, Map, FileText, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, mobileOpen, setMobileOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Mission Dashboard', icon: LayoutDashboard },
    { id: 'framework', label: 'The Legal Iron Curtain', icon: Scale },
    { id: 'caselaw', label: 'Case Law Database', icon: BookOpen },
    { id: 'strategy', label: 'Recovery Strategy', icon: ShieldAlert },
    { id: 'jurisdiction', label: 'The Hague Vacuum', icon: Map },
    { id: 'resources', label: 'Legislative Briefs', icon: FileText },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-slate-100 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-6 bg-slate-950 border-b border-slate-800">
          <span className="text-xl font-bold tracking-wider text-red-500">PROJECT 213</span>
          <button className="lg:hidden" onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileOpen(false);
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
          <div className="bg-slate-800 rounded-lg p-3 text-xs text-slate-400">
            <p className="font-bold text-slate-300 mb-1">Status: High Risk</p>
            <p>Philippines is a non-compliant Hague partner for US cases.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
