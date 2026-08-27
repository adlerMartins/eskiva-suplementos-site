export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'suplementos' | 'acessorios' | 'luta';
  categoryLabel: string;
  subtitle: string;
  badge?: string;
  packageWeight: string;
  flavors?: string[];
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  suggestedUse: string;
  nutritionalHighlights: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  imageType: 'creatina' | 'whey-chocolate' | 'whey-frutas' | 'multivitaminico' | 'pre-treino' | 'coqueteleira' | 'luvas-boxe';
  officialLink: string;
  // Rank Math SEO metadata
  seo: {
    title: string;
    description: string;
    focusKeyword: string;
    secondaryKeywords: string[];
    schemaType: 'Product';
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  content: string; // Markdown / HTML formatted
  tags: string[];
  relatedProductSlug?: string;
  seo: {
    title: string;
    description: string;
    focusKeyword: string;
    secondaryKeywords: string[];
    schemaType: 'Article';
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  handle: string;
  comment: string;
  stars: number;
  avatarInitials: string;
}

export interface FAQItem {
  id: string;
  category: 'marca' | 'produtos' | 'suplementacao' | 'cadastro';
  question: string;
  answer: string;
}

export interface SiteConfig {
  brandName: string;
  slogan: string;
  cnpj: string;
  phone: string;
  email: string;
  supportHours: string;
  websiteDomain: string;
  officialRegisterUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  address: string;
}
