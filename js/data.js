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
      { id: 'canva-365', label: '365 días', price: 15000 },
      { id: 'canva-correo-30', label: 'Al correo personal 30 días', price: 6500 }
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
      { id: 'spotify-1m', label: '1 mes', price: 9000 },
      { id: 'spotify-2m', label: '2 meses', price: 17000 },
      { id: 'spotify-3m', label: '3 meses', price: 25000 }
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
  },
  {
    id: 'youtube',
    name: 'YouTube Premium',
    logo: 'assets/logos/youtube.png',
    variants: [
      { id: 'youtube-30', label: '30 días', price: 13900 }
    ]
  }
];

const ZD_COMBOS = [
  { id: 'combo-finde', name: 'Series de Fin de Semana', price: 7900, image: 'assets/combos/finde.jpg', includes: ['Netflix 13 días', 'HBO Max Genérica'] },
  { id: 'combo-cine-indie', name: 'Cine Independiente', price: 8900, image: 'assets/combos/cine-independiente.jpg', includes: ['Mubi', 'Plex Premium'] },
  { id: 'combo-tv-basica', name: 'TV Básica', price: 9400, image: 'assets/combos/tv-basica.jpg', includes: ['Magis TV', 'IPTV Gold'] },
  { id: 'combo-anime', name: 'Anime', price: 12900, image: 'assets/combos/anime.jpg', includes: ['Crunchyroll Genérica', 'Prime Video Genérica', 'Netflix 13 días'] },
  { id: 'combo-series', name: 'Series', price: 12500, image: 'assets/combos/series.jpg', includes: ['Netflix 27 días', 'Prime Video Genérica'] },
  { id: 'combo-personal', name: 'Personal', price: 13900, image: 'assets/combos/personal.jpg', includes: ['Netflix 27 días', 'Disney+ Estándar Genérica'] },
  { id: 'combo-music-chill', name: 'Music & Chill', price: 15600, image: 'assets/combos/music-chill.jpg', includes: ['Netflix 13 días', 'Prime Video', 'Spotify Premium'] },
  { id: 'combo-tv-completa', name: 'TV Completa', price: 15000, image: 'assets/combos/tv-completa.jpg', includes: ['Magis TV', 'IPTV Gold', 'Tele Latino'] },
  { id: 'combo-clasico-personal', name: 'Clásico Personal', price: 16900, image: 'assets/combos/clasico-personal.jpg', includes: ['Netflix 27 días', 'Disney+ Estándar Genérica', 'Prime Video Pantalla Genérica'] },
  { id: 'combo-anime-plus-ultra', name: 'Anime Plus Ultra', price: 21900, image: 'assets/combos/anime-plus-ultra.jpg', includes: ['Crunchyroll Original', 'Netflix 27 días', 'Prime Video Original', 'HBO Max Platino Original'] },
  { id: 'combo-clasico-personal-pro', name: 'Clásico Personal Pro', price: 26100, image: 'assets/combos/clasico-personal-pro.jpg', includes: ['Netflix 27 días', 'Disney+ Premium Original', 'Prime Video Original', 'Spotify Premium'] },
  { id: 'combo-ia', name: 'IA', price: 25000, image: 'assets/combos/ia.jpg', includes: ['ChatGPT Plus', 'Gemini PRO'] },
  { id: 'combo-tv-completa-premium', name: 'TV Completa Premium', price: 26000, image: 'assets/combos/tv-completa-premium.jpg', includes: ['Magis TV', 'IPTV Gold', 'Tele Latino', 'Plex', 'Flujo TV'] },
  { id: 'combo-estudio-inteligente', name: 'Estudio Inteligente', price: 26000, image: 'assets/combos/estudio-inteligente.jpg', includes: ['ChatGPT Plus', 'Duolingo Pro', 'Canva 45 días'] },
  { id: 'combo-cinefilo-premium', name: 'Cinéfilo Premium', price: 28900, image: 'assets/combos/cinefilo-premium.jpg', includes: ['Netflix 33 días', 'Apple TV+', 'Universal+', 'HBO Max Platino Original'] },
  { id: 'combo-creador-contenido', name: 'Creador de Contenido', price: 30000, image: 'assets/combos/creador-contenido.jpg', includes: ['CapCut Pro', 'Canva 365 días'] },
  { id: 'combo-entretenimiento-familiar', name: 'Entretenimiento Familiar', price: 31900, image: 'assets/combos/entretenimiento-familiar.jpg', includes: ['Disney+ Completa Standard Original', 'HBO Max Completa Genérica', 'Apple TV+ Completa'] },
  { id: 'combo-premium-personal', name: 'Premium Personal', price: 33100, image: 'assets/combos/premium-personal.jpg', includes: ['Netflix 33 días', 'Disney+ Premium Original', 'HBO Max Platino Original', 'Prime Video Original', 'Spotify Premium'] },
  { id: 'combo-fan-deporte', name: 'Fan del Deporte', price: 33800, image: 'assets/combos/fan-deporte.jpg', includes: ['DirecTV GO', 'Paramount+ Original', 'Disney+ Premium Original'] },
  { id: 'combo-universitario-clasico', name: 'Universitario Clásico', price: 39900, image: 'assets/combos/universitario-clasico.jpg', includes: ['ChatGPT Plus', 'CapCut', 'Canva 45 días'] },
  { id: 'combo-zero-delay', name: 'ZERO DELAY', price: 49000, image: 'assets/combos/zero-delay.jpg', includes: ['Netflix 27 días', 'Disney+ Premium Original', 'Crunchyroll Original', 'Prime Video Original', 'Spotify Premium', 'ChatGPT Plus'] },
  { id: 'combo-universitario-premium', name: 'Universitario Premium', price: 58000, image: 'assets/combos/universitario-premium.jpg', includes: ['ChatGPT Plus', 'CapCut', 'Canva 365 días', 'Gemini PRO'] },
  { id: 'combo-premium-familiar', name: 'Premium Familiar', price: 69800, image: 'assets/combos/premium-familiar.jpg', includes: ['Disney+ Completa Original Premium', 'HBO Max Completa Original Platino', 'Prime Video Completa', 'Netflix 33 días'] },
  { id: 'combo-vieja-escuela', name: 'Vieja Escuela', price: 24800, image: 'assets/combos/vieja-escuela.jpg', includes: ['YouTube Premium', 'Netflix 27 días', 'Disney+ Pantalla Estándar Original'] }
];

