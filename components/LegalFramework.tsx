import React, { useState } from 'react';
import { KEY_STATUTES } from '../constants';
import { ShieldAlert, Book, Gavel, Scale, FileText, Clock, RefreshCw, Microscope, Brain, Radar, Globe, Quote, Map, Smartphone, Wifi, Server } from 'lucide-react';
import CaseLawDb from './CaseLawDb';
import ScienceEvidence from './ScienceEvidence';
import LegislativeTracker from './LegislativeTracker';

const LegalFramework: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'statutes' | 'rules' | 'cases' | 'recognition' | 'science' | 'bills'>('statutes');

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
                The Philippine custody regime is not arbitrary; it is a fortress built on specific, overlapping statutes.
                </p>
            </div>

            {/* Historical Context */}
            <div className="bg-slate-100 p-6 rounded-xl border-l-4 border-slate-900">
                <div className="flex gap-4">
                    <Book className="text-slate-500 shrink-0" />
                    <div className="text-sm text-slate-700 leading-relaxed">
                        <strong>Historical Origin:</strong> The "Tender Years" doctrine originated in the <em>Custody of Infants Act 1839 (UK)</em>. It was a legislative compromise from the Victorian era, not a scientific finding. The Philippines is one of the last jurisdictions to retain this strict presumption in Article 213.
                    </div>
                </div>
            </div>

             {/* The Emotion of the Law */}
            <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Quote size={80} />
                </div>
                <h3 className="text-xl font-bold text-red-900 font-serif mb-4 flex items-center gap-2">
                    <Quote size={20} className="text-red-500"/> The Law's Own Words
                </h3>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                         <p className="text-slate-600 italic text-lg leading-relaxed mb-4">
                            "The general rule is recommended in order to avoid many a tragedy where a mother has seen her baby torn away from her. <strong className="text-red-900">No man can sound the deep sorrows of a mother who is deprived of her child of tender age.</strong>"
                        </p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">— Code Commission Rationale for Article 213</p>
                    </div>
                    <div className="flex-1 bg-red-50 p-6 rounded-xl border border-red-100">
                        <strong className="block text-red-800 text-sm mb-2 uppercase tracking-wide">Analysis</strong>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            This rationale is cited approvingly by the Supreme Court (e.g., <em>Perez v. CA</em>). It explicitly prioritizes "protecting the mother's heart" over the child's actual welfare. The law is designed to prevent maternal sorrow, not to ensure child stability.
                        </p>
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
                    <h3 className="text-xl font-bold text-slate-900 font-serif">The Barrier</h3>
                </div>
                
                {KEY_STATUTES.filter(s => s.severity === 'Critical').map((statute) => (
                    <div key={statute.code} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 group hover:border-slate-300 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-slate-900 font-serif">{statute.name}</h4>
                        <span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded">{statute.code}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{statute.description}</p>
                        <div className="pl-4 border-l-2 border-red-500">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Tactical Impact</p>
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
                    <h3 className="text-xl font-bold text-slate-900 font-serif">The Threats</h3>
                </div>

                {KEY_STATUTES.filter(s => s.severity === 'High').map((statute) => (
                    <div key={statute.code} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 group hover:border-slate-300 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-slate-900 font-serif">{statute.name}</h4>
                        <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider rounded">{statute.code}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{statute.description}</p>
                        <div className="pl-4 border-l-2 border-orange-500">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Tactical Impact</p>
                        <p className="text-slate-800 text-sm font-medium italic">"{statute.impact}"</p>
                        </div>
                    </div>
                ))}

                {/* Special Note on RA 9262 */}
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <div className="flex items-start gap-3">
                    <ShieldAlert className="text-amber-600 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="text-lg font-bold text-amber-900 font-serif mb-2">The RA 9262 Trap</h4>
                        <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                        The Anti-VAWC Act is frequently weaponized. It allows for <em className="font-bold">ex-parte</em> Temporary Protection Orders (TPO).
                        </p>
                        <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Immediate criminalization of contact
                        </li>
                        <li className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            No hearing required for initial order
                        </li>
                        <li className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Used to block fathers at the airport
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
                            <h3 className="text-2xl font-bold font-serif">The Digital Lifeline</h3>
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
                                <strong>"Electronic Visitation":</strong> Courts can now issue enforceable orders for video calls. A mother refusing to answer a scheduled Skype call is now violating a court order, creating evidence of alienation.
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
                                <strong>"Safe Harbor Interviews":</strong> Allows children to be interviewed by the judge virtually, away from the intimidating physical presence of the custodial mother. This reduces coaching and trauma.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Anatomy of Delay */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 font-serif">The Anatomy of Delay</h3>
                        <p className="text-sm text-slate-500">Why cases in the Philippines take 3-5 years. It is designed this way.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 relative">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                <div className="w-0.5 h-full bg-slate-200 my-2"></div>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Mandatory Mediation (CAM)</h4>
                                <p className="text-xs text-slate-500 mt-1">Duration: 30-60 Days</p>
                                <p className="text-sm text-slate-600 mt-2">
                                    Before a judge hears the case, you are forced into "Court-Annexed Mediation." You sit in a room and are told to settle. 
                                    <span className="block mt-1 font-semibold text-slate-800">Tactical Note: Opposing counsel uses this to fish for your bottom line.</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                <div className="w-0.5 h-full bg-slate-200 my-2"></div>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">JDR (Judicial Dispute Resolution)</h4>
                                <p className="text-xs text-slate-500 mt-1">Duration: 60-90 Days</p>
                                <p className="text-sm text-slate-600 mt-2">
                                    If CAM fails, you go to JDR. A <i>different</i> judge tries to mediate. 
                                    <span className="block mt-1 font-semibold text-red-600 flex items-center gap-1">
                                        <RefreshCw size={12}/> The Re-Raffle Trap:
                                    </span>
                                    If JDR fails, the JDR judge recuses themselves, and the case is "Re-Raffled" to a trial judge. This restart causes massive delays.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                <div className="w-0.5 h-full bg-slate-200 my-2"></div>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">The Social Worker Study</h4>
                                <p className="text-xs text-slate-500 mt-1">Duration: Indefinite</p>
                                <p className="text-sm text-slate-600 mt-2">
                                    The Court Social Worker (CSW) must visit both homes. If the mother lives in a remote province, the CSW may delay travel for months claiming "lack of budget" or "safety concerns."
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">"Postponement due to Absence"</h4>
                                <p className="text-xs text-slate-500 mt-1">Impact: +3-6 Months per occurrence</p>
                                <p className="text-sm text-slate-600 mt-2">
                                    Lawyers often call in sick on the morning of the hearing. The next available calendar date for the judge is usually 2-3 months later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* RULE MAP TAB (New) */}
      {activeSubTab === 'rules' && (
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
             <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Operational Rules of Engagement</h2>
                <p className="text-slate-600 text-lg font-light">
                    This is how the Family Code operates in the trenches. These are the functional rules courts apply daily, often overriding statutory text.
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
                            <p className="text-sm text-slate-500">The rigid logic tree courts use to determine custody.</p>
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
                                            <strong>Result:</strong> Father has NO custody rights. Custody can only transfer if mother is <span className="underline">Unfit</span> or <span className="underline">Absent</span> (Substitute Parental Authority).
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
                        <h3 className="text-white font-bold text-lg">The "Iron Curtain" (Article 213)</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-slate-800 font-serif italic text-lg mb-4 border-l-4 border-red-500 pl-4">
                            "No child under seven years of age shall be separated from the mother unless the court finds compelling reasons."
                        </p>
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-slate-900">Operational Reality:</strong> This is treated as a near-absolute presumption. To break it, you cannot just be a "better" parent. You must prove the mother is functionally dangerous to the child.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <strong className="block text-slate-700 mb-2">Compelling Reasons (High Bar):</strong>
                                <ul className="grid grid-cols-2 gap-2 text-xs">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Drug Addiction (Proven by test)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Gross Neglect / Abandonment</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>Maltreatment (Proven by medical)</li>
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
                        <h3 className="text-white font-bold text-lg">The Illegitimate Baseline (Article 176)</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-slate-800 font-serif italic text-lg mb-4 border-l-4 border-red-500 pl-4">
                            "Illegitimate children shall be under the sole and exclusive parental authority of the mother."
                        </p>
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-slate-900">Operational Reality:</strong> If you are not married to the mother, you have NO custodial rights. Even if the child is over 7. Even if you raised the child alone.
                            </p>
                            <p>
                                Courts treat Article 176 as a "Second Baseline." Even if Art 213 (age) doesn't apply, Art 176 still blocks father custody unless unfitness is proven.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Visitation & Travel */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                     <div className="bg-slate-900 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                        <h3 className="text-white font-bold text-lg">The "Consent-to-Take-Out" Trap</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                Even when a father wins visitation rights, courts routinely add a deadly condition:
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-900 italic font-medium">
                                "Petitioner may take the child out of the residence only with the written consent of the mother."
                            </div>
                            <p>
                                <strong className="text-slate-900">Impact:</strong> This effectively neutralizes visitation. If the mother refuses consent (which she will), you are stuck visiting in her living room under supervision.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. Procedural Vehicles */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                     <div className="bg-slate-900 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">4</div>
                        <h3 className="text-white font-bold text-lg">The "Habeas Corpus" Move</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-slate-900">The Tactic:</strong> Custody battles often start as Habeas Corpus petitions. Why? Because it is a "Special Proceeding" meant to be summary (fast).
                            </p>
                            <p>
                                <strong className="text-slate-900">The Counter-Move:</strong> The Supreme Court (see <em>Bagtas v. Santos</em>) has ruled that producing the child does not moot the case. The court CAN and MUST proceed to determine custody/best interest, often converting the summary hearing into a full-blown trial.
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
                                <strong className="text-slate-900">The Risk:</strong> You cannot sign away rights or duties. The Supreme Court (see <em>Dacasin v. Dacasin</em>) has voided private joint custody agreements if they are seen to conflict with the mandatory provisions of Article 213.
                            </p>
                            <p>
                                <strong className="text-slate-900">Strategic Note:</strong> Do not rely on a notarized agreement from the barangay. It can be overturned by a Family Court instantly.
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
                <h2 className="text-3xl font-bold text-slate-900">The "Useless" US Order</h2>
                <p className="text-slate-600 text-lg font-light">
                Why your US Court Order is treated as "just a piece of paper" in the Philippines, and the specific legal process to fix it.
                </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                    <ShieldAlert className="text-red-600" size={32} />
                    <h3 className="text-2xl font-bold text-red-900">The Misconception</h3>
                </div>
                <p className="text-red-800 leading-relaxed text-lg">
                    "I have a US Court Order awarding me full custody. I can just show this to the Philippine Police and they will give me my child."
                </p>
                <div className="mt-6 bg-white p-4 rounded-xl border border-red-100">
                    <strong className="block text-red-600 mb-1 font-bold uppercase tracking-wide">The Reality</strong>
                    <p className="text-slate-700">
                        The Philippines is a sovereign nation. It does not automatically recognize the judicial acts of another country. 
                        A US Order has <strong className="text-slate-900">NO legal effect</strong> until a Philippine Court says it does.
                    </p>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Globe className="text-blue-500" />
                    The Solution: Petition for Recognition
                </h3>
                <p className="text-slate-600 mb-6">
                    To make your US Order enforceable, you must file a <strong>Petition for Recognition of Foreign Judgment</strong> under <em>Rule 39, Section 48</em> of the Rules of Court.
                </p>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <h4 className="font-bold text-slate-900">It is a New Trial</h4>
                            <p className="text-sm text-slate-600 mt-1">It is not a stamp. It is a full trial where you must prove the US Court had jurisdiction and that the judgment is valid.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <h4 className="font-bold text-slate-900">The "Reprosecution" Risk</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                The opposing party can defend against recognition by claiming <em>"want of notice, collusion, fraud, or clear mistake of law or fact."</em> This basically allows them to relitigate the custody case in PH.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <h4 className="font-bold text-slate-900">The Public Policy Defense</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                Even if valid, a PH court can reject the US Order if it violates "Public Policy." 
                                <br/>
                                <em>Example:</em> A US order awarding custody of a breastfeeding infant to the father might be rejected as contrary to Article 213 (Tender Years Doctrine).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-900 mb-2">The Apostille Requirement</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                    You cannot just bring a photocopy of the US Order. You must obtain an <strong>Apostille</strong> (Authentication) from the Secretary of State where the order was issued. 
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
