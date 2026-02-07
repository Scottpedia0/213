import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Info, ArrowRight, ShieldAlert } from 'lucide-react';

const RiskAssessment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    childAge: '',
    maritalStatus: '',
    location: '',
    legalStatus: ''
  });

  const handleAnswer = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const reset = () => {
    setStep(1);
    setAnswers({ childAge: '', maritalStatus: '', location: '', legalStatus: '' });
  };

  const getAssessment = () => {
    const isUnder7 = answers.childAge === 'under7';
    const isIllegitimate = answers.maritalStatus === 'unmarried';
    const isInPH = answers.location === 'philippines';
    
    let riskLevel = 'Medium';
    let riskColor = 'text-yellow-600';
    let title = 'Standard Custody Dispute';
    let description = 'You face significant procedural hurdles, but standard legal avenues are available.';
    
    if (isUnder7 && isIllegitimate) {
      riskLevel = 'Critical';
      riskColor = 'text-red-600';
      title = 'The "Iron Curtain" Scenario';
      description = 'This is the most difficult legal position in Philippine Law. You face the combined barriers of Article 213 (Tender Years) and Article 176 (Sole Maternal Authority).';
    } else if (isUnder7 && !isIllegitimate) {
      riskLevel = 'High';
      riskColor = 'text-orange-600';
      title = 'The Tender Years Trap';
      description = 'While you share parental authority (Married), Article 213 mandates custody remains with the mother absent compelling reasons. Joint custody is rarely awarded for children this young.';
    } else if (!isUnder7) {
      riskLevel = 'Moderate';
      riskColor = 'text-blue-600';
      title = 'The Best Interest Window';
      description = 'Since the child is over 7, the child’s choice is given weight (Rule 99), and the "Tender Years" presumption no longer applies automatically. This is a battle of "fitness" vs "fitness".';
    }

    return { riskLevel, riskColor, title, description, isUnder7, isIllegitimate, isInPH };
  };

  const result = getAssessment();

  return (
    <div className="max-w-3xl mx-auto pt-8 pb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">Case Readiness Assessment</h2>
        <p className="text-slate-500 mt-2">Determine your legal exposure under the Philippine Family Code.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {step < 5 ? (
          <div className="p-8 md:p-12">
            
            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <span>Question {step} of 4</span>
                <span>{Math.round((step / 4) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full">
                <div 
                  className="bg-slate-900 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">How old is the child?</h3>
                <div className="grid gap-4">
                  <button onClick={() => handleAnswer('childAge', 'under7')} className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <span className="font-medium text-slate-700">Under 7 Years Old</span>
                    <ArrowRight className="text-slate-300 group-hover:text-slate-900" />
                  </button>
                  <button onClick={() => handleAnswer('childAge', 'over7')} className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <span className="font-medium text-slate-700">7 Years or Older</span>
                    <ArrowRight className="text-slate-300 group-hover:text-slate-900" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">What is the marital status of the parents?</h3>
                <p className="text-slate-500 text-sm">Under Philippine Law, "Married" refers to a marriage recognized by the Philippines.</p>
                <div className="grid gap-4">
                  <button onClick={() => handleAnswer('maritalStatus', 'married')} className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <span className="font-medium text-slate-700">Married</span>
                    <ArrowRight className="text-slate-300 group-hover:text-slate-900" />
                  </button>
                  <button onClick={() => handleAnswer('maritalStatus', 'unmarried')} className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <span className="font-medium text-slate-700">Never Married / Common Law</span>
                    <ArrowRight className="text-slate-300 group-hover:text-slate-900" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Where is the child physically located right now?</h3>
                <div className="grid gap-4">
                  <button onClick={() => handleAnswer('location', 'philippines')} className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <span className="font-medium text-slate-700">In the Philippines</span>
                    <ArrowRight className="text-slate-300 group-hover:text-slate-900" />
                  </button>
                  <button onClick={() => handleAnswer('location', 'abroad')} className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <span className="font-medium text-slate-700">Abroad / In Transit</span>
                    <ArrowRight className="text-slate-300 group-hover:text-slate-900" />
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Have legal cases already been filed?</h3>
                <div className="grid gap-4">
                  <button onClick={() => handleAnswer('legalStatus', 'yes')} className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <span className="font-medium text-slate-700">Yes (VAWC, Custody, or Habeas Corpus)</span>
                    <ArrowRight className="text-slate-300 group-hover:text-slate-900" />
                  </button>
                  <button onClick={() => handleAnswer('legalStatus', 'no')} className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <span className="font-medium text-slate-700">No, we are just starting</span>
                    <ArrowRight className="text-slate-300 group-hover:text-slate-900" />
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          <div>
            <div className="bg-slate-900 p-8 text-white text-center">
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Assessment Result</h3>
              <h2 className="text-3xl font-playfair font-bold mb-4">{result.title}</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <AlertTriangle size={16} className={result.riskColor === 'text-red-600' ? 'text-red-500' : 'text-yellow-500'} />
                <span className="font-bold">{result.riskLevel} Risk Profile</span>
              </div>
            </div>
            
            <div className="p-8 md:p-12 space-y-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                {result.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <XCircle className="text-red-500" size={20} />
                    Major Hurdles
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {result.isUnder7 && (
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                        <span><strong>Article 213:</strong> Mandatory maternal custody presumption.</span>
                      </li>
                    )}
                    {result.isIllegitimate && (
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                        <span><strong>Article 176:</strong> You have no parental authority. You are legally a "visitor."</span>
                      </li>
                    )}
                    {result.isInPH && (
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                        <span><strong>Hague Vacuum:</strong> No summary return mechanism. You must litigate locally.</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="text-blue-500" size={20} />
                    Strategic Leverage
                  </h4>
                  <ul className="space-y-3 text-sm text-blue-800">
                     <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                        <span><strong>Clinical Unfitness:</strong> Focus investigation on drugs/neglect (Sison case).</span>
                     </li>
                     {result.isIllegitimate && (
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                        <span><strong>Substitute Parental Authority:</strong> Petition for custody if mother is absent/unfit (G.R. 234660).</span>
                      </li>
                     )}
                     <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                        <span><strong>HDO:</strong> File immediately to prevent island-hopping.</span>
                     </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button 
                  onClick={reset}
                  className="text-slate-400 hover:text-slate-600 font-medium text-sm flex items-center gap-2"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-slate-100 p-4 rounded-lg flex items-start gap-3 text-xs text-slate-500">
        <ShieldAlert className="shrink-0" size={16} />
        <p>
          <strong>Disclaimer:</strong> This tool provides information based on general application of Philippine statutes. It is not legal advice. Every family court judge has wide discretion.
        </p>
      </div>
    </div>
  );
};

export default RiskAssessment;
