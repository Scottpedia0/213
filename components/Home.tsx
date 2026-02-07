import React, { useState } from 'react';
import { AlertTriangle, Globe, Lock, Info, Clock, DollarSign, ShieldAlert, XCircle, Users, Activity, HeartPulse, FileText, Scale, Gavel, BookOpen, Plane, ChevronDown, ChevronUp } from 'lucide-react';

const Home: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* HERO SECTION: The Landing */}
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl min-h-[500px] flex items-center">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 backdrop-blur-sm">
              <AlertTriangle size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Systemic Failure • Non-Hague Jurisdiction</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-playfair">
              Project <span className="text-red-500">213</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              The definitive tactical resource for navigating Article 213, the Hague Convention gap, and the strategic recovery of children in the Philippines.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Status</p>
                <p className="text-xl font-bold text-white">High Risk</p>
              </div>
              <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Treaty</p>
                <p className="text-xl font-bold text-red-400">Non-Compliant</p>
              </div>
              <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Custody</p>
                <p className="text-xl font-bold text-white">Maternal Default</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
             {/* Abstract visual element representing the complexity */}
             <div className="grid grid-cols-2 gap-4 opacity-80 transform rotate-3 scale-90">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <Lock className="text-red-500 mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">Article 213</h3>
                    <p className="text-slate-400 text-sm mt-2">No child under 7 shall be separated from the mother.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mt-8">
                    <Globe className="text-blue-500 mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">Treaty Gap</h3>
                    <p className="text-slate-400 text-sm mt-2">US-PH Hague accession not accepted.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 -mt-8">
                    <DollarSign className="text-green-500 mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">Attrition</h3>
                    <p className="text-slate-400 text-sm mt-2">5-7 year litigation timeline.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <ShieldAlert className="text-orange-500 mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">RA 9262</h3>
                    <p className="text-slate-400 text-sm mt-2">Weaponized protection orders.</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* THE CORE PROBLEM CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto -mt-8 relative z-20">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-slate-900"></div>
          <Lock className="text-slate-900 mb-6" size={32} />
          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">The Iron Curtain</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong className="text-slate-900">Article 213</strong> creates a statutory presumption of maternal custody for children under 7. This is the primary defensive wall you must breach.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          <Globe className="text-red-600 mb-6" size={32} />
          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">The Treaty Gap</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            The US has not accepted the Philippines' accession to the <strong className="text-slate-900">Hague Convention</strong>. There is no federal mechanism for "Summary Return."
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
          <Info className="text-blue-600 mb-6" size={32} />
          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">The Burden</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            To win, you cannot just be the "Better Parent." You must prove the mother is <strong className="text-slate-900">"Compellingly Unfit."</strong> The burden of proof is entirely on you.
          </p>
        </div>
      </div>

      {/* THE WAR CHEST (Nuclear) */}
      <div className="max-w-7xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-100 p-3 rounded-xl text-green-700">
                        <DollarSign size={32} />
                    </div>
                    <h3 className="text-3xl font-bold font-serif text-slate-900">The War Chest</h3>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Do not base your budget on "local" rates. Litigation in the Philippines for a foreign national is an extractive industry. You are funding a 5-7 year war of attrition involving trans-pacific travel, specialized appellate counsel, and private intelligence networks.
                </p>
                <div className="bg-red-50 border border-red-100 p-4 rounded-xl mb-6">
                    <p className="text-red-800 text-sm font-bold flex items-center gap-2">
                        <AlertTriangle size={16} /> REALITY CHECK:
                    </p>
                    <p className="text-red-700 text-sm mt-1">
                        "I have spent so much more than that." — Validated User Report. 
                        <br/>
                        Many fathers reach the Supreme Court only to run out of funds before the final ruling.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold mb-6 pb-4 border-b border-slate-100 text-slate-900">5-Year "Total War" Projection</h4>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-sm">Legal Fees (RTC to Supreme Court)</span>
                        <span className="font-mono font-bold text-slate-900">$150,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-sm">Travel & Logistics (20+ Trips)</span>
                        <span className="font-mono font-bold text-slate-900">$200,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-sm">Intel, PI, & "Fixers"</span>
                        <span className="font-mono font-bold text-slate-900">$50,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-sm">Psych Experts & Witness Care</span>
                        <span className="font-mono font-bold text-slate-900">$30,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-sm">Contingency / Delay Inflation</span>
                        <span className="font-mono font-bold text-slate-900">$70,000+</span>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center bg-slate-50 p-4 rounded-lg">
                        <span className="text-slate-900 font-bold">TOTAL EXPOSURE</span>
                        <span className="font-mono font-bold text-2xl text-red-600">$500,000+</span>
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* THE 3 MYTHS */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 font-serif mb-8 text-center">The 3 Fatal Misconceptions</h3>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <XCircle className="text-red-500" size={24} />
                    <h4 className="font-bold text-slate-900">"The Embassy Will Help"</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Reality:</strong> The US Embassy (ACS) can check on the child's welfare but <span className="underline decoration-red-300">cannot</span> enforce US custody orders, cannot retrieve the child, and cannot provide legal advice. They are strictly neutral observers.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <XCircle className="text-red-500" size={24} />
                    <h4 className="font-bold text-slate-900">"US Orders Apply"</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Reality:</strong> A US Court Order has no immediate legal effect in PH. It must first be "Recognized" via a separate petition (Rule 39, Sec 48). Until then, it is just a piece of paper to the local police.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldAlert className="text-red-500" size={24} />
                    <h4 className="font-bold text-slate-900">"Self-Help Recovery"</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Reality:</strong> Attempting to physically grab the child ("Re-abduction") is a non-bailable offense (Kidnapping) in PH if the mother has actual custody. You will be detained in Bicutan indefinitely.
                </p>
            </div>
        </div>
      </div>

      {/* INTELLIGENCE ARCHIVE (The Deep Dive) */}
      <div className="max-w-4xl mx-auto pt-12 border-t border-slate-200">
        <div className="flex items-center gap-4 mb-8">
            <BookOpen size={32} className="text-slate-900"/>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Systemic Intelligence Archive</h2>
        </div>
        
        <div className="space-y-4">
            
            {/* 1. Jurisprudence */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button onClick={() => toggleSection('juris')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left">
                    <div className="flex items-center gap-4">
                        <Gavel className="text-slate-500" size={24} />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">I. The Jurisprudential Record</h3>
                            <p className="text-sm text-slate-500">3 Decades of Supreme Court Bias</p>
                        </div>
                    </div>
                    {expandedSection === 'juris' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'juris' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                         <p className="mb-4">
                            A comprehensive review of reported Supreme Court decisions reveals a striking pattern: fathers have prevailed in custody disputes against mothers in only two narrow circumstances:
                        </p>
                        <ul className="space-y-2 mb-4 list-disc pl-5">
                            <li>When children exceed seven years of age AND express a clear preference.</li>
                            <li>When maternal unfitness reaches an extreme threshold (e.g., drug addiction in <em>Sison</em>).</li>
                        </ul>
                        <div className="bg-white p-4 rounded border border-slate-200">
                            <strong>Case Study: Pablo-Gualberto v. Gualberto (2005)</strong>
                            <p className="text-sm italic mt-1">"Not even the fact that a mother is a prostitute or has been unfaithful to her husband would render her unfit to have custody of her minor child."</p>
                        </div>
                    </div>
                )}
            </div>

            {/* 2. Hague Gap */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button onClick={() => toggleSection('hague')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left">
                    <div className="flex items-center gap-4">
                        <Globe className="text-slate-500" size={24} />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">II. The Hague Convention Gap</h3>
                            <p className="text-sm text-slate-500">Why US Orders don't work here</p>
                        </div>
                    </div>
                    {expandedSection === 'hague' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'hague' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                        <p className="mb-4">
                            The United States has <strong className="text-red-700">not accepted</strong> the Philippines as a treaty partner. This voids the "Summary Return" mechanism.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="bg-white p-3 rounded border border-slate-200 text-sm"><strong>No Federal Remedy:</strong> You cannot sue in US Federal Court for return.</li>
                            <li className="bg-white p-3 rounded border border-slate-200 text-sm"><strong>Persuasive Only:</strong> US Orders are merely "evidence".</li>
                            <li className="bg-white p-3 rounded border border-slate-200 text-sm"><strong>Not a Crime:</strong> Parental abduction is generally not treated as kidnapping if the mother has custody.</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* 3. OFW Trap */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button onClick={() => toggleSection('ofw')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left">
                    <div className="flex items-center gap-4">
                        <Plane className="text-slate-500" size={24} />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">III. OFW Fathers: The Economic Trap</h3>
                            <p className="text-sm text-slate-500">Sacrifice recharacterized as abandonment</p>
                        </div>
                    </div>
                    {expandedSection === 'ofw' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'ofw' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                         <p>
                            Approximately <strong>938,000 Filipino men</strong> work overseas (OFWs). The legal system systematically recharacterizes their economic sacrifice as "Abandonment."
                        </p>
                        <div className="bg-amber-50 p-4 rounded border border-amber-200 mt-4 text-sm text-amber-900">
                            <strong>The Double Standard:</strong> When an OFW mother leaves children with relatives, courts treat this as "reasonable caregiving." When an OFW father does the same, it is often treated as "De Facto Abandonment," allowing the mother to seize custody upon her return.
                        </div>
                    </div>
                )}
            </div>

            {/* 4. The 57% Crisis */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button onClick={() => toggleSection('illegit')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left">
                    <div className="flex items-center gap-4">
                        <Users className="text-slate-500" size={24} />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">IV. The 57% Illegitimacy Crisis</h3>
                            <p className="text-sm text-slate-500">Article 176 and Father Erasure</p>
                        </div>
                    </div>
                    {expandedSection === 'illegit' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'illegit' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                        <p className="mb-4">
                            PSA data confirms that <strong>57.1%</strong> of all Filipino births occur outside marriage. Under Article 176 of the Family Code, every one of these children is automatically placed under the <strong>"Sole and Exclusive"</strong> parental authority of the mother.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                             <div className="bg-white p-3 rounded border border-slate-200 text-sm">
                                <strong>The Biological Father:</strong> Has ZERO custodial rights. Even if he raised the child from birth. He is a "stranger" with visitation privileges.
                             </div>
                             <div className="bg-white p-3 rounded border border-slate-200 text-sm">
                                <strong>Substitute Authority:</strong> If the mother dies, the law prioritizes Grandparents over the father.
                             </div>
                        </div>
                    </div>
                )}
            </div>

             {/* 5. RA 9262 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button onClick={() => toggleSection('vawc')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left">
                    <div className="flex items-center gap-4">
                        <ShieldAlert className="text-slate-500" size={24} />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">V. RA 9262: The Strategic Weapon</h3>
                            <p className="text-sm text-slate-500">Ex-Parte Orders and Airport Blocks</p>
                        </div>
                    </div>
                    {expandedSection === 'vawc' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'vawc' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                        <p className="mb-4">
                             The Anti-VAWC Act is used strategically to eliminate fathers. A Temporary Protection Order (TPO) can be issued <strong>ex-parte</strong> (without hearing) on the day of filing.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Immediate Eviction from family home.</li>
                            <li>Automatic award of custody to mother.</li>
                            <li>Hold Departure Orders blocking exit.</li>
                            <li>Weaponized "Economic Abuse" charges.</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* 6. Psych Toll */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button onClick={() => toggleSection('psych')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left">
                    <div className="flex items-center gap-4">
                        <HeartPulse className="text-slate-500" size={24} />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">VI. The Psychological Toll</h3>
                            <p className="text-sm text-slate-500">Suicidality and Depression Statistics</p>
                        </div>
                    </div>
                    {expandedSection === 'psych' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'psych' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                        <p className="mb-4">
                            The system's impact is lethal. Philippine male suicide rates increased <strong>15x</strong> (from 0.23 to 3.59 per 100k) between 1984 and 2005.
                        </p>
                        <div className="bg-white p-4 rounded border border-slate-200 italic text-slate-600 text-sm">
                            "Even competent, present, and caring fathers are routinely sidelined with increased rates of depression, anxiety, trauma, and in some cases, suicidality."
                        </div>
                    </div>
                )}
            </div>

            {/* 7. Advocacy Vacuum */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button onClick={() => toggleSection('advocacy')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left">
                    <div className="flex items-center gap-4">
                        <Activity className="text-slate-500" size={24} />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">VII. The Advocacy Vacuum</h3>
                            <p className="text-sm text-slate-500">Lack of institutional support</p>
                        </div>
                    </div>
                    {expandedSection === 'advocacy' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'advocacy' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                         <p>
                            Unlike the UK or US, the Philippines has <strong>ZERO</strong> independent NGOs dedicated to fathers' rights litigation. There is no legal aid for men, and government commissions (PCW) focus exclusively on women and children.
                        </p>
                    </div>
                )}
            </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
