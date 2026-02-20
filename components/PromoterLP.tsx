import React, { useEffect } from 'react';
import { ArrowLeft, Cpu, Search, Workflow, Zap, Quote, MessageCircle, FileCode } from 'lucide-react';
import { PageType } from '../types';
import { FloatingBack } from './FloatingBack';

interface PromoterLPProps {
  onNavigate: (page: PageType) => void;
}

export const PromoterLP: React.FC<PromoterLPProps> = ({ onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Charger le script Calendly dynamiquement
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head?.appendChild(script);

    return () => {
        head?.removeChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20 animate-fade-in">
      <FloatingBack onNavigate={onNavigate} targetSection="partners" />
      
      {/* Navigation Bar */}
      <div className="bg-slate-900/80 backdrop-blur border-b border-slate-800 sticky top-20 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'écosystème
          </button>
          <span className="text-sm font-bold text-primary uppercase tracking-wider hidden sm:block">
            Georges & Partners — Division R&D
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-primary text-sm font-bold uppercase tracking-widest mb-10">
                <Cpu className="w-4 h-4" />
                Infrastructure IA Souveraine
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                L'Ingénierie IA : <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Votre Accélérateur de Performance</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8">
                Le département R&D au service de votre structure.
            </p>

            <div className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto space-y-4">
                <p className="font-bold text-white border-l-2 border-primary pl-4 inline-block">
                    Nous ne vendons pas de gadgets, nous implantons des systèmes.
                </p>
            </div>
         </div>
      </div>

      {/* Parallax Transition Section */}
      <section 
        className="relative py-32 bg-fixed bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')" }}
      >
         <div className="absolute inset-0 bg-slate-900/90"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 opacity-80"></div>
         
         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight italic font-serif">
                "Georges & Partners ne vendons pas de gadgets, nous implantons des systèmes."
            </h2>
         </div>
      </section>

      {/* Audit Workflow Section */}
      <div className="py-20 bg-slate-800/30 border-y border-slate-800 relative">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Audit de Workflow : Identifiez vos leviers de croissance</h2>
                 <p className="text-slate-400 max-w-3xl mx-auto text-lg">
                    Pourquoi l’IA ? Parce qu'un expert doit se concentrer sur l'exceptionnel, pas sur le répétitif. Nous auditons vos processus actuels pour y greffer l'intelligence artificielle là où elle génère un ROI immédiat.
                 </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                        <Search className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Analyse de vos processus</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Identification des tâches chronophages et répétitives.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <FileCode className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Architecture sur-mesure</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Conception d'une infrastructure propre à vos besoins (Promoteur, Agence, Investisseur).
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Automatisation intelligente</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Libérez des dizaines d'heures par semaine pour vous concentrer sur la décision et la relation humaine.
                    </p>
                </div>
            </div>

            <div className="mt-16 flex justify-center">
                <div className="bg-slate-900 border border-primary/20 p-8 rounded-2xl relative max-w-2xl">
                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary fill-current bg-slate-900 rounded-full p-1" />
                    <p className="text-xl font-serif italic text-white text-center">
                        "Nous ne greffons l'IA que si elle a du sens et que son retour sur investissement est rapide."
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-5 pt-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Votre Audit Téléphonique <br/>
                    <span className="text-primary text-2xl">(30 min – Sans engagement)</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10">
                    Prêt à passer à l'échelle supérieure ? Réservez un temps d'écoute pour un diagnostic technique de votre structure.
                </p>

                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-primary" />
                    Le déroulé de l'échange :
                </h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700 shrink-0">1</div>
                        <div>
                            <h4 className="text-white font-bold">Immersion</h4>
                            <p className="text-slate-500 text-sm">Compréhension de votre métier et de vos points de friction.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700 shrink-0">2</div>
                        <div>
                            <h4 className="text-white font-bold">Diagnostic</h4>
                            <p className="text-slate-500 text-sm">Repérage des workflows automatisables de suite.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700 shrink-0">3</div>
                        <div>
                            <h4 className="text-white font-bold">Feuille de route</h4>
                            <p className="text-slate-500 text-sm">Présentation des solutions IA concrètes et du gain de temps estimé.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content - Calendly */}
            <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl overflow-hidden h-[700px]">
                    <div className="bg-slate-100 text-slate-900 py-3 px-6 text-center font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 border-b border-slate-200">
                        <MessageCircle className="w-4 h-4" />
                        Réserver mon audit technique
                     </div>
                    {/* Calendly inline widget begin */}
                     <div 
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/xavier-audras3/30min?hide_gdpr_banner=1&primary_color=f16537" 
                        style={{ minWidth: '320px', height: '100%' }} 
                    />
                     {/* Calendly inline widget end */}
                </div>
            </div>

        </div>
      </div>

    </div>
  );
};