import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Cpu, Globe, ShieldCheck, Zap, BarChart3, Lock } from 'lucide-react';
import { PageType } from '../types';

interface PromoterLPProps {
  onNavigate: (page: PageType) => void;
}

export const PromoterLP: React.FC<PromoterLPProps> = ({ onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20 animate-fade-in">
      
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
            George & Partners — Division B2B
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-36 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-primary text-sm font-bold uppercase tracking-widest mb-10">
                <Cpu className="w-4 h-4" />
                Infrastructure IA Souveraine
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 tracking-tight leading-[1.05] max-w-6xl mx-auto">
                Accélérez votre sortie commerciale avec une <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">infrastructure IA Souveraine.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-400 font-light max-w-4xl mx-auto mb-16 leading-relaxed">
                Le futur de la promotion immobilière est technologique. Ne laissez pas l'inefficience opérationnelle ralentir votre croissance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <a 
                    href="https://wa.me/212721415548?text=Bonjour,%20je%20suis%20promoteur%20et%20je%20souhaite%20auditer%20mon%20infrastructure."
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                 >
                    Auditer mon Infrastructure
                    <ArrowRight className="w-5 h-5" />
                 </a>
            </div>
         </div>
      </div>

      {/* Context Section */}
      <div className="bg-slate-950 py-32 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">La Genèse de George & Partners</h2>
            <div className="prose prose-xl prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <p className="text-xl md:text-2xl font-light">
                    Chez <strong className="text-white font-bold">Ilyana Invest</strong>, nous ne nous contentons pas de conseiller : nous bâtissons les outils de demain. C'est pourquoi nous avons intégré <strong className="text-primary font-bold">George & Partners</strong> au cœur de notre écosystème.
                </p>
                <p className="text-xl md:text-2xl font-light">
                    George & Partners est notre division spécialisée dans l’implémentation d’infrastructures d’Intelligence Artificielle. Initialement développée pour nos propres besoins de sourcing interne, nous mettons aujourd'hui cette puissance technologique au service d'un cercle restreint de promoteurs et constructeurs visionnaires.
                </p>
            </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-32 max-w-7xl mx-auto px-6">
         <h2 className="text-4xl md:text-6xl font-black text-white mb-20 text-center tracking-tight">Ce que George & Partners déploie pour vous</h2>
         
         <div className="grid md:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Réponse Instantanée 24/7</h3>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                    Vos programmes répondent à chaque acquéreur dans plus de <span className="text-white font-bold">50 langues</span>, en temps réel. Un investisseur à New York, Dubaï ou Singapour est servi instantanément, sans décalage horaire.
                </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Économies d’échelle drastiques</h3>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                    Automatisation totale des tâches chronophages : qualification des leads entrants, envois de brochures, relances et suivi administratif. <span className="text-white font-bold">Réduisez vos coûts d'acquisition client de 40%.</span>
                </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">IA Souveraine & Propriétaire</h3>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                    Nous n'utilisons pas des outils publics partagés. Nous implémentons votre infrastructure <span className="italic">chez vous</span>. Votre donnée (leads, prix, stratégie) reste votre actif exclusif, sécurisée et indépendante.
                </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Optimisation sur-mesure</h3>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                    Pas de solution "sur étagère". Nous auditons vos processus internes pour identifier les goulots d'étranglement et automatiser spécifiquement ce qui freine votre croissance aujourd'hui.
                </p>
            </div>
         </div>
      </div>

      {/* Exclusive Advantage Section */}
      <div className="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
         {/* Decorative Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="bg-slate-900/80 border border-slate-700 p-10 md:p-16 rounded-[2rem] backdrop-blur-md shadow-2xl">
                <div className="flex items-start gap-10">
                    <div className="bg-primary p-4 rounded-xl hidden lg:block flex-shrink-0">
                        <Lock className="w-10 h-10 text-white" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Un avantage compétitif exclusif</h2>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-light">
                            Nous croyons à la domination par l'efficience. Pour garantir cet avantage à nos partenaires, nous limitons le déploiement de nos infrastructures à un nombre restreint d'acteurs par ville au Maroc.
                        </p>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
                            L'enjeu est simple : En équipant seulement <span className="text-white font-bold">15 à 20 % des leaders du marché</span>, nous créons une élite technologique. Dans 5 à 10 ans, les acteurs ayant adopté l'IA souveraine de George & Partners auront une avance opérationnelle et financière que le marché traditionnel ne pourra plus rattraper.
                        </p>
                        
                        <div className="pt-10 border-t border-slate-700">
                             <a 
                                href="https://wa.me/212721415548?text=Je%20veux%20rejoindre%20le%20programme%20George%20%26%20Partners."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 text-primary font-bold hover:text-white transition-colors uppercase tracking-widest text-base md:text-lg"
                             >
                                Candidater au programme
                                <ArrowRight className="w-6 h-6" />
                             </a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>

    </div>
  );
};