import React from 'react';
import { ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';
import { SiteConfig } from '../types';

interface CtaBannerProps {
  config: SiteConfig;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ config }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-[#FF7A00] to-amber-500 text-zinc-950 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/20 text-zinc-950 text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Junte-se à Comunidade Eskiva
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
            Pronto para Elevar Seu Treino a Outro Nível?
          </h2>

          <p className="text-sm sm:text-base text-zinc-900 font-semibold max-w-xl mx-auto leading-relaxed">
            Faça seu cadastro oficial agora mesmo e tenha acesso a suplementação de pureza comprovada, novidades em primeira mão e suporte dedicado.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={config.officialRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-zinc-950 text-white font-black text-sm uppercase tracking-wider hover:bg-zinc-900 transition-all shadow-2xl hover:scale-105 active:scale-100 flex items-center justify-center gap-2 group"
            >
              <UserCheck className="w-4 h-4 text-[#FF7A00]" />
              <span>FAÇA SEU CADASTRO AGORA</span>
              <ArrowRight className="w-4 h-4 text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