/* ============================================================
   PRODUCTOS ZERO DELAY — catálogo de productos físicos
   (envío a domicilio, categorías propias). Cada producto:
   - category: slug interno (debe coincidir con los data-category
     usados en el menú de Categorías)
   - categoryLabel: nombre visible de la categoría
   - price: precio normal; salePrice: precio en oferta (opcional).
     Si hay salePrice, price se muestra tachado.
   - ref: código de referencia de 5 dígitos, único por producto —
     NUNCA repetir un ref ya usado en este archivo al agregar productos
   - stock: unidades disponibles — dato interno, NO se muestra en
     ningún lado de la página (ni listado ni ficha de producto)
   ============================================================ */
const ZD_PRODUCTS = [
  {
    id: 'perfume-jpg-le-male-parfum',
    name: '1.1 HOMBRE JEAN PAUL GAULTIER',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '84213',
    price: 110000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/jpg-le-male-parfum.jpg',
    description: 'JEAN PAUL GAULTIER – LE MALE LE PARFUM es una fragancia masculina intensa, elegante y seductora. Combina cardamomo especiado, lavanda aromática y vainilla dulce con notas amaderadas, creando un aroma cálido y sofisticado.\n\nEs ideal para noches, eventos especiales o climas frescos, gracias a su larga duración y aroma envolvente.'
  },
  {
    id: 'perfume-jpg-le-male-elixir',
    name: '1.1 HOMBRE JEAN PAUL ELIXIR',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '93810',
    price: 145000,
    salePrice: 99000,
    stock: 10,
    image: 'assets/products/jpg-le-male-elixir.jpg',
    description: 'Su aroma es dulce amaderada con notas de vainilla, lavanda y miel. Inicia con una salida sensual de haba tonka tropical que revitaliza los sentidos. Se fusiona con un corazón aromático de lavanda y menta, para finalizar con un fondo de benjuí (resina aromática), vainilla y miel que le confiere una personalidad magnética y pasional.\n\nUn perfume intenso, sexy y ardiente, para hombres que quieran cautivar y enamorar a su paso.'
  },
  {
    id: 'perfume-moschino-toy-boy',
    name: '1.1 HOMBRE MOSCHINO TOY BOY',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '24592',
    price: 120000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/moschino-toy-boy.jpg',
    description: 'Es cautivador sentir aromas como los de la pimienta rosa, pera y bergamota. Es profundo reconocer la rosa, magnolia y lirio. Y es necesario apreciar el sándalo, ámbar y sylkolide.\n\nDebes pensarlo antes de sentirte irresistible como Toy Boy.'
  },
  {
    id: 'perfume-moschino-toy-2',
    name: '1.1 DAMA MOSCHINO TOY 2 A1',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '13278',
    price: 150000,
    salePrice: 95000,
    stock: 10,
    image: 'assets/products/moschino-toy-2.jpg',
    description: 'Descubre Moschino Toy 2, un Eau de Parfum (EDP) que redefine la fragancia femenina. Su frasco único en forma de oso se convierte en un símbolo de diversión y elegancia. Esta fragancia floral evoca un bouquet sofisticado, perfecto para la mujer moderna.\n\nIdeal para el día y la noche, Moschino Toy 2 es tu compañero perfecto en cada aventura.'
  },
  {
    id: 'perfume-hugo-boss-bottled-night',
    name: 'HUGO BOSS 1.1 BOTTLE NIGHT',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '52445',
    price: 110000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/hugo-boss-bottled-night.jpg',
    description: 'El perfume que refleja elegancia, poder y seducción masculina. Diseñado para el hombre seguro de sí mismo que conquista de día y deslumbra de noche. Una mezcla intensa de maderas nobles, almizcle y lavanda, con un toque moderno que deja una huella inolvidable.\n\nIdeal para: cenas, reuniones, noches especiales o simplemente para destacar en cualquier momento.\n\nPresentación oficial HUGO BOSS 100 ml, con su caja y envase de vidrio original.\n\nHUGO BOSS BOTTLED NIGHT: el poder de la noche en una fragancia.'
  },
  {
    id: 'perfume-hugo-boss-bottled',
    name: 'HUGO BOSS 1.1 BOTTLED',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '29772',
    price: 59000,
    stock: 10,
    image: 'assets/products/hugo-boss-bottled.jpg',
    description: 'La fragancia que representa éxito, elegancia y poder masculino. Ideal para el hombre decidido, sofisticado y con estilo propio. Aroma con notas de manzana fresca, canela y maderas nobles, creando un equilibrio perfecto entre lo clásico y lo moderno.\n\nIdeal para: uso diario, reuniones, eventos o noches especiales.\n\nPresentación oficial de 100 ml, con su caja y envase de vidrio original HUGO BOSS 1.1.\n\nHuele a hombre exitoso, limpio y elegante, con un toque dulce y amaderado que llama la atención sin ser exagerado.'
  },
  {
    id: 'perfume-hugo-boss-the-scent-for',
    name: 'DAMA 1.1 HUGO BOSS – THE SCENT FOR',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '61750',
    price: 70000,
    stock: 10,
    image: 'assets/products/hugo-boss-the-scent-for.jpg',
    description: 'The Scent for Women tiene un aroma elegante, femenino y seductor.\n\nNotas principales del aroma:\nDurazno y fresia — dulce, jugoso y suave.\nFlor de osmanto — un toque floral cálido con matices afrutados.\nCacao tostado — aporta sensualidad y un final cremoso, ligeramente dulce.'
  },
  {
    id: 'perfume-polo-red',
    name: '1.1 POLO RED HOMBRE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '95319',
    price: 100000,
    salePrice: 60000,
    stock: 10,
    image: 'assets/products/polo-red.jpg',
    description: 'Polo Red combina notas cítricas, amaderadas y especiadas que generan una fragancia intensa, moderna y adictiva, perfecta para hombres seguros, activos y con estilo.'
  },
  {
    id: 'perfume-polo-blue',
    name: '1.1 POLO BLUE HOMBRE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '16328',
    price: 100000,
    salePrice: 60000,
    stock: 10,
    image: 'assets/products/polo-blue.jpg',
    description: 'Si quieres un perfume que llame la atención y te haga destacar en cualquier lugar… este es el indicado.'
  },
  {
    id: 'perfume-tommy-hilfiger',
    name: '1.1 HOMBRE TOMMY HILFIGER',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '19494',
    price: 80000,
    stock: 10,
    image: 'assets/products/tommy-hilfiger.jpg',
    description: 'Es una fragancia de la familia olfativa Cítrica Aromática para Hombres.'
  },
  {
    id: 'perfume-dolce-gabbana-k',
    name: '1.1 HOMBRE DOLCE & GABBANA K',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '80239',
    price: 80000,
    stock: 10,
    image: 'assets/products/dolce-gabbana-k.jpg',
    description: 'Familia olfativa: amaderado cítrico.'
  },
  {
    id: 'perfume-versace-bright-crystal-absolu',
    name: '1.1 MUJER VERSACE BRIGHT CRYSTAL ABSOLOU',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '22337',
    price: 70000,
    stock: 10,
    image: 'assets/products/versace-bright-crystal-absolu.jpg',
    description: 'Aroma intenso y duradero.\n\nPresentación premium con frasco rosado tipo cristal.\n\nIdeal para uso diario o para ocasiones especiales.\n\nRegalo perfecto por su diseño y elegancia.'
  },
  {
    id: 'perfume-lacoste-blanc',
    name: '1.1 HOMBRE LACOSTE BLANC',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '57931',
    price: 110000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/lacoste-blanc.jpg',
    description: 'Un aroma limpio con toques cítricos, florales suaves y un fondo amaderado que transmite clase y frescura.'
  },
  {
    id: 'perfume-lacoste-black',
    name: '1.1 HOMBRE LACOSTE BLACK',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '86387',
    price: 110000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/lacoste-black.jpg',
    description: 'Esta es una fragancia de contrastes intrigantes. ¿A qué huele? Imagina que tomas una rebanada de sandía súper fresca y acuática y la derrites sobre una barra de chocolate negro y amargo. Es una combinación extraña pero adictiva: es fresca y oscura al mismo tiempo.\n\nLas hierbas como la albahaca le dan un toque verde y limpio, mientras que el fondo de cachemira lo hace sentir cálido y acogedor. Es el perfume de un hombre misterioso que es a la vez deportista y elegante.'
  },
  {
    id: 'perfume-lacoste-essential',
    name: '1.1 HOMBRE LACOSTE ESSENTIAL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '17602',
    price: 149900,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/lacoste-essential.jpg',
    description: 'Essential Lacoste de Lacoste Fragrances es una fragancia de la familia olfativa Amaderada Aromática para Hombres, lanzada en 2008. La nariz detrás de esta fragancia es Laurent Bruyère.\n\nNotas de salida: bergamota, naranja tangerina y casia.\nNotas de corazón: rosa y pimienta.\nNotas de fondo: pachulí y sándalo.'
  },
  {
    id: 'perfume-hugo-boss-red',
    name: '1.1 HOMBRE HUGO BOSS RED',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '62950',
    price: 90000,
    salePrice: 69000,
    stock: 10,
    image: 'assets/products/hugo-boss-red.jpg',
    description: 'Hugo Boss Red es un perfume dinámico que equilibra frío y calor. Dos toques contrapuestos crean la composición principal de este perfume que huye de lo convencional.\n\nEl toque de frescor sólido combina en este perfume una nota inicial de pomelo con una nota media de ruibarbo. Por el contrario, el toque de calor líquido incluye cálidas notas de cedro y de ámbar dorado.'
  },
  {
    id: 'perfume-invictus-victory-elixir',
    name: '1.1 HOMBRE INVICTUS PACO RABANNE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '59906',
    price: 149000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/invictus-victory-elixir.jpg',
    description: 'Invictus Victory Elixir encarna la esencia del triunfo con una fragancia audaz y magnética. Desde el primer instante, la frescura vibrante de la pimienta negra y la naranja amarga despiertan los sentidos, dando paso a un corazón refinado de lavanda e incienso, que aporta una profundidad aromática única.\n\nEn su base, la dulzura envolvente de la vainilla y el haba tonka se fusiona con la calidez intensa del ámbar negro, creando un aroma seductor y duradero. Este elixir está diseñado para hombres que enfrentan los desafíos con valentía y determinación.'
  },
  {
    id: 'perfume-one-million-lucky',
    name: '1.1 HOMBRE ONE MILLION LUCKY DE PACO RABANNE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '36224',
    price: 120000,
    salePrice: 72900,
    stock: 10,
    image: 'assets/products/one-million-lucky.jpg',
    description: 'Amaderados, dulces, Eau de Toilette. Un perfume Paco Rabanne para el día, ideal en otoño e invierno — uno de los perfumes de diseñador más reconocidos de la perfumería para ellos.'
  },
  {
    id: 'perfume-polo-black',
    name: '1.1 HOMBRE POLO BLACK',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '88569',
    price: 130000,
    salePrice: 84000,
    stock: 10,
    image: 'assets/products/polo-black.jpg',
    description: 'POLO BLACK – Ralph Lauren (125 ml). Un perfume masculino elegante, moderno y sofisticado. Su aroma combina notas frescas y vibrantes con un toque amaderado que lo hace ideal para cualquier ocasión, especialmente de noche.\n\nNotas destacadas — Salida: mango helado, limón y mandarina. Corazón: hojas de pachulí, salvia y geranio. Fondo: sándalo, tonka y almizcle.\n\nUn aroma sensual, limpio y varonil, perfecto para hombres seguros, con estilo y que quieren destacar sin exagerar. Presentación: botella negra elegante con acabado brillante y el icónico jinete de Polo, en caja negra premium.'
  },
  {
    id: 'perfume-spicebomb',
    name: '1.1 HOMBRE SPICEBOMB',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '33435',
    price: 70000,
    stock: 10,
    image: 'assets/products/spicebomb.jpg',
    description: 'Spicebomb de Viktor&Rolf es una fragancia de la familia olfativa Amaderada Especiada para Hombres, lanzada en 2012. La nariz detrás de esta fragancia es Olivier Polge.\n\nNotas de salida: pimienta rosa, elemí, bergamota y toronja (pomelo).\nNotas de corazón: canela, pimentón dulce (paprika) y azafrán.\nNotas de fondo: tabaco, cuero y vetiver.'
  },
  {
    id: 'perfume-one-million',
    name: '1.1 HOMBRE ONE MILLION DE PACO RABANNE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '40180',
    price: 110000,
    salePrice: 79000,
    stock: 10,
    image: 'assets/products/one-million.jpg',
    description: 'El perfume 1 Million Eau de Toilette de Paco Rabanne es mucho más que una fragancia: es una declaración de poder, lujo y magnetismo masculino. Desde su lanzamiento en 2008, se ha convertido en un ícono mundial de la perfumería gracias a su aroma audaz, seductor y absolutamente inolvidable.\n\nAbre con un estallido fresco y chispeante de pomelo, menta y mandarina roja. En su corazón, una fusión opulenta de canela, esencias especiadas y rosa aporta sensualidad y riqueza. La base combina cuero, ámbar, madera blanca y pachulí, creando una estela cálida, potente y duradera.\n\nEl frasco, en forma de lingote de oro, refleja el espíritu de lujo y éxito que define a One Million. Ideal para la noche, citas, eventos especiales o cualquier ocasión en la que quieras impactar y dejar huella.'
  },
  {
    id: 'perfume-la-vie-est-belle',
    name: '1.1 DAMA LA VIE EST BELLE LANCOME',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '42562',
    price: 60000,
    stock: 10,
    image: 'assets/products/la-vie-est-belle.jpg',
    description: 'La Vie Est Belle de Lancôme 100 ml Eau de Parfum para mujer irradia una sofisticación inconfundible. Fusiona la elegancia del iris con la intensidad del pachulí y la dulzura envolvente de notas gourmand, logrando una fragancia de profundidad y carácter único.\n\nPensada para mujeres entre 25 y 60 años, su composición revela una interpretación moderna y luminosa de la perfumería oriental, con ingredientes naturales de la más alta calidad.'
  },
  {
    id: 'perfume-invictus-eau-de-toilette',
    name: '1.1 HOMBRE INVICTUS EAU DE TOILETTE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '27464',
    price: 75000,
    stock: 10,
    image: 'assets/products/invictus-eau-de-toilette.jpg',
    description: 'Invictus, de Paco Rabanne, es una creación fresca y deportiva en comparación con los demás perfumes de la casa. Invictus, que en latín significa "invencible", representa poder, dinamismo y energía.\n\nSe inicia con pomelo fresco y un acorde marino que da paso a un corazón aromático de laurel y jazmín Hedione, con un fondo amaderado de madera de guayaco, pachulí, musgo de roble y ámbar gris. El frasco tiene la forma de un trofeo.'
  },
  {
    id: 'perfume-ch-men',
    name: '1.1 HOMBRE CH MEN',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '21348',
    price: 100000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/ch-men.jpg',
    description: 'CH Men de Carolina Herrera es una fragancia de la familia olfativa Ámbar Especiada para Hombres, lanzada en 2009.\n\nNotas de salida: hierba, bergamota y toronja (pomelo).\nNotas de corazón: notas amaderadas, nuez moscada, violeta, azafrán y jazmín.\nNotas de fondo: azúcar, cuero, vainilla, gamuza, ámbar, madera de cachemira, sándalo, musgo de roble y vetiver.'
  },
  {
    id: 'perfume-good-girl-blush',
    name: '1.1 DAMA GOOD GIRL BLUSH ROSA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '42918',
    price: 120000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/good-girl-blush.jpg',
    description: 'Good Girl Blush es una fragancia que combina notas florales y frutales, creando una sinfonía olfativa irresistible.\n\nLas notas de salida de lichi y pomelo rosado envuelven en una frescura delicada, mientras que las notas de corazón de jazmín sambac y rosa búlgara aportan un toque floral elegante y sofisticado. Las notas de fondo de haba tonka y madera de sándalo brindan calidez y sensualidad a esta fragancia única.'
  },
  {
    id: 'perfume-carolina-herrera-ch',
    name: '1.1 DAMA CAROLINA HERRERA EUA DE TOILETTE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '60209',
    price: 90000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/carolina-herrera-ch.jpg',
    description: 'Este perfume decadente combina notas cítricas, florales y especiadas para un aroma tentador que se realza con un toque de elegancia gourmand.\n\nLas notas de salida de limón de Amalfi, bergamota, pomelo, notas acuáticas y toques de frutas tropicales abren la fragancia, creando una llamada fresca y revitalizante a los sentidos. Las notas de corazón de rosa búlgara, flor de naranjo africano y jazmín intenso crean un encantador bouquet floral, mientras que la canela especiada y el cremoso praliné ofrecen una atmósfera exótica y sensual.'
  },
  {
    id: 'perfume-moschino-toy-2-bubble',
    name: '1.1 DAMA MOSCHINO TOY 2 BUBBLE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '79574',
    price: 90000,
    stock: 10,
    image: 'assets/products/moschino-toy-2-bubble.jpg',
    description: 'Esta fragancia viene envasada en un envase de teddy bear tan característico de la marca. Es una fragancia que mezcla la calidez de las especias con el dulzor del caramelo y la acidez de las frutas.\n\nDe carácter fresco y alegre, es un perfume ideal para usar en los meses de verano. Notas de fondo: madera de cedro, ambrofix, cóctel de almizcles sedosos.'
  },
  {
    id: 'perfume-odyssey-tyrant',
    name: '1.1 HOMBRE ODYSSEY TYRANT DE ARMAF',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '99693',
    price: 100000,
    stock: 10,
    image: 'assets/products/odyssey-tyrant.jpg',
    description: 'Tira de los sentidos con Armaf Odyssey Tyrant. Esta fragancia moderna y con estilo combina notas cítricas y toronja con elemí, lavanda, geranio y pimienta para crear un aroma masculino único.\n\nPara completar la fragancia, ambroxan, cedro, notas amaderadas y vetiver ofrecen un contrapunto equilibrado. Prepárate para presenciar el poder de lo excepcional.'
  },
  {
    id: 'perfume-boss-inmotion',
    name: '1.1 BOSS INMOTION',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '80599',
    price: 100000,
    salePrice: 86000,
    stock: 10,
    image: 'assets/products/boss-inmotion.jpg',
    description: 'Este perfume Boss In Motion Hombre es de alta calidad, con una base en aceite y una concentración del 60%. Con una duración de aproximadamente 5 horas, viene en un envase AAA con 100 ml de contenido.\n\nSiéntete confiado y atractivo con su fragancia duradera y de larga duración.'
  },
  {
    id: 'perfume-erba-pura',
    name: '1.1 ARABE UNISEX ERBA PURA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '16863',
    price: 230000,
    salePrice: 129000,
    stock: 10,
    image: 'assets/products/erba-pura.jpg',
    description: 'Una fragancia delicada, fresca y afrutada que evoca lujo y exclusividad. Esta refinada composición comienza con notas de naranja siciliana y limón, combinadas en una armonía perfecta con el aroma de los jugosos frutos mediterráneos.\n\nEl almizcle blanco aporta el fondo cálido y sensual, combinado con el atalcado ámbar que complementa agradablemente la vainilla de Madagascar. Su lujoso envase se presenta vestido con una sofisticada cubierta de terciopelo que acentúa aún más la elegancia de esta fragancia.'
  },
  {
    id: 'perfume-valentino-roma-coral',
    name: '1.1 HOMBRE VALENTINO UOMO ROMA CORAL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '45084',
    price: 180000,
    salePrice: 99000,
    stock: 10,
    image: 'assets/products/valentino-uomo-roma-coral.jpg',
    description: 'Valentino Uomo Born In Roma Coral Fantasy de Valentino es una fragancia de la familia olfativa Amaderada Aromática para Hombres, lanzada en 2022. Fue creada por Nicolas Beaulieu y Jean-Christophe Hérault.\n\nNotas de salida: manzana roja, cardamomo y bergamota de Calabria.\nNotas de corazón: lavanda, geranio bourbon y esclarea.\nNotas de fondo: hojas de tabaco, pachulí y vetiver de Haití.'
  },
  {
    id: 'perfume-la-bomba',
    name: '1.1 DAMA LA BOMBA CAROLINA HERRERA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '21427',
    price: 169000,
    salePrice: 99000,
    stock: 10,
    image: 'assets/products/la-bomba.jpg',
    description: 'La Bomba se abre con una pitaya jugosa, vibrante y exótica, creando una explosión espectacular de carácter innegable.\n\nVittoria Ceretti cautiva con su impactante belleza, mirada penetrante y presencia innegable. Pero es su espontaneidad lo que realmente la distingue. Al igual que La Bomba, nunca pasa desapercibida. Al igual que la mujer Herrera, sabe lo que quiere y lo consigue.'
  },
  {
    id: 'perfume-sweet-like-candy',
    name: '1.1 DAMA SWEET CANDY ARIANA GRANDE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '63377',
    price: 129000,
    salePrice: 90000,
    stock: 10,
    image: 'assets/products/sweet-like-candy.jpg',
    description: 'Su aroma es dulce avainillado con notas atalcadas y de caramelo. Una bomba de dulzura alegremente delicada.'
  },
  {
    id: 'perfume-bombshell-paradise',
    name: '1.1 DAMA VICTORIA\u2019S SECRET BOMBSHELL PARADISE 100 ML',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '44937',
    price: 90000,
    salePrice: 74000,
    stock: 10,
    image: 'assets/products/bombshell-paradise.jpg',
    description: 'Dale un toque irresistible a tu día con Bombshell Paradise de Victoria\u2019s Secret, una fragancia femenina, elegante y llamativa que transmite frescura, sensualidad y glamour desde el primer momento.\n\nSu presentación en frasco fucsia con detalles dorados la convierte en una opción perfecta para uso diario, ocasiones especiales o para regalar. Ideal para mujeres que aman destacar con una fragancia sofisticada, juvenil y envolvente.'
  },
  {
    id: 'perfume-scandal-men',
    name: '1.1 HOMBRE SCANDAL MEN',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '24116',
    price: 70000,
    stock: 10,
    image: 'assets/products/scandal-men.jpg',
    description: 'Scandal de Jean Paul Gaultier es una fragancia masculina intensa, elegante y con carácter. Su aroma destaca por ser moderno, seductor y duradero, ideal para hombres que quieren dejar presencia sin pasar desapercibidos.\n\nSu frasco azul con corona dorada y su caja roja lo convierten en un perfume perfecto para uso personal o para regalar.'
  },
  {
    id: 'perfume-coco-mademoiselle',
    name: '1.1 DAMA COCO CHANEL MADEMOISELLE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '71615',
    price: 69900,
    stock: 10,
    image: 'assets/products/coco-mademoiselle.jpg',
    description: 'COCO MADEMOISELLE Eau de Parfum Intense. La esencia de una mujer libre y cautivadora.\n\nUn ambarino amaderado de carácter intenso: sensual, profundo, adictivo.'
  },
  {
    id: 'perfume-dior-sauvage',
    name: '1.1 HOMBRE DIOR SAUVAGE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '33816',
    price: 90000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/dior-sauvage.jpg',
    description: 'El frescor potente de Sauvage exhala nuevas facetas sensuales y misteriosas, renovando ampliamente la firma con una composición virtuosa.'
  },
  {
    id: 'perfume-khamrah-lattafa',
    name: '1.1 UNISEX ARABE KHAMRAH LATTAFA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '85805',
    price: 84500,
    stock: 10,
    image: 'assets/products/khamrah-lattafa.jpg',
    description: 'Perfume top árabe.'
  },
  {
    id: 'perfume-dg-the-one',
    name: '1.1 HOMBRE DOLCE & GABBANA THE ONE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '49813',
    price: 80000,
    stock: 10,
    image: 'assets/products/dg-the-one.jpg',
    description: 'La fragancia de hombre Dolce&Gabbana The One Eau de Parfum ofrece una experiencia sensorial más intensa y profunda, específicamente diseñada para los verdaderos amantes del perfume.\n\nEn su preciada fórmula, la naranja tarocco italiana se une a las notas herbáceas de la salvia francesa, para fundirse a continuación con la madera de sándalo australiano, cuyo resultado es una composición que deja una estela inconfundible.'
  },
  {
    id: 'perfume-phantom',
    name: '1.1 HOMBRE PHANTOM PACO RABANNE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '36240',
    price: 70000,
    stock: 10,
    image: 'assets/products/phantom.jpg',
    description: 'Paco Rabanne Phantom, una fragancia masculina moderna con un diseño futurista inconfundible.'
  },
  {
    id: 'perfume-bleu-chanel',
    name: '1.1 HOMBRE BLEU CHANEL TOILETTE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '63751',
    price: 120000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/bleu-chanel.jpg',
    description: 'El elogio a la libertad, que se expresa en un aromático amaderado de estela cautivadora. Una fragancia atemporal en un frasco de un azul profundo y misterioso.\n\nBLEU DE CHANEL se presenta aquí en un eau de parfum, cuyo aroma sutilmente pronunciado revela un espíritu determinado. El eau de parfum ofrece un perfume envolvente y se vaporiza en nubes dentro de la ropa y la piel.'
  },
  {
    id: 'perfume-paradise-garden',
    name: '1.1 HOMBRE JEAN PAUL PARADISE GARDEN',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '44763',
    price: 100000,
    stock: 10,
    image: 'assets/products/paradise-garden.jpg',
    description: 'Una fragancia cautivadora que mezcla elementos naturales que te transporta a un exuberante paraíso. Su apertura refrescante de agua de coco invita a sumergirse en un jardín tropical de delicias exóticas.\n\nEn el corazón amaderado, el sándalo aporta una calidez sensual, realzada por las notas especiadas del jengibre. El fondo es una caricia verde y vigorizante de higo, bañada por el sol con la dulzura de la haba tonka, dejando un rastro apasionado y masculino.'
  },
  {
    id: 'perfume-victorinox-classic',
    name: '1.1 HOMBRE VICTORINOX SWISS ARMY CLASSIC',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '79885',
    price: 140000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/victorinox-classic.jpg',
    description: 'Swiss Army de Victorinox Swiss Army es una fragancia de la familia olfativa Amaderada Aromática para Hombres.\n\nNotas de salida: notas verdes, yuzu, menta, bergamota y jengibre.\nNotas de corazón: romero, lavanda, hojas de violeta, flor de las nieves (edelweiss) y geranio.\nNotas de fondo: ciprés, almizcle, abeto balsámico, cedro y ámbar.'
  },
  {
    id: 'perfume-valentino-kit',
    name: '1.1 KIT DE LUJO VALENTINO 50ML',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '42134',
    price: 115000,
    stock: 10,
    image: 'assets/products/valentino-kit.jpg',
    description: 'Kit de lujo con tres fragancias Valentino de 50 ml cada una:\n\nValentino Uomo.\nValentino Born In Roma.\nValentino Born In Roma Green Stravaganza.'
  }
];

