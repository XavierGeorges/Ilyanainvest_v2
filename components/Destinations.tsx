import React from 'react';
import { Zap, Database, ArrowRight, Network, Server, Wifi, Loader2, Lock } from 'lucide-react';
import { PageType } from '../types';

interface DestinationsProps {
  onNavigate: (page: PageType) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onNavigate }) => {
  const cities = [
    {
      id: 'casablanca',
      name: 'Casablanca',
      code: 'CAS',
      status: 'En cours de déploiement',
      progress: 75, // Visual value only
      isActive: true,
    },
    {
      id: 'marrakech',
      name: 'Marrakech',
      code: 'RAK',
      status: 'En cours de déploiement',
      progress: 70, // Visual value only
      isActive: true,
    },
    {
      id: 'essaouira',
      name: 'Essaouira',
      code: 'ESU',
      status: 'En cours de déploiement',
      progress: 45, // Visual value only
      isActive: true,
    },
    {
      id: 'tanger',
      name: 'Tanger',
      code: 'TNG',
      status: 'Pas encore ouvert',
      progress: 0,
      isActive: false,
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="destinations">
      {/* Tech Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #e2e8f0 25%, #e2e8f0 26%, transparent 27%, transparent 74%, #e2e8f0 75%, #e2e8f0 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #e2e8f0 25%, #e2e8f0 26%, transparent 27%, transparent 74%, #e2e8f0 75%, #e2e8f0 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section: The AI Advantage */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6">
                    <Zap className="w-3 h-3 text-yellow-400 fill-current" />
                    Infrastructure IA Propriétaire
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    Nous allons <span className="text-primary underline decoration-4 decoration-primary/20 underline-offset-4">7x plus vite</span> que le marché.
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    Cabinet de conseil dédié aux acquéreurs, nous appliquons les codes de la haute conciergerie à l'investissement immobilier. Notre infrastructure IA scanne l’intégralité du marché marocain en temps réel là où d'autres mettent des jours. Cette agilité technologique, couplée à notre présence terrain, nous permet d'identifier et de sécuriser votre opportunité avec la précision et la rapidité d'un palace moderne.
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <Network className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Interlocuteur Unique, Marché Global</h4>
                            <p className="text-sm text-slate-500">Nos algorithmes + nos chasseurs terrain = accès à 100% des biens (Agences, Promoteurs, Off-Market).</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <Database className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Traitement Massif de Data</h4>
                            <p className="text-sm text-slate-500">Nous croisons historique de prix, PLU (Plan Local d'Urbanisme) et tendances locatives pour valider la faisabilité instantanément.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-900 mb-2">
                        Validation stratégique sans engagement :
                    </p>
                    <a 
                        href="https://wa.me/212721415548" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                    >
                        Réserver mon appel consulting
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Right Side: Deployment Barometers */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

                 <div className="flex items-center gap-3 mb-8">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                        <Server className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Zones Stratégiques</h3>
                        <p className="text-xs text-slate-400 font-mono">LIVE COVERAGE STATUS</p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    {cities.map((city) => (
                        <div 
                            key={city.id} 
                            className={`group bg-white p-4 rounded-xl border border-slate-100 shadow-sm transition-all duration-300 ${city.isActive ? 'border-primary/20' : 'opacity-70 bg-slate-50'}`}
                        >
                            <div className="flex justify-between items-end mb-2">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${city.isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                            {city.name}
                                            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-mono border border-slate-200">{city.code}</span>
                                        </h4>
                                    </div>
                                </div>
                                {city.isActive && (
                                    <div className="text-right">
                                        <Loader2 className="w-4 h-4 text-primary animate-spin" />
                                    </div>
                                )}
                            </div>

                            {/* Progress Bar - Visual Only */}
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                                <div 
                                    className={`h-full rounded-full relative ${city.isActive ? 'bg-primary' : 'bg-slate-300'}`}
                                    style={{ width: city.isActive ? `${city.progress}%` : '0%' }}
                                >
                                    {city.isActive && (
                                        <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite] w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}></div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className={`text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 ${city.isActive ? 'text-primary' : 'text-slate-400'}`}>
                                    {city.isActive ? <Wifi className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                                    {city.status}
                                </span>
                            </div>
                        </div>
                    ))}
                 </div>

                 <div className="mt-8 text-center">
                    <p className="text-xs text-slate-400 font-mono">
                        // Total Assets Analyzed Today: <span className="text-slate-900 font-bold">1,248</span>
                    </p>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};