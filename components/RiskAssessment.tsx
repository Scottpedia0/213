
import React from 'react';
import { AlertOctagon, CheckCircle, XCircle, ArrowDown, HelpCircle, Bot, ArrowRight, Scale } from 'lucide-react';

const RiskAssessment: React.FC = () => {

  const openAiAgent = () => {
    window.dispatchEvent(new CustomEvent('open-ai-strategy'));
  };

  return (
    <div className="max-w-6xl mx-auto pt-8 pb-12 space-y-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">The Custody Decision Tree</h2>
        <p className="text-slate-500 mt-2 text-lg">
            Identify your position within the current statutory framework. Follow the path below to assess your legal standing.
        </p>
      </div>

      {/* The Flowchart Container */}
      <div className="relative p-4 md:p-8 overflow-x-auto">
        <div className="min-w-[800px] flex flex-col items-center">
            
            {/* START NODE */}
            <div className="bg-slate-900 text-white px-8 py-4 rounded-xl shadow-lg border-2 border-slate-700 z-10 text-center">
                <h3 className="font-bold text-lg">START: Is the child under 7 years old?</h3>
                <p className="text-xs text-slate-400 mt-1">Article 213 Age Threshold</p>
            </div>

            {/* Vertical Line */}
            <div className="h-12 w-0.5 bg-slate-300"></div>

            {/* Branching Lines */}
            <div className="w-[600px] h-0.5 bg-slate-300 relative">
                <div className="absolute left-0 top-0 w-0.5 h-8 bg-slate-300 transform translate-y-0"></div>
                <div className="absolute right-0 top-0 w-0.5 h-8 bg-slate-300 transform translate-y-0"></div>
            </div>

            {/* LEVEL 2 NODES */}
            <div className="w-[600px] flex justify-between -mt-0.5">
                
                {/* LEFT BRANCH (YES < 7) */}
                <div className="flex flex-col items-center pt-8">
                    <div className="bg-white px-6 py-3 rounded-lg border-2 border-red-200 shadow-sm text-center w-64">
                        <span className="text-red-600 font-bold block mb-1">YES (Under 7)</span>
                        <p className="text-xs text-slate-500">"Tender Years" Doctrine Applies</p>
                    </div>
                    
                    <div className="h-8 w-0.5 bg-slate-300"></div>
                    <ArrowDown className="text-slate-300 -mt-2 mb-2" size={16} />

                    <div className="bg-slate-800 text-white px-6 py-3 rounded-lg border border-slate-700 text-center w-64">
                        <h4 className="font-bold text-sm">Are you legally married?</h4>
                        <p className="text-[10px] text-slate-400">(Valid Philippine Marriage)</p>
                    </div>

                    <div className="h-8 w-0.5 bg-slate-300"></div>
                    
                    {/* Inner Branch for Marriage */}
                    <div className="w-[280px] h-0.5 bg-slate-300 relative">
                        <div className="absolute left-0 top-0 w-0.5 h-6 bg-slate-300"></div>
                        <div className="absolute right-0 top-0 w-0.5 h-6 bg-slate-300"></div>
                    </div>

                    <div className="w-[280px] flex justify-between pt-6">
                        {/* Married Result */}
                        <div className="flex flex-col items-center w-32">
                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 text-center shadow-sm h-full">
                                <AlertOctagon className="text-orange-500 mx-auto mb-2" size={24} />
                                <h5 className="font-bold text-orange-900 text-sm mb-2">High Hurdle</h5>
                                <p className="text-[10px] text-orange-800 leading-tight">
                                    <strong>Article 213:</strong> Joint Authority exists, but Mandatory Custody favors the mother.
                                </p>
                            </div>
                        </div>

                        {/* Unmarried Result */}
                        <div className="flex flex-col items-center w-32">
                            <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-center shadow-sm h-full">
                                <XCircle className="text-red-600 mx-auto mb-2" size={24} />
                                <h5 className="font-bold text-red-900 text-sm mb-2">Statutory Deadlock</h5>
                                <p className="text-[10px] text-red-800 leading-tight">
                                    <strong>Article 176:</strong> Illegitimate Status. Sole Parental Authority is with the mother.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT BRANCH (NO > 7) */}
                <div className="flex flex-col items-center pt-8">
                     <div className="bg-white px-6 py-3 rounded-lg border-2 border-green-200 shadow-sm text-center w-64">
                        <span className="text-green-600 font-bold block mb-1">NO (Over 7)</span>
                        <p className="text-xs text-slate-500">Child's Choice / Best Interest</p>
                    </div>

                    <div className="h-8 w-0.5 bg-slate-300"></div>
                    <ArrowDown className="text-slate-300 -mt-2 mb-2" size={16} />

                    <div className="bg-slate-800 text-white px-6 py-3 rounded-lg border border-slate-700 text-center w-64">
                        <h4 className="font-bold text-sm">Are you legally married?</h4>
                        <p className="text-[10px] text-slate-400">(Valid Philippine Marriage)</p>
                    </div>

                    <div className="h-8 w-0.5 bg-slate-300"></div>

                    {/* Inner Branch for Marriage */}
                    <div className="w-[280px] h-0.5 bg-slate-300 relative">
                        <div className="absolute left-0 top-0 w-0.5 h-6 bg-slate-300"></div>
                        <div className="absolute right-0 top-0 w-0.5 h-6 bg-slate-300"></div>
                    </div>

                    <div className="w-[280px] flex justify-between pt-6">
                        {/* Married Result */}
                        <div className="flex flex-col items-center w-32">
                            <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center shadow-sm h-full">
                                <CheckCircle className="text-green-500 mx-auto mb-2" size={24} />
                                <h5 className="font-bold text-green-900 text-sm mb-2">Viable Path</h5>
                                <p className="text-[10px] text-green-800 leading-tight">
                                    <strong>Rule 99:</strong> Child's choice is paramount. Custody determined by fitness.
                                </p>
                            </div>
                        </div>

                        {/* Unmarried Result */}
                        <div className="flex flex-col items-center w-32">
                            <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-center shadow-sm h-full">
                                <XCircle className="text-red-600 mx-auto mb-2" size={24} />
                                <h5 className="font-bold text-red-900 text-sm mb-2">Statutory Gap</h5>
                                <p className="text-[10px] text-red-800 leading-tight">
                                    <strong>Article 176:</strong> Age does not automatically shift rights. Mother retains authority unless unfit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* STRATEGIC ROADMAP - REPLACED GENERIC ANALYSIS */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                    <Scale size={24} className="text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold font-serif">Strategic Roadmap for Unmarried Fathers</h3>
                    <p className="text-slate-400 text-sm">Overcoming Article 176 Deadlocks</p>
                </div>
            </div>
            <button 
                onClick={openAiAgent}
                className="hidden md:flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors"
            >
                <Bot size={16} className="text-blue-600"/>
                Build My Strategy
            </button>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Step 1 */}
            <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Mandatory Visitation</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Even under Article 176, jurisprudence (<em>Silva v. CA</em>) affirms inherent visitorial rights.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <strong className="block text-blue-900 text-xs uppercase mb-1">Legal Vehicle</strong>
                    <p className="text-xs text-blue-800">Petition for Habeas Corpus with prayer for Visitation Schedule.</p>
                </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">2</div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Substitute Authority</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    If the mother is an OFW or absent, her "sole authority" is suspended.
                </p>
                <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                    <strong className="block text-indigo-900 text-xs uppercase mb-1">Legal Vehicle</strong>
                    <p className="text-xs text-indigo-800">Petition for Substitute Parental Authority (Art. 214/216).</p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">3</div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Compelling Reasons</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Document unfitness (neglect, abuse) to override the maternal presumption.
                </p>
                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <strong className="block text-green-900 text-xs uppercase mb-1">Legal Vehicle</strong>
                    <p className="text-xs text-green-800">Petition for Custody based on Unfitness (requires full trial).</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default RiskAssessment;
