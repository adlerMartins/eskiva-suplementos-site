import React from 'react';
import { Youtube, Instagram, Share2, ExternalLink } from 'lucide-react';
import { SiteConfig } from '../types';

interface SocialSectionProps {
  config: SiteConfig;
}

export const SocialSection: React.FC<SocialSectionProps> = ({ config }) => {
  return (
    <section className="py-16 bg-[#111111] border-b border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-2">
            <Share2 className="w-3.5 h-3.5" />
            Canais Oficiais
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Siga a <span className="text-[#FF7A00]">Eskiva</span> nas Redes Sociais
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            Acompanhe bastidores, dicas de treinos, lançamentos e a rotina do time em nossas redes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* YouTube Card */}
          <a
            href={config.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/60 transition-all flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
              <Youtube className="w-7 h-7" />
            </div>
            <h3 className="text-base font-black text-white uppercase group-hover:text-red-400 transition-colors">
              YouTube Oficial
            </h3>
            <p className="text-xs text-zinc-400 mt-1 mb-4">
              Vídeos de treino, entrevistas e conteúdos exclusivos.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-red-400 group-hover:underline">
              Inscrever-se no Canal <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Instagram Card */}
          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-pink-500/60 transition-all flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-pink-600/15 border border-pink-500/30 flex items-center justify-center text-pink-500 mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-7 h-7" />
            </div>
            <h3 className="text-base font-black text-white uppercase group-hover:text-pink-400 transition-colors">
              Instagram Oficial
            </h3>
            <p className="text-xs text-zinc-400 mt-1 mb-4">
              @eskiva_suplementos.oficial • Destaques diários e novidades.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-pink-400 group-hover:underline">
              Seguir no Instagram <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* TikTok Card */}
          <a
            href={config.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#FF7A00]/60 transition-all flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] mb-4 group-hover:scale-110 transition-transform">
              <span className="text-xl font-black">Tk</span>
            </div>
            <h3 className="text-base font-black text-white uppercase group-hover:text-[#FF7A00] transition-colors">
              TikTok Oficial
            </h3>
            <p className="text-xs text-zinc-400 mt-1 mb-4">
              @eskivasuplementos2026 • Cortes, motivação e alta energia.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FF7A00] group-hover:underline">
              Acompanhar TikTok <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
