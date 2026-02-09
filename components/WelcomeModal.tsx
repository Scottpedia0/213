import React from 'react';
import { Heart, X } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left / Top Banner */}
          <div className="bg-slate-900 p-8 md:w-1/3 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <Heart className="text-red-500 mb-4 relative z-10" size={48} fill="currentColor" />
            <h3 className="font-serif text-2xl font-bold relative z-10">Project 213</h3>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest relative z-10">Mission: Charlotte</p>
          </div>

          {/* Right / Bottom Content */}
          <div className="p-8 md:w-2/3">
            <h2 className="text-xl font-bold text-slate-900 font-serif italic mb-6 leading-relaxed">
              "Hindi ito laban ng ama at ina — ito ay para sa kapakanan ng bata, una sa lahat."
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Right now, this resource is shaped by a very specific situation — I'm a U.S. father working to bring my daughter, <strong>Charlotte</strong>, home. That makes some of the tactical advice here heavily focused on international abduction.
              </p>
              <p>
                But the deeper I got into Article 213, the clearer it became: <strong className="text-slate-900">this isn't a dad problem or a mom problem.</strong> It's a system that doesn't put the child first. That affects Filipino families — fathers, mothers, and most of all, kids — every single day.
              </p>
              <p>
                Once Charlotte is home, I'm committed to reworking this into a broader resource for anyone in the Philippines navigating Article 213 — connecting with reform advocates and pushing for a system that asks one question first:
              </p>
              <p className="font-bold text-slate-900 text-center py-2 bg-slate-50 rounded-lg border border-slate-100 mt-2">
                "Ano ang pinakamabuti para sa bata?"<br/>
                <span className="font-normal text-xs text-slate-500">(What is best for the child?)</span>
              </p>
            </div>

            <button 
              onClick={onClose}
              className="mt-8 w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              Enter Resource
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
