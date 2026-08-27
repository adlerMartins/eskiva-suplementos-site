import { Product, Article, Testimonial, FAQItem, SiteConfig } from '../types';

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  brandName: 'Eskiva Suplementos',
  slogan: 'Força, qualidade e alta performance para quem busca superar limites.',
  cnpj: '23.717.529/0001-26',
  phone: '(67) 98106-5507',
  email: 'suprimentos6922@gmail.com',
  supportHours: 'Segunda a sexta-feira, das 9h às 17h',
  websiteDomain: 'eskiva-suplementos.site',
  officialRegisterUrl: 'https://eskiva.link/NKgD5N',
  youtubeUrl: 'https://www.youtube.com/@eskivasuplementos-w6e',
  instagramUrl: 'https://www.instagram.com/eskiva_suplementos.oficial/',
  tiktokUrl: 'https://www.tiktok.com/@eskivasuplementos2026',
  address: 'Brasil • Distribuição e Pontos de Coleta Nacional',
};

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'creatina-100-pura',
    slug: 'creatina-eskiva',
    name: 'Creatina Monohidratada 100% Pura',
    category: 'suplementos',
    categoryLabel: 'Força & Potência',
    subtitle: 'Aliada do condicionamento físico e mental com pureza garantida',
    badge: '100% Pura',
    packageWeight: '150g / 300g',
    flavors: ['Sem Sabor (Natural)'],
    shortDesc: 'A Creatina Eskiva foi desenvolvida para quem busca melhorar o desempenho físico e mental. Excelente para potencializar os treinos e alcançar novos resultados com rápida absorção e máxima pureza.',
    fullDesc: 'Desenvolvida sob rigorosos padrões de controle de qualidade, a Creatina Monohidratada Eskiva oferece 100% de pureza micronizada para rápida dissolução e absorção celular. Auxilia no aumento da força explosiva em exercícios de alta intensidade, acelera a ressíntese de ATP e apoia a recuperação muscular de atletas amadores e profissionais.',
    benefits: [
      '100% pura e micronizada para fácil diluição',
      'Auxilia no ganho de força e explosão muscular',
      'Potencializa a resistência em treinos de alta intensidade',
      'Apoia a recuperação física e foco mental nos treinos',
      'Sem adição de açúcares, corantes ou conservantes',
    ],
    suggestedUse: 'Diluir 1 dosador (aprox. 3g a 5g) em 200ml de água, suco ou sua bebida preferida, uma vez ao dia, ou conforme orientação de nutricionista/médico.',
    nutritionalHighlights: [
      { label: 'Pureza', value: '100% Monohidratada' },
      { label: 'Glúten', value: 'Não Contém' },
      { label: 'Açúcares', value: 'Zero Adição' },
      { label: 'Embalagem', value: '150g' },
    ],
    faqs: [
      {
        question: 'O que é a Creatina Monohidratada Eskiva?',
        answer: 'É um suplemento alimentar de alta pureza composto por creatina monohidratada micronizada, formulado para apoiar a produção de energia nas células musculares durante treinos intensos.',
      },
      {
        question: 'Como tomar a Creatina Eskiva no dia a dia?',
        answer: 'Recomenda-se o consumo contínuo e diário (mesmo nos dias sem treino), dissolvendo a dose indicada em água ou na bebida de sua preferência.',
      },
      {
        question: 'Creatina retém líquido?',
        answer: 'A creatina promove a hidratação intracelular (dentro da célula muscular), o que favorece a síntese proteica e o tônus muscular, sem causar inchaço subcutâneo indesejado quando acompanhada de boa ingestão hídrica.',
      },
    ],
    imageType: 'creatina',
    officialLink: 'https://eskiva.link/NKgD5N',
    seo: {
      title: 'Creatina Monohidratada Eskiva 100% Pura | Força e Performance',
      description: 'Conheça a Creatina Monohidratada 100% Pura da Eskiva Suplementos. Fórmula de alta absorção para aumento de força, explosão e recuperação muscular.',
      focusKeyword: 'creatina Eskiva',
      secondaryKeywords: ['creatina monohidratada pura', 'suplementos para treino', 'creatina 100% pura', 'creatina para academia'],
      schemaType: 'Product',
    },
  },
  {
    id: 'whey-protein-concentrado',
    slug: 'whey-protein-eskiva',
    name: '100% Whey Protein Concentrado',
    category: 'suplementos',
    categoryLabel: 'Massa Muscular',
    subtitle: 'A dose certinha de proteína diária para guerreiros da academia e mestres das dietas',
    badge: 'Alta Concentração',
    packageWeight: '900g',
    flavors: ['Chocolate Intenso', 'Frutas Tropicais'],
    shortDesc: 'Proteína concentrada do soro do leite com rápida absorção, alto teor de aminoácidos essenciais e sabor incomparável. Perfeito para suprir a necessidade proteica diária.',
    fullDesc: 'O Whey Protein Concentrado Eskiva foi elaborado para fornecer o aporte ideal de proteínas de alto valor biológico necessárias para o processo de reconstrução e hipertrofia muscular. Com excelente solubilidade e perfis de sabor irresistíveis nos sabores Chocolate e Frutas Tropicais, ele combina eficiência nutricional com uma experiência de consumo agradável.',
    benefits: [
      'Rápida absorção e excelente digestibilidade',
      'Rico em aminoácidos essenciais e BCAAs naturalmente presentes',
      'Auxilia no desenvolvimento e manutenção da massa magra',
      'Excelente solubilidade: textura cremosa e sem grumos',
      'Disponível nos deliciosos sabores Chocolate e Frutas Tropicais',
    ],
    suggestedUse: 'Misturar 30g a 40g (aproximadamente 1 dosador e meio) em 200ml a 250ml de água gelada ou leite desnatado na coqueteleira. Consumir pós-treino ou entre as refeições.',
    nutritionalHighlights: [
      { label: 'Peso Líquido', value: '900g' },
      { label: 'Sabores', value: 'Chocolate / Frutas Tropicais' },
      { label: 'Absorção', value: 'Rápida' },
      { label: 'Qualidade', value: 'Premium' },
    ],
    faqs: [
      {
        question: 'Para que serve o Whey Protein Concentrado Eskiva?',
        answer: 'Serve para fornecer proteínas de alto valor biológico que auxiliam na reconstrução e no crescimento das fibras musculares após o esforço físico.',
      },
      {
        question: 'Quais os sabores disponíveis do Whey Eskiva?',
        answer: 'Atualmente disponibilizado nas opções Chocolate e Frutas Tropicais, ambos desenvolvidos para ter excelente solubilidade e sabor suave.',
      },
    ],
    imageType: 'whey-chocolate',
    officialLink: 'https://eskiva.link/NKgD5N',
    seo: {
      title: 'Whey Protein Concentrado Eskiva 900g | Recuperação e Massa Muscular',
      description: 'Whey Protein Concentrado Eskiva 900g. Sabores Chocolate e Frutas Tropicais com rápida absorção e alto valor biológico para sua rotina de treinos.',
      focusKeyword: 'whey Eskiva',
      secondaryKeywords: ['whey protein concentrado', 'suplemento proteico academia', 'whey protein 900g', 'proteina para treino'],
      schemaType: 'Product',
    },
  },
  {
    id: 'multivitaminico-vitalidade',
    slug: 'multivitaminico-eskiva',
    name: 'Multivitamínico Nutrição & Vitalidade',
    category: 'suplementos',
    categoryLabel: 'Saúde & Imunidade',
    subtitle: 'Fórmula completa com vitaminas e minerais essenciais para o dia a dia',
    badge: 'Fórmula Completa',
    packageWeight: '60 Cápsulas',
    flavors: ['Cápsulas Práticas'],
    shortDesc: 'Fórmula balanceada desenvolvida com micronutrientes essenciais que auxiliam no fortalecimento do organismo, contribuem para o sistema imunológico e aumentam a disposição diária.',
    fullDesc: 'A rotina intensa de treinos e trabalho exige um suporte nutricional equilibrado. O Multivitamínico Eskiva reúne micronutrientes de alta biodisponibilidade para complementar a alimentação, neutralizar radicais livres decorrentes do exercício intenso e manter a vitalidade e imunidade sempre blindadas.',
    benefits: [
      'Combinação abrangente de vitaminas (A, C, D, E e Complexo B) e minerais essenciais',
      'Auxilia no fortalecimento das defesas do sistema imune',
      'Contribui para a redução do cansaço físico e mental',
      'Apoia o metabolismo energético celular e a saúde óssea',
      'Cápsulas de fácil deglutição para uso diário',
    ],
    suggestedUse: 'Ingerir 1 a 2 cápsulas ao dia junto a uma das principais refeições (almoço ou jantar), ou conforme prescrição de profissional de saúde.',
    nutritionalHighlights: [
      { label: 'Apresentação', value: '60 Cápsulas' },
      { label: 'Uso', value: 'Diário' },
      { label: 'Glúten', value: 'Zero' },
      { label: 'Biodisponibilidade', value: 'Alta' },
    ],
    faqs: [
      {
        question: 'Quem pode tomar o Multivitamínico Eskiva?',
        answer: 'Adultos praticantes de atividades físicas e pessoas que buscam reforçar a ingestão diária de vitaminas e minerais essenciais para manter a imunidade e vitalidade.',
      },
      {
        question: 'Qual o melhor horário para tomar?',
        answer: 'Recomenda-se ingerir junto a uma refeição sólida que contenha fontes de gorduras boas para otimizar a absorção das vitaminas lipossolúveis (como A, D e E).',
      },
    ],
    imageType: 'multivitaminico',
    officialLink: 'https://eskiva.link/NKgD5N',
    seo: {
      title: 'Multivitamínico Eskiva 60 Cápsulas | Imunidade e Vitalidade Diária',
      description: 'Fórmula completa com vitaminas e minerais no Multivitamínico Eskiva. Reforce a imunidade, aumente a disposição e supra suas necessidades nutricionais.',
      focusKeyword: 'multivitaminico Eskiva',
      secondaryKeywords: ['vitaminas e minerais', 'suplemento para imunidade', 'multivitaminico academia', 'vitaminas para atletas'],
      schemaType: 'Product',
    },
  },
  {
    id: 'pre-treino-intenso',
    slug: 'pre-treino-eskiva',
    name: 'Pré-Treino Eskiva Energia & Foco',
    category: 'suplementos',
    categoryLabel: 'Energia & Foco',
    subtitle: 'Ideal para quem busca mais disposição, intensidade e motivação do início ao fim',
    badge: '100% Energia',
    packageWeight: '150g',
    flavors: ['Frutas Vermelhas / Citrus'],
    shortDesc: 'Aliado do condicionamento físico e mental. Fórmula desenvolvida para proporcionar explosão de energia, foco nos exercícios e redução da percepção de fadiga.',
    fullDesc: 'O Pré-Treino Eskiva foi projetado para elevar a intensidade dos seus treinos a um novo patamar. Sua fórmula sinérgica combina ingredientes que auxiliam na vasodilatação, no estado de alerta e no retardo da fadiga muscular, garantindo que cada repetição e cada round sejam executados com máxima determinação.',
    benefits: [
      'Sensação rápida de energia e disposição para treinar',
      'Auxilia na concentração e no foco mental',
      'Contribui para a resistência muscular e combate o cansaço precoce',
      'Excelente diluição com sabor refrescante',
      'Ideal para treinos de musculação, lutas, crossfit e esportes aeróbicos',
    ],
    suggestedUse: 'Diluir 1 dosador em 150ml a 200ml de água fria cerca de 20 a 30 minutos antes da sessão de treinamento.',
    nutritionalHighlights: [
      { label: 'Peso Líquido', value: '150g' },
      { label: 'Ação', value: 'Rápida' },
      { label: 'Foco', value: 'Energia & Resistência' },
      { label: 'Formulação', value: 'Alta Performance' },
    ],
    faqs: [
      {
        question: 'O Pré-Treino Eskiva tira o sono se tomado à noite?',
        answer: 'Por conter ingredientes estimulantes para aumento do estado de alerta, sugere-se o consumo com pelo menos 5 a 6 horas de antecedência ao horário de dormir para pessoas sensíveis.',
      },
      {
        question: 'Posso combinar o Pré-Treino com a Creatina?',
        answer: 'Sim, a creatina e o pré-treino possuem mecanismos complementares e são frequentemente utilizados em conjunto por atletas.',
      },
    ],
    imageType: 'pre-treino',
    officialLink: 'https://eskiva.link/NKgD5N',
    seo: {
      title: 'Pré-Treino Eskiva 150g | Máxima Energia, Foco e Disposição',
      description: 'Potencialize seus treinos com o Pré-Treino Eskiva. Fórmula de alta intensidade para foco, resistência muscular e máxima motivação do início ao fim.',
      focusKeyword: 'pre-treino Eskiva',
      secondaryKeywords: ['pre treino para academia', 'suplemento pre treino', 'energia para treinar', 'suplementacao esportiva'],
      schemaType: 'Product',
    },
  },
  {
    id: 'coqueteleira-oficial',
    slug: 'coqueteleira-eskiva',
    name: 'Coqueteleira Oficial Eskiva',
    category: 'acessorios',
    categoryLabel: 'Acessórios & Treino',
    subtitle: 'Excelente para a diluição perfeita do seu Whey Protein e suplementos',
    badge: 'Combo Perfeito',
    packageWeight: '700ml',
    flavors: ['Vermelho & Preto / Branco'],
    shortDesc: 'Coqueteleira de alta vedação, material resistente livre de BPA com bico ergonômico e misturador interno que garante shakes homogêneos sem vazamentos.',
    fullDesc: 'Um bom suplemento merece um acessório de alta qualidade. A Coqueteleira Oficial Eskiva foi pensada para acompanhar o seu ritmo diário na academia, no trabalho ou em viagens. Fabricada em polipropileno atóxico de alta durabilidade com escala de medição precisa e tampa anti-vazamento.',
    benefits: [
      'Tampa rosqueável com trava segura contra vazamentos na bolsa',
      'Misturador embutido para diluição rápida de Whey, Creatina e Pré-treino',
      'Material livre de BPA e atóxico',
      'Marcadores de mililitros visíveis para dosagem precisa',
      'Design anatômico com a identidade visual marcante Eskiva',
    ],
    suggestedUse: 'Utilizar para o preparo e consumo de shakes, água ou bebidas esportivas. Lavar com água e sabão neutro após o uso.',
    nutritionalHighlights: [
      { label: 'Capacidade', value: '700ml' },
      { label: 'Material', value: 'BPA Free' },
      { label: 'Vedação', value: 'Sistema Anti-Gota' },
      { label: 'Design', value: 'Oficial Eskiva' },
    ],
    faqs: [
      {
        question: 'A coqueteleira Eskiva é livre de BPA?',
        answer: 'Sim, produzida com material atóxico de grau alimentício 100% livre de BPA.',
      },
    ],
    imageType: 'coqueteleira',
    officialLink: 'https://eskiva.link/NKgD5N',
    seo: {
      title: 'Coqueteleira Oficial Eskiva 700ml | Vedação Segura e Shake Perfeito',
      description: 'Coqueteleira Oficial Eskiva para diluição de Whey Protein e suplementos. Prática, livre de BPA, vedação anti-vazamento e design exclusivo.',
      focusKeyword: 'coqueteleira Eskiva',
      secondaryKeywords: ['coqueteleira academia', 'shaker para whey', 'acessorios para treino', 'coqueteleira esportiva'],
      schemaType: 'Product',
    },
  },
  {
    id: 'luvas-boxe-linha-atleta',
    slug: 'luvas-boxe-eskiva',
    name: 'Luvas de Boxe & Muay Thai - Linha Atleta',
    category: 'luta',
    categoryLabel: 'Linha Atleta & Luta',
    subtitle: 'Luvas oficiais da Eskiva Suplementos com absorção de impacto profissional',
    badge: 'Lançamento Linha Atleta',
    packageWeight: '12oz / 14oz / 16oz',
    flavors: ['Preto / Branco / Laranja'],
    shortDesc: 'Equipamento oficial desenvolvido com ergonomia e proteção articular para praticantes de Boxe, Muay Thai, Kickboxing e artes marciais de contato.',
    fullDesc: 'Inspirada na vivência vitoriosa nos ringues mundiais, a Linha Atleta de Luvas Eskiva foi moldada para oferecer estabilidade máxima no punho, espuma injetada multidensidade para dissipação de choques e costuras reforçadas, assegurando proteção e durabilidade em treinos e sparring.',
    benefits: [
      'Amortecimento multidensidade com alta proteção para os nós dos dedos',
      'Fechamento em velcro reforçado para sustentação do punho',
      'Palma com ventilação estratégica para controle de umidade',
      'Acabamento premium com design exclusivo Zé Eskiva',
      'Ideal para Boxe, Kickboxing, Muay Thai e treinos de saco de pancada',
    ],
    suggestedUse: 'Utilizar sempre com bandagem elástica adequada para proteção dos punhos e dedos durante treinos e lutas.',
    nutritionalHighlights: [
      { label: 'Categoria', value: 'Linha Atleta Oficial' },
      { label: 'Tamanhos', value: '12oz, 14oz, 16oz' },
      { label: 'Fechamento', value: 'Velcro Seguro' },
      { label: 'Origem', value: 'DNA de Campeão' },
    ],
    faqs: [
      {
        question: 'Quais tamanhos e cores estão disponíveis?',
        answer: 'As luvas oficiais da Linha Atleta são confeccionadas nas onças 12oz, 14oz e 16oz nas versões preto fosco e branco com detalhes em laranja.',
      },
      {
        question: 'Servem para sparring e saco de pancada?',
        answer: 'Sim, a densidade da espuma foi desenvolvida para absorver impactos tanto no trabalho de saco de pancadas quanto em treinos de sparring com parceiros.',
      },
    ],
    imageType: 'luvas-boxe',
    officialLink: 'https://eskiva.link/NKgD5N',
    seo: {
      title: 'Luvas de Boxe e Muay Thai Linha Atleta Eskiva | Proteção e Durabilidade',
      description: 'Luvas de Boxe e Muay Thai oficiais da Eskiva Suplementos. Espuma de alta densidade, fechamento anatômico no punho e visual autêntico de atleta.',
      focusKeyword: 'luvas de boxe Eskiva',
      secondaryKeywords: ['luvas de muay thai', 'luva de treino kickboxing', 'linha atleta eskiva', 'equipamento de luta'],
      schemaType: 'Product',
    },
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Weber Almeida',
    role: 'Lutador de MMA Profissional',
    handle: '@weberdealmeida',
    comment: 'Cara, acompanho o Zé Eskiva faz tempo e sei o quanto ele se dedica. Essa marca tem propósito de verdade, não é só mais um suplemento... Tmj Eskiva!!',
    stars: 5,
    avatarInitials: 'WA',
  },
  {
    id: 'test-2',
    name: 'Eliezer Silva',
    role: 'Lutador de Boxe',
    handle: '@e.silvaoficial',
    comment: 'Acredito muito no Zé e no que ele tá construindo. Essa marca tem tudo pra bombar, propósito, qualidade e consistência. Vai ser um sucesso, tô crente!',
    stars: 5,
    avatarInitials: 'ES',
  },
  {
    id: 'test-3',
    name: 'Igor Chime',
    role: 'Bodybuilder & Atleta',
    handle: '@igorchime',
    comment: 'Meu parceiro Zé Eskiva tá chegando com TUDO. Suplemento de qualidade, feito pra quem é raiz no treino e não aceita menos que resultado. Prepara que vem coisa boa por aí.',
    stars: 5,
    avatarInitials: 'IC',
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    slug: 'o-que-e-creatina-e-para-que-serve',
    title: 'O que é creatina e para que serve? Guia completo de força e hipertrofia',
    category: 'Creatina',
    categorySlug: 'creatina',
    readTime: '4 min de leitura',
    date: '15 Fev 2026',
    author: {
      name: 'Equipe Eskiva Suplementos',
      role: 'Ciência & Nutrição Esportiva',
    },
    excerpt: 'Descubra como a creatina atua na produção de ATP celular, aumento da força muscular e melhora no desempenho de treinos de alta intensidade.',
    content: `A **creatina** é um dos suplementos mais estudados e comprovados pela ciência da nutrição esportiva em todo o mundo. Composta pelos aminoácidos arginina, glicina e metionina, ela é sintetizada naturalmente pelo corpo humano e encontrada em pequenas quantidades na carne vermelha e peixes.

### Como a creatina atua no corpo?
No músculo esquelético, a creatina é armazenada como *fosfocreatina*. Durante exercícios curtos e de potência máxima — como séries pesadas na musculação, tiros de corrida ou rounds de luta — o corpo utiliza ATP (adenosina trifosfato) como combustível imediato. A fosfocreatina regenera rapidamente as moléculas de ATP, permitindo que você sustente mais força por mais repetições.

### Principais benefícios comprovados:
1. **Aumento de força e potência muscular:** Melhora de 5% a 15% na performance de cargas elevadas.
2. **Auxílio na hipertrofia:** Promove hidratação intracelular, sinalizando vias anabólicas para síntese de novas proteínas.
3. **Melhor recuperação entre séries:** Ressíntese acelerada de energia muscular.
4. **Benefícios cognitivos:** Estudos recentes apontam suporte à concentração e clareza mental sob estresse físico.

### Como consumir corretamente?
A creatina deve ser ingerida de forma contínua, todos os dias, inclusive nos momentos de descanso. A dose habitual varia de **3g a 5g diárias**, diluída em água ou misturada ao Whey Protein. Não há necessidade de interrupção cíclica para indivíduos saudáveis.`,
    tags: ['Creatina', 'Treino', 'Hipertrofia', 'Desempenho'],
    relatedProductSlug: 'creatina-eskiva',
    seo: {
      title: 'O Que É Creatina e Para Que Serve? | Eskiva Suplementos Blog',
      description: 'Entenda como a creatina funciona no organismo, seus benefícios para ganho de força e massa magra, e a dosagem recomendada pela ciência.',
      focusKeyword: 'o que e creatina e para que serve',
      secondaryKeywords: ['creatina para que serve', 'como tomar creatina', 'creatina hipertrofia', 'suplementacao de creatina'],
      schemaType: 'Article',
    },
  },
  {
    id: 'art-2',
    slug: 'creatina-antes-ou-depois-do-treino',
    title: 'Creatina antes ou depois do treino? O que diz a ciência esportiva',
    category: 'Creatina',
    categorySlug: 'creatina',
    readTime: '3 min de leitura',
    date: '18 Fev 2026',
    author: {
      name: 'Equipe Eskiva Suplementos',
      role: 'Performance & Treinamento',
    },
    excerpt: 'Esclareça de vez a dúvida mais comum sobre o momento ideal para tomar creatina e como maximizar a absorção celular.',
    content: `Uma das dúvidas mais frequentes nas academias é: *"Devo tomar creatina antes de ir treinar ou logo após finalizar o treino?"*

A resposta científica é direta: **o efeito da creatina é crônico, não agudo.** Isso significa que a creatina não funciona como um pré-treino de efeito imediato; seus benefícios resultam do acúmulo gradual de estoques nos músculos ao longo de dias e semanas.

### O momento ideal faz diferença?
- **Pós-treino acompanhada de carboidratos:** Pesquisas indicam uma leve vantagem quando ingerida após o treino juntamente com uma fonte de carboidrato (como frutas, maltodextrina ou refeição sólida) ou proteína (como Whey), devido ao pico de insulina que favorece o transporte de nutrientes para dentro da célula muscular.
- **Antes do treino:** Também é eficaz, desde que o uso seja diário.
- **Qualquer outro horário:** A consistência diária supera qualquer minúcia de horário.

### Regra de ouro da Creatina Eskiva
O fator determinante é **nunca esquecer a dose diária** e manter uma ingestão de água adequada (de 35ml a 45ml por quilo corporal ao dia).`,
    tags: ['Creatina', 'Horário de Suplementação', 'Nutrição Esportiva'],
    relatedProductSlug: 'creatina-eskiva',
    seo: {
      title: 'Creatina Antes ou Depois do Treino? | Blog Eskiva Suplementos',
      description: 'Descubra qual o melhor horário para tomar sua creatina: antes ou após o treino? Saiba o que a ciência da nutrição esportiva recomenda.',
      focusKeyword: 'creatina antes ou depois do treino',
      secondaryKeywords: ['como tomar creatina', 'horario de tomar creatina', 'creatina pos treino', 'creatina com carboidrato'],
      schemaType: 'Article',
    },
  },
  {
    id: 'art-3',
    slug: 'o-que-e-whey-protein-como-escolher',
    title: 'O que é Whey Protein e como escolher a melhor opção para seu objetivo',
    category: 'Whey Protein',
    categorySlug: 'whey-protein',
    readTime: '5 min de leitura',
    date: '20 Fev 2026',
    author: {
      name: 'Equipe Eskiva Suplementos',
      role: 'Nutrição & Suplementos',
    },
    excerpt: 'Aprenda o que é o soro do leite concentrado, como ele acelera a recuperação muscular e por que é a base da nutrição esportiva moderna.',
    content: `O **Whey Protein** é a proteína de altíssimo valor biológico extraída durante o processo de fabricação do queijo a partir do leite de vaca. Rico em todos os aminoácidos essenciais (incluindo leucina, isoleucina e valina — os famosos BCAAs), ele se destaca pela rápida digestão e facilidade de preparo.

### Por que o Whey Protein Concentrado é o preferido?
O Whey Protein Concentrado (como o **100% Whey Eskiva**) preserva frações bioativas importantes do leite, como imunoglobulinas e lactoferrina, oferecendo:
- **Aporte proteico consistente:** Fundamental para bater a meta de proteínas diária (1,6g a 2,2g por kg corporal).
- **Sabor e cremosidade superiores:** Ideal para shakes com frutas, receitas saudáveis ou consumo rápido com água gelada.
- **Custo-benefício excelente:** Nutrição de ponta acessível para a rotina diária de atletas e praticantes de academia.

### Como incorporar na sua rotina:
- **No pós-treino imediato:** Para iniciar prontamente o reparo das microlesões musculares induzidas pelo treino.
- **No café da manhã ou lanches intermediários:** Para garantir saciedade e manter o fluxo contínuo de aminoácidos na corrente sanguínea.`,
    tags: ['Whey Protein', 'Recuperação', 'Dieta', 'Proteínas'],
    relatedProductSlug: 'whey-protein-eskiva',
    seo: {
      title: 'O Que É Whey Protein e Como Escolher? | Eskiva Suplementos',
      description: 'Guia completo sobre Whey Protein: tipos, benefícios para ganho de massa magra, modos de preparo e como escolher o melhor para seus treinos.',
      focusKeyword: 'o que e whey protein',
      secondaryKeywords: ['como escolher whey protein', 'whey protein concentrado', 'beneficios whey protein', 'suplemento proteico'],
      schemaType: 'Article',
    },
  },
  {
    id: 'art-4',
    slug: 'para-que-serve-o-pre-treino',
    title: 'Para que serve o pré-treino? Foco, resistência e motivação máxima',
    category: 'Pré-Treino',
    categorySlug: 'pre-treino',
    readTime: '4 min de leitura',
    date: '22 Fev 2026',
    author: {
      name: 'Equipe Eskiva Suplementos',
      role: 'Alta Performance',
    },
    excerpt: 'Entenda os compostos que ativam a circulação sanguínea, diminuem a percepção de cansaço e aumentam o foco nos treinos intensos.',
    content: `Seja após um dia exaustivo de trabalho ou nas primeiras horas da manhã, o **suplemento pré-treino** atua como uma ferramenta estratégica para colocar o corpo e a mente no estado de prontidão física e mental.

### Componentes fundamentais de um bom pré-treino:
- **Estimulantes do sistema nervoso central:** Aumentam a vigilância, prontidão reflexa e sensação de energia.
- **Agentes de tamponamento e vasodilatação:** Auxiliam no fluxo sanguíneo muscular, transportando oxigênio e nutrientes de forma eficiente e postergando a sensação de queimação muscular.
- **Compostos neuro-focais:** Aumentam a concentração durante séries pesadas e treinos com técnicas avançadas.

### Dicas de uso seguro do Pré-Treino Eskiva:
1. Comece com metade da dose recomendada para avaliar sua tolerância individual.
2. Tome cerca de 20 a 30 minutos antes de iniciar o aquecimento.
3. Evite consumir próximo ao horário de dormir para não comprometer a qualidade do sono restaurador.`,
    tags: ['Pré-Treino', 'Energia', 'Foco', 'Resistência'],
    relatedProductSlug: 'pre-treino-eskiva',
    seo: {
      title: 'Para Que Serve o Pré-Treino? Benefícios e Como Usar | Eskiva',
      description: 'Descubra como os pré-treinos agem no organismo para elevar a disposição, energia muscular e foco nos treinos de força e artes marciais.',
      focusKeyword: 'para que serve o pre-treino',
      secondaryKeywords: ['suplemento pre treino', 'como usar pre treino', 'energia para treinar', 'resistencia muscular'],
      schemaType: 'Article',
    },
  },
  {
    id: 'art-5',
    slug: 'o-que-sao-vitaminas-e-minerais-na-nutricao-esportiva',
    title: 'O que são vitaminas e minerais? A base invisível da alta performance',
    category: 'Vitaminas e Minerais',
    categorySlug: 'vitaminas',
    readTime: '4 min de leitura',
    date: '24 Fev 2026',
    author: {
      name: 'Equipe Eskiva Suplementos',
      role: 'Saúde & Imunidade',
    },
    excerpt: 'Saiba por que atletas que treinam pesado necessitam de suporte multivitamínico para manter o sistema imune blindado e o metabolismo equilibrado.',
    content: `Muitas vezes, praticantes de musculação focam exclusivamente nos macronutrientes (proteínas, carboidratos e gorduras) e esquecem os **micronutrientes** — as vitaminas e minerais que agem como cofatores enzimáticos essenciais em milhares de reações químicas no corpo.

### O impacto do treino intenso nos micronutrientes:
Durante a atividade esportiva pesada, a taxa metabólica sobe consideravelmente, aumentando a produção de radicais livres e o consumo de minerais pelo suor e contrações musculares repetidas (como zinco, magnésio e ferro).

### Benefícios de um suporte multivitamínico diário:
- **Imunidade fortalecida:** Vitamina C, Vitamina D e Zinco ajudam a evitar quedas imunitárias comuns após treinos exaustivos.
- **Metabolismo energético:** As vitaminas do Complexo B são vitais para a conversão dos alimentos em energia utilizável pelas células.
- **Saúde óssea e articular:** Cálcio, Magnésio e Vitamina D garantem integridade estrutural contra o impacto mecânico dos treinos.`,
    tags: ['Vitaminas', 'Minerais', 'Imunidade', 'Saúde'],
    relatedProductSlug: 'multivitaminico-eskiva',
    seo: {
      title: 'Vitaminas e Minerais na Nutrição Esportiva | Eskiva Suplementos',
      description: 'Entenda a importância de vitaminas e minerais essenciais para atletas. Como manter a imunidade blindada e a performance física em alta.',
      focusKeyword: 'o que sao vitaminas e minerais',
      secondaryKeywords: ['vitaminas para atletas', 'multivitaminico imunidade', 'nutricao esportiva', 'suplementos para saude'],
      schemaType: 'Article',
    },
  },
  {
    id: 'art-6',
    slug: 'como-montar-rotina-de-suplementacao',
    title: 'Como montar uma rotina básica de suplementação para quem treina',
    category: 'Suplementação',
    categorySlug: 'suplementacao',
    readTime: '5 min de leitura',
    date: '26 Fev 2026',
    author: {
      name: 'Equipe Eskiva Suplementos',
      role: 'Planejamento Nutricional',
    },
    excerpt: 'Passo a passo prático para estruturar seus suplementos de manhã, pré-treino, pós-treino e noites para melhores resultados.',
    content: `Montar uma rotina de suplementação eficiente não exige dezenas de produtos complicados. O segredo está em escolher **suplementos com sólida comprovação científica**, alinhados com uma boa alimentação e descanso reparador.

### Exemplo de rotina prática com produtos Eskiva:

#### 1. Pela Manhã (Ao acordar / Café da manhã)
- **Multivitamínico Eskiva (1 cápsula):** Fornece vitaminas lipossolúveis e hidrossolúveis junto com a refeição para blindar a imunidade do dia.
- Hidratação abundante: 400ml a 500ml de água.

#### 2. Antes do Treino (20 a 30 min antes)
- **Pré-Treino Eskiva:** Para acelerar o foco, a disposição e a vasodilatação muscular.

#### 3. Pós-Treino Imediato
- **100% Whey Protein Eskiva (1 dosador) + Creatina Eskiva (3g a 5g):** Na sua coqueteleira oficial Eskiva. A união da proteína com a creatina acelera o início da recuperação e aproveita o fluxo sanguíneo ativado pelo treino.

#### 4. Ao longo do dia
- Beba água frequentemente e mantenha uma dieta rica em alimentos naturais, vegetais e sono de qualidade.`,
    tags: ['Rotina de Suplementação', 'Guia Prático', 'Academia', 'Suplementos para Treino'],
    relatedProductSlug: 'creatina-eskiva',
    seo: {
      title: 'Como Montar Uma Rotina de Suplementação? | Eskiva Suplementos',
      description: 'Aprenda a montar uma rotina de suplementos para academia: horários corretos para Whey Protein, Creatina, Pré-Treino e Multivitamínico.',
      focusKeyword: 'como montar uma rotina de suplementacao',
      secondaryKeywords: ['suplementacao para quem treina', 'rotina de suplementos', 'suplementos para academia', 'como tomar suplementos'],
      schemaType: 'Article',
    },
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'marca',
    question: 'O que é a Eskiva Suplementos?',
    answer: 'A Eskiva Suplementos é uma marca brasileira nascida com o propósito de unir nutrição esportiva de qualidade, esporte, transformação e comunidade. Criada sob a liderança do atleta multicampeão mundial Zé Eskiva, a marca oferece suplementos alimentares de alta pureza e eficiência para apoiar pessoas determinadas a superar seus limites físicos.',
  },
  {
    id: 'faq-2',
    category: 'marca',
    question: 'Quem é Zé Eskiva e qual a sua história?',
    answer: 'Zé Eskiva é atleta multicampeão de artes marciais, detentor de tetracampeonato mundial de kickboxing, bicampeonato mundial de MMA e bicampeonato mundial de Muay Thai. Representou o Brasil em dezenas de países, superando desafios extremos e transformando sua trajetória de luta em um projeto inspirador que hoje lidera a Eskiva Suplementos.',
  },
  {
    id: 'faq-3',
    category: 'produtos',
    question: 'Quais produtos a Eskiva oferece atualmente?',
    answer: 'A linha da Eskiva conta com Creatina Monohidratada 100% Pura (150g/300g), 100% Whey Protein Concentrado (900g nos sabores Chocolate e Frutas Tropicais), Multivitamínico Nutrição & Vitalidade (60 Cápsulas), Pré-Treino Energia & Foco (150g), além de acessórios como a Coqueteleira Oficial e Luvas de Boxe/Muay Thai da Linha Atleta.',
  },
  {
    id: 'faq-4',
    category: 'suplementacao',
    question: 'O que é creatina e para que serve?',
    answer: 'A creatina é um composto orgânico que atua como reserva energética imediata (fosfocreatina) no tecido muscular. Ela auxilia no ganho de força explosiva, resistência em séries intensas, hidratação celular e suporte na hipertrofia muscular.',
  },
  {
    id: 'faq-5',
    category: 'suplementacao',
    question: 'O que é Whey Protein e como ele ajuda no treino?',
    answer: 'O Whey Protein é a proteína do soro do leite concentrada de alto valor biológico e rápida absorção. Ele fornece aminoácidos essenciais necessários para reparar as microlesões musculares pós-exercício, promovendo recuperação e síntese proteica.',
  },
  {
    id: 'faq-6',
    category: 'suplementacao',
    question: 'O que é e para que serve o pré-treino?',
    answer: 'O suplemento pré-treino é formulado para fornecer energia, foco mental, alerta e auxílio na vasodilatação e resistência muscular, ajudando o atleta a render no ápice durante a sessão de treino.',
  },
  {
    id: 'faq-7',
    category: 'suplementacao',
    question: 'O que é o multivitamínico da Eskiva?',
    answer: 'É um complexo equilibrado com vitaminas essenciais (como A, Complexo B, C, D e E) e minerais que auxiliam na manutenção do sistema imunológico, produção de energia e combate ao estresse oxidativo decorrente dos treinos.',
  },
  {
    id: 'faq-8',
    category: 'produtos',
    question: 'A Eskiva possui produtos para quem pratica academia e artes marciais?',
    answer: 'Sim! Toda a formulação e linha de produtos da Eskiva é desenhada tanto para praticantes de musculação e crossfit quanto para atletas de lutas, esportes de combate, corrida e entusiastas de um estilo de vida ativo e saudável.',
  },
  {
    id: 'faq-9',
    category: 'cadastro',
    question: 'Como fazer o meu cadastro oficial na Eskiva?',
    answer: 'Você pode realizar seu cadastro oficial de forma rápida e segura através do link oficial: https://eskiva.link/NKgD5N. Após o cadastro, você tem acesso ao painel para acompanhar lançamentos, novidades e pedidos.',
  },
  {
    id: 'faq-10',
    category: 'cadastro',
    question: 'O que são os Pontos de Coleta da Eskiva pelo Brasil?',
    answer: 'A Fase 4 de expansão da Eskiva introduziu uma rede nacional de Pontos de Coleta parceiros em diversas regiões do Brasil, facilitando a retirada ágil de produtos e aproximando a marca de cada comunidade.',
  },
  {
    id: 'faq-11',
    category: 'marca',
    question: 'Onde posso acompanhar as novidades e vídeos da Eskiva?',
    answer: 'Acompanhe nosso canal oficial no YouTube (@eskivasuplementos-w6e), nosso Instagram oficial (@eskiva_suplementos.oficial) e TikTok (@eskivasuplementos2026).',
  },
  {
    id: 'faq-12',
    category: 'marca',
    question: 'Como entrar em contato com o suporte da Eskiva Suplementos?',
    answer: 'Nossa central de atendimento oficial atende pelo telefone/WhatsApp (67) 98106-5507 e pelo e-mail oficial suprimentos6922@gmail.com, de segunda a sexta-feira, das 9h às 17h.',
  },
];
