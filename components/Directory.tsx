import React, { useState } from 'react';
import { CONTACT_DATA } from '../constants';
import { Phone, Mail, MapPin, Search, Shield, Building, Flag } from 'lucide-react';

const Directory: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredContacts = filter === 'All' ? CONTACT_DATA : CONTACT_DATA.filter(c => c.category === filter);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pt-8 pb-12">
       <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">Operational Directory</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          The "Red Phone" list. Direct lines to the agencies that actually control the ground game.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {['All', 'US', 'Government', 'Emergency'].map(cat => (
            <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}
            >
                {cat}
            </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredContacts.map((contact) => (
            <div key={contact.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-16 h-16 opacity-5 -mr-4 -mt-4 rounded-full
                    ${contact.category === 'US' ? 'bg-blue-600' : contact.category === 'Emergency' ? 'bg-red-600' : 'bg-slate-600'}`}>
                </div>
                
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            {contact.category === 'US' && <Flag size={14} className="text-blue-600" />}
                            {contact.category === 'Government' && <Building size={14} className="text-slate-600" />}
                            {contact.category === 'Emergency' && <Shield size={14} className="text-red-600" />}
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{contact.category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{contact.agency}</h3>
                        <p className="text-sm text-slate-500 font-medium">{contact.department}</p>
                    </div>
                </div>

                <p className="text-sm text-slate-600 mb-6 min-h-[40px]">{contact.description}</p>

                <div className="space-y-3 border-t border-slate-100 pt-4">
                    {contact.contactInfo.map((info, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm font-mono text-slate-700 bg-slate-50 p-2 rounded">
                            {info.includes('@') ? <Mail size={14} className="text-slate-400"/> : <Phone size={14} className="text-slate-400"/>}
                            {info}
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-2 text-xs font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1">
                    Utility: <span className="text-slate-700">{contact.utility}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;
