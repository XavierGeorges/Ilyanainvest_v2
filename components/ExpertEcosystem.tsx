import React, { useState } from 'react';
import { Scale, Landmark, Ruler, Key, Briefcase, RotateCw, CheckCircle2 } from 'lucide-react';

interface ExpertItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const ExpertFlipCard: React.FC<{ expert: ExpertItem }> = ({ expert }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-80 w-full cursor-pointer [perspective:1000px] group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] shadow-sm hover:shadow-2xl rounded-2xl ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT FACE */}
        <div 
            className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-2xl border border-slate-100 bg-white p-8 flex flex-col items-center justify-center text-center"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] transform scale-150 pointer-events-none">
                {React.cloneElement(expert.icon as React.ReactElement<any>, { className: "w-32 h-32" })}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                    {expert.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{expert.title}</h3>
                
                <div className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 rounded-full">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{expert.subtitle}</p>
                </div>
            </div>

            <div className="absolute bottom-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <RotateCw className="w-4 h-4" />
                <span>Découvrir l'expert</span>
            </div>
        </div>

        {/* BACK FACE */}
        <div 
            className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-slate-900 text-white p-8 flex flex-col justify-center text-center border border-slate-800 relative overflow-hidden"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
             {/* Decorative gradient */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-400"></div>
             
             <div className="relative z-10">
                <div className="mx-auto bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    {React.cloneElement(expert.icon as React.ReactElement<any>, { className: "w-6 h-6 text-primary" })}
                </div>

                <h3 className="text-lg font-bold text-white mb-4">{expert.title}</h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {expert.description}
                </p>

                <div className="flex justify-center items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    Partenaire Vérifié
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export const ExpertEcosystem: React.FC = () => {
    const experts = [
        {
            title: "Études Notariales",
            subtitle: "Spécialisation Étrangers",
            description: "Partenariat avec des études trilingues (Français/Anglais/Arabe) pour sécuriser vos flux financiers et garantir la conformité absolue des actes de vente.",
            icon: <Scale className="w-8 h-8" />
        },
        {
            title: "Fiscalité & Droit",
            subtitle: "Convention Internationale",
            description: "Avocats fiscalistes experts pour optimiser votre montage (SCI, SARL, Personne physique) et faciliter le rapatriement futur des dividendes.",
            icon: <Landmark className="w-8 h-8" />
        },
        {
            title: "Architecture & Design",
            subtitle: "Rénovation & Valorisation",
            description: "Architectes DPLG et designers d'intérieur sélectionnés pour sublimer vos actifs (Spécialistes Riads & Villas) lors de la phase George & Partners.",
            icon: <Ruler className="w-8 h-8" />
        },
        {
            title: "Gestion & Conciergerie",
            subtitle: "Exploitation Premium",
            description: "Les meilleurs opérateurs de gestion locative courte durée (Airbnb/Booking) pour maximiser vos rendements locatifs sans effort.",
            icon: <Key className="w-8 h-8" />
        }
    ];

    return (
        <section className="py-24 bg-white relative" id="ecosystem">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
                        <Briefcase className="w-3 h-3" />
                        Le Hub Partenaires
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Un écosystème d'experts<br/>à votre service.
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Vous n'êtes pas seul. Ilyana Invest orchestre pour vous les meilleures compétences du Royaume. Survolez les cartes pour découvrir nos alliés.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert, idx) => (
                        <ExpertFlipCard key={idx} expert={expert} />
                    ))}
                </div>
            </div>
        </section>
    );
}