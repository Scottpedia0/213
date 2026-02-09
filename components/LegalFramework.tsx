
import React, { useState } from 'react';
import { KEY_STATUTES } from '../constants';
import { ShieldAlert, Book, Gavel, Scale, FileText, Clock, RefreshCw, Microscope, Brain, Radar, Globe, Quote, Map, Smartphone, Wifi, Server, ExternalLink, Library, History, Bot, ArrowRight, CheckSquare } from 'lucide-react';
import CaseLawDb from './CaseLawDb';
import ScienceEvidence from './ScienceEvidence';
import LegislativeTracker from './LegislativeTracker';

const LegalFramework: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'statutes' | 'sources' | 'rules' | 'cases' | 'recognition' | 'science' | 'bills'>('statutes');

  const openAiAgent = () => {
    window.dispatchEvent(new CustomEvent('open-ai-strategy'));
  };

  return (
    <div className="space-y-8">
      
      {/* Sub Navigation */}
      <div className="flex flex-wrap gap-2 justify-center border-b border-slate-200 pb-4">
        <button 
            onClick={() => setActiveSubTab('statutes')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeSubTab === 'statutes' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
            <Scale size={16} /> Statutes
        </button>
        <button 
            onClick={() => setActiveSubTab('sources')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeSubTab === 'sources' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
            <Library size={16} /> Sources
        </button>
        <button 
            onClick={() => setActiveSubTab('rules')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeSubTab === 'rules' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
            <Map size={16} /> Rule Map
        </button>
        <button 
            onClick={() => setActiveSubTab('recognition')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeSubTab === 'recognition' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
            <Globe size={16} /> Foreign Orders
        </button>
        <button 
            onClick={() => setActiveSubTab('cases')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeSubTab === 'cases' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
            <Gavel size={16} /> Jurisprudence
        </button>
        <button 
            onClick={() => setActiveSubTab('science')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeSubTab === 'science' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
            <Microscope size={16} /> Scientific Evidence
        </button>
        <button 
            onClick={() => setActiveSubTab('bills')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeSubTab === 'bills' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
            <Radar size={16} /> Legislative Horizon
        </button>
      </div>

      {/* CONTENT AREA */}
      
      {/* STATUTES TAB */}
      {activeSubTab === 'statutes' && (
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
             {/* Header */}
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">The Statutory Architecture</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
                The Philippine custody regime is structured on specific, overlapping statutes that establish a hierarchy of parental rights.
                </p>
            </div>

            {/* THE ANNOTATED STATUTE */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative">
                <div className="absolute top-4 right-4">
                    <button 
                        onClick={openAiAgent}
                        className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg text-xs font-bold shadow-sm border border-blue-100 hover:shadow-md transition-all group"
                    >
                        <Bot size={16} />
                        Explain how this applies to me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Book className="text-red-600"/> The Text: Article 213 (Annotated)
                </h3>
                
                <div className="bg-white p-8 rounded-xl shadow-inner border border-slate-100">
                    <p className="font-serif text-2xl md:text-3xl leading-relaxed text-slate-800 text-center">
                        "<span className="bg-yellow-100 px-1 rounded cursor-help relative group" title="This is mandatory. The court has NO discretion to award custody to the father unless the exception is met.">
                            No child under seven years of age
                        </span> shall be 
                        <span className="bg-red-100 px-1 mx-1 rounded cursor-help relative group" title="Means actual physical custody. You cannot take the child for overnight visits if the mother objects.">
                            separated from the mother
                        </span> 
                        unless the court finds 
                        <span className="bg-blue-100 px-1 mx-1 rounded cursor-help relative group" title="The 'Impossible Bar'. Must be unfitness (drugs, abuse), not just poverty or lack of love.">
                            compelling reasons
                        </span>."
                    </p>
                </div>
                
                <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs">
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-yellow-900">
                        <strong>"No Child..."</strong><br/>
                        This rule applies to both legitimate and illegitimate children. It is an absolute age threshold.
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-red-900">
                        <strong>"Separated..."</strong><br/>
                        The law prioritizes the mother's "right" to the child over the child's right to the father.
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-900">
                        <strong>"Compelling Reasons"</strong><br/>
                        Poverty, morality, or "better environment" are NOT compelling reasons. Only danger to the child counts.
                    </div>
                </div>

                {/* BEST INTEREST CHECKLIST */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <CheckSquare size={16} className="text-green-600"/> Evidence Checklist: "Compelling Reasons"
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                            <span className="block text-xs font-bold text-slate-500 mb-1">Unfitness Documentation</span>
                            <ul className="text-xs text-slate-600 space-y-1">
                                <li>• DSWD Home Study Report (Negative)</li>
                                <li>• Police Blotters (Neglect/Abuse)</li>
                                <li>• Drug Test Results (Positive)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                            <span className="block text-xs font-bold text-slate-500 mb-1">Psychological Status</span>
                            <ul className="text-xs text-slate-600 space-y-1">
                                <li>• Court-Ordered Psych Evaluation</li>
                                <li>• Expert Testimony on Alienation</li>
                                <li>• School Guidance Counselor Reports</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                            <span className="block text-xs font-bold text-slate-500 mb-1">Abandonment Proof</span>
                            <ul className="text-xs text-slate-600 space-y-1">
                                <li>• Immigration Records (Departure)</li>
                                <li>• Notarized SPA delegating care</li>
                                <li>• Lack of communication logs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Historical Timeline */}
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 space-y-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 md:justify-center">
                    <History className="text-slate-500"/> Legislative Timeline
                </h3>
                
                <div className="md:flex md:justify-center relative">
                     <div className="md:w-[600px] space-y-8">
                        {/* 1839 */}
                        <div className="flex gap-4">
                            <div className="w-12 text-xs font-bold text-slate-400 pt-1 shrink-0">1839</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Custody of Infants Act (UK)</h4>
                                <p className="text-sm text-slate-600">The "Tender Years" doctrine originates in Victorian England. Before this, fathers had absolute custody.</p>
                            </div>
                        </div>
                         {/* 1950 */}
                        <div className="flex gap-4">
                            <div className="w-12 text-xs font-bold text-slate-400 pt-1 shrink-0">1950</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Civil Code of the Philippines</h4>
                                <p className="text-sm text-slate-600">Adopted the "Tender Years" rule. Code Commission stated: <em>"No man can sound the deep sorrows of a mother..."</em></p>
                            </div>
                        </div>
                         {/* 1987 */}
                        <div className="flex gap-4">
                            <div className="w-12 text-xs font-bold text-slate-400 pt-1 shrink-0">1987</div>
                            <div>
                                <h4 className="font-bold text-slate-900">The Family Code (Art 213)</h4>
                                <p className="text-sm text-slate-600">Codified the rule into Article 213, creating the mandatory "shall not be separated" language.</p>
                            </div>
                        </div>
                        {/* 2004 */}
                        <div className="flex gap-4">
                            <div className="w-12 text-xs font-bold text-slate-400 pt-1 shrink-0">2004</div>
                            <div>
                                <h4 className="font-bold text-slate-900">RA 9262 (VAWC)</h4>
                                <p className="text-sm text-slate-600">Introduced "Protection Orders" (TPOs) which prioritize safety but can be leveraged in custody disputes.</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* The Defensive Wall */}
                <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-900 text-white rounded-lg">
                    <LockIcon />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">Statutory Constraints</h3>
                </div>
                
                {KEY_STATUTES.filter(s => s.severity === 'Critical').map((statute) => (
                    <div key={statute.code} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 group hover:border-slate-300 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-slate-900 font-serif">{statute.name}</h4>
                        <span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded">{statute.code}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{statute.description}</p>
                        <div className="pl-4 border-l-2 border-red-500">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Impact</p>
                        <p className="text-slate-800 text-sm font-medium italic">"{statute.impact}"</p>
                        </div>
                    </div>
                ))}
                </div>

                {/* The Offensive Weapons */}
                <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-600 text-white rounded-lg">
                    <SwordIcon />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">Procedural Challenges</h3>
                </div>

                {KEY_STATUTES.filter(s => s.severity === 'High').map((statute) => (
                    <div key={statute.code} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 group hover:border-slate-300 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-slate-900 font-serif">{statute.name}</h4>
                        <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider rounded">{statute.code}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{statute.description}</p>
                        <div className="pl-4 border-l-2 border-orange-500">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Impact</p>
                        <p className="text-slate-800 text-sm font-medium italic">"{statute.impact}"</p>
                        </div>
                    </div>
                ))}

                {/* Special Note on RA 9262 */}
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <div className="flex items-start gap-3">
                    <ShieldAlert className="text-amber-600 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="text-lg font-bold text-amber-900 font-serif mb-2">The RA 9262 Procedural Paradox</h4>
                        <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                        The Anti-VAWC Act allows for <em className="font-bold">ex-parte</em> Temporary Protection Orders (TPO) to ensure safety. This mechanism, while vital for protection, can be utilized in custody disputes to secure provisional custody without a hearing.
                        </p>
                        <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Immediate legal implications for contact
                        </li>
                        <li className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            No initial hearing required for TPO
                        </li>
                        <li className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Potential for airport restrictions
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                </div>
            </div>

            {/* The Digital Lifeline (Judicial Innovations) */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-700 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Wifi size={120} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <Smartphone className="text-blue-400" size={32} />
                        <div>
                            <h3 className="text-2xl font-bold font-serif">Judicial Modernization</h3>
                            <p className="text-slate-400 text-sm">Supreme Court Innovations (2023-2026)</p>
                        </div>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
                        While the legislature debates, the Supreme Court has utilized its rule-making power to implement immediate reforms. For fathers geographically separated from their children, the digitization of the judiciary has created a new, enforceable right to "virtual parenting."
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <h4 className="font-bold text-blue-400 mb-3 text-lg">A.M. No. 24-11-02-SC</h4>
                            <p className="text-xs font-bold text-slate-500 uppercase mb-2">Effective Feb 2026</p>
                            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                <strong>"Electronic Visitation":</strong> Courts can now issue enforceable orders for video calls. A mother refusing to answer a scheduled call may be violating a court order.
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Mediation can be virtual</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Testimony from abroad allowed</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <h4 className="font-bold text-green-400 mb-3 text-lg">A.M. No. 23-02-01-SC</h4>
                            <p className="text-xs font-bold text-slate-500 uppercase mb-2">Child Witness Rule</p>
                            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                <strong>"Safe Harbor Interviews":</strong> Allows children to be interviewed by the judge virtually, minimizing the pressure of the physical presence of the custodial parent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* SOURCES TAB (NEW) */}
      {activeSubTab === 'sources' && (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
             <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Primary Sources</h2>
                <p className="text-slate-600 text-lg font-light">
                    Direct access to the Philippine Legal Infrastructure and primary source documents.
                </p>
            </div>

            <div className="grid gap-6">
                
                <a href="https://elibrary.judiciary.gov.ph" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex items-start gap-6">
                    <div className="bg-slate-900 p-4 rounded-lg text-white group-hover:bg-blue-600 transition-colors">
                        <Scale size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            Supreme Court E-Library <ExternalLink size={16} className="text-slate-400"/>
                        </h3>
                        <p className="text-slate-600 text-sm mt-2">
                            The definitive database of all Philippine jurisprudence. Search for "Article 213" to access raw decisions.
                        </p>
                    </div>
                </a>

                <a href="https://www.officialgazette.gov.ph/1987/07/06/executive-order-no-209-s-1987/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex items-start gap-6">
                    <div className="bg-slate-900 p-4 rounded-lg text-white group-hover:bg-yellow-600 transition-colors">
                        <Book size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            The Official Gazette (Family Code) <ExternalLink size={16} className="text-slate-400"/>
                        </h3>
                        <p className="text-slate-600 text-sm mt-2">
                            The official government repository of the law. Read Executive Order No. 209 (The Family Code) in its original text.
                        </p>
                    </div>
                </a>

                <a href="https://doj.gov.ph/opinions.html" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex items-start gap-6">
                    <div className="bg-slate-900 p-4 rounded-lg text-white group-hover:bg-red-600 transition-colors">
                        <Gavel size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            Department of Justice (DOJ) Opinions <ExternalLink size={16} className="text-slate-400"/>
                        </h3>
                        <p className="text-slate-600 text-sm mt-2">
                            Search for opinions on "Hold Departure Order" or "Custody" to understand executive interpretations.
                        </p>
                    </div>
                </a>

            </div>
        </div>
      )}

      {/* RULE MAP TAB (New) */}
      {activeSubTab === 'rules' && (
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
             <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Operational Rule Map</h2>
                <p className="text-slate-600 text-lg font-light">
                    The functional rules courts apply in custody determinations, often prioritizing statutory hierarchy.
                </p>
            </div>

            {/* THE DECISION MATRIX */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Server size={150} />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-slate-900 p-3 rounded-xl text-white">
                            <RefreshCw size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 font-serif">The Statutory Decision Matrix</h3>
                            <p className="text-sm text-slate-500">The logic tree courts use to determine custody.</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        
                        {/* Branch 1: Legitimacy */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                                <span className="text-xs font-bold text-slate-400 uppercase mb-2">Input Variable 1</span>
                                <h4 className="text-xl font-bold text-slate-900">Is the Child Legitimate?</h4>
                                <p className="text-xs text-slate-500 mt-2">(Born inside valid marriage)</p>
                            </div>

                            <div className="hidden md:flex flex-col justify-center space-y-20">
                                <div className="w-16 border-t-2 border-slate-300 relative">
                                    <div className="absolute -top-3 right-0 text-xs font-bold text-green-600">YES</div>
                                </div>
                                <div className="w-16 border-t-2 border-slate-300 relative">
                                    <div className="absolute -top-3 right-0 text-xs font-bold text-red-600">NO</div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-8">
                                {/* YES Branch */}
                                <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
                                    <h5 className="font-bold text-green-800 mb-2">Joint Parental Authority (Art. 211)</h5>
                                    <p className="text-sm text-slate-600 mb-4">Parents have equal standing.</p>
                                    
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <span className="text-xs font-bold text-slate-400 uppercase mb-1 block">Input Variable 2: Age</span>
                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                            <div className="text-center">
                                                <span className="block font-bold text-slate-900">&lt; 7 Years</span>
                                                <span className="text-xs text-red-600 block mt-1">Art. 213 (Maternal)</span>
                                            </div>
                                            <div className="text-center">
                                                <span className="block font-bold text-slate-900">≥ 7 Years</span>
                                                <span className="text-xs text-green-600 block mt-1">Child's Choice</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* NO Branch */}
                                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
                                    <h5 className="font-bold text-red-800 mb-2">Sole Maternal Authority (Art. 176)</h5>
                                    <p className="text-sm text-slate-600 mb-4">Mother has exclusive parental authority. Father is a "visitor".</p>
                                    
                                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                        <p className="text-xs text-red-800">
                                            <strong>Result:</strong> Father lacks custodial rights unless the mother is proven <span className="underline">Unfit</span> or <span className="underline">Absent</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="grid gap-8">
                {/* 1. Tender Age Presumption */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="bg-slate-900 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">1</div>
                        <h3 className="text-white font-bold text-lg">Article 213: The "Tender Years"</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-slate-800 font-serif italic text-lg mb-4 border-l-4 border-red-500 pl-4">
                            "No child under seven years of age shall be separated from the mother unless the court finds compelling reasons."
                        </p>
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-slate-900">Operational Reality:</strong> This is a mandatory presumption. To overcome it, you must prove "compelling reasons" such as danger to the child's well-being.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <strong className="block text-slate-700 mb-2">Compelling Reasons (High Threshold):</strong>
                                <ul className="grid grid-cols-2 gap-2 text-xs">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Addiction (Proven)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Gross Neglect / Abandonment</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Maltreatment (Proven)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Insanity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Illegitimate Baseline */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                     <div className="bg-slate-900 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">2</div>
                        <h3 className="text-white font-bold text-lg">Article 176: The Illegitimate Baseline</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-slate-800 font-serif italic text-lg mb-4 border-l-4 border-red-500 pl-4">
                            "Illegitimate children shall be under the sole and exclusive parental authority of the mother."
                        </p>
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-slate-900">Operational Reality:</strong> Unmarried fathers lack custodial rights by default, regardless of the child's age or history of caregiving.
                            </p>
                            <p>
                                Courts treat Article 176 as a primary baseline for unmarried parents.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Visitation & Travel */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                     <div className="bg-slate-900 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                        <h3 className="text-white font-bold text-lg">Visitation Conditions</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                Even when visitation rights are granted, courts may impose conditions:
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-900 italic font-medium">
                                "Petitioner may take the child out of the residence only with the written consent of the mother."
                            </div>
                            <p>
                                <strong className="text-slate-900">Impact:</strong> This gives the custodial parent significant control over the terms of access.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. Procedural Vehicles */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                     <div className="bg-slate-900 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">4</div>
                        <h3 className="text-white font-bold text-lg">Habeas Corpus Proceedings</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-slate-900">The Purpose:</strong> Custody disputes often utilize Habeas Corpus petitions for a summary (fast) proceeding.
                            </p>
                            <p>
                                <strong className="text-slate-900">The Reality:</strong> The Supreme Court (see <em>Bagtas v. Santos</em>) has ruled that producing the child does not moot the case. The court MUST proceed to determine custody/best interest, often converting the summary hearing into a full trial.
                            </p>
                        </div>
                    </div>
                </div>

                 {/* 5. Private Agreements */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                     <div className="bg-slate-900 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">5</div>
                        <h3 className="text-white font-bold text-lg">Private Custody Contracts</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-slate-900">The Risk:</strong> You cannot sign away rights or duties. The Supreme Court (see <em>Dacasin v. Dacasin</em>) has voided private joint custody agreements if they conflict with mandatory provisions of Article 213.
                            </p>
                            <p>
                                <strong className="text-slate-900">Strategic Note:</strong> Notarized agreements may be overturned by a Family Court.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      )}

      {/* RECOGNITION OF FOREIGN JUDGMENTS TAB */}
      {activeSubTab === 'recognition' && (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
             <div className="text-center space-y-4 mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Foreign Judgment Recognition</h2>
                <p className="text-slate-600 text-lg font-light">
                Understanding the limitations of Foreign Court Orders in the Philippine jurisdiction and the process for validation.
                </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                    <ShieldAlert className="text-red-600" size={32} />
                    <h3 className="text-2xl font-bold text-red-900">Jurisdictional Reality</h3>
                </div>
                <p className="text-red-800 leading-relaxed text-lg">
                    A Foreign Court Order does not have immediate legal effect in the Philippines.
                </p>
                <div className="mt-6 bg-white p-4 rounded-xl border border-red-100">
                    <strong className="block text-red-600 mb-1 font-bold uppercase tracking-wide">Sovereignty</strong>
                    <p className="text-slate-700">
                        The Philippines is a sovereign nation. It does not automatically recognize the judicial acts of another country. 
                        A US Order has <strong className="text-slate-900">NO legal effect</strong> until a Philippine Court validates it.
                    </p>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Globe className="text-blue-500" />
                    The Solution: Petition for Recognition
                </h3>
                <p className="text-slate-600 mb-6">
                    To make a Foreign Order enforceable, one must file a <strong>Petition for Recognition of Foreign Judgment</strong> under <em>Rule 39, Section 48</em> of the Rules of Court.
                </p>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <h4 className="font-bold text-slate-900">It is a New Trial</h4>
                            <p className="text-sm text-slate-600 mt-1">It is not a stamp. It is a full trial where you must prove the Foreign Court had jurisdiction and that the judgment is valid.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Defenses Available</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                The opposing party can defend against recognition by claiming <em>"want of notice, collusion, fraud, or clear mistake of law or fact."</em>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Public Policy Defense</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                A PH court can reject the Foreign Order if it violates "Public Policy." 
                                <br/>
                                <em>Example:</em> An order violating Article 213 (Tender Years Doctrine) may be challenged.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-900 mb-2">The Apostille Requirement</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                    You must obtain an <strong>Apostille</strong> (Authentication) from the Secretary of State where the order was issued. 
                    <br/><br/>
                    Without the Apostille, the document is inadmissible in Philippine Court.
                </p>
            </div>

        </div>
      )}

      {/* CASES TAB */}
      {activeSubTab === 'cases' && <CaseLawDb />}

      {/* SCIENCE TAB */}
      {activeSubTab === 'science' && <ScienceEvidence />}

      {/* BILLS TAB */}
      {activeSubTab === 'bills' && <LegislativeTracker />}

    </div>
  );
};

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
)

const SwordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" y1="19" x2="19" y2="13"></line><line x1="16" y1="16" x2="20" y2="20"></line><line x1="19" y1="21" x2="21" y2="19"></line></svg>
)

export default LegalFramework;
