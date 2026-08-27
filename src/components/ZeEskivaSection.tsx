import React from 'react';
import { Trophy, Award, Shield, Flag, ArrowRight } from 'lucide-react';
import { ZeEskivaVisual } from './ZeEskivaVisual';
import { SiteConfig } from '../types';

interface ZeEskivaSectionProps {
  config: SiteConfig;
}

export const ZeEskivaSection: React.FC<ZeEskivaSectionProps> = ({ config }) => {
  return (
    <section id="ze-eskiva" className="py-20 bg-[#111111] relative overflow-hidden border-b border-zinc-800">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ZeEskivaVisual />
          </div>

          {/* Story & Achievements Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" />
              Quem é Zé Eskiva
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-white uppercase tracking-tight leading-tight">
              Trajetória de Luta, <br />
              <span className="text-[#FF7A00]">Superação & Conquistas</span>
            </h2>

            <p className="text-lg text-zinc-200 font-medium leading-relaxed">
              Eskiva, atleta multicampeão, é <strong className="text-white">tetracampeão mundial de kickboxing</strong>,{' '}
              <strong className="text-white">bicampeão mundial de MMA</strong> e{' '}
              <strong className="text-[#FF7A00]">bicampeão mundial de Muay Thai</strong>.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Representando o Brasil em meio a dificuldades e em diversos países ao redor do planeta, transformou sua trajetória de disciplina, combates épicos e desafios em um grande propósito de vida: inspirar pessoas e entregar a melhor suplementação para que todos possam lutar e vencer suas próprias batalhas diárias.
            </p>

            {/* Championship Milestones */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF7A00]/20 border border-[#FF7A00]/40 flex items-center justify-center text-[#FF7A00] flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase">Tetracampeonato Mundial de Kickboxing</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Quatro títulos mundiais conquistados com técnica de elite, resistência e precisão nos ringues internacionais.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF7A00]/20 border border-[#FF7A00]/40 flex items-center justify-center text-[#FF7A00] flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase">Bicampeonato Mundial de MMA & Muay Thai</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Consagração dupla nas artes marciais mistas e na arte das oito armas, demonstrando versatilidade e força inquebrantável.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Registration CTA */}
            <div className="pt-2">
              <a
                href={config.officialRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-xs uppercase tracking-wider hover:bg-orange-400 transition-all shadow-xl shadow-orange-500/20"
              >
                <span>FAÇA PARTE DO TIME ESKIVA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
