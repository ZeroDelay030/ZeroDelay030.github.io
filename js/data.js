// ============================================================
// ZERO DELAY — data.js
// Catálogo completo de plataformas y combos.
// Los precios están en COP (pesos colombianos).
// ============================================================

const ZD_CATALOG = [
  {
    id: 'netflix',
    name: 'Netflix',
    logo: 'assets/logos/netflix.png',
    variants: [
      { id: 'netflix-13', label: '13 días', price: 5900 },
      { id: 'netflix-27', label: '27 días', price: 9900 },
      { id: 'netflix-33', label: '33 días', price: 11900 },
      { id: 'netflix-27-intl', label: 'Internacional 27 días', price: 11900 }
    ]
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    logo: 'assets/logos/chatgpt.jpeg',
    variants: [
      { id: 'chatgpt-30', label: '30 días', price: 20000 }
    ]
  },
  {
    id: 'gemini',
    name: 'Gemini PRO',
    logo: 'assets/logos/gemini.jpg',
    variants: [
      { id: 'gemini-30', label: '30 días', price: 10000 },
      { id: 'gemini-3m', label: '3 meses', price: 28000 },
      { id: 'gemini-12m', label: '12 meses', price: 80000 }
    ]
  },
  {
    id: 'hbomax',
    name: 'MAX (HBO)',
    logo: 'assets/logos/hbomax.jpg',
    variants: [
      { id: 'hbomax-standard-generica', label: 'Pantalla Standard Genérica', price: 4000 },
      { id: 'hbomax-standard-original', label: 'Pantalla Standard Original', price: 4500 },
      { id: 'hbomax-platino-generica', label: 'Pantalla Platino Genérica', price: 5900 },
      { id: 'hbomax-platino-original', label: 'Pantalla Platino Original', price: 6900 },
      { id: 'hbomax-completa-generica', label: 'Cuenta Completa Genérica', price: 10000 },
      { id: 'hbomax-completa-original', label: 'Cuenta Completa Original', price: 12000 },
      { id: 'hbomax-completa-platino-generica', label: 'Cuenta Completa Platino Genérica', price: 15000 },
      { id: 'hbomax-completa-platino-original', label: 'Cuenta Completa Platino Original', price: 17000 }
    ]
  },
  {
    id: 'disney',
    name: 'Disney+',
    logo: 'assets/logos/disney.jpg',
    variants: [
      { id: 'disney-estandar-generica', label: 'Pantalla Estándar Genérica', price: 5000 },
      { id: 'disney-estandar-original', label: 'Pantalla Estándar Original', price: 6000 },
      { id: 'disney-premium-generica', label: 'Pantalla Premium Genérica', price: 8000 },
      { id: 'disney-premium-original', label: 'Pantalla Premium Original', price: 9000 },
      { id: 'disney-completa-estandar-generica', label: 'Cuenta Completa Estándar Genérica', price: 14900 },
      { id: 'disney-completa-estandar-original', label: 'Cuenta Completa Estándar Original', price: 16900 },
      { id: 'disney-completa-premium', label: 'Cuenta Completa Premium', price: 35900 }
    ]
  },
  {
    id: 'primevideo',
    name: 'Prime Video',
    logo: 'assets/logos/primevideo.jpg',
    variants: [
      { id: 'prime-generica', label: 'Pantalla Genérica', price: 4000 },
      { id: 'prime-original', label: 'Pantalla Original', price: 6000 },
      { id: 'prime-completa-generica', label: 'Cuenta Completa Genérica', price: 12900 },
      { id: 'prime-completa-original', label: 'Cuenta Completa Original', price: 15000 }
    ]
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    logo: 'assets/logos/canva.jpg',
    variants: [
      { id: 'canva-45', label: '45 días', price: 5000 },
      { id: 'canva-365', label: '365 días', price: 15000 }
    ]
  },
  {
    id: 'capcut',
    name: 'CapCut Pro',
    logo: 'assets/logos/capcut.png',
    variants: [
      { id: 'capcut-30', label: '1 dispositivo (30 días)', price: 20000 }
    ]
  },
  {
    id: 'spotify',
    name: 'Spotify Premium',
    logo: 'assets/logos/spotify.jpg',
    variants: [
      { id: 'spotify-1m', label: '1 mes', price: 6900 },
      { id: 'spotify-2m', label: '2 meses', price: 13500 }
    ]
  },
  {
    id: 'iptvgold',
    name: 'IPTV Gold',
    logo: 'assets/logos/iptv.png',
    variants: [
      { id: 'iptv-pantalla', label: 'Pantalla', price: 5900 },
      { id: 'iptv-completa', label: 'Cuenta Completa', price: 10900 }
    ]
  },
  {
    id: 'magistv',
    name: 'Magis TV',
    logo: 'assets/logos/magistv.png',
    variants: [
      { id: 'magistv-pantalla', label: 'Pantalla', price: 5000 },
      { id: 'magistv-completa', label: 'Cuenta Completa', price: 12900 }
    ]
  },
  {
    id: 'appletv',
    name: 'Apple TV+',
    logo: 'assets/logos/appletv.png',
    variants: [
      { id: 'appletv-pantalla', label: 'Pantalla', price: 8900 },
      { id: 'appletv-completa', label: 'Cuenta Completa', price: 15000 }
    ]
  },
  {
    id: 'office365',
    name: 'Microsoft Office 365',
    logo: 'assets/logos/office365.png',
    variants: [
      { id: 'office-12m-1d', label: '12 meses (1 dispositivo)', price: 20000 },
      { id: 'office-12m-5d', label: '12 meses (5 dispositivos)', price: 50000 }
    ]
  },
  {
    id: 'mubi',
    name: 'Mubi',
    logo: 'assets/logos/mubi.jpg',
    variants: [
      { id: 'mubi-pantalla', label: 'Pantalla', price: 7000 },
      { id: 'mubi-completa', label: 'Cuenta Completa', price: 10000 }
    ]
  },
  {
    id: 'directvgo',
    name: 'DirecTV GO',
    logo: 'assets/logos/directvgo.jpg',
    variants: [
      { id: 'directvgo-pantalla', label: 'Pantalla', price: 22900 }
    ]
  },
  {
    id: 'paramount',
    name: 'Paramount+',
    logo: 'assets/logos/paramount.png',
    variants: [
      { id: 'paramount-original', label: 'Pantalla Original', price: 7900 },
      { id: 'paramount-completa-original', label: 'Cuenta Completa Original', price: 19000 }
    ]
  },
  {
    id: 'universal',
    name: 'Universal+',
    logo: 'assets/logos/universal.jpg',
    variants: [
      { id: 'universal-pantalla', label: 'Pantalla', price: 9900 }
    ]
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    logo: 'assets/logos/crunchyroll.jpg',
    variants: [
      { id: 'crunchyroll-generica', label: 'Pantalla Genérica', price: 4500 },
      { id: 'crunchyroll-original', label: 'Pantalla Original', price: 5900 }
    ]
  },
  {
    id: 'telelatino',
    name: 'Tele Latino',
    logo: 'assets/logos/telelatino.jpg',
    variants: [
      { id: 'telelatino-pantalla', label: 'Pantalla', price: 8500 },
      { id: 'telelatino-completa', label: 'Cuenta Completa', price: 19500 }
    ]
  },
  {
    id: 'flujotv',
    name: 'Flujo TV',
    logo: 'assets/logos/flujotv.jpg',
    variants: [
      { id: 'flujotv-1d', label: '1 dispositivo', price: 8900 },
      { id: 'flujotv-completa', label: 'Completa (3 dispositivos)', price: 17900 }
    ]
  },
  {
    id: 'plex',
    name: 'Plex Premium',
    logo: 'assets/logos/plex.jpg',
    variants: [
      { id: 'plex-generica', label: 'Pantalla Genérica', price: 4000 },
      { id: 'plex-original', label: 'Pantalla Original', price: 5000 },
      { id: 'plex-completa', label: 'Cuenta Completa', price: 11900 }
    ]
  },
  {
    id: 'vix',
    name: 'ViX+',
    logo: 'assets/logos/vix.jpg',
    variants: [
      { id: 'vix-pantalla', label: 'Pantalla', price: 4000 },
      { id: 'vix-completa', label: 'Cuenta Completa', price: 11900 }
    ]
  },
  {
    id: 'duolingo',
    name: 'Duolingo Pro',
    logo: 'assets/logos/duolingo.jpg',
    variants: [
      { id: 'duolingo-30', label: '30 días', price: 6500 }
    ]
  }
];

