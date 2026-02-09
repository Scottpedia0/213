import React, { useState } from 'react';
import { CONTACT_DATA, MENTAL_HEALTH_DATA } from '../constants';
import { Phone, Mail, MapPin, Search, Shield, Building, Flag, Bot, Loader2, RefreshCw, HeartPulse, Brain, AlertTriangle, Globe } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";
import { Contact } from '../types';

const Directory: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [nationalityMode, setNationalityMode] = useState<'unselected' | 'filipino' | 'foreigner'>('unselected');
  const [homeCountry, setHomeCountry] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [customContacts, setCustomContacts] = useState<Contact[]>([]);

  const filteredContacts = filter === 'All' ? CONTACT_DATA : CONTACT_DATA.filter(c => c.category === filter);

  const handleGenerateContacts = async () => {
    if (!homeCountry.trim()) return;
    setIsGenerating(true);

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `
            Generate a list of 4 critical contacts in the Philippines specifically for a citizen of ${homeCountry} involved in a child custody dispute or family law matter.
            
            Include:
            1. Their Embassy or Consular Services in Manila (Emergency/ACS).
            2. A specific liaison or legal attaché if applicable (e.g., AFP liaison, or specific police desk).
            3. A reputable NGO or legal aid organization in the Philippines that assists nationals of ${homeCountry}.

            Output strictly JSON with the following schema:
            [
                {
                    "id": "string",
                    "agency": "string",
                    "department": "string",
                    "description": "string",
                    "contactInfo": ["string", "string"],
                    "utility": "string",
                    "category": "US" (use 'US' if related to the country, or 'Government' if local)
                }
            ]
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.STRING },
                            agency: { type: Type.STRING },
                            department: { type: Type.STRING },
                            description: { type: Type.STRING },
                            contactInfo: { type: Type.ARRAY, items: { type: Type.STRING } },
                            utility: { type: Type.STRING },
                            category: { type: Type.STRING } // Enforce specific strings in prompt or sanitize later
                        }
                    }
                }
            }
        });

        if (response.text) {
            const data = JSON.parse(response.text);
            // Sanitize categories to match our type
            const sanitizedData = data.map((c: any) => ({
                ...c,
                category: c.category === 'Emergency' ? 'Emergency' : c.category === 'Government' ? 'Government' : 'US'
            }));
            setCustomContacts(sanitizedData);
        }
    } catch (error) {
        console.error("AI Error:", error);
        alert("Could not generate contacts. Please try again.");
    } finally {
        setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 pt-8 pb-12">
       
       {/* Header */}
       <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">Operational Directory</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          The "Red Phone" list. Direct lines to the agencies that actually control the ground game.
        </p>
      </div>

      {/* IDENTITY SELECTOR & AI GENERATOR */}
      <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <RefreshCw size={150} />
        </div>

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
                <Bot className="text-blue-400" size={24}/>
                <h3 className="text-xl font-bold font-serif">Mission Customization</h3>
            </div>

            {nationalityMode === 'unselected' && (
                <div className="space-y-6">
                    <p className="text-slate-300">Select your citizenship status to calibrate the support network.</p>
                    <div className="grid grid-cols-2 gap-4 max-w-lg">
                        <button 
                            onClick={() => setNationalityMode('filipino')}
                            className="bg-slate-800 hover:bg-slate-700 border border-slate-600 p-6 rounded-xl transition-all flex flex-col items-center gap-3"
                        >
                            <Flag className="text-yellow-400" size={32}/>
                            <span className="font-bold">Filipino Citizen</span>
                        </button>
                        <button 
                            onClick={() => setNationalityMode('foreigner')}
                            className="bg-slate-800 hover:bg-slate-700 border border-slate-600 p-6 rounded-xl transition-all flex flex-col items-center gap-3"
                        >
                            <Globe className="text-blue-400" size={32}/>
                            <span className="font-bold">Foreign National</span>
                        </button>
                    </div>
                </div>
            )}

            {nationalityMode === 'filipino' && (
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-lg text-yellow-400 mb-2">Local Protocol Active</h4>
                            <p className="text-slate-300 text-sm">The standard directory below is optimized for PH citizens. Focus on the DOJ and PAO (Public Attorney's Office) contacts.</p>
                        </div>
                        <button onClick={() => setNationalityMode('unselected')} className="text-xs text-slate-500 hover:text-white underline">Change</button>
                    </div>
                </div>
            )}

            {nationalityMode === 'foreigner' && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <p className="text-slate-300 text-sm">Enter your home country to generate specific diplomatic contacts.</p>
                        <button onClick={() => setNationalityMode('unselected')} className="text-xs text-slate-500 hover:text-white underline">Change</button>
                    </div>
                    
                    <div className="flex gap-2 max-w-lg">
                        <input 
                            type="text" 
                            placeholder="e.g., Australia, UK, Japan..." 
                            className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                            value={homeCountry}
                            onChange={(e) => setHomeCountry(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleGenerateContacts()}
                        />
                        <button 
                            onClick={handleGenerateContacts}
                            disabled={isGenerating || !homeCountry}
                            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isGenerating ? <Loader2 className="animate-spin" size={20}/> : <Search size={20}/>}
                            Generate
                        </button>
                    </div>

                    {/* AI RESULTS */}
                    {customContacts.length > 0 && (
                        <div className="mt-8 grid md:grid-cols-2 gap-4 animate-fade-in">
                            {customContacts.map((contact, idx) => (
                                <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-blue-500/30 shadow-lg relative">
                                    <div className="absolute top-3 right-3">
                                        <Bot size={16} className="text-blue-400 opacity-50"/>
                                    </div>
                                    <h4 className="font-bold text-white text-sm mb-1">{contact.agency}</h4>
                                    <p className="text-xs text-blue-300 mb-2">{contact.department}</p>
                                    <p className="text-xs text-slate-400 mb-3">{contact.description}</p>
                                    <div className="space-y-1">
                                        {contact.contactInfo.map((info, i) => (
                                            <div key={i} className="text-xs font-mono bg-slate-950/50 p-1.5 rounded text-slate-300 select-all">
                                                {info}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
      </div>

      {/* STANDARD DIRECTORY */}
      <div>
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

      {/* MENTAL HEALTH / FORTITUDE SECTION */}
      <div className="border-t-4 border-slate-900 pt-12 mt-12">
        <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-4">
                <Brain size={18} className="text-slate-600" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Psychological Fortitude</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Maintain Operational Readiness</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mt-4 leading-relaxed">
                This process is a war of attrition. If you break, you lose. If you have unresolved anger or trauma, the opposing counsel will weaponize it against you in Family Court. 
                <br/><br/>
                <span className="font-bold text-slate-900">Fix yourself for your child.</span>
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {MENTAL_HEALTH_DATA.map((resource) => (
                <div key={resource.id} className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                            <HeartPulse size={20} className="text-red-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">{resource.agency}</h4>
                            <p className="text-xs text-slate-500">{resource.utility}</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-600 mb-4 flex-1">{resource.description}</p>
                    <div className="space-y-2">
                        {resource.contactInfo.map((info, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded px-3 py-2 text-xs font-mono text-slate-700 text-center">
                                {info}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mt-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="shrink-0">
                <AlertTriangle size={32} className="text-red-600" />
            </div>
            <div>
                <h4 className="font-bold text-red-900 text-sm uppercase tracking-wide mb-1">Strategic Liability Warning</h4>
                <p className="text-sm text-red-800 leading-relaxed">
                    If you are facing a VAWC case, <strong>DO NOT</strong> attempt to communicate with the mother directly if you are angry. 
                    Every text message is evidence. Seek professional therapy immediately. 
                    Courts look favorably upon parents who voluntarily seek anger management or counseling <em>before</em> being ordered to do so.
                </p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Directory;