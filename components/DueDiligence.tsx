import React, { useState } from 'react';
import { ShieldCheck, FileSearch, Scale, Building, Lock, RotateCw, Search } from 'lucide-react';

interface CheckpointProps {
  item: {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
  };
}

const DiligenceFlipCard: React.FC<CheckpointProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-64 w-full cursor-pointer [perspective:1000px] group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] shadow-sm hover:shadow-xl rounded-2xl ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Face */}
        <div 
            className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-2xl border border-slate-100 bg-white p-6 flex flex-col justify-between overflow-hidden"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
           {/* Decor */}
           <div className="absolute -right-4 -top-4 bg-emerald-50 rounded-full w-24 h-24 blur-2xl"></div>

           <div className="relative z-10">
              <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center text-slate-900 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest border border-emerald-100 bg-emerald-50 inline-block px-2 py-0.5 rounded">
                {item.subtitle}
              </p>
           </div>

           <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mt-4 group-hover:text-emerald-600 transition-colors">
              <RotateCw className="w-4 h-4" />
              <span>Voir le point de contrôle</span>
           </div>
        </div>

        {/* Back Face */}
        <div 
            className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-emerald-900 text-white p-6 flex flex-col justify-center text-center shadow-xl border border-emerald-800"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="absolute top-4 right-4 opacity-20">
            <ShieldCheck className="w-12 h-12" />
          </div>
          
          <h3 className="text-lg font-bold text-emerald-400 mb-4">{item.title}</h3>
          <p className="text-emerald-100 text-sm leading-relaxed">
            {item.description}
          </p>
          
          <div className="mt-6 flex justify-center">
            <div className="bg-emerald-800/50 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400 border border-emerald-700">
              [ STATUS: VERIFIED ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DueDiligence: React.FC = () => {
  const checkpoints = [
    {
      title: "Vérification Hypothécaire",
      subtitle: "Conservation Foncière",
      description: "Analyse approfondie du certificat de propriété pour garantir l'absence de saisies, d'hypothèques cachées ou de litiges en cours.",
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      title: "Audit Urbanistique",
      subtitle: "Note de Renseignement",
      description: "Validation rigoureuse des droits à construire, du zonage et de la conformité avec le plan d'aménagement urbain.",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Conformité VNR",
      subtitle: "Office des Changes",
      description: "Contrôle de la Valeur Non Révisable (VNR) pour sécuriser et garantir la convertibilité et le rapatriement futur de vos fonds.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Audit Promoteur",
      subtitle: "Si VEFA (Vente sur Plan)",
      description: "Analyse de la réputation, de la solvabilité financière et de l'historique de livraison du promoteur immobilier.",
      icon: <Search className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="compliance">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-6">
            <Lock className="w-3 h-3" />
            Le Coffre-Fort - Compliance
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Zéro zone d'ombre :<br/>Notre protocole de Due Diligence.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Pour chaque actif, nous déployons une grille d'audit stricte. Cliquez sur les cartes pour révéler les points de contrôle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {checkpoints.map((item, idx) => (
            <DiligenceFlipCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};