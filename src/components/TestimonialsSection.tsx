import React from 'react';
import { Quote, Star, Instagram } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#171717] border-b border-zinc-800 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-2">
            <Quote className="w-3.5 h-3.5" />
            Depoimentos da Marca
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            O Que Nossos <span className="text-[#FF7A00]">Atletas e Clientes</span> Dizem
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            A opinião de quem vive a rotina de treinos pesados e confia no propósito e na qualidade da Eskiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="relative p-7 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col justify-between shadow-xl"
            >
              {/* Quote mark icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#FF7A00] gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF7A00]" />
                  ))}
                </div>
                <span className="text-3xl text-[#FF7A00] font-serif leading-none opacity-40">“</span>
              </div>

              {/* Comment text */}
              <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                "{t.comment}"
              </p>

              {/* Author Footer */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF7A00] text-zinc-950 font-black flex items-center justify-center text-sm shadow-md">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase leading-tight">{t.name}</h4>
                    <p className="text-[11px] text-zinc-400 font-medium">{t.role}</p>
                  </div>
                </div>

                <a
                  href={`https://instagram.com/${t.handle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-[#FF7A00] transition-colors p-1.5 rounded-lg hover:bg-zinc-800"
                  title={t.handle}
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
