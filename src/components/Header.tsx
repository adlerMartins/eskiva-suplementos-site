import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, Sparkles, ExternalLink, Dumbbell, BookOpen, HelpCircle, UserCheck, Settings } from 'lucide-react';
import { EskivaLogo } from './EskivaLogo';
import { SiteConfig } from '../types';

interface HeaderProps {
  config: SiteConfig;
  activeView: string;
  onNavigate: (view: string, slug?: string) => void;
  onOpenSeoInspector: () => void;
  onOpenCustomizer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  activeView,
  onNavigate,
  onOpenSeoInspector,
  onOpenCustomizer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'sobre', label: 'Sobre a Eskiva' },
    { id: 'ze-eskiva', label: 'Zé Eskiva' },
    { id: 'calculadora', label: 'Calculadora' },
    { id: 'blog', label: 'Blog & Dicas' },
    { id: 'faq', label: 'Dúvidas (FAQ)' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (viewId: string) => {
    setMobileMenuOpen(false);
    onNavigate(viewId);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro-bar for support and quick contact */}
      <div className="bg-[#0D0D0D] border-b border-zinc-800 text-[11px] text-zinc-400 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1 text-zinc-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Fase 4: Pontos de Coleta em todo o Brasil
            </span>
            <a
              href={`tel:${config.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#FF7A00] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FF7A00]" />
              <span>Central: {config.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick SEO Inspector Trigger */}
            <button
              onClick={onOpenSeoInspector}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-bold border border-zinc-700 transition-colors"
              title="Inspecionar Meta Tags e Schema Rank Math"
            >
              <Sparkles className="w-3 h-3 text-[#FF7A00]" />
              <span className="hidden xs:inline">Rank Math</span> SEO
            </button>

            {/* Quick Customizer */}
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-bold border border-zinc-700 transition-colors"
              title="Personalizar dados do site"
            >
              <Settings className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">CMS</span>
            </button>

            <span className="hidden md:inline text-zinc-500">|</span>
            <span className="hidden md:inline text-zinc-400">Atendimento: {config.supportHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#111111]/95 backdrop-blur-md border-b border-zinc-800 shadow-xl'
            : 'bg-[#111111] border-b border-zinc-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none text-left flex items-center group cursor-pointer"
            aria-label="Eskiva Suplementos Início"
          >
            <EskivaLogo size="md" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-bold uppercase tracking-wider transition-colors py-2 relative ${
                  activeView === item.id
                    ? 'text-[#FF7A00]'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeView === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={config.officialRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-xs uppercase tracking-wider hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <UserCheck className="w-4 h-4" />
              <span>Faça Seu Cadastro</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={config.officialRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-lg bg-[#FF7A00] text-zinc-950 font-black text-[11px] uppercase tracking-wider"
            >
              Cadastro
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#FF7A00]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800 z-50 p-6 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2 px-2">
              Navegação Principal
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-between transition-colors ${
                  activeView === item.id
                    ? 'bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/30'
                    : 'bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-zinc-600">›</span>
              </button>
            ))}
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-zinc-800 space-y-3 mt-6">
            <a
              href={config.officialRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <UserCheck className="w-5 h-5" />
              <span>FAÇA SEU CADASTRO OFICIAL</span>
            </a>

            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSeoInspector();
                }}
                className="py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold"
              >
                Rank Math SEO
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold"
              >
                Editar CMS
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
