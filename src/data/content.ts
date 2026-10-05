export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category?: string;
  ratio?: 'vertical' | 'horizontal';
}

export interface OpeningHour {
  days: string;
  hours: string;
}

export const SITE_CONTENT = {
  brand: {
    name: 'Bistrô Miriã Soares',
    tagline: 'Uma pausa para saborear.',
    city: 'Taiobeiras',
    state: 'MG',
    fullLocation: 'Taiobeiras · Minas Gerais',
    address: 'Avenida da Liberdade, 389',
    instagramUrl: 'https://www.instagram.com/miriasoaresbistro/',
    instagramHandle: '@miriasoaresbistro',
    mapsUrl: 'https://maps.app.goo.gl/jbnngryGpdjD4dyG7',
    logoSvg: '/assets/images/logo-bistro-miria-soares.svg',
  },
  nav: [
    { label: 'O bistrô', href: '#bistro' },
    { label: 'Sabores', href: '#sabores' },
    { label: 'O espaço', href: '#espaco' },
    { label: 'Visite-nos', href: '#visite' },
  ],
  hero: {
    eyebrow: 'BISTRÔ MIRIÃ SOARES · TAIOBEIRAS/MG',
    h1: 'Uma pausa para saborear.',
    description: 'Massas, risotos, sobremesas e um espaço para aproveitar com calma.',
    primaryCta: 'Conheça o espaço',
    secondaryCta: 'Como chegar',
    categories: ['Massas', 'Risotos', 'Sobremesas', 'Pratos individuais'],
    images: {
      desktop: '/assets/images/patio-horizontal.webp',
      mobile: '/assets/images/patio-vertical.webp',
      alt: 'Pátio acolhedor do Bistrô Miriã Soares sob a sombra de uma árvore madura com mesas de madeira',
    },
  },
  about: {
    id: 'bistro',
    h2: 'Um nome que carrega afeto.',
    text: 'O nome do bistrô homenageia a mãe do proprietário: Miriã Soares. Uma homenagem que faz parte da identidade da casa.',
    image: {
      src: '/assets/images/interior-vinho-vertical.webp',
      alt: 'Ambiente aconchegante do bistrô com parede em tom vinho, louças decorativas e porta azul aberta para o pátio',
    },
  },
  flavors: {
    id: 'sabores',
    eyebrow: 'À MESA',
    h2: 'Sabores para a sua pausa.',
    vitrineImage: {
      desktop: '/assets/images/vitrine-horizontal.webp',
      mobile: '/assets/images/vitrine-vertical.webp',
      alt: 'Vitrine e balcão iluminado apresentando as opções do bistrô',
    },
    items: [
      {
        number: '01',
        title: 'Massas',
        description: 'Receitas tradicionais com ingredientes selecionados.',
      },
      {
        number: '02',
        title: 'Risotos',
        description: 'Cremosos, equilibrados e cheios de sabor.',
      },
      {
        number: '03',
        title: 'Sobremesas',
        description: 'O toque doce para completar a sua pausa.',
      },
      {
        number: '04',
        title: 'Pratos individuais',
        description: 'Opções especiais para o seu dia a dia.',
      },
    ],
    note: 'Conheça as opções da casa pelo nosso Instagram.',
    cta: 'Explorar sabores',
  },
  space: {
    id: 'espaco',
    h2: 'Cada canto, um convite para ficar.',
    text: 'Conheça os detalhes do nosso espaço.',
    gallery: [
      {
        id: 'retratos-1',
        src: '/assets/images/retratos-vertical.webp',
        alt: 'Salão interno com mesas de mármore e parede decorada com quadros de memórias',
        caption: 'Memórias nas paredes',
        ratio: 'vertical',
      },
      {
        id: 'interior-1',
        src: '/assets/images/interior-vinho-vertical.webp',
        alt: 'Ambiente interno com parede vinho, estofado capitonê e pratos ornamentais decorativos',
        caption: 'Detalhes da casa',
        ratio: 'vertical',
      },
      {
        id: 'patio-1',
        src: '/assets/images/patio-horizontal.webp',
        alt: 'Pátio arborizado com iluminação acolhedora e mesas ao ar livre',
        caption: 'Pátio ao ar livre',
        ratio: 'horizontal',
      },
      {
        id: 'entrada-1',
        src: '/assets/images/entrada-vertical.webp',
        alt: 'Fachada branca com imponente porta em arco azul convidando para a entrada',
        caption: 'Entrada azul do bistrô',
        ratio: 'vertical',
      },
      {
        id: 'retratos-2',
        src: '/assets/images/retratos-horizontal.webp',
        alt: 'Visão ampla do salão interno e composição de quadros históricos',
        caption: 'Salão dos retratos',
        ratio: 'horizontal',
      },
      {
        id: 'interior-2',
        src: '/assets/images/interior-vinho-horizontal.webp',
        alt: 'Visão horizontal do espaço interno com parede tom vinho e porta azul',
        caption: 'Interior e pátio',
        ratio: 'horizontal',
      },
    ] as GalleryItem[],
  },
  visit: {
    id: 'visite',
    eyebrow: 'TAIOBEIRAS · MINAS GERAIS',
    h2: 'Venha conhecer o bistrô.',
    image: {
      src: '/assets/images/entrada-vertical.webp',
      alt: 'Entrada em arco azul com portas abertas e vasos decorativos',
    },
    hours: [
      { days: 'Segunda-feira', hours: '16h às 23h' },
      { days: 'Terça e quarta', hours: '14h às 21h' },
      { days: 'Quinta a sábado', hours: '14h às 23h' },
      { days: 'Domingo', hours: 'Fechado' },
    ] as OpeningHour[],
    primaryCta: 'Como chegar',
    secondaryCta: 'Fale pelo Instagram',
  },
  closing: {
    title: 'Sua próxima pausa tem endereço.',
    text: 'Acompanhe as novidades do Bistrô Miriã Soares.',
    cta: 'Visitar Instagram',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Bistrô Miriã Soares. Todos os direitos reservados.`,
  },
};
