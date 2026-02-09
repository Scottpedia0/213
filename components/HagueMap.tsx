
import React, { useState } from 'react';
import { Search, ShieldAlert, ShieldCheck, Info, Globe, X } from 'lucide-react';

interface CountryStatus {
  code: string;
  name: string;
  status: 'gap' | 'active' | 'home';
  region: string;
  notes?: string;
}

const JurisdictionTracker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Comprehensive Data Set based on Hague Conference Status Table for Philippines
  const COUNTRIES: CountryStatus[] = [
    // --- HOME ---
    { code: 'PH', name: 'Philippines', status: 'home', region: 'Asia', notes: 'Target Jurisdiction. Non-Compliant enforcement.' },

    // --- THE GAP (Red List) - High Priority / Anglosphere ---
    { code: 'US', name: 'United States', status: 'gap', region: 'North America', notes: 'CRITICAL: Accession NOT accepted. No return mechanism.' },
    { code: 'GB', name: 'United Kingdom', status: 'gap', region: 'Europe', notes: 'Accession NOT accepted.' },
    { code: 'CA', name: 'Canada', status: 'gap', region: 'North America', notes: 'Accession NOT accepted.' },
    { code: 'AU', name: 'Australia', status: 'gap', region: 'Oceania', notes: 'Accession NOT accepted.' },

    // --- THE GAP (Asia/Pacific) ---
    { code: 'CN', name: 'China (HK & Macau)', status: 'gap', region: 'Asia', notes: 'Treaty Inactive for PH.' },
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
    // Asia/Pacific
    { code: 'JP', name: 'Japan', status: 'active', region: 'Asia', notes: 'Treaty Active.' },
    { code: 'NZ', name: 'New Zealand', status: 'active', region: 'Oceania', notes: 'Treaty Active.' },

    // Europe
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

    // Americas
    { code: 'AR', name: 'Argentina', status: 'active', region: 'South America' },
    { code: 'BR', name: 'Brazil', status: 'active', region: 'South America' },
    { code: 'CL', name: 'Chile', status: 'active', region: 'South America' },
    { code: 'CO', name: 'Colombia', status: 'active', region: 'South America' },
    { code: 'MX', name: 'Mexico', status: 'active', region: 'North America' },
    { code: 'PE', name: 'Peru', status: 'active', region: 'South America' },
    { code: 'UY', name: 'Uruguay', status: 'active', region: 'South America' },
    { code: 'VE', name: 'Venezuela', status: 'active', region: 'South America' },

    // Middle East / Africa
    { code: 'IL', name: 'Israel', status: 'active', region: 'Middle East' },
    { code: 'ZA', name: 'South Africa', status: 'active', region: 'Africa' },
  ];

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const gapCountries = filteredCountries.filter(c => c.status === 'gap');
  const activeCountries = filteredCountries.filter(c => c.status === 'active');

  return (
    <div className="w-full space-y-6">
      
      {/* INTRO CARD */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white border border-slate-700 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold font-mono tracking-tight flex items-center gap-3">
              <Globe className="text-blue-500" />
              JURISDICTION STATUS BOARD
            </h3>
            <p className="text-slate-400 mt-2 max-w-xl text-sm">
              The Hague Convention only applies between countries that have formally accepted each other's accession. Most Western nations have <strong>refused</strong> to accept the Philippines due to its poor judicial track record.
            </p>
          </div>
          
          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search Country..." 
              className="w-full bg-slate-800 border border-slate-600 text-white pl-10 pr-4 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* THE ANGLOSPHERE GAP (Highlighted) */}
      {!searchTerm && (
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl shadow-sm">
          <div className="flex items-start gap-4">
            <ShieldAlert className="text-red-600 shrink-0 mt-1" size={24} />
            <div>
              <h4 className="text-lg font-bold text-red-900">CRITICAL ALERT: The Anglosphere Gap</h4>
              <p className="text-red-800 text-sm mt-1 leading-relaxed">
                If your child was habitually resident in the <strong>United States, United Kingdom, Canada, or Australia</strong>, you CANNOT use the Hague Convention "Summary Return" mechanism. These countries have blocked treaty relations with the Philippines. You must litigate custody from scratch in Philippine Family Courts.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* GAP COLUMN */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col h-[500px]">
          <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <ShieldAlert className="text-red-600" size={18} />
              <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wide">The Gap (No Return)</h4>
            </div>
            <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">{gapCountries.length}</span>
          </div>
          <div className="divide-y divide-slate-100 overflow-y-auto flex-1">
            {gapCountries.length > 0 ? (
              gapCountries.map(country => (
                <div key={country.code} className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-400 w-6">{country.code}</span>
                    <span className="font-medium text-slate-800">{country.name}</span>
                  </div>
                  {country.notes && (
                    <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded">
                      {country.notes}
                    </span>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-400 text-sm">No matching Gap jurisdictions found.</div>
            )}
          </div>
        </div>

        {/* ACTIVE COLUMN */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col h-[500px]">
          <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-600" size={18} />
              <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wide">Treaty Active</h4>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">{activeCountries.length}</span>
          </div>
          <div className="divide-y divide-slate-100 overflow-y-auto flex-1">
            {activeCountries.length > 0 ? (
              activeCountries.map(country => (
                <div key={country.code} className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-400 w-6">{country.code}</span>
                    <span className="font-medium text-slate-800">{country.name}</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Return Possible
                  </span>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-400 text-sm">No matching Active jurisdictions found.</div>
            )}
          </div>
        </div>

      </div>

      {/* LEGEND / INFO */}
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-start gap-3">
        <Info className="text-blue-500 shrink-0 mt-0.5" size={18} />
        <div className="text-sm text-blue-800">
          <strong className="block mb-1">What does "Active" mean?</strong>
          It means the Hague mechanism is theoretically available. However, even with treaty partners, the Philippines is frequently cited for "Non-Compliance" due to judicial delays (2-3 years for return orders). A "Green" status does not guarantee a quick return.
        </div>
      </div>

    </div>
  );
};

export default JurisdictionTracker;
