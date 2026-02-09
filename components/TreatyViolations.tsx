import React from 'react';
import { TREATY_DATA } from '../constants';
import { Globe, AlertOctagon, Scale, XCircle, CheckCircle } from 'lucide-react';
import HagueMap from './HagueMap';

const TreatyViolations: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pt-8 pb-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">International Compliance Dashboard</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          The Philippines is a signatory to major human rights treaties. Its domestic custody laws (Article 213, Article 176) systematically violate these commitments.
        </p>
      </div>

      {/* NEW MAP COMPONENT */}
      <HagueMap />

      <div className="grid gap-6">
        {TREATY_DATA.map((treaty) => (
            <div key={treaty.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                <div className={`p-6 w-full md:w-48 shrink-0 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 
                    ${treaty.complianceStatus === 'Non-Compliant' ? 'bg-red-50' : 'bg-yellow-50'}`}>
                    {treaty.complianceStatus === 'Non-Compliant' ? <XCircle size={32} className="text-red-600 mb-2"/> : <AlertOctagon size={32} className="text-yellow-600 mb-2"/>}
                    <span className={`text-xs font-bold uppercase text-center ${treaty.complianceStatus === 'Non-Compliant' ? 'text-red-700' : 'text-yellow-700'}`}>
                        {treaty.complianceStatus}
                    </span>
                </div>
                <div className="p-6 flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 font-serif">{treaty.name}</h3>
                            <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-mono rounded mt-1">{treaty.article}</span>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{treaty.agency}</span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-2">
                            <strong className="block text-slate-900 text-xs uppercase tracking-wide">Treaty Text</strong>
                            <p className="text-slate-600 italic border-l-2 border-slate-300 pl-3">"{treaty.text}"</p>
                        </div>
                        <div className="space-y-2">
                             <strong className="block text-red-700 text-xs uppercase tracking-wide">Specific Violation</strong>
                             <p className="text-red-900 bg-red-50 p-3 rounded-lg border border-red-100">{treaty.violation}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-700">
         <div className="flex items-center gap-4 mb-6">
            <Globe className="text-blue-400" size={32} />
            <h3 className="text-2xl font-bold font-serif">The Advocacy Angle</h3>
         </div>
         <p className="text-slate-300 leading-relaxed max-w-3xl mb-6">
            When litigating in Philippine courts, it is critical to raise these treaty violations in your pleadings (Certiorari). While local judges often ignore international law in favor of the Family Code, raising these issues creates a "Federal Question" that lays the groundwork for UN Human Rights Council complaints or Diplomatic pressure.
         </p>
         <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <strong className="text-white block mb-1">Strategic Tip:</strong>
            <p className="text-sm text-slate-400">
                Cite the <em>"Pacta Sunt Servanda"</em> doctrine. The Philippines Constitution (Art II, Sec 2) adopts the generally accepted principles of international law as part of the law of the land.
            </p>
         </div>
      </div>
    </div>
  );
};

export default TreatyViolations;
