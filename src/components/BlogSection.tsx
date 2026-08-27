import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, User, Tag } from 'lucide-react';
import { Article } from '../types';

interface BlogSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  articles,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = ['todos', 'Creatina', 'Whey Protein', 'Pré-Treino', 'Vitaminas e Minerais', 'Suplementação'];

  const filteredArticles = selectedCategory === 'todos'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-[#111111] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Conteúdo Educativo & SEO
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Blog Eskiva: <span className="text-[#FF7A00]">Ciência & Nutrição</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Artigos educativos com embasamento científico para você entender a função de cada nutriente e maximizar seus resultados.
            </p>
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#FF7A00] text-zinc-950 shadow-sm shadow-orange-500/20'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                {cat === 'todos' ? 'Todos os Artigos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-[#FF7A00]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/30">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#FF7A00] transition-colors line-clamp-2 leading-snug mb-3 uppercase">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="text-[11px] text-zinc-500 flex items-center gap-1.5">
                  <User className="w-3 h-3 text-[#FF7A00]" />
                  <span>{article.author.name}</span>
                </div>
                <span className="text-xs font-bold text-[#FF7A00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Ler Artigo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
