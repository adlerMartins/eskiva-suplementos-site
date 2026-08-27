import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

interface CookieBannerProps {
  onOpenCookiesPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiesPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('eskiva_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('eskiva_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('eskiva_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de Cookies e Privacidade"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-4 sm:p-5 rounded-2xl bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md shadow-2xl text-xs text-zinc-300 space-y-3 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/20 border border-[#FF7A00]/40 flex items-center justify-center text-[#FF7A00] flex-shrink-0">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="space-y-1 flex-1">
          <h3 className="font-bold text-white uppercase text-xs tracking-wider">
            Privacidade & Cookies (LGPD)
          </h3>
          <p className="text-zinc-400 text-[11px] leading-relaxed">
            Utilizamos cookies para aprimorar sua experiência de navegação e medir o tráfego de forma anônima. Ao continuar, você concorda com nossa{' '}
            <button
              onClick={onOpenCookiesPolicy}
              className="text-[#FF7A00] hover:underline font-semibold"
            >
              Política de Cookies
            </button>.
          </p>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Fechar aviso"
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-end gap-2 pt-1 border-t border-zinc-800">
        <button
          onClick={handleDecline}
          className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          Apenas Essenciais
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-[#FF7A00] text-zinc-950 text-[11px] font-black uppercase tracking-wider hover:bg-orange-400 transition-all shadow-md shadow-orange-500/20 flex items-center gap-1"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Aceitar Todos</span>
        </button>
      </div>
    </div>
  );
};
