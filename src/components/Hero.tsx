import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles, MapPin, Trophy, CheckCircle2, ChevronRight } from 'lucide-react';
import { ProductVisual } from './ProductVisual';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
  onNavigateToAbout: () => void;
  onNavigateToProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  onNavigateToAbout,
  onNavigateToProducts,
}) => {
  return (
    <section className="relative bg-[#111111] overflow-hidden pt-6 pb-16 lg:py-20 border-b border-zinc-800">
      {/* Dynamic diagonal and geometric accents from PDF */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-bl from-orange-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative diagonal line */}
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF7A00]/20 to-transparent transform -skew-x-12 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Phase 4 Expansion Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#FF7A00]/40 text-xs font-bold text-zinc-200 shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-[#FF7A00] animate-ping" />
              <span className="text-[#FF7A00] uppercase tracking-wider font-extrabold">Fase 4</span>
              <span className="text-zinc-500">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" /> Pontos de Coleta em todo Brasil
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black text-white uppercase tracking-tight leading-[1.1]">
              Eskiva Suplementos: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Força, Qualidade e
              </span>{' '}
              <span className="text-[#FF7A00] drop-shadow-[0_0_20px_rgba(255,122,0,0.3)]">
                Performance
              </span>{' '}
              para sua Rotina
            </h1>

            {/* Subtitle with core keywords */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Desenvolvida com padrão de pureza rigoroso para atletas e praticantes de treinos intensos.
              Potencialize sua <strong className="text-white">suplementação</strong>, acelere sua{' '}
              <strong className="text-white">recuperação muscular</strong> e conquiste mais{' '}
              <strong className="text-[#FF7A00]">disposição, saúde e energia</strong> em cada treino.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary CTA: Official Registration */}
              <a
                href={config.officialRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-sm uppercase tracking-wider hover:bg-orange-400 transition-all shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 group"
              >
                <span>FAÇA SEU CADASTRO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: About Eskiva */}
              <button
                type="button"
                onClick={onNavigateToAbout}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/90 text-white font-bold text-sm uppercase tracking-wider hover:bg-zinc-800 border border-zinc-700/80 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>CONHEÇA A ESKIVA</span>
                <ChevronRight className="w-4 h-4 text-[#FF7A00]" />
              </button>
            </div>

            {/* Micro Highlights Grid */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 text-left">
              <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-[#FF7A00] font-black text-lg sm:text-xl">100%</div>
                <div className="text-[11px] font-bold text-zinc-300 uppercase leading-tight">Pura & Micronizada</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-[#FF7A00] font-black text-lg sm:text-xl">4x / 2x</div>
                <div className="text-[11px] font-bold text-zinc-300 uppercase leading-tight">Mundial Zé Eskiva</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-[#FF7A00] font-black text-lg sm:text-xl">Brasil</div>
                <div className="text-[11px] font-bold text-zinc-300 uppercase leading-tight">Rede de Coleta</div>
              </div>
            </div>
          </div>

          {/* Product & Athlete Visual Showcase Column */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Main Stage Card */}
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-zinc-800/80 via-zinc-900/90 to-zinc-950 border border-zinc-700/60 p-6 shadow-2xl overflow-hidden">
              {/* Angular Brand Slice */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FF7A00]/20 rounded-full blur-xl" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />

              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] font-bold uppercase tracking-wider text-[#FF7A00]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Linha Oficial de Suplementos
                </div>
                <span className="text-xs font-black text-zinc-400">QUALIDADE PREMIUM</span>
              </div>

              {/* Product Visual Mockups in Trio */}
              <div className="relative h-64 flex items-center justify-center my-2">
                {/* Creatina Front */}
                <div className="absolute left-2 bottom-0 z-20 transform hover:scale-105 transition-transform">
                  <ProductVisual type="creatina" size="md" />
                </div>
                {/* Whey Behind Center */}
                <div className="absolute right-4 bottom-2 z-10 opacity-95 transform hover:scale-105 transition-transform">
                  <ProductVisual type="whey-chocolate" size="md" />
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase">Creatina & Whey Eskiva</div>
                  <div className="text-[11px] text-zinc-400">Nutrição esportiva para o topo do pódio</div>
                </div>
                <button
                  type="button"
                  onClick={onNavigateToProducts}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[#FF7A00] text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-700"
                >
                  Ver Catálogo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
