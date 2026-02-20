import React from 'react';

export const NetworkTransitionSection: React.FC = () => {
  return (
    <section 
        className="relative py-40 lg:py-56 bg-fixed bg-center bg-cover -mt-20 z-10" 
        style={{ 
            // Symbolic image of a door/archway for "opening doors"
            backgroundImage: "url('https://res.cloudinary.com/dmjvspbcq/image/upload/v1771522429/Gemini_Generated_Image_95kb9p95kb9p95kb-ezgif.com-png-to-webp-converter_goozgu.webp')" 
        }}
    >
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-slate-900/70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-[1.2] tracking-tight">
          "Data, Humain, Réseau : l'exclusivité marocaine avec précision"
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