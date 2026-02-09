import React, { useState } from 'react';
import { Search, ShieldAlert, ShieldCheck, Info, Globe, X, Filter } from 'lucide-react';

interface CountryStatus {
  code: string;
  name: string;
  status: 'gap' | 'active' | 'home';
  region: string;
  notes?: string;
}

const JurisdictionTracker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'gap' | 'active'>('all');

  // Comprehensive Data Set based on Hague Conference Status Table for Philippines
  const COUNTRIES: CountryStatus[] = [
    // --- HOME ---
    { code: 'PH', name: 'Philippines', status: 'home', region: 'Asia', notes: 'Target Jurisdiction' },

    // --- THE GAP (Red List) - High Priority / Anglosphere ---
    { code: 'US', name: 'United States', status: 'gap', region: 'North America', notes: 'CRITICAL: No Treaty Relations' },
    { code: 'GB', name: 'United Kingdom', status: 'gap', region: 'Europe', notes: 'Accession NOT accepted' },
    { code: 'CA', name: 'Canada', status: 'gap', region: 'North America', notes: 'Accession NOT accepted' },
    { code: 'AU', name: 'Australia', status: 'gap', region: 'Oceania', notes: 'Accession NOT accepted' },

    // --- THE GAP (Asia/Pacific) ---
    { code: 'CN', name: 'China (HK & Macau)', status: 'gap', region: 'Asia', notes: 'Treaty Inactive for PH' },
    { code: 'KR', name: 'South Korea', status: 'gap', region: 'Asia' },
    { code: 'SG', name: 'Singapore', status: 'gap', region: 'Asia' },
    { code: 'TH', name: 'Thailand', status: 'gap', region: 'Asia' },
    { code: 'FJ', name: 'Fiji', status: 'gap', region: 'Oceania' },
    { code: 'LK', name: 'Sri Lanka', status: 'gap', region: 'Asia' },
    { code: 'PK', name: 'Pakistan', status: 'gap', region: 'Asia' },
    { code: 'KZ', name: 'Kazakhstan', status: 'gap', region: 'Asia' },
    { code: 'TM', name: 'Turkmenistan', status: 'gap', region: 'Asia' },
    { code: 'UZ', name: 'Uzbekistan', status: 'gap', region: 'Asia' },

    // --- THE GAP (Rest of World) ---
    { code: 'TR', name: 'Turkey', status: 'gap', region: 'Europe/Asia' },
    { code: 'IS', name: 'Iceland', status: 'gap', region: 'Europe' },
    { code: 'AL', name: 'Albania', status: 'gap', region: 'Europe' },
    { code: 'AM', name: 'Armenia', status: 'gap', region: 'Europe' },
    { code: 'BY', name: 'Belarus', status: 'gap', region: 'Europe' },
    { code: 'BA', name: 'Bosnia and Herzegovina', status: 'gap', region: 'Europe' },
    { code: 'GE', name: 'Georgia', status: 'gap', region: 'Europe' },
    { code: 'MD', name: 'Moldova', status: 'gap', region: 'Europe' },
    { code: 'MK', name: 'North Macedonia', status: 'gap', region: 'Europe' },
    { code: 'SM', name: 'San Marino', status: 'gap', region: 'Europe' },
    
    // Gap Americas
    { code: 'BS', name: 'Bahamas', status: 'gap', region: 'Americas' },
    { code: 'BB', name: 'Barbados', status: 'gap', region: 'Americas' },
    { code: 'BZ', name: 'Belize', status: 'gap', region: 'Americas' },
    { code: 'BO', name: 'Bolivia', status: 'gap', region: 'South America' },
    { code: 'CR', name: 'Costa Rica', status: 'gap', region: 'Americas' },
    { code: 'CU', name: 'Cuba', status: 'gap', region: 'Americas' },
    { code: 'DO', name: 'Dominican Republic', status: 'gap', region: 'Americas' },
    { code: 'EC', name: 'Ecuador', status: 'gap', region: 'South America' },
    { code: 'SV', name: 'El Salvador', status: 'gap', region: 'Americas' },
    { code: 'GT', name: 'Guatemala', status: 'gap', region: 'Americas' },
    { code: 'GY', name: 'Guyana', status: 'gap', region: 'South America' },
    { code: 'HN', name: 'Honduras', status: 'gap', region: 'Americas' },
    { code: 'JM', name: 'Jamaica', status: 'gap', region: 'Americas' },
    { code: 'NI', name: 'Nicaragua', status: 'gap', region: 'Americas' },
    { code: 'PA', name: 'Panama', status: 'gap', region: 'Americas' },
    { code: 'PY', name: 'Paraguay', status: 'gap', region: 'South America' },
    { code: 'KN', name: 'Saint Kitts and Nevis', status: 'gap', region: 'Americas' },
    { code: 'TT', name: 'Trinidad and Tobago', status: 'gap', region: 'Americas' },

    // Gap Africa/Middle East
    { code: 'BW', name: 'Botswana', status: 'gap', region: 'Africa' },
    { code: 'BF', name: 'Burkina Faso', status: 'gap', region: 'Africa' },
    { code: 'CV', name: 'Cabo Verde', status: 'gap', region: 'Africa' },
    { code: 'GA', name: 'Gabon', status: 'gap', region: 'Africa' },
    { code: 'GN', name: 'Guinea', status: 'gap', region: 'Africa' },
    { code: 'IQ', name: 'Iraq', status: 'gap', region: 'Middle East' },
    { code: 'KW', name: 'Kuwait', status: 'gap', region: 'Middle East' },
    { code: 'LS', name: 'Lesotho', status: 'gap', region: 'Africa' },
    { code: 'MU', name: 'Mauritius', status: 'gap', region: 'Africa' },
    { code: 'MA', name: 'Morocco', status: 'gap', region: 'Africa' },
    { code: 'SC', name: 'Seychelles', status: 'gap', region: 'Africa' },
    { code: 'TN', name: 'Tunisia', status: 'gap', region: 'Africa' },
    { code: 'ZM', name: 'Zambia', status: 'gap', region: 'Africa' },
    { code: 'ZW', name: 'Zimbabwe', status: 'gap', region: 'Africa' },


    // --- ACTIVE (Green List) ---
    { code: 'JP', name: 'Japan', status: 'active', region: 'Asia', notes: 'Treaty Active' },
    { code: 'NZ', name: 'New Zealand', status: 'active', region: 'Oceania', notes: 'Treaty Active' },
    { code: 'AT', name: 'Austria', status: 'active', region: 'Europe' },
    { code: 'BE', name: 'Belgium', status: 'active', region: 'Europe' },
    { code: 'BG', name: 'Bulgaria', status: 'active', region: 'Europe' },
    { code: 'HR', name: 'Croatia', status: 'active', region: 'Europe' },
    { code: 'CY', name: 'Cyprus', status: 'active', region: 'Europe' },
    { code: 'CZ', name: 'Czech Republic', status: 'active', region: 'Europe' },
    { code: 'DK', name: 'Denmark', status: 'active', region: 'Europe' },
    { code: 'EE', name: 'Estonia', status: 'active', region: 'Europe' },
    { code: 'FI', name: 'Finland', status: 'active', region: 'Europe' },
    { code: 'FR', name: 'France', status: 'active', region: 'Europe' },
    { code: 'DE', name: 'Germany', status: 'active', region: 'Europe' },
    { code: 'GR', name: 'Greece', status: 'active', region: 'Europe' },
    { code: 'HU', name: 'Hungary', status: 'active', region: 'Europe' },
    { code: 'IE', name: 'Ireland', status: 'active', region: 'Europe' },
    { code: 'IT', name: 'Italy', status: 'active', region: 'Europe' },
    { code: 'LV', name: 'Latvia', status: 'active', region: 'Europe' },
    { code: 'LT', name: 'Lithuania', status: 'active', region: 'Europe' },
    { code: 'LU', name: 'Luxembourg', status: 'active', region: 'Europe' },
    { code: 'MT', name: 'Malta', status: 'active', region: 'Europe' },
    { code: 'MC', name: 'Monaco', status: 'active', region: 'Europe' },
    { code: 'ME', name: 'Montenegro', status: 'active', region: 'Europe' },
    { code: 'NL', name: 'Netherlands', status: 'active', region: 'Europe' },
    { code: 'NO', name: 'Norway', status: 'active', region: 'Europe' },
    { code: 'PL', name: 'Poland', status: 'active', region: 'Europe' },
    { code: 'PT', name: 'Portugal', status: 'active', region: 'Europe' },
    { code: 'RO', name: 'Romania', status: 'active', region: 'Europe' },
    { code: 'RU', name: 'Russia', status: 'active', region: 'Europe' },
    { code: 'RS', name: 'Serbia', status: 'active', region: 'Europe' },
    { code: 'SK', name: 'Slovakia', status: 'active', region: 'Europe' },
    { code: 'SI', name: 'Slovenia', status: 'active', region: 'Europe' },
    { code: 'ES', name: 'Spain', status: 'active', region: 'Europe' },
    { code: 'SE', name: 'Sweden', status: 'active', region: 'Europe' },
    { code: 'CH', name: 'Switzerland', status: 'active', region: 'Europe' },
    { code: 'UA', name: 'Ukraine', status: 'active', region: 'Europe' },
    { code: 'AD', name: 'Andorra', status: 'active', region: 'Europe' },
    { code: 'AR', name: 'Argentina', status: 'active', region: 'South America' },
    { code: 'BR', name: 'Brazil', status: 'active', region: 'South America' },
    { code: 'CL', name: 'Chile', status: 'active', region: 'South America' },
    { code: 'CO', name: 'Colombia', status: 'active', region: 'South America' },
    { code: 'MX', name: 'Mexico', status: 'active', region: 'North America' },
    { code: 'PE', name: 'Peru', status: 'active', region: 'South America' },
    { code: 'UY', name: 'Uruguay', status: 'active', region: 'South America' },
    { code: 'VE', name: 'Venezuela', status: 'active', region: 'South America' },
    { code: 'IL', name: 'Israel', status: 'active', region: 'Middle East' },
    { code: 'ZA', name: 'South Africa', status: 'active', region: 'Africa' },
  ];

  const filteredCountries = COUNTRIES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         c.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' 
      ? true 
      : filter === 'gap' ? c.status === 'gap' 
      : c.status === 'active';
      
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full space-y-6">
      
      {/* Intro Panel */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif flex items-center gap-2 text-slate-900">
              <Globe className="text-slate-400" size={24} />
              Jurisdiction Checker
            </h3>
            <p className="text-slate-500 mt-1 text-sm max-w-2xl">
               Search for the child's "Habitual Residence". 
               If the status is <strong className="text-red-600">GAP</strong>, the Hague Convention does NOT apply.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
             {/* Search */}
             <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search Country..." 
                  className="w-full sm:w-64 bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                 {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X size={14} />
                  </button>
                )}
             </div>

             {/* Filter Tabs */}
             <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${filter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    All
                </button>
                <button 
                    onClick={() => setFilter('gap')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${filter === 'gap' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Gap
                </button>
                <button 
                    onClick={() => setFilter('active')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${filter === 'active' ? 'bg-white text-green-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Active
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* DATA TABLE (Scrollable Fixed Height) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-96">
        <div className="overflow-y-auto flex-1">
            <table className="w-full text-left text-sm relative">
                <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                    <tr>
                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs bg-slate-50">Country</th>
                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs bg-slate-50">Region</th>
                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs bg-slate-50">Treaty Status</th>
                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs bg-slate-50">Notes</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <tr key={country.code} className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 font-mono shrink-0">
                                            {country.code}
                                        </div>
                                        <span className="font-bold text-slate-900">{country.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-3 text-slate-600">
                                    {country.region}
                                </td>
                                <td className="px-6 py-3">
                                    {country.status === 'gap' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                                            <ShieldAlert size={12} /> The Gap
                                        </span>
                                    )}
                                    {country.status === 'active' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                            <ShieldCheck size={12} /> Active
                                        </span>
                                    )}
                                    {country.status === 'home' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                                            <Info size={12} /> Jurisdiction
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-3">
                                    {country.notes ? (
                                        <span className="text-slate-600 italic text-xs">{country.notes}</span>
                                    ) : (
                                        <span className="text-slate-300">-</span>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="px-6 py-12 text-center text-slate-400">
                                No countries found matching your search.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center shrink-0">
            <span>Showing {filteredCountries.length} jurisdictions</span>
            <span className="italic">Data Source: Hague Conference (HCCH) 2024</span>
        </div>
      </div>

    </div>
  );
};

export default JurisdictionTracker;