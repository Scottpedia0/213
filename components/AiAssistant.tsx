
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Send, X, Loader2, FileText, Maximize2, Minimize2 } from 'lucide-react';
import { ChatMessage, ActionPlan } from '../types';
import ActionPlanPrint from './ActionPlanPrint';

// System context injection
const SYSTEM_CONTEXT = `
You are a specialized Legal Strategy Assistant for "Project 213", a resource for parents navigating Philippine Custody Law.
Your goal is to interview the user to understand their specific situation regarding Article 213 (Tender Years Doctrine), Article 176 (Illegitimacy), and other family code provisions.

Your knowledge base includes:
1. Article 213: No child under 7 separated from the mother unless compelling reasons (drugs, abuse).
2. Article 176: Illegitimate children are under sole maternal authority. Fathers generally have visitation rights but no custody.
3. Hague Gap: The Philippines is a Hague signatory, but many countries (like the US) have not accepted its accession, complicating international return.
4. RA 9262 (VAWC): Often used in custody disputes for protection orders.

INTERVIEW PROCESS:
1. Actively lead the conversation. Ask one or two specific questions at a time to gather the necessary facts.
2. Key Information Needed:
   - Child's Age (Is the child under 7?)
   - Marital Status (Were the parents married in the Philippines? Is the child legitimate?)
   - Location (Where is the child now?)
   - Citizenship (Dual citizens? Foreign passports?)
3. Once you have a clear picture of the situation, suggest specific actionable steps or offer to "Generate a Strategic Action Plan" which will create a downloadable PDF.

TONE:
Direct, knowledgeable, and supportive. Be realistic about the difficulties of Philippine law but focus on finding the best available path for the user, whether they are a mother or a father.
`;

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "Hello. I'm here to help you navigate the legal situation regarding your child. To provide the best guidance and generate a personalized action plan, I need to ask a few questions first.\n\nCould you briefly describe your situation? For example, how old is your child, and are you the custodial or non-custodial parent?", 
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

      const aiText = response.text || "I apologize, the connection was interrupted. Please try again.";
      
      setMessages(prev => [...prev, { role: 'model', text: aiText, timestamp: new Date() }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please check your API configuration.", timestamp: new Date() }]);
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
              <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></div>
              <span className="font-bold font-mono">CASE ASSESSMENT</span>
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
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-slate-400" />
                  <span className="text-xs text-slate-400">Analyzing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Action Area */}
          <div className="p-4 bg-white border-t border-slate-100">
             {messages.length > 4 && (
                 <button 
                    onClick={generateStrategicPlan}
                    disabled={isGeneratingPlan}
                    className="w-full mb-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 rounded-lg border border-slate-300 flex items-center justify-center gap-2 transition-colors"
                 >
                    {isGeneratingPlan ? <Loader2 size={14} className="animate-spin" /> : <FileText size={14} />}
                    GENERATE PDF ACTION PLAN
                 </button>
             )}

            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your situation..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isThinking}
                className="bg-slate-900 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
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
