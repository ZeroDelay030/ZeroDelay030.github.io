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
   - image: las fotos viven en assets/products/<categoría>/ (una
     subcarpeta por categoría, ej. assets/products/perfumeria/,
     assets/products/tecnologia/, etc.) — así ninguna carpeta pasa
     nunca de 100 archivos, sin importar cuánto crezca el catálogo.
     Al activar una categoría nueva, crear su propia subcarpeta.
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
    image: 'assets/products/perfumeria/jpg-le-male-parfum.jpg',
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
    image: 'assets/products/perfumeria/jpg-le-male-elixir.jpg',
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
    image: 'assets/products/perfumeria/moschino-toy-boy.jpg',
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
    image: 'assets/products/perfumeria/moschino-toy-2.jpg',
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
    image: 'assets/products/perfumeria/hugo-boss-bottled-night.jpg',
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
    image: 'assets/products/perfumeria/hugo-boss-bottled.jpg',
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
    image: 'assets/products/perfumeria/hugo-boss-the-scent-for.jpg',
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
    image: 'assets/products/perfumeria/polo-red.jpg',
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
    image: 'assets/products/perfumeria/polo-blue.jpg',
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
    image: 'assets/products/perfumeria/tommy-hilfiger.jpg',
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
    image: 'assets/products/perfumeria/dolce-gabbana-k.jpg',
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
    image: 'assets/products/perfumeria/versace-bright-crystal-absolu.jpg',
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
    image: 'assets/products/perfumeria/lacoste-blanc.jpg',
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
    image: 'assets/products/perfumeria/lacoste-black.jpg',
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
    image: 'assets/products/perfumeria/lacoste-essential.jpg',
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
    image: 'assets/products/perfumeria/hugo-boss-red.jpg',
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
    image: 'assets/products/perfumeria/invictus-victory-elixir.jpg',
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
    image: 'assets/products/perfumeria/one-million-lucky.jpg',
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
    image: 'assets/products/perfumeria/polo-black.jpg',
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
    image: 'assets/products/perfumeria/spicebomb.jpg',
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
    image: 'assets/products/perfumeria/one-million.jpg',
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
    image: 'assets/products/perfumeria/la-vie-est-belle.jpg',
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
    image: 'assets/products/perfumeria/invictus-eau-de-toilette.jpg',
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
    image: 'assets/products/perfumeria/ch-men.jpg',
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
    image: 'assets/products/perfumeria/good-girl-blush.jpg',
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
    image: 'assets/products/perfumeria/carolina-herrera-ch.jpg',
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
    image: 'assets/products/perfumeria/moschino-toy-2-bubble.jpg',
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
    image: 'assets/products/perfumeria/odyssey-tyrant.jpg',
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
    image: 'assets/products/perfumeria/boss-inmotion.jpg',
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
    image: 'assets/products/perfumeria/erba-pura.jpg',
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
    image: 'assets/products/perfumeria/valentino-uomo-roma-coral.jpg',
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
    image: 'assets/products/perfumeria/la-bomba.jpg',
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
    image: 'assets/products/perfumeria/sweet-like-candy.jpg',
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
    image: 'assets/products/perfumeria/bombshell-paradise.jpg',
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
    image: 'assets/products/perfumeria/scandal-men.jpg',
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
    image: 'assets/products/perfumeria/coco-mademoiselle.jpg',
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
    image: 'assets/products/perfumeria/dior-sauvage.jpg',
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
    image: 'assets/products/perfumeria/khamrah-lattafa.jpg',
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
    image: 'assets/products/perfumeria/dg-the-one.jpg',
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
    image: 'assets/products/perfumeria/phantom.jpg',
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
    image: 'assets/products/perfumeria/bleu-chanel.jpg',
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
    image: 'assets/products/perfumeria/paradise-garden.jpg',
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
    image: 'assets/products/perfumeria/victorinox-classic.jpg',
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
    image: 'assets/products/perfumeria/valentino-kit.jpg',
    description: 'Kit de lujo con tres fragancias Valentino de 50 ml cada una:\n\nValentino Uomo.\nValentino Born In Roma.\nValentino Born In Roma Green Stravaganza.'
  },
  {
    id: 'perfume-212-men-aqua',
    name: '1.1 HOMBRE CH 212 MEN AQUA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '35342',
    price: 125000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/212-men-aqua.jpg',
    description: 'Sus notas son agua de mar, toronja y bergamota. Inspira en los hombres sencillez y sensualidad.'
  },
  {
    id: 'perfume-armaf-caballo',
    name: '1.1 HOMBRE ARMAF CABALLO POUR HOMME EDP',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '45985',
    price: 100000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/perfumeria/armaf-caballo.jpg',
    description: 'Es una loción fresca y masculina árabe, con salida cítrica y limpia, un toque especiado suave y un fondo amaderado-almizclado.\n\nIdeal para uso diario, climas cálidos y quienes buscan un aroma agradable, moderno y versátil.'
  },
  {
    id: 'perfume-212-vip-wild-party',
    name: '1.1 HOMBRE 212 VIP MEN WILD PARTY',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '31109',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/212-vip-wild-party.jpg',
    description: '212 VIP Men Wild Party de Carolina Herrera: un perfume masculino impetuoso. Trago de absenta, impertinente lavanda y una nube de sexy almizcle fundiéndose en un atrevido aroma de vainilla negra con notas de cuero.\n\nImpregnada de un aroma audaz, masculino y fuerte.'
  },
  {
    id: 'perfume-212-sexy-men',
    name: '1.1 HOMBRE 212 SEXY MEN CAROLINA HERRERA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '26800',
    price: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/212-sexy-men.jpg',
    description: '212 Sexy Men es una fragancia intensa, seductora y elegante, creada para el hombre seguro de sí mismo. Combina notas orientales y amaderadas con un toque dulce y envolvente que deja una impresión duradera.\n\nEn la salida se perciben acordes frescos y especiados; en el corazón destacan notas dulces y sensuales como la vainilla; y en el fondo aparecen maderas y almizcle que aportan calidez y masculinidad. Es un aroma sofisticado y atractivo, ideal para la noche, ocasiones especiales y para quienes buscan destacar con estilo y personalidad.'
  },
  {
    id: 'perfume-yara-lattafa',
    name: '1.1 DAMA YARA LATTAFA ARABE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '83560',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/yara-lattafa.jpg',
    description: 'Yara de Lattafa es una fragancia femenina que ha capturado el interés de muchas amantes de los perfumes por su combinación única de notas dulces y frescas.\n\nEste perfume es ideal para mujeres que buscan una fragancia que sea a la vez moderna y sofisticada, ofreciendo una experiencia olfativa rica y envolvente.'
  },
  {
    id: 'perfume-ck-one',
    name: '1.1 HOMBRE CALVIN KLEIN ONE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '23999',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/ck-one.jpg',
    description: 'Cítrico, floral, almizclado, ámbar, verde/herbal.'
  },
  {
    id: 'perfume-odyssey-mandarin-sky',
    name: '1.1 HOMBRE ODYSSEY MANDARIN SKY',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '30106',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/odyssey-mandarin-sky.jpg',
    description: 'Reconocida por su combinación de notas cítricas y dulces que crean una experiencia olfativa sofisticada y moderna. Esta Eau de Parfum está diseñada para hombres que buscan un aroma distintivo y versátil, adecuado para diversas ocasiones y estaciones del año.\n\nLa fragancia se abre con una mezcla vibrante de cítricos y especias, seguida de un corazón dulce y envolvente, y culmina en una base amaderada y cálida que aporta profundidad y longevidad al aroma.'
  },
  {
    id: 'perfume-tonka-montale',
    name: '1.1 UNISEX TONKA MONTALE PARIS',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '43478',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/tonka-montale.jpg',
    description: 'Arabians Tonka es un perfume de Montale para hombres y mujeres, para los amantes de los perfumes diferentes — es el cómplice de los árabes, una fragancia homenaje al caballo árabe.\n\nUna fina mezcla de notas especiadas, rosas, haba tonka y bergamota revelan un temperamento animal del Oud, ámbar y almizcle.'
  },
  {
    id: 'perfume-santal-33',
    name: '1.1 UNISEX SANTAL 33 LE LABO',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '63970',
    price: 130000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/perfumeria/santal-33.jpg',
    description: 'Santal 33 de Le Labo es una fragancia de la familia olfativa Amaderada Aromática para Hombres y Mujeres.'
  },
  {
    id: 'perfume-can-can',
    name: '1.1 DAMA CAN CAN PARIS HILTON',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '35161',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/can-can.jpg',
    description: 'Can Can, el perfume de Paris Hilton lanzado en el 2007, fue creado para mujeres que saben de aromas excitantes.\n\nEs ideal para uso diario, en la oficina, un día de compras o una ocasión especial.'
  },
  {
    id: 'perfume-eros-energy',
    name: '1.1 HOMBRE VERSACE EROS ENERGY',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '40059',
    price: 100000,
    salePrice: 79000,
    stock: 10,
    image: 'assets/products/perfumeria/eros-energy.jpg',
    description: 'Eros Energy ofrece un inicio vibrante y estimulante con una tentadora explosión de brillo cítrico. La bergamota italiana acariciada por el sol se realza con notas cítricas de naranja sanguina, lima, limón, pomelo y mandarina, creando una mezcla refrescante y armoniosa que irradia alegría.\n\nEl corazón desvela un toque de intriga y sensualidad con intensas notas de pimienta rosa y grosella negra, combinadas con ámbar blanco. El pachulí aporta profundidad y riqueza, mientras que el almizcle proporciona un aura suave y acogedora, y el musgo de roble añade un toque terroso y verde.'
  },
  {
    id: 'perfume-shaheen-gold',
    name: '1.1 UNISEX SHAHEEN GOLD LATTAFA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '68437',
    price: 200000,
    salePrice: 119000,
    stock: 10,
    image: 'assets/products/perfumeria/shaheen-gold.jpg',
    description: 'Shaheen Gold de Lattafa Perfumes es una fragancia para mujeres y hombres de la línea exclusiva Lattafa Pride, lanzada en 2022.\n\nNotas de salida: piña y pomelo.\nNotas de corazón: higo y lavanda.\nNotas de fondo: vainilla, tonka y pachulí.'
  },
  {
    id: 'perfume-dg-light-blue',
    name: '1.1 HOMBRE DOLCE & GABBANA LIGHT BLUE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '68405',
    price: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/dg-light-blue.jpg',
    description: 'Dolce&Gabbana Light Blue Pour Homme Eau de Toilette encarna el espíritu aventurero y dinámico del hombre moderno en una fragancia fresca y vibrante.\n\nSus notas evocan una mezcla mediterránea, donde el romero aromático es suavemente envuelto por cítricos efervescentes y el atractivo sensual del pachulí.'
  },
  {
    id: 'perfume-black-xs-aphrodisiaque',
    name: '1.1 HOMBRE BLACK XS L\u2019APHRODISIAQUE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '58312',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/black-xs-aphrodisiaque.jpg',
    description: 'Black XS L\u2019Aphrodisiaque for Men de Paco Rabanne es una fragancia de la familia olfativa Cuero para Hombres, lanzada en 2013. La nariz detrás de esta fragancia es Olivier Cresp.\n\nNotas de salida: canela y azafrán.\nNotas de corazón: miel, flor de azahar del naranjo y ciprés.\nNotas de fondo: praliné, cuero y almendra.'
  },
  {
    id: 'perfume-omnia-amethyste',
    name: '1.1 DAMA BVLGARI OMNIA AMETHYSTE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '85433',
    price: 79000,
    stock: 10,
    image: 'assets/products/perfumeria/omnia-amethyste.jpg',
    description: 'Omnia Amethyste de Bvlgari es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres, lanzada en 2006. La nariz detrás de esta fragancia es Alberto Morillas.\n\nNotas de salida: notas verdes y toronja (pomelo) rosada.\nNotas de corazón: iris y rosa de Bulgaria (rosa Damascena).\nNotas de fondo: heliotropo y notas amaderadas.'
  },
  {
    id: 'perfume-asad-elixir',
    name: '1.1 HOMBRE YARA ASAD ELIXIR LATTAFA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '45367',
    price: 169000,
    salePrice: 119000,
    stock: 10,
    image: 'assets/products/perfumeria/asad-elixir.jpg',
    description: 'Una fragancia intensa y adictiva que combina especias vibrantes, un corazón cálido y un fondo dulce amaderado con toques de vainilla y ámbar que enamoran.'
  },
  {
    id: 'perfume-viking-dubai',
    name: 'UNISEX BHARARA VIKING DUBAI',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '54059',
    price: 220000,
    salePrice: 150000,
    stock: 10,
    image: 'assets/products/perfumeria/viking-dubai.jpg',
    description: 'Viking Dubai de Bharara es una fragancia de la familia olfativa Cítrica Aromática para Hombres y Mujeres, lanzada en 2024.\n\nNotas de salida: limón (lima ácida), bergamota, jengibre, toronja (pomelo) y naranja dulce.\nNotas de corazón: madera de cachemira, violeta, haba tonka y magnolia.\nNotas de fondo: ambroxan, almizcle blanco, pachulí y ámbar gris.'
  },
  {
    id: 'perfume-yara-candy',
    name: '1.1 DAMA YARA LATTAFA CANDY',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '80475',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/yara-candy.jpg',
    description: 'Yara Candy de Lattafa Perfumes es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres, lanzada en 2024.\n\nNotas de salida: grosellas negras y mandarina verde.\nNotas de corazón: strawberry fizz candy y gardenia.\nNotas de fondo: vainilla, ámbar, almizcle y sándalo.'
  },
  {
    id: 'perfume-givenchy-blue-label',
    name: '1.1 HOMBRE GIVENCHY BLUE LAVEL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '15239',
    price: 75000,
    stock: 10,
    image: 'assets/products/perfumeria/givenchy-blue-label.jpg',
    description: 'GIVENCHY BLUE LABEL es una fragancia masculina que captura la esencia del hombre dinámico y espontáneo. Se presenta como un Eau de Toilette.\n\nApertura fresca y energizante de cítricos como la bergamota y el pomelo, evolucionando hacia un corazón especiado con lavanda y pimienta. En el fondo, las notas amaderadas de vetiver y cedro añaden profundidad y elegancia. Ideal para hombres activos que buscan una fragancia versátil para el día a día.'
  },
  {
    id: 'perfume-acqua-di-gio-profondo',
    name: 'ACQUA DI GO PROFONDO GIORGIO ARMANI',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '68417',
    price: 65000,
    stock: 10,
    image: 'assets/products/perfumeria/acqua-di-gio-profondo.jpg',
    description: 'ACQUA DI GIÒ PROFONDO de Giorgio Armani es un Eau de Parfum masculino de la familia olfativa Aromática Acuática. Es la interpretación contemporánea e intensa de Acqua di Giò, que busca remontarse a los orígenes: el mar.\n\nUna creación del maestro perfumista Alberto Morillas, lanzada en 2020. Como si se tratara de un salto hacia el profundo azul del mar, el primer contacto con el agua es explosivo, jugoso y efervescente.'
  },
  {
    id: 'perfume-yara-tous',
    name: '1.1 UNISEX LATTAFA, YARA TOUS EDP',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '97553',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/yara-tous.jpg',
    description: 'Este delicado y afrutado aroma lo llevará a un universo de elegancia y refinamiento tropical.\n\nLa fragancia, cuidadosamente elaborada, inicia con notas frescas de coco, mango y maracuyá, ofreciendo una apertura refrescante y exótica.'
  },
  {
    id: 'perfume-dg-devotion',
    name: '1.1 DAMA DOLCE & GABBANA DEVOTION',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '91558',
    price: 75000,
    stock: 10,
    image: 'assets/products/perfumeria/dg-devotion.jpg',
    description: 'La fragancia gourmand Devotion Eau de Parfum, creada por el perfumista Olivier Cresp, contiene deliciosas frutas cítricas confitadas, azahar fresco y vainilla dulce.\n\nEn la animada Capri, la mirada de Katy Perry se cruza con la de Michele Morrone: el comienzo de una historia de amor y devoción, como se cuenta en la campaña Devotion Eau de Parfum.'
  },
  {
    id: 'perfume-moschino-fresh-couture',
    name: '1.1 DAMA MOSCHINO FRESH COUTURE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '81733',
    price: 110000,
    salePrice: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/moschino-fresh-couture.jpg',
    description: 'Notas de salida: bergamota, mandarina y ylang-ylang.\nNotas de corazón: peonía, frambuesa y osmanto (olivo oloroso).\nNotas de fondo: ambroxan, notas amaderadas y pachulí.'
  },
  {
    id: 'perfume-armaf-island-breeze',
    name: '1.1 DAMA ARMAF ISLAND BREEZE 100 ML',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '46048',
    price: 160000,
    salePrice: 119000,
    stock: 10,
    image: 'assets/products/perfumeria/armaf-island-breeze.jpg',
    description: 'Perfil Aromático: Es una fragancia floral frutal caracterizada por notas dulces de durazno, bayas silvestres y rosa, con un fondo cremoso de almizcle blanco.\\n\\nDiseño: La botella simula un batido o milkshake tropical, reflejando su concepto ligero y veraniego.'
  },
  {
    id: 'perfume-versace-yellow-diamond',
    name: '1.1 DAMA VERSACE YELLOW DIAMOND',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '42098',
    price: 75000,
    stock: 10,
    image: 'assets/products/perfumeria/versace-yellow-diamond.jpg',
    description: 'Una lujosa fragancia floral que se presenta dentro del envase en forma de diamante, que seguramente resaltará tu encanto a la perfección y será el complemento ideal igual que una lujosa joya.\\n\\nSus notas de salida pertenecen a la pera dulce, las notas cítricas de la bergamota y el neroli. Después salen a escena la fresia en flor, el nenúfar, la agridulce flor de azahar y la mimosa. Esta fragancia se erige sobre unas notas de fondo compuestas por la preciada madera de Palo Santo, cálida madera de ámbar y almizcle.'
  },
  {
    id: 'perfume-yum-yum-baul',
    name: '1.1 DAMA YUM YUM BAUL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '39256',
    price: 160000,
    salePrice: 115000,
    stock: 10,
    image: 'assets/products/perfumeria/yum-yum-baul.jpg',
    description: 'Una fragancia dulce y vibrante que combina la frescura frutal con un toque floral y una base cálida y envolvente.\\n\\nAbre con una explosión jugosa de bayas silvestres, cereza, bergamota y naranja, creando un inicio chispeante y lleno de energía. En el corazón, la suavidad de la vainilla se entrelaza con la elegancia de las flores blancas y la rosa, aportando un toque romántico y cremoso. El fondo de notas atalcadas, ámbar y almizcle deja una estela seductora.'
  },
  {
    id: 'perfume-set-lattafa-yara',
    name: '1.1 UNISEX SET LATTAFA YARA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '28289',
    price: 250000,
    salePrice: 150000,
    stock: 10,
    image: 'assets/products/perfumeria/set-lattafa-yara.jpg',
    description: 'YARA TOUS: Su aroma es tropical avainillado con notas de coco y jazmín.\\n\\nYARA: su aroma es dulce avainillado con notas atalcadas, frutales y florales.\\n\\nYARA MOI: Una fragancia ambarada que revela notas de jazmín y melocotón mezcladas con caramelo sobre una base de Sándalo.\\n\\nASAD: entrelaza frescura crepuscular con aire arenoso caliente, presentando una experiencia olfativa profunda.'
  },
  {
    id: 'perfume-yara-lattafa-sai',
    name: '1.1 UNISEX YARA LATTAFA SAI',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '23434',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/yara-lattafa-sai.jpg',
    description: 'Su aroma comienza con las notas de salida de durazno, melocotón y jazmín, proporcionando una apertura dulce y floral.\\n\\nLas notas de corazón se caracterizan por caramelo y ámbar, añadiendo una rica profundidad y un toque ligeramente gourmand. Finalmente, las notas de fondo de pachuli y sándalo ofrecen una base amaderada y terrosa que completa la fragancia con una sensación cálida y envolvente.'
  },
  {
    id: 'perfume-vulcan-feu',
    name: '1.1 UNISEX VULCAN FEU',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '98696',
    price: 150000,
    salePrice: 110000,
    stock: 10,
    image: 'assets/products/perfumeria/vulcan-feu.jpg',
    description: 'Su composición es intensa y vibrante que abre con un mango jugoso y exótico, acompañado de notas cítricas y un toque especiado que le aporta frescura y energía.\\n\\nEn su evolución, aparecen matices florales y dulces que suavizan la composición, mientras que el fondo revela una base cálida, amaderada y ligeramente gourmand que deja una estela profunda y envolvente.'
  },
  {
    id: 'perfume-moschino-toy-pearl',
    name: '1.1 UNISEX MOSCHINO TOY PEARL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '81482',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/moschino-toy-pearl.jpg',
    description: 'Su composición es intensa y vibrante que abre con un mango jugoso y exótico, acompañado de notas cítricas y un toque especiado que le aporta frescura y energía.\\n\\nEn su evolución, aparecen matices florales y dulces que suavizan la composición, mientras que el fondo revela una base cálida, amaderada y ligeramente gourmand que deja una estela profunda y envolvente.'
  },
  {
    id: 'perfume-musaman-white',
    name: '1.1 UNISEX MUSAMAN WHITE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '21395',
    price: 150000,
    salePrice: 99000,
    stock: 10,
    image: 'assets/products/perfumeria/musaman-white.jpg',
    description: 'Un perfume conocido por tener una fragancia ambarina y cítrica, con una evolución que va de notas cítricas y especiadas a un corazón cremoso de coco y flores, terminando en una base cálida y atalcada de sándalo, almizcle y benjuí.\\n\\nOfrece una estela elegante y duradera, con comparaciones a perfumes como Gris Chanel pero con un toque más cremoso y menos atalcado.'
  },
  {
    id: 'perfume-tommy-girl',
    name: '1.1 DAMA TOMMY GIRL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '87397',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/tommy-girl.jpg',
    description: 'Tommy Girl es una fragancia fresca, juvenil y elegante, ideal para uso diario. Su aroma limpio y femenino combina notas cítricas y florales que transmiten seguridad, frescura y buen gusto.\\n\\nPerfecto para mujeres que quieren oler rico sin sentirse cargadas. Un perfume versátil, clásico y fácil de amar.'
  },
  {
    id: 'perfume-mont-blanc-starwalker',
    name: '1.1 HOMBRE MONT BLANT STARWALKER',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '65302',
    price: 74900,
    stock: 10,
    image: 'assets/products/perfumeria/mont-blanc-starwalker.jpg',
    description: 'Mont Blanc Starwalker es una fragancia masculina elegante, fresca y sofisticada, ideal para hombres que quieren proyectar seguridad y buen gusto.\\n\\nSu aroma limpio y moderno es perfecto para uso diario, oficina o salidas casuales. Una opción versátil, fina y con presencia, sin ser demasiado fuerte.'
  },
  {
    id: 'perfume-armani-stronger-with-you',
    name: '1.1 HOMBRE ARMANI HAMMER YOU',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '14165',
    price: 120000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/armani-stronger-with-you.jpg',
    description: 'Emporio Armani Stronger With You Only es una fragancia masculina intensa, moderna y elegante. Su aroma cálido y sofisticado proyecta seguridad, estilo y presencia.\\n\\nIdeal para hombres que quieren destacar en citas, salidas nocturnas o momentos especiales. Un perfume con personalidad, atractivo y excelente fijación.'
  },
  {
    id: 'perfume-summer-hammer',
    name: '1.1 UNISEX SUMMER HUMMER',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '13905',
    price: 140000,
    salePrice: 100000,
    stock: 10,
    image: 'assets/products/perfumeria/summer-hammer.jpg',
    description: 'Summer Hammer es un perfume intenso, tropical y diferente, ideal para quienes quieren destacar con un aroma único y llamativo.\\n\\nSu presentación elegante y su estilo exótico transmiten frescura, personalidad y exclusividad. Perfecto para usar en días cálidos, salidas especiales o cuando quieres dejar una impresión memorable.'
  },
  {
    id: 'perfume-set-moschino-30ml',
    name: '1.1 UNISEX SET MOSCHINO 30ML',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '22280',
    price: 190000,
    salePrice: 110000,
    stock: 10,
    image: 'assets/products/perfumeria/set-moschino-30ml.jpg',
    description: 'Set Moschino Toy es una opción llamativa, juvenil y muy original para regalar o coleccionar. Incluye tres fragancias con diseño de osito en tonos rosa, negro y transparente, con una presentación elegante y diferente.\\n\\nIdeal para quienes buscan un perfume divertido, moderno y con mucho estilo. Un set atractivo que destaca desde el primer vistazo.'
  },
  {
    id: 'perfume-paris-hilton-dama',
    name: '1.1 DAMA PARIS HILTON',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '38657',
    price: 60000,
    stock: 10,
    image: 'assets/products/perfumeria/paris-hilton-dama.jpg',
    description: 'Paris Hilton es una fragancia femenina, dulce y elegante, ideal para mujeres que buscan un aroma fresco, juvenil y con toque sofisticado.\\n\\nSu presentación rosa y llamativa la hace perfecta para regalar o usar a diario. Un perfume con estilo, presencia y encanto desde el primer momento.'
  },
  {
    id: 'perfume-paris-hilton-hombre',
    name: '1.1 HOMBRE PARIS HILTON',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '40495',
    price: 60000,
    stock: 10,
    image: 'assets/products/perfumeria/paris-hilton-hombre.jpg',
    description: 'Paris Hilton Men es una fragancia fresca, moderna y masculina, ideal para uso diario, oficina o salidas casuales.\\n\\nSu presentación azul transmite elegancia y limpieza, perfecta para hombres que buscan oler bien sin usar un aroma pesado. Un perfume versátil, atractivo y fácil de regalar.'
  },
  {
    id: 'perfume-mellow-medness',
    name: '1.1 DAMA MELLOW MEDNESS',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '76237',
    price: 180000,
    salePrice: 119000,
    stock: 10,
    image: 'assets/products/perfumeria/mellow-medness.jpg',
    description: 'Mallow Made Give Me Gourmand de Lattafa es una fragancia dulce, cremosa y muy llamativa, ideal para quienes aman los aromas tipo postre.\\n\\nSu presentación en forma de cupcake la hace perfecta para regalar, coleccionar o destacar en tu tocador. Un perfume femenino, coqueto y diferente, con estilo gourmand y mucha personalidad.'
  },
  {
    id: 'perfume-ralph-lauren',
    name: '1.1 DAMA RALPH LAURENT',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '88907',
    price: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/ralph-lauren.jpg',
    description: 'Ralph de Ralph Lauren es una fragancia fresca, juvenil y elegante, ideal para el uso diario. Su aroma limpio y femenino transmite energía, seguridad y buen gusto desde la primera aplicación.\\n\\nPerfecta para mujeres que buscan oler rico, fresco y sofisticado todo el día.'
  },
  {
    id: 'perfume-rem-ariana-grande',
    name: '1.1 DAMA REM ARIANA GRANDE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '61064',
    price: 119000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/rem-ariana-grande.jpg',
    description: 'Ariana Grande R.E.M. es una fragancia ideal para quienes buscan un aroma femenino, moderno y elegante.\\n\\nSu presentación en frasco tipo cristal la convierte en un detalle llamativo y sofisticado, perfecto para uso diario o para regalar. Un perfume con estilo, delicadeza y presencia desde el primer vistazo.'
  },
  {
    id: 'perfume-orientica-dania',
    name: '1.1 DAMA ORIENTICA DANIA BAUL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '88838',
    price: 150000,
    salePrice: 100000,
    stock: 10,
    image: 'assets/products/perfumeria/orientica-dania.jpg',
    description: 'Su apertura es frutal, donde el durazno y la naranja se entrelazan con la gardenia. Es un inicio radiante y cautivador, como el primer rayo de sol sobre un jardín florecido.\\n\\nEn el corazón, la dulzura se profundiza; la calidez de la vainilla se fusiona con la cremosidad tropical del coco y los nardos. Un bouquet floral blanco y gourmand que envuelve los sentidos.\\n\\nFinalmente, se asienta en una base oriental suntuosa y duradera. El cálido ámbar se combina con el benjuí, el sándalo y el cedro, creando una estela rica, sensual y profundamente femenina que perdura en la piel.'
  },
  {
    id: 'perfume-orientica-amber-rouge',
    name: '1.1 UNISEX ORIENTICA AMBER ROUGE BAUL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '47875',
    price: 150000,
    salePrice: 100000,
    stock: 10,
    image: 'assets/products/perfumeria/orientica-amber-rouge.jpg',
    description: 'Un aroma deslumbrante y lujoso que combina notas cítricas vibrantes con la opulencia de las flores blancas y las especias sensuales. Su fragancia envuelve los sentidos con una sofisticación seductora y cautivadora.\\n\\nLas cautivadoras notas de jazmín y naranja encienden la primera chispa, y con el azafrán y el praliné en su corazón palpitante, el musgo de roble, el ámbar y las algas marinas son los aromas distintivos que permanecen contigo mucho después de que los momentos tempestuosos te dejarán sin aliento.'
  },
  {
    id: 'perfume-bvlgari-omnia-crystalline',
    name: '1.1 DAMA BVLGARI OMMNIA CRYSTALLINE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '25839',
    price: 59000,
    stock: 10,
    image: 'assets/products/perfumeria/bvlgari-omnia-crystalline.jpg',
    description: 'Bvlgari Omnia Crystalline es una fragancia comercializada principalmente para mujer. Tiene un estilo elegante, limpio y delicado, ideal como perfume femenino, aunque también puede gustar a quienes prefieren aromas frescos y suaves.'
  },
  {
    id: 'perfume-olympea-paco-rabanne',
    name: '1.1 DAMA OLYMPEA PACO RABANNE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '24974',
    price: 74900,
    stock: 10,
    image: 'assets/products/perfumeria/olympea-paco-rabanne.jpg',
    description: 'Una fragancia creada por Paco Rabanne pensada para mujeres poderosas. Es un perfume fresco oriental que se cimienta sobre la armonía de la vainilla salada.\\n\\nDespués, en su aroma se produce un choque entre la frescura del agua de jazmín, la mandarina verde, la flor de jengibre, la sensualidad del ámbar gris y la madera de cachemire. Una combinación inigualable.'
  },
  {
    id: 'perfume-lv-ombre-nomade',
    name: '1.1 HOMBRE LOUIS VUITTON OMBRE NOMADE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '20221',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/lv-ombre-nomade.jpg',
    description: 'Un aroma que abre con una fascinante mezcla de pimienta rosa picante y benjuí aromático; su corazón revela la preciosa madera de oud, esta exquisita nota exuda una sensación de profundidad y lujo.\\n\\nSus notas de fondo son cautivadoras, el cuero intenso se combina con el incienso ahumado y el suave pachulí. Aportando calidez y sensualidad a la composición, creando un rastro duradero y adictivo que dura en la piel.'
  },
  {
    id: 'perfume-bvlgari-omnia-coral',
    name: '1.1 DAMA BVLGARI OMNIA CORAL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '53666',
    price: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/bvlgari-omnia-coral.jpg',
    description: 'Inspirado en los deslumbrantes matices del preciado coral rojo, con hibisco tropical y deliciosa granada, que evoca el verano, el sol, la naturaleza y los océanos más remotos.\\n\\nNotas de salida: bergamota y bayas de goji. Notas de corazón: granada, hibisco (flor de Jamaica, cayena) y nenúfar (lirio de agua). Notas de fondo: almizcle y cedro de Virginia.'
  },
  {
    id: 'perfume-noble-blush',
    name: '1.1 DAMA ARABE NOBLE BLUSH',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '23576',
    price: 150000,
    salePrice: 119000,
    stock: 10,
    image: 'assets/products/perfumeria/noble-blush.jpg',
    description: 'Su aroma es dulce cremoso, avainillado, amaderado con acordes atalcados y frutales. Una mezcla muy bien lograda entre la delicadeza y ternura de lo dulce de la vainilla, lo más profundo de la madera, complementado con la avellana de una manera exótica y cautivadora.\\n\\nInicia con las notas más tiernas de la crema batida, su corazón te cautiva con sus notas de merengue y almendra; su fondo almizclado y de sándalo le dan el toque perfecto.'
  },
  {
    id: 'perfume-rave-now',
    name: '1.1 DAMA RAVE NOW',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '10160',
    price: 94000,
    stock: 10,
    image: 'assets/products/perfumeria/rave-now.jpg',
    description: 'Una fragancia que toma inspiración de la cautivadora Burberry Her Elixir. Este perfume despierta los sentidos con su dulzura exquisita, acompañada de un toque empolvado y avainillado que te envuelve en una nube de delicadeza.\\n\\nLos matices afrutados aportan una frescura inigualable, mientras que las notas musgosas añaden un toque de misterio y profundidad.'
  },
  {
    id: 'perfume-odyssey-candee',
    name: '1.1 DAMA ODYSSEY CANDEE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '94316',
    price: 130000,
    salePrice: 94900,
    stock: 10,
    image: 'assets/products/perfumeria/odyssey-candee.jpg',
    description: 'Su aroma es dulce, frutal, acaramelado con acordes de maracuyá. Las notas de salida son fresa y frambuesa; en su secado podrás apreciar las notas de caramelo, maracuyá y jazmín, mientras su fondo es almizclado y atalcado.\\n\\nUna fragancia tan exquisita y femenina que desbordarás sensualidad, delicadeza y mucha clase; pronto se convertirá en tu infaltable, pues no te dejará pasar desapercibida.'
  },
  {
    id: 'perfume-bvlgari-man-in-black',
    name: '1.1 HOMBRE BVLGARI MAN IN BLACK',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '85603',
    price: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/bvlgari-man-in-black.jpg',
    description: 'Una fragancia que expresa el impetuoso y misterioso carácter del fuego, un elemento transformador que simboliza fuerza y energía. Es un perfume magnético que ejerce un poder único de fascinación.\\n\\nSu composición representa una nueva visión de la masculinidad a través de las deliciosas notas de ron, cuero y especias, seguido de un corazón de iris y nardos, más adelante compacta a la perfección con las notas de fondo de haba tonka, madera de gaiac y benjuí.'
  },
  {
    id: 'perfume-odyssey-mandarin-sky-elixir',
    name: '1.1 HOMBRE ODYSSEY MANDARIN SKY ELIXIR',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '54336',
    price: 120000,
    salePrice: 84900,
    stock: 10,
    image: 'assets/products/perfumeria/odyssey-mandarin-sky-elixir.jpg',
    description: 'Su composición es vibrante y envolvente que combina la frescura chispeante de los cítricos con un fondo dulce y adictivo. Su apertura es luminosa y energética, destacando la mandarina en una salida jugosa y refrescante.\\n\\nEn el corazón, el caramelo aporta un toque gourmand suave y atractivo, mientras que el fondo de vainilla, ámbar y maderas crea una estela cálida, cremosa y duradera.'
  },
  {
    id: 'perfume-marly-layton',
    name: '1.1 HOMBRE MARLY LAYTON',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '47639',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/marly-layton.jpg',
    description: 'Esta seductora fragancia oriental y floral con una intensa firma olfativa se abre con bergamota y su pasión ácida, mientras que la lavanda y el geranio se mezclan en una nota fresca, elegante y caballerosa a la vez.\\n\\nSu intensidad se amplifica aún más con el ámbar, realzado por la elegancia natural de la pimienta rosa. El carácter distinguido y adictivo de Layton se ve reforzado por la vainilla y las maderas preciosas, que se desarrollan a través de una nota intrigante de café caramelizado.'
  },
  {
    id: 'perfume-marshmallow-blush',
    name: '1.1 DAMA MARSHMELLOW BLUSH',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '86606',
    price: 180000,
    salePrice: 119000,
    stock: 10,
    image: 'assets/products/perfumeria/marshmallow-blush.jpg',
    description: 'Una fragancia dulce y encantadora que envuelve con un aire juvenil y femenino. Su apertura es jugosa y azucarada, dando paso a un corazón suave con matices florales que equilibran la dulzura.\\n\\nEn el fondo, la vainilla y el marshmallow crean una sensación cremosa, cálida y altamente adictiva que permanece en la piel.'
  },
  {
    id: 'perfume-mayar',
    name: '1.1 DAMA MAYAR',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '45046',
    price: 130000,
    salePrice: 99000,
    stock: 10,
    image: 'assets/products/perfumeria/mayar.jpg',
    description: 'Su aroma es dulce con notas frutales, florales y de lychee. Despierta tus sentidos con esta fragancia oriental seductora y duradera.\\n\\nSus notas gourmand te envolverán en un aroma dulce y adictivo que perdura todo el día. Se trata de un arma olfativa, fusionando exóticas notas de lichi que oscilan entre lo agridulce, lo jugoso y lo delicioso, tentándote a volver a olerla una y otra vez. El juego vibrante de flores blancas, incluyendo jazmines, peonías y rosas blancas, se entrelaza con un cautivador velo de vainilla y frambuesa, creando una experiencia sensorial incomparable.'
  },
  {
    id: 'perfume-mayar-cherry',
    name: '1.1 DAMA MAYAR CHERRY',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '24045',
    price: 120000,
    salePrice: 99000,
    stock: 10,
    image: 'assets/products/perfumeria/mayar-cherry.jpg',
    description: 'Fragancia intensa y femenina que combina la dulzura jugosa de la cereza con un fondo cálido y cremoso. Su apertura frutal es vibrante y adictiva, mientras que el corazón floral aporta suavidad y elegancia.\\n\\nEn el fondo, la vainilla, el almizcle y la haba tonka crean una estela dulce, envolvente y muy duradera.'
  },
  {
    id: 'perfume-mayar-natural',
    name: '1.1 DAMA MAYAR NATURAL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '92670',
    price: 120000,
    salePrice: 99000,
    stock: 10,
    image: 'assets/products/perfumeria/mayar-natural.jpg',
    description: 'Una fragancia que despierta una sensación de alegría y sofisticación, perfecta para quienes buscan una experiencia olfativa única y deliciosa, te sumerge en un viaje olfativo irresistible con su interpretación fresca y frutal.\\n\\nEsta fragancia cautiva los sentidos con su dulzura exquisita, donde las notas avainilladas se entrelazan armoniosamente con la frescura de los matices afrutados. Las notas florales añaden un toque de elegancia y suavidad, mientras que la nota acuática refresca y revitaliza tus sentidos.'
  },
  {
    id: 'perfume-khamrah-dukhan',
    name: '1.1 UNISEX KHAMRAH DUKHAN BAUL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '97302',
    price: 180000,
    salePrice: 120000,
    stock: 10,
    image: 'assets/products/perfumeria/khamrah-dukhan.jpg',
    description: 'Su aroma es dulce avainillado con notas de café, ámbar y canela.\\n\\nNotas de salida: canela, cardamomo y jengibre. Notas de corazón: caramelo, frutas confitadas y flores blancas. Notas de fondo: café, vainilla, haba tonka, hojas aromáticas y almizcle.'
  },
  {
    id: 'perfume-khamrah-qahwa',
    name: '1.1 UNISEX KHAMRAH QAHWA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '37484',
    price: 180000,
    salePrice: 120000,
    stock: 10,
    image: 'assets/products/perfumeria/khamrah-qahwa.jpg',
    description: 'Su aroma es dulce avainillado con notas de café, ámbar y canela; una fragancia que redefine la experiencia del café en el mundo de la perfumería.\\n\\nEste perfume cautivador te sumerge en una atmósfera cálida y especiada, donde las notas dulces y avainilladas se entrelazan con la riqueza del café recién hecho. La presencia del ámbar añade una profundidad seductora a la composición, creando una estela embriagadora que perdura a lo largo del día.'
  },
  {
    id: 'perfume-good-girl-black',
    name: '1.1 DAMA GOOD GIRL BLACK',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '93381',
    price: 100000,
    salePrice: 79000,
    stock: 10,
    image: 'assets/products/perfumeria/good-girl-black.jpg',
    description: 'Una fragancia tan intensa como sensual para la mujer que celebra su lado bueno y libera su lado malo. Su envase único y moderno fue diseñado para ser un objeto joya, con forma de tacón de aguja, en cristal azul cobalto y con un tacón dorado.\\n\\nSu creación se inspiró en la frase "Una mujer puede conquistar el mundo con los zapatos adecuados". Expresa la naturaleza sensual, segura y femenina gracias a la fusión de sus notas de almendra, café, nardo, Jazmín Sambac y un fondo de cacao, haba Tonka y vainilla.'
  },
  {
    id: 'perfume-island-bliss',
    name: '1.1 DAMA ISLAND BLISS',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '75313',
    price: 160000,
    salePrice: 119000,
    stock: 10,
    image: 'assets/products/perfumeria/island-bliss.jpg',
    description: 'Un perfume que captura la esencia de un paraíso tropical. Con una fusión exquisita de notas frutales, florales y gourmand, esta fragancia evoca la calidez del sol, la brisa del mar y la dulzura envolvente de una isla paradisíaca.\\n\\nSu aroma es dulce, floral, acuático con toques frescos y de coco. Su salida son unas deliciosas notas verdes; en su corazón sentirás el coco y los lirios, su fondo avainillado y de haba tonka lo complementa de una manera ideal.'
  },
  {
    id: 'perfume-issey-miyake-fem',
    name: '1.1 DAMA ISSEY MIYAKE FEM',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '56422',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/issey-miyake-fem.jpg',
    description: "L'Eau D'Issey de Issey Miyake es una fragancia elegante, fresca y sofisticada, ideal para quienes buscan un aroma limpio, delicado y con presencia.\n\nSu diseño minimalista y su esencia refinada la convierten en una opción perfecta para uso diario o para regalar con estilo."
  },
  {
    id: 'perfume-issey-miyake-men',
    name: '1.1 HOMBRE ISSEY MIYAKE MEN',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '64509',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/issey-miyake-men.jpg',
    description: 'Un perfume carismático que conecta al hombre con su propia esencia, el elemento más importante de la naturaleza, el agua, y todo lo que le rodea. Esta fragancia abre con una explosión de notas cítricas y especias frescas, ofreciendo un inicio vibrante y energizante.\\n\\nEn el corazón, una mezcla de flores acuáticas y notas amaderadas aporta una profundidad sofisticada y una sensación de frescura duradera. La base revela un sutil toque de madera de sándalo y almizcle, que proporciona una calidez y sensualidad sutil pero persistente.'
  },
  {
    id: 'perfume-jpg-paradise-garden',
    name: '1.1 HOMBRE JEAN PAUL PARADISE GARDEN',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '79118',
    price: 100000,
    stock: 10,
    image: 'assets/products/perfumeria/jpg-paradise-garden.jpg',
    description: 'Una fragancia cautivadora que mezcla elementos naturales que te transporta a un exuberante paraíso. Sus notas tienen una apertura refrescante de agua de coco que invita a sumergirse en un jardín tropical de delicias exóticas.\\n\\nEn el corazón amaderado, el sándalo aporta una calidez sensual, realzada por las notas especiadas del jengibre. El fondo es una caricia verde y vigorizante de higo, bañada por el sol con la dulzura de la haba tonka, dejando un rastro apasionado y masculino.'
  },
  {
    id: 'perfume-mercedes-benz-intense',
    name: '1.1 DAMA MERCEDES BENZ INTENSE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '90694',
    price: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/mercedes-benz-intense.jpg',
    description: 'Mercedes-Benz Intense para mujer es una fragancia elegante, moderna y con mucha presencia. Su aroma sofisticado combina estilo, feminidad y lujo en una presentación llamativa, ideal para uso diario, ocasiones especiales o para regalar con buen gusto.'
  },
  {
    id: 'perfume-versace-eros-flame',
    name: '1.1 HOMBRE VERSACE EROS FLAME',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '38590',
    price: 110000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/versace-eros-flame.jpg',
    description: 'Una fragancia creada bajo la premisa de representar al hombre enamorado, desarrollada con una mezcla fuera de lo común compuesta por frescos cítricos italianos que se van fusionando con notas especiadas y aromáticas de romero y pimienta negra.\\n\\nLe sigue un rastro de pasión floral de geranio, rosa y laurel, finalizando en tonalidades leñosas, de intensos cedros, pachulí, habas de tonka y vainilla. Su envase, en esta oportunidad, tiene relieves en forma de greca que se tinturan de un rojo intenso y masculino, transmitiendo la fuerza y la pasión del amor desde la perspectiva masculina.'
  },
  {
    id: 'perfume-fame-paco-rabanne',
    name: '1.1 DAMA FAME PACO RABANNE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '50570',
    price: 79000,
    stock: 10,
    image: 'assets/products/perfumeria/fame-paco-rabanne.jpg',
    description: 'Su composición olfativa es un equilibrio perfecto entre lo luminoso, lo cremoso y lo afrutado. Una fragancia chispeante, exótica y atrevida, perfecta para mujeres que buscan una esencia moderna y glamurosa.\\n\\nEn sus notas, el jazmín solar se encuentra con el incienso opulento y la cremosa madera de sándalo en una deslumbrante fragancia que libera tus facetas más brillantes.'
  },
  {
    id: 'perfume-art-of-universe',
    name: '1.1 UNISEX ART OF UNIVERSE BAUL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '81281',
    price: 120000,
    stock: 10,
    image: 'assets/products/perfumeria/art-of-universe.jpg',
    description: 'Su aroma es cítrico, especiado, fresco con acordes frutales. Su salida tiene una mandarina jugosa acompañada de bergamota, jengibre y menta; en su corazón revela los toques de pera y flor de naranjo; cierra con un fondo almizclado y con acordes de ámbar y cedro.\\n\\nPerfecto para quienes buscan destacar con un aroma único, lujoso y lleno de carácter.'
  },
  {
    id: 'perfume-asad-bourbon',
    name: '1.1 UNISEX ASAD BOURBON LATTAFA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '53285',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/asad-bourbon.jpg',
    description: 'Su aroma combina dulzura, calidez y un toque especiado, logrando una mezcla adictiva y cautivadora. En sus notas de salida se percibe una fusión dulce y especiada que atrapa los sentidos.\\n\\nPoco a poco, evoluciona hacia un corazón cálido y profundo, con maderas y resinas que le aportan carácter. Finalmente, la vainilla y el haba tonka dejan un fondo seductor, elegante y duradero.'
  },
  {
    id: 'perfume-asad-zanzibar',
    name: '1.1 UNISEX ASAD ZANZIBAR LATTAFA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '78072',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/asad-zanzibar.jpg',
    description: 'Un perfume inspirado en las islas exóticas y lujosas de Zanzíbar. Su aroma es avainillado especiado con notas de lavanda, incienso y pimienta negra, una combinación exquisita.\\n\\nSus notas de salida son lavanda y pimienta negra; en sus notas de corazón se encuentran el agua de coco, iris y sal; y sus notas de fondo son de vainilla e incienso.'
  },
  {
    id: 'perfume-lattafa-amethyst',
    name: '1.1 UNISEX LATTAFA AMETHYST BAUL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '19787',
    price: 130000,
    salePrice: 100000,
    stock: 10,
    image: 'assets/products/perfumeria/lattafa-amethyst.jpg',
    description: 'Un perfume con un aroma que combina frutas, flores y madera para crear un efecto irresistible; su aroma es dulce y sofisticado, con un toque de misterio.\\n\\nEn la cabeza, notas de fresa y piña invitan a un viaje tropical, mientras que el corazón de rosa y jazmín agrega un toque de elegancia. La base de oud le da un toque de profundidad y misterio; la vainilla y el musk crean un aroma sensual y duradero que perdura en la piel. Tiene un aroma rico y complejo, con un equilibrio perfecto entre dulzura y frescura.'
  },
  {
    id: 'perfume-diesel-plus',
    name: '1.1 DAMA DIESEL PLUS',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '37050',
    price: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/diesel-plus.jpg',
    description: 'Es una fragancia femenina en presentación Eau de Toilette de 75 ml, con un diseño limpio y moderno: frasco blanco, caja plateada metálica y logo rojo. Transmite una imagen fresca, sencilla y elegante, ideal para uso diario.'
  },
  {
    id: 'perfume-katy-perry-white-meow',
    name: '1.1 DAMA KATY PERRY WHITE MEOW',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70001',
    price: 79000,
    stock: 10,
    image: 'assets/products/perfumeria/katy-perry-white-meow.jpg',
    description: 'White! Meow de Katy Perry es una fragancia femenina, delicada y elegante, ideal para uso diario o para regalar. Su presentación en forma de gato blanco con detalles dorados la hace llamativa, moderna y diferente. Un perfume perfecto para quienes aman oler rico y destacar con estilo.'
  },
  {
    id: 'perfume-212-vip-black',
    name: '1.1 HOMBRE 212 VIP BLACK',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70002',
    price: 79000,
    stock: 10,
    image: 'assets/products/perfumeria/212-vip-black.jpg',
    description: 'Un perfume que personifica el glamour y la exclusividad, su combinación de notas intensas y seductoras la convierte en una elección inolvidable para el hombre moderno, su familia olfativa es aromática avainillada con notas especiadas y dulces, lo que lo hace un perfume muy seductor y adictivo.\n\nSus notas de salida son absenta, anís e hinojo; su corazón es lavanda; y las notas de fondo son vaina de vainilla negra y almizcle.'
  },
  {
    id: 'perfume-212-vip-rose',
    name: '1.1 DAMA 212 VIP ROSE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70003',
    price: 79000,
    stock: 10,
    image: 'assets/products/perfumeria/212-vip-rose.jpg',
    description: 'Una fragancia de la familia olfativa floral frutal. Sus chispeantes notas de champagne rosé y pimienta rosa se unen a la voluptuosa flor de durazno y a la fresia en sus notas de corazón, y en su fondo encontramos almizcle blanco y notas amaderadas.\n\nSu presentación es una botella de cristal con un sofisticado efecto degradé color rosa mate.'
  },
  {
    id: 'perfume-360-coral',
    name: '1.1 DAMA 360 CORAL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70004',
    price: 100000,
    salePrice: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/360-coral.jpg',
    description: 'Su aroma es ámbar floral con notas frutales, frescas y dulces. Es una fragancia fresca, femenina y encantadora, pensada para acompañarte con elegancia en el día a día. Su aroma transmite alegría, suavidad y un toque de sofisticación que no pasa desapercibido.'
  },
  {
    id: 'perfume-360-men',
    name: '1.1 HOMBRE 360 MEN',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70005',
    price: 100000,
    salePrice: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/360-men.jpg',
    description: 'Un perfume clásico y atemporal. Sus notas cítricas y herbales se combinan con acordes amaderados y especiados, creando una composición dinámica y equilibrada.\n\nEn su salida destaca el poder de la bergamota que da paso al intenso cardamomo, mientras el almizcle y el vibrante vetiver hacen de esta fragancia el complemento perfecto para hombres que desean algo que se adapte a cualquier ocasión.'
  },
  {
    id: 'perfume-360-fem',
    name: '1.1 DAMA 360 FEM',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70006',
    price: 100000,
    salePrice: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/360-fem.jpg',
    description: 'Un perfume clásico con un aroma elegante, su emblemático frasco minimalista aporta protagonismo a sus notas con una salida de melón, azucena, olivo oloroso, naranja tangerina y rosa; en su corazón: lirio de agua, lirio de los valles, lavanda y salvia; y para darle un toque moderno a su fórmula final cierra con un fondo de almizcle, sándalo, vetiver, ámbar y vainilla.'
  },
  {
    id: 'perfume-armani-code-black',
    name: '1.1 HOMBRE ARMANI CODE BLACK',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70007',
    price: 79000,
    stock: 10,
    image: 'assets/products/perfumeria/armani-code-black.jpg',
    description: 'Una fragancia masculina icónica, sus notas abren con brillantes notas cítricas que vibran con mandarina verde. El corazón de la fragancia está compuesto de Lavandin de Provenza, de origen sostenible, que aporta facetas modernas y aromáticas a la fragancia junto con un efecto de magnetismo y Haba Tonka, que aporta un efecto cálido y sensual que, combinado con la fuerza amaderada del Corazón de Cedro, crea una estela intensa pero reconfortante.'
  },
  {
    id: 'perfume-club-de-nuit-men',
    name: '1.1 HOMBRE CLUB THE NUIT MEN',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70008',
    price: 89000,
    stock: 10,
    image: 'assets/products/perfumeria/club-de-nuit-men.jpg',
    description: 'Un aroma predominantemente amaderado y especiado, con toques de ámbar, canela y cítricos. En sus notas de salida combinan mandarina, toronja (pomelo) y menta; las notas de corazón son una mezcla vibrante de canela, clavos de olor, jengibre y pimienta; mientras que las notas de fondo te envuelven en ámbar, cuero, pachulí, especias y acordes amaderados.'
  },
  {
    id: 'perfume-one-million-royal',
    name: '1.1 ROYAL ONE MILLION ROYAL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70009',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/one-million-royal.jpg',
    description: '1 Million Royal de Paco Rabanne es una fragancia elegante, intensa y llamativa, ideal para hombres que quieren proyectar seguridad, lujo y presencia.\n\nSu aroma sofisticado es perfecto para ocasiones especiales, salidas nocturnas o para dejar una impresión inolvidable. Un perfume con estilo premium desde su presentación hasta su fragancia.'
  },
  {
    id: 'perfume-bad-boy',
    name: '1.1 HOMBRE BAD BOY',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70010',
    price: 100000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/bad-boy.jpg',
    description: 'Representa a los hombres rebeldes que deciden su propio destino y diseñan sus principios, su envase es tan original y atrevido como el hombre en el que se inspira, para simbolizar su fuerza heroica y sus rasgos obstinados.\n\nPertenece a la familia olfativa ámbar especiada, sus notas principales son cannabis, pomelo, seguidas por pimienta negra y geranio, finalizando con cuero y vetiver.'
  },
  {
    id: 'perfume-his-confession',
    name: '1.1 HOMBRE HIS CONFESION',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70011',
    price: 110000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/perfumeria/his-confession.jpg',
    description: 'Su aroma comienza con una intrigante mezcla de canela, lavanda y mandarina, creando una apertura fresca y especiada que despierta los sentidos. A medida que la fragancia evoluciona, el corazón revela notas ricas de benjuí, iris, Mahonial y ciprés, aportando una sofisticación única y un toque de elegancia.\n\nEl viaje olfativo culmina en un fondo cálido y envolvente de vainilla, incienso, haba tonka, pachulí, cedro y ámbar, dejando una estela seductora que perdura en la piel.'
  },
  {
    id: 'perfume-her-confession',
    name: '1.1 DAMA HER CONFESION',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70012',
    price: 110000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/perfumeria/her-confession.jpg',
    description: 'Una fragancia femenina exquisita. Su aroma es dulce, floral, avainillado con toques de ámbar. Su nota de salida es una deliciosa canela que le abre paso a sus notas de corazón en el que florecen los nardos, jazmín e incienso; finaliza con un fondo cálido y seductor con una mezcla de vainilla, haba tonka y almizcle.\n\nPerfecta para mujeres que buscan una fragancia con una mezcla equilibrada de especias, flores y dulce que deja una huella inolvidable.'
  },
  {
    id: 'perfume-hugo-boss-orange',
    name: '1.1 HOMBRE HUGO BOSS ORANGE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70013',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/hugo-boss-orange.jpg',
    description: 'Loción masculina de aroma fresco, cítrico y cálido, ideal para uso diario. Tiene un estilo elegante, moderno y casual.'
  },
  {
    id: 'perfume-bombshell-intense',
    name: '1.1 DAMA VICTORIA’S SECRET BOMBSHELL INTENSE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70014',
    price: 130000,
    salePrice: 89000,
    stock: 10,
    image: 'assets/products/perfumeria/bombshell-intense.jpg',
    description: 'Una fragancia intensa, sensual y elegante, con un rojo vibrante que transmite pasión y sofisticación. Ideal para mujeres que quieren dejar huella con un aroma llamativo, duradero y muy femenino.'
  },
  {
    id: 'perfume-set-ariana-grande-x3',
    name: '1.1 DAMA SET ARIANA GRANDE X3',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70015',
    price: 110000,
    stock: 10,
    image: 'assets/products/perfumeria/set-ariana-grande-x3.jpg',
    description: 'Cloud Mini Trio de Ariana Grande: un set elegante y llamativo con tres mini perfumes en una presentación holográfica perfecta para regalar o lucir en tu tocador. Su diseño de nubes, colores delicados y tamaño práctico lo hacen ideal para llevar tu fragancia favorita a cualquier lugar. Un detalle femenino, moderno y con mucho estilo.'
  },
  {
    id: 'perfume-bombshell-gold',
    name: '1.1 DAMA VICTORIA’S SECRET BOMBSHELL GOLD',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70016',
    price: 130000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/bombshell-gold.jpg',
    description: 'Una fragancia elegante, femenina y sofisticada con presentación dorada de lujo. Ideal para mujeres que quieren dejar una impresión dulce, sensual y refinada en cualquier ocasión. Perfecta para regalar o para uso diario con un toque exclusivo.'
  },
  {
    id: 'perfume-bombshell-seduction',
    name: '1.1 DAMA VICTORIA’S SECRET BOMBSHELL SEDUCTION',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70017',
    price: 125000,
    salePrice: 75000,
    stock: 10,
    image: 'assets/products/perfumeria/bombshell-seduction.jpg',
    description: 'Una loción elegante, femenina y sofisticada, ideal para quienes buscan una fragancia delicada pero llamativa. Su aroma suave y seductor la convierte en una excelente opción para uso diario, ocasiones especiales o para regalar.\n\nPresentación atractiva con frasco de lujo y caja original, perfecta para lucir en tu tocador o sorprender a alguien especial. Aroma femenino y envolvente, excelente presentación para regalo, estilo elegante y moderno, ideal para día y noche. Contenido: 100 ml / 3.4 fl oz.'
  },
  {
    id: 'perfume-oud-for-glory',
    name: '1.1 UNISEX OUD FOR GLORY BADE’E AL OUD',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70018',
    price: 65000,
    stock: 10,
    image: 'assets/products/perfumeria/oud-for-glory.jpg',
    description: 'Es una fragancia unisex, pero por su aroma intenso, amaderado y elegante suele venderse muy bien como perfume para hombre. También puede gustarle a mujeres que prefieren perfumes fuertes, orientales y con mucha presencia.'
  },
  {
    id: 'perfume-very-sexy-night',
    name: '1.1 DAMA VICTORIA’S SECRET VERY SEXY NIGHT',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70019',
    price: 119000,
    salePrice: 74900,
    stock: 10,
    image: 'assets/products/perfumeria/very-sexy-night.jpg',
    description: 'Una loción elegante, intensa y seductora, ideal para mujeres que quieren dejar una impresión sofisticada y llamativa. Su presentación en negro con detalles dorados transmite lujo, sensualidad y exclusividad.\n\nPerfecta para la noche, salidas especiales, citas o para regalar. Una fragancia con presencia, estilo y mucha personalidad.'
  },
  {
    id: 'perfume-creed-silver-mountain-water',
    name: '1.1 UNISEX CREED SILVER MOUNTAIN WATER',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70020',
    price: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/creed-silver-mountain-water.jpg',
    description: 'Una fragancia elegante, fresca y sofisticada, ideal para quienes buscan un aroma limpio, moderno y con mucha clase. Su presentación blanca con detalles plateados transmite lujo y exclusividad, perfecta para uso diario, ocasiones especiales o para regalar.\n\nCreed Silver Mountain Water es una loción con estilo refinado, fresca y duradera, pensada para dejar una impresión elegante en todo momento.'
  },
  {
    id: 'perfume-set-lacoste-x3',
    name: 'SET LACOSTE X3',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70021',
    price: 110000,
    stock: 10,
    image: 'assets/products/perfumeria/set-lacoste-x3.jpg',
    description: '50 ml cada envase.\n\nUn set elegante y moderno, ideal para quienes buscan variedad, estilo y una excelente presentación. Incluye tres fragancias en tonos negro, rojo y blanco, perfectas para usar según la ocasión o para regalar.\n\nSu caja tipo estuche le da un toque exclusivo y llamativo, lista para sorprender a alguien especial. Es una opción práctica, versátil y con mucha presencia.'
  },
  {
    id: 'perfume-set-armaf-yum-yum-x3',
    name: 'SET ARMAF YUM YUM 3X 50ML',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70022',
    price: 110000,
    stock: 10,
    image: 'assets/products/perfumeria/set-armaf-yum-yum-x3.jpg',
    description: 'Un set femenino, dulce y llamativo, perfecto para quienes aman las fragancias juveniles y coquetas. Su presentación en forma de malteada lo hace ideal para regalo, tocador o colección.\n\nIncluye 3 unidades de 50 ml, con un diseño divertido, elegante y muy atractivo.'
  },
  {
    id: 'perfume-badee-al-oud-sublime',
    name: '1.1 UNISEX BADE’E AL OUD SUBLIME',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70023',
    price: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/badee-al-oud-sublime.jpg',
    description: 'Una fragancia elegante, intensa y llamativa, perfecta para quienes buscan un aroma con presencia y estilo. Su presentación en rojo, negro y dorado transmite lujo, exclusividad y sofisticación desde el primer vistazo.\n\nIdeal para uso diario, ocasiones especiales o para regalar. Bade’e Al Oud Sublime es una loción que combina elegancia, carácter y una presentación de alto impacto.'
  },
  {
    id: 'perfume-set-dior-sauvage-miniatures-x3',
    name: 'SET CHRISTIAN DIOR SAUVAGE COLLECTION MINIATURES X3',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70024',
    price: 110000,
    stock: 10,
    image: 'assets/products/perfumeria/set-dior-sauvage-miniatures-x3.jpg',
    description: 'Set Christian Dior Sauvage Collection Miniatures: una presentación elegante, fina y llamativa, ideal para regalo o uso personal. Incluye fragancias prácticas en tamaño mini, fáciles de llevar y perfectas para probar diferentes aromas.'
  },
  {
    id: 'perfume-pisa',
    name: '1.1 HOMBRE PISA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70025',
    price: 190000,
    salePrice: 130000,
    stock: 10,
    image: 'assets/products/perfumeria/pisa.jpg',
    description: 'Una loción elegante y sofisticada, ideal para quienes quieren destacar con una fragancia de presencia fuerte y estilo exclusivo. Su presentación llamativa transmite lujo, personalidad y buen gusto, perfecta para uso diario o para regalar.\n\nSi buscas una fragancia con imagen premium y un diseño que robe miradas, Pisa es una excelente elección.'
  },
  {
    id: 'perfume-thank-u-next',
    name: '1.1 DAMA THANK U NEXT DE ARIANA GRANDE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70026',
    price: 84000,
    stock: 10,
    image: 'assets/products/perfumeria/thank-u-next.jpg',
    description: 'Una fragancia femenina, dulce y moderna, ideal para mujeres que buscan un aroma juvenil, coqueto y llamativo. Su presentación en forma de corazón roto la hace perfecta para regalo o uso diario.\n\nAroma delicioso, presentación elegante y estilo único.'
  },
  {
    id: 'perfume-nitro-red',
    name: '1.1 HOMBRE NITRO RED',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70027',
    price: 119000,
    salePrice: 84900,
    stock: 10,
    image: 'assets/products/perfumeria/nitro-red.jpg',
    description: 'Fragancia masculina con carácter, elegancia y presencia. Su aroma sofisticado es ideal para destacar en cualquier ocasión, ya sea de día o de noche.\n\nCuenta con una presentación premium en tono rojo intenso, perfecta para hombres que buscan dejar huella con un perfume llamativo, duradero y elegante.'
  },
  {
    id: 'perfume-acqua-di-gio-profumo',
    name: '1.1 HOMBRE ACQUA DI GIO PROFUMO',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70028',
    price: 100000,
    salePrice: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/acqua-di-gio-profumo.jpg',
    description: 'Fragancia masculina elegante, intensa y sofisticada. Ideal para hombres que quieren proyectar seguridad, buen gusto y presencia en cualquier ocasión.\n\nPerfecta para uso diario, reuniones, salidas nocturnas o eventos especiales. Un aroma clásico, sobrio y con estilo.'
  },
  {
    id: 'perfume-chance-chanel',
    name: '1.1 DAMA CHANCE CHANEL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70029',
    price: 109000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/chance-chanel.jpg',
    description: 'Fragancia femenina fresca, elegante y delicada. Su aroma dulce y sofisticado es ideal para mujeres que quieren sentirse seguras, femeninas y con una presencia muy agradable durante el día.\n\nPerfecta para uso diario, trabajo, salidas o regalo. Su presentación rosada la hace llamativa, bonita y fácil de vender.'
  },
  {
    id: 'perfume-fahrenheit-dior',
    name: '1.1 HOMBRE FAHRENHEIT DIOR',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70030',
    price: 90000,
    salePrice: 69000,
    stock: 10,
    image: 'assets/products/perfumeria/fahrenheit-dior.jpg',
    description: 'Una fragancia masculina intensa, elegante y con carácter. Su aroma combina notas cálidas, amaderadas y especiadas, ideal para hombres seguros, con estilo y presencia. Perfecto para uso diario, reuniones, citas o noches especiales.\n\nFahrenheit Dior deja una impresión fuerte y sofisticada desde el primer momento.'
  },
  {
    id: 'perfume-invictus-onix',
    name: '1.1 MEN INVICTUS ONIX PACO RABANNE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70031',
    price: 75000,
    stock: 10,
    image: 'assets/products/perfumeria/invictus-onix.jpg',
    description: 'Fragancia masculina elegante, intensa y moderna, ideal para hombres seguros y con estilo. Su presentación negra con diseño tipo trofeo transmite lujo, fuerza y exclusividad.\n\nPerfecto para uso diario, salidas nocturnas, reuniones o momentos especiales. Invictus Onix Paco Rabanne es una loción con presencia, pensada para dejar una impresión fuerte y sofisticada.'
  },
  {
    id: 'perfume-arsenal-gilles-cantuel-black',
    name: '1.1 HOMBRE ARSENAL GILLES CANTUEL BLACK',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70032',
    price: 110000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/arsenal-gilles-cantuel-black.jpg',
    description: 'Loción de presentación fuerte y llamativa, ideal para quienes buscan un aroma intenso, masculino y con carácter. Su diseño en forma de granada le da un estilo diferente, moderno y muy atractivo para regalo o uso personal.\n\nPerfecta para hombres seguros, con presencia y gusto por fragancias impactantes.'
  },
  {
    id: 'perfume-arsenal-gilles-cantuel',
    name: '1.1 HOMBRE ARSENAL GILLES CANTUEL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70033',
    price: 110000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/arsenal-gilles-cantuel.jpg',
    description: 'Loción masculina con diseño fuerte y diferente, ideal para hombres con carácter y estilo. Su presentación tipo granada en color plateado la hace llamativa, moderna y perfecta para regalo.\n\nAroma intenso, con presencia y pensado para destacar en cualquier ocasión.'
  },
  {
    id: 'perfume-9pm-rebel',
    name: '1.1 UNISEX 9 PM REBEL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70034',
    price: 130000,
    salePrice: 84000,
    stock: 10,
    image: 'assets/products/perfumeria/9pm-rebel.jpg',
    description: 'Desafía la noche. 9 PM Rebel te envuelve en una aura de misterio y seducción, perfecta para tus momentos más audaces. ¿Te atreves a ser inolvidable?'
  },
  {
    id: 'perfume-atheeri-fem',
    name: '1.1 DAMA ATHEERI-FEM',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70035',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/atheeri-fem.jpg',
    description: '¡Despierta tu esencia con Atheeri-Fem! Un elixir cautivador que evoca lujo y misterio. Su diseño de abeja dorada y panal te invita a descubrir un aroma que te hará inolvidable. ¡El secreto de tu aura está a punto de ser revelado!'
  },
  {
    id: 'perfume-baccarat-rouge',
    name: '1.1 UNISEX BACCARAT ROUGE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70036',
    price: 110000,
    salePrice: 72000,
    stock: 10,
    image: 'assets/products/perfumeria/baccarat-rouge.jpg',
    description: 'Un lujoso perfume unisex de la familia olfativa ámbar floral.'
  },
  {
    id: 'perfume-bharara-rose-baul',
    name: '1.1 DAMA BHARARA ROSE BAUL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70037',
    price: 140000,
    salePrice: 119000,
    stock: 10,
    image: 'assets/products/perfumeria/bharara-rose-baul.jpg',
    description: '¡Despierta tus sentidos con Bharara Rose! Un aroma seductor y cautivador que te transportará a un jardín de rosas en plena floración. Descubre la esencia de la feminidad y el lujo. ¡Un toque de elegancia para cada momento!'
  },
  {
    id: 'perfume-odyssey-dubai-chocolate',
    name: '1.1 UNISEX ODYSSEY DUBAI CHOCOLATE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70038',
    price: 129000,
    salePrice: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/odyssey-dubai-chocolate.jpg',
    description: '¡Despierta tus sentidos con el exquisito aroma de Odyssey Dubai Chocolat! Esta fragancia unisex te envolverá en una experiencia gourmand irresistible. Descubre el lujo y la sofisticación que te transportarán a un mundo de placer. ¿Te atreves a probarlo?'
  },
  {
    id: 'perfume-stallion-53',
    name: '1.1 UNISEX STALLION 53',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70039',
    price: 99000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/stallion-53.jpg',
    description: '¡Despierta tu lado más salvaje! Stallion 53 es la fragancia unisex que dejará huella. Una explosión olfativa amaderada y rica, desarrollada en Francia. ¿Listo para seducir? Descubre el aroma que todos querrán en su piel.'
  },
  {
    id: 'perfume-club-de-nuit-sillage',
    name: '1.1 HOMBRE CLUB DE NUIT SILLAGE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70040',
    price: 120000,
    salePrice: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/club-de-nuit-sillage.jpg',
    description: '¡Deslumbra con Club de Nuit Sillage! Una fragancia que te envuelve en misterio y sofisticación. Su aroma cautivador es tu arma secreta para dejar una huella imborrable. ¿Listo para seducir?'
  },
  {
    id: 'perfume-delina',
    name: '1.1 DAMA DELINA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70041',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/delina.jpg',
    description: 'Descubre la magia de Delina Royal Essence. Un perfume que te transporta a un jardín secreto con sus notas florales y frutales. Déjate seducir por su estela elegante y cautivadora.\n\nUna fragancia que encarna la feminidad en su máxima expresión. Un ramo floral encantador y firmemente moderno. Delina es una fragancia muy matizada que es a la vez dulce y sensual. El eau de parfum se deleita con sus acordes florales que están dominados por la rosa turca, el lirio de los valles y la peonía, mezclados con las notas ácidas y redondeadas de lichi, ruibarbo, bergamota y nuez moscada. La vainilla acentúa la sensualidad de la composición en la base, mezclándose con almizcle blanco, cachemira, madera de cedro e incienso.'
  },
  {
    id: 'perfume-emeer-lattafa',
    name: '1.1 UNISEX EMEER LATTAFA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70042',
    price: 120000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/perfumeria/emeer-lattafa.jpg',
    description: 'Descubre el lujo que envuelve tus sentidos. El perfume unisex Emeer Lattafa es una joya dorada que promete una experiencia olfativa inolvidable. Su diseño exquisito y aroma cautivador te harán sentir único. ¿Listo para deslumbrar?'
  },
  {
    id: 'perfume-orientica-amber-noir',
    name: '1.1 UNISEX ORIENTICA AMBER NOIR',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70043',
    price: 150000,
    salePrice: 100000,
    stock: 10,
    image: 'assets/products/perfumeria/orientica-amber-noir.jpg',
    description: 'Sumérgete en la opulencia de Amber Noir. Una fragancia unisex que envuelve tus sentidos con misterio y seducción. Su diseño exquisito es solo el preludio de una experiencia olfativa inolvidable. ¿Te atreves a descubrir su secreto?'
  },
  {
    id: 'perfume-choco-overdose',
    name: '1.1 DAMA CHOCO OVERDOSE GIVE ME GOURMAND',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70044',
    price: 100000,
    stock: 10,
    image: 'assets/products/perfumeria/choco-overdose.jpg',
    description: '¿Amante del chocolate? Prepárate para una indulgencia olfativa que te seducirá por completo. Descubre el irresistible "Choco Overdose", un aroma que te transportará a un paraíso goloso. ¿Te atreves a probarlo?'
  },
  {
    id: 'perfume-dg-the-one-dama',
    name: '1.1 DAMA DOLCE & GABBANA THE ONE',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70045',
    price: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/dg-the-one-dama.jpg',
    description: 'Descubre el secreto de tu magnetismo. Dolce & Gabbana The One Eau de Parfum para mujer, una fragancia que envuelve tus sentidos con notas cautivadoras y un aura de lujo inconfundible. ¿Lista para ser la única?'
  },
  {
    id: 'perfume-al-qiam-gold',
    name: '1.1 UNISEX AL QIAM GOLD',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70046',
    price: 140000,
    salePrice: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/al-qiam-gold.jpg',
    description: 'Despierta tus sentidos con Al Qiam Gold, la fragancia unisex que irradia lujo y misterio. Su cautivador aroma te transportará a un mundo de opulencia. ¿Estás listo para descubrir su secreto? ¡Una experiencia olfativa que no olvidarás!'
  },
  {
    id: 'perfume-amor-amor-cacharel',
    name: '1.1 DAMA AMOR AMOR DE CACHAREL',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70047',
    price: 90000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/perfumeria/amor-amor-cacharel.jpg',
    description: '¡Despierta tu sensualidad con Amor Amor de Cacharel! Un elixir vibrante que evoca la pasión y el romance, encapsulado en un diseño icónico. Siente la explosión de notas que conquistarán todos tus sentidos. ¡Atrae miradas y vive el amor al máximo!'
  },
  {
    id: 'perfume-khamrah-waha',
    name: '1.1 UNISEX KHAMRAH WAHA',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70048',
    price: 90000,
    stock: 10,
    image: 'assets/products/perfumeria/khamrah-waha.jpg',
    description: '¡Despierta tus sentidos con Khamrah Waha! Este perfume unisex te envuelve en una estela misteriosa y cautivadora. Una fragancia que define tu presencia. ¿Listo para dejar huella?'
  },
  {
    id: 'perfume-set-lattafa-give-me-gourmand-x3',
    name: 'SET X3 LATTAFA GIVE ME GOURMAND 30ML',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70049',
    price: 199000,
    salePrice: 129000,
    stock: 10,
    image: 'assets/products/perfumeria/set-lattafa-give-me-gourmand-x3.jpg',
    description: '¡Despierta tus sentidos con el SET X3 LATTAFA GIVE ME GOURMAND! Sumérgete en un mundo de fragancias dulces y deliciosas que te harán agua la boca. Cada frasco es una tentación, una invitación a disfrutar de momentos irresistibles. ¿Te atreves a probarlos?'
  },
  {
    id: 'perfume-set-khamrah-x3',
    name: 'SET KHAMRAH X3',
    category: 'perfumeria',
    categoryLabel: 'Perfumería',
    ref: '70050',
    price: 170000,
    salePrice: 129000,
    stock: 10,
    image: 'assets/products/perfumeria/set-khamrah-x3.jpg',
    description: 'Descubre el enigma olfativo con el SET KHAMRAH X3. Tres fragancias cautivadoras que despertarán tus sentidos y te transportarán a un mundo de lujo. ¿Estás listo para dejar huella? El secreto de tu aroma perfecto te espera.'
  },
  {
    id: 'reloj-casio-dorado-economico',
    name: 'CASIO ESTILO RELOJ DORADO ECONOMICO',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80001',
    price: 30000,
    salePrice: 25000,
    stock: 10,
    image: 'assets/products/relojeria-replica/casio-dorado-economico.jpg',
    description: 'Vintage Oro A – Elegancia económica con apariencia similar al original.\n\nUn reloj clásico y accesible que combina estilo y funcionalidad. El Casio Vintage Oro A ofrece una apariencia muy parecida al original, ideal para quienes desean un diseño elegante sin gastar mucho.\n\nGarantía de operatividad x30 días.'
  },
  {
    id: 'reloj-tommy-hilfiger-hc47',
    name: 'TOMMY HILFIGER HC47',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80002',
    price: 100000,
    salePrice: 69000,
    stock: 10,
    image: 'assets/products/relojeria-replica/tommy-hilfiger-hc47.jpg',
    description: 'Garantía de operatividad x30 días.\n\nNo resistente al agua.'
  },
  {
    id: 'reloj-rolex-submarine-f11',
    name: 'ROLEX SUBMARINE F11',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80003',
    price: 120000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/relojeria-replica/rolex-submarine-f11.jpg',
    description: 'Elegancia y sofisticación al alcance de tu muñeca.\n\nDescubre la perfecta combinación entre diseño clásico y lujo con esta réplica de reloj tipo Rolex. Fabricado con materiales de alta calidad, este reloj es ideal para quienes desean un accesorio elegante y distintivo sin comprometer su presupuesto.'
  },
  {
    id: 'reloj-casio-manilla-plastico-aa',
    name: 'CASIO MANILLA PLASTICO AA',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80004',
    price: 59000,
    stock: 10,
    image: 'assets/products/relojeria-replica/casio-manilla-plastico-aa.jpg',
    description: 'Casio con Manilla de Plástico AA.\n\nDiseñado para resistir las condiciones más exigentes, este reloj Casio con manilla de plástico AA ofrece durabilidad y comodidad en cualquier entorno. Perfecto para quienes buscan un accesorio confiable que acompañe su ritmo diario sin importar el clima.'
  },
  {
    id: 'reloj-digital-economico-amarillo',
    name: 'RELOJ DIGITAL ECONOMICO AMARILLO',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80005',
    price: 15000,
    stock: 10,
    image: 'assets/products/relojeria-replica/reloj-digital-economico-amarillo.jpg',
    description: 'No es resistente al agua.'
  },
  {
    id: 'reloj-casio-plata-economico',
    name: 'CASIO ESTILO RELOJ PLATA ECONOMICO',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80006',
    price: 25000,
    stock: 10,
    image: 'assets/products/relojeria-replica/casio-plata-economico.jpg',
    description: 'No resistente al agua.\n\nGarantía al recibir.\n\nLínea económica.'
  },
  {
    id: 'reloj-casio-frq',
    name: 'RELOJ CASIO FRQ',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80007',
    price: 65000,
    stock: 10,
    image: 'assets/products/relojeria-replica/reloj-casio-frq.jpg',
    description: 'Reloj Casio – Dorado con Esfera Negra.\n\nCaja y correa en acero inoxidable dorado, resistentes y elegantes. Esfera negra minimalista con marcadores dorados de alto contraste. Calendario integrado a las 3 en punto.\n\nMovimiento de cuarzo japonés, precisión y durabilidad garantizadas. Diseño cuadrado estilizado que aporta un look sofisticado y versátil.'
  },
  {
    id: 'reloj-digital-economico-verde',
    name: 'RELOJ DIGITAL ECONOMICO VERDE',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80008',
    price: 15000,
    stock: 10,
    image: 'assets/products/relojeria-replica/reloj-digital-economico-verde.jpg',
    description: 'No es resistente al agua.'
  },
  {
    id: 'reloj-casio-oro-rosa-economico',
    name: 'CASIO ESTILO RELOJ ORO ROSA ECONOMICO',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80009',
    price: 25000,
    stock: 10,
    image: 'assets/products/relojeria-replica/casio-oro-rosa-economico.jpg',
    description: 'Clase y elegancia en un solo reloj.'
  },
  {
    id: 'reloj-richard-mille-ch011',
    name: 'RICHARD MILLE METALICO EDICION ESPECIAL CH011',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80010',
    price: 140000,
    salePrice: 90000,
    stock: 10,
    image: 'assets/products/relojeria-replica/richard-mille-ch011.jpg',
    description: 'El más vendido del mercado.\n\nCaja incluida.\n\nNo es resistente al agua.'
  },
  {
    id: 'reloj-porta-reloj',
    name: 'PORTA RELOJ',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80011',
    price: 4000,
    stock: 10,
    image: 'assets/products/relojeria-replica/porta-reloj.jpg',
    description: ''
  },
  {
    id: 'reloj-g-shock-brazil-a1',
    name: 'G-SHOCK BRAZIL A1',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80012',
    price: 65000,
    stock: 10,
    image: 'assets/products/relojeria-replica/g-shock-brazil-a1.jpg',
    description: 'No resistente al agua.'
  },
  {
    id: 'reloj-oakley-cobra-ch11',
    name: 'OAKLEY COBRA CH11',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80013',
    price: 95000,
    stock: 10,
    image: 'assets/products/relojeria-replica/oakley-cobra-ch11.jpg',
    description: 'No es resistente al agua.'
  },
  {
    id: 'reloj-casio-negro-economico',
    name: 'CASIO ESTILO RELOJ NEGRO ECONOMICO',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80014',
    price: 45000,
    salePrice: 30000,
    stock: 10,
    image: 'assets/products/relojeria-replica/casio-negro-economico.jpg',
    description: 'Garantía al recibir.'
  },
  {
    id: 'reloj-casio-tornasol-474s',
    name: 'CASIO TORNAZOL HOMBRE 474S',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80015',
    price: 90000,
    salePrice: 65000,
    stock: 10,
    image: 'assets/products/relojeria-replica/casio-tornasol-474s.jpg',
    description: ''
  }
];

