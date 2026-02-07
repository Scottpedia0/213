import React from 'react';
import { LEGISLATIVE_BILLS } from '../constants';
import { FileText, TrendingUp, AlertCircle, History } from 'lucide-react';

const LegislativeTracker: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pt-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">Legislative Intelligence</h2>
        <p className="text-slate-500 mt-2">Monitoring pending bills and policy shifts impacting custody.</p>
      </div>

      <div className="grid gap-6">
        {LEGISLATIVE_BILLS.map((bill) => (
          <div key={bill.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
            <div className="shrink-0 flex flex-col items-center justify-center w-24 bg-slate-50 rounded-lg p-2 border border-slate-100">
               <FileText className="text-slate-400 mb-1" size={24} />
               <span className="text-xs font-bold text-slate-500 uppercase text-center">{bill.code}</span>
            </div>
            
            <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 font-serif">{bill.title}</h3>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase border
                            ${bill.probability === 'High' ? 'bg-red-50 text-red-700 border-red-100' : 
                              bill.probability === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 
                              'bg-green-50 text-green-700 border-green-100'}`}>
                            {bill.probability} Impact
                        </span>
                        <span className="text-xs text-slate-400">Updated: {bill.lastUpdate}</span>
                    </div>
                </div>
                
                <div className="flex items-start gap-2 mb-3">
                    <TrendingUp size={16} className="text-slate-400 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{bill.status}</span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 mt-3">
                    <span className="font-bold text-slate-900">Analysis:</span> {bill.impact}
                </p>

                {bill.history && (
                    <p className="text-slate-500 text-xs italic mt-2 flex items-center gap-1">
                        <History size={12}/> {bill.history}
                    </p>
                )}
            </div>
          </div>
        ))}

        <div className="bg-slate-900 text-slate-400 p-6 rounded-xl text-center text-sm">
            <AlertCircle className="mx-auto mb-2 text-slate-500" size={24} />
            <p>Intelligence updated quarterly based on House/Senate committee hearings.</p>
        </div>
      </div>
    </div>
  );
};

export default LegislativeTracker;
