import React, { useState } from 'react';
import { Users, HeartCrack, Briefcase, ShieldAlert, DollarSign, Ban, Quote, MessageSquare, Gavel } from 'lucide-react';

const FathersStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'patterns' | 'cases'>('patterns');

  return (
    <div className="max-w-6xl mx-auto space-y-12 pt-8 pb-12">
      {/* Hero */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-slate-900 font-serif">The Human Cost</h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
           Behind the statutes and court orders lie the human stories of systemic erasure. 
           These are not isolated incidents; they are the predictable results of a legal framework designed to exclude fathers.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-8 border-b border-slate-200 pb-1">
        <button
            onClick={() => setActiveTab('patterns')}
            className={`pb-4 px-2 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'patterns' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
        >
            Systemic Patterns
        </button>
        <button
            onClick={() => setActiveTab('cases')}
            className={`pb-4 px-2 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'cases' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
        >
            Case Narratives
        </button>
      </div>

      {/* TAB 1: SYSTEMIC PATTERNS (Original Content) */}
      {activeTab === 'patterns' && (
        <div className="space-y-16 animate-fade-in">
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

            {/* 5. The Forum Fathers (Patterns) */}
            <div className="border-t border-slate-200 pt-12">
                <div className="flex items-center gap-4 mb-8">
                    <MessageSquare className="text-slate-400" size={32} />
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 font-serif">The Forum Patterns</h3>
                        <p className="text-sm text-slate-500">Pattern evidence from Philippine Legal Forums</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-50 p-6 border-b border-slate-100">
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Across legal blogs like <em>PNL Law</em> and <em>JLP Law</em>, a specific pattern emerges hundreds of times in the comments sections. These are not isolated cases.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="p-6 space-y-4">
                            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">The Cycle</h4>
                            <ol className="space-y-3 text-sm text-slate-600 list-decimal pl-4">
                                <li>Father raises child alone for years while Mother is absent.</li>
                                <li>Mother returns (often from abroad or after a failed relationship).</li>
                                <li>Mother demands custody citing <strong>Article 213</strong>.</li>
                                <li>Barangay and DSWD tell the father: <em className="text-slate-800">"The law is clear. The child belongs to the mother."</em></li>
                                <li>Father is relegated to visitor status despite being the primary parent.</li>
                            </ol>
                        </div>
                        <div className="p-6 space-y-4 bg-slate-50/50">
                            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Voices from the Void</h4>
                            <div className="space-y-4">
                                <div className="bg-white p-3 rounded border border-slate-200 text-xs italic text-slate-500">
                                    "I've raised my daughter since she was 6 months old. Her mother left us. Now she's back and the barangay says I have no rights."
                                </div>
                                <div className="bg-white p-3 rounded border border-slate-200 text-xs italic text-slate-500">
                                    "I am the only parent my child has ever known. Her mother is a stranger to her. But the law says the mother gets her."
                                </div>
                                <div className="bg-white p-3 rounded border border-slate-200 text-xs italic text-slate-500">
                                    "My son has lived with me for 5 years. His mother just filed for custody and my lawyer says I will lose because of Article 213."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* TAB 2: CASE NARRATIVES (New Content) */}
      {activeTab === 'cases' && (
        <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
            {/* Intro */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                <p className="text-slate-600 italic font-serif text-lg">
                    "Article 213 doesn't ask 'what's best for this child?' It asks 'where is the mother?' — and that's not the same question."
                </p>
            </div>

            {/* Story 1: Briones */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-serif">The Briones Case</h3>
                        <p className="text-slate-400 text-sm">Briones v. Miguel (2004)</p>
                    </div>
                    <Gavel className="text-slate-500 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="p-8 space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">A Father Denied, A Child Split</h4>
                        <p className="text-slate-600 leading-relaxed">
                            Joey Briones was a devoted father to his son Michael Kevin. When Michael's mother, Loreta, left for extended work in Japan, Joey stepped in — feeding, clothing, and raising his boy day to day. He petitioned the court for custody during the periods Loreta was overseas. The court acknowledged he "truly loved and cared for his son" and recognized "the trouble and expense he had spent."
                        </p>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            But under Article 213, Michael was handed back to his mother — even when she wasn't physically present. Joey was granted "visitorial rights." His son grew up shuttled between caregivers, with a father who wanted him full-time standing on the other side of a law that said biology only counts when it's the mother's.
                        </p>
                    </div>
                    <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
                        <strong className="block text-red-900 text-sm mb-2 uppercase tracking-wide">Impact on the Child</strong>
                        <p className="text-red-800 text-sm">
                            Michael spent years in the care of rotating relatives while his mother worked abroad and his father — present, willing, and able — was legally sidelined. The law didn't ask who was actually raising this boy. It asked who gave birth to him.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story 2: Gualberto */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-serif">The Gualberto Case</h3>
                        <p className="text-slate-400 text-sm">Pablo-Gualberto v. Gualberto (2005)</p>
                    </div>
                    <Gavel className="text-slate-500 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="p-8 space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Evidence of Unfitness Wasn't Enough</h4>
                        <p className="text-slate-600 leading-relaxed">
                            Crisanto Gualberto and Joycelyn separated when their son Rafaello was four years old. The trial court initially gave Crisanto temporary custody after finding evidence that Joycelyn had been neglecting Rafaello and was physically rough with him — witnesses saw her slap the child.
                        </p>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            But Joycelyn invoked Article 213. The case climbed to the Supreme Court, which reversed the lower court and returned custody to Joycelyn. The reason? The father's primary argument — that Joycelyn's lifestyle was harmful — wasn't considered "compelling" enough under the law's narrow standard.
                        </p>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-xl border-l-4 border-orange-500">
                        <strong className="block text-orange-900 text-sm mb-2 uppercase tracking-wide">Impact on the Child</strong>
                        <p className="text-orange-800 text-sm">
                            Rafaello, at four years old, was pulled from the parent who had him and returned to the parent witnesses said had struck him. The law's default is mother — and overcoming that default requires a near-impossible burden of proof. Nobody asked Rafaello what he wanted. He was four. The law assumed it knew.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story 3: Stolk */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-serif">The Stolk Case</h3>
                        <p className="text-slate-400 text-sm">Sps. Gabun v. Stolk (2023)</p>
                    </div>
                    <Gavel className="text-slate-500 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="p-8 space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">99.99% Proof, Still Not Enough</h4>
                        <p className="text-slate-600 leading-relaxed">
                            Winston Clark Stolk's partner Catherine died hours after giving birth to their son, Winston Jr., in the Philippines. Stolk was the boy's biological father — confirmed by DNA testing at 99.9997% probability. His name was on the birth certificate. He petitioned for custody of his own child.
                        </p>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            The Supreme Court said no. Because Stolk and Catherine were not married, Winston Jr. was "illegitimate" under Philippine law, and parental authority belonged exclusively to the mother — even a dead one. Custody went to Catherine's collateral relatives instead of to the boy's living, verified, willing father.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                        <strong className="block text-blue-900 text-sm mb-2 uppercase tracking-wide">Impact on the Child</strong>
                        <p className="text-blue-800 text-sm">
                            Winston Jr. lost his mother at birth. His father was alive, proven, and wanted him. The law handed him to extended relatives because the code doesn't recognize an unmarried father's right to his own child — not even when the mother is gone. A boy who could have been raised by his dad grew up without either parent.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story 4: OFW Ruling */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-serif">The OFW Trap</h3>
                        <p className="text-slate-400 text-sm">Supreme Court Ruling (2025)</p>
                    </div>
                    <Gavel className="text-slate-500 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="p-8 space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">When Working Hard Means Losing Your Kids</h4>
                        <p className="text-slate-600 leading-relaxed">
                            A Filipino father in a 2025 Supreme Court ruling had been co-parenting his children after separating from his wife. When she left for France as an OFW, she placed the children with her mother — not with their father. He petitioned for custody.
                        </p>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            The court denied him, ruling the mother retained sole custody despite being overseas, and the grandmother — not the father — got provisional custody. The Supreme Court affirmed: "Being an OFW does not strip a parent of their right to exercise parental authority."
                        </p>
                    </div>
                    <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
                        <strong className="block text-amber-900 text-sm mb-2 uppercase tracking-wide">Impact on the Child</strong>
                        <p className="text-amber-800 text-sm">
                            Two kids with a father in the Philippines, present and willing, were placed with their grandmother because their mother — living in another country — still held legal priority. The children didn't get the parent who was there. They got the grandparent, because the law says the absent mother still outranks the present father.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      )}

    </div>
  );
};

export default FathersStories;
