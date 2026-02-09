
import React, { useState } from 'react';
import { AlertTriangle, Globe, Lock, DollarSign, ShieldAlert, XCircle, Users, Activity, HeartPulse, Gavel, BookOpen, Plane, ChevronDown, ChevronUp, Bot, ArrowRight, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const openAiAgent = () => {
    // Dispatch custom event to open the AI Assistant
    window.dispatchEvent(new CustomEvent('open-ai-strategy'));
  };

  return (
    <div className="space-y-16 pb-24">
      {/* HERO SECTION: The Landing */}
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl min-h-[500px] flex items-center">
        {/* Background Effects - Opacity reduced for better visibility */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700 backdrop-blur-sm">
              <ShieldCheck size={16} className="text-emerald-400"/>
              <span className="text-xs font-bold uppercase tracking-wider">Advocacy for Child Welfare</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-playfair">
              Project <span className="text-red-500">213</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              A strategic advocacy and analytical resource for navigating Article 213, the Hague Convention gap, and the modernization of custody protocols in the Philippines.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Status</p>
                <p className="text-xl font-bold text-white">Systemic Gap</p>
              </div>
              <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Treaty</p>
                <p className="text-xl font-bold text-red-400">Non-Compliant</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10"></div>
             {/* Abstract visual element representing the complexity */}
             <div className="grid grid-cols-2 gap-4 opacity-90 transform rotate-3 scale-90">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
                    <Lock className="text-red-500 mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">Article 213</h3>
                    <p className="text-slate-400 text-sm mt-2">Statutory Stagnation.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mt-8 shadow-xl">
                    <Globe className="text-blue-500 mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">Treaty Gap</h3>
                    <p className="text-slate-400 text-sm mt-2">Jurisdictional Void.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 -mt-8 shadow-xl">
                    <DollarSign className="text-green-500 mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">Attrition</h3>
                    <p className="text-slate-400 text-sm mt-2">Litigation Lifecycle.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
                    <ShieldAlert className="text-orange-500 mb-4" size={32} />
                    <h3 className="text-white font-bold text-lg">RA 9262</h3>
                    <p className="text-slate-400 text-sm mt-2">Procedural Complexity.</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* FEATURED: AI STRATEGY ENGINE */}
      <div className="max-w-4xl mx-auto -mt-12 relative z-30 px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-slate-900 p-8 md:w-1/3 flex flex-col justify-center text-white">
                <Bot size={48} className="text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold font-serif mb-2">Case Analysis</h3>
                <p className="text-slate-400 text-sm">Our AI Case Analyst can interview you and build a custom strategic brief.</p>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center items-start bg-slate-50">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Interactive Case Assessment</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Provide the details of your situation (e.g., "My child is 4," or "I have a Foreign Court Order") to generate a tailored <strong>Strategic Action Plan</strong> for consultation with counsel.
                </p>
                <button 
                    onClick={openAiAgent}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 group"
                >
                    Build My Strategic Brief <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
            </div>
        </div>
      </div>

      {/* THE CORE PROBLEM CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-slate-900"></div>
          <Lock className="text-slate-900 mb-6" size={32} />
          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Statutory Stagnation</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong className="text-slate-900">Article 213</strong> creates a mandatory presumption of maternal custody for children under 7. This 19th-century doctrine remains unaligned with modern developmental science.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          <Globe className="text-red-600 mb-6" size={32} />
          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">The Treaty Gap</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            The US has not accepted the Philippines' accession to the <strong className="text-slate-900">Hague Convention</strong>. This creates a jurisdictional void where "Summary Return" mechanisms are unavailable.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
          <ShieldCheck className="text-blue-600 mb-6" size={32} />
          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Procedural Application</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            We support laws protecting children from abuse. We advocate against the <strong className="text-slate-900">procedural misapplication</strong> of these statutes to alienate children from fit parents.
          </p>
        </div>
      </div>

      {/* FINANCIAL MODELING */}
      <div className="max-w-7xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-100 p-3 rounded-xl text-green-700">
                        <DollarSign size={32} />
                    </div>
                    <h3 className="text-3xl font-bold font-serif text-slate-900">Financial Modeling</h3>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Litigation in the Philippines for a foreign national involves significant overhead. A robust strategy requires planning for a 5-7 year timeline involving trans-pacific travel, specialized appellate counsel, and logistical support.
                </p>
                <div className="bg-red-50 border border-red-100 p-4 rounded-xl mb-6">
                    <p className="text-red-800 text-sm font-bold flex items-center gap-2">
                        <AlertTriangle size={16} /> RESOURCE ALLOCATION:
                    </p>
                    <p className="text-red-700 text-sm mt-1">
                        Many litigants reach the Supreme Court only to exhaust funds before a final ruling. Accurate financial forecasting is essential for long-term viability.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold mb-6 pb-4 border-b border-slate-100 text-slate-900">5-Year Litigation Projection</h4>
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
                        <span className="text-slate-500 text-sm">Intel, PI, & Support Services</span>
                        <span className="font-mono font-bold text-slate-900">$50,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-sm">Psych Experts & Witness Care</span>
                        <span className="font-mono font-bold text-slate-900">$30,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-sm">Contingency / Inflation</span>
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

      {/* THE 3 MISCONCEPTIONS */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 font-serif mb-8 text-center">3 Common Misconceptions</h3>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <XCircle className="text-red-500" size={24} />
                    <h4 className="font-bold text-slate-900">"The Embassy Will Intervene"</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Reality:</strong> The US Embassy (ACS) can conduct welfare checks but <span className="underline decoration-red-300">cannot</span> enforce US custody orders or provide legal advice. They maintain strict neutrality.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <XCircle className="text-red-500" size={24} />
                    <h4 className="font-bold text-slate-900">"US Orders Apply Automatically"</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Reality:</strong> A US Court Order has no immediate legal effect in PH. It must first be "Recognized" via a Petition for Recognition of Foreign Judgment (Rule 39, Sec 48).
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldAlert className="text-red-500" size={24} />
                    <h4 className="font-bold text-slate-900">"Extra-Judicial Measures"</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Reality:</strong> Attempting to physically retrieve the child without a local court order can lead to criminal charges (Kidnapping) if the mother has statutory custody.
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
                            <p className="text-sm text-slate-500">Decades of Supreme Court Precedent</p>
                        </div>
                    </div>
                    {expandedSection === 'juris' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'juris' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                         <p className="mb-4">
                            A comprehensive review of reported Supreme Court decisions reveals a consistent pattern: custody is rarely awarded to fathers of children under seven, absent an extreme threshold of maternal unfitness (e.g., drug addiction as seen in <em>Sison</em>).
                        </p>
                        <ul className="space-y-2 mb-4 list-disc pl-5">
                            <li>Exceptions are narrow and strictly construed.</li>
                            <li>The "Best Interest" standard is often subordinate to the statutory age presumption.</li>
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
                            <p className="text-sm text-slate-500">Jurisdictional Limitations</p>
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
                            <li className="bg-white p-3 rounded border border-slate-200 text-sm"><strong>No Federal Remedy:</strong> US Federal Courts lack jurisdiction for return orders.</li>
                            <li className="bg-white p-3 rounded border border-slate-200 text-sm"><strong>Evidentiary Weight:</strong> US Orders are treated as evidence, not judgments.</li>
                            <li className="bg-white p-3 rounded border border-slate-200 text-sm"><strong>Legal Definition:</strong> Parental taking is generally not kidnapping if the mother holds statutory custody.</li>
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
                            <h3 className="text-lg font-bold text-slate-900">III. OFW Fathers: The Economic Paradox</h3>
                            <p className="text-sm text-slate-500">Migration and Parental Authority</p>
                        </div>
                    </div>
                    {expandedSection === 'ofw' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'ofw' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                         <p>
                            Approximately <strong>938,000 Filipino men</strong> work overseas (OFWs). The legal system often interprets this economic necessity as "lack of physical presence," which can be detrimental in custody evaluations.
                        </p>
                        <div className="bg-amber-50 p-4 rounded border border-amber-200 mt-4 text-sm text-amber-900">
                            <strong>The Double Standard:</strong> When an OFW mother delegates care to relatives, it is often viewed as "reasonable caregiving." When an OFW father does the same, it may be challenged as "De Facto Abandonment."
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
                            <h3 className="text-lg font-bold text-slate-900">IV. The Illegitimacy Statute</h3>
                            <p className="text-sm text-slate-500">Article 176 and Parental Authority</p>
                        </div>
                    </div>
                    {expandedSection === 'illegit' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'illegit' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                        <p className="mb-4">
                            PSA data confirms that <strong>57.1%</strong> of all Filipino births occur outside marriage. Under Article 176 of the Family Code, these children are automatically placed under the <strong>"Sole and Exclusive"</strong> parental authority of the mother.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                             <div className="bg-white p-3 rounded border border-slate-200 text-sm">
                                <strong>The Biological Father:</strong> Lacks custodial rights by default. Rights are limited to visitation and support unless unfitness is proven.
                             </div>
                             <div className="bg-white p-3 rounded border border-slate-200 text-sm">
                                <strong>Substitute Authority:</strong> Hierarchy prioritizes Grandparents over the father in the mother's absence.
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
                            <h3 className="text-lg font-bold text-slate-900">V. RA 9262: Procedural Complexities</h3>
                            <p className="text-sm text-slate-500">Ex-Parte Orders and Implications</p>
                        </div>
                    </div>
                    {expandedSection === 'vawc' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'vawc' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                        <p className="mb-4">
                             The Anti-VAWC Act creates significant procedural challenges. A Temporary Protection Order (TPO) can be issued <strong>ex-parte</strong> (without hearing) upon filing, leading to:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Immediate exclusion from the family home.</li>
                            <li>Provisional custody awarded to the petitioner.</li>
                            <li>Issuance of Hold Departure Orders.</li>
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
                            <h3 className="text-lg font-bold text-slate-900">VI. The Human Impact</h3>
                            <p className="text-sm text-slate-500">Mental Health Correlations</p>
                        </div>
                    </div>
                    {expandedSection === 'psych' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'psych' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                        <p className="mb-4">
                            Systemic separation from children has profound mental health implications for non-custodial parents.
                        </p>
                        <div className="bg-white p-4 rounded border border-slate-200 italic text-slate-600 text-sm">
                            "Competent, present, and caring fathers routinely face increased rates of depression, anxiety, and trauma due to prolonged separation."
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
                            <h3 className="text-lg font-bold text-slate-900">VII. The Advocacy Landscape</h3>
                            <p className="text-sm text-slate-500">Institutional Gaps</p>
                        </div>
                    </div>
                    {expandedSection === 'advocacy' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSection === 'advocacy' && (
                    <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100 text-slate-700 leading-relaxed">
                         <p>
                            There is currently a lack of independent NGOs in the Philippines dedicated to the specific legal needs of non-custodial fathers, creating a gap in institutional support and legal aid resources.
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
