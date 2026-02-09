
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Send, X, Loader2, FileText, Maximize2, Minimize2 } from 'lucide-react';
import { ChatMessage, ActionPlan } from '../types';
import ActionPlanPrint from './ActionPlanPrint';

// System context injection
const SYSTEM_CONTEXT = `
You are the Tactical Strategy Engine for "Project 213".
You are NOT a therapist. You are a Legal Strategy Consultant.

Your Mission: Guide parents through the minefield of Philippine Custody Law (Article 213, Article 176, Hague Gap).

CORE KNOWLEDGE:
1. Article 213 (Tender Years): Absolute maternal custody under 7. The only exception is "Compelling Reasons" (Drugs, Abuse, Neglect). Poverty is NOT a compelling reason.
2. Article 176 (Illegitimacy): Unmarried mothers have sole authority. Fathers are legal strangers unless they prove unfitness.
3. The Hague Gap: US Court orders are useless in the Philippines until "Recognized" by a PH court.
4. RA 9262 (VAWC): Often weaponized. If the user is angry or unstable, warn them that their anger is a liability.

TONE & PERSONA:
- Stoic, Operational, Military-Grade.
- "Tough Love": If a user complains about "fairness," remind them the law does not care about fairness. It cares about statutes.
- If the user admits to anger, mental health struggles, or aggression, tell them immediately: "Fix yourself. If you are broken, you cannot lead. Your instability is evidence for the opposition."
- Focus on Evidence, Logistics, and Strategy. Not emotions.

INTERVIEW PROTOCOL:
1. Assess Status: Child's Age? Legitimacy (Married/Unmarried)? Location?
2. Assess Leverage: Does the user have evidence of drug use? Neglect?
3. Strategic Output: Push them towards generating the "Strategic Action Plan".
`;

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "Project 213 Tactical Engine Online.\n\nI need to calibrate your situation. State your Child's Age, your Marital Status with the mother, and the Child's current location.", 
      timestamp: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<ActionPlan | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen for the custom event to open the agent from specific buttons
  useEffect(() => {
    const handleOpen = () => {
        setIsOpen(true);
    };
    window.addEventListener('open-ai-strategy', handleOpen);
    return () => window.removeEventListener('open-ai-strategy', handleOpen);
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      // Initialize Gemini
      // NOTE: process.env.API_KEY must be set in the environment
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct history for the model
      const historyStr = messages.map(m => `${m.role}: ${m.text}`).join('\n');
      const prompt = `${SYSTEM_CONTEXT}\n\nCURRENT CONVERSATION:\n${historyStr}\nUser: ${userMsg.text}\nModel:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }] // Enable search for latest legal news if needed
        }
      });

      const aiText = response.text || "Signal interrupted. Re-state your input.";
      
      setMessages(prev => [...prev, { role: 'model', text: aiText, timestamp: new Date() }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Check API configuration.", timestamp: new Date() }]);
    } finally {
      setIsThinking(false);
    }
  };

  const generateStrategicPlan = async () => {
    setIsGeneratingPlan(true);
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const historyStr = messages.map(m => `${m.role}: ${m.text}`).join('\n');
        
        const planPrompt = `
          Based on the following conversation, generate a structured Strategic Action Plan in JSON format.
          
          CONVERSATION:
          ${historyStr}

          Output strictly JSON with this schema:
          {
            "riskAssessment": "string (1 paragraph summary of their legal risk)",
            "immediateActions": ["string", "string", "string"],
            "legalStrategy": ["string", "string", "string"],
            "longTermGoals": ["string", "string"],
            "requiredResources": ["string", "string"]
          }
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: planPrompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        riskAssessment: { type: Type.STRING },
                        immediateActions: { type: Type.ARRAY, items: { type: Type.STRING } },
                        legalStrategy: { type: Type.ARRAY, items: { type: Type.STRING } },
                        longTermGoals: { type: Type.ARRAY, items: { type: Type.STRING } },
                        requiredResources: { type: Type.ARRAY, items: { type: Type.STRING } }
                    }
                }
            }
        });

        if (response.text) {
            const plan = JSON.parse(response.text) as ActionPlan;
            setGeneratedPlan(plan);
        }

    } catch (error) {
        console.error("Plan Generation Error:", error);
        alert("Could not generate plan. Please continue the conversation to provide more details.");
    } finally {
        setIsGeneratingPlan(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && !generatedPlan && (
        <div className={`fixed z-50 bg-white shadow-2xl flex flex-col transition-all duration-300 border border-slate-200
            ${isMaximized ? 'inset-0 rounded-none' : 'bottom-6 right-6 w-96 h-[600px] rounded-2xl'}`}>
          
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="bg-red-500 w-2 h-2 rounded-full animate-pulse"></div>
              <span className="font-bold font-mono tracking-wider">TACTICAL OPS</span>
            </div>
            <div className="flex gap-2 text-slate-400">
               <button onClick={() => setIsMaximized(!isMaximized)} className="hover:text-white">
                 {isMaximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
               </button>
               <button onClick={() => setIsOpen(false)} className="hover:text-white">
                 <X size={18} />
               </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-slate-400" />
                  <span className="text-xs text-slate-400">Calibrating...</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Action Area */}
          <div className="p-4 bg-white border-t border-slate-100">
             {messages.length > 2 && (
                 <button 
                    onClick={generateStrategicPlan}
                    disabled={isGeneratingPlan}
                    className="w-full mb-3 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold py-2 rounded-lg border border-red-200 flex items-center justify-center gap-2 transition-colors"
                 >
                    {isGeneratingPlan ? <Loader2 size={14} className="animate-spin" /> : <FileText size={14} />}
                    GENERATE TACTICAL BRIEF (PDF)
                 </button>
             )}

            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Enter sitrep..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-slate-400"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isThinking}
                className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Plan Modal (PDF View) */}
      {generatedPlan && (
        <ActionPlanPrint plan={generatedPlan} onClose={() => setGeneratedPlan(null)} />
      )}
    </>
  );
};

export default AiAssistant;
