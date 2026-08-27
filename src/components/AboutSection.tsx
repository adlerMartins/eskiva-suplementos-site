import React from 'react';
import { Target, Users, HeartHandshake, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { SiteConfig } from '../types';

interface AboutSectionProps {
  config: SiteConfig;
  onNavigateToProducts: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  config,
  onNavigateToProducts,
}) => {
  return (
    <section id="sobre" className="py-20 bg-[#171717] relative overflow-hidden border-b border-zinc-800">
      {/* Background glowing geometry */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Nossa História & Propósito
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-white uppercase tracking-tight leading-tight">
              Assim nasceu a <br />
              <span className="text-[#FF7A00]">Eskiva Suplementos</span>
            </h2>

            <p className="text-lg text-zinc-200 font-medium leading-relaxed">
              Uma marca criada para unir <span className="text-white font-bold">suplementação de alta qualidade</span>,{' '}
              <span className="text-white font-bold">oportunidade</span> e{' '}
              <span className="text-[#FF7A00] font-bold">transformação</span>, oferecendo fórmulas com rigor científico e novas possibilidades para quem deseja evoluir junto com esse grande projeto.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Inspirada no espírito de determinação e superação do esporte de alto rendimento, a Eskiva Suplementos desenvolve produtos pensados para atender desde quem dá os primeiros passos na academia até atletas que competem em nível profissional.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00] mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase mb-1">Qualidade Rigorosa</h3>
                <p className="text-xs text-zinc-400">
                  Fórmulas com matérias-primas puras e controle de excelência em cada lote.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00] mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase mb-1">DNA de Campeão</h3>
                <p className="text-xs text-zinc-400">
                  Criada sob a experiência real de atletas multicampeões mundiais.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00] mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase mb-1">Comunidade & Brasil</h3>
                <p className="text-xs text-zinc-400">
                  Pontos de Coleta e suporte dedicado para aproximar a marca de você.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={config.officialRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-xs uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20 flex items-center gap-2"
              >
                <span>QUERO FAZER MEU CADASTRO</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onNavigateToProducts}
                className="px-5 py-3.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-zinc-800 hover:bg-zinc-800 transition-colors"
              >
                Conhecer Nossos Produtos
              </button>
            </div>
          </div>

          {/* Right Column: Mission Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A00]/10 rounded-bl-full pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7A00] via-amber-400 to-transparent" />

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-xs font-bold text-zinc-300">
                  <span>UNIR PARA CRESCER</span>
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  Nosso Compromisso com a Sua Evolução
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Acreditamos que todo indivíduo possui o potencial de superar seus próprios limites, desde que tenha ao seu lado a mentalidade certa, disciplina e o suporte nutricional adequado.
                </p>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                    Transparência em Cada Ingrediente
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                    Nutrição para Força, Resistência e Saúde
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                    Atendimento Oficial e Suporte Ágil
                  </div>
                </div>

                <div className="text-center pt-2">
                  <div className="text-xs text-zinc-400">
                    Site Oficial: <span className="text-white font-mono">{config.websiteDomain}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
