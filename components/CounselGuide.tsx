
import React from 'react';
import { MessageSquare, AlertOctagon, Check, UserCheck, DollarSign, XCircle, Shield, FileText, Camera, Eye } from 'lucide-react';

const CounselGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pt-8 pb-12">
      
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">Counsel Selection Protocol</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Selecting the right legal representation is critical. Many general practitioners may not be equipped for the complexities of international custody litigation.
        </p>
      </div>

      {/* The Litmus Test */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-6 text-white flex items-center gap-4">
            <div className="p-3 bg-red-600 rounded-lg">
                <MessageSquare size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold font-serif">Competency Assessment</h3>
                <p className="text-slate-400 text-sm">Key questions to evaluate potential counsel during consultation.</p>
            </div>
        </div>
        
        <div className="p-8 space-y-8 divide-y divide-slate-100">
            
            <div className="pt-2">
                <h4 className="font-bold text-lg text-slate-900 mb-2">1. "The child was taken from the US. Can we use the Hague Convention for summary return?"</h4>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wide block mb-1">Incorrect Answer</span>
                        <p className="text-slate-700 text-sm italic">"Yes, the Philippines is a signatory. We can file for that."</p>
                        <p className="text-xs text-red-600 mt-2 font-bold flex items-center gap-1"><AlertOctagon size={12}/> Warning: Indicates lack of knowledge regarding US-PH treaty status.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wide block mb-1">Correct Answer</span>
                        <p className="text-slate-700 text-sm italic">"No. While PH is a signatory, the US doesn't recognize it. We must file for Habeas Corpus or Custody under domestic law."</p>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <h4 className="font-bold text-lg text-slate-900 mb-2">2. "The child is 4 years old. How do we get custody?"</h4>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wide block mb-1">Insufficient Strategy</span>
                        <p className="text-slate-700 text-sm italic">"We will show the court you earn more money and have a better house in America."</p>
                        <p className="text-xs text-red-600 mt-2 font-bold flex items-center gap-1"><AlertOctagon size={12}/> Warning: Financial status is not a "compelling reason" under Art 213.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wide block mb-1">Correct Strategy</span>
                        <p className="text-slate-700 text-sm italic">"It is challenging. We must prove the mother is unfit due to specific statutory grounds like neglect, addiction, or abuse."</p>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <h4 className="font-bold text-lg text-slate-900 mb-2">3. "What happens if she files a VAWC case?"</h4>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wide block mb-1">Dismissive Answer</span>
                        <p className="text-slate-700 text-sm italic">"Don't worry about it, that's just for show."</p>
                        <p className="text-xs text-red-600 mt-2 font-bold flex items-center gap-1"><AlertOctagon size={12}/> Critical: A VAWC TPO has immediate and severe consequences.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wide block mb-1">Proactive Strategy</span>
                        <p className="text-slate-700 text-sm italic">"We need to prepare a counter-affidavit immediately and assess grounds for counter-charges regarding psychological violence against the child."</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    {/* PI PROTOCOL */}
    <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <Eye size={120} />
        </div>
        <div className="relative z-10">
            <h3 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
                <Camera className="text-blue-400" />
                Intelligence & Discovery
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl">
                Litigating from abroad requires reliable local intelligence. Hiring a professional investigator is often necessary to establish facts regarding the child's status and location.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h4 className="font-bold text-blue-400 mb-4 uppercase tracking-wide text-sm">Critical Data Points</h4>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-2">
                            <Check size={16} className="text-green-500 mt-0.5" />
                            <span><strong>Address Verification:</strong> Confirming the child's actual physical residence.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check size={16} className="text-green-500 mt-0.5" />
                            <span><strong>School Attendance:</strong> Documenting enrollment and attendance (Proof of presence).</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check size={16} className="text-green-500 mt-0.5" />
                            <span><strong>Caregiving Status:</strong> Identifying primary caregivers in the mother's absence.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h4 className="font-bold text-green-400 mb-4 uppercase tracking-wide text-sm">Budgeting & Risk</h4>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-2">
                            <DollarSign size={16} className="text-green-500 mt-0.5" />
                            <span><strong>Estimated Cost:</strong> ₱15,000 - ₱40,000 per surveillance package.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <AlertOctagon size={16} className="text-red-500 mt-0.5" />
                            <span><strong>Security:</strong> Engage investigators through trusted counsel references to ensure confidentiality.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/* Fee Benchmarking Table */}
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <DollarSign size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Fee Benchmarking (Manila Rates)</h3>
                <p className="text-sm text-slate-500">Standard rate ranges for reputable firms handling international family law cases.</p>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-100">
                    <tr>
                        <th className="px-6 py-3 rounded-l-lg">Item</th>
                        <th className="px-6 py-3">PHP Estimate</th>
                        <th className="px-6 py-3 rounded-r-lg">USD Estimate</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-slate-900">Acceptance Fee (Retainer)</td>
                        <td className="px-6 py-4">₱100,000 - ₱300,000</td>
                        <td className="px-6 py-4">$1,800 - $5,400</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-slate-900">Appearance Fee (Per Hearing)</td>
                        <td className="px-6 py-4">₱3,000 - ₱10,000</td>
                        <td className="px-6 py-4">$50 - $180</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-slate-900">Pleading Fee (Per Motion)</td>
                        <td className="px-6 py-4">₱5,000 - ₱20,000</td>
                        <td className="px-6 py-4">$90 - $350</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-slate-900">Success Fee</td>
                        <td className="px-6 py-4 text-red-600 font-bold">Avoid</td>
                        <td className="px-6 py-4 text-red-600 font-bold">Avoid</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="text-xs text-slate-500 mt-4 italic">
            *Rates vary by region. Provincial rates (Cebu, Davao) may be 20-30% lower. Makati/BGC firms may be higher.
        </p>
    </div>

    {/* The Contract Audit: Protecting Yourself */}
    <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-700 mt-8">
        <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
            <FileText size={24} className="text-blue-400" />
            Engagement Contract Best Practices
        </h3>
        <p className="text-slate-400 mb-6">
            Ensure your Engagement Letter (EL) includes clear terms regarding billing for cancelled hearings and reporting requirements.
        </p>
        <div className="space-y-4">
             <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <h4 className="font-bold text-white text-sm mb-1">1. Cancellation Policy</h4>
                <p className="text-xs text-slate-300">
                    "Client shall NOT be billed a full Appearance Fee if the hearing is cancelled due to the Firm's unavailability or if the Firm fails to appear."
                </p>
            </div>
             <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <h4 className="font-bold text-white text-sm mb-1">2. Substantial Progress Clause</h4>
                <p className="text-xs text-slate-300">
                    "Appearance Fees are billed for hearings where substantial proceedings occur. Administrative resets should be billed at a reduced rate."
                </p>
            </div>
             <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <h4 className="font-bold text-white text-sm mb-1">3. Reporting Mandate</h4>
                <p className="text-xs text-slate-300">
                    "The Firm shall provide a written status update within 48 hours of any hearing or motion filing."
                </p>
            </div>
        </div>
    </div>

    {/* Major Red Flags */}
    <div className="bg-red-50 rounded-2xl p-8 border border-red-100 mt-8">
        <h3 className="text-xl font-bold text-red-900 font-serif mb-6 flex items-center gap-2">
            <AlertOctagon size={24} />
            Professional Red Flags
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border border-red-100">
                <strong className="block text-red-800 mb-2 text-sm uppercase tracking-wide">"Extra-Judicial Expenses"</strong>
                <p className="text-sm text-slate-600">
                    Any implication of influence peddling or bribery is a severe liability. It compromises your legal standing and is a criminal offense.
                </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-red-100">
                <strong className="block text-red-800 mb-2 text-sm uppercase tracking-wide">Guaranteed Outcomes</strong>
                <p className="text-sm text-slate-600">
                    No ethical lawyer can guarantee a specific outcome in custody litigation. Promises of "certain victory" are misleading.
                </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-red-100">
                <strong className="block text-red-800 mb-2 text-sm uppercase tracking-wide">No Written Engagement</strong>
                <p className="text-sm text-slate-600">
                    Never proceed without a formal Engagement Letter detailing the Scope of Work (SOW).
                </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-red-100">
                <strong className="block text-red-800 mb-2 text-sm uppercase tracking-wide">"All-In" Packages</strong>
                <p className="text-sm text-slate-600">
                    Be cautious of flat-fee "package deals" that may disincentivize diligent work on appeals or complex motions.
                </p>
            </div>
        </div>
        
        {/* The Billing Trap Warning */}
        <div className="bg-white p-6 rounded-xl border border-red-200 mt-6 flex items-start gap-4">
            <Shield className="text-red-500 shrink-0 mt-1" size={24} />
            <div>
                <h4 className="font-bold text-slate-900">Warning: Inefficient Billing Practices</h4>
                <p className="text-sm text-slate-600 mt-1">
                    Some practices may prioritize volume of appearances over case resolution. 
                    <br/><br/>
                    <strong>Countermeasure:</strong> Negotiate a "Cap" on appearance fees or a stage-based fee structure to align incentives with case progress.
                </p>
            </div>
        </div>
    </div>

    {/* The Checklist */}
    <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <UserCheck size={20} className="text-slate-400"/>
                Required Competencies
            </h3>
            <ul className="space-y-3">
                {['Experience with foreign clients', 'Office near the specific Family Court', 'Has private investigators on retainer', 'Willing to communicate via WhatsApp/Email'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                        <Check size={16} className="text-green-500" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
             <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertOctagon size={20} className="text-red-500"/>
                Fee Structure Notes
            </h3>
             <ul className="space-y-3">
                <li className="text-sm text-slate-700">
                    <strong className="text-slate-900">Acceptance Fee:</strong> Standard in PH. Usually non-refundable. Ensures conflict-of-interest check.
                </li>
                 <li className="text-sm text-slate-700">
                    <strong className="text-slate-900">Appearance Fees:</strong> Paid per court hearing. Monitor for excessive resets.
                </li>
                 <li className="text-sm text-slate-700">
                    <strong className="text-slate-900">Packages:</strong> Ensure "All-in" deals explicitly list inclusions (e.g., appeals).
                </li>
            </ul>
        </div>
    </div>

    </div>
  );
};

export default CounselGuide;
