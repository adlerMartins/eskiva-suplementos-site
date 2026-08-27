import React from 'react';
import { ShieldCheck, Flame, Zap, Truck, Trophy, HeartPulse } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Pureza & Rigor Técnico',
      desc: 'Processos de fabricação que asseguram matérias-primas de alta pureza sem adição de substâncias proibidas.',
    },
    {
      icon: Trophy,
      title: 'Testado por Atletas',
      desc: 'Formulado com o feedback e a vivência de campeões mundiais de combate e esportes de alto rendimento.',
    },
    {
      icon: Zap,
      title: 'Absorção Eficiente',
      desc: 'Matérias-primas micronizadas e formulações balanceadas para rápida biodisponibilidade no organismo.',
    },
    {
      icon: Truck,
      title: 'Fase 4: Pontos de Coleta',
      desc: 'Rede de retirada ágil e distribuição para acelerar a entrega dos produtos em todo o território nacional.',
    },
    {
      icon: HeartPulse,
      title: 'Saúde & Performance',
      desc: 'Linha completa para apoiar tanto a recuperação muscular quanto a imunidade e longevidade física.',
    },
    {
      icon: Flame,
      title: 'Transparência Total',
      desc: 'Informações nutricionais claras e foco genuíno no propósito de transformação e esporte.',
    },
  ];

  return (
    <section className="py-20 bg-[#111111] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] mb-2">
            Diferenciais de Excelência
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Por que Escolher a <span className="text-[#FF7A00]">Eskiva Suplementos</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Unimos ciência esportiva, dedicação e matérias-primas nobres para você treinar com a certeza de que está consumindo o melhor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FF7A00]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] group-hover:scale-110 transition-transform mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide mb-2 group-hover:text-[#FF7A00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
