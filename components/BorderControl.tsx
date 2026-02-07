import React from 'react';
import { Plane, AlertTriangle, FileCheck, Siren, XCircle, Book } from 'lucide-react';

const BorderControl: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pt-8 pb-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">The Exit Maze</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Winning custody in court does not guarantee you can leave the country. The Bureau of Immigration (BI) is the final boss.
        </p>
      </div>

      {/* The 3 Barriers */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 border-t-4 border-red-600 shadow-sm">
          <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <XCircle className="text-red-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">HDO</h3>
          <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-4">Hold Departure Order</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Issued by the RTC (Regional Trial Court). Strictly prevents travel. Usually tied to a filed Criminal Case (e.g., Kidnapping, VAWC).
          </p>
          <div className="bg-slate-50 p-3 rounded text-xs text-slate-500">
            <strong>Check Status:</strong> Requires verification with BI Main Office in Intramuros.
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border-t-4 border-orange-500 shadow-sm">
           <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Siren className="text-orange-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">ILBO</h3>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">Immigration Lookout Bulletin</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Issued by the DOJ. Does not strictly prohibit travel but flags the passenger for "secondary inspection," often leading to missed flights or offloading.
          </p>
          <div className="bg-slate-50 p-3 rounded text-xs text-slate-500">
            <strong>Trigger:</strong> Can be requested by any party with a pending case/investigation.
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border-t-4 border-blue-500 shadow-sm">
           <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <FileCheck className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">DSWD Clearance</h3>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">Travel Clearance for Minors</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Required for Filipino minors traveling alone or with a non-relative.
            <br/><br/>
            <strong>The Trap:</strong> If the child is illegitimate, the father is legally a "non-relative" for travel purposes without maternal consent.
          </p>
        </div>
      </div>

      {/* Deep Dive: The Dual Passport Trap */}
      <div className="bg-slate-100 rounded-3xl p-8 md:p-12 border border-slate-200">
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <Book className="text-slate-900" size={48} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-4">The Dual Passport Dilemma</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                    A common misconception is that a US Passport acts as a "Get Out of Jail Free" card. It does not.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200">
                        <strong className="block text-slate-900 mb-2 text-sm">The "Filipino First" Doctrine</strong>
                        <p className="text-xs text-slate-600">
                            If the child is a dual citizen, Philippine Immigration authorities recognize them primarily as Filipino citizens while on Philippine soil. They are subject to DSWD travel clearance rules regardless of their US passport.
                        </p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200">
                        <strong className="block text-slate-900 mb-2 text-sm">Exit Requirements</strong>
                        <p className="text-xs text-slate-600">
                            You must present the passport used to ENTER the country. If they entered on a PH passport, they must exit on it (or present it). If they were born in PH, they have no US entry stamp, triggering an immediate check of their PH status.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* The Airport Scenario */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
             <Plane size={300} />
        </div>
        
        <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 font-serif">The NAIA Protocol</h3>
            <div className="space-y-6 max-w-2xl">
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                    <div>
                        <h4 className="font-bold text-lg">Never travel without the "Certificate of Finality"</h4>
                        <p className="text-slate-400 text-sm">A court order awarding custody is useless at the airport unless it has the "Certificate of Finality" proving the appeal period has lapsed.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                    <div>
                        <h4 className="font-bold text-lg">Allow Departure Order (ADO)</h4>
                        <p className="text-slate-400 text-sm">If you have a previously cancelled HDO or WLO, do not just bring the dismissal order. You need a specific "Allow Departure Order" from the BI Commissioner to lift the hit from the computer system.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                    <div>
                        <h4 className="font-bold text-lg">Anticipate "Offloading"</h4>
                        <p className="text-slate-400 text-sm">Immigration officers have absolute discretion. If they suspect the travel is unauthorized by the mother (for illegitimate children), they will prevent boarding even without a court order.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Action Block */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        <AlertTriangle className="text-amber-600 shrink-0" size={32} />
        <div>
            <h4 className="text-lg font-bold text-amber-900">Pre-Departure Check Required</h4>
            <p className="text-sm text-amber-800">
                Do not attempt to exit without a <strong>Bureau of Immigration Derogatory Record Check</strong>. This costs ~500 PHP and confirms if your name or the child's name is on a Watchlist.
            </p>
        </div>
        <button className="whitespace-nowrap px-6 py-3 bg-white text-amber-900 font-bold border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors">
            Download BI Form
        </button>
      </div>

    </div>
  );
};

export default BorderControl;