import React from 'react';
import { STRATEGIES } from '../constants';
import { ArrowRight, AlertOctagon, Anchor, Microscope, Plane, Users, Compass, Calendar, Shield, Brain, Sword, XCircle, Siren } from 'lucide-react';
import CounselGuide from './CounselGuide';
import BorderControl from './BorderControl';

const StrategyGuide: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-24 pt-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-slate-900 font-serif">The Operational Roadmap</h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Custody recovery in the Philippines is a multi-domain campaign: Legal, Operational, and Psychological.
        </p>
      </div>

      {/* 5-Year Battle Rhythm Timeline */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-4 mb-8">
            <Calendar className="text-red-500" size={32} />
            <div>
                <h3 className="text-2xl font-bold">The 5-Year Battle Rhythm</h3>
                <p className="text-slate-400 text-sm">A realistic timeline of a contested custody case in PH.</p>
            </div>
        </div>

        <div className="relative border-l-2 border-slate-700 ml-4 space-y-12">
            
            <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500 border-2 border-slate-900"></div>
                <h4 className="text-xl font-bold text-white mb-2">Phase 1: The Breach (Months 0-6)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-red-400 text-sm mb-1">Legal Actions</strong>
                        <ul className="text-xs text-slate-300 space-y-1">
                            <li>• Retain Specialist Counsel ($10k-$20k)</li>
                            <li>• File Petition for Habeas Corpus / Custody</li>
                            <li>• File Urgent Motion for Provisional Custody</li>
                            <li>• Request Hold Departure Order (HDO)</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-blue-400 text-sm mb-1">Operational</strong>
                        <ul className="text-xs text-slate-300 space-y-1">
                            <li>• Private Investigator (Locate Child)</li>
                            <li>• Secure PH SIM & Safe House</li>
                            <li>• Gather US Evidence (Police Reports, School Records)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                <h4 className="text-xl font-bold text-white mb-2">Phase 2: The Grind (Months 6-24)</h4>
                <div className="bg-slate-800 p-4 rounded-lg mb-4 border border-slate-700">
                    <p className="text-sm text-slate-300 italic mb-2">"This is where 80% of foreign fathers quit due to exhaustion and cost."</p>
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
                        <strong className="block text-slate-200 text-sm mb-1">The Trap</strong>
                        <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Opposing counsel will schedule hearings and cancel morning-of.</li>
                            <li>• You fly to Manila, they don't show up.</li>
                            <li>• Cost: $2k-$5k per wasted trip.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                <h4 className="text-xl font-bold text-white mb-2">Phase 3: The Verdict & Appeal (Years 3-5)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-slate-200 text-sm mb-1">Court of Appeals</strong>
                        <p className="text-xs text-slate-400 mb-2">
                            If you win at RTC, the mother WILL appeal. This stays the execution of judgment unless you have "execution pending appeal."
                        </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <strong className="block text-slate-200 text-sm mb-1">Supreme Court</strong>
                        <p className="text-xs text-slate-400 mb-2">
                            The final arbiter. Cases like <em>Pablo-Gualberto</em> and <em>Dacasin</em> took 5-10 years to reach a final decision here.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* THE ENEMY PLAYBOOK */}
      <div className="bg-white rounded-3xl border border-red-200 overflow-hidden shadow-lg">
        <div className="bg-red-900 p-8 text-white">
            <div className="flex items-center gap-4">
                <Sword size={32} className="text-red-400" />
                <div>
                    <h3 className="text-3xl font-bold font-serif">The Opposition's Playbook</h3>
                    <p className="text-red-200">The 4 standard tactics local counsel will use to destroy your case.</p>
                </div>
            </div>
        </div>
        
        <div className="p-8 grid md:grid-cols-2 gap-8">
            {/* Tactic 1 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <Siren className="text-red-600" />
                    <h4 className="text-xl font-bold text-slate-900">1. The VAWC Ambush</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    <strong>The Move:</strong> They file a VAWC (RA 9262) case alleging "Economic Abuse" or "Psychological Violence" the moment you land in PH.
                    <br/><br/>
                    <strong>The Goal:</strong> Get an instant Temporary Protection Order (TPO) to block you from seeing the child and potentially arrest you.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded text-xs">
                    <strong>Counter:</strong> Bring a companion (witness) everywhere. Never be alone with the mother. Pre-draft a Counter-Affidavit with your lawyer proving financial support.
                </div>
            </div>

            {/* Tactic 2 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <Compass className="text-orange-600" />
                    <h4 className="text-xl font-bold text-slate-900">2. The Venue Trap</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    <strong>The Move:</strong> She moves the child to a remote province (e.g., Sulu, Tawi-Tawi, or remote Visayas) and files for custody there.
                    <br/><br/>
                    <strong>The Goal:</strong> Drain your war chest with travel costs and leverage "home court advantage" with a local judge who knows her family.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded text-xs">
                    <strong>Counter:</strong> File immediately in the city where the child <em>was residing</em> before the taking. Jurisdiction attaches upon filing.
                </div>
            </div>

            {/* Tactic 3 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <AlertOctagon className="text-yellow-600" />
                    <h4 className="text-xl font-bold text-slate-900">3. The Medical Stall</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    <strong>The Move:</strong> Every time a hearing or visitation is scheduled, the child suddenly has a "fever" or "asthma."
                    <br/><br/>
                    <strong>The Goal:</strong> Delay proceedings indefinitely and prevent you from bonding with the child.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded text-xs">
                    <strong>Counter:</strong> Demand a medical certificate from a <em>Government Hospital</em> (not a private clinic) within 24 hours of any missed appointment.
                </div>
            </div>

            {/* Tactic 4 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <XCircle className="text-blue-600" />
                    <h4 className="text-xl font-bold text-slate-900">4. The Settlement Mirage</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                    <strong>The Move:</strong> "Let's not involve lawyers. Let's just talk." They delay your filing for months with promises of a deal.
                    <br/><br/>
                    <strong>The Goal:</strong> Let the child settle into a new school/environment, strengthening their "Status Quo" argument in court later.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded text-xs">
                    <strong>Counter:</strong> Set a hard 48-hour deadline. If no agreement is signed, file the case. Never delay filing for talk.
                </div>
            </div>
        </div>
      </div>

      {/* Psychological Warfare Section */}
      <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
         <div className="flex items-center gap-4 mb-6">
            <Brain className="text-amber-700" size={32} />
            <h3 className="text-2xl font-bold text-amber-900">The Psychological Battlefield</h3>
         </div>
         <p className="text-amber-800 mb-6 max-w-3xl">
            The opposing strategy is not just legal; it is designed to break your will. You must inoculate yourself against these tactics.
         </p>
         <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
                <h4 className="font-bold text-amber-900 mb-2">1. Isolation</h4>
                <p className="text-sm text-slate-600">
                    They will cut off communication. No FaceTime. No photos. They want you to feel like a stranger to your own child so you give up.
                </p>
                <div className="mt-3 text-xs font-bold text-amber-700">Counter: Maintain a detailed "Attempt Log" of every call/msg.</div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
                <h4 className="font-bold text-amber-900 mb-2">2. "Foreigner" Stigma</h4>
                <p className="text-sm text-slate-600">
                    They will paint you as an "arrogant foreigner" who thinks money buys justice. They will play the victim card to the judge and social workers.
                </p>
                <div className="mt-3 text-xs font-bold text-amber-700">Counter: Show humility. Learn basic Tagalog. Show respect to the court.</div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
                <h4 className="font-bold text-amber-900 mb-2">3. Financial Bleed</h4>
                <p className="text-sm text-slate-600">
                    They know travel costs are your weakness. They will postpone hearings specifically to make you burn cash on flights.
                </p>
                <div className="mt-3 text-xs font-bold text-amber-700">Counter: Move to PH if possible. Or hire counsel with "Substitute Appearance" authority.</div>
            </div>
         </div>
      </div>

      {/* Phase 1: Mobilization (Counsel) */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
             <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg">1</div>
             <h3 className="text-2xl font-bold text-slate-900">Mobilization: Hiring Counsel</h3>
        </div>
        <CounselGuide />
      </div>

      {/* Phase 2: The Campaign (Strategies) */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
             <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">2</div>
             <h3 className="text-2xl font-bold text-slate-900">The Campaign: Litigation Protocol</h3>
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
                            <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative
                                ${index % 2 === 1 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                                {/* Connector Line for Desktop */}
                                <div className={`hidden lg:block absolute top-8 w-12 h-0.5 bg-slate-200 
                                    ${index % 2 === 1 ? '-right-12' : '-left-12'}`}></div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600 mb-6 italic">"{step.description}"</p>
                                
                                <div className="space-y-3">
                                    {step.actionItems.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                            {item}
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
             <h3 className="text-2xl font-bold text-slate-900">Extraction: Border Operations</h3>
        </div>
        <BorderControl />
      </div>

    </div>
  );
};

export default StrategyGuide;