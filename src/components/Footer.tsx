import React from 'react';
import { Youtube, Instagram, ArrowRight, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { EskivaLogo } from './EskivaLogo';
import { SiteConfig } from '../types';

interface FooterProps {
  config: SiteConfig;
  onNavigate: (view: string, slug?: string) => void;
  onOpenSeoInspector: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onNavigate,
  onOpenSeoInspector,
}) => {
  return (
    <footer className="bg-[#0D0D0D] border-t border-zinc-800 text-zinc-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="focus:outline-none text-left cursor-pointer"
            >
              <EskivaLogo size="md" />
            </button>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Eskiva Suplementos: nutrição esportiva de alta pureza, força e performance. Criada para quem busca superar limites e viver o esporte de verdade.
            </p>
            <div className="pt-2">
              <a
                href={config.officialRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-xs uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-md shadow-orange-500/20"
              >
                <span>FAÇA SEU CADASTRO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Início' },
                { id: 'sobre', label: 'Sobre a Eskiva' },
                { id: 'ze-eskiva', label: 'História do Zé Eskiva' },
                { id: 'produtos', label: 'Todos os Produtos' },
                { id: 'calculadora', label: 'Calculadora de Ingestão' },
                { id: 'blog', label: 'Blog & Dicas' },
                { id: 'faq', label: 'Dúvidas Frequentes' },
                { id: 'contato', label: 'Contato Oficial' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#FF7A00] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product SEO Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Linha de Suplementos</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('product-detail', 'creatina-eskiva')} className="hover:text-[#FF7A00] transition-colors text-left">
                  Creatina Monohidratada 100% Pura
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('product-detail', 'whey-protein-eskiva')} className="hover:text-[#FF7A00] transition-colors text-left">
                  100% Whey Protein Concentrado (900g)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('product-detail', 'multivitaminico-eskiva')} className="hover:text-[#FF7A00] transition-colors text-left">
                  Multivitamínico Nutrição & Vitalidade
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('product-detail', 'pre-treino-eskiva')} className="hover:text-[#FF7A00] transition-colors text-left">
                  Pré-Treino Energia & Foco (150g)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('product-detail', 'coqueteleira-eskiva')} className="hover:text-[#FF7A00] transition-colors text-left">
                  Coqueteleira Oficial Eskiva (700ml)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('product-detail', 'luvas-boxe-eskiva')} className="hover:text-[#FF7A00] transition-colors text-left">
                  Luvas de Boxe / Linha Atleta Oficial
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Contact & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Atendimento & Redes</h4>
            <div className="space-y-2 text-zinc-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>{config.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>{config.email}</span>
              </p>
              <p className="text-[11px] text-zinc-500">
                Atendimento: {config.supportHours}
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={config.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:text-red-500 flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-pink-500 hover:text-pink-500 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={config.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF7A00] hover:text-[#FF7A00] flex items-center justify-center transition-colors text-xs font-black"
                title="TikTok"
              >
                Tk
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSeoInspector}
                className="text-[11px] text-zinc-500 hover:text-[#FF7A00] transition-colors underline"
              >
                Auditoria de Tags SEO & Rank Math
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold text-zinc-400">
              Eskiva Suplementos LTDA • CNPJ: {config.cnpj}
            </p>
            <p>© {new Date().getFullYear()} Eskiva Suplementos. Todos os direitos reservados. {config.websiteDomain}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-zinc-400">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
              Política de Privacidade
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
              Termos de Uso
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('cookies')} className="hover:text-white transition-colors">
              Política de Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
