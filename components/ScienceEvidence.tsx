import React from 'react';
import { SCIENCE_DATA } from '../constants';
import { Microscope, Brain, Users, Activity, CheckCircle, Quote } from 'lucide-react';

const ScienceEvidence: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pt-8 pb-12">
      
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">The Science vs. Article 213</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Article 213 is built on the "Tender Years" doctrine of 1839. Modern developmental science debunks every assumption it rests on.
        </p>
      </div>

      {/* Hero Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Brain size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">60+</h3>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Comparative Studies</p>
            <p className="text-sm text-slate-600 mt-3">Confirming shared parenting outperforms sole custody.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">110</h3>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Endorsing Experts</p>
            <p className="text-sm text-slate-600 mt-3">Signed the Warshak Consensus Report (2014) supporting overnights for infants.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <Activity size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">0</h3>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Evidence for Age 7</p>
            <p className="text-sm text-slate-600 mt-3">No developmental milestone exists at age 7 justifying maternal exclusivity.</p>
        </div>
      </div>

      {/* The Evidence Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Meta-Analyses */}
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 text-white rounded-lg"><Microscope size={20} /></div>
                <h3 className="text-xl font-bold text-slate-900">The Meta-Analyses</h3>
            </div>
            {SCIENCE_DATA.filter(s => s.category === 'Meta-Analysis').map(study => (
                <div key={study.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-900">{study.title}</h4>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-mono">{study.year}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 uppercase tracking-wide">{study.researchers} • {study.journal}</p>
                    <p className="text-slate-700 text-sm italic mb-3">"{study.finding}"</p>
                    <div className="pl-3 border-l-2 border-blue-500">
                        <p className="text-xs font-bold text-blue-600">Impact: {study.significance}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Attachment & Fathers */}
        <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 text-white rounded-lg"><Brain size={20} /></div>
                <h3 className="text-xl font-bold text-slate-900">Attachment & Absence</h3>
            </div>
            {SCIENCE_DATA.filter(s => s.category === 'Attachment' || s.category === 'Fathers').map(study => (
                <div key={study.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-900">{study.title}</h4>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-mono">{study.year}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 uppercase tracking-wide">{study.researchers} • {study.journal}</p>
                    <p className="text-slate-700 text-sm italic mb-3">"{study.finding}"</p>
                    <div className="pl-3 border-l-2 border-purple-500">
                        <p className="text-xs font-bold text-purple-600">Impact: {study.significance}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* The Policy Argument */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <Quote className="text-slate-600 shrink-0 transform rotate-180" size={48} />
            <div className="space-y-6">
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-slate-200">
                    "We have no basis for rank ordering parents as primary or secondary in their importance to child development. Children's healthy development can and usually does sustain many hours of separation between mother and child."
                </p>
                <div>
                    <p className="font-bold text-white">— Warshak Consensus Report (2014)</p>
                    <p className="text-slate-400 text-sm">Endorsed by 110 top international researchers</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ScienceEvidence;
