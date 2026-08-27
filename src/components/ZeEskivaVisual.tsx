import React from 'react';
import { Award, Shield, Trophy, Zap } from 'lucide-react';

interface ZeEskivaVisualProps {
  className?: string;
}

export const ZeEskivaVisual: React.FC<ZeEskivaVisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative dynamic geometric backgrounds from PDF */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF7A00]/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-orange-600/15 rounded-full blur-3xl" />
      
      {/* Main Champion Card Container */}
      <div className="relative rounded-2xl bg-gradient-to-b from-zinc-800/90 to-zinc-950 border border-zinc-700/60 p-4 sm:p-6 overflow-hidden shadow-2xl">
        {/* Angular Accent Line */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A00]/10 rounded-bl-full pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />

        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-[#FF7A00]" />
            Atleta Multicampeão
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[11px] font-semibold text-zinc-300">
            <span>🇧🇷</span> Brasil no Topo
          </div>
        </div>

        {/* Visual Graphic Representation of Champion */}
        <div className="relative my-4 rounded-xl bg-zinc-900/90 border border-zinc-800 p-6 flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Subtle Ring Rays */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FF7A00_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Avatar / Champion Badge Icon */}
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-zinc-950 via-zinc-800 to-amber-900/50 p-1 border-2 border-[#FF7A00] shadow-[0_0_25px_rgba(255,122,0,0.4)] mb-3 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-zinc-900 to-black flex flex-col items-center justify-center text-white">
              <span className="text-3xl font-black tracking-tight text-[#FF7A00]">ZÉ</span>
              <span className="text-[10px] font-black tracking-widest text-zinc-300">ESKIVA</span>
            </div>
            {/* Crown / Trophy icon overlay */}
            <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#FF7A00] text-zinc-950 shadow-md">
              <Trophy className="w-4 h-4 fill-zinc-950" />
            </div>
          </div>

          <h3 className="text-xl font-black text-white tracking-wide uppercase">
            José "Zé" Eskiva
          </h3>
          <p className="text-sm font-semibold text-[#FF7A00] tracking-wider uppercase mb-2">
            CEO & Fundador Eskiva Suplementos
          </p>

          {/* Titles Badges Grid */}
          <div className="grid grid-cols-3 gap-2 w-full mt-3 pt-3 border-t border-zinc-800">
            <div className="bg-zinc-950/80 rounded-lg p-2 border border-zinc-800">
              <div className="text-lg font-black text-[#FF7A00]">4x</div>
              <div className="text-[10px] font-bold uppercase text-zinc-400 leading-tight">Mundial Kickboxing</div>
            </div>
            <div className="bg-zinc-950/80 rounded-lg p-2 border border-zinc-800">
              <div className="text-lg font-black text-[#FF7A00]">2x</div>
              <div className="text-[10px] font-bold uppercase text-zinc-400 leading-tight">Mundial MMA</div>
            </div>
            <div className="bg-zinc-950/80 rounded-lg p-2 border border-zinc-800">
              <div className="text-lg font-black text-[#FF7A00]">2x</div>
              <div className="text-[10px] font-bold uppercase text-zinc-400 leading-tight">Mundial Muay Thai</div>
            </div>
          </div>
        </div>

        {/* Famous Quote from PDF Page 20 */}
        <div className="relative rounded-xl bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-950 p-4 border-l-4 border-[#FF7A00]">
          <div className="text-2xl text-[#FF7A00] font-serif leading-none opacity-80 select-none">“</div>
          <p className="text-sm font-semibold text-zinc-200 italic -mt-2 mb-2 leading-relaxed">
            A luta continua. Mas agora não é só por mim. É por todos que acreditam!
          </p>
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="font-bold text-[#FF7A00]">Zé Eskiva</span>
            <span>DNA de Campeão</span>
          </div>
        </div>
      </div>
    </div>
  );
};
