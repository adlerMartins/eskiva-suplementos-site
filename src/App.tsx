import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ZeEskivaSection } from './components/ZeEskivaSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductsSection } from './components/ProductsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SupplementsCalculator } from './components/SupplementsCalculator';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ArticleDetailPage } from './components/ArticleDetailPage';
import { PrivacyPage, TermsPage, CookiesPage } from './components/InstitutionalPages';
import { CookieBanner } from './components/CookieBanner';
import { SeoInspectorModal } from './components/SeoInspectorModal';
import { CustomizerModal } from './components/CustomizerModal';

import {
  DEFAULT_SITE_CONFIG,
  PRODUCTS_DATA,
  ARTICLES_DATA,
  FAQS_DATA,
} from './data/siteData';
import { Product, Article, SiteConfig } from './types';
import { ArrowUp, Sparkles, Settings } from 'lucide-react';

export default function App() {
  // State for Site Config (editable via CMS modal)
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('eskiva_site_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_SITE_CONFIG,
          ...parsed,
          phone: (!parsed.phone || parsed.phone === '(66) 3199-6011') ? DEFAULT_SITE_CONFIG.phone : parsed.phone,
          email: (!parsed.email || parsed.email === 'contato@eskiva.com.br') ? DEFAULT_SITE_CONFIG.email : parsed.email,
          youtubeUrl: (!parsed.youtubeUrl || parsed.youtubeUrl.includes('?')) ? DEFAULT_SITE_CONFIG.youtubeUrl : parsed.youtubeUrl,
          instagramUrl: (!parsed.instagramUrl || parsed.instagramUrl.includes('?')) ? DEFAULT_SITE_CONFIG.instagramUrl : parsed.instagramUrl,
          tiktokUrl: (!parsed.tiktokUrl || parsed.tiktokUrl.includes('?')) ? DEFAULT_SITE_CONFIG.tiktokUrl : parsed.tiktokUrl,
        };
      } catch (e) {
        console.error('Error loading custom config:', e);
      }
    }
    return DEFAULT_SITE_CONFIG;
  });

  // State for Navigation / Views
  const [activeView, setActiveView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Modals
  const [seoModalOpen, setSeoModalOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Save config changes
  const handleSaveConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    localStorage.setItem('eskiva_site_config', JSON.stringify(newConfig));
  };

  const handleResetConfig = () => {
    setConfig(DEFAULT_SITE_CONFIG);
    localStorage.removeItem('eskiva_site_config');
  };

  // Scroll listener for back to top button
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation router handler
  const handleNavigate = (view: string, slug?: string) => {
    if (view === 'product-detail' && slug) {
      const prod = PRODUCTS_DATA.find((p) => p.slug === slug);
      if (prod) {
        setSelectedProduct(prod);
        setActiveView('product-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    if (view === 'article-detail' && slug) {
      const art = ARTICLES_DATA.find((a) => a.slug === slug);
      if (art) {
        setSelectedArticle(art);
        setActiveView('article-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    // Standard in-page section or standard page
    if (['home', 'privacy', 'terms', 'cookies'].includes(view)) {
      setActiveView(view);
      setSelectedProduct(null);
      setSelectedArticle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // In-page section scroll for home
    if (['produtos', 'sobre', 'ze-eskiva', 'calculadora', 'blog', 'faq', 'contato'].includes(view)) {
      if (activeView !== 'home') {
        setActiveView('home');
        setSelectedProduct(null);
        setSelectedArticle(null);
        setTimeout(() => {
          const el = document.getElementById(view);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(view);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectProduct = (prod: Product) => {
    setSelectedProduct(prod);
    setActiveView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (art: Article) => {
    setSelectedArticle(art);
    setActiveView('article-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic SEO Schema and Metadata generation for Rank Math
  interface SeoState {
    title: string;
    description: string;
    focusKeyword: string;
    secondaryKeywords: string[];
    slug: string;
    canonicalUrl: string;
    schemaType: string;
    schemaData: Record<string, any>;
  }

  let currentSeo: SeoState = {
    title: 'Eskiva Suplementos | Força, Qualidade e Alta Performance',
    description: 'Site oficial da Eskiva Suplementos. Creatina 100% Pura, Whey Protein Concentrado, Multivitamínico e Pré-Treino. Conheça a história de Zé Eskiva e faça seu cadastro.',
    focusKeyword: 'Eskiva Suplementos',
    secondaryKeywords: ['suplementos Eskiva', 'creatina Eskiva', 'whey Eskiva', 'suplementos para treino', 'nutricao esportiva'],
    slug: '',
    canonicalUrl: `https://${config.websiteDomain}/`,
    schemaType: 'Organization',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: config.brandName,
      url: `https://${config.websiteDomain}/`,
      logo: `https://${config.websiteDomain}/logo.png`,
      description: config.slogan,
      founder: {
        '@type': 'Person',
        name: 'Zé Eskiva',
        jobTitle: 'CEO & Multicampeão Mundial',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: config.phone,
        contactType: 'customer service',
        email: config.email,
        hoursAvailable: config.supportHours,
      },
      sameAs: [config.youtubeUrl, config.instagramUrl, config.tiktokUrl],
    },
  };

  if (activeView === 'product-detail' && selectedProduct) {
    currentSeo = {
      title: selectedProduct.seo.title,
      description: selectedProduct.seo.description,
      focusKeyword: selectedProduct.seo.focusKeyword,
      secondaryKeywords: selectedProduct.seo.secondaryKeywords,
      slug: selectedProduct.slug,
      canonicalUrl: `https://${config.websiteDomain}/${selectedProduct.slug}/`,
      schemaType: 'Product',
      schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: selectedProduct.name,
        description: selectedProduct.shortDesc,
        brand: {
          '@type': 'Brand',
          name: config.brandName,
        },
        offers: {
          '@type': 'Offer',
          url: config.officialRegisterUrl,
          availability: 'https://schema.org/InStock',
        },
      },
    };
  } else if (activeView === 'article-detail' && selectedArticle) {
    currentSeo = {
      title: selectedArticle.seo.title,
      description: selectedArticle.seo.description,
      focusKeyword: selectedArticle.seo.focusKeyword,
      secondaryKeywords: selectedArticle.seo.secondaryKeywords,
      slug: `blog/${selectedArticle.slug}`,
      canonicalUrl: `https://${config.websiteDomain}/blog/${selectedArticle.slug}/`,
      schemaType: 'Article',
      schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: selectedArticle.title,
        description: selectedArticle.excerpt,
        datePublished: '2026-02-15T09:00:00+00:00',
        author: {
          '@type': 'Organization',
          name: selectedArticle.author.name,
        },
        publisher: {
          '@type': 'Organization',
          name: config.brandName,
        },
      },
    };
  } else if (activeView === 'privacy') {
    currentSeo = {
      title: `Política de Privacidade | ${config.brandName}`,
      description: `Política de Privacidade e Proteção de Dados (LGPD) da ${config.brandName}. Saiba como protegemos suas informações.`,
      focusKeyword: 'Política de Privacidade Eskiva',
      secondaryKeywords: ['LGPD', 'privacidade de dados', 'termos e privacidade'],
      slug: 'politica-de-privacidade',
      canonicalUrl: `https://${config.websiteDomain}/politica-de-privacidade/`,
      schemaType: 'WebPage',
      schemaData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Política de Privacidade - ${config.brandName}`,
        url: `https://${config.websiteDomain}/politica-de-privacidade/`,
        description: `Termos de privacidade da ${config.brandName} em conformidade com a LGPD.`,
      },
    };
  } else if (activeView === 'terms') {
    currentSeo = {
      title: `Termos de Uso | ${config.brandName}`,
      description: `Termos e Condições de Uso do site oficial da ${config.brandName}. Diretrizes sobre produtos, navegação e propriedade intelectual.`,
      focusKeyword: 'Termos de Uso Eskiva',
      secondaryKeywords: ['termos e condicoes', 'regulamento', 'site oficial eskiva'],
      slug: 'termos-de-uso',
      canonicalUrl: `https://${config.websiteDomain}/termos-de-uso/`,
      schemaType: 'WebPage',
      schemaData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Termos de Uso - ${config.brandName}`,
        url: `https://${config.websiteDomain}/termos-de-uso/`,
        description: `Termos e condições de navegação da ${config.brandName}.`,
      },
    };
  } else if (activeView === 'cookies') {
    currentSeo = {
      title: `Política de Cookies | ${config.brandName}`,
      description: `Saiba como a ${config.brandName} utiliza cookies essenciais e analíticos para melhorar sua experiência de navegação.`,
      focusKeyword: 'Política de Cookies Eskiva',
      secondaryKeywords: ['cookies lgpd', 'gerenciar cookies', 'navegacao segura'],
      slug: 'politica-de-cookies',
      canonicalUrl: `https://${config.websiteDomain}/politica-de-cookies/`,
      schemaType: 'WebPage',
      schemaData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Política de Cookies - ${config.brandName}`,
        url: `https://${config.websiteDomain}/politica-de-cookies/`,
        description: `Diretrizes sobre o uso de cookies na plataforma ${config.brandName}.`,
      },
    };
  }

  // Update document title, canonical and meta tags dynamically
  useEffect(() => {
    document.title = currentSeo.title;

    // Update canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = currentSeo.canonicalUrl;

    // Update meta description
    let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (descTag) {
      descTag.content = currentSeo.description;
    }

    // Update Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.content = currentSeo.title;

    const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (ogDesc) ogDesc.content = currentSeo.description;

    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (ogUrl) ogUrl.content = currentSeo.canonicalUrl;

    // Update Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    if (twTitle) twTitle.content = currentSeo.title;

    const twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
    if (twDesc) twDesc.content = currentSeo.description;
  }, [currentSeo.title, currentSeo.description, currentSeo.canonicalUrl]);

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-100 font-sans flex flex-col selection:bg-[#FF7A00] selection:text-zinc-950">
      {/* Header */}
      <Header
        config={config}
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenSeoInspector={() => setSeoModalOpen(true)}
        onOpenCustomizer={() => setCustomizerOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero
              config={config}
              onNavigateToAbout={() => handleNavigate('sobre')}
              onNavigateToProducts={() => handleNavigate('produtos')}
            />
            <CategoriesSection onSelectCategory={(cat) => handleNavigate('produtos')} />
            <AboutSection
              config={config}
              onNavigateToProducts={() => handleNavigate('produtos')}
            />
            <ZeEskivaSection config={config} />
            <ProductsSection
              products={PRODUCTS_DATA}
              config={config}
              onSelectProduct={handleSelectProduct}
            />
            <BenefitsSection />
            <SupplementsCalculator
              config={config}
              onNavigateToProduct={(slug) => handleNavigate('product-detail', slug)}
            />
            <BlogSection
              articles={ARTICLES_DATA}
              onSelectArticle={handleSelectArticle}
            />
            <TestimonialsSection />
            <FaqSection onOpenSeoInspector={() => setSeoModalOpen(true)} />
            <CtaBanner config={config} />
            <SocialSection config={config} />
            <ContactSection config={config} />
          </>
        )}

        {activeView === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            allProducts={PRODUCTS_DATA}
            config={config}
            onBack={() => handleNavigate('home')}
            onSelectProduct={handleSelectProduct}
            onOpenSeoInspector={() => setSeoModalOpen(true)}
          />
        )}

        {activeView === 'article-detail' && selectedArticle && (
          <ArticleDetailPage
            article={selectedArticle}
            relatedArticles={ARTICLES_DATA.filter((a) => a.id !== selectedArticle.id).slice(0, 2)}
            relatedProduct={PRODUCTS_DATA.find((p) => p.slug === selectedArticle.relatedProductSlug)}
            config={config}
            onBack={() => handleNavigate('home')}
            onSelectArticle={handleSelectArticle}
            onSelectProduct={handleSelectProduct}
            onOpenSeoInspector={() => setSeoModalOpen(true)}
          />
        )}

        {activeView === 'privacy' && (
          <PrivacyPage
            config={config}
            onBack={() => handleNavigate('home')}
            onNavigateToProducts={() => handleNavigate('produtos')}
          />
        )}

        {activeView === 'terms' && (
          <TermsPage
            config={config}
            onBack={() => handleNavigate('home')}
            onNavigateToProducts={() => handleNavigate('produtos')}
          />
        )}

        {activeView === 'cookies' && (
          <CookiesPage
            config={config}
            onBack={() => handleNavigate('home')}
            onNavigateToProducts={() => handleNavigate('produtos')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onNavigate={handleNavigate}
        onOpenSeoInspector={() => setSeoModalOpen(true)}
      />

      {/* Cookie / LGPD Consent Banner */}
      <CookieBanner onOpenCookiesPolicy={() => handleNavigate('cookies')} />

      {/* Floating Quick Action Buttons */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        {/* Floating Rank Math Button */}
        <button
          onClick={() => setSeoModalOpen(true)}
          className="px-3 py-2 rounded-full bg-zinc-900/95 hover:bg-zinc-800 text-white text-xs font-bold border border-[#FF7A00]/50 shadow-xl flex items-center gap-1.5 transition-all hover:scale-105"
          title="Ver Auditoria Rank Math SEO e Schema"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
          <span className="hidden sm:inline">Rank Math SEO</span>
        </button>

        {/* Floating Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#FF7A00] hover:bg-orange-400 text-zinc-950 font-black shadow-xl flex items-center justify-center transition-all hover:-translate-y-1"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* SEO & Rank Math Modal */}
      <SeoInspectorModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
        pageTitle={currentSeo.title}
        seoTitle={currentSeo.title}
        metaDescription={currentSeo.description}
        focusKeyword={currentSeo.focusKeyword}
        secondaryKeywords={currentSeo.secondaryKeywords}
        slug={currentSeo.slug}
        canonicalUrl={currentSeo.canonicalUrl}
        schemaType={currentSeo.schemaType}
        schemaData={currentSeo.schemaData}
      />

      {/* Quick CMS Customizer Modal */}
      <CustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
