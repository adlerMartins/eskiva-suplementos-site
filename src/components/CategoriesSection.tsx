import React from 'react';
import { Dumbbell, Zap, ShieldPlus, Swords, ArrowRight } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (category: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'suplementos',
      name: 'Força & Hipertrofia',
      description: 'Creatina 100% Pura e Whey Protein Concentrado para ganho de massa magra e força explosiva.',
      icon: Dumbbell,
      badge: 'Mais Procurados',
      count: '2 Produtos',
    },
    {
      id: 'suplementos',
      name: 'Energia & Performance',
      description: 'Pré-Treino de alta intensidade para elevar o estado de alerta, motivação e vasodilatação.',
      icon: Zap,
      badge: 'Alta Intensidade',
      count: '1 Produto',
    },
    {
      id: 'suplementos',
      name: 'Saúde & Imunidade',
      description: 'Multivitamínico completo com micronutrientes essenciais para vitalidade e recuperação imunológica.',
      icon: ShieldPlus,
      badge: 'Uso Diário',
      count: '1 Produto',
    },
    {
      id: 'luta',
      name: 'Linha Atleta & Luta',
      description: 'Luvas de Boxe/Muay Thai e coqueteleiras ergonômicas para quem vive a rotina esportiva raiz.',
      icon: Swords,
      badge: 'Lançamento',
      count: '2 Acessórios',
    },
  ];

  return (
    <section className="py-16 bg-[#111111] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
              Categorias Especializadas
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Suplementação Inteligente para Cada Objetivo
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Linha completa formulada para atender às demandas de força, resistência, saúde celular e rotina de treinos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 hover:border-[#FF7A00]/60 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF7A00]">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#FF7A00] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                  <span>{cat.count}</span>
                  <span className="flex items-center gap-1 text-[#FF7A00]">
                    Explorar <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