// refs ya usadas (para no repetir al agregar productos nuevos): 84213, 93810, 24592, 13278, 52445, 29772, 61750, 95319, 16328, 19494, 80239, 22337, 57931, 86387, 17602, 62950, 59906, 36224, 88569, 33435, 40180, 42562, 27464, 21348, 42918, 60209, 79574, 99693, 80599, 16863, 45084, 21427, 63377, 44937, 24116, 71615, 33816, 85805, 49813, 36240, 63751, 44763, 79885, 42134, 35342, 45985, 31109, 26800, 83560, 23999, 30106, 43478, 63970, 35161, 40059, 68437, 68405, 58312, 85433, 45367, 54059, 80475, 15239, 68417, 97553, 91558, 81733, 46048, 42098, 39256, 28289, 23434, 98696, 81482, 21395, 87397, 65302, 14165, 13905, 22280, 38657, 40495, 76237, 88907, 61064, 88838, 47875, 25839, 24974, 20221, 53666, 23576, 10160, 94316, 85603, 54336, 47639, 86606, 45046, 24045, 92670, 97302, 37484, 93381, 75313, 56422, 64509, 79118, 90694, 38590, 50570, 81281, 53285, 78072, 19787, 37050, 13478, 70001, 70002, 70003, 70004, 70005, 70006, 70007, 70008, 70009, 70010, 70011, 70012, 70013, 70014, 70015, 70016, 70017, 70018, 70019, 70020, 70021, 70022, 70023, 70024, 70025, 70026, 70027, 70028, 70029, 70030, 70031, 70032, 70033, 70034, 70035, 70036, 70037, 70038, 70039, 70040, 70041, 70042, 70043, 70044, 70045, 70046, 70047, 70048, 70049, 70050, 80001, 80002, 80003, 80004, 80005, 80006, 80007, 80008, 80009, 80010, 80011, 80012, 80013, 80014, 80015

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
