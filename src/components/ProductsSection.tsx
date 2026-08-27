import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { Product, SiteConfig } from '../types';
import { ProductVisual } from './ProductVisual';

interface ProductsSectionProps {
  products: Product[];
  config: SiteConfig;
  onSelectProduct: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  config,
  onSelectProduct,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'suplementos' | 'acessorios' | 'luta'>('todos');

  const filteredProducts = selectedFilter === 'todos'
    ? products
    : products.filter((p) => p.category === selectedFilter);

  return (
    <section id="produtos" className="py-20 bg-[#171717] relative border-b border-zinc-800">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Catálogo Oficial Eskiva
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Nossos <span className="text-[#FF7A00]">Produtos</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Qualidade premium assegurando a máxima eficiência dos nossos suplementos e equipamentos esportivos.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800">
            {[
              { id: 'todos', label: 'Todos os Produtos' },
              { id: 'suplementos', label: 'Suplementos' },
              { id: 'acessorios', label: 'Acessórios' },
              { id: 'luta', label: 'Linha Atleta' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-[#FF7A00] text-zinc-950 shadow-md shadow-orange-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 hover:border-[#FF7A00]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div>
                {/* Badge and Category Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase text-[#FF7A00] tracking-wider">
                    {product.categoryLabel}
                  </span>
                  {product.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/30">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Visual Area */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative py-4 my-2 flex items-center justify-center cursor-pointer rounded-xl bg-zinc-950/60 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors"
                >
                  <ProductVisual type={product.imageType} size="md" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/90 text-white p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border border-zinc-700">
                    <Eye className="w-3.5 h-3.5 text-[#FF7A00]" /> Ver Detalhes
                  </div>
                </div>

                {/* Title and Subtitle */}
                <div className="mt-4">
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-lg font-black text-white uppercase tracking-wide group-hover:text-[#FF7A00] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium mt-1 leading-relaxed line-clamp-2">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Benefits Bullet Points */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-zinc-800/80">
                  {product.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Flavors / Packaging */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-medium">Apresentação:</span>
                  <span className="font-bold text-white bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {product.packageWeight}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-zinc-800 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider border border-zinc-700/80 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>Saiba Mais</span>
                </button>
                <a
                  href={config.officialRegisterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#FF7A00] hover:bg-orange-400 text-zinc-950 text-xs font-black uppercase tracking-wider transition-colors shadow-md shadow-orange-500/20 flex items-center justify-center gap-1"
                >
                  <span>Cadastrar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Notice / Virtual Office Info from PDF */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold uppercase text-white tracking-wide">
              Acesso ao Catálogo Completo & Pedidos Oficiais
            </h4>
            <p className="text-xs text-zinc-400">
              No seu cadastro oficial, você acompanha pedidos, novidades e tem acesso a conteúdos exclusivos da Eskiva.
            </p>
          </div>
          <a
            href={config.officialRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-xs uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20 flex-shrink-0 flex items-center gap-2"
          >
            <span>ACESSAR CADASTRO OFICIAL</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
