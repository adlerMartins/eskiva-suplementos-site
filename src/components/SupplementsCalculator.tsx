import React, { useState } from 'react';
import { Calculator, Droplets, Dumbbell, Sparkles, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { SiteConfig } from '../types';

interface SupplementsCalculatorProps {
  config: SiteConfig;
  onNavigateToProduct: (slug: string) => void;
}

export const SupplementsCalculator: React.FC<SupplementsCalculatorProps> = ({
  config,
  onNavigateToProduct,
}) => {
  const [weight, setWeight] = useState<number>(75);
  const [goal, setGoal] = useState<'hipertrofia' | 'forca' | 'definicao' | 'saude'>('hipertrofia');
  const [trainingDays, setTrainingDays] = useState<number>(5);

  // Calculations
  const creatineDose = Math.round(weight * 0.07 * 10) / 10; // ~5g for 75kg
  const finalCreatine = Math.max(3, Math.min(8, Math.round(creatineDose)));

  let proteinFactor = 1.8;
  if (goal === 'hipertrofia') proteinFactor = 2.0;
  if (goal === 'forca') proteinFactor = 2.2;
  if (goal === 'definicao') proteinFactor = 2.2;
  if (goal === 'saude') proteinFactor = 1.5;

  const totalProtein = Math.round(weight * proteinFactor);
  const wheyScoops = Math.round((totalProtein * 0.3) / 24); // ~30% from whey shake

  const minWaterLiters = ((weight * 35) / 1000).toFixed(1);
  const maxWaterLiters = ((weight * 45) / 1000).toFixed(1);

  return (
    <section id="calculadora" className="py-16 bg-gradient-to-b from-[#111111] via-zinc-950 to-[#171717] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Ferramenta Interativa Eskiva
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
            Calculadora de <span className="text-[#FF7A00]">Creatina, Proteína</span> & Hidratação
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Descubra as quantidades diárias ideais de suplementação e água calculadas com base no seu peso corporal e intensidade de treino.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#FF7A00]" />
              Seus Dados de Treino
            </h3>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase text-zinc-300">Seu Peso Corporal</label>
                <span className="text-lg font-black text-[#FF7A00]">{weight} kg</span>
              </div>
              <input
                type="range"
                min={45}
                max={140}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#FF7A00]"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                <span>45 kg</span>
                <span>90 kg</span>
                <span>140 kg</span>
              </div>
            </div>

            {/* Goal selector */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-300 block mb-2">Objetivo Principal</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'hipertrofia', label: 'Ganho de Massa' },
                  { id: 'forca', label: 'Força & Potência' },
                  { id: 'definicao', label: 'Definição / Secar' },
                  { id: 'saude', label: 'Saúde & Vitalidade' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                      goal === item.id
                        ? 'bg-[#FF7A00] text-zinc-950 border-[#FF7A00] shadow-md shadow-orange-500/20'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Training Days */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase text-zinc-300">Frequência de Treinos Semanal</label>
                <span className="text-sm font-bold text-white">{trainingDays}x por semana</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setTrainingDays(num)}
                    className={`flex-1 py-1.5 rounded text-xs font-bold transition-all border ${
                      trainingDays === num
                        ? 'bg-[#FF7A00] text-zinc-950 border-[#FF7A00]'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Creatine Card */}
              <div className="p-5 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-[#FF7A00] mb-3">
                  <Flame className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                  {finalCreatine}g <span className="text-xs font-normal text-zinc-400">/dia</span>
                </div>
                <div className="text-xs font-bold uppercase text-[#FF7A00] mb-1">Creatina Diária</div>
                <p className="text-[11px] text-zinc-400 leading-tight">
                  Tome todos os dias para saturação intramuscular e aumento de força.
                </p>
                <button
                  onClick={() => onNavigateToProduct('creatina-eskiva')}
                  className="mt-3 text-xs font-bold text-[#FF7A00] hover:underline flex items-center gap-1"
                >
                  Ver Creatina Eskiva <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Protein Target */}
              <div className="p-5 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                  {totalProtein}g <span className="text-xs font-normal text-zinc-400">/dia</span>
                </div>
                <div className="text-xs font-bold uppercase text-amber-400 mb-1">Meta de Proteína</div>
                <p className="text-[11px] text-zinc-400 leading-tight">
                  Sugerido ~{wheyScoops} shake de 100% Whey Protein Eskiva ao dia.
                </p>
                <button
                  onClick={() => onNavigateToProduct('whey-protein-eskiva')}
                  className="mt-3 text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  Ver Whey Eskiva <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Water Card */}
              <div className="p-5 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Droplets className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                  {minWaterLiters}L - {maxWaterLiters}L
                </div>
                <div className="text-xs font-bold uppercase text-cyan-400 mb-1">Hidratação Mínima</div>
                <p className="text-[11px] text-zinc-400 leading-tight">
                  Vital para a eficiência celular da creatina e recuperação das articulações.
                </p>
                <button
                  onClick={() => onNavigateToProduct('coqueteleira-eskiva')}
                  className="mt-3 text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Ver Coqueteleira <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Recommendations Banner */}
            <div className="p-5 rounded-xl bg-zinc-900/80 border border-[#FF7A00]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" />
                  Pronto para transformar sua performance com a Eskiva?
                </div>
                <p className="text-xs text-zinc-400">
                  Cadastre-se oficialmente para ter acesso aos lançamentos e produtos de alto rendimento.
                </p>
              </div>
              <a
                href={config.officialRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-xs uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20 text-center flex-shrink-0"
              >
                FAÇA SEU CADASTRO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
