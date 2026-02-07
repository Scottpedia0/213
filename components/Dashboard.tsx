import React from 'react';
import { AlertTriangle, Lock, Globe, Gavel } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Treaty Status</h3>
            <Globe className="text-red-500" size={24} />
          </div>
          <p className="text-2xl font-bold text-slate-900">Inactive</p>
          <p className="text-xs text-slate-500 mt-1">US-PH Hague Accession not accepted</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Custody Default</h3>
            <Lock className="text-orange-500" size={24} />
          </div>
          <p className="text-2xl font-bold text-slate-900">Maternal</p>
          <p className="text-xs text-slate-500 mt-1">For children under 7 (Art. 213)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Resolution Rate</h3>
            <AlertTriangle className="text-yellow-500" size={24} />
          </div>
          <p className="text-2xl font-bold text-slate-900">0%*</p>
          <p className="text-xs text-slate-500 mt-1">2015 US State Dept Data (Official)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Key Precedent</h3>
            <Gavel className="text-blue-500" size={24} />
          </div>
          <p className="text-2xl font-bold text-slate-900">Sison (2024)</p>
          <p className="text-xs text-slate-500 mt-1">Drug use overrides Tender Years</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Situation Report: The Safe Haven</h2>
          <div className="prose text-slate-600 text-sm max-w-none">
            <p className="mb-3">
              The Philippines operates as a sophisticated legal safe haven for parental abductors. This is not due to lawlessness, but rather a rigid, protectionist legal architecture.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-slate-800">The Treaty Gap:</strong> While the Philippines is a Hague signatory, the US has not accepted its accession. This voids the "summary return" mechanism, forcing US parents into domestic Philippine Family Courts.
              </li>
              <li>
                <strong className="text-slate-800">Article 213 (Tender Years):</strong> A mandatory statutory command prohibiting the separation of children under seven from the mother, absent "compelling reasons."
              </li>
              <li>
                <strong className="text-slate-800">Article 176 (Illegitimacy):</strong> Unmarried mothers have sole, exclusive parental authority. Fathers have no custodial rights to violate, only visitation rights to request.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-white mb-4">Immediate Actions</h2>
          <div className="space-y-4">
            <div className="p-3 bg-slate-800 rounded border border-slate-700">
              <h4 className="font-semibold text-red-400 text-sm">Do Not Delay</h4>
              <p className="text-xs text-slate-400 mt-1">The "settled status" defense grows stronger every day the child remains in PH.</p>
            </div>
            <div className="p-3 bg-slate-800 rounded border border-slate-700">
              <h4 className="font-semibold text-orange-400 text-sm">Secure Counsel</h4>
              <p className="text-xs text-slate-400 mt-1">You need a specialist in Philippine Family Law, not just a US lawyer.</p>
            </div>
            <div className="p-3 bg-slate-800 rounded border border-slate-700">
              <h4 className="font-semibold text-blue-400 text-sm">Evidence Collection</h4>
              <p className="text-xs text-slate-400 mt-1">Gather proof of unfitness: drug use, abuse, or neglect. Being "better" is not enough.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
