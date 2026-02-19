import React from 'react';
import { Calendar, ArrowRight, Mail, MapPin } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (page: PageType) => {
    window.scrollTo(0, 0);
    onNavigate(page);
  };

  return (
    <footer className="py-20 bg-background-light border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* CTA */}
        <div className="bg-primary p-4 rounded-2xl mb-8 shadow-xl shadow-primary/20 rotate-3 hover:rotate-0 transition-transform">
          <Calendar className="text-white w-8 h-8" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Prêt à bâtir votre patrimoine au Maroc ?</h2>
        <p className="text-slate-500 text-lg mb-12 max-w-2xl">
          Rejoignez le cercle restreint de nos investisseurs et accédez à une expertise sans compromis.
        </p>
        <a 
          href="https://wa.me/212721415548"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 hover:text-primary hover:border-primary transition-colors pb-1 group"
        >
          Prendre rendez-vous (WhatsApp)
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left w-full pt-20 mt-20 border-t border-slate-300">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg font-bold text-slate-900 tracking-tighter uppercase">Ilyana Invest</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Le premier cabinet de conseil en investissement immobilier piloté par la data et l'IA souveraine au Royaume du Maroc.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Expertise</h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors text-left">Chasse Foncière</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors text-left">Sécurisation Notariale</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors text-left">Optimisation ROI</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Compagnie</h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors text-left">Notre Manifeste</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors text-left">Georges & Partners</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors text-left">Recrutement</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-primary" /> 
                contact@ilyana-invest.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-primary mt-0.5" /> 
                <span>Casablanca • Marrakech • Essaouira</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-300 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
          <p>© 2024 Ilyana Invest. Tous droits réservés.</p>
          <div className="flex gap-8">
            <button onClick={() => handleLinkClick('legal')} className="hover:text-primary transition-colors uppercase">Mentions Légales</button>
            <button onClick={() => handleLinkClick('privacy')} className="hover:text-primary transition-colors uppercase">Confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
};