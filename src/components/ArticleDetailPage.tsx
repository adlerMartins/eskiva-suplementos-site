import React from 'react';
import { ArrowLeft, Clock, Calendar, User, Tag, Sparkles, ArrowRight, Share2, BookOpen } from 'lucide-react';
import { Article, Product, SiteConfig } from '../types';

interface ArticleDetailPageProps {
  article: Article;
  relatedArticles: Article[];
  relatedProduct?: Product;
  config: SiteConfig;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  onSelectProduct: (product: Product) => void;
  onOpenSeoInspector: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  relatedArticles,
  relatedProduct,
  config,
  onBack,
  onSelectArticle,
  onSelectProduct,
  onOpenSeoInspector,
}) => {
  return (
    <div className="bg-[#111111] text-zinc-200 min-h-screen py-8 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 pb-4 border-b border-zinc-800">
          <nav className="flex items-center gap-2 text-xs text-zinc-400" aria-label="Breadcrumb">
            <button onClick={onBack} className="hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Blog
            </button>
            <span>/</span>
            <span className="text-zinc-500">{article.category}</span>
            <span>/</span>
            <span className="text-[#FF7A00] font-bold truncate max-w-xs">{article.title}</span>
          </nav>

          <button
            onClick={onOpenSeoInspector}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-zinc-300 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Rank Math SEO do Artigo</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/30 text-xs font-bold uppercase tracking-wider">
            {article.category}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-2 border-t border-zinc-800">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#FF7A00]" />
              <span className="font-bold text-zinc-200">{article.author.name}</span> ({article.author.role})
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Main Article Content */}
        <article className="prose prose-invert max-w-none prose-orange bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 rounded-2xl">
          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed whitespace-pre-line font-sans">
            {article.content}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-2 items-center">
            <Tag className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs font-bold uppercase text-zinc-400">Tópicos:</span>
            {article.tags.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-zinc-800 text-xs font-medium text-zinc-300">
                #{t}
              </span>
            ))}
          </div>
        </article>

        {/* Related Product Callout if available */}
        {relatedProduct && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-950 border border-[#FF7A00]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-black uppercase text-[#FF7A00]">Suplementação Recomendada</div>
              <h3 className="text-lg font-black text-white uppercase">{relatedProduct.name}</h3>
              <p className="text-xs text-zinc-400 max-w-md">{relatedProduct.shortDesc}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => onSelectProduct(relatedProduct)}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-zinc-700"
              >
                Ver Produto
              </button>
              <a
                href={config.officialRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-xs uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20"
              >
                Cadastrar
              </a>
            </div>
          </div>
        )}

        {/* Related Articles Grid */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black uppercase text-white">Mais Artigos de Nutrição & Treino</h2>
            <button onClick={onBack} className="text-xs font-bold text-[#FF7A00] hover:underline">
              Ver Todos
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF7A00] transition-colors cursor-pointer group"
              >
                <span className="text-[10px] font-bold text-[#FF7A00] uppercase">{rel.category}</span>
                <h4 className="text-sm font-bold text-white uppercase group-hover:text-[#FF7A00] transition-colors mt-1 line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1">{rel.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
