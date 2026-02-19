import React from 'react';

export const NetworkTransitionSection: React.FC = () => {
  return (
    <section 
        className="relative py-40 lg:py-56 bg-fixed bg-center bg-cover" 
        style={{ 
            // Symbolic image of a door/archway for "opening doors"
            backgroundImage: "url('https://images.unsplash.com/photo-1535202685089-7634f18d7c4a?q=80&w=2071&auto=format&fit=crop')" 
        }}
    >
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-slate-900/70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-[1.2] tracking-tight">
          "La data éclaire le chemin, mais c'est le réseau qui ouvre les portes. <br className="hidden lg:block" />
          On vous connecte au meilleur du Maroc."
        </h2>
        
        <div className="inline-flex items-center justify-center gap-6 animate-fade-in-up">
            <div className="h-0.5 w-16 bg-primary rounded-full"></div>
            <p className="text-xl md:text-2xl font-bold text-primary tracking-[0.2em] uppercase">
                La Team Ilyana
            </p>
            <div className="h-0.5 w-16 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};