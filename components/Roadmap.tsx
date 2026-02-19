import React from 'react';
import { Gavel } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const steps = [
    { day: "J-0", title: "Discovery Call", desc: "Audit de votre profil investisseur et définition du cahier des charges technique." },
    { day: "J-7", title: "Setup & Algo", desc: "Lancement de l'algorithme de sourcing sur nos bases propriétaires." },
    { day: "J-45", title: "The Shortlist", desc: "Transmission de la Note d'Analyse : Calcul de ROI, Audit des risques et dossier Cadastre." },
    { day: "Closing", title: "Signing", desc: "Négociation finale, rendez-vous notaire et transfert de propriété sécurisé.", icon: <Gavel className="w-8 h-8" /> }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="roadmap">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">The 60-Day Roadmap</h2>
          <p className="text-slate-400">Un protocole rigoureux pour transformer une intention en actif sécurisé.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 z-0">
            <div className="absolute top-0 left-0 w-3/4 h-full bg-primary shadow-[0_0_15px_rgba(241,101,55,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start group">
                <div className={`size-20 rounded-full border-4 flex items-center justify-center font-bold text-xl mb-6 shadow-xl transition-transform group-hover:scale-110 z-10 relative bg-white ${idx === 3 ? 'border-slate-200 text-slate-400' : 'border-primary text-primary shadow-primary/10'}`}>
                  {step.icon || step.day}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 text-center lg:text-left leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};