// refs ya usadas (para no repetir al agregar productos nuevos): 84213, 93810, 24592, 13278, 52445, 29772, 61750, 95319, 16328, 19494, 80239, 22337, 57931, 86387, 17602, 62950, 59906, 36224, 88569, 33435, 40180, 42562, 27464, 21348, 42918, 60209, 79574, 99693, 80599, 16863, 45084, 21427, 63377, 44937, 24116, 71615, 33816, 85805, 49813, 36240, 63751, 44763, 79885, 42134

/* ============================================================
   ARMA TU COMBO A TU GUSTO — reglas de descuento
   - 2 a 3 planes seleccionados: 10% de descuento por plan
   - 4 planes o más: 15% de descuento por plan
   - Algunos planes puntuales tienen un precio mínimo garantizado
     (para que el descuento nunca genere pérdida en esos casos)
   ============================================================ */
const ZD_CUSTOM_COMBO_PRICE_FLOORS = {
  'netflix-27': 9100,
  'disney-completa-premium': 32000,
  'spotify-2m': 15000,
  'magistv-pantalla': 4300
};

function zdCustomComboDiscountPercent(count) {
  if (count >= 4) return 0.15;
  if (count >= 2) return 0.10;
  return 0;
}

function zdCustomComboItemPrice(variantId, normalPrice, count) {
  const percent = zdCustomComboDiscountPercent(count);
  const computed = Math.round(normalPrice * (1 - percent));
  const floor = ZD_CUSTOM_COMBO_PRICE_FLOORS[variantId];
  return floor ? Math.max(computed, floor) : computed;
}
