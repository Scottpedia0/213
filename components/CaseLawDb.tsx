
import React, { useState } from 'react';
import { KEY_CASES } from '../constants';
import { Search, FileText, ChevronRight, Scale, Tag, ExternalLink, Bot } from 'lucide-react';

const CaseLawDb: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCases = KEY_CASES.filter(c => 
    c.case_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.key_rule_or_holding.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.strategy_tags?.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const openAiAgent = () => {
    window.dispatchEvent(new CustomEvent('open-ai-strategy'));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">The Case Atlas</h2>
          <p className="text-slate-500 mt-2 text-lg">Jurisprudential map of Article 213 and custody disputes.</p>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-96">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Search cases, tags, or concepts..." 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button 
                onClick={openAiAgent}
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors py-1"
            >
                <Bot size={14}/> Can't find a precedent? Ask AI
            </button>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredCases.map((caseLaw) => (
          <div key={caseLaw.case_id} className="bg-white rounded-2xl p-0 border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
            
            {/* Case Header */}
            <div className="bg-slate-50 p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold uppercase rounded-md tracking-wider">
                    {caseLaw.case_id}
                  </span>
                  <span className="text-slate-500 text-sm font-medium">{caseLaw.decision_date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-serif leading-tight group-hover:text-blue-700 transition-colors">
                  {caseLaw.case_name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                    {caseLaw.strategy_tags?.map(tag => (
                        <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            <Tag size={10} />
                            {tag.replace(/_/g, ' ')}
                        </span>
                    ))}
                </div>
              </div>
              <div className="text-right">
                 <div className="text-sm font-semibold text-slate-700">{caseLaw.court}</div>
                 <div className="text-xs text-slate-500">{caseLaw.division} • {caseLaw.ponente}</div>
              </div>
            </div>

            {/* Case Body */}
            <div className="p-6 md:p-8 grid lg:grid-cols-3 gap-8">
              
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Scale size={14} /> The Holding
                  </h4>
                  <p className="text-slate-800 text-lg font-serif leading-relaxed italic border-l-4 border-slate-900 pl-4 py-1">
                    "{caseLaw.key_rule_or_holding}"
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Context</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{caseLaw.context}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Child Age</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{caseLaw.child_age}</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Compelling Reasons Discussed</h4>
                    <div className="flex flex-wrap gap-2">
                        {caseLaw.compelling_reasons_alleged_or_discussed.map((reason, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">
                                {reason}
                            </span>
                        ))}
                    </div>
                </div>
              </div>

              {/* Sidebar / Strategy Notes */}
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 h-fit">
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FileText size={14} /> Strategy Notes
                </h4>
                <ul className="space-y-3">
                  {caseLaw.exploitation_or_strategy_notes.map((note, idx) => (
                    <li key={idx} className="text-sm text-amber-900 leading-snug flex items-start gap-2">
                      <ChevronRight size={14} className="mt-0.5 shrink-0 opacity-50" />
                      {note}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-amber-200/50">
                    <h5 className="text-xs font-bold text-amber-800 uppercase mb-2">Primary Source</h5>
                    {caseLaw.primary_sources.map((source, i) => (
                        <a key={i} href={source.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-amber-700 hover:underline">
                            {source.label} <ExternalLink size={10} />
                        </a>
                    ))}
                </div>
              </div>

            </div>
          </div>
        ))}

        {filteredCases.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-400">No cases found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseLawDb;
