export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
}

export interface OpeningHour {
  label: string;
  hours: string;
  /** Dias da semana (0 = domingo) */
  days: number[];
  /** Abertura e fechamento em horas; null quando fechado */
  open: [number, number] | null;
}

const img = (name: string) => `/assets/images/${name}.webp`;

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
    eyebrow: 'Bistrô em Taiobeiras',
    h1: 'Massas, risotos e boas conversas.',
    description: 'Conheça os sabores e os cantos do Bistrô Miriã Soares.',
    primaryCta: 'Explorar sabores',
    secondaryCta: 'Como chegar',
    bottomLocation: 'Avenida da Liberdade, 389 · Taiobeiras/MG',
    image: {
      src: img('entrada-vertical'),
      alt: 'Entrada azul em arco do Bistrô Miriã Soares com portas abertas convidativas',
    },
  },
  flavors: {
    id: 'sabores',
    eyebrow: 'À mesa',
    h2: 'Escolha o seu próximo sabor.',
    vitrineImage: {
      src: img('vitrine-horizontal'),
      alt: 'Vitrine iluminada apresentando as opções gastronômicas do bistrô',
    },
    categories: ['Massas', 'Risotos', 'Sobremesas', 'Pratos individuais'],
    note: 'Veja as novidades e as opções da casa no Instagram.',
    cta: 'Ver no Instagram',
  },
  tribute: {
    id: 'bistro',
    h2: 'Um nome, uma homenagem.',
    text: 'Uma homenagem de filho para mãe. O bistrô leva o nome de Miriã Soares.',
    image: {
      src: img('retratos-horizontal'),
      alt: 'Salão do bistrô decorado com quadros e memória afetiva',
    },
  },
  space: {
    id: 'espaco',
    h2: 'Entre. A casa é sua.',
    gallery: [
      {
        id: 'patio',
        src: img('patio-horizontal'),
        alt: 'Pátio arborizado do bistrô com iluminação suave e mesas de madeira',
        caption: 'O pátio',
      },
      {
        id: 'interior',
        src: img('interior-vinho-vertical'),
        alt: 'Interior com parede tom vinho, estofado e louças decorativas',
        caption: 'Por dentro do bistrô',
        tall: true,
      },
      {
        id: 'entrada',
        src: img('entrada-horizontal'),
        alt: 'Entrada azul em arco do bistrô vista de frente',
        caption: 'A porta azul',
      },
      {
        id: 'sombra',
        src: img('patio-vertical'),
        alt: 'Pátio do bistrô sob uma árvore madura',
        caption: 'Sob a árvore',
        tall: true,
      },
      {
        id: 'pratos',
        src: img('interior-vinho-horizontal'),
        alt: 'Canto do bistrô com pratos decorativos na parede',
        caption: 'Pratos na parede',
      },
      {
        id: 'vitrine',
        src: img('vitrine-vertical'),
        alt: 'Vitrine iluminada do bistrô',
        caption: 'A vitrine',
        tall: true,
      },
      {
        id: 'retratos',
        src: img('retratos-vertical'),
        alt: 'Salão do bistrô com retratos históricos nas paredes',
        caption: 'Os retratos',
        tall: true,
      },
    ] as GalleryItem[],
  },
  visit: {
    id: 'visite',
    h2: 'Nos vemos à mesa.',
    address: 'Avenida da Liberdade, 389',
    city: 'Taiobeiras/MG',
    hours: [
      { label: 'Segunda', hours: '16h às 23h', days: [1], open: [16, 23] },
      { label: 'Terça e quarta', hours: '14h às 21h', days: [2, 3], open: [14, 21] },
      { label: 'Quinta a sábado', hours: '14h às 23h', days: [4, 5, 6], open: [14, 23] },
      { label: 'Domingo', hours: 'Fechado', days: [0], open: null },
    ] as OpeningHour[],
    primaryCta: 'Como chegar',
    secondaryCta: 'Visitar Instagram',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Bistrô Miriã Soares. Todos os direitos reservados.`,
  },
};
