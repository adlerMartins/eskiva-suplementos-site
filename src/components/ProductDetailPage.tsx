import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, ArrowRight, Share2, Search, ExternalLink, Package } from 'lucide-react';
import { Product, SiteConfig } from '../types';
import { ProductVisual } from './ProductVisual';

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  config: SiteConfig;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenSeoInspector: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  config,
  onBack,
  onSelectProduct,
  onOpenSeoInspector,
}) => {
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#111111] text-zinc-200 min-h-screen py-8 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Breadcrumb & SEO Inspector Trigger */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 pb-4 border-b border-zinc-800">
          <nav className="flex items-center gap-2 text-xs text-zinc-400" aria-label="Breadcrumb">
            <button onClick={onBack} className="hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Início
            </button>
            <span>/</span>
            <span className="text-zinc-500">Produtos</span>
            <span>/</span>
            <span className="text-[#FF7A00] font-bold">{product.name}</span>
          </nav>

          <button
            onClick={onOpenSeoInspector}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-zinc-300 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Rank Math SEO da Página</span>
          </button>
        </div>

        {/* Main Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Visual Stage */}
          <div className="lg:col-span-5 relative rounded-3xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF7A00]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />

            {product.badge && (
              <div className="self-start px-3 py-1 rounded-full text-xs font-black uppercase bg-[#FF7A00]/20 text-[#FF7A00] border border-[#FF7A00]/40 mb-4">
                {product.badge}
              </div>
            )}

            <div className="py-6 my-4 w-full flex items-center justify-center">
              <ProductVisual type={product.imageType} size="lg" />
            </div>

            {/* Quick Specs Under Image */}
            <div className="w-full grid grid-cols-2 gap-3 pt-6 border-t border-zinc-800/80 text-center">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-[11px] font-bold uppercase text-zinc-400">Embalagem</div>
                <div className="text-sm font-black text-white">{product.packageWeight}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-[11px] font-bold uppercase text-zinc-400">Categoria</div>
                <div className="text-sm font-black text-[#FF7A00]">{product.categoryLabel}</div>
              </div>
            </div>
          </div>

          {/* Product Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
                Eskiva Suplementos Oficial
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mt-1 leading-tight">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 font-medium mt-2 leading-relaxed">
                {product.subtitle}
              </p>
            </div>

            {/* Main Long Description */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-sm text-zinc-300 leading-relaxed space-y-3">
              <h2 className="text-xs font-black uppercase tracking-wider text-white">
                Descrição Completa & Atuação
              </h2>
              <p>{product.fullDesc}</p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#FF7A00]">
                Principais Benefícios & Diferenciais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Use */}
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs space-y-1.5">
              <div className="font-bold uppercase text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
                Modo de Uso Sugerido
              </div>
              <p className="text-zinc-300 leading-relaxed">{product.suggestedUse}</p>
            </div>

            {/* Nutritional / Presentation Highlights */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-2">
                Especificações Técnicas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {product.nutritionalHighlights.map((spec, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center">
                    <div className="text-[10px] text-zinc-400 font-bold uppercase">{spec.label}</div>
                    <div className="text-xs font-black text-white mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase / Register CTA Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-950/50 via-zinc-900 to-zinc-950 border border-[#FF7A00]/40 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-black uppercase text-[#FF7A00]">Cadastro Oficial Eskiva</div>
                  <div className="text-base font-bold text-white">Adquira direto pelo portal oficial</div>
                </div>
                <span className="text-xs font-bold text-zinc-400">100% Seguro</span>
              </div>
              <a
                href={config.officialRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-sm uppercase tracking-wider hover:bg-orange-400 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                <span>FAÇA SEU CADASTRO PARA ADQUIRIR</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Product FAQs Section */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="pt-8 border-t border-zinc-800">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#FF7A00]">
                  <HelpCircle className="w-3.5 h-3.5" /> Dúvidas Específicas
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">
                  Perguntas Frequentes sobre {product.name}
                </h2>
              </div>
              <div className="space-y-3 mt-4">
                {product.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                    <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Products */}
        <div className="pt-10 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-black uppercase text-white">Outros Produtos Eskiva</h2>
            <button onClick={onBack} className="text-xs font-bold text-[#FF7A00] hover:underline">
              Ver Todos os Produtos
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectProduct(rel)}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF7A00] transition-colors cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="py-2 flex items-center justify-center">
                    <ProductVisual type={rel.imageType} size="sm" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase group-hover:text-[#FF7A00] transition-colors mt-2">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1">{rel.shortDesc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-bold text-[#FF7A00]">
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
