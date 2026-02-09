
import React from 'react';
import { STRATEGIES } from '../constants';
import { Calendar, Siren, Compass, AlertOctagon, XCircle, Square, Bot, ArrowRight, Activity } from 'lucide-react';
import CounselGuide from './CounselGuide';
import BorderControl from './BorderControl';

const StrategyGuide: React.FC = () => {

  const openAiAgent = () => {
    window.dispatchEvent(new CustomEvent('open-ai-strategy'));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-24 pt-8">
      
      {/* Header (Static) */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Strategic Litigation Roadmap</h2>
            <p className="text-slate-600 text-lg mt-2 max-w-2xl">
                Custody recovery requires a multi-domain approach. This roadmap outlines the standard procedures for contested cases in the Philippines.
            </p>
        </div>
        <button 
            onClick={openAiAgent}
            className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-600 transition-all group shrink-0"
        >
            <Bot size={24} className="text-blue-400" />
            <div>
                <span className="block text-xs text-slate-400 font-normal uppercase tracking-wider">Need a custom plan?</span>
                <span className="block text-sm">Build My Strategic Brief</span>
            </div>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform ml-2"/>
        </button>
      </div>

      {/* 5-Year Litigation Lifecycle */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-4 mb-8">
            <Calendar className="text-red-500" size={32} />
            <div>
                <h3 className="text-2xl font-bold">5-Year Litigation Lifecycle</h3>
                <p className="text-slate-400 text-sm">Realistic timeline for contested custody cases.</p>
            </div>
        </div>

        <div className="relative border-l-2 border-slate-700 ml-4 space-y-12">
            
            <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500 border-2 border-slate-900"></div>
                <h4 className="text-xl font-bold text-white mb-2">Phase 1: Initial Proceedings (Months 0-6)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-red-400 text-sm mb-1">Legal Actions</strong>
                        <ul className="text-xs text-slate-300 space-y-1">
                            <li>• Retain Specialist Counsel</li>
                            <li>• File Petition for Habeas Corpus / Custody</li>
                            <li>• File Motion for Provisional Custody</li>
                            <li>• Request Hold Departure Order (HDO)</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-blue-400 text-sm mb-1">Operational</strong>
                        <ul className="text-xs text-slate-300 space-y-1">
                            <li>• Locate Child / Confirm Status</li>
                            <li>• Secure Local Communications</li>
                            <li>• Gather US/Foreign Evidence (School Records)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                <h4 className="text-xl font-bold text-white mb-2">Phase 2: Procedural Phase (Months 6-24)</h4>
                <div className="bg-slate-800 p-4 rounded-lg mb-4 border border-slate-700">
                    <p className="text-sm text-slate-300 italic mb-2">"This phase often involves significant delays due to mandatory mediation and scheduling."</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-slate-200 text-sm mb-1">Procedural Hurdles</strong>
                        <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Mandatory Mediation (CAM & JDR) - 4-6 Months</li>
                            <li>• Social Worker Home Study (CSW) - Indefinite</li>
                            <li>• Psychological Evaluations - 3-6 Months</li>
                            <li>• Re-Raffle of Case if JDR Fails</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-slate-200 text-sm mb-1">Logistical Challenges</strong>
                        <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Hearing cancellations and rescheduling.</li>
                            <li>• High travel frequency for personal appearances.</li>
                            <li>• Significant cost accumulation.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                <h4 className="text-xl font-bold text-white mb-2">Phase 3: Judgment & Appeals (Years 3-5)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-slate-200 text-sm mb-1">Court of Appeals</strong>
                        <p className="text-xs text-slate-400 mb-2">
                            Appeals are standard in contested cases. Execution of judgment is typically stayed unless "execution pending appeal" is granted.
                        </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-slate-200 text-sm mb-1">Supreme Court</strong>
                        <p className="text-xs text-slate-400 mb-2">
                            The final arbiter. Precedents like <em>Pablo-Gualberto</em> and <em>Dacasin</em> illustrate the extended timeline for final resolution.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* STANDARD PROCEDURAL CHALLENGES */}
      <div className="bg-white rounded-3xl border border-red-200 overflow-hidden shadow-lg">
        <div className="bg-red-900 p-8 text-white">
            <div className="flex items-center gap-4">
                <Activity size={32} className="text-red-400" />
                <div>
                    <h3 className="text-3xl font-bold font-serif">Standard Procedural Challenges</h3>
                    <p className="text-red-200">Common hurdles encountered during litigation.</p>
                </div>
            </div>
        </div>
        
        <div className="p-8 grid md:grid-cols-2 gap-8">
            {/* Tactic 1 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <Siren className="text-red-600" />
                    <h4 className="text-xl font-bold text-slate-900">1. The VAWC Challenge</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    <strong>The Issue:</strong> RA 9262 filings alleging "Economic Abuse" or "Psychological Violence" are common.
                    <br/><br/>
                    <strong>The Impact:</strong> Can result in Temporary Protection Orders (TPOs) limiting contact and access.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded text-xs">
                    <strong>Strategy:</strong> Ensure compliance with all laws. Prepare counter-affidavits regarding financial support. Maintain witness presence.
                </div>
            </div>

            {/* Tactic 2 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <Compass className="text-orange-600" />
                    <h4 className="text-xl font-bold text-slate-900">2. Venue & Jurisdiction</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    <strong>The Issue:</strong> Relocation of the child to remote provinces complicates venue.
                    <br/><br/>
                    <strong>The Impact:</strong> Increases litigation costs and logistical complexity.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded text-xs">
                    <strong>Strategy:</strong> File immediately in the jurisdiction of the child's habitual residence prior to relocation.
                </div>
            </div>

            {/* Tactic 3 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <AlertOctagon className="text-yellow-600" />
                    <h4 className="text-xl font-bold text-slate-900">3. Medical Delays</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    <strong>The Issue:</strong> Frequent rescheduling of hearings or visitation due to reported illness.
                    <br/><br/>
                    <strong>The Impact:</strong> Delays proceedings and disrupts bonding time.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded text-xs">
                    <strong>Strategy:</strong> Request court orders requiring medical certificates from government physicians for missed appointments.
                </div>
            </div>

            {/* Tactic 4 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <XCircle className="text-blue-600" />
                    <h4 className="text-xl font-bold text-slate-900">4. Settlement Negotiations</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    <strong>The Issue:</strong> Prolonged informal negotiations without legal filing.
                    <br/><br/>
                    <strong>The Impact:</strong> Can establish a "Status Quo" favoring the custodial parent during the delay.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded text-xs">
                    <strong>Strategy:</strong> Set strict timelines for negotiation. Do not delay legal filings indefinitely.
                </div>
            </div>
        </div>
      </div>

      {/* Phase 1: Mobilization (Counsel) */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
             <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg">1</div>
             <h3 className="text-2xl font-bold text-slate-900">Mobilization: Counsel Selection</h3>
        </div>
        <CounselGuide />
      </div>

      {/* Phase 2: The Campaign (Static List) */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">2</div>
                <h3 className="text-2xl font-bold text-slate-900">The Campaign: Litigation Protocol</h3>
             </div>
        </div>
        
        <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden lg:block"></div>
            
            <div className="space-y-12">
                {STRATEGIES.map((step, index) => (
                    <div key={step.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        
                        {/* Visual Icon */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg z-10 relative 
                                ${step.riskLevel === 'High' ? 'bg-red-600 text-white' : 'bg-slate-900 text-white'}`}>
                                <span className="font-playfair font-bold text-2xl">{index + 1}</span>
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="w-full lg:w-1/2">
                            <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative
                                ${index % 2 === 1 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                                
                                {/* Connector Line for Desktop */}
                                <div className={`hidden lg:block absolute top-8 w-12 h-0.5 bg-slate-200
                                    ${index % 2 === 1 ? '-right-12' : '-left-12'}`}></div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600 mb-6 italic text-sm">"{step.description}"</p>
                                
                                <div className="space-y-3">
                                    {step.actionItems.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm p-3 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                                            <Square size={16} className="text-slate-400 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Phase 3: Extraction (Border) */}
      <div className="space-y-6 pt-8">
        <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
             <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">3</div>
             <h3 className="text-2xl font-bold text-slate-900">Regulatory Compliance: Exit Protocols</h3>
        </div>
        <BorderControl />
      </div>

    </div>
  );
};

export default StrategyGuide;
