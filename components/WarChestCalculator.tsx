
import React, { useState } from 'react';
import { DollarSign, Plane, Building, User, FileText, AlertTriangle, RefreshCw, Bot, ArrowRight, Video } from 'lucide-react';

const WarChestCalculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    years: 5,
    flightsPerYear: 4,
    flightCost: 2000,
    hotelPerTrip: 800,
    lawyerAcceptance: 5000,
    hearingFee: 150,
    hearingsPerYear: 8,
    monthlySupport: 500,
    piBudget: 5000,
    otherLegal: 10000
  });

  const openAiAgent = () => {
    window.dispatchEvent(new CustomEvent('open-ai-strategy'));
  };

  const calculateTotal = () => {
    const legalBase = inputs.lawyerAcceptance + inputs.otherLegal;
    const legalRecurring = (inputs.hearingFee * inputs.hearingsPerYear) * inputs.years;
    const travel = (inputs.flightsPerYear * inputs.flightCost + inputs.flightsPerYear * inputs.hotelPerTrip) * inputs.years;
    const operations = inputs.piBudget + (inputs.monthlySupport * 12 * inputs.years);
    return {
      legal: legalBase + legalRecurring,
      travel,
      operations,
      total: legalBase + legalRecurring + travel + operations
    };
  };

  const totals = calculateTotal();

  return (
    <div className="max-w-5xl mx-auto pt-8 pb-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">Litigation Financial Model</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Litigation in the Philippines requires significant financial planning. Use this tool to model your total exposure over a typical 5-year custody case.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* INPUTS PANEL */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <RefreshCw size={20} className="text-slate-400" />
            <h3 className="font-bold text-slate-900">Campaign Parameters</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Duration (Years)</label>
              <input 
                type="number" 
                value={inputs.years}
                onChange={(e) => setInputs({...inputs, years: parseInt(e.target.value) || 0})}
                className="w-full p-2 border border-slate-200 rounded text-slate-900 font-mono"
              />
            </div>
            
            <div className="pt-4 border-t border-slate-100">
               <label className="block text-xs font-bold text-blue-600 uppercase mb-2 flex items-center gap-1"><Plane size={12}/> Travel Logistics</label>
               <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400">Trips/Year</span>
                    <input type="number" value={inputs.flightsPerYear} onChange={(e) => setInputs({...inputs, flightsPerYear: parseInt(e.target.value) || 0})} className="w-full p-2 border border-slate-200 rounded text-sm"/>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400">Cost/Trip ($)</span>
                    <input type="number" value={inputs.flightCost} onChange={(e) => setInputs({...inputs, flightCost: parseInt(e.target.value) || 0})} className="w-full p-2 border border-slate-200 rounded text-sm"/>
                  </div>
               </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
               <label className="block text-xs font-bold text-green-600 uppercase mb-2 flex items-center gap-1"><Building size={12}/> Legal Fees</label>
               <div className="space-y-2">
                  <div>
                    <span className="text-[10px] text-slate-400">Acceptance Fee ($)</span>
                    <input type="number" value={inputs.lawyerAcceptance} onChange={(e) => setInputs({...inputs, lawyerAcceptance: parseInt(e.target.value) || 0})} className="w-full p-2 border border-slate-200 rounded text-sm"/>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                     <div>
                        <span className="text-[10px] text-slate-400">Hearing Fee ($)</span>
                        <input type="number" value={inputs.hearingFee} onChange={(e) => setInputs({...inputs, hearingFee: parseInt(e.target.value) || 0})} className="w-full p-2 border border-slate-200 rounded text-sm"/>
                     </div>
                     <div>
                        <span className="text-[10px] text-slate-400">Hearings/Year</span>
                        <input type="number" value={inputs.hearingsPerYear} onChange={(e) => setInputs({...inputs, hearingsPerYear: parseInt(e.target.value) || 0})} className="w-full p-2 border border-slate-200 rounded text-sm"/>
                     </div>
                  </div>
               </div>
            </div>

             <div className="pt-4 border-t border-slate-100">
               <label className="block text-xs font-bold text-orange-600 uppercase mb-2 flex items-center gap-1"><User size={12}/> Operations</label>
               <div className="space-y-2">
                  <div>
                    <span className="text-[10px] text-slate-400">PI / Intel Budget ($)</span>
                    <input type="number" value={inputs.piBudget} onChange={(e) => setInputs({...inputs, piBudget: parseInt(e.target.value) || 0})} className="w-full p-2 border border-slate-200 rounded text-sm"/>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* RESULTS PANEL */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-1">Estimated Total Exposure</p>
                <h3 className="text-5xl md:text-6xl font-bold font-mono text-red-500">${totals.total.toLocaleString()}</h3>
                <p className="text-xs text-slate-500 mt-2">*Excluding emergency medical or contingency costs.</p>
             </div>
             <div className="flex gap-4">
                <div className="text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center font-bold text-xl mb-2">
                        {Math.round((totals.travel / totals.total) * 100)}%
                    </div>
                    <span className="text-xs text-blue-400 uppercase font-bold">Travel</span>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center font-bold text-xl mb-2">
                        {Math.round((totals.legal / totals.total) * 100)}%
                    </div>
                    <span className="text-xs text-green-400 uppercase font-bold">Legal</span>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
             <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                <Plane className="text-blue-500 mb-2" size={24} />
                <p className="text-xs text-slate-400 uppercase font-bold">Logistics Burn</p>
                <p className="text-2xl font-bold text-slate-900">${totals.travel.toLocaleString()}</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                <Building className="text-green-500 mb-2" size={24} />
                <p className="text-xs text-slate-400 uppercase font-bold">Legal Fees</p>
                <p className="text-2xl font-bold text-slate-900">${totals.legal.toLocaleString()}</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                <User className="text-orange-500 mb-2" size={24} />
                <p className="text-xs text-slate-400 uppercase font-bold">Ops / Support</p>
                <p className="text-2xl font-bold text-slate-900">${totals.operations.toLocaleString()}</p>
             </div>
          </div>

          {/* COST MITIGATION STRATEGY */}
          <div className="bg-white rounded-xl border border-blue-200 overflow-hidden shadow-sm">
            <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded text-white"><Video size={18}/></div>
                <div>
                    <h4 className="font-bold text-blue-900 text-sm">Cost Mitigation Protocol</h4>
                    <p className="text-[10px] text-blue-700">Strategic reduction of logistics burn</p>
                </div>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-2">1. Virtual Testimony (A.M. No. 20-12-01-SC)</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        Mitigate travel attrition by petitioning for <strong>Remote Videoconferencing</strong>. The Supreme Court now allows witnesses based abroad to testify via secure video link. 
                    </p>
                    <div className="mt-2 text-xs bg-slate-50 p-2 rounded border border-slate-100 text-slate-500">
                        <strong>Action:</strong> File "Motion for Videoconferencing" citing cost/distance.
                    </div>
                </div>
                <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-2">2. Fee Structure Management</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        Avoid "Appearance Fee Farming". Negotiate a stage-based fee (Acceptance + Per Pleading) to align incentives with written output rather than physical attendance.
                    </p>
                    <div className="mt-2 text-xs bg-slate-50 p-2 rounded border border-slate-100 text-slate-500">
                        <strong>Action:</strong> Request "Capped Appearance Fees" in Engagement Letter.
                    </div>
                </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl flex items-start gap-4">
                <AlertTriangle className="text-amber-600 shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-amber-900 text-sm">Strategic Insight</h4>
                    <p className="text-sm text-amber-800 mt-1 leading-relaxed">
                        Notice how <strong>Travel</strong> is likely your biggest expense. This is why procedural delays (hearing cancellations) impact you disproportionately compared to local litigants.
                    </p>
                </div>
            </div>

             {/* AI CALL TO ACTION */}
             <div className="bg-white border border-slate-200 p-6 rounded-xl flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                     <Bot className="text-blue-600" size={28} />
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">Detailed Efficiency Plan</h4>
                        <p className="text-xs text-slate-500">Ask the Case Analyst for specific cost-saving motions.</p>
                     </div>
                </div>
                <button 
                    onClick={openAiAgent}
                    className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarChestCalculator;
