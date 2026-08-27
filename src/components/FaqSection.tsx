import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { FAQS_DATA } from '../data/siteData';

interface FaqSectionProps {
  onOpenSeoInspector?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenSeoInspector }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#171717] border-b border-zinc-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Perguntas <span className="text-[#FF7A00]">Frequentes (FAQ)</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Respostas claras e transparentes sobre a marca, suplementos, cadastro oficial e pontos de coleta.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Buscar dúvida (ex: creatina, cadastro, wheys, pontos de coleta)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF7A00]"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'todos', label: 'Todas as Perguntas' },
              { id: 'marca', label: 'Sobre a Marca' },
              { id: 'produtos', label: 'Produtos' },
              { id: 'suplementacao', label: 'Suplementação' },
              { id: 'cadastro', label: 'Cadastro Oficial' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedCategory === tab.id
                    ? 'bg-[#FF7A00] text-zinc-950 shadow-sm shadow-orange-500/20'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900 border-[#FF7A00]/50 shadow-lg shadow-orange-500/5'
                    : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold uppercase tracking-wide ${isOpen ? 'text-[#FF7A00]' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#FF7A00] text-zinc-950 rotate-180' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 text-zinc-500 text-sm">
              Nenhuma pergunta encontrada para sua busca. Tente outras palavras-chave.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
