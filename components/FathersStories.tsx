import React from 'react';
import { Users, HeartCrack, Briefcase, ShieldAlert, DollarSign, Ban, Quote } from 'lucide-react';

const FathersStories: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pt-8 pb-12">
      {/* Hero */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-slate-900 font-serif">The Silent Epidemic</h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
           Behind the statutes and court orders lie the human stories of systemic erasure. 
           These are not isolated incidents; they are the predictable results of a legal framework designed to exclude fathers.
        </p>
      </div>

      {/* 1. The 57% Reality (Article 176) */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold uppercase tracking-wider">
                <Users size={14} /> The Demographic Crisis
            </div>
            <h3 className="text-3xl font-bold text-slate-900 font-serif">The 57% Erasure</h3>
            <p className="text-slate-600 leading-relaxed">
                According to the Philippine Statistics Authority (PSA), over <strong className="text-slate-900">57% of all children</strong> born in the Philippines are illegitimate (born out of wedlock).
            </p>
            <p className="text-slate-600 leading-relaxed">
                Under <strong>Article 176</strong> of the Family Code, these children are under the "sole and exclusive" parental authority of the mother.
            </p>
            <div className="bg-slate-50 border-l-4 border-red-500 p-4">
                <p className="text-slate-700 italic">
                    "I signed the birth certificate. I pay tuition. I bought the house. But the police told me I am legally a stranger to my own son."
                </p>
                <p className="text-xs text-slate-500 mt-2 font-bold uppercase">— Mark, 34, IT Professional (Makati)</p>
            </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 relative">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Ban size={120} />
             </div>
             <h4 className="text-xl font-bold text-slate-900 mb-6">The "Stranger" Doctrine</h4>
             <ul className="space-y-4">
                <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                        <strong className="block text-slate-900 text-sm">No Decision Making</strong>
                        <p className="text-xs text-slate-500">School, medical care, and religion are solely the mother's choice.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                        <strong className="block text-slate-900 text-sm">No Travel Rights</strong>
                        <p className="text-xs text-slate-500">You cannot take your child abroad without the mother's written consent (DSWD clearance).</p>
                    </div>
                </li>
                 <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                        <strong className="block text-slate-900 text-sm">Automatic Loss</strong>
                        <p className="text-xs text-slate-500">You do not lose custody in court. You never had it to begin with.</p>
                    </div>
                </li>
             </ul>
        </div>
      </div>

      {/* 2. The OFW Trap */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
         
         <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    <Briefcase size={14} /> The Economic Paradox
                </div>
                <h3 className="text-3xl font-bold font-serif mb-4">The OFW Paradox</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                    Nearly 1 million Filipino men work overseas to support their families. The legal system rewards this sacrifice by labelling it "Abandonment."
                </p>
                <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <strong className="block text-white text-sm mb-1">The Scenario</strong>
                        <p className="text-xs text-slate-400">Father works in Saudi/Dubai/Singapore. Sends 80% of income home. Mother leaves children with grandparents to start a new relationship.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <strong className="block text-white text-sm mb-1">The Legal Trap</strong>
                        <p className="text-xs text-slate-400">When Father returns to claim children, Court rules that the "Status Quo" is with the mother's family, and his years abroad constitute "lack of psychological presence."</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                 <div className="bg-white text-slate-900 p-6 rounded-xl shadow-lg">
                    <Quote className="text-blue-500 mb-4" />
                    <p className="font-serif text-lg italic leading-relaxed mb-4">
                        "I built the house they live in. I paid for the car she drives to court. Now the judge says I am an 'absentee' parent because I was working to pay for it all."
                    </p>
                    <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">JP</div>
                        <div>
                            <p className="text-sm font-bold">J.P.</p>
                            <p className="text-xs text-slate-500">Seaman, 8 years at sea</p>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
      </div>

      {/* 3. The 9262 Weapon */}
      <div className="grid md:grid-cols-3 gap-8">
         <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-4">The 9262 Weapon</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                RA 9262 (Anti-VAWC) is a noble law designed to protect women. However, it is routinely weaponized in custody battles because it allows for <strong>Ex-Parte TPOs</strong> (Temporary Protection Orders).
            </p>
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="flex items-center gap-2 mb-2 text-orange-800 font-bold text-sm">
                    <ShieldAlert size={16}/> The "Checkmate" Move
                </div>
                <p className="text-xs text-orange-900">
                    Lawyers advise mothers to file VAWC immediately upon separation. It instantly grants her custody and evicts the father, setting a "new normal" before the father even gets a court date.
                </p>
            </div>
         </div>
         <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Psychological Violence</h4>
                <p className="text-xs text-slate-500 mb-4">
                    Defined so broadly that "marital infidelity" or "denial of financial support" counts as violence, triggering a TPO.
                </p>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[85%]"></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">85% of Custody Defense involves 9262</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">The "Economic Abuse" Card</h4>
                <p className="text-xs text-slate-500 mb-4">
                    If a father stops sending money because he is denied visitation, he is charged with Economic Abuse (a criminal offense).
                </p>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[90%]"></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">High conviction risk</p>
            </div>
            <div className="col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-700 italic">
                    "My lawyer told me: 'If you fight for custody, she will file VAWC and you will go to jail.' So I signed the waiver." — Anonymous Father
                </p>
            </div>
         </div>
      </div>

      {/* 4. The Visitation Void */}
      <div className="border-t border-slate-200 pt-12">
        <div className="flex items-center gap-4 mb-8">
            <HeartCrack className="text-slate-400" size={32} />
            <div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">The Visitation Void</h3>
                <p className="text-sm text-slate-500">Rights on paper vs. Reality on the ground</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                    Even when a father wins "Visitation Rights" in court, enforcement is non-existent. There is no "Contempt of Court" police squad.
                </p>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <strong className="block text-slate-900 mb-2">The Typical Sunday Scenario</strong>
                    <ol className="space-y-4 text-sm text-slate-600 list-decimal pl-4">
                        <li>Father arrives at mother's house with Court Order.</li>
                        <li>Gate is locked. "Yaya" says child is sick or not home.</li>
                        <li>Father calls Barangay / Police.</li>
                        <li>Police arrive: "Sir, this is a domestic civil matter. We cannot enter private property. Go back to court."</li>
                        <li>Father must file a motion to cite mother in contempt (takes 6 months).</li>
                    </ol>
                </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                <DollarSign size={48} className="text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">The Cost of a Hug</h4>
                <p className="text-slate-600 text-sm mb-6">
                    Because visitation is not enforced, fathers are forced to "buy" access.
                </p>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white p-3 rounded shadow-sm">
                        <span className="block text-xs text-slate-400 uppercase">Litigation Cost</span>
                        <span className="block font-bold text-slate-900">₱300k+</span>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                        <span className="block text-xs text-slate-400 uppercase">Enforcement</span>
                        <span className="block font-bold text-red-600">ZERO</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default FathersStories;