const ZD_COMBOS = [
  { id: 'combo-finde', name: 'Series de Fin de Semana', price: 7900, image: 'assets/combos/finde.png', includes: ['Netflix 13 días', 'HBO Max Genérica'] },
  { id: 'combo-cine-indie', name: 'Cine Independiente', price: 8900, image: 'assets/combos/cine-independiente.png', includes: ['Mubi', 'Plex Premium'] },
  { id: 'combo-tv-basica', name: 'TV Básica', price: 9400, image: 'assets/combos/tv-basica.png', includes: ['Magis TV', 'IPTV Gold'] },
  { id: 'combo-anime', name: 'Anime', price: 12900, image: 'assets/combos/anime.png', includes: ['Crunchyroll Genérica', 'Prime Video Genérica', 'Netflix 13 días'] },
  { id: 'combo-series', name: 'Series', price: 12500, image: 'assets/combos/series.png', includes: ['Netflix 27 días', 'Prime Video Genérica'] },
  { id: 'combo-personal', name: 'Personal', price: 13900, image: 'assets/combos/personal.png', includes: ['Netflix 27 días', 'Disney+ Estándar Genérica'] },
  { id: 'combo-music-chill', name: 'Music & Chill', price: 14500, image: 'assets/combos/music-chill.png', includes: ['Netflix 13 días', 'Prime Video', 'Spotify Premium'] },
  { id: 'combo-tv-completa', name: 'TV Completa', price: 15000, image: 'assets/combos/tv-completa.png', includes: ['Magis TV', 'IPTV Gold', 'Tele Latino'] },
  { id: 'combo-clasico-personal', name: 'Clásico Personal', price: 16900, image: 'assets/combos/clasico-personal.png', includes: ['Netflix 27 días', 'Disney+ Estándar Genérica', 'Prime Video Pantalla Genérica'] },
  { id: 'combo-anime-plus-ultra', name: 'Anime Plus Ultra', price: 21900, image: 'assets/combos/anime-plus-ultra.png', includes: ['Crunchyroll Original', 'Netflix 27 días', 'Prime Video Original', 'HBO Max Platino Original'] },
  { id: 'combo-clasico-personal-pro', name: 'Clásico Personal Pro', price: 25000, image: 'assets/combos/clasico-personal-pro.png', includes: ['Netflix 27 días', 'Disney+ Premium Original', 'Prime Video Original', 'Spotify Premium'] },
  { id: 'combo-ia', name: 'IA', price: 25000, image: 'assets/combos/ia.png', includes: ['ChatGPT Plus', 'Gemini PRO'] },
  { id: 'combo-tv-completa-premium', name: 'TV Completa Premium', price: 26000, image: 'assets/combos/tv-completa-premium.png', includes: ['Magis TV', 'IPTV Gold', 'Tele Latino', 'Plex', 'Flujo TV'] },
  { id: 'combo-estudio-inteligente', name: 'Estudio Inteligente', price: 26000, image: 'assets/combos/estudio-inteligente.png', includes: ['ChatGPT Plus', 'Duolingo Pro', 'Canva 45 días'] },
  { id: 'combo-cinefilo-premium', name: 'Cinéfilo Premium', price: 28900, image: 'assets/combos/cinefilo-premium.png', includes: ['Netflix 33 días', 'Apple TV+', 'Universal+', 'HBO Max Platino Original'] },
  { id: 'combo-creador-contenido', name: 'Creador de Contenido', price: 30000, image: 'assets/combos/creador-contenido.png', includes: ['CapCut Pro', 'Canva 365 días'] },
  { id: 'combo-entretenimiento-familiar', name: 'Entretenimiento Familiar', price: 31900, image: 'assets/combos/entretenimiento-familiar.png', includes: ['Disney+ Completa Standard Original', 'HBO Max Completa Genérica', 'Apple TV+ Completa'] },
  { id: 'combo-premium-personal', name: 'Premium Personal', price: 32000, image: 'assets/combos/premium-personal.png', includes: ['Netflix 33 días', 'Disney+ Premium Original', 'HBO Max Platino Original', 'Prime Video Original', 'Spotify Premium'] },
  { id: 'combo-fan-deporte', name: 'Fan del Deporte', price: 33800, image: 'assets/combos/fan-deporte.png', includes: ['DirecTV GO', 'Paramount+ Original', 'Disney+ Premium Original'] },
  { id: 'combo-universitario-clasico', name: 'Universitario Clásico', price: 39900, image: 'assets/combos/universitario-clasico.png', includes: ['ChatGPT Plus', 'CapCut', 'Canva 45 días'] },
  { id: 'combo-zero-delay', name: 'ZERO DELAY', price: 47900, image: 'assets/combos/zero-delay.png', includes: ['Netflix 27 días', 'Disney+ Premium Original', 'Crunchyroll Original', 'Prime Video Original', 'Spotify Premium', 'ChatGPT Plus'] },
  { id: 'combo-universitario-premium', name: 'Universitario Premium', price: 58000, image: 'assets/combos/universitario-premium.png', includes: ['ChatGPT Plus', 'CapCut', 'Canva 365 días', 'Gemini PRO'] },
  { id: 'combo-premium-familiar', name: 'Premium Familiar', price: 69800, image: 'assets/combos/premium-familiar.png', includes: ['Disney+ Completa Original Premium', 'HBO Max Completa Original Platino', 'Prime Video Completa', 'Netflix 33 días'] }
];
