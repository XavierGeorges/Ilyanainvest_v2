import React from 'react';
import { Check, X, TrendingUp, AlertTriangle, ShieldCheck, Banknote, Plane } from 'lucide-react';

export const BuyersAdvantage: React.FC = () => {
  return (
    <section className="py-24 bg-[#FBF3E9] relative overflow-hidden" id="roi">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <TrendingUp className="w-3 h-3" />
            Impact Financier
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Plus qu’un conseil,<br/>un levier de performance.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Visualisez immédiatement la différence entre un investissement amateur et une stratégie institutionnelle.
          </p>
        </div>

        {/* VERSUS GRID */}
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            
            {/* LEFT CARD: SOLO (The Problem) */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-3xl p-8 lg:p-10 relative overflow-hidden grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    <AlertTriangle className="w-32 h-32 text-slate-900" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
                            <span className="text-2xl">😕</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-700">L'Investisseur Solo</h3>
                            <p className="text-xs text-red-500 font-bold uppercase tracking-wide">Approche Risquée</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Point 1 */}
                        <div className="flex gap-4 items-start border-b border-slate-200 pb-4">
                            <div className="bg-red-100 p-1.5 rounded-full mt-1 shrink-0">
                                <X className="w-4 h-4 text-red-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Prix "Touriste"</h4>
                                <p className="text-sm text-slate-500 mt-1">Surtaxe de 10 à 20% appliquée aux étrangers non accompagnés.</p>
                                <div className="mt-2 inline-block px-2 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded">-15% de Rentabilité immédiate</div>
                            </div>
                        </div>

                         {/* Point 2 */}
                         <div className="flex gap-4 items-start border-b border-slate-200 pb-4">
                            <div className="bg-red-100 p-1.5 rounded-full mt-1 shrink-0">
                                <X className="w-4 h-4 text-red-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Logistique Lourde</h4>
                                <p className="text-sm text-slate-500 mt-1">Multiples A/R avion, hôtels, temps perdu en visites inutiles.</p>
                            </div>
                        </div>

                         {/* Point 3 */}
                         <div className="flex gap-4 items-start">
                            <div className="bg-red-100 p-1.5 rounded-full mt-1 shrink-0">
                                <X className="w-4 h-4 text-red-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Incertitude Juridique</h4>
                                <p className="text-sm text-slate-500 mt-1">Risque de blocage des fonds ou de titres fonciers non apurés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT CARD: ILYANA (The Solution) */}
            <div className="bg-white border-2 border-primary/20 rounded-3xl p-8 lg:p-10 relative shadow-2xl shadow-primary/10 transform lg:scale-105 z-20">
                {/* Badge */}
                <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                    <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg shadow-primary/30 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Le Choix Smart
                    </div>
                </div>

                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <ShieldCheck className="w-32 h-32 text-primary" />
                </div>

                <div className="relative z-10 mt-4">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-900">Client Ilyana Invest</h3>
                            <p className="text-xs text-primary font-bold uppercase tracking-wide">Performance Maximisée</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Point 1 */}
                        <div className="flex gap-4 items-start border-b border-slate-100 pb-4">
                            <div className="bg-emerald-100 p-1.5 rounded-full mt-1 shrink-0">
                                <Check className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    Prix de Marché Réel
                                    <Banknote className="w-4 h-4 text-emerald-500" />
                                </h4>
                                <p className="text-sm text-slate-500 mt-1">Négociation agressive par nos experts locaux. Nos honoraires sont souvent couverts par l'économie réalisée.</p>
                                <div className="mt-2 inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded">Gain estimé : +15% vs Solo</div>
                            </div>
                        </div>

                         {/* Point 2 */}
                         <div className="flex gap-4 items-start border-b border-slate-100 pb-4">
                            <div className="bg-emerald-100 p-1.5 rounded-full mt-1 shrink-0">
                                <Check className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    100% À Distance
                                    <Plane className="w-4 h-4 text-emerald-500" />
                                </h4>
                                <p className="text-sm text-slate-500 mt-1">Vidéos drones, visites virtuelles, procurations notariées. Investissez depuis votre canapé.</p>
                            </div>
                        </div>

                         {/* Point 3 */}
                         <div className="flex gap-4 items-start">
                            <div className="bg-emerald-100 p-1.5 rounded-full mt-1 shrink-0">
                                <Check className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    Sécurité Totale (VNR)
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                </h4>
                                <p className="text-sm text-slate-500 mt-1">Validation de la convertibilité des fonds (Office des Changes) pour garantir votre sortie.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <a 
                            href="https://wa.me/212721415548"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2 group"
                        >
                            Sécuriser mon investissement
                            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
                        </a>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};