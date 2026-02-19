import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface PartnersProps {
    onNavigate: (page: PageType) => void;
}

export const Partners: React.FC<PartnersProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-32 overflow-hidden" id="partners">
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
            // Abstract Data/Network background
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" 
        }}
      ></div>
      
      {/* Overlays for readability and mood */}
      <div className="absolute inset-0 z-0 bg-slate-900/90"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900/90"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header - Centered for Transition Effect */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                Infrastructure B2B
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Proprietary <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Data-Infrastructure</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Promoteurs, constructeurs, agences internationales : <span className="text-white font-bold">pluggez vos actifs</span> sur notre infrastructure IA. Nous qualifions votre offre par la data pour nos investisseurs institutionnels.
            </p>
            
            <button 
                onClick={() => onNavigate('promoter-lp')}
                className="inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-white/5 group"
            >
                Devenir Promoteur 2.0
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Stats & Tech Stack */}
          <div className="space-y-12">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <p className="text-4xl font-black text-white mb-2">450M+</p>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">Volume Sourced (MAD)</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <p className="text-4xl font-black text-white mb-2">12</p>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">Partenaires Tech</p>
                </div>
            </div>

            {/* Tech Stack Logos */}
            <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Powered by Best-in-Class Tech</p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-70 hover:opacity-100 transition-all duration-500">
                    {/* VERCEL - White */}
                    <svg className="h-5 w-auto text-white" viewBox="0 0 116 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
                    </svg>

                    {/* SUPABASE - Emerald */}
                    <svg className="h-6 w-auto text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.999 2H12.001V2.002H11.999V2ZM11.999 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 11.999 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 11.999 2ZM20.62 14.5L13.28 15.68L14.71 20.35C14.78 20.57 14.71 20.81 14.54 20.96C14.44 21.05 14.31 21.1 14.18 21.1C14.09 21.1 14 21.07 13.92 21.02L3.82 14.28C3.62 14.15 3.53 13.9 3.61 13.68C3.68 13.46 3.89 13.31 4.12 13.31H9.86V6.02L9.85 6.01L9.86 6.01C9.86 5.86 9.93 5.72 10.05 5.62C10.17 5.53 10.33 5.49 10.48 5.52L19.45 7.1C19.66 7.14 19.83 7.31 19.86 7.52C19.9 7.74 19.81 7.96 19.64 8.09L13.64 12.59H11.99V12.6L20.24 13.88C20.46 13.91 20.64 14.08 20.67 14.3C20.69 14.37 20.69 14.43 20.67 14.5H20.62Z" fill="currentColor"/>
                    </svg>
                    
                    {/* N8N */}
                    <div className="h-6 flex items-center text-[#ff6d5a] font-bold text-lg tracking-tight">
                       <span className="border-2 border-current rounded px-1 text-xs mr-1">n8n</span> Workflow
                    </div>

                    {/* GEMINI */}
                    <div className="flex items-center gap-1 text-[#4E88D4]">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.986 1.07185C12.7219 -0.357282 10.741 -0.357283 10.4769 1.07185C9.4005 6.89921 5.46274 10.837 0.985956 11.9133C-0.347781 12.1604 -0.347783 14.0537 0.985956 14.3008C5.46274 15.3771 9.4005 19.3149 10.4769 25.1422C10.741 26.5714 12.7219 26.5714 12.986 25.1422C14.0624 19.3149 18.0001 15.3771 22.4769 14.3008C23.8106 14.0537 23.8106 12.1604 22.4769 11.9133C18.0001 10.837 14.0624 6.89921 12.986 1.07185Z"/>
                        </svg>
                        <span className="font-semibold text-slate-300 hidden sm:block">Gemini</span>
                    </div>

                    {/* CLAUDE */}
                    <div className="flex items-center gap-2 text-slate-300">
                        <div className="bg-white text-slate-900 p-0.5 px-1.5 text-xs font-serif italic rounded-sm">Ae</div>
                        <span className="font-medium text-sm">Claude</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Floating Terminal Visualization */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
              
              {/* Terminal Header */}
              <div className="bg-black/50 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 </div>
                 <div className="text-[10px] text-slate-500 font-mono">ilyana-core — zsh — 80x24</div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-slate-300 bg-black/80">
                <div className="space-y-3">
                    <p className="opacity-50">// Initializing secure websocket...</p>
                    <div>
                        <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-white">connect</span> --secure instance_morocco_data
                    </div>
                    <p className="text-slate-400">Authenticating...</p>
                    <p className="text-green-400">Connection established (14ms).</p>
                    
                    <div className="mt-4">
                         <span className="text-green-400">➜</span> <span className="text-blue-400">~/assets</span> <span className="text-white">run risk_audit_v4.py</span> --target=VEFA-2024-MAR
                    </div>
                    
                    <div className="pl-4 border-l-2 border-slate-700 mt-2 space-y-1 text-slate-400">
                        <p>> Fetching cadastre info... <span className="text-green-400">[DONE]</span></p>
                        <p>> Analyzing legal claims... <span className="text-green-400">[CLEAN]</span></p>
                        <p>> Calculating projected Yield... <span className="text-yellow-400">[PROCESSING]</span></p>
                    </div>

                    <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg animate-pulse">
                        <p className="text-primary font-bold">REPORT READY: ROI +12.5% | LTV 70%</p>
                    </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};