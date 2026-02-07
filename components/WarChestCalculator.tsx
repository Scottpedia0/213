import React, { useState } from 'react';
import { DollarSign, Plane, Building, User, FileText, AlertTriangle, RefreshCw } from 'lucide-react';

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
        <h2 className="text-3xl font-bold text-slate-900 font-serif">The War Chest Calculator</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Litigation in the Philippines is an extractive industry. Use this tool to model your financial exposure over a typical 5-year custody battle.
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
                <p className="text-xs text-slate-500 mt-2">*Excluding bribery, extortion, or emergency medical costs.</p>
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

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl flex items-start gap-4">
             <AlertTriangle className="text-amber-600 shrink-0 mt-1" />
             <div>
                <h4 className="font-bold text-amber-900 text-sm">Strategic Insight</h4>
                <p className="text-sm text-amber-800 mt-1 leading-relaxed">
                    Notice how <strong>Travel</strong> is likely your biggest expense. This is why the opposing counsel's main tactic is to schedule hearings and then cancel them the morning of. They bleed you on flights, not legal fees.
                    <br/><br/>
                    <strong>Mitigation:</strong> Hire counsel with "Substitute Appearance" authority or move to the Philippines temporarily.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarChestCalculator;
