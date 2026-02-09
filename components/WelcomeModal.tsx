
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
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fade-in-up max-h-[90vh] flex flex-col border border-slate-700/50">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
          {/* Left / Top Banner */}
          <div className="bg-slate-800 p-8 md:w-1/3 flex-shrink-0 flex flex-col justify-center items-center text-center text-white relative overflow-hidden min-h-[200px] md:min-h-0 border-r border-slate-700/50">
            <div className="absolute inset-0 bg-blue-600 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <Heart className="text-red-500 mb-4 relative z-10" size={48} fill="currentColor" />
            <h3 className="font-serif text-2xl font-bold relative z-10">Project 213</h3>
            <a 
              href="https://rescuecharlotte.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-slate-400 mt-2 uppercase tracking-widest relative z-10 hover:text-white hover:underline transition-all cursor-pointer"
            >
              For Charlotte
            </a>
          </div>

          {/* Right / Bottom Content */}
          <div className="p-8 md:w-2/3 overflow-y-auto">
            <h2 className="text-xl font-bold text-slate-900 font-serif italic mb-6 leading-relaxed">
              "Hindi ito laban ng ama at ina — ito ay para sa kapakanan ng bata, una sa lahat."
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Right now, this resource is shaped by a very specific situation — I'm a U.S. father working to bring my daughter, <strong>Charlotte</strong>, home. Her mother exploited Article 213 to isolate her in the Philippines.
              </p>
              <p>
                <strong>However, the law serves a dual purpose.</strong> We recognize that Article 213 and RA 9262 are often the only shield for mothers protecting their children from abusive fathers. <strong className="text-slate-900">We support the protection of children from abuse, regardless of the perpetrator's gender.</strong>
              </p>
              <p>
                Our mission is to fight the <strong>weaponization</strong> of these laws against fit, loving parents. When a law designed to protect children is used to isolate them, the system has failed.
              </p>
              <p>
                The deeper I got into Article 213, the clearer it became: <strong className="text-slate-900">this isn't a dad problem or a mom problem.</strong> It's a system problem that doesn't put the child first.
              </p>
              <p>
                Once Charlotte is home, I'm committed to reworking this into a broader resource for anyone in the Philippines — mothers and fathers alike — navigating this system, pushing for a law that asks one question first:
              </p>
              <p className="font-bold text-slate-900 text-center py-3 bg-slate-50 rounded-lg border border-slate-100 mt-2">
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
