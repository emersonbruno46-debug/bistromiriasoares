export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface OpeningHour {
  days: string;
  hours: string;
}

export const SITE_CONTENT = {
  brand: {
    name: 'Bistrô Miriã Soares',
    city: 'Taiobeiras',
    state: 'MG',
    fullLocation: 'Taiobeiras/MG',
    address: 'Avenida da Liberdade, 389',
    instagramUrl: 'https://www.instagram.com/miriasoaresbistro/',
    instagramHandle: '@miriasoaresbistro',
    mapsUrl: 'https://maps.app.goo.gl/jbnngryGpdjD4dyG7',
    logoSvg: '/assets/images/logo-bistro-miria-soares.svg',
  },
  nav: [
    { label: 'Sabores', href: '#sabores' },
    { label: 'A casa', href: '#bistro' },
    { label: 'Visite-nos', href: '#visite' },
  ],
  hero: {
    eyebrow: 'BISTRÔ EM TAIOBEIRAS',
    h1: 'Massas, risotos e boas conversas.',
    description: 'Conheça os sabores e os cantos do Bistrô Miriã Soares.',
    primaryCta: 'Explorar sabores',
    secondaryCta: 'Como chegar',
    bottomLocation: 'Avenida da Liberdade, 389 · Taiobeiras/MG',
    image: {
      src: '/assets/images/entrada-vertical.webp',
      alt: 'Entrada azul em arco do Bistrô Miriã Soares com portas abertas convidativas',
    },
  },
  flavors: {
    id: 'sabores',
    eyebrow: 'À MESA',
    h2: 'Escolha o seu próximo sabor.',
    vitrineImage: {
      src: '/assets/images/vitrine-horizontal.webp',
      alt: 'Vitrine iluminada apresentando as opções gastronômicas do bistrô',
    },
    categories: [
      'Massas',
      'Risotos',
      'Sobremesas',
      'Pratos individuais',
    ],
    note: 'Veja as novidades e as opções da casa no Instagram.',
    cta: 'Explorar sabores',
  },
  tribute: {
    id: 'bistro',
    h2: 'Um nome, uma homenagem.',
    text: 'Uma homenagem de filho para mãe. O bistrô leva o nome de Miriã Soares.',
    image: {
      src: '/assets/images/retratos-vertical.webp',
      alt: 'Salão do bistrô decorado com quadros e memória afetiva',
    },
  },
  space: {
    id: 'espaco',
    h2: 'Entre. A casa é sua.',
    gallery: [
      {
        id: 'patio',
        src: '/assets/images/patio-horizontal.webp',
        alt: 'Pátio arborizado do bistrô com iluminação suave e mesas de madeira',
        caption: 'O pátio',
      },
      {
        id: 'interior',
        src: '/assets/images/interior-vinho-vertical.webp',
        alt: 'Interior com parede tom vinho, estofado e louças decorativas',
        caption: 'Por dentro do bistrô',
      },
    ] as GalleryItem[],
  },
  visit: {
    id: 'visite',
    h2: 'Nos vemos à mesa.',
    address: 'Avenida da Liberdade, 389',
    city: 'Taiobeiras/MG',
    hours: [
      { days: 'Segunda', hours: '16h às 23h' },
      { days: 'Terça e quarta', hours: '14h às 21h' },
      { days: 'Quinta a sábado', hours: '14h às 23h' },
      { days: 'Domingo', hours: 'Fechado' },
    ] as OpeningHour[],
    primaryCta: 'Como chegar',
    secondaryCta: 'Visitar Instagram',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Bistrô Miriã Soares. Todos os direitos reservados.`,
  },
};
