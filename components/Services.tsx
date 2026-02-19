import React from 'react';
import { Search, Hammer, TrendingUp, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { PageType } from '../types';

interface ServicesProps {
    onNavigate: (page: PageType) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const pillars = [
    {
      id: "01",
      title: "Acquisition & Ingénierie",
      brand: "(Ilyana Invest)",
      tagline: "L'intelligence avant l'achat.",
      icon: <Search className="w-6 h-6" />,
      color: "text-primary",
      borderColor: "border-primary/20",
      bgHover: "hover:border-primary/50",
      targetPage: 'service-acquisition',
      points: [
        {
          head: "Sourcing Chirurgical",
          body: "Accès prioritaire au \"Off-Market\" (Terrains, VEFA, Riads) via notre réseau de hunters."
        },
        {
          head: "Due Diligence 360°",
          body: "Audit juridique (Titre, Urbanisme), technique et financier. On élimine le risque avant l'engagement."
        },
        {
          head: "Conformité Financière",
          body: "Pilotage intégral du dossier Office des Changes. On sécurise votre droit au retransfert des fonds dès le premier Dirham."
        },
        {
          head: "Négociation Exclusive",
          body: "Nous sommes votre seul bouclier face aux vendeurs pour garantir le prix net le plus bas."
        }
      ]
    },
    {
      id: "02",
      title: "Build & Tech",
      brand: "(George & Partners)",
      tagline: "Le pilotage de la transformation.",
      icon: <Hammer className="w-6 h-6" />,
      color: "text-blue-600",
      borderColor: "border-blue-600/20",
      bgHover: "hover:border-blue-600/50",
      targetPage: 'service-build',
      points: [
        {
          head: "Maîtrise d’Ouvrage Déléguée (MOD)",
          body: "On devient votre direction de projet. Choix des prestataires, négociation des devis et suivi de chantier."
        },
        {
          head: "Infrastructure IA (RAG)",
          body: "Une exclusivité Ilyana. Notre IA analyse les documents techniques et optimise la gestion de votre projet pour éviter les retards et les surcoûts."
        },
        {
          head: "Standard de Qualité",
          body: "Suivi rigoureux des normes de construction et finitions premium, avec reporting photo/vidéo hebdomadaire sur votre espace client."
        }
      ]
    },
    {
      id: "03",
      title: "Asset Management",
      brand: "(Opérations)",
      tagline: "La pérennité du rendement.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-emerald-600",
      borderColor: "border-emerald-600/20",
      bgHover: "hover:border-emerald-600/50",
      targetPage: 'service-management',
      points: [
        {
          head: "Réception de l’Actif",
          body: "Audit final avant livraison. On s'assure que chaque détail correspond au cahier des charges."
        },
        {
          head: "Optimisation Fiscale",
          body: "Structuration de vos revenus locatifs et accompagnement sur les conventions fiscales entre la France et le Maroc."
        },
        {
          head: "Mise en Exploitation",
          body: "Connexion avec les meilleurs gestionnaires (Airbnb/Longue durée) pour activer votre cash-flow immédiatement."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FBF3E9]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Expertise 360°
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Notre Écosystème de Services
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">
                Une chaîne de valeur intégrée pour transformer l'opportunité en patrimoine sécurisé.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar) => (
            <div 
                key={pillar.id} 
                className={`bg-white rounded-3xl p-8 border ${pillar.borderColor} shadow-sm transition-all duration-300 ${pillar.bgHover} group flex flex-col h-full`}
            >
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                    <span className={`text-5xl font-black ${pillar.color} opacity-20`}>
                        {pillar.id}.
                    </span>
                    <div className={`p-3 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors ${pillar.color}`}>
                        {pillar.icon}
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {pillar.title}
                    <span className={`block text-sm font-medium mt-1 ${pillar.color}`}>{pillar.brand}</span>
                </h3>
                
                <div className="mt-4 pb-4 border-b border-slate-100">
                    <p className="text-slate-500 italic font-medium">"{pillar.tagline}"</p>
                </div>
              </div>

              <ul className="space-y-6 flex-1">
                {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex gap-4">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pillar.color}`} />
                        <div>
                            <h4 className="text-sm font-bold text-slate-900 mb-1">{point.head}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {point.body}
                            </p>
                        </div>
                    </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-50">
                <button 
                    onClick={() => onNavigate(pillar.targetPage as PageType)}
                    className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all ${pillar.color} bg-transparent border-none cursor-pointer`}
                >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Le Livrable Phare Banner */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
             {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                 <div className="flex-shrink-0">
                    <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                        <FileText className="w-8 h-8 text-primary" />
                    </div>
                 </div>
                 <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                        Le Livrable Phare
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Note de Transmission
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                        Pour chaque mission de sourcing, recevez un rapport d’audit complet de 15 pages. Photos, analyses de risques et projections de ROI. <span className="text-white font-semibold">Décidez avec des chiffres, pas avec des promesses.</span>
                    </p>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};
