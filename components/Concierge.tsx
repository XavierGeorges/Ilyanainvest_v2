import React from 'react';
import { Car, BedDouble, MapPin, Sparkles, Coffee, Luggage } from 'lucide-react';

export const Concierge: React.FC = () => {
  const services = [
    {
      title: "Chauffeur à disposition",
      desc: "Votre voiture vous attend. On oublie les galères de taxis, vous vous concentrez sur vos visites en mode \"no stress\".",
      icon: <Car className="w-6 h-6" />
    },
    {
      title: "Sleep in style",
      desc: "On vous déniche le petit Riad caché ou le boutique-hôtel qui claque. On connaît les meilleures adresses, celles que vous ne trouverez pas sur Booking.",
      icon: <BedDouble className="w-6 h-6" />
    },
    {
      title: "Marrakech Insider",
      desc: "On vous emmène là où ça se passe. Les spots secrets pour déjeuner, les quartiers qui montent, le vrai Marrakech des locaux.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "On gère le \"Bruit\"",
      desc: "La logistique, c'est nous. Votre seule mission ? Prendre les bonnes décisions.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="concierge">
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-background-light rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                    <Luggage className="w-3 h-3" />
                    Lifestyle Service
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                    La Conciergerie Ilyana
                </h2>
                <p className="text-xl text-primary font-medium italic mb-8">
                    "Parce qu'on n'investit jamais mieux qu'en étant bien."
                </p>
                
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                    <div className="flex flex-col items-center">
                        <Coffee className="w-8 h-8 text-slate-900 mb-4" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Posez vos valises. On s’occupe du reste.</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">
                            Investir au Maroc ne devrait pas être un parcours du combattant. On vous simplifie la vie (et la ville) pour que votre séjour soit aussi productif qu'agréable.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, idx) => (
                    <div key={idx} className="group bg-[#FBF3E9]/50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white border border-primary/10">
                            {service.icon}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};