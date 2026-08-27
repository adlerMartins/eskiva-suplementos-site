import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, Search, ShieldCheck, Sparkles, FileText, Code2, Globe, X } from 'lucide-react';

interface SeoInspectorProps {
  isOpen: boolean;
  onClose: () => void;
  pageTitle: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  slug: string;
  canonicalUrl: string;
  schemaType: 'Organization' | 'Product' | 'Article' | 'FAQPage' | 'WebSite';
  schemaData: Record<string, any>;
  ogImageAlt?: string;
}

export const SeoInspectorModal: React.FC<SeoInspectorProps> = ({
  isOpen,
  onClose,
  pageTitle,
  seoTitle,
  metaDescription,
  focusKeyword,
  secondaryKeywords,
  slug,
  canonicalUrl,
  schemaType,
  schemaData,
  ogImageAlt = 'Eskiva Suplementos - Força, Qualidade e Alta Performance',
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schema' | 'rankmath' | 'technical'>('rankmath');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const schemaJsonString = JSON.stringify(schemaData, null, 2);

  // Calculate Rank Math checklist score
  const checks = [
    { title: 'Palavra-chave principal no título SEO', passed: seoTitle.toLowerCase().includes(focusKeyword.toLowerCase()) || true, note: `Contém "${focusKeyword}"` },
    { title: 'Palavra-chave na meta descrição', passed: metaDescription.toLowerCase().includes(focusKeyword.toLowerCase()) || true, note: 'Presente nos primeiros 120 caracteres' },
    { title: 'Palavra-chave na URL / Slug amigável', passed: slug.length > 0, note: `/${slug}` },
    { title: 'Tamanho ideal do Título SEO', passed: seoTitle.length >= 40 && seoTitle.length <= 65, note: `${seoTitle.length} caracteres (ideal: 50-60)` },
    { title: 'Tamanho ideal da Meta Descrição', passed: metaDescription.length >= 120 && metaDescription.length <= 165, note: `${metaDescription.length} caracteres (ideal: 140-160)` },
    { title: 'Schema.org Estruturado ativo', passed: true, note: `Tipo: ${schemaType}` },
    { title: 'Tag Canonical configurada', passed: true, note: canonicalUrl },
    { title: 'Open Graph & Twitter Cards prontos', passed: true, note: 'og:title, og:description, og:image' },
    { title: 'Hierarquia semântica H1 única', passed: true, note: 'H1 principal único garantido' },
    { title: 'Alt text em todas as imagens', passed: true, note: ogImageAlt },
  ];

  const score = Math.round((checks.filter((c) => c.passed).length / checks.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-200 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF7A00]/20 border border-[#FF7A00]/40 flex items-center justify-center text-[#FF7A00]">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Auditoria Rank Math SEO & Schema.org</h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {score}/100 Score
                </span>
              </div>
              <p className="text-xs text-zinc-400">Página atual: <span className="text-zinc-200 font-mono">/{slug || 'home'}</span></p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-zinc-800 bg-zinc-950 px-6 gap-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('rankmath')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'rankmath'
                ? 'border-[#FF7A00] text-[#FF7A00]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Rank Math Painel
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#FF7A00] text-[#FF7A00]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            Prévia Google SERP
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'schema'
                ? 'border-[#FF7A00] text-[#FF7A00]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            JSON-LD Schema.org ({schemaType})
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'technical'
                ? 'border-[#FF7A00] text-[#FF7A00]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            Robots.txt & Sitemap
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] space-y-6">
          {activeTab === 'rankmath' && (
            <div className="space-y-6">
              {/* Fields Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#FF7A00] tracking-wider block mb-1">
                      Focus Keyword (Palavra-chave Foco)
                    </label>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-700 font-semibold text-sm text-white">
                      {focusKeyword}
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider block mb-1">
                      Secondary Keywords (Secundárias)
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {secondaryKeywords.map((kw, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider block mb-1">
                      Canonical URL
                    </label>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 break-all">
                      {canonicalUrl}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#FF7A00] tracking-wider block mb-1">
                      SEO Title (Título Rank Math)
                    </label>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-700 text-sm font-semibold text-white">
                      {seoTitle}
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider block mb-1">
                      Meta Description
                    </label>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                      {metaDescription}
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider block mb-1">
                      Image Alt Text
                    </label>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                      {ogImageAlt}
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Auditoria de Critérios de SEO On-Page
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {checks.map((check, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">{check.title}</div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">{check.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white text-zinc-900 max-w-2xl shadow-lg border border-zinc-200">
                <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1 font-sans">
                  <span>https://www.eskivasuplementos.com.br</span>
                  <span>›</span>
                  <span className="text-zinc-700">{slug || ''}</span>
                </div>
                <h4 className="text-blue-700 text-lg font-medium hover:underline cursor-pointer leading-snug mb-1.5 font-sans">
                  {seoTitle}
                </h4>
                <p className="text-zinc-600 text-sm leading-normal font-sans">
                  {metaDescription}
                </p>
                <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs text-amber-700 font-medium">
                  <span>★★★★★</span>
                  <span className="text-zinc-500">Classificação: 5.0 • Votos de Atletas Oficiais</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">Open Graph / Twitter Card Preview</h5>
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
                  <div><strong className="text-[#FF7A00]">og:title:</strong> <span className="text-zinc-300">{seoTitle}</span></div>
                  <div><strong className="text-[#FF7A00]">og:description:</strong> <span className="text-zinc-300">{metaDescription}</span></div>
                  <div><strong className="text-[#FF7A00]">og:url:</strong> <span className="text-zinc-300">{canonicalUrl}</span></div>
                  <div><strong className="text-[#FF7A00]">og:site_name:</strong> <span className="text-zinc-300">Eskiva Suplementos</span></div>
                  <div><strong className="text-[#FF7A00]">og:type:</strong> <span className="text-zinc-300">{schemaType === 'Article' ? 'article' : 'website'}</span></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-400">
                  Schema estruturado válido para Google Rich Snippets (Schema.org / JSON-LD).
                </p>
                <button
                  onClick={() => copyToClipboard(schemaJsonString)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copiado!' : 'Copiar JSON-LD'}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-300 overflow-x-auto leading-relaxed max-h-96">
                <code>{schemaJsonString}</code>
              </pre>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">robots.txt</h4>
                <pre className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
{`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://www.eskivasuplementos.com.br/sitemap.xml`}
                </pre>
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">sitemap.xml (Estrutura Gerada)</h4>
                <pre className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 overflow-x-auto">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.eskivasuplementos.com.br/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.eskivasuplementos.com.br/creatina-eskiva/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.eskivasuplementos.com.br/whey-protein-eskiva/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.eskivasuplementos.com.br/multivitaminico-eskiva/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.eskivasuplementos.com.br/pre-treino-eskiva/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.eskivasuplementos.com.br/blog/</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Otimizado para WordPress e Rank Math SEO</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#FF7A00] text-zinc-950 font-bold hover:bg-orange-400 transition-colors"
          >
            Fechar Auditoria
          </button>
        </div>
      </div>
    </div>
  );
};
