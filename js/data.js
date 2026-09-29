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
   - extraCategories: (opcional) otras categorías donde también debe
     aparecer el producto, ej. ['hogar', 'tecnologia']. Es el mismo
     producto (mismo precio/ref): sale una sola vez en buscador y ofertas.
   - sizes: (opcional) tallas, ej. ['S', 'M', 'L']. La ficha muestra un
     selector obligatorio y la talla viaja al carrito y a WhatsApp.
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
     Si una categoría pasa de 100 archivos, se reparte en subcarpetas
     numeradas de máx. 100: assets/products/tecnologia/1/, /2/, ...
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
  },
  {
    id: 'reloj-patek-philippe-geneve-ch0005',
    name: 'PATEK PHILIPPE GENEVE CH0005',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80016',
    price: 120000,
    salePrice: 94900,
    stock: 10,
    image: 'assets/products/relojeria-replica/patek-philippe-geneve-ch0005.jpg',
    description: 'Garantía de operatividad 30 días.\n\nNo resistente al agua.'
  },
  {
    id: 'reloj-hublot-ch444471',
    name: 'HUBLOT CH444471',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80017',
    price: 75000,
    stock: 10,
    image: 'assets/products/relojeria-replica/hublot-ch444471.jpg',
    description: 'Garantía de operatividad 30 días.\n\nNo resistente al agua.'
  },
  {
    id: 'reloj-invicta-bolt-ch111547',
    name: 'INVICTA BOLT CH111547',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80018',
    price: 99000,
    stock: 10,
    image: 'assets/products/relojeria-replica/invicta-bolt-ch111547.jpg',
    description: 'Garantía de operatividad 30 días.\n\nNo resistente al agua.'
  },
  {
    id: 'reloj-patek-philippe-geneve-ch00447',
    name: 'PATEK PHILIPPE GENEVE CH00447',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80019',
    price: 140000,
    salePrice: 90000,
    stock: 10,
    image: 'assets/products/relojeria-replica/patek-philippe-geneve-ch00447.jpg',
    description: 'Garantía de operatividad 30 días.\n\nNo resistente al agua.'
  },
  {
    id: 'reloj-dama-casio-ch3334',
    name: 'DAMA CASIO CH3334',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80020',
    price: 130000,
    salePrice: 90000,
    stock: 10,
    image: 'assets/products/relojeria-replica/dama-casio-ch3334.jpg',
    description: 'Reloj para dama.\n\nNo resiste al agua.\n\nGarantía de operatividad.'
  },
  {
    id: 'reloj-patek-philippe-ch5477',
    name: 'PATEK PHILIPPE CH5477',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80021',
    price: 90000,
    stock: 10,
    image: 'assets/products/relojeria-replica/patek-philippe-ch5477.jpg',
    description: 'Garantía 1 mes de operatividad.\n\nNo resiste al agua.'
  },
  {
    id: 'reloj-patek-philippe-ch477',
    name: 'PATEK PHILIPPE CH477',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80022',
    price: 90000,
    stock: 10,
    image: 'assets/products/relojeria-replica/patek-philippe-ch477.jpg',
    description: 'Garantía 1 mes de operatividad.\n\nNo resiste al agua.'
  },
  {
    id: 'reloj-casio-hombre-547',
    name: 'CASIO HOMBRE 547',
    category: 'relojeria-replica',
    categoryLabel: 'Relojería Réplica',
    ref: '80023',
    price: 90000,
    salePrice: 70000,
    stock: 10,
    image: 'assets/products/relojeria-replica/casio-hombre-547.jpg',
    description: 'No resistente al agua.'
  },
  {
    id: 'vape-snoop-dogg-death',
    name: 'SNOOP DOGG VAPE DEATH',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80024',
    price: 25000,
    stock: 10,
    image: 'assets/products/vape/snoop-dogg-vape-death.jpg',
    description: '5.000 puffs.'
  },
  {
    id: 'vape-ease',
    name: 'EASE',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80025',
    price: 26000,
    stock: 10,
    image: 'assets/products/vape/ease.jpg',
    description: 'Recargable. Nicotina 5%. Práctico.'
  },
  {
    id: 'vape-nicky-jam',
    name: 'NICKY JAM VAPE',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80026',
    price: 45000,
    salePrice: 30000,
    stock: 10,
    image: 'assets/products/vape/nicky-jam-vape.jpg',
    description: '10.000 puffs.\n\nCargador cable tipo C incluido.'
  },
  {
    id: 'vape-chillax',
    name: 'CHILLAX',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80027',
    price: 40000,
    salePrice: 30000,
    stock: 10,
    image: 'assets/products/vape/chillax.jpg',
    description: '15.000 puffs.'
  },
  {
    id: 'vape-chris-brown',
    name: 'CHRIS BROWN VAPE',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80028',
    price: 50000,
    salePrice: 35000,
    stock: 10,
    image: 'assets/products/vape/chris-brown-vape.jpg',
    description: '15.000 puffs.'
  },
  {
    id: 'vape-beco',
    name: 'BECO',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80029',
    price: 36000,
    stock: 10,
    image: 'assets/products/vape/beco.jpg',
    description: '15.000 puffs.'
  },
  {
    id: 'vape-beyond',
    name: 'BEYOND',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80030',
    price: 55000,
    salePrice: 35000,
    stock: 10,
    image: 'assets/products/vape/beyond.jpg',
    description: '12.000 puffs.\n\nImportado de Inglaterra.'
  },
  {
    id: 'vape-ijoy',
    name: 'IJOY',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80031',
    price: 27000,
    stock: 10,
    image: 'assets/products/vape/ijoy.jpg',
    description: '10.000 usos.'
  },
  {
    id: 'vape-vera',
    name: 'VERA',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80032',
    price: 30000,
    stock: 10,
    image: 'assets/products/vape/vera.jpg',
    description: '22.000 puffs.\n\nDiferentes sabores.'
  },
  {
    id: 'vape-lost-mary',
    name: 'LOST MARY',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80033',
    price: 22000,
    stock: 10,
    image: 'assets/products/vape/lost-mary.jpg',
    description: '5.000 puffs.'
  },
  {
    id: 'vape-rab-beats',
    name: 'RAB BEATS VAPE',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80034',
    price: 40000,
    salePrice: 30000,
    stock: 10,
    image: 'assets/products/vape/rab-beats-vape.jpg',
    description: '10.000 puffs.'
  },
  {
    id: 'vape-bugatti',
    name: 'BUGATTI VAPE',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80035',
    price: 50000,
    salePrice: 37000,
    stock: 10,
    image: 'assets/products/vape/bugatti-vape.jpg',
    description: '17.000 puffs.'
  },
  {
    id: 'vape-pog-king',
    name: 'POG KING VAPE',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80036',
    price: 40000,
    salePrice: 31000,
    stock: 10,
    image: 'assets/products/vape/pog-king-vape.jpg',
    description: '13.000 puffs.'
  },
  {
    id: 'vape-tyson',
    name: 'TYSON VAPE',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80037',
    price: 35000,
    salePrice: 20000,
    stock: 10,
    image: 'assets/products/vape/tyson-vape.jpg',
    description: '7.000 puffs.'
  },
  {
    id: 'vape-north',
    name: 'NORTH',
    category: 'vape',
    categoryLabel: 'Vape',
    ref: '80038',
    price: 40000,
    salePrice: 26900,
    stock: 10,
    image: 'assets/products/vape/north.jpg',
    description: '¡Descubre el sabor audaz de NORTH Strawberry Banana! Con 12.000 caladas y un 5% de nicotina, esta explosión de sabor te llevará a un viaje inolvidable. ¿Estás listo para vivir la experiencia NORTH?'
  },
  {
    id: 'reloj-smart-watch-s3-pro',
    name: 'SMART WATCH S3 PRO',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    extraCategories: ['tecnologia'],
    ref: '80039',
    price: 250000,
    salePrice: 180000,
    stock: 10,
    image: 'assets/products/relojeria-original/smart-watch-s3-pro.jpg',
    gallery: [
      'assets/products/relojeria-original/smart-watch-s3-pro-1.jpg',
      'assets/products/relojeria-original/smart-watch-s3-pro-2.jpg',
      'assets/products/relojeria-original/smart-watch-s3-pro-3.jpg',
      'assets/products/relojeria-original/smart-watch-s3-pro-4.jpg',
      'assets/products/relojeria-original/smart-watch-s3-pro-5.jpg',
      'assets/products/relojeria-original/smart-watch-s3-pro-6.jpg'
    ],
    description: 'Smartwatch G-Tide S3 Pro – Tecnología y estilo en tu muñeca.\n\nEl G-Tide S3 Pro es un reloj inteligente diseñado para quienes buscan funcionalidad, elegancia y alto rendimiento.\n\nPantalla AMOLED HD de 2.01", con colores vivos y negros intensos. Resistencia IP68, resistente al agua hasta 50 metros, adecuado para actividades acuáticas. Conectividad Bluetooth para llamadas y sincronización con smartphones — realiza y recibe llamadas desde tu muñeca.\n\nMonitoreo de salud completo: frecuencia cardíaca, oxígeno en sangre, sueño y ciclo femenino. Múltiples modos deportivos para registrar diferentes actividades físicas. Batería de larga duración, con hasta 7 días de uso continuo con todas las funciones activadas.\n\nNotificaciones en tiempo real (WhatsApp, SMS, redes sociales). Compatible con iOS y Android. Diseño elegante y moderno, con correa de silicona y cuerpo de aleación.'
  },
  {
    id: 'reloj-original-qq-dorado',
    name: 'ORIGINAL Q&Q DORADO',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80040',
    price: 180000,
    salePrice: 120000,
    stock: 10,
    image: 'assets/products/relojeria-original/original-qq-dorado.jpg',
    gallery: [
      'assets/products/relojeria-original/original-qq-dorado-1.jpg',
      'assets/products/relojeria-original/original-qq-dorado-2.jpg',
      'assets/products/relojeria-original/original-qq-dorado-3.jpg'
    ],
    description: 'Un clásico que combina sencillez, estilo y calidad japonesa: 100% original Q&Q con garantía de fábrica.\n\nEsfera blanca minimalista con marcadores plateados. Caja y correa en acero inoxidable, resistentes y elegantes. Diseño ligero y cómodo para uso diario.\n\nMovimiento japonés de cuarzo, reconocido por su precisión. Resistencia al agua (water resist), ideal para cualquier ocasión.\n\nPerfecto para quienes buscan un reloj sobrio, elegante y duradero a un precio accesible.'
  },
  {
    id: 'reloj-kairos-fa226m-303b',
    name: 'KAIROS ORIGINAL FA226M-303B HOMBRE',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80041',
    price: 70000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa226m-303b.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-snille-x7',
    name: 'ORIGINAL SNILLE X7',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80042',
    price: 90000,
    stock: 10,
    image: 'assets/products/relojeria-original/snille-x7.jpg',
    gallery: [
      'assets/products/relojeria-original/snille-x7-1.jpg',
      'assets/products/relojeria-original/snille-x7-2.jpg'
    ],
    description: 'Reloj original resistente al agua.\n\nGarantía de 3 meses — conservar todos los artículos para la garantía.\n\nReloj de marca totalmente fina.'
  },
  {
    id: 'reloj-kairos-fa228-900m',
    name: 'KAIROS ORIGINAL FA228-900M',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80043',
    price: 139000,
    salePrice: 100000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa228-900m.jpg',
    description: 'Garantía de 6 meses de maquinaria.\n\nNueva colección. Reloj resistente al agua.'
  },
  {
    id: 'reloj-dama-kairos-fa036l-800c',
    name: 'DAMA KAIROS ORIGINAL FA036L-800C',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80044',
    price: 125000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa036l-800c.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-ha590m-904',
    name: 'RELOJ ORIGINAL KAIROS HA590M-904',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80045',
    price: 199000,
    salePrice: 139000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-ha590m-904.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa039m-900',
    name: 'KAIROS ORIGINAL FA039M-900 HOMBRE',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80046',
    price: 85000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa039m-900.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa034m-003b',
    name: 'KAIROS ORIGINAL FA034M-003B HOMBRE',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80047',
    price: 85000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa034m-003b.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-mecanico-al8038-303',
    name: 'KAIROS ORIGINAL MECANICO AL8038-303',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80048',
    price: 290000,
    salePrice: 200000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-mecanico-al8038-303.jpg',
    description: 'Sumergible. 6 meses de garantía de maquinaria.'
  },
  {
    id: 'reloj-kairos-mecanico-al8038-900',
    name: 'KAIROS ORIGINAL MECANICO AL8038-900',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80049',
    price: 250000,
    salePrice: 200000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-mecanico-al8038-900.jpg',
    description: 'Caja de lujo incluida. 100% original. Resistente al agua.\n\nGarantía de 6 meses en maquinaria.'
  },
  {
    id: 'reloj-kairos-dm3873-6',
    name: 'KAIROS ORIGINAL DIGITAL HOMBRE DM3873-6',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80050',
    price: 125000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-dm3873-6.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-dm3873-7',
    name: 'KAIROS ORIGINAL HOMBRE DM3873-7',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80051',
    price: 125000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-dm3873-7.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa228-001m',
    name: 'KAIROS ORIGINAL FA228-001M',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80052',
    price: 150000,
    salePrice: 92000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa228-001m.jpg',
    description: 'Reloj 100% original con caja incluida. Reloj hombre.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa081b-900m',
    name: 'KAIROS ORIGINAL FA081B-900M HOMBRE',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80053',
    price: 100000,
    salePrice: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa081b-900m.jpg',
    description: 'Reloj 100% original con caja incluida. Reloj hombre.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa033m-001a',
    name: 'KAIROS ORIGINAL FA033M-001A',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80054',
    price: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa033m-001a.jpg',
    description: 'Reloj 100% original con caja incluida. Reloj hombre.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa034m-001b',
    name: 'KAIROS ORIGINAL FA034M-001B',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80055',
    price: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa034m-001b.jpg',
    description: 'Reloj 100% original con caja incluida. Reloj hombre.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa227m-001b',
    name: 'KAIROS ORIGINAL FA227M-001B HOMBRE',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80056',
    price: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa227m-001b.jpg',
    description: 'Reloj 100% original con caja incluida. Reloj hombre.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua.'
  },
  {
    id: 'reloj-kairos-fa228m-003b',
    name: 'KAIROS ORIGINAL FA228M-003B',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80057',
    price: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa228m-003b.jpg',
    description: 'Reloj 100% original con caja incluida. Reloj hombre.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua.'
  },
  {
    id: 'reloj-kairos-fa173m-800a',
    name: 'KAIROS ORIGINAL FA173M-800A',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80058',
    price: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa173m-800a.jpg',
    description: 'Reloj 100% original con caja incluida. Reloj hombre.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua.'
  },
  {
    id: 'reloj-atletico-nacional',
    name: 'RELOJ OFICIAL ATLETICO NACIONAL',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80059',
    price: 200000,
    stock: 10,
    image: 'assets/products/relojeria-original/atletico-nacional.jpg',
    description: 'Incluye 2 pulsos, caja de lujo del verde.\n\nGarantía 6 meses maquinaria.\n\nResistente al agua. No sumergible.'
  },
  {
    id: 'reloj-america-de-cali-2026',
    name: 'RELOJ OFICIAL AMERICA DE CALI 2026',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80060',
    price: 240000,
    salePrice: 190000,
    stock: 10,
    image: 'assets/products/relojeria-original/america-de-cali-2026.jpg',
    description: 'Reloj 100% original con caja incluida de lujo. Doble pulso.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa034m-002b',
    name: 'ORIGINAL KAIROS FA034M-002B HOMBRE',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80061',
    price: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa034m-002b.jpg',
    description: 'Reloj 100% original con caja incluida. Reloj hombre.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua.'
  },
  {
    id: 'reloj-kairos-fa036m-111',
    name: 'KAIROS ORIGINAL FA036M-111',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80062',
    price: 80000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa036m-111.jpg',
    description: 'Resistente al agua (lluvia, ducha, lavado de manos). Pulso en acero. Calendario.'
  },
  {
    id: 'reloj-kairos-dm1851-blanco',
    name: 'KAIROS ORIGINAL HOMBRE DM1851 BLANCO',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80063',
    price: 50000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-dm1851-blanco.jpg',
    description: 'Sumergible 3 MT.\n\nGarantía de 6 meses.\n\nReloj digital. Luz LED en pantalla.'
  },
  {
    id: 'reloj-seleccion-colombia',
    name: 'OFICIAL SELECCION COLOMBIA KAIROS ORIGINAL',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80064',
    price: 270000,
    salePrice: 200000,
    stock: 10,
    image: 'assets/products/relojeria-original/seleccion-colombia.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-dm1851-negro',
    name: 'KAIROS ORIGINAL HOMBRE DM1851 NEGRO',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80065',
    price: 50000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-dm1851-negro.jpg',
    description: 'Sumergible 3 MT.\n\nGarantía de 6 meses.\n\nReloj digital.'
  },
  {
    id: 'reloj-kairos-fa208m-901',
    name: 'ORIGINAL KAIROS HOMBRE FA208M-901',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80066',
    price: 130000,
    salePrice: 90000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa208m-901.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-fa173m-309a',
    name: 'KAIROS ORIGINAL HOMBRE FA173M-309A',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80067',
    price: 120000,
    salePrice: 85000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-fa173m-309a.jpg',
    description: 'Reloj 100% original con caja incluida.\n\nGarantía de 6 meses en maquinaria.\n\nResistente al agua. No es sumergible.'
  },
  {
    id: 'reloj-kairos-du430493g-3',
    name: 'MECANICO ORIGINAL KAIROS DU430493G-3',
    category: 'relojeria-original',
    categoryLabel: 'Relojería Original',
    ref: '80068',
    price: 240000,
    salePrice: 189000,
    stock: 10,
    image: 'assets/products/relojeria-original/kairos-du430493g-3.jpg',
    description: 'Reloj caballero.\n\n1 año de garantía.\n\nResistente al agua. No sumergible.'
  },

  /* ---------- Camisas 1.1 Fútbol ---------- */
  {
    id: 'camisa-al-ittihad-club-23-24',
    name: '1.1 AL-ITTIHAD CLUB 23/24',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '60155',
    price: 59800,
    stock: 1,
    sizes: ['XL'],
    image: 'assets/products/camisas-futbol/al-ittihad-club-23-24.jpg',
    description: 'LOGOS EN PARCHE\n\nCAMISA DEPORTIVA REDUCIDA\n\nVERSION JUGADOR\n\nTELA MICROPERDORADA MAS TOP\n\nPARCHE LICENCIA OFICIAL\n\nIDENTICA ALA ORIGINAL Y MAXIMA CALIDAD\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-america-de-mexico-entreno',
    name: '1.1 AMERICA DE MEXICO ENTRENO',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '77866',
    price: 59800,
    stock: 1,
    sizes: ['S', 'M'],
    image: 'assets/products/camisas-futbol/america-de-mexico-entreno.jpg',
    description: '¡Siente la pasión de las Águilas! Esta camiseta de entrenamiento del América de México, con su diseño vibrante y tecnología Dri-FIT, te impulsa a darlo todo. Luce tus colores con orgullo y eleva tu juego. ¡No esperes más para unirte a la grandeza!\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-atletico-de-madrid-24-25',
    name: '1.1 ATLETICO DE MADRID 24/25',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '48092',
    price: 59800,
    stock: 1,
    sizes: ['XXL'],
    image: 'assets/products/camisas-futbol/atletico-de-madrid-24-25.jpg',
    description: 'LOGOS EN PARCHE\n\nCAMISA DEPORTIVA REDUCIDA\n\nVERSION JUGADOR\n\nTELA MICROPERDORADA MAS TOP\n\nPARCHE LICENCIA OFICIAL\n\nIDENTICA ALA ORIGINAL Y MAXIMA CALIDAD\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-barcelona-2026',
    name: '1.1 BARCELONA 2026',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '97243',
    price: 85800,
    salePrice: 52300,
    stock: 2,
    sizes: ['M', 'L', 'XL'],
    image: 'assets/products/camisas-futbol/barcelona-2026.jpg',
    description: '¡Prepárate para el futuro del Barça! La equipación 2026 llega con un amarillo vibrante y las icónicas franjas rojas, combinando pasión y tecnología. Siente la grandeza en cada detalle. ¿Listo para ser parte de la historia? ¡Descúbrela!\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-chelsea-24-25',
    name: '1.1 CHELSEA 24/25',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '70690',
    price: 59800,
    stock: 1,
    sizes: ['L', 'XXL'],
    image: 'assets/products/camisas-futbol/chelsea-24-25.jpg',
    description: 'LOGOS EN PARCHE\n\nCAMISA DEPORTIVA REDUCIDA\n\nVERSION JUGADOR\n\nTELA MICROPERDORADA MAS TOP\n\nPARCHE LICENCIA OFICIAL\n\nIDENTICA ALA ORIGINAL Y MAXIMA CALIDAD\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-gorra-bayern-munchen',
    name: '1.1 GORRA BAYERN MUNCHEN',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    extraCategories: ['deporte'],
    ref: '29270',
    price: 49800,
    stock: 4,
    image: 'assets/products/camisas-futbol/gorra-bayern-munchen.jpg',
    gallery: [
      'assets/products/camisas-futbol/gorra-bayern-munchen-1.jpg',
      'assets/products/camisas-futbol/gorra-bayern-munchen-2.jpg',
      'assets/products/camisas-futbol/gorra-bayern-munchen-3.jpg'
    ],
    description: '¡Demuestra tu pasión por el Bayern Múnich con esta gorra oficial! Su vibrante color rojo y el emblemático escudo te harán sentir parte del equipo. Perfecta para lucir tu orgullo en cada partido o en tu día a día. ¡No esperes más para llevar contigo la gloria!'
  },
  {
    id: 'camisa-gorra-manchester-city',
    name: '1.1 GORRA MANCHESTER CITY',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    extraCategories: ['deporte'],
    ref: '67161',
    price: 57000,
    salePrice: 28500,
    stock: 1,
    image: 'assets/products/camisas-futbol/gorra-manchester-city.jpg',
    gallery: [
      'assets/products/camisas-futbol/gorra-manchester-city-1.jpg',
      'assets/products/camisas-futbol/gorra-manchester-city-2.jpg',
      'assets/products/camisas-futbol/gorra-manchester-city-3.jpg'
    ],
    description: '¡Lleva tu pasión por el Manchester City a otro nivel! Esta gorra vibrante no es solo un accesorio, es la declaración definitiva de tu lealtad. Luce el icónico escudo con orgullo y siente la energía del club en cada uso. ¡Que empiece la celebración!'
  },
  {
    id: 'camisa-gorra-santos',
    name: '1.1 GORRA SANTOS',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    extraCategories: ['deporte'],
    ref: '40976',
    price: 49800,
    stock: 4,
    image: 'assets/products/camisas-futbol/gorra-santos.jpg',
    description: '¡Luce tu pasión por el Santos con esta gorra única! Su diseño imponente y los detalles exclusivos te harán destacar. Siente el orgullo y lleva tu amor por el Peixe a donde vayas. ¡No te quedes sin la tuya y sé el fan número uno!'
  },
  {
    id: 'camisa-inter-de-milan',
    name: '1.1 INTER DE MILAN',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '88604',
    price: 59800,
    stock: 1,
    sizes: ['M'],
    image: 'assets/products/camisas-futbol/inter-de-milan.jpg',
    description: '¡La intensidad naranja que cautiva! Luce la **1.1 INTER DE MILAN** y siente el rugido del "Nerazzurri" con un diseño que no pasa desapercibido. Sé el primero en deslumbrar con este auténtico tesoro futbolístico. ¡No querrás perdértelo!\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-manchester-city-ch1',
    name: '1.1 MANCHESTER CITY CH1',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '57970',
    price: 59800,
    stock: 0,
    sizes: ['XL'],
    image: 'assets/products/camisas-futbol/manchester-city-ch1.jpg',
    description: '¡Siente la energía de la victoria! Conviértete en un verdadero Citizen con esta camiseta **1.1 MANCHESTER CITY CH1**. Su diseño vibrante y detalles exclusivos te harán destacar. ¿Listo para vivir la pasión del fútbol? ¡Consigue la tuya ahora!'
  },
  {
    id: 'camisa-manchester-city-ch2',
    name: '1.1 MANCHESTER CITY CH2',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '73220',
    price: 58000,
    stock: 0,
    sizes: ['M', 'L'],
    image: 'assets/products/camisas-futbol/manchester-city-ch2.jpg',
    description: '¡Siente la adrenalina del Etihad! Esta camiseta del Manchester City te hará vibrar con cada jugada. Luce los colores de tu equipo y domina el campo. ¡No te quedes sin la tuya y vive la pasión!\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-marsella',
    name: '1.1 MARSELLA',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '18940',
    price: 68200,
    salePrice: 34800,
    stock: 0,
    sizes: ['L', 'XL'],
    image: 'assets/products/camisas-futbol/marsella.jpg',
    description: '¡Siente la pasión del Velódromo! Con el diseño **1.1 MARSELLA**, vive cada partido como si estuvieras en la cancha. Elegancia, estilo y el ADN del campeón te esperan. ¿Listo para rugir con el OM? ¡Descúbrelo ahora!\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-mundial-colombia-2026',
    name: '1.1 MUNDIAL COLOMBIA 2026',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '76537',
    price: 69800,
    stock: 20,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'assets/products/camisas-futbol/mundial-colombia-2026.jpg',
    description: 'LOGOS EN PARCHE\n\nCAMISA DEPORTIVA REDUCIDA\n\nVERSION JUGADOR\n\nTELA MICROPERDORADA MAS TOP\n\nPARCHE LICENCIA OFICIAL\n\nIDENTICA ALA ORIGINAL Y MAXIMA CALIDAD\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-psg',
    name: '1.1 PSG',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '11199',
    price: 67000,
    salePrice: 39500,
    stock: 2,
    sizes: ['L', 'XL'],
    image: 'assets/products/camisas-futbol/psg.jpg',
    description: 'LOGOS EN PARCHE\n\nCAMISA DEPORTIVA REDUCIDA\n\nVERSION JUGADOR\n\nPARCHE LICENCIA OFICIAL\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-psg-entreno',
    name: '1.1 PSG ENTRENO',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '50807',
    price: 59800,
    stock: 0,
    sizes: ['L'],
    image: 'assets/products/camisas-futbol/psg-entreno.jpg',
    description: '¡Siente la energía del Parc des Princes! Esta camiseta oficial del PSG Entreno te hará vibrar con el espíritu parisino. Diseño audaz, colores icónicos y la calidad que te mereces. ¡Sé parte de la leyenda!'
  },
  {
    id: 'camisa-arsenal-conjunto-deportivo',
    name: 'ARSENAL CONJUNTO DEPORTIVO',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '75789',
    price: 110100,
    salePrice: 84800,
    stock: 39,
    sizes: ['M', 'L', 'XL', 'XXL'],
    image: 'assets/products/camisas-futbol/arsenal-conjunto-deportivo.jpg',
    description: 'INCLUYE PANTALONETA Y CAMISA EXCELENTE CALIDAD'
  },
  {
    id: 'camisa-aston-villa-conjunto-deportivo-2026',
    name: 'ASTON VILLA CONJUNTO DEPORTIVO 2026',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '86417',
    price: 79800,
    stock: 37,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'assets/products/camisas-futbol/aston-villa-conjunto-deportivo-2026.jpg',
    description: 'LOGOS EN PARCHE\n\nCAMISA DEPORTIVA REDUCIDA\n\nVERSION JUGADOR\n\nTELA MICROPERDORADA MAS TOP\n\nPARCHE LICENCIA OFICIAL\n\nIDENTICA ALA ORIGINAL Y MAXIMA CALIDAD\n\nEstás no son las típicas camisas del centro de la ciudad o afuera de los estadios!!\n\nson camisas 1.1 version jugador idénticas ala original es importante recalcar esto'
  },
  {
    id: 'camisa-barcelona-alternativa-conjunto-deportivo-aaa',
    name: 'BARCELONA ALTERNATIVA CONJUNTO DEPORTIVO AAA',
    category: 'camisas-futbol',
    categoryLabel: 'Camisas 1.1 Fútbol',
    ref: '87632',
    price: 79800,
    stock: 45,
    sizes: ['M', 'L', 'XL'],
    image: 'assets/products/camisas-futbol/barcelona-alternativa-conjunto-deportivo-aaa.jpg',
    description: 'EXCELENTE CALIDAD PANTALONETA INCLUIDA'
  },

  /* ---------- Mascotas ---------- */
  {
    id: 'mascota-comedero-mascota-portatil',
    name: 'COMEDERO MASCOTA PORTATIL',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    ref: '65415',
    price: 10000,
    stock: 12,
    image: 'assets/products/mascotas/comedero-mascota-portatil.jpg',
    description: ''
  },
  {
    id: 'mascota-comedero-mascota-x-1',
    name: 'COMEDERO MASCOTA X 1',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    ref: '70217',
    price: 3900,
    stock: 24,
    image: 'assets/products/mascotas/comedero-mascota-x-1.jpg',
    description: '¡La hora de comer de tu peludo nunca fue tan divertida! Descubre este comedero vibrante y duradero, diseñado para hacer cada bocado una experiencia especial. ¡Tu mascota te lo agradecerá con colitas felices! ✨🐾'
  },
  {
    id: 'mascota-comedero-perro-anti-hormiga',
    name: 'COMEDERO PERRO ANTI HORMIGA',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    ref: '68365',
    price: 15000,
    stock: 32,
    image: 'assets/products/mascotas/comedero-perro-anti-hormiga.jpg',
    description: 'color al azar'
  },
  {
    id: 'mascota-maleta-de-mascotass',
    name: 'MALETA DE MASCOTASS',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    ref: '75601',
    price: 132900,
    salePrice: 99700,
    stock: 5,
    image: 'assets/products/mascotas/maleta-de-mascotass.jpg',
    description: 'Transporta a tu mascota con mayor seguridad y estilo con esta maleta tipo cápsula. Cuenta con ventana transparente, ventilación lateral, correas ajustables y diseño ergonómico para llevarla como mochila. Ideal para paseos, viajes, visitas al veterinario y traslados diarios.'
  },
  {
    id: 'mascota-malla-para-mascotas',
    name: 'MALLA PARA MASCOTAS',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    ref: '68710',
    price: 35000,
    stock: 3,
    image: 'assets/products/mascotas/malla-para-mascotas.jpg',
    description: '¡Adiós preocupaciones! Crea un espacio seguro y encantador para tus peludos con esta malla de seguridad innovadora. Su diseño discreto y fácil instalación transformarán tu hogar en un paraíso para ellos. Descubre cómo mantenerlos protegidos y felices. ¡No esperes más!\n\nTAMAÑO MEDIANO'
  },
  {
    id: 'mascota-pala-arena-gato',
    name: 'PALA ARENA GATO',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    ref: '98159',
    price: 6500,
    salePrice: 5400,
    stock: 5,
    image: 'assets/products/mascotas/pala-arena-gato.jpg',
    description: ''
  },
  {
    id: 'mascota-peine-silicona-mascota',
    name: 'PEINE SILICONA MASCOTA',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    ref: '27350',
    price: 2500,
    stock: 50,
    image: 'assets/products/mascotas/peine-silicona-mascota.jpg',
    description: '100% FUNCIONAL Y REUTILIZABLE'
  },
  {
    id: 'mascota-raton-control-remoto',
    name: 'RATON CONTROL REMOTO',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    ref: '17262',
    price: 54000,
    salePrice: 47000,
    stock: 2,
    image: 'assets/products/mascotas/raton-control-remoto.jpg',
    description: ''
  },
  {
    id: 'mascota-rodillo-removedor',
    name: 'RODILLO REMOVEDOR',
    category: 'mascotas',
    categoryLabel: 'Mascotas',
    extraCategories: ['hogar'],
    ref: '34360',
    price: 14000,
    stock: 4,
    image: 'assets/products/mascotas/rodillo-removedor.jpg',
    gallery: [
      'assets/products/mascotas/rodillo-removedor-1.jpg'
    ],
    description: '-\n\nBotón de apertura\n\n-\n\nGran capacidad de almacenamiento\n\n-\n\nAdherencia electrostática\n\n-\n\nOjal para colgar'
  },

  /* ---------- Joyería ---------- */
  {
    id: 'joya-anillo-en-rodio-oso',
    name: 'ANILLO EN RODIO OSO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '73637',
    price: 10800,
    stock: 3,
    image: 'assets/products/joyeria/anillo-en-rodio-oso.jpg',
    description: 'RODIO 100% CALIDAD\n\nIMPORTADO DE TUMACO'
  },
  {
    id: 'joya-anillo-rodio-155',
    name: 'ANILLO RODIO 155',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '66884',
    price: 13000,
    stock: 2,
    image: 'assets/products/joyeria/anillo-rodio-155.jpg',
    description: ''
  },
  {
    id: 'joya-anillo-rodio-n140',
    name: 'ANILLO RODIO N140',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '26413',
    price: 13600,
    stock: 2,
    image: 'assets/products/joyeria/anillo-rodio-n140.jpg',
    description: '100% DESDE TUMACO'
  },
  {
    id: 'joya-anillo-trebol-ch114',
    name: 'ANILLO TREBOL CH114',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '34572',
    price: 14000,
    salePrice: 9700,
    stock: 5,
    image: 'assets/products/joyeria/anillo-trebol-ch114.jpg',
    description: '¡Descubre la suerte en cada mirada! Este Anillo Trébol CH114, con su vibrante diseño esmeralda y baño de oro, irradia elegancia y un toque de misterio. ¿Te atreves a deslumbrar? ¡El accesorio perfecto para desatar tu brillo único!'
  },
  {
    id: 'joya-anillo-van-cleef-azul',
    name: 'ANILLO VAN CLEEF AZUL',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '43305',
    price: 17900,
    salePrice: 10400,
    stock: 5,
    image: 'assets/products/joyeria/anillo-van-cleef-azul.jpg',
    description: 'EN RODIO PURO\n\nIMPORTADO DIRECTO DE TUMACO'
  },
  {
    id: 'joya-anillo-van-cleef-dorado',
    name: 'ANILLO VAN CLEEF DORADO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '93353',
    price: 12400,
    stock: 1,
    image: 'assets/products/joyeria/anillo-van-cleef-dorado.jpg',
    description: ''
  },
  {
    id: 'joya-arma-911-en-rodio-puro-brillante',
    name: 'ARMA 911 EN RODIO PURO BRILLANTE',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '51310',
    price: 25000,
    stock: 3,
    image: 'assets/products/joyeria/arma-911-en-rodio-puro-brillante.jpg',
    description: 'Dije en Rodio Exclusivo – Diseño Arma con Piedras Verdes y Negras\n\nCaracterísticas principales:Material: Baño en rodio de alta calidad (mayor brillo y resistencia que el acero).\n\nDiseño llamativo: Forma de arma decorada con incrustaciones en tonos verde esmeralda y negro.\n\nDetalles premium: Acabado brillante y bordes definidos para un look impactante.\n\nMedidas ideales para usar en cadenas gruesas o finas.'
  },
  {
    id: 'joya-arma-911-oro-rodio-puro',
    name: 'ARMA 911 ORO RODIO PURO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '74581',
    price: 30000,
    salePrice: 20100,
    stock: 1,
    image: 'assets/products/joyeria/arma-911-oro-rodio-puro.jpg',
    description: 'Dije en Rodio con Baño de Oro Rosa Brillante – Diseño Arma con Piedras\n\nCaracterísticas principales:Material: Dije en rodio con acabado en oro rosa brillante.\n\nDiseño exclusivo: Forma de arma con incrustaciones de piedras en tonos verde esmeralda y negro.\n\nTamaño: 40 mm (perfecto para cadenas medianas o gruesas).\n\nAcabados premium: Detalles definidos y brillo intenso que realza su presencia.'
  },
  {
    id: 'joya-cadena-y-dije-100-teamo-lupa',
    name: 'CADENA  Y DIJE (100 TEAMO LUPA)',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '29043',
    price: 17000,
    stock: 2,
    image: 'assets/products/joyeria/cadena-y-dije-100-teamo-lupa.jpg',
    description: ''
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-america-de-cali',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO AMÉRICA DE CALI',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '11173',
    price: 13000,
    stock: 0,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-america-de-cali.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nAMÉRICA DE CALI\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-atletico-nacional',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO ATLETICO NACIONAL',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '27142',
    price: 18600,
    salePrice: 9900,
    stock: 0,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-atletico-nacional.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nATLETICO NACIONAL\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-club-atletico-bucaramanga',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO CLUB ATLÉTICO BUCARAMANGA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '75889',
    price: 19400,
    salePrice: 11400,
    stock: 8,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-club-atletico-bucaramanga.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nCLUB ATLÉTICO BUCARAMANGA\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-club-deportes-tolima',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO CLUB DEPORTES TOLIMA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '81305',
    price: 13000,
    stock: 5,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-club-deportes-tolima.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nCLUB DEPORTES TOLIMA\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-club-independiente-santa-fe',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO CLUB INDEPENDIENTE SANTA FE',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '68287',
    price: 14000,
    salePrice: 11200,
    stock: 0,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-club-independiente-santa-fe.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nCLUB INDEPENDIENTE SANTA FE\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-cucuta-deportivo',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO CÚCUTA DEPORTIVO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '69836',
    price: 13000,
    stock: 7,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-cucuta-deportivo.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nCÚCUTA DEPORTIVO\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-deportivo-cali',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO DEPORTIVO CALI',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '98184',
    price: 13000,
    stock: 1,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-deportivo-cali.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nDEPORTIVO CALI\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-deportivo-independiente-mede',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO DEPORTIVO INDEPENDIENTE MEDELLÍN',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '58771',
    price: 13000,
    stock: 7,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-deportivo-independiente-mede.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nDEPORTIVO INDEPENDIENTE MEDELLÍN\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-deportivo-pereira',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO DEPORTIVO PEREIRA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '48639',
    price: 13000,
    stock: 5,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-deportivo-pereira.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nDEPORTIVO PEREIRA\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-junior-de-barranquilla',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO JUNIOR DE BARRANQUILLA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '36597',
    price: 13000,
    stock: 5,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-junior-de-barranquilla.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nJUNIOR DE BARRANQUILLA\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-millonarios-fc',
    name: 'CADENA  Y DIJE FUTBOL COLOMBIANO MILLONARIOS FC',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '66720',
    price: 13000,
    stock: 0,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-millonarios-fc.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nMILLONARIOS FC\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-cadena-en-lazo-dorado-a1',
    name: 'CADENA EN LAZO  DORADO A1',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '67623',
    price: 19100,
    salePrice: 13200,
    stock: 2,
    image: 'assets/products/joyeria/cadena-en-lazo-dorado-a1.jpg',
    description: 'CADENA EN LAZO'
  },
  {
    id: 'joya-cadena-lazo-oro-rosa',
    name: 'CADENA LAZO ORO ROSA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '34786',
    price: 22900,
    salePrice: 19700,
    stock: 2,
    image: 'assets/products/joyeria/cadena-lazo-oro-rosa.jpg',
    description: 'CALIDAD ALTA'
  },
  {
    id: 'joya-cadena-y-dije-virgen-guadalupe-gemas',
    name: 'CADENA Y DIJE  VIRGEN GUADALUPE GEMAS',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '97346',
    price: 26200,
    salePrice: 22800,
    stock: 2,
    image: 'assets/products/joyeria/cadena-y-dije-virgen-guadalupe-gemas.jpg',
    description: 'CEDENA Y DIJE INCLUIDO EN RODIO\n\nIMPORTADO DE TUMACO'
  },
  {
    id: 'joya-cadena-y-dije-cruz-en-rodio-brillante',
    name: 'CADENA Y DIJE CRUZ EN RODIO BRILLANTE',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '15766',
    price: 21600,
    salePrice: 11000,
    stock: 1,
    image: 'assets/products/joyeria/cadena-y-dije-cruz-en-rodio-brillante.jpg',
    description: 'Dije en Rodio Exclusivo – Espada Cruzada con Brillo Único\n\nVentajas del rodio:\n\nMantiene su color y brillo por más tiempo.\n\nResistente al desgaste y la oxidación.\n\nApariencia de lujo a un precio accesible.'
  },
  {
    id: 'joya-cadena-y-dije-futbol-colombiano-club-once-caldas',
    name: 'CADENA Y DIJE FUTBOL COLOMBIANO CLUB ONCE CALDAS',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '85662',
    price: 13000,
    stock: 7,
    image: 'assets/products/joyeria/cadena-y-dije-futbol-colombiano-club-once-caldas.jpg',
    description: 'CADENA Y DIJE FUTBOL COLOMBIANO EN ACERO INOXIDABLE\n\nCLUB DEPORTES TOLIMA\n\nACERO INOXIDABLE'
  },
  {
    id: 'joya-dije-angel-ch45',
    name: 'DIJE ANGEL CH45',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '59101',
    price: 12900,
    salePrice: 6700,
    stock: 10,
    image: 'assets/products/joyeria/dije-angel-ch45.jpg',
    description: '**DIJE ANGEL CH45:** Lleva contigo la fuerza y protección del Arcángel Miguel. Un diseño exclusivo con un cristal que irradia luz y fe. ¡Un amuleto que te acompañará en cada paso! ¿Sientes su llamado?'
  },
  {
    id: 'joya-dije-senor-de-los-milagros',
    name: 'DIJE SEÑOR DE LOS MILAGROS',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '12809',
    price: 10000,
    stock: 6,
    image: 'assets/products/joyeria/dije-senor-de-los-milagros.jpg',
    description: 'HERMOSO DIJE SEÑOR DE LOS MILAGROS CON UN ACABADO Y PULIDO'
  },
  {
    id: 'joya-dije-virgen-de-guadalupe-rodio',
    name: 'DIJE VIRGEN DE GUADALUPE RODIO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '64730',
    price: 15800,
    stock: 9,
    image: 'assets/products/joyeria/dije-virgen-de-guadalupe-rodio.jpg',
    description: 'DIJE IMPORTADO EN RODIO DESDE TUMACO'
  },
  {
    id: 'joya-duo-acero-12',
    name: 'DUO ACERO 12',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '43710',
    price: 19400,
    salePrice: 11800,
    stock: 2,
    image: 'assets/products/joyeria/duo-acero-12.jpg',
    description: ''
  },
  {
    id: 'joya-duo-cristo-4d',
    name: 'DUO CRISTO 4D',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '78424',
    price: 20200,
    salePrice: 17400,
    stock: 1,
    image: 'assets/products/joyeria/duo-cristo-4d.jpg',
    description: ''
  },
  {
    id: 'joya-duo-rodio-dama-37',
    name: 'DUO RODIO DAMA 37',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '85410',
    price: 28300,
    salePrice: 21200,
    stock: 4,
    image: 'assets/products/joyeria/duo-rodio-dama-37.jpg',
    description: ''
  },
  {
    id: 'joya-duo-rodio-dama-39',
    name: 'DUO RODIO DAMA 39',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '41961',
    price: 26600,
    salePrice: 16500,
    stock: 2,
    image: 'assets/products/joyeria/duo-rodio-dama-39.jpg',
    description: ''
  },
  {
    id: 'joya-manilla-en-rodio-herradura-a1',
    name: 'MANILLA EN RODIO HERRADURA A1',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '53706',
    price: 17500,
    salePrice: 13300,
    stock: 21,
    image: 'assets/products/joyeria/manilla-en-rodio-herradura-a1.jpg',
    description: 'X1 UNIDAD ELIGES COLOR'
  },
  {
    id: 'joya-mini-uzi-diji-rodio-puro-brillante',
    name: 'MINI UZI DIJI RODIO PURO BRILLANTE',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '67052',
    price: 25000,
    stock: 9,
    image: 'assets/products/joyeria/mini-uzi-diji-rodio-puro-brillante.jpg',
    description: 'Dije en Rodio Brillante – Diseño Arma Exclusivo\n\nCaracterísticas principales:Material: Baño en rodio de alta calidad con acabado brillante.\n\nDiseño: Figura de arma en tamaño compacto (24 mm) con incrustaciones de circonias que aportan brillo y elegancia.\n\nColor: Dorado con detalles brillantes que resaltan al máximo.\n\nAcabado premium: Detalles definidos y resistentes al desgaste.'
  },
  {
    id: 'joya-neopreno-seleccion-colombia',
    name: 'NEOPRENO SELECCION COLOMBIA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '92193',
    price: 19800,
    stock: 20,
    image: 'assets/products/joyeria/neopreno-seleccion-colombia.jpg',
    description: 'Producto hecho por madres cabeza de hogar 100% COLOMBIANO'
  },
  {
    id: 'joya-pulsera-corazon-de-jesus-tejido-en-rodio-150',
    name: 'PULSERA CORAZON DE JESUS TEJIDO EN RODIO 150',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '74062',
    price: 34800,
    salePrice: 24400,
    stock: 1,
    image: 'assets/products/joyeria/pulsera-corazon-de-jesus-tejido-en-rodio-150.jpg',
    description: 'CORAZON DE JESUS'
  },
  {
    id: 'joya-pulsera-en-cuero-futbol-colombiano',
    name: 'PULSERA EN CUERO FUTBOL COLOMBIANO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '73640',
    price: 17600,
    stock: 28,
    image: 'assets/products/joyeria/pulsera-en-cuero-futbol-colombiano.jpg',
    gallery: [
      'assets/products/joyeria/pulsera-en-cuero-futbol-colombiano-1.jpg'
    ],
    description: 'EN LA DESCRIPCION CUANDO VAS A PAGAR ELIGES EL EQUIPO QUE DESEES\n\nEN LA DESCRIPCION CUANDO VAS A PAGAR ELIGES EL EQUIPO QUE DESEES'
  },
  {
    id: 'joya-pulsera-en-rodio-brillante-seleccion',
    name: 'PULSERA EN RODIO BRILLANTE SELECCION',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '36348',
    price: 25400,
    stock: 5,
    image: 'assets/products/joyeria/pulsera-en-rodio-brillante-seleccion.jpg',
    description: 'LA DE LA SELE'
  },
  {
    id: 'joya-pulsera-en-rodio-con-gemas-negras',
    name: 'PULSERA EN RODIO CON GEMAS NEGRAS',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '11861',
    price: 15600,
    stock: 1,
    image: 'assets/products/joyeria/pulsera-en-rodio-con-gemas-negras.jpg',
    gallery: [
      'assets/products/joyeria/pulsera-en-rodio-con-gemas-negras-1.jpg'
    ],
    description: 'Pulsera Tennis en Rodio con Esmeraldas Sintéticas\n\nElegante pulsera tipo tennis con baño en rodio, diseñada con piedras verdes esmeralda sintética que destacan por su brillo y sofisticación. Perfecta para realzar cualquier look, resistente al uso diario y con cierre seguro.'
  },
  {
    id: 'joya-pulsera-en-rodio-con-gemas-verdes',
    name: 'PULSERA EN RODIO CON GEMAS VERDES',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '34128',
    price: 19800,
    salePrice: 15200,
    stock: 5,
    image: 'assets/products/joyeria/pulsera-en-rodio-con-gemas-verdes.jpg',
    gallery: [
      'assets/products/joyeria/pulsera-en-rodio-con-gemas-verdes-1.jpg'
    ],
    description: 'Pulsera Tennis en Rodio con Esmeraldas Sintéticas\n\nElegante pulsera tipo tennis con baño en rodio, diseñada con piedras verdes esmeralda sintética que destacan por su brillo y sofisticación. Perfecta para realzar cualquier look, resistente al uso diario y con cierre seguro.'
  },
  {
    id: 'joya-pulsera-pueblo-colombiano-en-rodio',
    name: 'PULSERA PUEBLO COLOMBIANO EN RODIO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '31275',
    price: 22000,
    salePrice: 13900,
    stock: 20,
    image: 'assets/products/joyeria/pulsera-pueblo-colombiano-en-rodio.jpg',
    description: 'Pulsera en acabado en rodio con diseño tricolor inspirado en Colombia , elaborada con cuentas mate en amarillo, azul y rojo, combinadas con esferas metálicas brillantes que aportan un toque elegante y moderno.\n\nEn el centro, un dije de Colombia finamente delineado resalta la identidad y el estilo, mientras su sistema ajustable en hilo rojo garantiza comodidad y ajuste perfecto.'
  },
  {
    id: 'joya-pulsera-tejida-en-rodio-144-dama',
    name: 'PULSERA TEJIDA EN RODIO 144 DAMA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '27819',
    price: 26500,
    salePrice: 19600,
    stock: 5,
    image: 'assets/products/joyeria/pulsera-tejida-en-rodio-144-dama.jpg',
    description: '**¡Un toque de luz y significado en tu muñeca!**\n\nDescubre la PULSERA TEJIDA EN RODIO 144 DAMA, una joya que irradia elegancia con sus perlas y el vibrante corazón central. Elaborada con rodio de alta calidad, este accesorio es el detalle perfecto para realzar tu estilo. ¿Lista para deslumbrar?'
  },
  {
    id: 'joya-pulsera-tejida-en-rodio-colombia',
    name: 'PULSERA TEJIDA EN RODIO COLOMBIA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '83786',
    price: 25000,
    stock: 6,
    image: 'assets/products/joyeria/pulsera-tejida-en-rodio-colombia.jpg',
    description: 'HECHO EN COLOMBIA'
  },
  {
    id: 'joya-pulsera-tejida-en-rodio-neopreno',
    name: 'PULSERA TEJIDA EN RODIO NEOPRENO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '33798',
    price: 27000,
    stock: 4,
    image: 'assets/products/joyeria/pulsera-tejida-en-rodio-neopreno.jpg',
    description: 'ALTA CALIDAD EN NEOPRENO'
  },
  {
    id: 'joya-pulsera-tejida-virgen-ah154-dama',
    name: 'PULSERA TEJIDA VIRGEN AH154 DAMA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '21904',
    price: 23600,
    stock: 4,
    image: 'assets/products/joyeria/pulsera-tejida-virgen-ah154-dama.jpg',
    description: 'Elegancia que protege\n\nLleva contigo un símbolo de fe y estilo en una pieza única.\n\nEsta pulsera combina delicadeza, brillo y significado, perfecta para acompañarte todos los días o regalar algo especial.\n\nDetalles premium\n\nInspiración espiritual\n\nDiseño moderno y sofisticado'
  },
  {
    id: 'joya-van-cleef-en-acero-oro',
    name: 'VAN CLEEF EN ACERO ORO',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '91177',
    price: 12000,
    stock: 9,
    image: 'assets/products/joyeria/van-cleef-en-acero-oro.jpg',
    gallery: [
      'assets/products/joyeria/van-cleef-en-acero-oro-1.jpg',
      'assets/products/joyeria/van-cleef-en-acero-oro-2.jpg'
    ],
    description: 'Elegante y moderna, elaborada en acero inoxidable de alta resistencia con detalles en trébol característicos de la icónica colección Van Cleef. Ideal para realzar cualquier look'
  },
  {
    id: 'joya-van-cleef-en-acero-roja',
    name: 'VAN CLEEF EN ACERO ROJA',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '67861',
    price: 15800,
    salePrice: 9200,
    stock: 4,
    image: 'assets/products/joyeria/van-cleef-en-acero-roja.jpg',
    description: 'Elegante y moderna, elaborada en acero inoxidable de alta resistencia con detalles en trébol característicos de la icónica colección Van Cleef. Ideal para realzar cualquier look'
  },
  {
    id: 'joya-van-cleef-en-acero-verde',
    name: 'VAN CLEEF EN ACERO VERDE',
    category: 'joyeria',
    categoryLabel: 'Joyería',
    ref: '19604',
    price: 12000,
    stock: 7,
    image: 'assets/products/joyeria/van-cleef-en-acero-verde.jpg',
    gallery: [
      'assets/products/joyeria/van-cleef-en-acero-verde-1.jpg'
    ],
    description: 'Elegante y moderna, elaborada en acero inoxidable de alta resistencia con detalles en trébol característicos de la icónica colección Van Cleef. Ideal para realzar cualquier look'
  },

  /* ---------- Belleza ---------- */
  {
    id: 'belleza-72-parches-elefant-para-acne-figuras-sd79787',
    name: '72 PARCHES ELEFANT PARA ACNE FIGURAS SD79787',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '17837',
    price: 7200,
    stock: 19,
    image: 'assets/products/belleza/72-parches-elefant-para-acne-figuras-sd79787.jpg',
    description: 'SADOER Colored Acne Patch ayuda a cubrir y proteger los granitos de forma discreta, práctica y divertida. Sus parches adhesivos e impermeables aíslan la zona, absorben impurezas y evitan tocar la piel, favoreciendo una apariencia más limpia. Vienen en diseños de estrellas y corazones, ideales para usar de día o de noche sin perder estilo.'
  },
  {
    id: 'belleza-aceite-bronceador-110ml',
    name: 'ACEITE BRONCEADOR 110ml',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '31870',
    price: 25800,
    stock: 7,
    image: 'assets/products/belleza/aceite-bronceador-110ml.jpg',
    description: '¡Consigue el bronceado de tus sueños! Nuestro Aceite Bronceador 110ml, enriquecido con vitamina E y aceites naturales, te brinda un dorado perfecto mientras cuida e hidrata tu piel. Transforma tu piel con un toque soleado y seductor. ¡No esperes más para lucir radiante!\n\nBroncea, cuida, protege y humecta la piel. Con filtro solar,\n\nBetacaroteno, Vitamina E, Aceite de Zanahoria, Coco,\n\nAlmendras y Canela.'
  },
  {
    id: 'belleza-aceite-capilar-aguacate-con-vitamina-e',
    name: 'ACEITE CAPILAR AGUACATE CON VITAMINA E',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '43075',
    price: 3600,
    salePrice: 3100,
    stock: 21,
    image: 'assets/products/belleza/aceite-capilar-aguacate-con-vitamina-e.jpg',
    description: 'Aceite de Aguacate con Vitamina E: el aliado ideal para un cabello más fuerte, suave y saludable. Su fórmula ayuda a nutrir, hidratar y dar brillo desde la raíz hasta las puntas, dejando tu cabello con mejor apariencia y más vida. Si buscas cuidado, nutrición y resultados visibles, este producto es para ti.'
  },
  {
    id: 'belleza-aceite-con-oliva-30ml',
    name: 'ACEITE CON OLIVA 30ML',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '54391',
    price: 6300,
    stock: 36,
    image: 'assets/products/belleza/aceite-con-oliva-30ml.jpg',
    description: 'Fórmula antioxidante. Hidrata, suaviza y protege la piel. Contiene: Con filtro\n\nsolar. Vitamina E'
  },
  {
    id: 'belleza-aceite-corporal-chocolate-120ml',
    name: 'ACEITE CORPORAL CHOCOLATE  120ML',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '39906',
    price: 17200,
    stock: 6,
    image: 'assets/products/belleza/aceite-corporal-chocolate-120ml.jpg',
    description: '¡Despierta tus sentidos! Sumérgete en la irresistible tentación del Aceite Corporal Chocolate. Su fórmula nutre, suaviza y tonifica tu piel, dejándola radiante y sedosa. Descubre el placer de un ritual indulgente. ¡Pruébalo y enamórate de tu piel!'
  },
  {
    id: 'belleza-aceite-corporal-coco-120-ml',
    name: 'ACEITE CORPORAL COCO 120 ML',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '93462',
    price: 17200,
    stock: 7,
    image: 'assets/products/belleza/aceite-corporal-coco-120-ml.jpg',
    description: 'Transforma tu rutina de cuidado personal con el Aceite Corporal y Capilar de Coco ATHOS.\n\nEsta poderosa fórmula combina los beneficios del coco con manteca de karité, aceite de arroz y vitamina E para brindarte hidratación y nutrición en un solo paso.\n\nPor qué necesitas este producto:\n\n-\n\nEfecto 3 en 1: Actúa como un excelente emoliente, protector y acondicionador.\n\n-\n\nVersatilidad total: Diseñado para revitalizar tanto la piel como el cabello, simplificando tu rutina de belleza.\n\n-\n\nExperiencia de spa en casa: Su textura ligera y propiedades nutritivas lo hacen el aliado perfecto para masajes relajantes.\n\nAhorra tiempo y espacio con un producto multifuncional que garantiza tradición, calidad y bienestar para todo tu cuerpo.'
  },
  {
    id: 'belleza-aceite-desmaquillante-arroz-bioaq-bqy78698',
    name: 'ACEITE DESMAQUILLANTE ARROZ BIOAQ BQY78698',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '35616',
    price: 15000,
    stock: 10,
    image: 'assets/products/belleza/aceite-desmaquillante-arroz-bioaq-bqy78698.jpg',
    description: '¡Descubre el secreto de una piel radiante con nuestro Aceite Desmaquillante Arroz Bioaqua! Transforma tu rutina con su poder hidratante y nutritivo. Siente la diferencia al instante: piel unificada, suave y luminosa. ¡No querrás dejar de usarlo!'
  },
  {
    id: 'belleza-aceite-para-bebe',
    name: 'ACEITE PARA BEBE',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '31193',
    price: 4300,
    salePrice: 3100,
    stock: 14,
    image: 'assets/products/belleza/aceite-para-bebe.jpg',
    description: 'Su fórmula suave humecta y suaviza la piel, dejándola tersa, protegida y con un agradable aroma durante todo el día.\n\nBeneficios:\n\nIdeal para masajes relajantes después del baño.\n\nEvita resequedad y protege contra irritaciones.\n\nTextura ligera, de rápida absorción y dermatológicamente probada.\n\nPerfecto también para adultos con piel seca o sensible.\n\n¡Llévalo al mejor precio y ofrece suavidad y ternura en cada gota!'
  },
  {
    id: 'belleza-aceite-semilla-de-cannabis-250-ml-grande',
    name: 'ACEITE SEMILLA DE CANNABIS 250 ML GRANDE',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '27253',
    price: 29700,
    salePrice: 19000,
    stock: 9,
    image: 'assets/products/belleza/aceite-semilla-de-cannabis-250-ml-grande.jpg',
    description: 'Aceite corporal con aceite de Semilla de Cannabis y Árnica. Relaja,\n\nhumecta, protege y suaviza tu piel.'
  },
  {
    id: 'belleza-acondicionador-1-litro-frutal',
    name: 'ACONDICIONADOR 1 LITRO FRUTAL',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '49626',
    price: 17800,
    stock: 17,
    image: 'assets/products/belleza/acondicionador-1-litro-frutal.jpg',
    description: 'BALSAMO ACONDICIONADOR HIDRATANTE\n\nFRUTAL BRILLO Y SUAVIDAD'
  },
  {
    id: 'belleza-acondicionador-crecimiento-romero',
    name: 'ACONDICIONADOR CRECIMIENTO ROMERO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '92834',
    price: 15400,
    stock: 5,
    image: 'assets/products/belleza/acondicionador-crecimiento-romero.jpg',
    description: '¡Despierta el poder natural de tu cabello! Nuestro Acondicionador Romero revitaliza, fortalece y deja un brillo espectacular. Experimenta un crecimiento visible y una suavidad inigualable. ¡Descubre el secreto de un cabello radiante!'
  },
  {
    id: 'belleza-acondicionador-profesional-coco-1-litro',
    name: 'ACONDICIONADOR PROFESIONAL COCO 1 LITRO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '63730',
    price: 38000,
    salePrice: 28900,
    stock: 15,
    image: 'assets/products/belleza/acondicionador-profesional-coco-1-litro.jpg',
    description: 'HIDRATANTE CON EXTRACTO DE COCO, ACEITE DE AGUACATE PRO VITAMINA B5 PROFESIONAL'
  },
  {
    id: 'belleza-acondicionador-profesional-romero-500-ml',
    name: 'ACONDICIONADOR PROFESIONAL ROMERO 500 ML',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '77736',
    price: 21000,
    stock: 10,
    image: 'assets/products/belleza/acondicionador-profesional-romero-500-ml.jpg',
    description: 'HIDRATANTE CON EXTRACTO DE COCO, ACEITE DE AGUACATE CON COLAGENO PRO VITAMINA B5 PROFESIONAL'
  },
  {
    id: 'belleza-agua-de-rosas-120-ml',
    name: 'AGUA DE ROSAS 120 ML',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '79790',
    price: 6800,
    stock: 31,
    image: 'assets/products/belleza/agua-de-rosas-120-ml.jpg',
    description: 'Refresca, tonifica y deja tu piel radiante\n\nIdeal para piel seca o sensible: suaviza manchas, estrías y arrugas.\n\nActúa como antibacteriana y cicatrizante, ayudando a mantener tu rostro limpio y saludable.\n\nÚsala como tónico facial, fijador de maquillaje o spray refrescante durante el día.\n\nPerfecta para tu rutina diaria de cuidado facial.\n\n¡Llévala ahora y disfruta una piel suave, fresca y con aroma natural a rosas!'
  },
  {
    id: 'belleza-anti-acne-luz-azul',
    name: 'ANTI ACNE LUZ AZUL',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '49839',
    price: 21600,
    salePrice: 12100,
    stock: 6,
    image: 'assets/products/belleza/anti-acne-luz-azul.jpg',
    description: 'Ayuda a reducir granitos, enrojecimiento e inflamación\n\nTecnología de luz azul 415 nm\n\nSeguro, práctico y fácil de usar\n\nIdeal para piel grasa y con acné\n\nDiseño portátil y recargable'
  },
  {
    id: 'belleza-balsamo-hidratante-de-labios-cherry-bqy05312',
    name: 'BALSAMO HIDRATANTE DE LABIOS CHERRY BQY05312',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '89764',
    price: 4000,
    salePrice: 3400,
    stock: 88,
    image: 'assets/products/belleza/balsamo-hidratante-de-labios-cherry-bqy05312.jpg',
    description: 'BIOAQUA Moist Lips es el bálsamo ideal para labios suaves, hidratados y con acabado jugoso. Su fórmula nutritiva ayuda a retener la humedad, reduce la resequedad y deja una sensación delicada y brillante. Con aroma Peach Macaron y diseño compacto, es perfecto para llevar en la cartera y usarlo todos los días.'
  },
  {
    id: 'belleza-cepillo-alisador-de-cabello',
    name: 'CEPILLO ALISADOR DE CABELLO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    extraCategories: ['hogar'],
    ref: '90960',
    price: 25800,
    stock: 3,
    image: 'assets/products/belleza/cepillo-alisador-de-cabello.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'belleza-cepillo-secador-bt028',
    name: 'CEPILLO SECADOR BT028',
    category: 'belleza',
    categoryLabel: 'Belleza',
    extraCategories: ['hogar'],
    ref: '29812',
    price: 62200,
    salePrice: 33000,
    stock: 2,
    image: 'assets/products/belleza/cepillo-secador-bt028.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'belleza-cinta-levanta-busto-adhesiva-invisible',
    name: 'CINTA LEVANTA BUSTO ADHESIVA INVISIBLE',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '90102',
    price: 17800,
    salePrice: 15700,
    stock: 20,
    image: 'assets/products/belleza/cinta-levanta-busto-adhesiva-invisible.jpg',
    description: '- Levanta Busto Adhesivo fácil de usar.\n\n- Ancho: 5 cm y longitud: 5 m, color: natural (Beige)\n\n- Ideal para lucir cualquier escote o strapless.\n\n- Hipoalergénico, sin látex.\n\n- Contra el agua, perfecto para llevar debajo del traje de baño.\n\n- No dolor al quitarla.\n\n- Tejido de algodón elástico.\n\nModo de empleo:\n\n1. Corta la cinta al tamaño deseado y aplícala sobre la piel limpia y seca, sin aceites ni cremas.2. Es ideal para blusas o vestidos de corte bajo, eventos especiales.3. Hay varias formas de colocar a gusto y dependiendo de prenda y ocasión, se incluye una imagen de referencia.4. Para despegarlo simplemente de una esquina, comience a estirarlo si es necesario, aplique un poco de agua para hacerlo más fácil.'
  },
  {
    id: 'belleza-colageno-ojeras-antioxidantes-uva',
    name: 'COLAGENO OJERAS ANTIOXIDANTES UVA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '12371',
    price: 12000,
    stock: 10,
    image: 'assets/products/belleza/colageno-ojeras-antioxidantes-uva.jpg',
    description: '¡Despídete de las ojeras y las arrugas! Descubre el secreto de una mirada rejuvenecida con nuestro Colágeno Ojeras Antioxidantes UVA. Siente la firmeza y la hidratación intensa para una piel visiblemente más joven. ¡Tu piel te lo agradecerá!'
  },
  {
    id: 'belleza-combo-plancha-nano-rosado',
    name: 'COMBO PLANCHA NANO ROSADO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '22545',
    price: 112100,
    salePrice: 99800,
    stock: 3,
    image: 'assets/products/belleza/combo-plancha-nano-rosado.jpg',
    description: 'Convierte tu rutina en resultados profesionales desde casa con este set de peinado 3 en 1. Alisa, ondula y desenreda con una sola herramienta versátil, diseñada para ofrecer acabados de salón de forma rápida y segura. Su diseño ligero y cómodo facilita el uso diario, mientras su tecnología cuida tu cabello en cada pasada. Todo lo que necesitas, en un solo set.'
  },
  {
    id: 'belleza-combo-x3-arruru',
    name: 'COMBO X3 ARRURU',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '83785',
    price: 39800,
    stock: 4,
    image: 'assets/products/belleza/combo-x3-arruru.jpg',
    description: '¡Descubre el secreto para un bebé radiante! El COMBO X3 ARRURRU contiene todo lo que necesitas: Shimmer, Crema y Colonia. ¡Atrévete a consentir a tu pequeño con fórmulas suaves y un aroma inolvidable que te robará el corazón! ¡No esperes más!'
  },
  {
    id: 'belleza-contorno-antioxidante-pieles-maduras-arand',
    name: 'CONTORNO ANTIOXIDANTE PIELES MADURAS ARAND',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '66058',
    price: 9000,
    stock: 4,
    image: 'assets/products/belleza/contorno-antioxidante-pieles-maduras-arand.jpg',
    description: 'Crema para el contorno de ojos Arándano Esencia, diseñada para hidratar profundamente, iluminar y reafirmar la delicada zona alrededor de los ojos. Su fórmula avanzada ayuda a reducir la apariencia de ojeras, mejorar la firmeza y devolverle a la piel un aspecto más descansado y luminoso. Ideal para una rutina de cuidado facial que revitaliza la mirada.'
  },
  {
    id: 'belleza-contorno-de-ojos-antioxidante-vitamina-c-bioaqua',
    name: 'CONTORNO DE OJOS ANTIOXIDANTE VITAMINA C BIOAQUA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '28767',
    price: 4000,
    stock: 6,
    image: 'assets/products/belleza/contorno-de-ojos-antioxidante-vitamina-c-bioaqua.jpg',
    description: 'elimina ojeras'
  },
  {
    id: 'belleza-contorno-de-ojos-antioxidantes-uva-sadox-sd05779',
    name: 'CONTORNO DE OJOS ANTIOXIDANTES UVA SADOX SD05779',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '93059',
    price: 5000,
    stock: 2,
    image: 'assets/products/belleza/contorno-de-ojos-antioxidantes-uva-sadox-sd05779.jpg',
    description: 'SADOER Grape Seeds Firming Eye Cream ayuda a hidratar y revitalizar el contorno de ojos, aportando una apariencia más fresca y firme. Su fórmula con extracto de semilla de uva y ácido hialurónico ayuda a suavizar líneas de expresión, reducir signos de cansancio y mantener la piel hidratada y suave.'
  },
  {
    id: 'belleza-contorno-de-ojos-tono-uniforme-e-hidratacion',
    name: 'CONTORNO DE OJOS TONO UNIFORME E HIDRATACIÓN',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '49479',
    price: 4900,
    stock: 3,
    image: 'assets/products/belleza/contorno-de-ojos-tono-uniforme-e-hidratacion.jpg',
    description: 'Crema para ojos BIOAQUA Cherry Blossom 98%, ideal para darle a tu mirada una apariencia más fresca y descansada. Ayuda a hidratar, suavizar y mejorar la luminosidad del contorno de ojos con una textura ligera y delicada.\n\nPerfecta para una mirada más radiante y cuidada todos los días.'
  },
  {
    id: 'belleza-contorno-hidratante-aloe-rosado-sado-sd87379',
    name: 'CONTORNO HIDRATANTE ALOE ROSADO SADO SD87379',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '82565',
    price: 5000,
    stock: 29,
    image: 'assets/products/belleza/contorno-hidratante-aloe-rosado-sado-sd87379.jpg',
    description: ''
  },
  {
    id: 'belleza-crema-facial-tono-uniforme-e-hidratacion-flor-de-cerezo-bqy8',
    name: 'CREMA FACIAL TONO UNIFORME E HIDRATACIÓN FLOR DE CEREZO BQY83593',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '73971',
    price: 18000,
    salePrice: 13700,
    stock: 5,
    image: 'assets/products/belleza/crema-facial-tono-uniforme-e-hidratacion-flor-de-cerezo-bqy8.jpg',
    description: 'Mascarilla facial BIOAQUA Cherry Blossom 98%, ideal para darle a tu piel una apariencia más fresca, hidratada y luminosa. Su textura cremosa ayuda a suavizar el rostro y dejar una sensación delicada y renovada.\n\nPerfecta para una piel más radiante, tersa y cuidada.'
  },
  {
    id: 'belleza-crema-hidratante-aloe-rosado-sado-sd86952',
    name: 'CREMA HIDRATANTE ALOE ROSADO SADO SD86952',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '81940',
    price: 10100,
    salePrice: 8700,
    stock: 12,
    image: 'assets/products/belleza/crema-hidratante-aloe-rosado-sado-sd86952.jpg',
    description: 'Crema hidratante SADOER 98% Pink Aloe, ideal para cuidar tu piel todos los días. Ayuda a dejar una sensación suave, fresca e hidratada, con una textura ligera y delicada.\n\nPerfecta para una piel más tersa, luminosa y con apariencia saludable.'
  },
  {
    id: 'belleza-depiladora-reutilizable',
    name: 'DEPILADORA REUTILIZABLE',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '78217',
    price: 10000,
    stock: 0,
    image: 'assets/products/belleza/depiladora-reutilizable.jpg',
    description: '¡Dile adiós al vello no deseado! Descubre una piel increíblemente suave, rápida y sin dolor. Esta depiladora reutilizable es tu secreto para una belleza sin esfuerzo y resultados duraderos. ¡Te encantará!\n\nLuce una piel suave y libre de vello de forma rápida y práctica. Su diseño ergonómico facilita el uso en piernas, brazos y otras zonas del cuerpo.\n\nEs portátil, lavable y no necesita baterías ni repuestos. Solo deslízala suavemente sobre la piel con movimientos circulares.\n\nIdeal para llevar en el bolso y usar en cualquier momento.'
  },
  {
    id: 'belleza-emulsion-facial-de-vitamina-e-y-c-bioaqua-bqy89222',
    name: 'EMULSION FACIAL DE VITAMINA E Y C BIOAQUA BQY89222',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '23796',
    price: 11600,
    salePrice: 9500,
    stock: 10,
    image: 'assets/products/belleza/emulsion-facial-de-vitamina-e-y-c-bioaqua-bqy89222.jpg',
    description: '¡Despierta una piel irresistiblemente suave y luminosa! La Emulsión Bioaqua, con Vitamina E y C, nutre profundamente sin dejar rastro graso. Descubre el secreto de una tez jugosa y radiante. ¡Tu piel te lo agradecerá!'
  },
  {
    id: 'belleza-esencia-de-acido-salicilico-control-acne',
    name: 'ESENCIA DE ACIDO SALICILICO CONTROL ACNE',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '87443',
    price: 6000,
    stock: 321,
    image: 'assets/products/belleza/esencia-de-acido-salicilico-control-acne.jpg',
    description: '¡Adiós imperfecciones! Descubre el secreto para una piel radiante. Nuestra esencia con ácido salicílico ataca los brotes, controla la grasa y minimiza poros. ¡Piel suave y sin rastro de acné te espera! ¿Lista para la transformación?'
  },
  {
    id: 'belleza-espuma-limpiadora-de-rosas-sado',
    name: 'ESPUMA LIMPIADORA DE ROSAS SADO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '17699',
    price: 13100,
    salePrice: 10100,
    stock: 15,
    image: 'assets/products/belleza/espuma-limpiadora-de-rosas-sado.jpg',
    description: '¡Revela una piel radiante! Nuestra espuma limpiadora SADOER con extracto de rosa y aminoácidos limpia, hidrata y calma profundamente. Despierta tu rostro con una caricia de frescura y luminosidad. ¡Descubre el secreto de una piel impecable!'
  },
  {
    id: 'belleza-fortalecedor-de-pestanas-tratamiento',
    name: 'FORTALECEDOR DE PESTAÑAS TRATAMIENTO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '29591',
    price: 12200,
    salePrice: 9300,
    stock: 34,
    image: 'assets/products/belleza/fortalecedor-de-pestanas-tratamiento.jpg',
    description: 'El Suero Nutritivo para Crecimiento de Pestañas Bioaqua está diseñado para fortalecer y estimular el crecimiento de pestañas, cejas, barba y bigote. Su fórmula enriquecida con vitamina E y proteína de avena hidrolizada nutre desde la raíz, promoviendo un crecimiento más denso y saludable. Beneficios: - Fortalece y alarga pestañas de manera natural. - Nutre los folículos pilosos, mejorando grosor y volumen. - Resultados visibles en 2-3 semanas con uso constante. - Fórmula sin componentes dañinos ni efectos secundarios. - Aplicación fácil y cómoda con cepillo suave. Modo de uso: Aplicar 2-3 veces al día sobre la raíz de las pestañas, preferiblemente por la mañana antes del maquillaje y en la noche después de desmaquillar. Si usas lentes de contacto, retíralos antes de la aplicación y espera 15 minutos antes de volver a colocarlos. Ingredientes clave: - Agua y glicerina: Hidratación y suavidad. - Vitamina E: Fortalece y protege. - Proteína de avena hidrolizada: Nutrición y elasticidad. Un suero ideal para quienes buscan pestañas más largas, gruesas y saludables de forma natural.'
  },
  {
    id: 'belleza-gel-exfoliante-anti-acne-centella-bqy79985',
    name: 'GEL EXFOLIANTE ANTI ACNE CENTELLA BQY79985',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '17924',
    price: 13400,
    stock: 6,
    image: 'assets/products/belleza/gel-exfoliante-anti-acne-centella-bqy79985.jpg',
    description: '¡Adiós, acné! Descubre el poder de la Centella Asiática para una piel radiante y sin imperfecciones. Este gel exfoliante limpia profundamente, calma y suaviza, dejando tu rostro impecable. ¡Siente la diferencia desde la primera aplicación!'
  },
  {
    id: 'belleza-jabon-antioxidante-pieles-maduras-arand',
    name: 'JABON ANTIOXIDANTE PIELES MADURAS ARAND',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '44875',
    price: 16700,
    salePrice: 12400,
    stock: 5,
    image: 'assets/products/belleza/jabon-antioxidante-pieles-maduras-arand.jpg',
    description: 'Limpiador hidratante de arándanos, ideal para todo tipo de piel. Su fórmula suave pero efectiva limpia profundamente, aportando hidratación y dejando la piel suave y fresca. Perfecto para una rutina diaria que refresca la piel y mejora su apariencia, manteniéndola nutrida y protegida.'
  },
  {
    id: 'belleza-jabon-antioxidantes-vitamina-c-bioaqua-bqy00200',
    name: 'JABON ANTIOXIDANTES VITAMINA C BIOAQUA BQY00200',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '78712',
    price: 10000,
    stock: 6,
    image: 'assets/products/belleza/jabon-antioxidantes-vitamina-c-bioaqua-bqy00200.jpg',
    description: '¡Revela una piel radiante y luminosa! Este jabón limpiador con Vitamina C de Bioaqua es tu secreto para una tez revitalizada y jugosa. Experimenta una limpieza profunda que ilumina y nutre, dejando tu piel fresca y llena de vida. ¡Descubre el poder de la Vitamina C!'
  },
  {
    id: 'belleza-jabon-control-lineas-expres-retinol',
    name: 'JABON CONTROL LINEAS EXPRES RETINOL',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '40884',
    price: 14300,
    salePrice: 8400,
    stock: 4,
    image: 'assets/products/belleza/jabon-control-lineas-expres-retinol.jpg',
    description: 'Limpiador facial BIOAQUA Retinol Cleanser, ideal para una rutina diaria de cuidado. Ayuda a limpiar la piel, retirar impurezas y dejar una sensación fresca, suave e hidratada.\n\nPerfecto para una piel más limpia, luminosa y con apariencia renovada.'
  },
  {
    id: 'belleza-jabon-control-manchas-y-anti-acne-nicotinamida',
    name: 'JABON CONTROL MANCHAS Y ANTI ACNE NICOTINAMIDA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '26353',
    price: 9100,
    stock: 3,
    image: 'assets/products/belleza/jabon-control-manchas-y-anti-acne-nicotinamida.jpg',
    description: 'BIOAQUA Nicotinamide Cleanser limpia profundamente el rostro mientras ayuda a hidratar y suavizar la piel. Su fórmula con nicotinamida ayuda a remover impurezas, controlar el exceso de grasa y dejar una sensación fresca y ligera después de cada uso. Ideal para una limpieza facial diaria.'
  },
  {
    id: 'belleza-jabon-facial-activacion-de-colageno-antienvejecimiento',
    name: 'JABON FACIAL ACTIVACION DE COLAGENO ANTIENVEJECIMIENTO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '72896',
    price: 12000,
    stock: 3,
    image: 'assets/products/belleza/jabon-facial-activacion-de-colageno-antienvejecimiento.jpg',
    description: 'Limpiador facial con colágeno diseñado para limpiar suavemente, eliminar impurezas y dejar la piel fresca sin resecarla. Su fórmula ayuda a mantener la hidratación, mejorar la suavidad del rostro y aportar una apariencia más limpia, cuidada y revitalizada. Ideal para quienes quieren una limpieza diaria efectiva con un toque de cuidado extra para la piel.'
  },
  {
    id: 'belleza-jabon-facial-hidratante-en-gel-a-hialuronico-bqy58796',
    name: 'JABON FACIAL HIDRATANTE EN GEL A. HIALURONICO BQY58796',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '44611',
    price: 11500,
    stock: 7,
    image: 'assets/products/belleza/jabon-facial-hidratante-en-gel-a-hialuronico-bqy58796.jpg',
    description: 'Hidrata y refresca tu piel con BIOAQUA Water Gel de ácido hialurónico. Su fórmula ligera ayuda a retener la humedad, dejando el rostro suave, fresco y con apariencia más luminosa. Ideal para uso diario, se absorbe rápido y no deja sensación pesada. Perfecto para piel seca, apagada o que necesita un extra de hidratación.'
  },
  {
    id: 'belleza-jabon-facial-reparador-aloe-vera-bioaqua',
    name: 'JABON FACIAL REPARADOR ALOE VERA BIOAQUA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '43902',
    price: 20800,
    salePrice: 15600,
    stock: 16,
    image: 'assets/products/belleza/jabon-facial-reparador-aloe-vera-bioaqua.jpg',
    description: 'MARCA %100 ORIGINAL'
  },
  {
    id: 'belleza-jabon-facial-tono-uniforme-e-hidratacion-flor-de-cerezo',
    name: 'JABON FACIAL TONO UNIFORME E HIDRATACIÓN FLOR DE CEREZO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '65050',
    price: 10800,
    stock: 2,
    image: 'assets/products/belleza/jabon-facial-tono-uniforme-e-hidratacion-flor-de-cerezo.jpg',
    description: 'Limpiador facial BIOAQUA Cherry Blossom 98%, ideal para una limpieza diaria suave y refrescante. Ayuda a retirar impurezas, controlar la sensación de grasa y dejar la piel con apariencia más limpia, fresca y luminosa.\n\nPerfecto para una piel suave, renovada y radiante.'
  },
  {
    id: 'belleza-jabon-hidratante-aloe-rosado-sado-sd87386',
    name: 'JABON HIDRATANTE ALOE ROSADO SADO SD87386',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '96173',
    price: 12000,
    stock: 10,
    image: 'assets/products/belleza/jabon-hidratante-aloe-rosado-sado-sd87386.jpg',
    description: 'Limpiador facial SADOER 98% Pink Aloe, ideal para limpiar suavemente la piel mientras aporta una sensación fresca e hidratada. Ayuda a retirar impurezas y dejar el rostro con apariencia más suave, limpia y luminosa.\n\nPerfecto para una rutina diaria de cuidado facial.'
  },
  {
    id: 'belleza-jabon-lujo-antioxidantes-uva-sadox',
    name: 'JABON LUJO ANTIOXIDANTES UVA SADOX',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '43170',
    price: 11000,
    stock: 11,
    image: 'assets/products/belleza/jabon-lujo-antioxidantes-uva-sadox.jpg',
    description: 'SADOER Grape Seeds Gentle Cleanser limpia profundamente el rostro mientras ayuda a controlar la grasa y remover impurezas sin resecar la piel. Su fórmula con extracto de semilla de uva y antioxidantes deja la piel fresca, suave y con una sensación de limpieza duradera. Ideal para uso diario.'
  },
  {
    id: 'belleza-jabon-rosas-y-ac-hialuron-bioaq-bqy15433',
    name: 'JABON ROSAS Y AC HIALURON BIOAQ BQY15433',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '27155',
    price: 9200,
    stock: 18,
    image: 'assets/products/belleza/jabon-rosas-y-ac-hialuron-bioaq-bqy15433.jpg',
    description: 'MARCA 100% ORIGINAL IMPORTADA\n\nÁcido Hialurónico de Rosa es un limpiador hidratante que ayuda a limpiar profundamente la piel sin dejar sensación de resequedad. Su fórmula está pensada para aportar hidratación, suavidad y una apariencia más fresca, mientras ayuda a mantener el rostro limpio, cómodo y con mejor aspecto. Ideal para una rutina diaria que combine limpieza y cuidado en un solo paso.'
  },
  {
    id: 'belleza-kit-3-sueros-piel-radiante-bioaqua-bqy37350',
    name: 'KIT 3 SUEROS PIEL RADIANTE BIOAQUA BQY37350',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '52751',
    price: 32500,
    salePrice: 16200,
    stock: 1,
    image: 'assets/products/belleza/kit-3-sueros-piel-radiante-bioaqua-bqy37350.jpg',
    description: 'Potencia tu rutina facial con este set de sérums BIOAQUA. Incluye vitamina C, retinol y ácido hialurónico para ayudar a hidratar, iluminar y mejorar la apariencia de la piel. Es práctico, fácil de usar y perfecto para quienes buscan un cuidado completo en un solo kit. Ideal para una piel más fresca, suave y con aspecto saludable.'
  },
  {
    id: 'belleza-kit-edicion-de-lujo-control-acne-ac-salicilico',
    name: 'KIT EDICION DE LUJO CONTROL ACNE AC SALICILICO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '27469',
    price: 59800,
    stock: 5,
    image: 'assets/products/belleza/kit-edicion-de-lujo-control-acne-ac-salicilico.jpg',
    description: '¡Despídete del acné y da la bienvenida a una piel radiante! Descubre el secreto de la perfección con nuestro KIT DE LUJO Ácido Salicílico. Limpia, reduce poros y controla la grasa para una piel visiblemente más sana y joven. ¡El cambio que tu rostro estaba esperando!'
  },
  {
    id: 'belleza-kit-facial-anti-edad-y-regeneracion',
    name: 'KIT FACIAL ANTI EDAD Y REGENERACION',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '74231',
    price: 23000,
    stock: 5,
    image: 'assets/products/belleza/kit-facial-anti-edad-y-regeneracion.jpg',
    description: 'BIOAQUA Snail Dope es un set de cuidado facial ideal para hidratar, suavizar y darle más luminosidad a la piel. Su fórmula con extracto de caracol ayuda a mejorar la textura, aportar frescura y dejar el rostro con una apariencia más saludable y radiante.\n\nPerfecto para una rutina diaria completa: crema, esencia y contorno de ojos en una presentación elegante y de lujo.'
  },
  {
    id: 'belleza-kit-facial-hidratante-anti-oxidante-vitamin-c-6',
    name: 'KIT FACIAL HIDRATANTE ANTI OXIDANTE VITAMIN C 6',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '19230',
    price: 59800,
    stock: 6,
    image: 'assets/products/belleza/kit-facial-hidratante-anti-oxidante-vitamin-c-6.jpg',
    description: 'Controla el exceso de grasa y ayuda a mantener tu piel más limpia y fresca con la línea Bioaqua Salicylic Acid. Ideal para piel con tendencia acneica, ayuda a limpiar los poros, reducir impurezas y mejorar la apariencia del rostro con una rutina práctica y completa.'
  },
  {
    id: 'belleza-kit-viajero-anti-acne-pure-skin',
    name: 'KIT VIAJERO ANTI ACNE PURE SKIN',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '65112',
    price: 29800,
    stock: 9,
    image: 'assets/products/belleza/kit-viajero-anti-acne-pure-skin.jpg',
    description: 'Cuida tu piel con este completo kit facial BIOAQUA, diseñado para ayudar a limpiar, controlar la grasa y mejorar la apariencia de la piel con tendencia al acné.\n\nIncluye limpiador facial, esencia reparadora y tratamiento focalizado, ideal para una rutina diaria más completa y práctica.\n\nBeneficios principales:\n\nAyuda a limpiar profundamente la piel\n\nControla el exceso de grasa\n\nContribuye a mejorar la apariencia de granitos e imperfecciones\n\nRutina completa en un solo kit\n\nPresentación elegante y fácil de vender\n\nIdeal para uso personal o para negocio\n\nUn producto de alta rotación, perfecto para clientes que buscan cuidado facial, limpieza y una piel con mejor apariencia.\n\nBIOAQUA REMOVAL OF ACNE: limpieza, cuidado y frescura para tu piel.'
  },
  {
    id: 'belleza-lava-brochas-maquillaje',
    name: 'LAVA BROCHAS MAQUILLAJE',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '20773',
    price: 25000,
    stock: 10,
    image: 'assets/products/belleza/lava-brochas-maquillaje.jpg',
    description: ''
  },
  {
    id: 'belleza-limpeador-ultrasonico-de-poros',
    name: 'LIMPEADOR ULTRASONICO DE POROS',
    category: 'belleza',
    categoryLabel: 'Belleza',
    extraCategories: ['hogar'],
    ref: '21424',
    price: 28000,
    stock: 3,
    image: 'assets/products/belleza/limpeador-ultrasonico-de-poros.jpg',
    gallery: [
      'assets/products/belleza/limpeador-ultrasonico-de-poros-1.jpg'
    ],
    description: '¡Luce una piel radiante todos los días!\n\nElimina puntos negros y suciedad profunda.\n\nDeja la piel limpia, suave y fresca.\n\nIdeal para mantener tu rostro libre de impurezas.'
  },
  {
    id: 'belleza-lip-balmp-hidratante-reparador-fino',
    name: 'LIP BALMP HIDRATANTE REPARADOR FINO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '17855',
    price: 6700,
    stock: 7,
    image: 'assets/products/belleza/lip-balmp-hidratante-reparador-fino.jpg',
    description: 'X1 UNIDAD'
  },
  {
    id: 'belleza-manteca-de-cacao-labial-coco',
    name: 'MANTECA DE CACAO LABIAL COCO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '13721',
    price: 11100,
    salePrice: 6700,
    stock: 10,
    image: 'assets/products/belleza/manteca-de-cacao-labial-coco.jpg',
    description: '¡Despierta tus labios con la exótica dulzura del coco! Nuestro bálsamo hidrata profundamente, protegiendo y suavizando para una sonrisa irresistible. Descubre la caricia tropical que tus labios merecen. ¡Pruébalo y enamórate!'
  },
  {
    id: 'belleza-maquina-depiladora-femenina-jx188',
    name: 'MAQUINA DEPILADORA FEMENINA JX188',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '42009',
    price: 27000,
    stock: 4,
    image: 'assets/products/belleza/maquina-depiladora-femenina-jx188.jpg',
    description: 'Elimina el vello de forma rápida y práctica con Finishing Touch. Su diseño compacto permite usarlo en rostro, brazos y piernas, incluye cabezales intercambiables y cepillo de limpieza, además de batería recargable de litio. Ideal para retoques diarios y para llevar en el bolso o de viaje.'
  },
  {
    id: 'belleza-masajeador-anti-arrugas-electrico',
    name: 'MASAJEADOR ANTI ARRUGAS  ELECTRICO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '80378',
    price: 32000,
    stock: 6,
    image: 'assets/products/belleza/masajeador-anti-arrugas-electrico.jpg',
    description: 'Masajeador Facial Antiarrugas, ideal para complementar tu rutina de cuidado facial desde casa.\n\nSu diseño ergonómico ayuda a masajear el rostro, mejorar la sensación de firmeza y relajar la piel, dejando una apariencia más fresca, descansada y luminosa.\n\nPerfecto para usar en zonas como frente, mejillas, cuello y contorno facial.\n\nUn producto práctico, moderno y llamativo para quienes buscan cuidar su piel y mantener un rostro con mejor apariencia.\n\nMASAJEADOR FACIAL ANTIARRUGAS'
  },
  {
    id: 'belleza-masajeador-de-hielo',
    name: 'MASAJEADOR DE HIELO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '52940',
    price: 13600,
    stock: 9,
    image: 'assets/products/belleza/masajeador-de-hielo.jpg',
    description: 'Rodillo facial de hielo\n\nRefresca tu piel al instante con este práctico rodillo facial. Su diseño compacto y reutilizable ayuda a dar una sensación de frescura, relajación y cuidado diario en rostro y cuello.\n\nIdeal para rutinas de belleza, mañanas cansadas o después de un día largo. Fácil de usar, cómodo y con un diseño moderno en color lila.\n\nPiel fresca y radiante en minutos.'
  },
  {
    id: 'belleza-masajeador-electrico-3d',
    name: 'MASAJEADOR ELECTRICO  3D',
    category: 'belleza',
    categoryLabel: 'Belleza',
    extraCategories: ['deporte', 'hogar'],
    ref: '19322',
    price: 112000,
    salePrice: 63800,
    stock: 3,
    image: 'assets/products/belleza/masajeador-electrico-3d.jpg',
    gallery: [
      'assets/products/belleza/masajeador-electrico-3d-1.jpg'
    ],
    description: '¡Olvida las tensiones! Descubre la revolución del bienestar con nuestro Masajeador Eléctrico 3D. Experimenta un alivio profundo y una relajación incomparable que transformará tu día. ¿Listo para sentir la diferencia?'
  },
  {
    id: 'belleza-masajeador-facial-con-luz-rejuvecimiento-y-quita-papada',
    name: 'MASAJEADOR FACIAL CON LUZ REJUVECIMIENTO Y QUITA PAPADA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '82601',
    price: 50500,
    salePrice: 43900,
    stock: 1,
    image: 'assets/products/belleza/masajeador-facial-con-luz-rejuvecimiento-y-quita-papada.jpg',
    description: '¡Dile adiós a la papada y hola a un rostro rejuvenecido! Este masajeador facial con luz te brinda una piel visiblemente más firme y luminosa. Descubre el secreto de un cutis radiante. ¡Querrás verlo ya!'
  },
  {
    id: 'belleza-masajeador-facial-frio-roller',
    name: 'MASAJEADOR FACIAL FRIO ROLLER',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '65594',
    price: 16700,
    salePrice: 8500,
    stock: 12,
    image: 'assets/products/belleza/masajeador-facial-frio-roller.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'belleza-mascarilla-antioxidantes-vitamina-c-bioaqua',
    name: 'MASCARILLA ANTIOXIDANTES VITAMINA C BIOAQUA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '18592',
    price: 2100,
    salePrice: 1100,
    stock: 51,
    image: 'assets/products/belleza/mascarilla-antioxidantes-vitamina-c-bioaqua.jpg',
    description: '¡Despierta tu piel con un chute de energía! Descubre el secreto de una tez radiante con la Mascarilla Antioxidante Vitamina C de Bioaqua. Hidratación y luminosidad instantáneas. ¡Te va a encantar!'
  },
  {
    id: 'belleza-mascarilla-en-velo-cereza-sadoer',
    name: 'MASCARILLA EN VELO CEREZA SADOER',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '93441',
    price: 1300,
    stock: 31,
    image: 'assets/products/belleza/mascarilla-en-velo-cereza-sadoer.jpg',
    description: '¡Un shot de frescura y dulzura para tu piel! Descubre la Mascarilla en Velo Cereza Sadoer. Hidratación intensa y luminosidad instantánea que te robarán una sonrisa. ¿Lista para un rostro radiante?'
  },
  {
    id: 'belleza-mascarilla-en-velo-vitamina-c',
    name: 'MASCARILLA EN VELO VITAMINA C',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '55542',
    price: 1300,
    stock: 31,
    image: 'assets/products/belleza/mascarilla-en-velo-vitamina-c.jpg',
    description: '¡Revela tu piel más luminosa con nuestra Mascarilla en Velo Vitamina C! Un chute de energía frutal para hidratar, nutrir y desvanecer la opacidad. ¡Siente la frescura y el brillo inmediato! ¿Lista para un rostro radiante?'
  },
  {
    id: 'belleza-moldeador-de-cabello-5-en-1',
    name: 'MOLDEADOR DE CABELLO 5 EN 1',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '46873',
    price: 96600,
    salePrice: 63800,
    stock: 1,
    image: 'assets/products/belleza/moldeador-de-cabello-5-en-1.jpg',
    description: '¡Cambia tu look en minutos! Este moldeador multifuncional 5 en 1 te permite secar, alisar, rizar y dar volumen fácilmente desde casa. Ideal para lograr un peinado profesional sin salir del hogar.\n\nIncluye 5 accesorios intercambiables\n\nPotencia: 1100W\n\nVoltaje: 110V / 220V\n\nTemperatura: hasta 120°C\n\nCable de 2 metros para mayor comodidad\n\nDiseño moderno y fácil de usar'
  },
  {
    id: 'belleza-parche-anti-acne-x24-und-sobre',
    name: 'PARCHE ANTI ACNE X24 UND SOBRE',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '72675',
    price: 9100,
    stock: 16,
    image: 'assets/products/belleza/parche-anti-acne-x24-und-sobre.jpg',
    description: '- Un paquete de parches localizados para ayudar a calmar y reducir el tamaño de las dolorosas imperfecciones rojas.\n\n- Formulado con árbol de té, el parche ayuda a reducir la infección sin resecar ni irritar la piel.\n\n- Mientras reducen el tamaño de las imperfecciones, los parches también funcionan para hidratar y nutrir la piel para prevenir más brotes.'
  },
  {
    id: 'belleza-peine-cabo-metalico',
    name: 'PEINE CABO METALICO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '29016',
    price: 1900,
    salePrice: 1300,
    stock: 8,
    image: 'assets/products/belleza/peine-cabo-metalico.jpg',
    description: '5 PEINETAS INCLUIDAS'
  },
  {
    id: 'belleza-plancha-en-combo',
    name: 'PLANCHA EN COMBO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '65310',
    price: 56000,
    stock: 2,
    image: 'assets/products/belleza/plancha-en-combo.jpg',
    description: '¡Cabello liso, brillante y sin esfuerzo! Descubre el combo perfecto que revoluciona tu rutina. Obtén resultados de salón en casa con nuestra plancha alisadora y sus cepillos complementarios. ¡Tu secreto para un look impactante está aquí!'
  },
  {
    id: 'belleza-plancha-hondas',
    name: 'PLANCHA HONDAS',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '47774',
    price: 59800,
    stock: 6,
    image: 'assets/products/belleza/plancha-hondas.jpg',
    description: '¡Consigue el look de celebrity en segundos! La Plancha Hondas te regala ondas playeras perfectas y duraderas, transformando tu cabello con un solo pasada. ¡Descubre el secreto de una melena de ensueño!'
  },
  {
    id: 'belleza-plancha-para-cabello-waiikl-wl-878',
    name: 'PLANCHA PARA CABELLO WAIIKL WL-878',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '66307',
    price: 60100,
    salePrice: 43300,
    stock: 3,
    image: 'assets/products/belleza/plancha-para-cabello-waiikl-wl-878.jpg',
    description: 'Plancha alisadora profesional diseñada para lograr un alisado rápido y uniforme desde casa. Alcanza hasta 200 °C de temperatura, ideal para diferentes tipos de cabello.\n\nCalentamiento rápido\n\nTemperatura máxima: 200 °C\n\nDiseño ergonómico y liviano\n\nPlacas lisas para un deslizamiento suave\n\nResultados de estilo óptimo\n\nUso doméstico o profesional\n\nModelo: WL-878\n\nPerfecta para dejar el cabello liso, brillante y manejable en pocos minutos.'
  },
  {
    id: 'belleza-protector-solar-centella-spf-50-bqy79978',
    name: 'PROTECTOR SOLAR CENTELLA SPF 50 BQY79978',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '42638',
    price: 14800,
    stock: 12,
    image: 'assets/products/belleza/protector-solar-centella-spf-50-bqy79978.jpg',
    description: '¡Despídete de las manchas y el envejecimiento! El Protector Solar Centella SPF 50 de Bioaqua es tu escudo perfecto. Con Centella Asiática, Calma, Hidrata y Unifica tu tono. ¡Tu piel lucirá radiante y protegida todo el día! ¿Lista para el secreto de una piel perfecta?'
  },
  {
    id: 'belleza-protector-solar-vitamina-c-bioaqua',
    name: 'PROTECTOR SOLAR VITAMINA C BIOAQUA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '36946',
    price: 9600,
    salePrice: 8200,
    stock: 39,
    image: 'assets/products/belleza/protector-solar-vitamina-c-bioaqua.jpg',
    description: 'Hidratación ligera y alta protección en un solo paso. Su fórmula con vitamina C ayuda a iluminar la piel, prevenir manchas y combatir el envejecimiento mientras te protege del sol.\n\nSPF50+ PA+++ (protección alta)\n\nTextura ligera, no grasosa\n\nIdeal para uso diario\n\nCuida tu piel, ilumínala y protégela, todo en uno.'
  },
  {
    id: 'belleza-rizadora',
    name: 'RIZADORA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    extraCategories: ['hogar'],
    ref: '49238',
    price: 33500,
    salePrice: 25100,
    stock: 2,
    image: 'assets/products/belleza/rizadora.jpg',
    gallery: [
      'assets/products/belleza/rizadora-1.jpg',
      'assets/products/belleza/rizadora-2.jpg'
    ],
    description: ''
  },
  {
    id: 'belleza-secador-de-cabello-nova',
    name: 'SECADOR DE CABELLO NOVA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    extraCategories: ['hogar'],
    ref: '30070',
    price: 55700,
    salePrice: 44600,
    stock: 11,
    image: 'assets/products/belleza/secador-de-cabello-nova.jpg',
    description: ''
  },
  {
    id: 'belleza-serum-facial-tono-uniforme-e-hidratacion-flor-de-cerezo-bqy8',
    name: 'SERUM FACIAL TONO UNIFORME E HIDRATACIÓN FLOR DE CEREZO BQY83586',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '52526',
    price: 11500,
    stock: 1,
    image: 'assets/products/belleza/serum-facial-tono-uniforme-e-hidratacion-flor-de-cerezo-bqy8.jpg',
    description: 'Sérum facial BIOAQUA Cherry Blossom 98%, ideal para hidratar y revitalizar la piel. Ayuda a dejar el rostro con sensación fresca, suave y luminosa, aportando una apariencia más firme y cuidada.\n\nPerfecto para una piel radiante, hidratada y con aspecto saludable.'
  },
  {
    id: 'belleza-serum-hidratante-ac-hialur-30ml-bioaq-bqy00552',
    name: 'SERUM HIDRATANTE AC HIALUR 30ML BIOAQ BQY00552',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '31070',
    price: 5000,
    stock: 16,
    image: 'assets/products/belleza/serum-hidratante-ac-hialur-30ml-bioaq-bqy00552.jpg',
    description: 'Hidrata tu piel al instante con este sérum de ácido hialurónico BIOAQUA. Su fórmula ligera ayuda a mantener el rostro suave, fresco y con apariencia más luminosa durante el día. Ideal para piel seca o apagada, se absorbe rápido y deja una sensación limpia, sin pesadez. Un básico perfecto para una rutina facial más cuidada y radiante.'
  },
  {
    id: 'belleza-serum-hidratante-aloe-rosado-sd87362',
    name: 'SERUM HIDRATANTE ALOE ROSADO SD87362',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '85290',
    price: 13000,
    stock: 11,
    image: 'assets/products/belleza/serum-hidratante-aloe-rosado-sd87362.jpg',
    description: 'SADOER 98% Pure Aloe es un sérum hidratante y calmante ideal para darle a tu piel una sensación fresca, suave y luminosa desde la primera aplicación.\n\nSu fórmula con aloe ayuda a hidratar, refrescar y mejorar la apariencia de la piel, perfecta para usar después de la limpieza facial o cuando sientes el rostro seco o apagado.\n\nPiel más fresca, suave y cuidada todos los días con SADOER 98% Aloe.'
  },
  {
    id: 'belleza-serum-hidratante-arroz-35ml-bioaqua-bqy41012',
    name: 'SERUM HIDRATANTE ARROZ 35ML BIOAQUA BQY41012',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '12524',
    price: 7000,
    stock: 31,
    image: 'assets/products/belleza/serum-hidratante-arroz-35ml-bioaqua-bqy41012.jpg',
    description: '¡Revela una piel radiante y joven! Este serum de arroz es tu secreto para una hidratación profunda, un tono unificado y líneas de expresión suavizadas. Descubre el poder de la naturaleza para transformar tu rostro. ¡Tu piel te lo agradecerá!'
  },
  {
    id: 'belleza-serum-removedor-de-acne-ps-bioaqua',
    name: 'SERUM REMOVEDOR DE ACNE PS BIOAQUA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '10171',
    price: 12200,
    stock: 2,
    image: 'assets/products/belleza/serum-removedor-de-acne-ps-bioaqua.jpg',
    description: 'MARCA 100% ORIGINAL'
  },
  {
    id: 'belleza-set-manicure-x-9-con-lima-metalica',
    name: 'SET MANICURE X 9 CON LIMA METALICA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '64144',
    price: 20600,
    salePrice: 13600,
    stock: 12,
    image: 'assets/products/belleza/set-manicure-x-9-con-lima-metalica.jpg',
    description: '¡Uñas perfectas en minutos! Este set de manicura x 9 te ofrece todo para unas manos y pies impecables. Diseñado para profesionales y amantes del cuidado personal. ¡Descubre el secreto de una manicura de salón en casa!'
  },
  {
    id: 'belleza-set-manicure-x5-pcs',
    name: 'SET MANICURE X5 PCS',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '57357',
    price: 4000,
    salePrice: 2800,
    stock: 12,
    image: 'assets/products/belleza/set-manicure-x5-pcs.jpg',
    description: '¡Logra uñas impecables y dignas de salón desde casa! Este set de manicure de 5 piezas es tu secreto para manos perfectas. Descubre la facilidad y precisión que te harán brillar. ¡Consigue el tuyo y redefine tu cuidado personal!'
  },
  {
    id: 'belleza-shampo-1-litro-frutal',
    name: 'SHAMPO 1 LITRO FRUTAL',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '31588',
    price: 17800,
    stock: 10,
    image: 'assets/products/belleza/shampo-1-litro-frutal.jpg',
    description: 'BRILLO Y SUAVIDAD CON ESTE EXCELENTE SHAMPOO\n\nSHAMPO FRUTAL PROFESIONAL'
  },
  {
    id: 'belleza-shampo-profesional-coco-1-litro',
    name: 'SHAMPO PROFESIONAL COCO 1 LITRO',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '38528',
    price: 31000,
    stock: 0,
    image: 'assets/products/belleza/shampo-profesional-coco-1-litro.jpg',
    description: 'SHAMPO PROFESIONAL / BRILLO Y SUAVIDAD SIN SAL / COCO / MARCA ESPECIALIZADA PARA EL CABELLO'
  },
  {
    id: 'belleza-shampo-profesional-romero-500-ml',
    name: 'SHAMPO PROFESIONAL ROMERO 500 ML',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '81856',
    price: 22000,
    salePrice: 14100,
    stock: 12,
    image: 'assets/products/belleza/shampo-profesional-romero-500-ml.jpg',
    description: 'SHAMPO PROFESIONAL / BRILLO Y SUAVIDAD SIN SAL / COCO / MARCA ESPECIALIZADA PARA EL CABELLO'
  },
  {
    id: 'belleza-silicona-capilar-10ml',
    name: 'SILICONA CAPILAR 10ML',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '87551',
    price: 3800,
    salePrice: 2700,
    stock: 185,
    image: 'assets/products/belleza/silicona-capilar-10ml.jpg',
    description: 'Aceite Capilar Silicona Centella es ideal para darle al cabello un acabado más suave, brillante y manejable desde la primera aplicación.\n\nSu fórmula ayuda a controlar el frizz, aporta brillo y deja una sensación sedosa sin complicaciones. Viene en prácticos sobres de 10 ml, perfectos para usar en casa, llevar en el bolso o vender por unidad.\n\nIdeal para cabellos opacos, secos o maltratados que necesitan un toque de suavidad y apariencia saludable.\n\nCentella Silicona: brillo, suavidad y cuidado práctico para tu cabello.'
  },
  {
    id: 'belleza-suero-lujo-antioxidantes-uva-sadox',
    name: 'SUERO LUJO ANTIOXIDANTES UVA SADOX',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '95274',
    price: 12600,
    salePrice: 7900,
    stock: 1,
    image: 'assets/products/belleza/suero-lujo-antioxidantes-uva-sadox.jpg',
    description: 'SADOER Grape Seeds Hydration Serum hidrata profundamente la piel y ayuda a mejorar su elasticidad y suavidad. Su fórmula con extracto de semilla de uva y ácido hialurónico aporta frescura, luminosidad y una hidratación duradera, dejando el rostro con una apariencia más saludable y revitalizada.'
  },
  {
    id: 'belleza-tonico-facial-de-ceramidas-y-acido-hialuronico-bioaqua',
    name: 'TONICO FACIAL DE CERAMIDAS Y ACIDO HIALURÓNICO BIOAQUA',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '33156',
    price: 15600,
    salePrice: 12600,
    stock: 5,
    image: 'assets/products/belleza/tonico-facial-de-ceramidas-y-acido-hialuronico-bioaqua.jpg',
    description: 'PRODUCTO %100 ORIGINAL\n\nCuida tu piel con el tónico facial Ceramide Hyaluronic Acid Toner.\n\nSu fórmula con ácido hialurónico ayuda a hidratar, refrescar y mejorar la apariencia de la piel seca, dejándola con una sensación más suave, limpia y revitalizada.\n\nBeneficios principales:\n\nHidrata y refresca la piel\n\nAyuda a aliviar la resequedad\n\nTextura ligera y de rápida absorción\n\nIdeal para uso diario\n\nPresentación de 120 ml\n\nPerfecto para rutinas de cuidado facial\n\nUn producto práctico, llamativo y de alta rotación para clientes que buscan mantener una piel más fresca, hidratada y con mejor apariencia.\n\nCERAMIDE HYALURONIC ACID TONER'
  },
  {
    id: 'belleza-tonico-facial-hidratanteac-hialuronico-bqy00521',
    name: 'TONICO FACIAL HIDRATANTEAC HIALURONICO BQY00521',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '48872',
    price: 12000,
    stock: 5,
    image: 'assets/products/belleza/tonico-facial-hidratanteac-hialuronico-bqy00521.jpg',
    description: 'Refresca e hidrata tu piel con BIOAQUA Hyaluronic Acid Toner. Su fórmula ligera ayuda a preparar el rostro, aportar humedad y dejar una sensación suave y fresca después de la limpieza. Ideal para uso diario, ayuda a que la piel luzca más limpia, luminosa y revitalizada.'
  },
  {
    id: 'belleza-tonico-facial-tono-uniforme-e-hidratacion-flor-de-cerezo-bqy',
    name: 'TONICO FACIAL TONO UNIFORME E HIDRATACIÓN FLOR DE CEREZO BQY77080',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '41916',
    price: 14600,
    stock: 13,
    image: 'assets/products/belleza/tonico-facial-tono-uniforme-e-hidratacion-flor-de-cerezo-bqy.jpg',
    description: 'Tónico facial BIOAQUA Cherry Blossom 98%, ideal para refrescar e hidratar la piel después de la limpieza. Ayuda a dejar el rostro con sensación suave, luminosa y revitalizada, preparando la piel para el resto de tu rutina.\n\nPerfecto para una piel fresca, hidratada y radiante todos los días.'
  },
  {
    id: 'belleza-tonico-hidratante-de-arroz-bioaqua-bqy41029',
    name: 'TONICO HIDRATANTE DE ARROZ BIOAQUA BQY41029',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '33079',
    price: 10400,
    stock: 17,
    image: 'assets/products/belleza/tonico-hidratante-de-arroz-bioaqua-bqy41029.jpg',
    description: '¡Revela una piel radiante! Nuestro tónico de arroz Bioaqua hidrata profundamente, controla el exceso de grasa y mejora la textura. Siente la suavidad y luminosidad transformadora. ¿Lista para deslumbrar?'
  },
  {
    id: 'belleza-vitamina-c-antioxidante-serum-grande',
    name: 'VITAMINA C ANTIOXIDANTE SERUM GRANDE',
    category: 'belleza',
    categoryLabel: 'Belleza',
    ref: '57361',
    price: 15700,
    salePrice: 8500,
    stock: 10,
    image: 'assets/products/belleza/vitamina-c-antioxidante-serum-grande.jpg',
    description: 'PRODUCTO 100% ORIGINAL'
  },

  /* ---------- Tecnología ---------- */
  {
    id: 'tecno-aibimy-my262bt-original-ipx6',
    name: 'AIBIMY MY262BT ORIGINAL IPX6',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '98128',
    price: 151000,
    stock: 1,
    image: 'assets/products/tecnologia/1/aibimy-my262bt-original-ipx6.jpg',
    gallery: [
      'assets/products/tecnologia/1/aibimy-my262bt-original-ipx6-1.jpg',
      'assets/products/tecnologia/1/aibimy-my262bt-original-ipx6-2.jpg'
    ],
    description: 'Resistencia al Agua IPX6: Protegido contra salpicaduras y chorros potentes de agua, ideal para exteriores.\n\nSonido Potente: Disfruta de un audio claro y graves profundos que llenarán cualquier espacio.\n\nBatería de Larga Duración: Horas de reproducción continua para que la música nunca pare.\n\nConectividad Bluetooth: Empareja tus dispositivos fácilmente y reproduce tu música sin cables.'
  },
  {
    id: 'tecno-aibimy-original-my212-waterproof',
    name: 'AIBIMY ORIGINAL MY212 WATERPROOF',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '51953',
    price: 134600,
    salePrice: 67300,
    stock: 4,
    image: 'assets/products/tecnologia/1/aibimy-original-my212-waterproof.jpg',
    description: 'un sonido de alta calidad, este parlante cuenta con una potencia de salida de 5 W que te permitirá disfrutar tus melodías favoritas con claridad y nitidez. Su formato cilíndrico no solo es atractivo, sino que también permite una distribución del sonido óptima, convirtiéndolo en el compañero perfecto para tus momentos de diversión y relajación en casa o al aire libre.\n\nLa conectividad Bluetooth 5.3 asegura que puedas reproducir tu música de forma inalámbrica desde cualquier dispositivo compatible. Además, su diseño portátil y su resistencia al agua IPX6 lo hacen ideal para llevarlo a la playa, a una reunión al aire libre o simplemente para disfrutar en tu sala o alcoba. La batería recargable proporciona hasta 4 horas de reproducción continua, con un tiempo de carga de solo 1 hora, lo que significa que siempre estará listo para la acción.\n\nLa iluminación LED RGB añade un toque especial a tus fiestas o noches de relajación, creando un ambiente armonioso mientras escuchas tu música. Es un altavoz versátil, perfecto para quienes buscan una experiencia auditiva rica y sin complicaciones. Eleva tu momento musical con el Parlante Portátil Aibimy MY212 y deja que la música hable por ti.'
  },
  {
    id: 'tecno-airpdos-t11-labubu',
    name: 'AIRPDOS T11 LABUBU',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '82648',
    price: 39000,
    stock: 6,
    image: 'assets/products/tecnologia/1/airpdos-t11-labubu.jpg',
    description: 'PUEDE VENIR ROSADO O AZUL CLARO'
  },
  {
    id: 'tecno-airpods-3-generacion-1-1',
    name: 'AIRPODS 3 GENERACION 1.1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '86167',
    price: 118000,
    salePrice: 73200,
    stock: 15,
    image: 'assets/products/tecnologia/1/airpods-3-generacion-1-1.jpg',
    description: '¡Descubre el sonido inmersivo de los AirPods 3ª Gen! Experimenta audio espacial, comodidad inigualable y una conexión sin esfuerzo. El futuro de la música te espera. ¿Listo para elevar tu experiencia auditiva?\n\nCON TRADUCTOR Y CANCELACION DE RUIDO INCLUIDO'
  },
  {
    id: 'tecno-airpods-abiertos-pro-v12-original',
    name: 'AIRPODS ABIERTOS PRO V12 ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '30641',
    price: 139800,
    stock: 1,
    image: 'assets/products/tecnologia/1/airpods-abiertos-pro-v12-original.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-abiertos-pro-v12-original-1.jpg',
      'assets/products/tecnologia/1/airpods-abiertos-pro-v12-original-2.jpg'
    ],
    description: 'AIRPODS PRO SONIDO EXCELENTE\n\nGARANTIA DE 6 MESES'
  },
  {
    id: 'tecno-airpods-anc-enc-yw08',
    name: 'AIRPODS ANC ENC YW08',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '96839',
    price: 113600,
    stock: 3,
    image: 'assets/products/tecnologia/1/airpods-anc-enc-yw08.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-anc-enc-yw08-1.jpg',
      'assets/products/tecnologia/1/airpods-anc-enc-yw08-2.jpg',
      'assets/products/tecnologia/1/airpods-anc-enc-yw08-3.jpg',
      'assets/products/tecnologia/1/airpods-anc-enc-yw08-4.jpg'
    ],
    description: 'MARCA 100% ORIGINAL CON UN SONIDO Y BAJO INCREIBLE!\n\n•Versión Bluetooth: V5.4\n\n•Tiempo De Reproducción De Música: 6H\n\n•Tiempo De Conversación: 6H\n\n•Tiempo de espera (estuche de carga): 180 días\n\n•Tiempo De Carga (Estuche De Carga): 1,5H\n\n•Profundidad de reducción de ruido: 37dB\n\n•Capacidad de la batería: 40mAh\n\n•Capacidad del estuche de carga: 530mAh\n\n•Tiempo De Carga (Auricular): 1H\n\n•Distancia de transmisión: 10 m\n\n•Potencia nominal: 25 mW'
  },
  {
    id: 'tecno-airpods-anc-jm19-traductores',
    name: 'AIRPODS ANC-JM19 TRADUCTORES',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '19048',
    price: 110000,
    stock: 2,
    image: 'assets/products/tecnologia/1/airpods-anc-jm19-traductores.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-anc-jm19-traductores-1.jpg'
    ],
    description: 'Presentamos los ANC-JM19, auriculares inalámbricos deportivos con cancelación activa de ruido. Disfruta de un sonido Hi-Fi claro y potente, con batería de larga duración y carga rápida mediante USB. Su estuche inteligente muestra información de carga en pantalla y permite transportar y proteger los auriculares fácilmente. Ideales para entrenamientos, viajes o el uso diario, combinan comodidad, estilo y tecnología avanzada.'
  },
  {
    id: 'tecno-airpods-bluetooh-es21',
    name: 'AIRPODS BLUETOOH ES21',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '30051',
    price: 53900,
    stock: 4,
    image: 'assets/products/tecnologia/1/airpods-bluetooh-es21.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-bluetooh-es21-1.jpg',
      'assets/products/tecnologia/1/airpods-bluetooh-es21-2.jpg',
      'assets/products/tecnologia/1/airpods-bluetooh-es21-3.jpg'
    ],
    description: 'MARCA 100% ORIGINAL COLOR BLANCO\n\nEstéreo verdaderamente inalámbrico\n\n* Solución Bluetooth: JL, modelo táctil\n\n* Tamaño de la bocina: ?13,5 mm, anillo de latón de 32 Ω\n\n* Resistencia al agua: IPX grado 4\n\n* Micrófono: Micrófono original 2718\n\n* Batería de los auriculares: 30 mAh, placa IC plus\n\n* Batería principal: 200 mAh, placa protectora\n\n* Tiempo de carga de los auriculares: 1 h\n\n* Tiempo de carga de la batería principal: 1,5 h\n\n* Distancia de transmisión: ≥10 m (sin barreras)\n\n* Tiempo de reproducción: 5-6 h\n\n* Puerto de carga: Tipo C\n\n* Estuche de carga: Carga de los auriculares: 4 veces'
  },
  {
    id: 'tecno-airpods-edicion-especial-codabury-original',
    name: 'AIRPODS EDICION ESPECIAL CODABURY ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '42013',
    price: 77800,
    stock: 3,
    image: 'assets/products/tecnologia/1/airpods-edicion-especial-codabury-original.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-edicion-especial-codabury-original-1.jpg',
      'assets/products/tecnologia/1/airpods-edicion-especial-codabury-original-2.jpg',
      'assets/products/tecnologia/1/airpods-edicion-especial-codabury-original-3.jpg'
    ],
    description: '100% ORIGINAL'
  },
  {
    id: 'tecno-airpods-generacion-6',
    name: 'AIRPODS GENERACION 6',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '45455',
    price: 121800,
    salePrice: 102300,
    stock: 2,
    image: 'assets/products/tecnologia/1/airpods-generacion-6.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-generacion-6-1.jpg'
    ],
    description: 'LLEGO LO ULTIMO EN TECNOLOGIA\n\nDISEÑO DE AIRPODS DE SEGUNDA GENERAION'
  },
  {
    id: 'tecno-airpods-kt30',
    name: 'AIRPODS KT30',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '34720',
    price: 65500,
    salePrice: 59000,
    stock: 2,
    image: 'assets/products/tecnologia/1/airpods-kt30.jpg',
    description: 'Características:\n\n-\n\nSistema rotatorio 360° tipo Spinner.\n\n-\n\nTecnología Bluetooth 5.3 de alta estabilidad y menor latencia.\n\n-\n\nDiseño cómodo para uso prolongado con excelente fijación.\n\n-\n\nCompacto, ligero y resistente.'
  },
  {
    id: 'tecno-airpods-manos-libres-tws-xg23',
    name: 'AIRPODS MANOS LIBRES TWS XG23',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '14907',
    price: 97000,
    stock: 10,
    image: 'assets/products/tecnologia/1/airpods-manos-libres-tws-xg23.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-manos-libres-tws-xg23-1.jpg',
      'assets/products/tecnologia/1/airpods-manos-libres-tws-xg23-2.jpg',
      'assets/products/tecnologia/1/airpods-manos-libres-tws-xg23-3.jpg',
      'assets/products/tecnologia/1/airpods-manos-libres-tws-xg23-4.jpg'
    ],
    description: 'MARCA 100% ORIGINAL CON UN SONIDO Y BAJO INCREIBLE!\n\nVersión inalámbrica: V5.4\n\nRango de transmisión: 10M\n\nPotencia de transmisión: 2,402 GHz-2,480 GHz\n\nBatería del estuche de carga: 200mAh\n\nBatería de auriculares: 40 mAh\n\nTiempos de conversación: alrededor de 5H\n\nTiempo de música: alrededor de 6H\n\nVoltaje de carga: DC 5V'
  },
  {
    id: 'tecno-airpods-max-aimantada-1-1',
    name: 'AIRPODS MAX AIMANTADA 1.1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '18719',
    price: 180100,
    salePrice: 127900,
    stock: 5,
    image: 'assets/products/tecnologia/1/airpods-max-aimantada-1-1.jpg',
    description: 'INCLUYE:\n\nAirPods Max 1.1 con almohadillas imantadas\n\nCable de carga\n\nEstuche protector tipo original\n\nManual en español\n\nAlmohadillas imantadas de tela respirable – Se ajustan fácilmente y ofrecen comodidad extrema incluso en largas jornadas.\n\nDiadema tipo malla ergonómica – Distribuye el peso de forma equilibrada y reduce la presión.\n\nSonido estéreo envolvente – Graves profundos, agudos definidos y un balance perfecto para cualquier género musical.\n\nCancelación pasiva de ruido – Aíslate del mundo y enfócate en lo que importa.\n\nBluetooth 5.0 – Conexión rápida, estable y compatible con cualquier dispositivo.\n\nBatería de alto rendimiento – Hasta 20 horas de uso continuo con carga rápida.\n\nMicrófono con reducción de ruido – Llamadas nítidas incluso en ambientes ruidosos.\n\nControles intuitivos – Maneja tu música, volumen o llamadas sin tocar el celular.\n\nMateriales tipo original – Acabado premium, resistente y con un diseño que impone.\n\nIncluye estuche tipo original – Para llevarlos protegidos y con estilo.'
  },
  {
    id: 'tecno-airpods-original-es48',
    name: 'AIRPODS ORIGINAL ES48',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '38976',
    price: 94500,
    salePrice: 69000,
    stock: 7,
    image: 'assets/products/tecnologia/1/airpods-original-es48.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-original-es48-1.jpg',
      'assets/products/tecnologia/1/airpods-original-es48-2.jpg',
      'assets/products/tecnologia/1/airpods-original-es48-3.jpg'
    ],
    description: '100% ORIGINAL'
  },
  {
    id: 'tecno-airpods-originales-ep5',
    name: 'AIRPODS ORIGINALES EP5',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '16349',
    price: 90800,
    stock: 1,
    image: 'assets/products/tecnologia/1/airpods-originales-ep5.jpg',
    description: 'Los audífonos Yooki ofrecen una experiencia de sonido de alta fidelidad, con un micrófono de alta definición para llamadas claras. Son cómodos de llevar durante todo el día, con una amplia compatibilidad con diversos dispositivos. Su diseño elegante y moderno los convierte en la opción perfecta para quienes buscan calidad y estilo.'
  },
  {
    id: 'tecno-airpods-originales-es56',
    name: 'AIRPODS ORIGINALES ES56',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '69648',
    price: 79200,
    salePrice: 58600,
    stock: 9,
    image: 'assets/products/tecnologia/1/airpods-originales-es56.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-originales-es56-1.jpg',
      'assets/products/tecnologia/1/airpods-originales-es56-2.jpg',
      'assets/products/tecnologia/1/airpods-originales-es56-3.jpg'
    ],
    description: '¡Libera tu sonido! Descubre los Yookie ES56, la libertad inalámbrica con un audio inmersivo que te acompaña a donde vayas. Diseñados para tu ritmo de vida. ¡No te quedes sin los tuyos!'
  },
  {
    id: 'tecno-airpods-originales-es57',
    name: 'AIRPODS ORIGINALES ES57',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '19482',
    price: 78500,
    salePrice: 69100,
    stock: 9,
    image: 'assets/products/tecnologia/1/airpods-originales-es57.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-originales-es57-1.jpg',
      'assets/products/tecnologia/1/airpods-originales-es57-2.jpg'
    ],
    description: '¡Sumérgete en un sonido puro con los Yookie ES57! Experimenta libertad inalámbrica y un diseño elegante que te acompaña a todas partes. Descubre la calidad que te hará vibrar. ¡Siente la diferencia!'
  },
  {
    id: 'tecno-airpods-originales-es60',
    name: 'AIRPODS ORIGINALES ES60',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '29598',
    price: 73600,
    stock: 1,
    image: 'assets/products/tecnologia/1/airpods-originales-es60.jpg',
    description: 'Los audífonos inalámbricos Yooki ofrecen una conexión estable, un potente driver dinámico de 13 mm para un sonido claro y profundo, y un diseño cómodo para largas horas de uso. Con hasta 4 horas de reproducción y 3 horas de llamadas, son perfectos para quienes buscan calidad y durabilidad en un solo producto.'
  },
  {
    id: 'tecno-airpods-originales-tws-m-m-s',
    name: 'AIRPODS ORIGINALES TWS M&M\'s',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '98339',
    price: 71300,
    salePrice: 42100,
    stock: 3,
    image: 'assets/products/tecnologia/1/airpods-originales-tws-m-m-s.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-originales-tws-m-m-s-1.jpg',
      'assets/products/tecnologia/1/airpods-originales-tws-m-m-s-2.jpg'
    ],
    description: '"Rainbow Bean TWS\n\nBobina móvil: 13,5 mm\n\nVersión inalámbrica: BT5.1\n\nTiempo de reproducción: 5-6 horas\n\nNivel de impermeabilidad: iPX 4\n\nInterfaz de carga: Tipo C\n\nDistancia: 10 m (sin barreras)\n\nTiempo de carga: 1 h (auriculares), 1,5 h (caja de carga)\n\nCapacidad de la batería: 200 mAh (caja de carga), 30 mAh (auriculares)"'
  },
  {
    id: 'tecno-airpods-pea-pod-edicion-especial',
    name: 'AIRPODS PEA POD EDICION ESPECIAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '72633',
    price: 94300,
    stock: 5,
    image: 'assets/products/tecnologia/1/airpods-pea-pod-edicion-especial.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-pea-pod-edicion-especial-1.jpg',
      'assets/products/tecnologia/1/airpods-pea-pod-edicion-especial-2.jpg',
      'assets/products/tecnologia/1/airpods-pea-pod-edicion-especial-3.jpg'
    ],
    description: 'EDICION ESPECIAL\n\nDisfruta de tu música con estilo gracias a los audífonos inalámbricos Yookie Pea Pod, inspirados en un diseño original y moderno. Ofrecen conexión Bluetooth 5.3 estable, sonido Hi-Fi estéreo, llamadas claras y hasta 20 horas de uso con su estuche de carga. Ligeros, cómodos y disponibles en varios colores, son perfectos para el día a día, el estudio o salir de casa con total libertad.\n\nCOLOR BLANCO O NEGRO DE AIRPODS'
  },
  {
    id: 'tecno-airpods-pro-6',
    name: 'AIRPODS PRO 6',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '27873',
    price: 39800,
    stock: 5,
    image: 'assets/products/tecnologia/1/airpods-pro-6.jpg',
    description: 'COLOR BLANCO O NEGRO\n\nGARANTIA AL RECIBIR'
  },
  {
    id: 'tecno-airpods-pro-rs16',
    name: 'AIRPODS PRO RS16',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '23822',
    price: 90000,
    stock: 2,
    image: 'assets/products/tecnologia/1/airpods-pro-rs16.jpg',
    description: '100 PRO ORIGINALES'
  },
  {
    id: 'tecno-airpods-tws-original-es45',
    name: 'AIRPODS TWS ORIGINAL ES45',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '24759',
    price: 57500,
    stock: 4,
    image: 'assets/products/tecnologia/1/airpods-tws-original-es45.jpg',
    gallery: [
      'assets/products/tecnologia/1/airpods-tws-original-es45-1.jpg',
      'assets/products/tecnologia/1/airpods-tws-original-es45-2.jpg',
      'assets/products/tecnologia/1/airpods-tws-original-es45-3.jpg'
    ],
    description: '100% ORIGINAL\n\nVARIEDAD DE COLORES'
  },
  {
    id: 'tecno-ampliador-de-pantalla-celular',
    name: 'AMPLIADOR DE PANTALLA CELULAR',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '73315',
    price: 26400,
    salePrice: 22400,
    stock: 210,
    image: 'assets/products/tecnologia/1/ampliador-de-pantalla-celular.jpg',
    gallery: [
      'assets/products/tecnologia/1/ampliador-de-pantalla-celular-1.jpg',
      'assets/products/tecnologia/1/ampliador-de-pantalla-celular-2.jpg',
      'assets/products/tecnologia/1/ampliador-de-pantalla-celular-3.jpg'
    ],
    description: 'Convierte la pantalla de tu celular en una experiencia más grande y cómoda con este amplificador de pantalla curva L6.\n\nIdeal para ver películas, series, videos, clases, partidos o jugar desde tu celular con una imagen más amplia y agradable para la vista.\n\nSu diseño curvo permite una mejor visualización, ayuda a reducir el cansancio visual y es compatible con la mayoría de celulares. Además, es ligero, práctico y fácil de usar en casa, en la oficina o donde quieras.\n\nCaracterísticas principales:\n\nPantalla curva amplificadora para celular\n\nAumento de imagen de 2 a 4 veces\n\nImagen en alta definición\n\nDiseño portátil y fácil de guardar\n\nCompatible con diferentes modelos de celular\n\nIdeal para entretenimiento, estudio y descanso visual\n\nUna opción práctica para quienes quieren disfrutar más contenido desde el celular sin forzar la vista.\n\nCompra el tuyo y mejora tu experiencia al ver videos desde el celular.'
  },
  {
    id: 'tecno-anc-airpods-pantalla-tactil',
    name: 'ANC AIRPODS PANTALLA TACTIL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '81748',
    price: 111700,
    salePrice: 73700,
    stock: 13,
    image: 'assets/products/tecnologia/1/anc-airpods-pantalla-tactil.jpg',
    description: 'ANC AirPods con Pantalla Táctil – Audífonos premium\n\nDisfruta de un sonido de alta calidad y tecnología avanzada con estos audífonos que cuentan con pantalla táctil para un control fácil y práctico. Además, su sistema de cancelación activa de ruido te permite sumergirte en tu música sin interrupciones.\n\nAudífonos inalámbricos con cancelación activa y ambiental de ruido (ANC/ENC), modo sonido ambiente, control táctil y estuche con pantalla que muestra batería y hora. Sonido nítido, llamadas claras y diseño cómodo con almohadillas de silicona.\n\nGARANTIA DE 2 MESES'
  },
  {
    id: 'tecno-apple-1-1-airpods-pro-2da-generacion-anc',
    name: 'APPLE 1.1 AIRPODS PRO 2DA GENERACION ANC',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '38069',
    price: 70000,
    stock: 6,
    image: 'assets/products/tecnologia/1/apple-1-1-airpods-pro-2da-generacion-anc.jpg',
    description: '- Modo ambiente adaptable y audio espacial\n\n- Funciones táctiles, contestar llamadas y cambiar de canción.\n\n- Acepta carga inalámbrica rápida.\n\n- Sensor para oído\n\n- Cancelación de ruidos fuertes\n\n- Conexión automática al abrir la tapa.\n\n- Ecualización adaptativa\n\n- Cambio de nombre de los audífonos\n\n- Pop up Window\n\n- Estabilización de sonido\n\n- Bajos potentes sin distorsión\n\n- Soporte Siri – Google asistente\n\n- Bluetooth 5.0\n\n- Tiempo de carga 1-2 horas\n\n- CANCELACION DE RUIDO'
  },
  {
    id: 'tecno-aro-de-luz-rgb-26ctms',
    name: 'ARO DE LUZ RGB 26CTMS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '92983',
    price: 64000,
    stock: 4,
    image: 'assets/products/tecnologia/1/aro-de-luz-rgb-26ctms.jpg',
    description: '¡Desata tu creatividad con el Aro de Luz RGB 26cm! Transforma tus fotos y videos con un sinfín de colores vibrantes y brillo ajustable. Ideal para selfies, streaming y maquillaje. ¡Ilumina tu contenido y capta todas las miradas! ✨'
  },
  {
    id: 'tecno-aro-de-luz-tik-tok-con-soporte-para-2-celulares',
    name: 'ARO DE LUZ TIK TOK CON SOPORTE PARA 2 CELULARES',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '30294',
    price: 33000,
    stock: 75,
    image: 'assets/products/tecnologia/1/aro-de-luz-tik-tok-con-soporte-para-2-celulares.jpg',
    gallery: [
      'assets/products/tecnologia/1/aro-de-luz-tik-tok-con-soporte-para-2-celulares-1.jpg',
      'assets/products/tecnologia/1/aro-de-luz-tik-tok-con-soporte-para-2-celulares-2.jpg'
    ],
    description: '¡Eleva tus creaciones al siguiente nivel! Con el Aro de Luz para TikTok, ilumina tus contenidos y capta todas las miradas. Su doble soporte para celulares te permite grabar y transmitir simultáneamente. ¡La herramienta definitiva para destacar en redes!\n\n✅ Iluminación profesional\n\n✅ Soporte para dos celulares\n\n✅ Altura ajustable\n\n✅ Rotación de 360°\n\n✅ Control de intensidad\n\n✅ Conexión USB\n\n✅ Base estable y resistente\n\n¡Haz que cada video y fotografía se vea más profesional! Pide el tuyo hoy.'
  },
  {
    id: 'tecno-audifonos-bluetooth-yx29-con-pantalla-tactil',
    name: 'AUDIFONOS BLUETOOTH YX29 CON PANTALLA TACTIL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '23408',
    price: 79800,
    stock: 7,
    image: 'assets/products/tecnologia/1/audifonos-bluetooth-yx29-con-pantalla-tactil.jpg',
    description: '**¡Descubre el futuro del sonido!** Los AUDIFONOS BLUETOOTH YX29 con pantalla táctil te ofrecen una experiencia inmersiva y control total. Música, llamadas y más, a tu alcance con un solo toque. ¿Listo para innovar?'
  },
  {
    id: 'tecno-audifonos-con-cable-tipo-c-tm-a',
    name: 'AUDIFONOS CON CABLE TIPO C TM-A',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '73188',
    price: 12600,
    salePrice: 10200,
    stock: 15,
    image: 'assets/products/tecnologia/1/audifonos-con-cable-tipo-c-tm-a.jpg',
    description: 'Conector USB Tipo C\n\nCompatible con la mayoría de dispositivos Android\n\nSonido Estéreo HD\n\nDisfruta de graves potentes y agudos claros\n\nControl integrado\n\nLlamadas, música y ajuste de volumen con facilidad\n\nCOLORES VARIOS DISPPNIBLES'
  },
  {
    id: 'tecno-audifonos-de-conduccion-osea',
    name: 'AUDIFONOS DE CONDUCCION OSEA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '49821',
    price: 63800,
    stock: 10,
    image: 'assets/products/tecnologia/1/audifonos-de-conduccion-osea.jpg',
    gallery: [
      'assets/products/tecnologia/1/audifonos-de-conduccion-osea-1.jpg',
      'assets/products/tecnologia/1/audifonos-de-conduccion-osea-2.jpg'
    ],
    description: '¡Libera tus oídos y siente la música! Con los auriculares de conducción ósea OKMAX, disfruta de un sonido envolvente y total conciencia de tu entorno. Perfectos para deportistas, su diseño ligero y seguro te permite moverte libremente. ¡Descubre una nueva forma de escuchar!'
  },
  {
    id: 'tecno-audifonos-e6s-inalambricos',
    name: 'AUDIFONOS E6S INALAMBRICOS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '40257',
    price: 26000,
    salePrice: 20500,
    stock: 4,
    image: 'assets/products/tecnologia/1/audifonos-e6s-inalambricos.jpg',
    description: 'Auriculares 100% inalámbricos con un diseño compacto y elegante, sonido nítido y batería de larga duración. Su estuche de carga digital te muestra el nivel de batería en tiempo real, y el diseño dividido permite usar cada auricular por separado. Perfectos para música, llamadas y tu día a día sin cables ni complicaciones.'
  },
  {
    id: 'tecno-audifonos-inalambricos-con-pantalla-inteligente-anc',
    name: 'AUDIFONOS INALAMBRICOS CON PANTALLA INTELIGENTE ANC',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '98660',
    price: 76000,
    stock: 15,
    image: 'assets/products/tecnologia/1/audifonos-inalambricos-con-pantalla-inteligente-anc.jpg',
    gallery: [
      'assets/products/tecnologia/1/audifonos-inalambricos-con-pantalla-inteligente-anc-1.jpg'
    ],
    description: '¡Sumérgete en un silencio absoluto! Descubre los **Audífonos Inalámbricos con Pantalla Inteligente ANC**. Experiencia sonido inmersivo y control total, mientras su pantalla te muestra información crucial. ¡La revolución del audio te espera, ¿te atreves a probarla?!\n\n✅ Cancelación de ruido ANC/ENC\n\n✅ Pantalla táctil a color\n\n✅ Control de música y volumen\n\n✅ Visualización del nivel de batería\n\n✅ Estuche de carga recargable\n\n✅ Diseño cómodo y moderno\n\n✅ Excelente calidad de sonido'
  },
  {
    id: 'tecno-audifonos-m10',
    name: 'AUDIFONOS M10',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '51072',
    price: 25000,
    stock: 0,
    image: 'assets/products/tecnologia/1/audifonos-m10.jpg',
    description: 'Audífonos inalámbricos M10 con estuche de carga, diseño compacto y pantalla indicadora de batería. Ideales para llamadas, música y uso diario, con conexión Bluetooth y formato práctico para llevar en el bolsillo. Una opción moderna, funcional y fácil de vender por su presentación llamativa.'
  },
  {
    id: 'tecno-audifonos-ows-yks286',
    name: 'AUDIFONOS OWS YKS286',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '56479',
    price: 102900,
    salePrice: 63800,
    stock: 7,
    image: 'assets/products/tecnologia/1/audifonos-ows-yks286.jpg',
    gallery: [
      'assets/products/tecnologia/1/audifonos-ows-yks286-1.jpg',
      'assets/products/tecnologia/1/audifonos-ows-yks286-2.jpg',
      'assets/products/tecnologia/1/audifonos-ows-yks286-3.jpg'
    ],
    description: '**¡Libera tu sonido sin límites!** Los AUDIFONOS OWS YKS286 te ofrecen una experiencia auditiva superior con un ajuste perfecto para tus aventuras. **Descubre un audio potente y una comodidad inigualable.** ¡No te conformes con menos, eleva tu ritmo!'
  },
  {
    id: 'tecno-audifonos-tws-s510-con-pantalla-digital',
    name: 'AUDIFONOS TWS S510 CON PANTALLA DIGITAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '84244',
    price: 39300,
    salePrice: 34600,
    stock: 77,
    image: 'assets/products/tecnologia/1/audifonos-tws-s510-con-pantalla-digital.jpg',
    description: '¡Descubre el sonido con estilo! Los AUDIFONOS TWS S510 con pantalla digital te ofrecen una experiencia auditiva inmersiva con cancelación de ruido activa. Controla tu música y llamadas de forma inteligente. ¡Prepárate para escuchar la diferencia!'
  },
  {
    id: 'tecno-auriculares-con-cable-ath-74',
    name: 'AURICULARES CON CABLE ATH-74',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '57830',
    price: 3100,
    stock: 1,
    image: 'assets/products/tecnologia/1/auriculares-con-cable-ath-74.jpg',
    description: '100% ORIGINAL'
  },
  {
    id: 'tecno-auriculares-con-cable-tipo-c-originales-ytl10',
    name: 'AURICULARES CON CABLE TIPO C ORIGINALES YTL10',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '74083',
    price: 27200,
    salePrice: 22300,
    stock: 4,
    image: 'assets/products/tecnologia/1/auriculares-con-cable-tipo-c-originales-ytl10.jpg',
    gallery: [
      'assets/products/tecnologia/1/auriculares-con-cable-tipo-c-originales-ytl10-1.jpg'
    ],
    description: '100% ORIGINAL BUEN SONIDO'
  },
  {
    id: 'tecno-bafle-alaxe',
    name: 'BAFLE ALAXE',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['deporte'],
    ref: '13777',
    price: 71200,
    salePrice: 48400,
    stock: 4,
    image: 'assets/products/tecnologia/1/bafle-alaxe.jpg',
    description: '¡Prepárate para vibrar! El Bafle Alaxe SUPER BASS te ofrece un sonido potente y envolvente en un diseño compacto. Disfruta de horas de música sin interrupciones gracias a su batería de larga duración. ¡Lleva tu música a todos lados con estilo!'
  },
  {
    id: 'tecno-bafle-koleer-original',
    name: 'BAFLE KOLEER ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '14634',
    price: 55100,
    salePrice: 33100,
    stock: 4,
    image: 'assets/products/tecnologia/1/bafle-koleer-original.jpg',
    gallery: [
      'assets/products/tecnologia/1/bafle-koleer-original-1.jpg',
      'assets/products/tecnologia/1/bafle-koleer-original-2.jpg'
    ],
    description: ''
  },
  {
    id: 'tecno-base-para-portatil-en-aluminio-hold-406',
    name: 'BASE PARA PORTATIL EN ALUMINIO HOLD-406',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '23051',
    price: 42900,
    salePrice: 22300,
    stock: 4,
    image: 'assets/products/tecnologia/1/base-para-portatil-en-aluminio-hold-406.jpg',
    description: 'Características:\n\n-\n\nCompatible con Macbook Air, Macbook Pro y otros portátiles de 11 a 15.6 pulgadas.\n\n-\n\nMaterial de aleación de aluminio + almohadilla de silicona antideslizante.\n\n-\n\nDiseño ventilado para mejorar la disipación de calor.\n\n-\n\nDiseño plegable y portátil.'
  },
  {
    id: 'tecno-base-para-portatil-y-tablet-holdpc-102',
    name: 'BASE PARA PORTATIL Y TABLET HOLDPC-102',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '65545',
    price: 39800,
    stock: 9,
    image: 'assets/products/tecnologia/1/base-para-portatil-y-tablet-holdpc-102.jpg',
    description: 'Características:\n\nALUMINIO MAXIMA CALIDAD\n\n-\n\nCompatible con Macbook Air, Macbook Pro y otros portátiles de 10 a 15.6 pulgadas.\n\n-\n\nMaterial de aleación de aluminio + almohadilla de silicona antideslizante.\n\n-\n\nDiseño ventilado para mejorar la disipación de calor.\n\n-\n\nCompacto y portátil'
  },
  {
    id: 'tecno-base-refrigerante-para-portatil-mikuso-shiron-2',
    name: 'BASE REFRIGERANTE PARA PORTATIL MIKUSO SHIRON-2',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '11017',
    price: 66600,
    salePrice: 50600,
    stock: 1,
    image: 'assets/products/tecnologia/1/base-refrigerante-para-portatil-mikuso-shiron-2.jpg',
    description: '¡Despídete del sobrecalentamiento y dile hola al rendimiento! La BASE REFRIGERANTE MIKUSO SHIRON-2, con su potente doble ventilador y diseño ultra silencioso, mantendrá tu portátil fresco y ágil. ¡Descubre la diferencia!'
  },
  {
    id: 'tecno-blafle-smart-speaker-app',
    name: 'BLAFLE SMART SPEAKER APP',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '19610',
    price: 71800,
    stock: 2,
    image: 'assets/products/tecnologia/1/blafle-smart-speaker-app.jpg',
    description: 'Características:\n\n-\n\nConexión Bluetooth 5.3 con sonido claro y potente.\n\n-\n\nLuces LED RGB dinámicas, controladas desde la app (Android y iOS).\n\n-\n\nRanura para tarjeta SD y entrada auxiliar, ideal para reproducir música sin conexión.'
  },
  {
    id: 'tecno-bombillo-parlante-led-rgb',
    name: 'BOMBILLO PARLANTE LED RGB',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '45944',
    price: 25000,
    stock: 4,
    image: 'assets/products/tecnologia/1/bombillo-parlante-led-rgb.jpg',
    gallery: [
      'assets/products/tecnologia/1/bombillo-parlante-led-rgb-1.jpg'
    ],
    description: ''
  },
  {
    id: 'tecno-boquitoqui-x2-con-audifonos',
    name: 'BOQUITOQUI X2 CON AUDIFONOS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '34211',
    price: 119800,
    stock: 2,
    image: 'assets/products/tecnologia/1/boquitoqui-x2-con-audifonos.jpg',
    description: 'Kit de radios ideal para mantener una comunicación clara, rápida y segura en cualquier trabajo o actividad. Incluye dos radios, audífonos manos libres y bases de carga, listo para usar. Perfecto para seguridad, eventos, negocios, almacenes, construcción y actividades al aire libre. Compacto, resistente y práctico para estar siempre conectado.'
  },
  {
    id: 'tecno-buscador-inteligente-original',
    name: 'BUSCADOR INTELIGENTE ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '20224',
    price: 64600,
    salePrice: 48400,
    stock: 1,
    image: 'assets/products/tecnologia/1/buscador-inteligente-original.jpg',
    gallery: [
      'assets/products/tecnologia/1/buscador-inteligente-original-1.jpg',
      'assets/products/tecnologia/1/buscador-inteligente-original-2.jpg'
    ],
    description: 'Ficha Técnica – Yookie F08\n\n• Tipo: Buscador inteligente (rastreador)\n\n• Compatibilidad: iPhone / app Find My\n\n• Funciones: Ubicación en tiempo real, alerta de objeto olvidado y sonido para encontrarlo\n\n• Batería: CR2032 (duración 9–13 meses, reemplazable)\n\n• Uso: Llaves, billeteras, equipaje\n\n• Diseño: Compacto, color blanco con llavero'
  },
  {
    id: 'tecno-cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w',
    name: 'CABLE DE CARGA RAPIDA Y DATOS 4 EN 1 YOOKIE EC27 120W',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '79213',
    price: 25200,
    stock: 10,
    image: 'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w.jpg',
    gallery: [
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-1.jpg',
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-2.jpg',
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-3.jpg',
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-4.jpg',
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-5.jpg',
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-6.jpg',
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-7.jpg',
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-8.jpg',
      'assets/products/tecnologia/2/cable-de-carga-rapida-y-datos-4-en-1-yookie-ec27-120w-9.jpg'
    ],
    description: '¡Adiós esperas! Carga tus dispositivos al instante con el YOOKIE EC27. Un solo cable 4 en 1, 120W de potencia y transferencia de datos ultrarrápida. ¿Listo para revolucionar tu carga? ¡Descubre la velocidad que te mereces!'
  },
  {
    id: 'tecno-cable-de-datos-y-carga-rapida-yookie-cb108-100w',
    name: 'CABLE DE DATOS Y CARGA RAPIDA YOOKIE CB108 100W',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '15451',
    price: 53000,
    salePrice: 27000,
    stock: 12,
    image: 'assets/products/tecnologia/2/cable-de-datos-y-carga-rapida-yookie-cb108-100w.jpg',
    gallery: [
      'assets/products/tecnologia/2/cable-de-datos-y-carga-rapida-yookie-cb108-100w-1.jpg'
    ],
    description: '¡Olvídate de esperar! Con el CABLE YOOKIE CB108 de 100W, tus dispositivos estarán cargados a toda velocidad. Su diseño de carga rápida y transferencia veloz te sorprenderá. ¿Listo para experimentar la potencia?'
  },
  {
    id: 'tecno-cable-lightning-apple',
    name: 'CABLE LIGHTNING APPLE',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '83628',
    price: 5800,
    stock: 8,
    image: 'assets/products/tecnologia/2/cable-lightning-apple.jpg',
    description: ''
  },
  {
    id: 'tecno-cable-tipo-c-trenzado-av-10728-ccr',
    name: 'CABLE TIPO C TRENZADO AV-10728-CCR',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '64353',
    price: 8600,
    stock: 7,
    image: 'assets/products/tecnologia/2/cable-tipo-c-trenzado-av-10728-ccr.jpg',
    description: '¡Cansado de cables que se enredan y rompen! Descubre la elegancia y durabilidad del CABLE TIPO C TRENZADO FINO. Su diseño trenzado no solo luce increíble, sino que garantiza una carga rápida y segura. ¡Transforma tu experiencia de carga!'
  },
  {
    id: 'tecno-cargador-apple-lightning-1-1',
    name: 'CARGADOR APPLE LIGHTNING 1.1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '15472',
    price: 31600,
    stock: 10,
    image: 'assets/products/tecnologia/2/cargador-apple-lightning-1-1.jpg',
    description: 'REPLICA GARANTIA DE 1 MES'
  },
  {
    id: 'tecno-cargador-apple-tipo-c-1-1',
    name: 'CARGADOR APPLE TIPO-C 1.1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '39994',
    price: 42500,
    salePrice: 34800,
    stock: 11,
    image: 'assets/products/tecnologia/2/cargador-apple-tipo-c-1-1.jpg',
    description: 'Carga tu iPhone más rápido y de forma segura con este adaptador USB-C de 35W. Diseñado para ofrecer potencia estable y eficiente, reduce el tiempo de carga y protege la batería de tu dispositivo.\n\nIncluye cable USB-C a USB-C, ideal para una conexión moderna y de alto rendimiento. Su diseño compacto lo hace perfecto para llevar a cualquier lugar.\n\nSi buscas velocidad, seguridad y durabilidad en un solo cargador, este es el indicado.'
  },
  {
    id: 'tecno-cargador-con-cable-original-yookie-20w-rapido',
    name: 'CARGADOR CON CABLE ORIGINAL YOOKIE 20W RAPIDO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '17004',
    price: 39700,
    salePrice: 24600,
    stock: 2,
    image: 'assets/products/tecnologia/2/cargador-con-cable-original-yookie-20w-rapido.jpg',
    gallery: [
      'assets/products/tecnologia/2/cargador-con-cable-original-yookie-20w-rapido-1.jpg'
    ],
    description: '¡Olvídate de esperar! Carga tus dispositivos a la velocidad de la luz con el CARAGOR YOOKIE 20W. Potencia original para tu vida digital. ¿Listo para experimentar la carga rápida definitiva? ¡No te quedes atrás!'
  },
  {
    id: 'tecno-cargador-de-coche-rapido-original-pc17',
    name: 'CARGADOR DE COCHE RAPIDO ORIGINAL PC17',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '29845',
    price: 18600,
    stock: 5,
    image: 'assets/products/tecnologia/2/cargador-de-coche-rapido-original-pc17.jpg',
    gallery: [
      'assets/products/tecnologia/2/cargador-de-coche-rapido-original-pc17-1.jpg',
      'assets/products/tecnologia/2/cargador-de-coche-rapido-original-pc17-2.jpg',
      'assets/products/tecnologia/2/cargador-de-coche-rapido-original-pc17-3.jpg',
      'assets/products/tecnologia/2/cargador-de-coche-rapido-original-pc17-4.jpg'
    ],
    description: '100% ORIGINAL'
  },
  {
    id: 'tecno-cargador-inalambrico-ki90',
    name: 'CARGADOR INALAMBRICO KI90',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '42160',
    price: 64400,
    stock: 2,
    image: 'assets/products/tecnologia/2/cargador-inalambrico-ki90.jpg',
    gallery: [
      'assets/products/tecnologia/2/cargador-inalambrico-ki90-1.jpg'
    ],
    description: 'el soporte cargador inalámbrico Yookie KI90. Su diseño 2-en-1 combina cargador inalámbrico de 15W y soporte plegable, permitiéndote usar el teléfono en posición vertical u horizontal mientras se carga. Cuenta con doble bobina para una carga más estable, diseño portátil y compatibilidad universal, ideal para el hogar, oficina o viajes.'
  },
  {
    id: 'tecno-cargador-iphone-tipo-c-1-1',
    name: 'CARGADOR IPHONE TIPO C 1.1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '71704',
    price: 30000,
    stock: 0,
    image: 'assets/products/tecnologia/2/cargador-iphone-tipo-c-1-1.jpg',
    description: 'Cargador iPhone Tipo C 1.1 – Importado y de alta calidad\n\nDisfruta de una carga rápida y segura con este cargador importado para iPhone con conexión Tipo C 1.1. Garantiza durabilidad y rendimiento óptimo para tus dispositivos Apple.\n\n35 POWER ADAPTER\n\nCABLE C\n\nGARANTIA 30 DIAS\n\n1.1 MAXIMA COMPATIBILIDAD'
  },
  {
    id: 'tecno-cargador-pro-ultra-rapido-carro-pc19-original',
    name: 'CARGADOR PRO ULTRA RAPIDO CARRO PC19 ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '81392',
    price: 26400,
    stock: 11,
    image: 'assets/products/tecnologia/2/cargador-pro-ultra-rapido-carro-pc19-original.jpg',
    gallery: [
      'assets/products/tecnologia/2/cargador-pro-ultra-rapido-carro-pc19-original-1.jpg',
      'assets/products/tecnologia/2/cargador-pro-ultra-rapido-carro-pc19-original-2.jpg',
      'assets/products/tecnologia/2/cargador-pro-ultra-rapido-carro-pc19-original-3.jpg',
      'assets/products/tecnologia/2/cargador-pro-ultra-rapido-carro-pc19-original-4.jpg'
    ],
    description: 'GARANTIA DE 4 MESES ORIGINAL'
  },
  {
    id: 'tecno-cargador-superrapido-60w-ki275',
    name: 'CARGADOR SUPERRAPIDO 60W KI275',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '85522',
    price: 116000,
    stock: 10,
    image: 'assets/products/tecnologia/2/cargador-superrapido-60w-ki275.jpg',
    gallery: [
      'assets/products/tecnologia/2/cargador-superrapido-60w-ki275-1.jpg',
      'assets/products/tecnologia/2/cargador-superrapido-60w-ki275-2.jpg'
    ],
    description: '**¡Dile adiós a la espera!** El CARGADOR SUPERRAPIDO 60W de Yookie te ofrece una carga **instantánea** para todos tus dispositivos. Experimenta la velocidad y la inteligencia en un solo dispositivo. **¿Listo para la máxima potencia?**\n\ncable incluido'
  },
  {
    id: 'tecno-cargador-ultra-power-samsung',
    name: 'CARGADOR ULTRA POWER SAMSUNG',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '89877',
    price: 27200,
    stock: 8,
    image: 'assets/products/tecnologia/2/cargador-ultra-power-samsung.jpg',
    gallery: [
      'assets/products/tecnologia/2/cargador-ultra-power-samsung-1.jpg'
    ],
    description: 'Adaptador Samsung USB-C de 25W, diseñado para la carga rápida con Power Delivery (PD). Incluye adaptador de corriente USB-C y cable USB-C a USB-C, permitiendo una conexión directa entre el cargador y dispositivos con entrada USB-C.\n\nEl adaptador proporciona una potencia de salida de hasta 25W, ofreciendo una carga eficiente para smartphones, tablets y otros dispositivos compatibles. El cable USB-C a USB-C permite tanto carga como transferencia de datos.\n\nEl cargador de 45 W te permite cargar la batería de tu Galaxy a una velocidad superrápida. También obtienes un cómodo cable extralargo de 1,8 m en la caja. * La velocidad de carga puede variar según el dispositivo.'
  },
  {
    id: 'tecno-cargador-iphone-lightning-original-yookie-kl02',
    name: 'CARGADOR iPHONE LIGHTNING ORIGINAL YOOKIE KL02',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '69252',
    price: 47000,
    salePrice: 38500,
    stock: 4,
    image: 'assets/products/tecnologia/2/cargador-iphone-lightning-original-yookie-kl02.jpg',
    gallery: [
      'assets/products/tecnologia/2/cargador-iphone-lightning-original-yookie-kl02-1.jpg',
      'assets/products/tecnologia/2/cargador-iphone-lightning-original-yookie-kl02-2.jpg',
      'assets/products/tecnologia/2/cargador-iphone-lightning-original-yookie-kl02-3.jpg'
    ],
    description: 'Cargador iPhone Lightning 1.1 – Calidad y eficiencia garantizadas\n\n6 MESES DE GARANTIA\n\nCargador con entrada Lightning 1.1, diseñado para ofrecer una carga segura y rápida a tus dispositivos Apple. Producto de alta calidad para un rendimiento confiable y duradero.\n\n25W POWER ADAPTER\n\nGARANTIA 30 DIAS\n\nPRODUCTO IMPORTADO DE CALIDAD'
  },
  {
    id: 'tecno-combo-airpods-tws-k30',
    name: 'COMBO AIRPODS TWS-K30',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '71376',
    price: 72800,
    stock: 9,
    image: 'assets/products/tecnologia/2/combo-airpods-tws-k30.jpg',
    description: 'Características:\n\n-\n\nConexión inalámbrica 5.3 para una transmisión estable y sonido de alta calidad.\n\n-\n\nDiseño elegante con estuche protector y cadena decorativa.\n\n-\n\nMicrófono incorporado para llamadas claras y nítidas.\n\nPUEDE VENIR DISTINTOS COLORES! PERO EL DE LA FOTO ES EL PRINCIPAL'
  },
  {
    id: 'tecno-combo-teclado-inalambrico',
    name: 'COMBO TECLADO INALÁMBRICO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '78477',
    price: 86900,
    salePrice: 72100,
    stock: 4,
    image: 'assets/products/tecnologia/2/combo-teclado-inalambrico.jpg',
    gallery: [
      'assets/products/tecnologia/2/combo-teclado-inalambrico-1.jpg',
      'assets/products/tecnologia/2/combo-teclado-inalambrico-2.jpg'
    ],
    description: 'MARCA 100% ORIGINAL\n\nEs un kit inalámbrico que incluye teclado y mouse de diseño delgado y elegante, disponible en colores pastel como celeste, rosa, durazno y beige. Se destaca por su versatilidad y compatibilidad amplia, ideal para entornos de trabajo modernos, educación, oficinas y trabajo remoto'
  },
  {
    id: 'tecno-combo-x8-smart-wacht',
    name: 'COMBO X8 SMART WACHT',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '82240',
    price: 110000,
    stock: 3,
    image: 'assets/products/tecnologia/2/combo-x8-smart-wacht.jpg',
    description: 'Eleva tu estilo y productividad con este exclusivo combo de 8 piezas. Incluye un reloj inteligente Smart Ultra con diseño metálico, un power bank inalámbrico, un cargador MagSafe, audífonos Bluetooth, y más. Recibe llamadas, notificaciones de WhatsApp y Facebook, y monitorea tu salud. ¡Todo lo que necesitas para estar conectado!'
  },
  {
    id: 'tecno-consola-retro-pro-r36s-15-000-mil-juegos',
    name: 'CONSOLA RETRO PRO R36S +15.000 MIL JUEGOS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '70644',
    price: 291200,
    salePrice: 262100,
    stock: 6,
    image: 'assets/products/tecnologia/2/consola-retro-pro-r36s-15-000-mil-juegos.jpg',
    gallery: [
      'assets/products/tecnologia/2/consola-retro-pro-r36s-15-000-mil-juegos-1.jpg'
    ],
    description: 'Consola portátil compacta y ligera, ideal para disfrutar juegos clásicos en cualquier lugar. Cuenta con pantalla IPS HD de 3.5”, controles completos, doble joystick 3D, gatillos L/R ergonómicos y altavoces integrados.\n\nIncluye emuladores de juegos retro y permite ampliar el almacenamiento mediante tarjeta microSD para llevar más juegos, música y videos.\n\n✅ Pantalla IPS HD de alta resolución\n\n✅ Joysticks 3D duales\n\n✅ Gatillos L/R con resorte\n\n✅ Almacenamiento expandible\n\n✅ Diseño portátil y ergonómico\n\n✅ Ideal para niños, jóvenes y adultos\n\n- Modelo: R36S.\n\n- Tiempo de carga: 2H.\n\n- Batería de litio: 3500 mAh.\n\n- Consumo máximo de energía: 5W.\n\n- Duración de la bacteria: 8H.\n\n- Interfaz de carga tipo C.'
  },
  {
    id: 'tecno-dama-smartwatch-me32',
    name: 'DAMA SMARTWATCH  ME32',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '40635',
    price: 129200,
    salePrice: 104700,
    stock: 5,
    image: 'assets/products/tecnologia/2/dama-smartwatch-me32.jpg',
    gallery: [
      'assets/products/tecnologia/2/dama-smartwatch-me32-1.jpg',
      'assets/products/tecnologia/2/dama-smartwatch-me32-2.jpg'
    ],
    description: '7 CORREAS INCLUIDAS PARA DAMA'
  },
  {
    id: 'tecno-diadema-bluetooh-b31',
    name: 'DIADEMA BLUETOOH B31',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '90385',
    price: 70000,
    stock: 3,
    image: 'assets/products/tecnologia/2/diadema-bluetooh-b31.jpg',
    gallery: [
      'assets/products/tecnologia/2/diadema-bluetooh-b31-1.jpg'
    ],
    description: '¡Perfectos para el gym, el estudio o tus paseos!\n\n¡Vive la música con estilo y color!\n\nConexión Bluetooth estable\n\nLuces RGB multicolor que brillan al ritmo\n\nSonido potente con Extra Bass\n\nDiseño cómodo y ajustable\n\nBatería de larga duracióN'
  },
  {
    id: 'tecno-diademas-bass-inalambricas-eb620',
    name: 'DIADEMAS BASS INALAMBRICAS EB620',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '35214',
    price: 95000,
    stock: 10,
    image: 'assets/products/tecnologia/2/diademas-bass-inalambricas-eb620.jpg',
    gallery: [
      'assets/products/tecnologia/2/diademas-bass-inalambricas-eb620-1.jpg',
      'assets/products/tecnologia/2/diademas-bass-inalambricas-eb620-2.jpg',
      'assets/products/tecnologia/2/diademas-bass-inalambricas-eb620-3.jpg',
      'assets/products/tecnologia/2/diademas-bass-inalambricas-eb620-4.jpg',
      'assets/products/tecnologia/2/diademas-bass-inalambricas-eb620-5.jpg',
      'assets/products/tecnologia/2/diademas-bass-inalambricas-eb620-6.jpg'
    ],
    description: 'MARCA 100% ORIGINAL CON UN SONIDO Y BAJO INCREIBLE!\n\n•Versión: Bluetooth de doble modo V5.3+EDR\n\n•Consumo de energía ultrabajo\n\n•Rango de trabajo: alrededor de 10 m (sin interferencias)\n\n•Tiempo de reproducción: 40H (50% de volumen)\n\n•Tiempo de reproducción: 30H (100% de volumen)\n\n•Tiempo de carga: alrededor de 2 horas\n\n•Impedancia: 31Ω\n\n•Altavoz: Φ40mm\n\n•Capacidad de la batería del auricular: 350 mAh\n\n•Material de la oreta: plástico\n\n•Regalo: Cable de carga y cable de audio'
  },
  {
    id: 'tecno-diademas-de-alta-calidad-eb31',
    name: 'DIADEMAS DE ALTA CALIDAD EB31',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '73158',
    price: 105800,
    stock: 2,
    image: 'assets/products/tecnologia/2/diademas-de-alta-calidad-eb31.jpg',
    gallery: [
      'assets/products/tecnologia/2/diademas-de-alta-calidad-eb31-1.jpg',
      'assets/products/tecnologia/2/diademas-de-alta-calidad-eb31-2.jpg'
    ],
    description: '100% ORIGINAL Y 3 MESES DE GARANTIA'
  },
  {
    id: 'tecno-diademas-inalambricas-eb610',
    name: 'DIADEMAS INALAMBRICAS EB610',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '53018',
    price: 90000,
    stock: 2,
    image: 'assets/products/tecnologia/2/diademas-inalambricas-eb610.jpg',
    description: 'MARCA 100% ORIGINAL CON UN SONIDO Y BAJO INCREIBLE!\n\n•Versión: Bluetooth de doble modo V5.3+EDR\n\n•Consumo de energía ultrabajo\n\n•Rango de trabajo: alrededor de 10 m (sin interferencias)\n\n•Tiempo de reproducción: 40H (50% de volumen)\n\n•Tiempo de reproducción: 30H (100% de volumen)\n\n•Tiempo de carga: alrededor de 2 horas\n\n•Impedancia: 31Ω\n\n•Altavoz: Φ40mm\n\n•Capacidad de la batería del auricular: 350 mAh\n\n•Material de la oreta: plástico\n\n•Regalo: Cable de carga y cable de audio'
  },
  {
    id: 'tecno-diademas-jbl-1-1',
    name: 'DIADEMAS JBL 1.1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '30011',
    price: 86200,
    salePrice: 68100,
    stock: 11,
    image: 'assets/products/tecnologia/2/diademas-jbl-1-1.jpg',
    description: '¡Prepárate para una experiencia sonora que te hará vibrar! Las Diademas JBL 1.1 te sumergen en un mundo de bajos potentes y agudos cristalinos. Siente la música como nunca antes. ¿Listo para elevar tu audio?'
  },
  {
    id: 'tecno-diademas-pro-eb32',
    name: 'DIADEMAS PRO EB32',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '66309',
    price: 122400,
    salePrice: 79600,
    stock: 3,
    image: 'assets/products/tecnologia/2/diademas-pro-eb32.jpg',
    gallery: [
      'assets/products/tecnologia/2/diademas-pro-eb32-1.jpg'
    ],
    description: ''
  },
  {
    id: 'tecno-diademas-pro-tuka-xh-648',
    name: 'DIADEMAS PRO TUKA XH-648',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '31063',
    price: 86100,
    salePrice: 45600,
    stock: 6,
    image: 'assets/products/tecnologia/2/diademas-pro-tuka-xh-648.jpg',
    description: '¡Sumérgete en un sonido estéreo inmersivo! Los Audífonos Tuka XH-648 te ofrecen libertad inalámbrica y una batería que no te abandonará. ¿Listo para disfrutar tu música sin límites? ¡Descúbrelos!'
  },
  {
    id: 'tecno-diademas-yookie-originales-eb37',
    name: 'DIADEMAS YOOKIE ORIGINALES EB37',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '96708',
    price: 164100,
    salePrice: 119800,
    stock: 10,
    image: 'assets/products/tecnologia/2/diademas-yookie-originales-eb37.jpg',
    gallery: [
      'assets/products/tecnologia/2/diademas-yookie-originales-eb37-1.jpg'
    ],
    description: '¡Despierta tus sentidos! Las DIADEMAS ORIGINALES EB37 te sumergirán en un sonido puro y envolvente. Diseño elegante, comodidad excepcional. Descubre la experiencia auditiva que estabas esperando. ¡No te conformes con menos!'
  },
  {
    id: 'tecno-drone-e99-pro-con-camara-full-hd',
    name: 'DRONE E99 PRO CON CAMARA FULL HD',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '26773',
    price: 110000,
    stock: 3,
    image: 'assets/products/tecnologia/2/drone-e99-pro-con-camara-full-hd.jpg',
    description: 'CARACTERÍSTICAS DEL DRON E99 PRO\n\nDiseño plegable, compacto y fácil de transportar.\n\nCámara Full HD con conexión WiFi y transmisión en tiempo real.\n\nRetención de altitud para un vuelo más estable.\n\nModo sin cabeza y retorno automático con un botón.\n\nTrayectoria de vuelo programable desde la aplicación.\n\nGiro de 360° y 3 niveles de velocidad.\n\nGiroscopio de 6 ejes y tecnología antiinterferencias de 2,4 GHz.\n\nLuz LED y estructura liviana y resistente.\n\nTiempo de vuelo: 15 a 20 minutos.\n\nMotor: Copa hueca 816.\n\nRECOMENDACIONES DE USO- Encienda primero el dron y luego el control remoto. Mueva el joystick izquierdo hacia arriba y abajo hasta escuchar un pitido.\n\n- Para usar la cámara, conecte primero el celular a la red WiFi del dron y después abra la aplicación.\n\n- No use al mismo tiempo el control remoto y el teléfono para manejar el dron.\n\n- Se recomienda que los principiantes practiquen en espacios abiertos y lean el manual antes de volar.\n\n- Cargue la batería con un puerto USB o cargador de máximo 5V/2A.\n\n- Al cambiar las hélices, instale correctamente las piezas marcadas con las letras A y B.\n\n- El dron puede desplazarse por el viento, por lo que requiere correcciones con el control remoto.'
  },
  {
    id: 'tecno-espejos-retrovisor-mirror-sc',
    name: 'ESPEJOS RETROVISOR MIRROR/SC',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['deporte'],
    ref: '54189',
    price: 42000,
    salePrice: 29400,
    stock: 8,
    image: 'assets/products/tecnologia/2/espejos-retrovisor-mirror-sc.jpg',
    description: '¡Eleva tu patineta eléctrica a otro nivel! Con nuestros espejos retrovisores, tendrás una visibilidad total y una seguridad inigualable. ¡Descubre la diferencia y disfruta de tus trayectos como nunca antes!'
  },
  {
    id: 'tecno-estacion-de-carga',
    name: 'ESTACION DE CARGA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '93805',
    price: 99800,
    stock: 5,
    image: 'assets/products/tecnologia/2/estacion-de-carga.jpg',
    description: '¡Libera el poder de la carga! Esta estación compacta te permite alimentar múltiples dispositivos simultáneamente, diciendo adiós al desorden de cables. Descubre cómo simplificar tu vida digital y estar siempre conectado. ¡No te quedes sin la tuya!'
  },
  {
    id: 'tecno-estrella-musical',
    name: 'ESTRELLA MUSICAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '26606',
    price: 22000,
    stock: 5,
    image: 'assets/products/tecnologia/2/estrella-musical.jpg',
    gallery: [
      'assets/products/tecnologia/2/estrella-musical-1.jpg'
    ],
    description: '¡Diversión,en una sola estrella!\n\nLa Estrella Musical Interactiva hará reír y bailar a todos en casa\n\nCaracterísticas:\n\nSe mueve\n\nMaterial suave y agradable al tacto\n\nIncluye cable USB para recarga\n\nMedidas: 22 x 21 cm\n\nCOLOR AL AZAR'
  },
  {
    id: 'tecno-funda-para-portatil-na-bag-105',
    name: 'FUNDA PARA PORTATIL NA-BAG 105',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '20783',
    price: 49800,
    stock: 17,
    image: 'assets/products/tecnologia/2/funda-para-portatil-na-bag-105.jpg',
    description: '¡Protección imbatible para tu laptop! Descubre la FUNDA NA-BAG 105: diseño slim y tela resistente que cuida tu equipo con estilo. Su interior acolchado garantiza seguridad total. ¿Listo para llevar tu tecnología sin preocupaciones? ¡Hazla tuya!'
  },
  {
    id: 'tecno-gafas-bluetooh-recargable',
    name: 'GAFAS BLUETOOH RECARGABLE',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '17216',
    price: 48000,
    stock: 3,
    image: 'assets/products/tecnologia/2/gafas-bluetooh-recargable.jpg',
    gallery: [
      'assets/products/tecnologia/2/gafas-bluetooh-recargable-1.jpg',
      'assets/products/tecnologia/2/gafas-bluetooh-recargable-2.jpg'
    ],
    description: 'Función contestar llamadas, conexión inalámbrica v5.0, controles y cancelación de ruido, audio HD, compatible con Android y iPhone, cable de carga y led indicador de carga.'
  },
  {
    id: 'tecno-gafas-inteligentes-g5-2026-con-camara-e-ia',
    name: 'GAFAS INTELIGENTES G5 2026 CON CAMARA E IA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['deporte'],
    ref: '47589',
    price: 339800,
    stock: 9,
    image: 'assets/products/tecnologia/2/gafas-inteligentes-g5-2026-con-camara-e-ia.jpg',
    gallery: [
      'assets/products/tecnologia/2/gafas-inteligentes-g5-2026-con-camara-e-ia-1.jpg'
    ],
    description: '¡Transforma tu visión con las GAFAS INTELIGENTES G5 2026! Captura el mundo en HD, disfruta de audio inmersivo y experimenta la IA en tiempo real. ¡El futuro de la tecnología está en tus ojos!'
  },
  {
    id: 'tecno-gafas-inteligentes-inalambricas-xg89',
    name: 'GAFAS INTELIGENTES INALAMBRICAS XG89',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '85108',
    price: 92000,
    salePrice: 58000,
    stock: 6,
    image: 'assets/products/tecnologia/2/gafas-inteligentes-inalambricas-xg89.jpg',
    gallery: [
      'assets/products/tecnologia/2/gafas-inteligentes-inalambricas-xg89-1.jpg'
    ],
    description: 'RESPONDE LLAMADAS PERFECTO PARA ESCUCHAR MUSICA\n\n-\n\nResistencia Súper Larga\n\n-\n\nComunicación Inteligente\n\n-\n\nEmparejamiento Rápido\n\n-\n\nConexión Estable\n\nGARANTIA DE 6 MESES\n\nModelo de producto: XG89\n\nEntrada: CC 5V\n\nTiempo de espera: 120 horas\n\nTiempo de trabajo: Hasta 5 horas\n\nVersión inalámbrica: V6.0\n\nBatería para auriculares: 50 mAh\n\nTiempo de carga: 1 hora\n\nAlcance de funcionamiento: 10m'
  },
  {
    id: 'tecno-game-box-g7-500-juegos-1-control',
    name: 'GAME BOX G7 500 JUEGOS +1 CONTROL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '30347',
    price: 70000,
    stock: 0,
    image: 'assets/products/tecnologia/2/game-box-g7-500-juegos-1-control.jpg',
    description: 'Consola Game Box G7 Ultra Delgada + Joystick\n\nDescubre la Consola Game Box G7 Ultra Delgado, el dispositivo portátil ideal para los amantes de los videojuegos retro. Con un diseño elegante y ligero, esta consola está fabricada en plástico ABS y disponible en cuatro colores de moda: rosa, verde, azul y gris. Su mango, con un grosor de solo 0.39 pulgadas, facilita su transporte, convirtiéndola en la compañera perfecta para llevar a cualquier lugar.Características Destacadas\n\nControles Manuales Claramente Etiquetados: Disfruta de un control intuitivo gracias a teclas de juego que son fáciles de identificar.\n\nPantalla LCD HD: La consola cuenta con una pantalla de 3.5 pulgadas que ofrece gráficos digitales nítidos de 8 bits, asegurando una experiencia visual atractiva y colorida.'
  },
  {
    id: 'tecno-game-retro-400-juegos-2-jugadores',
    name: 'GAME RETRO 400 JUEGOS (2) JUGADORES',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '43816',
    price: 79800,
    salePrice: 66200,
    stock: 12,
    image: 'assets/products/tecnologia/2/game-retro-400-juegos-2-jugadores.jpg',
    gallery: [
      'assets/products/tecnologia/2/game-retro-400-juegos-2-jugadores-1.jpg'
    ],
    description: 'Game Retro 400 Juegos – Diversión clásica al alcance de tu mano\n\nDisfruta de 400 juegos en un solo dispositivo, 100% importado y listo para brindarte horas de entretenimiento con los clásicos que amas. Perfecto para nostálgicos y amantes de los videojuegos retro.\n\n1 CONTROL\n\nSE PUEDE JUGAR 2 PERSONAS AL MISMO TIEMPO\n\nCARGA PORTATIL\n\nVIENE CON BANANAS PARA CONECTAR AL TV\n\n400 JUEGOS DISPONIBLES RETRO\n\nEL PREFERIDO DE LOS CLIENTES'
  },
  {
    id: 'tecno-holder-388a',
    name: 'HOLDER 388A',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '69514',
    price: 8300,
    stock: 0,
    image: 'assets/products/tecnologia/2/holder-388a.jpg',
    description: 'Características:\n\nEspacio libre para el puerto de carga.\n\nSe ajusta a múltiples ángulos.\n\nAltura máxima de 32 cm.'
  },
  {
    id: 'tecno-holder-celular-en-espejo-carro-retrovisor-hold-171',
    name: 'HOLDER CELULAR EN ESPEJO CARRO RETROVISOR HOLD 171',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '44009',
    price: 33900,
    salePrice: 20700,
    stock: 2,
    image: 'assets/products/tecnologia/2/holder-celular-en-espejo-carro-retrovisor-hold-171.jpg',
    description: 'MUY PRACTICO Y FUNCIONAL'
  },
  {
    id: 'tecno-holders-hold-326',
    name: 'HOLDERS HOLD-326',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '56624',
    price: 4600,
    stock: 34,
    image: 'assets/products/tecnologia/2/holders-hold-326.jpg',
    description: 'Características:\n\n• Soporte fijo y de aluminio.\n\n• Cuenta con una articulación flexible que permite ajustar el ángulo de 5° a 45°.\n\n• Se adapta a dispositivos de entre 4.0 y 7.9 pulgadas.'
  },
  {
    id: 'tecno-holders-hold-ps-228',
    name: 'HOLDERS HOLD-PS/228',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '90069',
    price: 17500,
    salePrice: 13100,
    stock: 2,
    image: 'assets/products/tecnologia/2/holders-hold-ps-228.jpg',
    description: 'Gracias a su sistema de múltiples ventosas, se adhiere con fuerza a superficies lisas y te permite usar tu celular sin sostenerlo con la mano.\n\nMejor agarre para evitar caídas\n\nSoporte ajustable para ver videos o hacer videollamadas\n\nFuerte adherencia con ventosas de alta succión\n\nCompacto y portátil (50mm)\n\nIdeal para trabajo, estudio, streaming o redes sociales\n\nPega tu celular, ajusta el soporte y disfruta manos libres en segundos.'
  },
  {
    id: 'tecno-holders-s059',
    name: 'HOLDERS S059',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '85222',
    price: 4100,
    stock: 26,
    image: 'assets/products/tecnologia/2/holders-s059.jpg',
    description: 'Características:\n\n-\n\nHecho de material ABS de alta calidad, duradero y liviano.\n\n-\n\nFácil de ajustar y transportar.\n\n-\n\nSoporte de celular o tablet.\n\n-\n\nCon un diseño plegable y ajustable, puede ajustar el ángulo dentro de 270 grados a voluntad.'
  },
  {
    id: 'tecno-impresora-portatil',
    name: 'IMPRESORA PORTATIL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '64596',
    price: 79800,
    stock: 5,
    image: 'assets/products/tecnologia/2/impresora-portatil.jpg',
    description: 'Mini Printer portátil: imprime fotos al instante de forma práctica y sin tinta. Es compacta, fácil de llevar y perfecta para recuerdos, notas, etiquetas o detalles creativos. Ideal para estudiantes, regalos y uso diario.'
  },
  {
    id: 'tecno-intercomunicador-bt12-para-casco',
    name: 'INTERCOMUNICADOR BT12 PARA CASCO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '11856',
    price: 79800,
    stock: 1,
    image: 'assets/products/tecnologia/2/intercomunicador-bt12-para-casco.jpg',
    description: 'Presentamos los Auriculares inalámbricos bt12 para casco de motocicleta, kit manos libres de llamada inalámbrico, estéreo, anti interferencias, reproductor de música impermeable, altavoz bt-12con la última tecnología bluetooth v4.2 + edr, el auricular tiene una excelente transmisión de señal, consumo de energía ultra bajo. Los auriculares son compatibles con todos los dispositivos Bluetooth, con función de respuesta automática, función de respuesta manual del teléfono conmutable, segura y rápida.\n\nEl micrófono integrado anti interferencias de alta calidad permite responder y colgar con manos libres.\n\nCuenta con sonido de alta fidelidad y soporta la función de última o siguiente canción, aumento y disminución de volumen, reproducción/Pausa, devolución automática de llamada y otras funciones, con operación simple.'
  },
  {
    id: 'tecno-jbl-flip-7-version-1-1',
    name: 'JBL FLIP 7 VERSION 1.1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '40023',
    price: 179800,
    salePrice: 106100,
    stock: 6,
    image: 'assets/products/tecnologia/2/jbl-flip-7-version-1-1.jpg',
    gallery: [
      'assets/products/tecnologia/2/jbl-flip-7-version-1-1-1.jpg'
    ],
    description: '¡Siente el poder del sonido JBL Flip 7! Diseñado para acompañarte en cada aventura, este altavoz portátil te ofrece una experiencia sonora inigualable. ¿Estás listo para llevar tu música a todas partes? Descubre la versión 1.1 y prepárate para una revolución sonora.'
  },
  {
    id: 'tecno-kit-de-grabacion-para-celular-ay-49rgb-fino',
    name: 'KIT DE GRABACION PARA CELULAR AY-49RGB FINO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '66378',
    price: 55000,
    stock: 2,
    image: 'assets/products/tecnologia/2/kit-de-grabacion-para-celular-ay-49rgb-fino.jpg',
    gallery: [
      'assets/products/tecnologia/2/kit-de-grabacion-para-celular-ay-49rgb-fino-1.jpg'
    ],
    description: '¡Transforma tu celular en un estudio profesional! Este kit te da el poder de crear videos increíbles con luz, sonido y estabilidad. Captura cada momento con calidad de cine. ¡Sé la estrella de tu contenido!\n\nCaracterísticas: • Micrófono tipo mini “shotgun” con espuma antiviento. • Luz de video LED universal (modo RGB) para mejorar iluminación. • Soporte para teléfono con ajuste (horizontal/vertical). • Trípode de mesa (también sirve como agarradera). • Control Bluetooth para foto/video a distancia.'
  },
  {
    id: 'tecno-kit-de-limpieza-7-en-1',
    name: 'KIT DE LIMPIEZA 7 EN 1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '11956',
    price: 22300,
    salePrice: 12500,
    stock: 13,
    image: 'assets/products/tecnologia/2/kit-de-limpieza-7-en-1.jpg',
    gallery: [
      'assets/products/tecnologia/2/kit-de-limpieza-7-en-1-1.jpg'
    ],
    description: '"Se pueden utilizar de manera eficiente para recoger, cepillar, pegar y limpiar todo el polvo. 7 tipos de cabezales de limpieza se ocuparán de todo tipo de necesidades de limpieza. El kit limpiador electrónico es adecuado para auriculares Bluetooth, teléfonos móviles y otros productos digitales."'
  },
  {
    id: 'tecno-kit-gamer-x4-articulos',
    name: 'KIT GAMER X4 ARTICULOS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '62285',
    price: 176000,
    stock: 2,
    image: 'assets/products/tecnologia/2/kit-gamer-x4-articulos.jpg',
    description: '¡Domina el juego con el KIT GAMER X4! Sumérgete en la acción con este combo esencial: teclado, mouse, headset y pad diseñados para la victoria. ¡No esperes más para elevar tu experiencia de juego al siguiente nivel!\n\nEquipa tu espacio con todo lo necesario para jugar: teclado, mouse, audífonos y mouse pad con diseño moderno e iluminación llamativa. Ideal para PC, estudio, oficina o regalo.\n\nCompleto, práctico y listo para usar.'
  },
  {
    id: 'tecno-kit-labubu',
    name: 'KIT LABUBU',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '22673',
    price: 83400,
    salePrice: 70100,
    stock: 3,
    image: 'assets/products/tecnologia/2/kit-labubu.jpg',
    description: 'INCLUYE LO DE LA IMAGEN'
  },
  {
    id: 'tecno-lampara-decorativa-astronauta-a1',
    name: 'LAMPARA DECORATIVA ASTRONAUTA A1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '61831',
    price: 33500,
    salePrice: 24500,
    stock: 14,
    image: 'assets/products/tecnologia/3/lampara-decorativa-astronauta-a1.jpg',
    description: ''
  },
  {
    id: 'tecno-lampara-decorativa-rgb-a1',
    name: 'LAMPARA DECORATIVA RGB A1',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '90221',
    price: 42100,
    salePrice: 22300,
    stock: 3,
    image: 'assets/products/tecnologia/3/lampara-decorativa-rgb-a1.jpg',
    description: 'Descubre la Lámpara Mágica, un elegante accesorio de iluminación que transforma cualquier espacio con su proyector de luz LED y tecnología 3D. Con 16 colores ajustables, esta lámpara ofrece una variedad de opciones de iluminación, desde cálidos tonos relajantes hasta vibrantes colores llenos de energía. Su diseño táctil permite un fácil control al tocar la parte superior, y su conexión USB hace que sea sencilla de utilizar en cualquier entorno. El efecto visual refractante simula un diamante, aportando un toque sofisticado y moderno a tu hogar. Ideal para dormitorios, salas de estar, oficinas o cualquier espacio que desees ambientar con estilo y elegancia. Además, incluye un control remoto para cambiar los colores y ajustar la intensidad según tus necesidades.'
  },
  {
    id: 'tecno-lampara-parlante-con-carga-magnetica',
    name: 'LAMPARA PARLANTE CON CARGA MAGNETICA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '86882',
    price: 90000,
    stock: 2,
    image: 'assets/products/tecnologia/3/lampara-parlante-con-carga-magnetica.jpg',
    description: 'PARLANTE CON CARGA MAGNÉTICA\n\nBLUETOOTH\n\nUSB /MICRO'
  },
  {
    id: 'tecno-lampara-usb-led-18',
    name: 'LAMPARA USB LED-18',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '53305',
    price: 3200,
    stock: 11,
    image: 'assets/products/tecnologia/3/lampara-usb-led-18.jpg',
    description: 'Ilumina cualquier espacio de forma práctica con esta mini lámpara nocturna USB. Su diseño compacto permite conectarla fácilmente a computadores, cargadores, power bank o puertos USB, brindando una luz suave y agradable ideal para la noche.\n\nEs perfecta para leer, trabajar con el portátil, iluminar el cuarto o usarla como luz ambiental sin ocupar espacio. Solo conéctala y tendrás iluminación instantánea.\n\nCaracterísticas:\n\n• Conexión USB universal\n\n• Luz LED suave y eficiente\n\n• Diseño compacto y portátil\n\n• Bajo consumo de energía\n\n• Ideal para computador, habitación, viajes o escritorio'
  },
  {
    id: 'tecno-lampara-ventilador-portatil',
    name: 'LAMPARA VENTILADOR PORTATIL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '56335',
    price: 49900,
    salePrice: 33400,
    stock: 2,
    image: 'assets/products/tecnologia/3/lampara-ventilador-portatil.jpg',
    gallery: [
      'assets/products/tecnologia/3/lampara-ventilador-portatil-1.jpg',
      'assets/products/tecnologia/3/lampara-ventilador-portatil-2.jpg'
    ],
    description: 'EQUIPO PORTIL LED'
  },
  {
    id: 'tecno-lamparas-usb-led-07',
    name: 'LAMPARAS USB LED-07',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '47496',
    price: 12300,
    stock: 8,
    image: 'assets/products/tecnologia/3/lamparas-usb-led-07.jpg',
    description: 'Convierte cualquier espacio en una fiesta con esta mini luz disco USB. Su potente iluminación multicolor proyecta efectos de luces vibrantes que llenan la habitación, el carro o cualquier lugar con un ambiente divertido y único.\n\nGracias a su cuello flexible, puedes ajustar fácilmente la dirección de la luz para lograr el efecto que desees. Solo debes conectarla a un puerto USB y comenzará a iluminar al instante.\n\nCaracterísticas:\n\n• Luces LED multicolores con efecto disco\n\n• Conexión USB compatible con carros, computadores y power bank\n\n• Cuello flexible para ajustar la dirección de la luz\n\n• Compacta y portátil para llevar a cualquier lugar\n\n• Ideal para habitaciones, fiestas, carro o decoración'
  },
  {
    id: 'tecno-lapiz-tactil-hx-02',
    name: 'LAPIZ TACTIL HX-02',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '42164',
    price: 5500,
    salePrice: 2900,
    stock: 50,
    image: 'assets/products/tecnologia/3/lapiz-tactil-hx-02.jpg',
    description: 'Este práctico lápiz táctil (stylus) te permite usar tu celular o tablet con mayor precisión y comodidad. Su punta suave de goma protege la pantalla de rayones y facilita escribir, dibujar o navegar sin dejar huellas.\n\nGracias a su diseño elegante y liviano, puedes llevarlo fácilmente en el bolsillo, bolso o agenda. Es ideal para estudiantes, profesionales y cualquier persona que use dispositivos táctiles a diario.\n\nCaracterísticas:\n\n• Compatible con celulares y tablets\n\n• Punta suave que no raya la pantalla\n\n• Mayor precisión al escribir o dibujar\n\n• Diseño elegante y portátil\n\n• Disponible en varios colores'
  },
  {
    id: 'tecno-lapiz-tactil-hx-22',
    name: 'LAPIZ TACTIL HX-22',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '61898',
    price: 5800,
    salePrice: 4100,
    stock: 9,
    image: 'assets/products/tecnologia/3/lapiz-tactil-hx-22.jpg',
    description: 'Bolígrafo con Punta Stylus para Pantallas Táctiles\n\nEste práctico bolígrafo 2 en 1 combina escritura tradicional con tecnología para dispositivos móviles. Cuenta con punta stylus suave, ideal para usar en celulares, tablets o pantallas táctiles sin rayarlas, y bolígrafo giratorio para escribir cómodamente en papel.\n\nSu diseño moderno incluye gancho tipo clip, perfecto para colgar en bolsillos, cuadernos o agendas y tenerlo siempre a la mano.\n\nCaracterísticas:\n\n• Función 2 en 1: stylus + bolígrafo\n\n• Compatible con celulares, tablets y pantallas táctiles\n\n• Sistema giratorio para sacar la punta del bolígrafo\n\n• Diseño práctico con gancho para llevar fácilmente\n\n• Disponible en varios colores'
  },
  {
    id: 'tecno-lapiz-tactil-universal',
    name: 'LAPIZ TACTIL UNIVERSAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '97845',
    price: 47000,
    stock: 5,
    image: 'assets/products/tecnologia/3/lapiz-tactil-universal.jpg',
    description: 'LAPIZ + CABLE DE CARGA\n\nCOMPATBLES PARA TABLETS'
  },
  {
    id: 'tecno-localizador-inteligente-loshall-f15',
    name: 'LOCALIZADOR INTELIGENTE LOSHALL F15',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['deporte'],
    ref: '46465',
    price: 84800,
    salePrice: 76300,
    stock: 9,
    image: 'assets/products/tecnologia/3/localizador-inteligente-loshall-f15.jpg',
    gallery: [
      'assets/products/tecnologia/3/localizador-inteligente-loshall-f15-1.jpg',
      'assets/products/tecnologia/3/localizador-inteligente-loshall-f15-2.jpg',
      'assets/products/tecnologia/3/localizador-inteligente-loshall-f15-3.jpg'
    ],
    description: '¡Pierde el miedo a perder tus objetos valiosos! El LOCALIZADOR INTELIGENTE LOSHALL F15 te ofrece tranquilidad instantánea. Su diseño elegante y compacto con mosquetón te permite llevarlo a todas partes. Descubre cómo simplificar tu vida y mantener todo bajo control.'
  },
  {
    id: 'tecno-luz-led-potente-para-celular-corazon',
    name: 'LUZ LED POTENTE PARA CELULAR CORAZON',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '12666',
    price: 29800,
    stock: 2,
    image: 'assets/products/tecnologia/3/luz-led-potente-para-celular-corazon.jpg',
    description: 'Luz LED en forma de corazón con tecnología RGB (modelo M85RGB), ofrece colores vibrantes, efectos dinámicos y tonos blanco frío/cálido. Su diseño proporciona iluminación amplia y uniforme. Es recargable para uso inalámbrico e incluye un clip de sujeción universal para smartphones.'
  },
  {
    id: 'tecno-maquina-de-verificacion-de-billetes',
    name: 'MAQUINA DE VERIFICACION DE BILLETES',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '46590',
    price: 39800,
    stock: 4,
    image: 'assets/products/tecnologia/3/maquina-de-verificacion-de-billetes.jpg',
    description: 'Protege tu negocio con este verificador de billetes UV, ideal para revisar billetes de forma rápida y confiable. Su luz ultravioleta permite detectar marcas de seguridad, cuenta con regla de medición integrada y diseño compacto para caja, mostrador u oficina. Fácil de usar, resistente y útil para comercios, ventas y manejo diario de efectivo.'
  },
  {
    id: 'tecno-mesa-auto-hold-372',
    name: 'MESA AUTO HOLD-372',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '39386',
    price: 37400,
    stock: 3,
    image: 'assets/products/tecnologia/3/mesa-auto-hold-372.jpg',
    description: '¡No más comidas incómodas en el coche! Descubre la MESA AUTO HOLD-372, tu solución revolucionaria para disfrutar de tus antojos y mantener tu móvil a la vista. ¡Tu copiloto perfecto te espera!'
  },
  {
    id: 'tecno-microfono-condensador-sf-666',
    name: 'MICROFONO CONDENSADOR SF-666',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '14166',
    price: 39000,
    stock: 4,
    image: 'assets/products/tecnologia/3/microfono-condensador-sf-666.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'tecno-microfono-de-solapa',
    name: 'MICROFONO DE SOLAPA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '88634',
    price: 26000,
    stock: 9,
    image: 'assets/products/tecnologia/3/microfono-de-solapa.jpg',
    description: '-\n\nMicrófono: marca digital de silicona\n\n-\n\nCapacidad de la batería: 60mAh\n\n-\n\nDuración de la batería: 5-6 horas\n\n-\n\nRelación señal-ruido: 60dB\n\n-\n\nCaracterísticas: reducción de ruido, Cable de carga\n\n-\n\nConector de salida: tipo C'
  },
  {
    id: 'tecno-microfono-de-solapa-entrada-lightning',
    name: 'MICROFONO DE SOLAPA ENTRADA LIGHTNING',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '63364',
    price: 13100,
    salePrice: 7700,
    stock: 6,
    image: 'assets/products/tecnologia/3/microfono-de-solapa-entrada-lightning.jpg',
    description: 'Ideal para grabar videos, clases, entrevistas y transmisiones con sonido claro. Es portátil, fácil de usar y compatible con iPhone y iPad. Incluye cable largo y bolsa de transporte para mayor comodidad.'
  },
  {
    id: 'tecno-microfono-de-solapa-tipo-c',
    name: 'MICROFONO DE SOLAPA TIPO C',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '52502',
    price: 18300,
    salePrice: 9500,
    stock: 2,
    image: 'assets/products/tecnologia/3/microfono-de-solapa-tipo-c.jpg',
    description: 'Graba audio y video con calidad profesional de manera sencilla. Con conexión Tipo C, compacto y portátil, ideal para entrevistas, vlogs, clases online y transmisiones en vivo. Incluye accesorios para un uso cómodo y versátil.'
  },
  {
    id: 'tecno-microfono-de-solapa-entrada-aux',
    name: 'MICROFONO DE SOLAPA entrada AUX',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '98094',
    price: 13000,
    stock: 10,
    image: 'assets/products/tecnologia/3/microfono-de-solapa-entrada-aux.jpg',
    description: ''
  },
  {
    id: 'tecno-mini-luz-led-recargable-para-celular-3w',
    name: 'MINI LUZ LED RECARGABLE PARA CELULAR 3W',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '57977',
    price: 9800,
    stock: 168,
    image: 'assets/products/tecnologia/3/mini-luz-led-recargable-para-celular-3w.jpg',
    gallery: [
      'assets/products/tecnologia/3/mini-luz-led-recargable-para-celular-3w-1.jpg'
    ],
    description: '¡Captura la luz perfecta en cada foto! Con esta MINI LUZ LED RECARGABLE, tus selfies y videos brillarán como nunca antes. Olvídate de la poca luz y luce espectacular al instante. ¡Descubre el secreto de la iluminación profesional!'
  },
  {
    id: 'tecno-mini-proyector-led-yg-300-esquinas-cuadradas',
    name: 'MINI PROYECTOR LED YG 300 - ESQUINAS CUADRADAS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '19844',
    price: 110000,
    stock: 4,
    image: 'assets/products/tecnologia/3/mini-proyector-led-yg-300-esquinas-cuadradas.jpg',
    gallery: [
      'assets/products/tecnologia/3/mini-proyector-led-yg-300-esquinas-cuadradas-1.jpg'
    ],
    description: 'Cuando buscamos un proyector portátil, lo imprescindible es que sea pequeño y poco pesado. En este caso, el proyector YG 300 cumple estas premisas, con unas dimensiones de 12.50 x 8.50 x 4.50 cm y un peso de 245 g. No es de tamaño de bolsillo, pero entra sin ninguna dificultad dentro de cualquier bolso o mochila, para acompañarte en todo momento. El proyector está realizado en material plástico ABS, robusto y una combinación de color blanco y amarillo que le aporta un toque desenfadado.\n\nProyector LCD YG-300\n\nReproductor multimedia con 320 x 240 píxeles, visible 400 - 600 lúmenes y relación de contraste de 800: 1.\n\nPuede reproducir sonido, pues cuenta con altavoces y también con puerto para colocar auriculares u otro equipo de sonido. Con este proyector pequeño pero de alto rendimiento, puede disfrutar de imágenes y videos de adecuada calidad en una posición muy cómoda.\n\nPuede reproducir videos, imágenes, música y archivos txt, desde su USB o Tarjeta SD.\n\nTambién puede compartir la pantalla de su Laptop mediante cable HDMI\n\n2.- Contenido del Paquete:\n\n1x Mini Proyector LED YG 300\n\n1x Control Remoto\n\n1x Cargador'
  },
  {
    id: 'tecno-mini-tripode-tp-009',
    name: 'MINI TRIPODE TP-009',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '64265',
    price: 12600,
    stock: 5,
    image: 'assets/products/tecnologia/3/mini-tripode-tp-009.jpg',
    description: 'Características:\n\n• Mini trípode flexible.\n\n• Alto de 24 cm (trípode en estado cerrado incluyendo el soporte del celular).\n\n• Fabricado en ABS y espuma de alta densidad, compacto y ligero.\n\n• Universal para teléfono o para cámara.'
  },
  {
    id: 'tecno-mouse-ergonomico-alambrico',
    name: 'MOUSE ERGONOMICO ALAMBRICO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '10220',
    price: 38000,
    stock: 4,
    image: 'assets/products/tecnologia/3/mouse-ergonomico-alambrico.jpg',
    description: 'Trabaja y navega con mayor comodidad gracias a este mouse ergonómico, diseñado para adaptarse mejor a la mano y reducir la fatiga durante largas jornadas de uso.\n\nCuenta con conexión alámbrica estable, respuesta rápida y diseño cómodo para oficina, estudio, computador de casa o negocio.\n\nPráctico, cómodo y listo para usar. Ideal para quienes buscan un mouse funcional y económico.'
  },
  {
    id: 'tecno-mouse-ergonomico-inalambrico',
    name: 'MOUSE ERGONOMICO INALAMBRICO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '75054',
    price: 59800,
    stock: 2,
    image: 'assets/products/tecnologia/3/mouse-ergonomico-inalambrico.jpg',
    description: 'Mouse Ergonómico Vertical M1688 Dile adiós al dolor de muñeca y evita el túnel carpiano. Diseño vertical saludable, 100% inalámbrico y con velocidad ajustable. ¡Trabaja cómodo por horas!'
  },
  {
    id: 'tecno-mouse-gamer-3200-dpi',
    name: 'MOUSE GAMER 3200 DPI',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '90289',
    price: 53000,
    stock: 2,
    image: 'assets/products/tecnologia/3/mouse-gamer-3200-dpi.jpg',
    gallery: [
      'assets/products/tecnologia/3/mouse-gamer-3200-dpi-1.jpg'
    ],
    description: 'SOPORTA MOTOR OPTICO 1600/2400/3200 DPI\n\nDescripciónMOUSE PARA JUEGOS ,DISEÑO DE ILUMINACION\n\nDISEÑO ERGONOMICO\n\nSOPORTA MOTOR OPTICO 1600/2400/3200 DPI\n\nSOPORTE DE OPERACION DEL SISTEMA /WINDOWS/2000/XP/ VISTA7 WINDOWS 7\n\nGarantía del vendedor: 3 meses'
  },
  {
    id: 'tecno-mouse-inalambrico-dj-125',
    name: 'MOUSE INALAMBRICO DJ-125',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '35598',
    price: 39100,
    stock: 1,
    image: 'assets/products/tecnologia/3/mouse-inalambrico-dj-125.jpg',
    description: 'CONEXION A BLUETOOH RECARGABLE'
  },
  {
    id: 'tecno-mouse-m29-dpi-1600',
    name: 'MOUSE M29 DPI 1600',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '50053',
    price: 17300,
    stock: 7,
    image: 'assets/products/tecnologia/3/mouse-m29-dpi-1600.jpg',
    gallery: [
      'assets/products/tecnologia/3/mouse-m29-dpi-1600-1.jpg'
    ],
    description: 'MARCA 100% ORIGINAL\n\nEs un mouse óptico accesible, ideal para uso diario en oficinas, educación y entornos corporativos. Con diseño ergonómico, conexión USB alámbrica Plug & Play y sensibilidad media, ofrece funcionamiento sencillo, confiable y sin fricciones para tareas cotidianas.'
  },
  {
    id: 'tecno-mouse-m30-depi-1600',
    name: 'MOUSE M30 DEPI 1600',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '48390',
    price: 20000,
    stock: 6,
    image: 'assets/products/tecnologia/3/mouse-m30-depi-1600.jpg',
    gallery: [
      'assets/products/tecnologia/3/mouse-m30-depi-1600-1.jpg'
    ],
    description: 'MARCA 100% ORIGINAL\n\nEs un mouse óptico accesible, ideal para uso diario en oficinas, educación y entornos corporativos. Con diseño ergonómico, conexión USB alámbrica Plug & Play y sensibilidad media, ofrece funcionamiento sencillo, confiable y sin fricciones para tareas cotidianas'
  },
  {
    id: 'tecno-mouse-original-inalambrico-pro',
    name: 'MOUSE ORIGINAL INALAMBRICO PRO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '70178',
    price: 52900,
    stock: 1,
    image: 'assets/products/tecnologia/3/mouse-original-inalambrico-pro.jpg',
    gallery: [
      'assets/products/tecnologia/3/mouse-original-inalambrico-pro-1.jpg'
    ],
    description: 'Ratón Inalámbrico Profesional (Modelo YE03)\n\nEs un mouse ergonómico con batería recargable de 500mAh (sin pilas) e iluminación LED. Destaca por su conectividad dual (Bluetooth 5.0 + 2.4G) que garantiza una respuesta rápida y estable. Es compatible con prácticamente todas las versiones de Windows.'
  },
  {
    id: 'tecno-multipuerto-x4-usb',
    name: 'MULTIPUERTO X4  USB',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '25684',
    price: 7900,
    stock: 10,
    image: 'assets/products/tecnologia/3/multipuerto-x4-usb.jpg',
    description: ''
  },
  {
    id: 'tecno-original-airpods-es53',
    name: 'ORIGINAL AIRPODS ES53',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '95702',
    price: 67000,
    stock: 1,
    image: 'assets/products/tecnologia/3/original-airpods-es53.jpg',
    gallery: [
      'assets/products/tecnologia/3/original-airpods-es53-1.jpg',
      'assets/products/tecnologia/3/original-airpods-es53-2.jpg'
    ],
    description: 'GARANTIA DE 6 MESES'
  },
  {
    id: 'tecno-original-c1-g-tide-mobulaa-diadema',
    name: 'ORIGINAL C1 G-TIDE MOBULAA DIADEMA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '11409',
    price: 139800,
    salePrice: 104800,
    stock: 1,
    image: 'assets/products/tecnologia/3/original-c1-g-tide-mobulaa-diadema.jpg',
    description: 'PRODUCTO ORIGINAL DE ALTA GAMA PREMIUM\n\nEL COLOR ES IGUAL AL DE LA FOTO'
  },
  {
    id: 'tecno-original-c1-lite-mobulaa-diadema',
    name: 'ORIGINAL C1-LITE MOBULAA DIADEMA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '43660',
    price: 99000,
    salePrice: 86100,
    stock: 1,
    image: 'assets/products/tecnologia/3/original-c1-lite-mobulaa-diadema.jpg',
    description: 'PRODUCTO ORIGINAL DE ALTA GAMA PREMIUM'
  },
  {
    id: 'tecno-original-cable-tipo-c-a-tipo-c-60w-carga-rapida',
    name: 'ORIGINAL CABLE TIPO C A TIPO C 60W CARGA RAPIDA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '73714',
    price: 15600,
    stock: 7,
    image: 'assets/products/tecnologia/3/original-cable-tipo-c-a-tipo-c-60w-carga-rapida.jpg',
    gallery: [
      'assets/products/tecnologia/3/original-cable-tipo-c-a-tipo-c-60w-carga-rapida-1.jpg'
    ],
    description: '¡Libera la potencia! Este cable Tipo-C a Tipo-C de 60W carga tus dispositivos a velocidad luz. Olvida las esperas y sumérgete en la acción. ¿Listo para la carga más rápida de tu vida? ¡Hazlo tuyo!'
  },
  {
    id: 'tecno-original-cable-usb-a-tipo-c-30w',
    name: 'ORIGINAL CABLE USB A TIPO C /  30W',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '33685',
    price: 5900,
    stock: 10,
    image: 'assets/products/tecnologia/3/original-cable-usb-a-tipo-c-30w.jpg',
    gallery: [
      'assets/products/tecnologia/3/original-cable-usb-a-tipo-c-30w-1.jpg',
      'assets/products/tecnologia/3/original-cable-usb-a-tipo-c-30w-2.jpg',
      'assets/products/tecnologia/3/original-cable-usb-a-tipo-c-30w-3.jpg',
      'assets/products/tecnologia/3/original-cable-usb-a-tipo-c-30w-4.jpg'
    ],
    description: '* Potencia: 30 W máx.\n\n* Material: TPE con núcleo de alta calidad\n\n* Longitud: 1 m\n\n* Modelo compatible: Tipo C\n\n* Transmisión de datos\n\n* Carga estable'
  },
  {
    id: 'tecno-original-cargador-usb-a-tipo-c-yookie-ei32',
    name: 'ORIGINAL CARGADOR USB A TIPO C YOOKIE EI32',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '50621',
    price: 28600,
    stock: 2,
    image: 'assets/products/tecnologia/3/original-cargador-usb-a-tipo-c-yookie-ei32.jpg',
    description: 'Yookie Ei32 – Carga rápida 18W\n\n1 AÑO DE GARANTIA\n\nDisfruta de carga rápida QC3.0 con reconocimiento inteligente para tus dispositivos. Con salida USB-C, alta potencia y protección múltiple, tu equipo estará seguro mientras se carga rápidamente. Incluye cable USB a Tipo C para empezar a usarlo de inmediato. Ideal para smartphones, tablets y otros dispositivos modernos.'
  },
  {
    id: 'tecno-original-mobula-future-clip',
    name: 'ORIGINAL MOBULA FUTURE CLIP',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '32432',
    price: 150000,
    stock: 1,
    image: 'assets/products/tecnologia/3/original-mobula-future-clip.jpg',
    description: 'Caja de Carga con Pantalla LED Táctil Inteligente. Los auriculares inalámbricos tienen una gran pantalla LED táctil que te permite verificar la fecha y hora, así como mostrar claramente el nivel de batería y el estado de conexión Bluetooth de los auriculares y la caja de carga. También cuenta con ecualizador de música, encuentra auriculares, toma fotos, ajusta el brillo, ajusta la hora, configura alarma, ajusta el volumen de la canción y salta canciones, muestra letras y otras funciones. Esto hace que sea muy fácil administrar música y llamadas.\n\nDiseño de clip para la oreja con sonido estéreo. Los auriculares inalámbricos adoptan el procesador de audio digital único y potentes controladores para mejorar y reproducir un sonido estéreo inmersivo de alta fidelidad, equipados con decodificación de audio de alta definición para restaurar detalles de sonido más ricos. Los auriculares de clip de oreja abierta se basan en un diseño ergonómico para evitar el sellado completo del canal, reduciendo la incomodidad durante el uso prolongado.\n\nAjuste cómodo y seguro para el uso diario: los auriculares abiertos pesan solo 51 g, normalmente más ligeros y transpirables que otros auriculares, lo que los hace más cómodos de usar durante largos períodos de tiempo. Elaborados con material innovador de carcasa dura que no se deforma, los auriculares con clip están meticulosamente diseñados para mantener su forma y ofrecer un ajuste seguro constante, sin importar cuánto los uses.\n\nCaracterísticas\n\n- Bluetooth:** Versión 5.3 (A2DP/AVRCP/HFP/HSP).\n\n- Audio:** Decodificación SBC/AACS, reducción activa de ruido.\n\n- Batería:** Audífonos 30mAh / Estuche 300mAh (1h carga, 90 días standby).\n\n- Resistencia:** IPX4 (salpicaduras).\n\n- Conectividad:** Dual simultánea (2 dispositivos).\n\n- Control:** Táctil multifunción.\n\n- Distancia:** Hasta 20m (sin obstáculos).\n\n- Colores:** Blanco, negro, morado, rosa.'
  },
  {
    id: 'tecno-original-mobulaa-iw12-mini',
    name: 'ORIGINAL MOBULAA IW12 MINI',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '83054',
    price: 197900,
    stock: 1,
    image: 'assets/products/tecnologia/3/original-mobulaa-iw12-mini.jpg',
    description: '- Acabados Estéticos: Diseño completo y estético que combina funcionalidad y estilo.\n\n- Notificaciones de Redes Sociales: Recibe y lee mensajes de WhatsApp, Facebook, Instagram y más.\n\n- Llamadas Directas: Marca, contesta, cuelga y habla directamente desde tu reloj.\n\n- Pantalla Full HD: Pantalla de alta resolución para una experiencia visual excepcional.\n\n- Resistente a Salpicaduras: Perfecto para uso diario, incluso en condiciones húmedas.\n\n- Carga Inalámbrica: Carga fácil y conveniente, sin necesidad de cables.\n\n- Fondos de Pantalla Personalizables: Personaliza tu pantalla con múltiples fondos de pantalla.\n\n- Sincronización de Contactos: Guarda tus contactos del celular en tu reloj.\n\n- Compatibilidad Universal: Compatible con Android e iOS (iPhone).\n\n- Modo Deporte: Registra tus actividades físicas como caminar, correr, ciclismo y montañismo.\n\n- Control de Música: Controla la reproducción de música desde tu muñeca.\n\n- Control de Cámara: Toma fotos remotamente desde tu reloj.\n\n- Pulsos Intercambiables: Cambia el aspecto de tu reloj con diferentes pulsos.\n\n- Estilos de Menú Personalizables: Elige entre 6 estilos de menú fluidos.\n\n- Asistente de Voz / Función Siri: Accede a funciones de voz como Siri desde tu reloj.\n\n- Monitor de Salud: Monitorea tu ritmo cardíaco, oxígeno en sangre y presión arterial.\n\n- Seguimiento de Actividad: Contador de pasos, calorías quemadas y cronómetro.\n\n- Registro de Llamadas: Registra tus llamadas directamente en el reloj.\n\n- Despertador: Configura alarmas para despertarte a tiempo.\n\n- Función de Buscar Celular: Encuentra tu teléfono desde tu reloj.\n\n- Calculadora: Realiza cálculos rápidos en tu muñeca.\n\n- Botones Funcionales: Botones reales y funcionales, incluida una perilla funcional.\n\n- Sensor de Movimiento: La pantalla se enciende automáticamente al girar la muñeca.\n\n- Micrófono y Altavoces: Realiza llamadas y escucha música directamente desde tu reloj.\n\n- Duración de Batería: Hasta 1 día de duración promedio, según el uso.\n\n- Hora y Fecha: Siempre al tanto de la hora y la fecha en tu muñeca.'
  },
  {
    id: 'tecno-original-sh-30-g-tide-mobulaa-speeaker-box',
    name: 'ORIGINAL SH-30 G-TIDE MOBULAA SPEEAKER BOX',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '72704',
    price: 172000,
    stock: 0,
    image: 'assets/products/tecnologia/3/original-sh-30-g-tide-mobulaa-speeaker-box.jpg',
    description: 'GARANTIA DE 6 MESES SPEAKER BOX ORIGINAL'
  },
  {
    id: 'tecno-original-smartwacht-mobulaa-ub6-pro',
    name: 'ORIGINAL SMARTWACHT MOBULAA UB6 PRO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '69904',
    price: 287700,
    salePrice: 166900,
    stock: 1,
    image: 'assets/products/tecnologia/3/original-smartwacht-mobulaa-ub6-pro.jpg',
    description: 'UB6 PRO Smartwatch\n\nDiseño moderno en color gris, pantalla AMOLED, conexión Bluetooth y carga inalámbrica.\n\nControla tu salud 24/7, recibe notificaciones y entrena con más de 150 modos deportivos.\n\nResistente al agua IP68, cómodo y listo para acompañarte todos los días.\n\n¡Tecnología, estilo y rendimiento en tu muñeca!'
  },
  {
    id: 'tecno-original-smartwacht-wisme-airpods-7-correas',
    name: 'ORIGINAL SMARTWACHT WISME + AIRPODS + 7 CORREAS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '75850',
    price: 148000,
    stock: 0,
    image: 'assets/products/tecnologia/3/original-smartwacht-wisme-airpods-7-correas.jpg',
    description: 'PRODUCTO ORIGINAL CON GARANTIA'
  },
  {
    id: 'tecno-p9-ultra-combo-7-correas',
    name: 'P9 ULTRA COMBO 7 CORREAS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '58567',
    price: 115800,
    stock: 2,
    image: 'assets/products/tecnologia/3/p9-ultra-combo-7-correas.jpg',
    description: ''
  },
  {
    id: 'tecno-pad-mause-carga-inalambrica',
    name: 'PAD MAUSE CARGA INALAMBRICA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '71337',
    price: 76000,
    stock: 3,
    image: 'assets/products/tecnologia/3/pad-mause-carga-inalambrica.jpg',
    description: ''
  },
  {
    id: 'tecno-palo-de-selfie',
    name: 'PALO DE SELFIE',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '17795',
    price: 18400,
    stock: 1,
    image: 'assets/products/tecnologia/3/palo-de-selfie.jpg',
    description: ''
  },
  {
    id: 'tecno-pantalla-selfie',
    name: 'PANTALLA SELFIE',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '61287',
    price: 78000,
    stock: 4,
    image: 'assets/products/tecnologia/3/pantalla-selfie.jpg',
    gallery: [
      'assets/products/tecnologia/3/pantalla-selfie-1.jpg'
    ],
    description: '¡Captura la luz perfecta para tus selfies! La PANTALLA SELFIE te brinda la iluminación ideal para deslumbrar en cada foto. ¿Lista para elevar tu contenido y atraer todas las miradas? ¡Descubre el secreto de las fotos profesionales, al instante!'
  },
  {
    id: 'tecno-parlante-airpods-rgb-profesional',
    name: 'PARLANTE + AIRPODS RGB PROFESIONAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '61803',
    price: 234500,
    salePrice: 164200,
    stock: 1,
    image: 'assets/products/tecnologia/3/parlante-airpods-rgb-profesional.jpg',
    description: 'Características:\n\n-\n\nBluetooth 5.0\n\n-\n\nAltavoz incorporado de alta potencia.\n\n-\n\nLuces LED RGB.\n\n-\n\nPantalla con indicador de carga (%).'
  },
  {
    id: 'tecno-parlante-bluetooh-rgb',
    name: 'PARLANTE BLUETOOH RGB',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '32800',
    price: 41000,
    stock: 5,
    image: 'assets/products/tecnologia/3/parlante-bluetooh-rgb.jpg',
    description: 'Potencia de 3W, Bluetooth 5.0, batería de 500 mAh con duración de hasta 2 horas.\n\nLector de tarjeta micro SD y USB.\n\nLuces RGB.\n\nPortátil y fácil de llevar.'
  },
  {
    id: 'tecno-parlante-bluetooth-alexa-15w',
    name: 'PARLANTE BLUETOOTH ALEXA 15W',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '94248',
    price: 126000,
    salePrice: 103300,
    stock: 11,
    image: 'assets/products/tecnologia/3/parlante-bluetooth-alexa-15w.jpg',
    description: 'Disfruta de un sonido potente y envolvente con este espectacular parlante inalámbrico de diseño deportivo.\n\nPotencia de 15W\n\nConexión Bluetooth\n\nBatería recargable de larga duración\n\nSonido Super Bass\n\nDiseño portátil y moderno\n\nIdeal para hogar, viajes, reuniones y actividades al aire libre'
  },
  {
    id: 'tecno-parlante-jbl-replica-rgb',
    name: 'PARLANTE JBL REPLICA RGB',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '87575',
    price: 50000,
    stock: 3,
    image: 'assets/products/tecnologia/3/parlante-jbl-replica-rgb.jpg',
    description: 'CON GARANTIA'
  },
  {
    id: 'tecno-parlante-karaoke-con-microfono',
    name: 'PARLANTE KARAOKE CON MICROFONO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '82509',
    price: 37000,
    stock: 25,
    image: 'assets/products/tecnologia/3/parlante-karaoke-con-microfono.jpg',
    gallery: [
      'assets/products/tecnologia/3/parlante-karaoke-con-microfono-1.jpg'
    ],
    description: 'Canta, baila y roba el show en familia o con amigos.\n\nConvierte cualquier lugar en una fiesta con esta máquina de karaoke Bluetooth 5.1 con micrófono inalámbrico y altavoz de 10W .\n\nIdeal para niños y adultos, ofrece efectos de voz mágicos (voz original, KTV, monstruo y bebé) y un sonido profesional con reducción de ruido DSP que hace brillar cada nota\n\nConéctala fácil por Bluetooth, USB o tarjeta TF y disfruta donde quieras de un sonido potente, nítido y lleno de diversión.'
  },
  {
    id: 'tecno-parlante-kimiso-kms-295',
    name: 'PARLANTE KIMISO KMS-295',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '92985',
    price: 75600,
    salePrice: 45400,
    stock: 6,
    image: 'assets/products/tecnologia/3/parlante-kimiso-kms-295.jpg',
    description: '¡Siente el ritmo y vive la fiesta en cualquier lugar! El Parlante Kimiso KMS-295 te envuelve en sonido potente y luces vibrantes. Resistente al agua y con 8W de potencia, ¿listo para que la música nunca pare? ¡Descubre su magia!'
  },
  {
    id: 'tecno-parlante-okop-kp-539',
    name: 'PARLANTE OKOP KP-539',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '12866',
    price: 73000,
    stock: 2,
    image: 'assets/products/tecnologia/3/parlante-okop-kp-539.jpg',
    description: '100% ORIGINAL RESISTENTE AL AGUA CON GARANTIA DE 3 MESES\n\nBUEN SONIDO Y BAJO'
  },
  {
    id: 'tecno-parlante-portatil-mg2',
    name: 'PARLANTE PORTATIL  MG2',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '86368',
    price: 18000,
    stock: 18,
    image: 'assets/products/tecnologia/3/parlante-portatil-mg2.jpg',
    description: 'BAFLE ECONOMICO\n\nParlante portátil\n\nMedidas aproximadas del producto: 13 x 8 cm.\n\nIncluye cable USB de carga.\n\nConexión: bluetooth / USB / Micro SD.\n\nCompatible con todos los dispositivos.\n\nColor: rojo y negro'
  },
  {
    id: 'tecno-parlante-portatil-ajustable-kms-299',
    name: 'PARLANTE PORTATIL AJUSTABLE KMS-299',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '45527',
    price: 59800,
    stock: 5,
    image: 'assets/products/tecnologia/3/parlante-portatil-ajustable-kms-299.jpg',
    description: '¡Lleva tu música a todas partes! Este parlante portátil se ajusta perfecto a tu bici, moto o donde quieras. Sonido potente y diseño moderno. ¿Listo para revolucionar tus aventuras? ¡Descubre más!\n\nEl altavoz portátil KIMISO (modelo KMS-299) cuenta con soporte integrado para montaje en manubrio de bicicleta o motocicleta, controles frontales integrados de encendido, modo y volumen en color naranja, acabado exterior en malla textil resistente y radiador pasivo lateral para bajos.'
  },
  {
    id: 'tecno-parlante-portatil-original-kimiso-kms-323',
    name: 'PARLANTE PORTATIL ORIGINAL KIMISO KMS-323',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '74019',
    price: 176000,
    stock: 9,
    image: 'assets/products/tecnologia/3/parlante-portatil-original-kimiso-kms-323.jpg',
    description: '¡Prepárate para una explosión de sonido! El PARLANTE PORTATIL ORIGINAL KIMISO KMS-323 te ofrece **potencia inigualable y luces LED vibrantes** para llevar tu música a donde vayas. ¿Listo para sentir el ritmo en cada momento? ¡Descúbrelo!\n\nEl altavoz portátil KIMISO (modelo KMS-323) cuenta con iluminación LED RGB en la base frontal y en los radiadores pasivos laterales, botones de control de gran tamaño, asa superior integrada para transporte cómodo y cuerpo recubierto en malla textil de alta resistencia.'
  },
  {
    id: 'tecno-parlante-portatil-original-kimiso-kms-325-max',
    name: 'PARLANTE PORTATIL ORIGINAL KIMISO KMS-325 Max',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '27531',
    price: 398000,
    stock: 10,
    image: 'assets/products/tecnologia/3/parlante-portatil-original-kimiso-kms-325-max.jpg',
    description: '¡Imagina el sonido que te hará vibrar! El Parlante Portátil KIMISO KMS-325 Max te trae 120W de potencia con Extra Bass, resistencia al agua IPX6 y luces LED RGB. ¡Llévate la fiesta a donde vayas y vive tu música a otro nivel!\n\nEl altavoz portátil KIMISO (modelo KMS-325 Max) ofrece una potencia pico de 120W con tecnología Extra Bass, batería de 8000 mAh (3.7V), certificación IPX6 de resistencia al agua, iluminación RGB LED y correa para transporte al hombro, junto con múltiples opciones de conectividad.'
  },
  {
    id: 'tecno-parlante-portatil-original-kimiso-kms-374',
    name: 'PARLANTE PORTATIL ORIGINAL KIMISO KMS-374',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '10143',
    price: 270000,
    stock: 10,
    image: 'assets/products/tecnologia/3/parlante-portatil-original-kimiso-kms-374.jpg',
    gallery: [
      'assets/products/tecnologia/3/parlante-portatil-original-kimiso-kms-374-1.jpg'
    ],
    description: '**¿Listo para llevar tu música a otro nivel?** Descubre el PARLANTE PORTÁTIL ORIGINAL KIMISO KMS-374. Sonido potente, batería de larga duración y resistencia a salpicaduras. ¡La fiesta donde quieras, cuando quieras! ¡No te quedes sin el tuyo!\n\nEl altavoz portátil KIMISO Bass Speaker (modelo KMS-374) cuenta con una potencia de 30W Extra Bass, certificación IPX6 de resistencia al agua, iluminación LED RGB en los laterales y una robusta asa de transporte superior, además de múltiples opciones de conexión como tarjeta Micro SD, entrada auxiliar y puerto USB.'
  },
  {
    id: 'tecno-porta-celular-x1-unidad',
    name: 'PORTA CELULAR X1 UNIDAD',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '53707',
    price: 5000,
    stock: 22,
    image: 'assets/products/tecnologia/3/porta-celular-x1-unidad.jpg',
    description: 'COLORES AL AZAR'
  },
  {
    id: 'tecno-power-bank-10-000-mah-original',
    name: 'POWER BANK 10.000 MAH ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '85051',
    price: 59000,
    stock: 3,
    image: 'assets/products/tecnologia/3/power-bank-10-000-mah-original.jpg',
    gallery: [
      'assets/products/tecnologia/3/power-bank-10-000-mah-original-1.jpg',
      'assets/products/tecnologia/3/power-bank-10-000-mah-original-2.jpg',
      'assets/products/tecnologia/3/power-bank-10-000-mah-original-3.jpg',
      'assets/products/tecnologia/3/power-bank-10-000-mah-original-4.jpg'
    ],
    description: '- Capacidad: 10000 mAh\n\n- Tipo de batería: Batería de polímero de litio\n\n- Material: PC+ABS, grado V0\n\n- Entrada (Tipo-C): CC 5V-2.4A\n\n- Protección: Sobrecarga, protección contra cortocircuitos, sobrecarga\n\n- Salida (USB): DC5V-2.1A\n\n- Función: Pantalla digital LED de 12 W, carga rápida'
  },
  {
    id: 'tecno-power-bank-22-5w-yookie-original',
    name: 'POWER BANK 22.5W YOOKIE ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '59765',
    price: 173200,
    salePrice: 93500,
    stock: 10,
    image: 'assets/products/tecnologia/3/power-bank-22-5w-yookie-original.jpg',
    gallery: [
      'assets/products/tecnologia/3/power-bank-22-5w-yookie-original-1.jpg',
      'assets/products/tecnologia/3/power-bank-22-5w-yookie-original-2.jpg'
    ],
    description: '¡Despídete de la batería baja! Con el POWER BANK YOOKIE ORIGINAL 22.5W, tus dispositivos estarán cargados al instante. Carga rápida, diseño elegante y la tranquilidad de tener energía siempre contigo. ¡No te quedes sin la tuya!\n\n1 AÑO GARANTIA'
  },
  {
    id: 'tecno-power-bank-30-000-mah-original-potente',
    name: 'POWER BANK 30.000 MAH ORIGINAL POTENTE',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '57077',
    price: 200500,
    salePrice: 162400,
    stock: 8,
    image: 'assets/products/tecnologia/3/power-bank-30-000-mah-original-potente.jpg',
    gallery: [
      'assets/products/tecnologia/3/power-bank-30-000-mah-original-potente-1.jpg',
      'assets/products/tecnologia/3/power-bank-30-000-mah-original-potente-2.jpg',
      'assets/products/tecnologia/3/power-bank-30-000-mah-original-potente-3.jpg'
    ],
    description: 'MARCA 100% ORIGINAL RECOMENDADA\n\nBatería externa\n\n* Capacidad: 30000 mAh\n\n* Entrada Micro: 5 V = 2 A, 9 V = 2 A, 12 V = 1,5 A\n\n* Entrada Tipo C: 5 V = 2 A, 9 V = 2 A, 12 V = 1,5 A\n\n* Salida Tipo C: 5 V = 2,2 A, 9 V = 2 A, 12 V = 1,6 A\n\n* Salida USB: 4,5 V = 5 A, 5 V = 3 A, 9 V = 2 A, 12 V = 1,5 A'
  },
  {
    id: 'tecno-power-bank-magnetico-10-000-mah-yo11',
    name: 'POWER BANK MAGNETICO 10.000 MAH YO11',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '52337',
    price: 132000,
    stock: 8,
    image: 'assets/products/tecnologia/3/power-bank-magnetico-10-000-mah-yo11.jpg',
    gallery: [
      'assets/products/tecnologia/3/power-bank-magnetico-10-000-mah-yo11-1.jpg',
      'assets/products/tecnologia/3/power-bank-magnetico-10-000-mah-yo11-2.jpg'
    ],
    description: '¡Libera tus dispositivos con el poder magnético! Este Power Bank de 10.000 mAh se adhiere a tu teléfono para una carga inalámbrica instantánea y sin cables. Olvídate de los enredos y disfruta de la máxima conveniencia. ¡Carga potente, diseño revolucionario!\n\n🔋 BATERÍA EXTERNA MAGNÉTICA YOOKIE YO111\n\nCarga tu celular donde quieras, sin cables y con total comodidad. ⚡📱\n\n✅ 5000mAh\n\n✅ Carga inalámbrica de 15W\n\n✅ Carga rápida Tipo-C de 22.5W\n\n✅ Fuerte imán magnético\n\n✅ Soporte integrado para usar el celular mientras carga\n\n🔥 Compacta, potente y perfecta para llevar a todas partes.'
  },
  {
    id: 'tecno-proyector-con-juegos-y-controles-h300-max',
    name: 'PROYECTOR CON JUEGOS Y CONTROLES H300 MAX',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '79623',
    price: 338000,
    stock: 0,
    image: 'assets/products/tecnologia/3/proyector-con-juegos-y-controles-h300-max.jpg',
    description: 'PROYECTOR DE VIDEO CON CONSOLA DE JUEGOS Y CONTROLES\n\n-Consola de juegos portátil y versátil\n\n-Permite a los usuarios disfrutar de sus juegos favoritos en una pantalla grande\n\n-64GB de memoria\n\n- Smart Home apps\n\n- 2 Controles inalambricos\n\n- Equipado con sistema Android 11.0 y sistema wifi6 2.4g\n\n-Admite decodificación Full HD 1080P\n\n-Compatible con teléfonos Android\n\n-Con función Bluetooth, puede conectarse con altavoces Bluetooth.\n\n-Medidas: 16.5 x 9.2 x 19 cm\n\n-Parlante incorporado\n\n-Amplia compatibilidad de formatos.\n\n-Conexion WiFi\n\n-Calidad y practicidad\n\n-Permite descargar, usar sus aplicaciones y juegos favoritos directamente en el proyector.\n\n-Ofrece una imagen nítida y vibrante con brillo y contraste.\n\n-Proyección flexible de 180 con corrección automática de distorsión.\n\n-Permite proyectar sobre cualquier superficie plana, incluso el techo.\n\n-Lúmenes: 8000 lúmenes\n\n- Voltaje: 110V\n\n- Material: Plástico'
  },
  {
    id: 'tecno-proyector-de-luz-nocturna',
    name: 'PROYECTOR DE LUZ NOCTURNA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '13992',
    price: 35000,
    stock: 1,
    image: 'assets/products/tecnologia/3/proyector-de-luz-nocturna.jpg',
    description: '• Lámpara puede proyectar el patrón de las olas\n\n• Variedad de colores brillantes, como azul, verde, etc.\n\n• Efecto de cielo estelar al proyectar estrellas\n\n• Fuente de luz LED, es una fuente de luz segura\n\n• Para decorar dormitorios, salas de estar y otros espacios'
  },
  {
    id: 'tecno-proyector-hy300',
    name: 'PROYECTOR HY300',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '19848',
    price: 343600,
    salePrice: 213000,
    stock: 4,
    image: 'assets/products/tecnologia/3/proyector-hy300.jpg',
    description: 'INCLUYE XUPER TV\n\nPROYECTOR HY300 PRO CON ANDROID 11, IDEAL PARA VER PELÍCULAS, SERIES, VIDEOS Y REALIZAR PRESENTACIONES. CUENTA CON 8GB DE ROM, 1GB DE RAM, WIFI 2.4G/5G, BLUETOOTH 5.0, ENTRADAS HDMI Y USB, CONTROL REMOTO Y BOCINA INCORPORADA.\n\nOFRECE RESOLUCIÓN NATIVA 1280X720P, 120 LÚMENES ANSI, ENFOQUE MANUAL Y PROYECCIÓN DE 40 A 130 PULGADAS. SU DISEÑO COMPACTO Y PORTÁTIL PERMITE LLEVARLO FÁCILMENTE A CUALQUIER LUGAR.'
  },
  {
    id: 'tecno-reloj-en-combo-x9',
    name: 'RELOJ EN COMBO X9',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '13531',
    price: 99800,
    stock: 3,
    image: 'assets/products/tecnologia/3/reloj-en-combo-x9.jpg',
    description: 'Lleva todo en un solo paquete con el X9 Unique Combination: smartwatch, audífonos inalámbricos, correas intercambiables, cargador y accesorios incluidos. Su diseño moderno en blanco y naranja lo hace ideal para uso diario, deporte y estilo personal. Una opción práctica y completa para quienes quieren tecnología, conectividad y buena presentación en un solo producto.'
  },
  {
    id: 'tecno-reloj-inteligente-audifonos',
    name: 'RELOJ INTELIGENTE + AUDIFONOS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '16989',
    price: 79800,
    stock: 1,
    image: 'assets/products/tecnologia/3/reloj-inteligente-audifonos.jpg',
    gallery: [
      'assets/products/tecnologia/3/reloj-inteligente-audifonos-1.jpg'
    ],
    description: 'D100 + Audífonos Inalámbricos\n\nReloj Inteligente D100 + Audífonos Inalámbricos\n\nCaja de titanio 49mm\n\nPantalla AMOLED de alta definición\n\nIncluye 2 correas intercambiables\n\nConexión estable y rápida Diseño moderno y elegante'
  },
  {
    id: 'tecno-reloj-parlante-rgb',
    name: 'RELOJ PARLANTE RGB',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '64694',
    price: 30200,
    salePrice: 24200,
    stock: 7,
    image: 'assets/products/tecnologia/3/reloj-parlante-rgb.jpg',
    description: 'Nuevo Reloj Lámpara Speaker G63\n\nDisfruta en un solo producto una lámpara moderna, reloj despertador, altavoz Bluetooth, luz RGB y cargador inalámbrico de 15W.\n\nLa G Speaker G63 es ideal para tu habitación, escritorio, sala u oficina. Su diseño elegante y multifuncional te permite crear un ambiente más cómodo, relajante y moderno.\n\nCuenta con iluminación RGB de múltiples colores y modos de luz para adaptarse a cualquier espacio. Puedes usarla como luz ambiental, lámpara decorativa o acompañante para tus momentos de descanso.\n\nAdemás, incluye altavoz Bluetooth para escuchar tu música favorita, sonidos relajantes para dormir mejor y función de simulación de amanecer para despertar de una forma más natural.\n\nTambién funciona como cargador inalámbrico por inducción, permitiéndote cargar tu celular de manera práctica mientras descansas o trabajas.\n\nCaracterísticas principales:\n\nAltura de la pantalla6,38 PulgadasReloj digital moderno\n\nLámpara LED RGB\n\nAltavoz Bluetooth integrado\n\nCargador inalámbrico de 15W\n\nSonidos naturales para relajación\n\nSimulador de amanecer\n\nMúltiples modos de iluminación\n\nDiseño elegante y decorativo\n\nUna opción perfecta para quienes buscan comodidad, tecnología y estilo en un solo dispositivo.'
  },
  {
    id: 'tecno-repetidor-de-wifi-wr03t',
    name: 'REPETIDOR DE WIFI WR03T',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '86688',
    price: 46800,
    stock: 6,
    image: 'assets/products/tecnologia/4/repetidor-de-wifi-wr03t.jpg',
    description: 'Mejora la señal de internet en tu hogar u oficina con este Repetidor WiFi Inalámbrico-N. Amplía la cobertura de tu red, ayuda a reducir zonas con señal débil y permite conectar equipos por WiFi o puerto LAN. Su botón WPS facilita la configuración y su diseño compacto se adapta a cualquier espacio. Ideal para habitaciones, salas, oficinas y puntos alejados del router.'
  },
  {
    id: 'tecno-robot-despertador-reloj',
    name: 'ROBOT DESPERTADOR RELOJ',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '38072',
    price: 126000,
    stock: 4,
    image: 'assets/products/tecnologia/4/robot-despertador-reloj.jpg',
    gallery: [
      'assets/products/tecnologia/4/robot-despertador-reloj-1.jpg',
      'assets/products/tecnologia/4/robot-despertador-reloj-2.jpg'
    ],
    description: 'Este lindo robot tiene múltiples funciones. Primero reloj y también despertador que puede configurar fácilmente 2 alarmas para recordárselo a usted o a sus hijos. Y cuando la alarma se apaga, las luces se mueven al ritmo con la música de la alarma.\n\nAdemás, no es solo un despertador, sino también una maravillosa luz nocturna. Tiene cuatro colores opcionales o luz nocturna degradada.\n\nTambién tiene un mini altavoz Bluetooth. Y la luz se puede configurar para moverse al ritmo de la música. Capacidad de altavoz Bluetooth con sonido de nivel HIFI: simplemente conecte su teléfono inteligente al "TS-002" a través de Bluetooth para disfrutar de la música.\n\nEl producto también viene con una batería de botón. Asegura que la hora no sea incorrecta cuando el despertador esté apagado. Tenga en cuenta que esta batería de celda solo funciona por el tiempo y no incluye la pantalla de visualización, lo que significa que la pantalla de visualización no se muestra una vez que se desconecta la energía. También tiene un puerto de salida USB, etc.\n\nEspecificaciones:\n\nMateriales: plástico ABS\n\nColor blanco\n\nColor de luz LED: blanco, blanco cálido, RGB\n\nModos de iluminación: fijo, fijo, atenuado, flash\n\nTamaño del producto: 13 x13,3 x14,6 cm\n\nVoltaje de funcionamiento: DC5V/2A\n\nPotencia: 5W\n\nRecargable'
  },
  {
    id: 'tecno-set-de-labubu',
    name: 'SET DE LABUBU',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '98629',
    price: 54000,
    stock: 5,
    image: 'assets/products/tecnologia/4/set-de-labubu.jpg',
    description: 'Auriculares, y Llavero\n\nVIENE ROSA O MORADO\n\nDescubrí la combinación perfecta para tu día a día con este exclusivo Set de Labubu. Ideal para quienes buscan tecnología, estilo y funcionalidad en un solo paquete.\n\n-\n\nAuriculares Labubu: Disfrutá de un sonido nítido y envolvente con estos auriculares diseñados para ofrecer comodidad y calidad en cada uso. Perfectos para escuchar música, atender llamadas o acompañarte en tus actividades diarias.\n\n-\n\nLlavero funcional: Complementa tu set con un llavero práctico y moderno, pensado para que lleves tus llaves siempre a mano con un diseño atractivo y resistente.\n\nEste set es una excelente opción para regalar o para equiparte con tecnología de calidad y diseño moderno. Además, su fabricación pensada para el público argentino asegura durabilidad y buen rendimiento en cualquier situación.\n\nCaracterísticas principales: - Compatibilidad y fácil conexión Bluetooth. - Diseño ergonómico y liviano. - Funciones inteligentes para optimizar tu rutina diaria. - Materiales resistentes y acabados de alta calidad.\n\nNo te pierdas la oportunidad de tener todo lo que necesitás en un solo set. ¡Ideal para uso personal o como un regalo especial!\n\n*vienen colores al azar*'
  },
  {
    id: 'tecno-set-de-stitch',
    name: 'SET DE STITCH',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '88025',
    price: 63500,
    salePrice: 38100,
    stock: 16,
    image: 'assets/products/tecnologia/4/set-de-stitch.jpg',
    description: 'Auriculares, Reloj Smartwatch y Llavero\n\nDescubrí la combinación perfecta para tu día a día con este exclusivo Set de SET DE STITCH . Ideal para quienes buscan tecnología, estilo y funcionalidad en un solo paquete.\n\nAuriculares Labubu: Disfrutá de un sonido nítido y envolvente con estos auriculares diseñados para ofrecer comodidad y calidad en cada uso. Perfectos para escuchar música, atender llamadas o acompañarte en tus actividades diarias.\n\nReloj DIGITAL BASICO\n\nLlavero funcional: Complementa tu set con un llavero práctico y moderno, pensado para que lleves tus llaves siempre a mano con un diseño atractivo y resistente.\n\nEste set es una excelente opción para regalar o para equiparte con tecnología de calidad y diseño moderno. Además, su fabricación pensada para el público argentino asegura durabilidad y buen rendimiento en cualquier situación.\n\nCaracterísticas principales: - Compatibilidad y fácil conexión Bluetooth. - Diseño ergonómico y liviano. - Funciones inteligentes para optimizar tu rutina diaria. - Materiales resistentes y acabados de alta calidad.\n\nNo te pierdas la oportunidad de tener todo lo que necesitás en un solo set. ¡Ideal para uso personal o como un regalo especial!\n\n*vienen colores al azar*'
  },
  {
    id: 'tecno-smart-wacht-gus-16',
    name: 'SMART WACHT GUS-16',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '87686',
    price: 59800,
    stock: 2,
    image: 'assets/products/tecnologia/4/smart-wacht-gus-16.jpg',
    description: '¡Descubre el futuro en tu muñeca! El SMART WACHT GUS-16 te ofrece una pantalla infinita de 1.99" y carga inalámbrica. Estilo y tecnología que te dejarán sin aliento. ¿Listo para la próxima generación?\n\nFunción Contestar llamadas, Cargador magnético, Material aleación de zinc, Control de presión arterial + 2 pulso. Compatible con Android y iphone'
  },
  {
    id: 'tecno-smart-watch-audifonos-d200-ultra',
    name: 'SMART WATCH + AUDIFONOS D200 ULTRA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '89078',
    price: 100900,
    salePrice: 67600,
    stock: 2,
    image: 'assets/products/tecnologia/4/smart-watch-audifonos-d200-ultra.jpg',
    description: 'Smart Watch D200 Ultra 2 es un combo completo y moderno: incluye reloj inteligente, audífonos inalámbricos y varias correas intercambiables para combinar con tu estilo.\n\nIdeal para llamadas, música, notificaciones, deporte y uso diario. Una excelente opción para quienes buscan tecnología, practicidad y variedad en un solo kit.'
  },
  {
    id: 'tecno-smart-watch-audifonos-i20',
    name: 'SMART WATCH + AUDIFONOS I20',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '56926',
    price: 95900,
    salePrice: 81500,
    stock: 11,
    image: 'assets/products/tecnologia/4/smart-watch-audifonos-i20.jpg',
    description: 'Smart Watch i20 Ultra Max Suit es un kit completo y práctico: incluye reloj inteligente, audífonos, cargador y varias correas para cambiar de estilo cuando quieras.\n\nIdeal para llamadas, notificaciones, música, deporte y uso diario. Todo en una sola presentación, moderno, funcional y perfecto para regalar o revender.'
  },
  {
    id: 'tecno-smart-watch-gamebox-correa-pro-hot-5',
    name: 'SMART WATCH + GAMEBOX + CORREA PRO HOT-5',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '28526',
    price: 128000,
    stock: 1,
    image: 'assets/products/tecnologia/4/smart-watch-gamebox-correa-pro-hot-5.jpg',
    description: 'COMBO PERFECTO'
  },
  {
    id: 'tecno-smart-watch-10pro-original',
    name: 'SMART WATCH 10PRO ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '58587',
    price: 52000,
    stock: 6,
    image: 'assets/products/tecnologia/4/smart-watch-10pro-original.jpg',
    gallery: [
      'assets/products/tecnologia/4/smart-watch-10pro-original-1.jpg',
      'assets/products/tecnologia/4/smart-watch-10pro-original-2.jpg'
    ],
    description: '100% ORIGINAL\n\nINCLUYE TODO LO DE LA IMAGEN'
  },
  {
    id: 'tecno-smart-watch-big-3',
    name: 'SMART WATCH BIG 3',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '18486',
    price: 69800,
    stock: 2,
    image: 'assets/products/tecnologia/4/smart-watch-big-3.jpg',
    description: 'Smartwatch Ultra Big 3, un reloj moderno y multifuncional con pantalla amplia de 2.01”. Incluye 7 correas intercambiables para combinar con cualquier estilo, además de cargador y accesorios. Ideal para uso diario, deporte y looks casuales o elegantes.'
  },
  {
    id: 'tecno-smart-watch-fit-economico-fd68',
    name: 'SMART WATCH FIT ECONOMICO FD68',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '27082',
    price: 27000,
    stock: 16,
    image: 'assets/products/tecnologia/4/smart-watch-fit-economico-fd68.jpg',
    description: 'SMAR WACHT FIT\n\nNO RESISTENTE AL AGUA'
  },
  {
    id: 'tecno-smart-watch-lg88-pro',
    name: 'SMART WATCH LG88 PRO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '19202',
    price: 118000,
    stock: 2,
    image: 'assets/products/tecnologia/4/smart-watch-lg88-pro.jpg',
    description: '**SMART WATCH LG88 PRO:** ¡Eleva tu estilo y tu conexión! Descubre la combinación perfecta de tecnología avanzada y diseño sofisticado. Con correas personalizables y un look premium, este smartwatch se adapta a ti. ¿Listo para experimentar el futuro en tu muñeca?'
  },
  {
    id: 'tecno-smart-watch-original-pro-a4',
    name: 'SMART WATCH ORIGINAL PRO A4',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '90812',
    price: 74000,
    stock: 6,
    image: 'assets/products/tecnologia/4/smart-watch-original-pro-a4.jpg',
    gallery: [
      'assets/products/tecnologia/4/smart-watch-original-pro-a4-1.jpg',
      'assets/products/tecnologia/4/smart-watch-original-pro-a4-2.jpg'
    ],
    description: '100% ORIGINAL!\n\nINCLUYE TODO LO DE LA IMAGEN'
  },
  {
    id: 'tecno-smart-watch-s11-kz-w42',
    name: 'SMART WATCH S11 KZ-W42',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '33413',
    price: 94300,
    salePrice: 75400,
    stock: 4,
    image: 'assets/products/tecnologia/4/smart-watch-s11-kz-w42.jpg',
    description: 'Smartwatch con diseño moderno y funciones avanzadas para el día a día. Cuenta con llamadas Bluetooth, modo deportivo, carga inalámbrica y monitoreo inteligente. Incluye 7 correas para combinar con cualquier estilo.\n\nTecnología, elegancia y versatilidad en un solo producto.'
  },
  {
    id: 'tecno-smart-watch-s9-mini-amoled',
    name: 'SMART WATCH S9 MINI AMOLED',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '53573',
    price: 100900,
    salePrice: 51500,
    stock: 9,
    image: 'assets/products/tecnologia/4/smart-watch-s9-mini-amoled.jpg',
    description: '**¡Descubre el poder en tu muñeca!** El SMART WATCH S9 MINI AMOLED redefine la elegancia y la tecnología. Su pantalla vibrante y diseño compacto esconden funciones increíbles. ¿Listo para vivir tu vida al máximo? ¡Pregunta cómo!'
  },
  {
    id: 'tecno-smart-watch-zt-36s-plus',
    name: 'SMART WATCH ZT-36S PLUS',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '51059',
    price: 119800,
    stock: 3,
    image: 'assets/products/tecnologia/4/smart-watch-zt-36s-plus.jpg',
    description: 'GAFAS BLUETOOTH INCLUIDAS Smartwatch ZT-36S Plus: el set premium que lo tiene todo. Incluye reloj multifunción y 7 correas intercambiables para combinar con tu estilo en cualquier ocasión, además de accesorios adicionales como gafas. Ideal para quienes buscan tecnología, versatilidad y estilo en un solo paquete.'
  },
  {
    id: 'tecno-smartwacht-serie-11-mini',
    name: 'SMARTWACHT SERIE 11 MINI',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '13859',
    price: 102600,
    salePrice: 82100,
    stock: 7,
    image: 'assets/products/tecnologia/4/smartwacht-serie-11-mini.jpg',
    description: 'Función Contestar Ilamadas, Cargador magnético, Material aleación de zinc,\n\nControl de presión arterial + 2 pulso. Compatible con Android y iphone'
  },
  {
    id: 'tecno-smartwacht-ultra-3-8-correas-economico',
    name: 'SMARTWACHT ULTRA 3 8 CORREAS ECONOMICO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '34260',
    price: 62500,
    stock: 1,
    image: 'assets/products/tecnologia/4/smartwacht-ultra-3-8-correas-economico.jpg',
    description: 'Lleva estilo, tecnología y comodidad en un solo reloj. El LAXASFIT Ultra 3 de 49mm cuenta con pantalla grande 2.01, llamadas inalámbricas, corona giratoria, botón funcional y 8 correas intercambiables para combinarlo con cualquier ocasión. Ideal para uso diario, deporte y trabajo. Un smartwatch completo, moderno y versátil al mejor precio.'
  },
  {
    id: 'tecno-smartwacht-ultra-combo-pro',
    name: 'SMARTWACHT ULTRA COMBO PRO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '35449',
    price: 70000,
    stock: 4,
    image: 'assets/products/tecnologia/4/smartwacht-ultra-combo-pro.jpg',
    description: '¡Eleva tu estilo y tu rendimiento! Descubre el **SMART WATCH ULTRA COMBO PRO**. Monitoriza tu salud, conecta tus llamadas y disfruta de tu música, todo en un solo dispositivo elegante y funcional. ¡La tecnología y el diseño que necesitas para conquistar tu día!'
  },
  {
    id: 'tecno-soporte-astronauta-celular',
    name: 'SOPORTE ASTRONAUTA CELULAR',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '30179',
    price: 23400,
    stock: 10,
    image: 'assets/products/tecnologia/4/soporte-astronauta-celular.jpg',
    description: 'Características:\n\n• Diseño único en forma de astronauta, ideal para decorar y dar un toque divertido a tu escritorio.\n\n• Soporte universal para teléfonos móviles, compatible con la mayoría de modelos.\n\n• Base estable y resistente que asegura un soporte firme.\n\n• Material ABS resistente.'
  },
  {
    id: 'tecno-soporte-celular-hold-371',
    name: 'SOPORTE CELULAR HOLD-371',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '92957',
    price: 13300,
    salePrice: 10000,
    stock: 9,
    image: 'assets/products/tecnologia/4/soporte-celular-hold-371.jpg',
    description: '¡El oso más tierno ahora sostiene tu celular! Dale un toque divertido a tu espacio con el SOPORTE CELULAR HOLD-371. Olvídate de los soportes aburridos y haz que tus videos y videollamadas sean adorables. ¡Te encantará!\n\nCaracterísticas: • Soporte de escritorio con forma de oso para sostener celular o tablet en posición horizontal. • Plástico rígido (tipo PVC/ABS) con acabado texturizado; base estable para escritorio. • Funciona con la mayoría de smartphones y tablets pequeñas/medianas.'
  },
  {
    id: 'tecno-soporte-celular-hold-439',
    name: 'SOPORTE CELULAR HOLD-439',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '30164',
    price: 9400,
    stock: 13,
    image: 'assets/products/tecnologia/4/soporte-celular-hold-439.jpg',
    description: '¡Tu celular merece un guardián adorable! El SOPORTE CELULAR HOLD-439, con su diseño de lobito juguetón, no solo asegura tu dispositivo, sino que añade un toque de ternura a tu espacio. ¡Descubre cómo puede transformar tu experiencia!'
  },
  {
    id: 'tecno-soporte-celular-speed-holder-hold-435',
    name: 'SOPORTE CELULAR SPEED HOLDER HOLD-435',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '85745',
    price: 43800,
    salePrice: 39400,
    stock: 0,
    image: 'assets/products/tecnologia/4/soporte-celular-speed-holder-hold-435.jpg',
    description: 'Características:\n\n• Ventosa con gel adhesivo de alta sujeción.\n\n• Diseño multifunción y multiposición (ajuste de ángulo).\n\n• Brazo extendible.\n\n• Soporte tipo pinza con agarre firme para el teléfono.\n\n• Material de ABS'
  },
  {
    id: 'tecno-soporte-diadema-acero',
    name: 'SOPORTE DIADEMA ACERO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '97159',
    price: 29900,
    stock: 1,
    image: 'assets/products/tecnologia/4/soporte-diadema-acero.jpg',
    description: 'MARCA 100% ORIGINAL'
  },
  {
    id: 'tecno-soporte-giratorio-para-tablet',
    name: 'SOPORTE GIRATORIO PARA TABLET',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '80259',
    price: 43700,
    salePrice: 33600,
    stock: 3,
    image: 'assets/products/tecnologia/4/soporte-giratorio-para-tablet.jpg',
    description: ''
  },
  {
    id: 'tecno-soporte-go-pro-hy-27',
    name: 'SOPORTE GO-PRO HY-27',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '10248',
    price: 19400,
    salePrice: 16300,
    stock: 6,
    image: 'assets/products/tecnologia/4/soporte-go-pro-hy-27.jpg',
    description: ''
  },
  {
    id: 'tecno-soporte-go-pro-hy34',
    name: 'SOPORTE GO-PRO HY34',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '98798',
    price: 42700,
    salePrice: 24800,
    stock: 3,
    image: 'assets/products/tecnologia/4/soporte-go-pro-hy34.jpg',
    description: ''
  },
  {
    id: 'tecno-soporte-microfono-de-solapa',
    name: 'SOPORTE MICROFONO DE SOLAPA',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '88105',
    price: 39000,
    stock: 1,
    image: 'assets/products/tecnologia/4/soporte-microfono-de-solapa.jpg',
    description: '• Adaptador para micrófono de solapa, conviértelo en micrófono de mano fácilmente.\n\n• Incluye espuma antiviento, reduce ruidos y mejora la calidad del audio.\n\n• Diseño ligero y ergonómico, cómodo para entrevistas y presentaciones.\n\n• Compatibilidad universal, apto para micrófonos inalámbricos.'
  },
  {
    id: 'tecno-soporte-para-carro-hold-372',
    name: 'SOPORTE PARA CARRO HOLD-372',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '90692',
    price: 47400,
    stock: 3,
    image: 'assets/products/tecnologia/4/soporte-para-carro-hold-372.jpg',
    description: '¡Adiós al desorden! Con el HOLD-372, tu celular y bebida estarán siempre seguros y a mano. Gira 360° para una visibilidad perfecta y disfruta de la ruta sin preocupaciones. ¡Instalación en segundos! ¿Listo para una experiencia de manejo superior?'
  },
  {
    id: 'tecno-soporte-para-carro-vaso-bandeja-y-celular',
    name: 'SOPORTE PARA CARRO VASO BANDEJA Y CELULAR',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '16524',
    price: 45000,
    stock: 3,
    image: 'assets/products/tecnologia/4/soporte-para-carro-vaso-bandeja-y-celular.jpg',
    description: '¡Transforma tu coche en tu oasis de comodidad! Con este soporte, disfruta de tus comidas y ten tu celular a la mano. ¡Viajes más placenteros y organizados te esperan! ¿Listo para llevar tu experiencia al siguiente nivel?'
  },
  {
    id: 'tecno-soporte-para-moto',
    name: 'SOPORTE PARA MOTO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '92075',
    price: 26400,
    stock: 6,
    image: 'assets/products/tecnologia/4/soporte-para-moto.jpg',
    description: 'RESISTENTE AL AGUA'
  },
  {
    id: 'tecno-soporte-para-tablet-y-celular-hold-356',
    name: 'SOPORTE PARA TABLET Y CELULAR HOLD-356',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '90757',
    price: 52900,
    salePrice: 44400,
    stock: 4,
    image: 'assets/products/tecnologia/4/soporte-para-tablet-y-celular-hold-356.jpg',
    description: 'Características:\n\n• Estructura en acero/metal con piezas ABS y gomas antideslizantes.\n\n• Brazo con resortes dobles que sostiene el peso sin caerse ni “bailar”.\n\n• Rotación 360°.\n\n• Soporte extensible 12-18 cm.'
  },
  {
    id: 'tecno-soporte-para-volante-hold-041',
    name: 'SOPORTE PARA VOLANTE  HOLD-041',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '37922',
    price: 4600,
    salePrice: 2600,
    stock: 0,
    image: 'assets/products/tecnologia/4/soporte-para-volante-hold-041.jpg',
    description: ''
  },
  {
    id: 'tecno-soporte-portatil-para-celular-o-tablet-moderno',
    name: 'SOPORTE PORTATIL PARA CELULAR O TABLET MODERNO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '81353',
    price: 18400,
    stock: 1,
    image: 'assets/products/tecnologia/4/soporte-portatil-para-celular-o-tablet-moderno.jpg',
    gallery: [
      'assets/products/tecnologia/4/soporte-portatil-para-celular-o-tablet-moderno-1.jpg'
    ],
    description: '¡Libera tus manos con este soporte moderno y elegante! Perfectamente plegable, se adapta a tu celular o tablet para una experiencia visual sin igual. Descubre la comodidad y la portabilidad que transformarán tu día. ¿Listo para verlo todo con nueva perspectiva?'
  },
  {
    id: 'tecno-teclado-gamer',
    name: 'TECLADO GAMER',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '35660',
    price: 72000,
    stock: 6,
    image: 'assets/products/tecnologia/4/teclado-gamer.jpg',
    description: '¡Domina el juego con este teclado gamer de una mano! Sumérgete en la acción con su iluminación RGB vibrante y diseño ergonómico. Precisión y confort para victorias épicas. ¡Prepárate para la experiencia definitiva!'
  },
  {
    id: 'tecno-teclado-inalambrico-portatil-ultrafino',
    name: 'TECLADO INALAMBRICO PORTATIL ULTRAFINO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '77826',
    price: 79800,
    stock: 10,
    image: 'assets/products/tecnologia/4/teclado-inalambrico-portatil-ultrafino.jpg',
    gallery: [
      'assets/products/tecnologia/4/teclado-inalambrico-portatil-ultrafino-1.jpg'
    ],
    description: 'El teclado bluetooth ye07 de Yookie es un dispositivo inalámbrico ultradelgado y portátil, ideal para trabajar o estudiar desde cualquier lugar. Cuenta con teclas cómodas, funciones multimedia y conexión estable para usar con celulares, tabletas y computadoras.\n\n1 año garantia'
  },
  {
    id: 'tecno-teclado-inalambrico-tactil-yookie-ye36',
    name: 'TECLADO INALAMBRICO TACTIL YOOKIE YE36',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '95756',
    price: 119800,
    stock: 10,
    image: 'assets/products/tecnologia/4/teclado-inalambrico-tactil-yookie-ye36.jpg',
    gallery: [
      'assets/products/tecnologia/4/teclado-inalambrico-tactil-yookie-ye36-1.jpg',
      'assets/products/tecnologia/4/teclado-inalambrico-tactil-yookie-ye36-2.jpg'
    ],
    description: 'El teclado inalámbrico Yookie YE36 es ultra delgado, portátil y elegante, perfecto para trabajar o estudiar desde cualquier lugar. Cuenta con touchpad integrado, conexión Bluetooth estable, teclas silenciosas tipo tijera y un diseño compacto que lo hace ideal para tablets, iPad, celulares y computadores. Comodidad total en solo 7 mm de grosor.\n\n1 AÑO GARANTIA'
  },
  {
    id: 'tecno-teclado-tv-original',
    name: 'TECLADO TV ORIGINAL',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '74842',
    price: 50400,
    salePrice: 29200,
    stock: 5,
    image: 'assets/products/tecnologia/4/teclado-tv-original.jpg',
    description: 'Mini teclado mouse táctil Inalámbrico Iluminado Smart Tv Xbox Tablet. Cuenta con 92teclas, teclado inalámbrico con touchpad, teclas de control multimedia, reposo automático, diseño ergonómico. Batería recargable extraíble incorporada.'
  },
  {
    id: 'tecno-tripode-estabilizador-celular-ay49t',
    name: 'TRIPODE ESTABILIZADOR CELULAR AY49T',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '62675',
    price: 104400,
    salePrice: 78300,
    stock: 2,
    image: 'assets/products/tecnologia/4/tripode-estabilizador-celular-ay49t.jpg',
    description: 'Características:\n\n-\n\nSoporte Expandible hasta 55cm.\n\n-\n\nMicrófono Conexión por cable 3.5mm\n\n-\n\nLuz LED de 6500 K.\n\n-\n\nControl Bluetooth\n\n-\n\nEl montaje superior del gancho permite un montaje rápido del micrófono y la luz LED.'
  },
  {
    id: 'tecno-tv-box-contra-marcado',
    name: 'TV BOX CONTRA MARCADO',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '93092',
    price: 234600,
    salePrice: 157200,
    stock: 4,
    image: 'assets/products/tecnologia/4/tv-box-contra-marcado.jpg',
    description: '¡Transforma tu TV en una central de entretenimiento 4K HDR con un solo toque! Accede a tus apps favoritas al instante y navega con la voz. ¿Listo para el siguiente nivel de streaming? ¡No te quedes atrás!'
  },
  {
    id: 'tecno-tv-box-economico-stick-tv',
    name: 'TV BOX ECONOMICO STICK-TV',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '68979',
    price: 110000,
    stock: 0,
    image: 'assets/products/tecnologia/4/tv-box-economico-stick-tv.jpg',
    description: '¡Transforma tu TV en un centro de entretenimiento ilimitado! Accede a tus series y películas favoritas en alta definición con este increíble stick. Disfruta de velocidad y comodidad al mejor precio. ¡Tu maratón de series empieza ahora!'
  },
  {
    id: 'tecno-tv-box-model-3-8gb-128gb',
    name: 'TV BOX MODEL 3 8GB+128GB',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '18250',
    price: 139800,
    stock: 0,
    image: 'assets/products/tecnologia/4/tv-box-model-3-8gb-128gb.jpg',
    gallery: [
      'assets/products/tecnologia/4/tv-box-model-3-8gb-128gb-1.jpg'
    ],
    description: 'TV BOX POTENTE Y RAPIDO'
  },
  {
    id: 'tecno-ventilador-usb-led-fan-05',
    name: 'VENTILADOR USB LED FAN-05',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    extraCategories: ['hogar'],
    ref: '56943',
    price: 22300,
    stock: 5,
    image: 'assets/products/tecnologia/4/ventilador-usb-led-fan-05.jpg',
    description: 'Características:\n\n-\n\nLuz LED.\n\n-\n\nPotente viento y bajo ruido.\n\n-\n\n3 velocidades.\n\n-\n\nAngulo ajustable.'
  },
  {
    id: 'tecno-ym-300-rgb-led-ring-fill-light',
    name: 'YM-300 RGB LED RING FILL LIGHT',
    category: 'tecnologia',
    categoryLabel: 'Tecnología',
    ref: '32179',
    price: 92900,
    salePrice: 51100,
    stock: 9,
    image: 'assets/products/tecnologia/4/ym-300-rgb-led-ring-fill-light.jpg',
    gallery: [
      'assets/products/tecnologia/4/ym-300-rgb-led-ring-fill-light-1.jpg'
    ],
    description: 'La YM-300 RGB LED Ring Fill Light es la solución ideal para creadores de contenido, streamers, fotógrafos y videógrafos que buscan una iluminación profesional en un formato compacto y portátil.\n\nGracias a su tecnología RGB, podrás personalizar el ambiente con múltiples colores y ajustar la intensidad según tus necesidades, logrando resultados más atractivos y de alta calidad en cada toma.\n\nIncluye un práctico soporte para celular, permitiéndote grabar, hacer transmisiones en vivo o tomar fotografías con total comodidad. Además, su batería integrada ofrece más de 2 horas de uso continuo, perfecta para sesiones prolongadas sin interrupciones.'
  },

  /* ---------- Deporte ---------- */
  {
    id: 'deporte-agujas-para-balon-y-bicicleta-5pc-av-3087',
    name: 'AGUJAS PARA BALON Y BICICLETA 5PC AV-3087',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '97990',
    price: 6900,
    salePrice: 5000,
    stock: 0,
    image: 'assets/products/deporte/agujas-para-balon-y-bicicleta-5pc-av-3087.jpg',
    description: '¡Nunca más un balón desinflado! Con este set de 5 agujas universal, tendrás la presión perfecta en tus balones, bicicletas y más. ¡Máximo rendimiento y diversión garantizados al instante! ¡Prepárate para jugar sin límites!'
  },
  {
    id: 'deporte-balon-voleybol-caucho',
    name: 'BALON VOLEYBOL CAUCHO',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '89241',
    price: 4200,
    salePrice: 3200,
    stock: 23,
    image: 'assets/products/deporte/balon-voleybol-caucho.jpg',
    description: ''
  },
  {
    id: 'deporte-bolsa-impermeable-5l',
    name: 'BOLSA IMPERMEABLE 5L',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '66098',
    price: 40000,
    salePrice: 32800,
    stock: 3,
    image: 'assets/products/deporte/bolsa-impermeable-5l.jpg',
    gallery: [
      'assets/products/deporte/bolsa-impermeable-5l-1.jpg'
    ],
    description: 'DISEÑO LIGERO,COMPACTO Y ENROLLABLE\n\nCIERRE HERMATICO DE EBILLA PARA MAXIMA PROTECCION\n\nMATERIAL RESISTENET AL AGUA Y AL DESGARRO\n\nINCLUYE CORREA PARA LLEVAR AL HOMBRO\n\nIDEAL PARA ROPA, DISPOSITIVOS LLAVES Y MAS'
  },
  {
    id: 'deporte-camara-go-pro-hd-1080-sports',
    name: 'CAMARA GO PRO HD 1080 SPORTS',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '26775',
    price: 69800,
    stock: 5,
    image: 'assets/products/deporte/camara-go-pro-hd-1080-sports.jpg',
    description: '- La cámara de acción FHD más rentable. Caja impermeable - Buceo 98.4 ft 4K/24 grabación de cuadros\n\n- Pantalla de 2 pulgadas: tanto la operación como la vista previa son más convenientes. Paracaídas - Haz que sea posible suceder, Esquí- Pertenece a tu video\n\n- Montar - Graba el paisaje en el camino, Skate - Más allá de tu imaginación\n\n- La batería no está bien instalada. Después de un largo período de transporte, la batería puede estar suelta, por lo que habrá situaciones en las que el cliente no puede cargar la cámara y no puede usarla después de recibirla. El cliente puede intentar reinstalar la batería y presionarla con fuerza.\n\n- Esta cámara admite tarjetas de memoria dentro de 32 GB, y las tarjetas de memoria tipo U3 son las más adecuadas. Si la tarjeta de memoria no se puede leer, probablemente se deba a que la tarjeta de memoria no coincide. La tarjeta de memoria máxima admitida por esta cámara es una tarjeta de memoria de 32GB.\n\nTecnología del sensor ópticoCMOSTecnología de conexiónWi-FiColorNegroCaracterísticas del productoImpermeableNivel de resistencia al aguaA prueba de aguaEstabilización de imagenNoTipo de estabilización de imagenÓpticaFactor de formaDe manoDuración media de la batería/pila1,5 HorasEstándar Comunicación Inalámbrica2,4 GHz radiofrecuenciaNombre de estiloAcción/Deportivo/Compacto/ResistenteDimensiones del artículo (profundidad x ancho x alto)1,62"prof. x 16,14"an. x 1,62"al. pulgadasNúmero Pilas1 Iones de litio necesaria(s), incluida(s)'
  },
  {
    id: 'deporte-caminadora-electrica-fitness-plegable',
    name: 'CAMINADORA ELECTRICA FITNESS PLEGABLE',
    category: 'deporte',
    categoryLabel: 'Deporte',
    extraCategories: ['hogar'],
    ref: '72812',
    price: 1598000,
    stock: 9,
    image: 'assets/products/deporte/caminadora-electrica-fitness-plegable.jpg',
    gallery: [
      'assets/products/deporte/caminadora-electrica-fitness-plegable-1.jpg'
    ],
    description: '¡Transforma tu hogar en tu gimnasio personal! Entrena, quema calorías y mejora tu salud sin salir de casa. Descubre la comodidad de nuestra caminadora eléctrica plegable y empieza a sentir la diferencia hoy mismo. ¡Tu bienestar te espera!\n\nBanda Caminadora Trotadora Eléctrica Plegable 1 HP • Brazo ergonomico con pulsimetro y controles de respuesta rápida • monitor digital: velocidad, distancia, tiempo, calorías • inclinación 0-12% • autolubricacion • plegable • velocidad de 1 a 14 km/h • 1 caballo de fuerza *medida de la banda : 50 cm*125 cm'
  },
  {
    id: 'deporte-chaleco-maleta',
    name: 'CHALECO MALETA',
    category: 'deporte',
    categoryLabel: 'Deporte',
    extraCategories: ['hogar'],
    ref: '43218',
    price: 59800,
    stock: 3,
    image: 'assets/products/deporte/chaleco-maleta.jpg',
    description: '¡Libera tus manos con el Chaleco Maleta! Tu estilo y practicidad en un solo accesorio. Lleva todo lo esencial contigo de forma segura y con un look urbano irresistible. ¿Listo para la aventura?'
  },
  {
    id: 'deporte-cinturon-de-masaje-adelgazante',
    name: 'CINTURON DE MASAJE ADELGAZANTE',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '21146',
    price: 39800,
    stock: 4,
    image: 'assets/products/deporte/cinturon-de-masaje-adelgazante.jpg',
    description: 'Cinturón de masaje adelgazante recargable, ideal para usar en abdomen, cintura o zona lumbar. Ayuda a relajar los músculos con vibración profunda y cuenta con 6 modos de masaje para ajustar la intensidad según tu necesidad.\n\nEs práctico, cómodo y fácil de usar. Su material tipo cuero le da mayor resistencia, y al ser recargable por USB puedes llevarlo y usarlo en casa, oficina o viaje. Perfecto para quienes buscan relajación, comodidad y apoyo en su rutina diaria.'
  },
  {
    id: 'deporte-corrector-de-postura-unisex',
    name: 'CORRECTOR DE POSTURA UNISEX',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '42321',
    price: 19800,
    stock: 10,
    image: 'assets/products/deporte/corrector-de-postura-unisex.jpg',
    description: 'Corrige tu postura y alivia el dolor en minutos\n\nNuestro corrector de postura te ayuda a mantener la espalda recta, reducir molestias y mejorar tu figura de forma cómoda y discreta. Ideal para usar en casa, trabajo o ejercicio.\n\nAjustable\n\nLigero\n\nResultados visibles\n\n¡Cuida tu salud y luce una postura más segura y natural cada día!'
  },
  {
    id: 'deporte-corrector-electrico-de-postura-unisex',
    name: 'CORRECTOR ELECTRICO DE POSTURA UNISEX',
    category: 'deporte',
    categoryLabel: 'Deporte',
    extraCategories: ['hogar'],
    ref: '24857',
    price: 23000,
    stock: 3,
    image: 'assets/products/deporte/corrector-electrico-de-postura-unisex.jpg',
    description: 'El corrector de postura inteligente puede ayudarle a corregir los malos hábitos de postura , aliviar el dolor en la espalda, el hombro y cuello.\n\nLa corrección tiene el último diseño inductivo, le permitirá ajustar activamente la postura correcta a través del recordatorio de vibración, cuando la espalda del usuario se dobla más de 25 grados, el recordatorio de espalda detectará automáticamente y activará inmediatamente la alarma de vibración.\n\nLa correa de hombro es fácil de ajustar, es estable y no se afloja. mejor elasticidad y confort que es adecuado para la gente de 15 a 95 kg.'
  },
  {
    id: 'deporte-cuello-de-refrigeracion',
    name: 'CUELLO DE REFRIGERACION',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '36187',
    price: 12000,
    stock: 7,
    image: 'assets/products/deporte/cuello-de-refrigeracion.jpg',
    description: 'Mantente fresco en cualquier momento con este práctico cuello de refrigeración. Es ligero, cómodo y fácil de usar, ideal para días calurosos, ejercicio, caminatas, trabajo al aire libre o viajes.\n\nAyuda a refrescar de forma rápida, es reutilizable y su diseño portátil permite llevarlo a todas partes. Una opción perfecta para quienes buscan comodidad, frescura y alivio del calor durante horas.'
  },
  {
    id: 'deporte-entrenedador-de-dedos',
    name: 'ENTRENEDADOR DE DEDOS',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '47364',
    price: 8800,
    salePrice: 5900,
    stock: 1,
    image: 'assets/products/deporte/entrenedador-de-dedos.jpg',
    description: 'Fortalece tus dedos, manos y muñecas de forma práctica. Cuenta con 3 niveles de resistencia para mejorar agarre, fuerza y recuperación. Ideal para deportistas, músicos, fisioterapia y entrenamiento diario.'
  },
  {
    id: 'deporte-estuches-brazaletes-deportivos-celular',
    name: 'ESTUCHES BRAZALETES DEPORTIVOS CELULAR',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '69334',
    price: 5000,
    stock: 20,
    image: 'assets/products/deporte/estuches-brazaletes-deportivos-celular.jpg',
    description: 'Lleva tu celular contigo mientras haces ejercicio con este brazalete deportivo cómodo, seguro y resistente. Diseñado para ajustarse perfectamente al brazo, permite correr, caminar o entrenar sin tener que sostener el teléfono en la mano.\n\nFabricado con materiales ligeros y resistentes al sudor, protege tu celular y te permite usar la pantalla táctil sin sacarlo del brazalete.\n\nviene con colores al azar'
  },
  {
    id: 'deporte-faja-palma-y-muneca',
    name: 'FAJA PALMA Y MUÑECA',
    category: 'deporte',
    categoryLabel: 'Deporte',
    extraCategories: ['hogar'],
    ref: '14345',
    price: 3600,
    stock: 24,
    image: 'assets/products/deporte/faja-palma-y-muneca.jpg',
    description: 'Brinda soporte, comodidad y protección a tu muñeca en actividades diarias, deporte o trabajo.\n\nSu material elástico se ajusta fácilmente a la mano, ayudando a dar mayor estabilidad sin incomodar. Es liviana, práctica y fácil de usar.\n\nIdeal para quienes buscan cuidar la muñeca, mejorar el agarre y tener mayor comodidad durante el día.\n\nProducto económico, útil y de alta rotación.'
  },
  {
    id: 'deporte-flotador-infable-aro-70cm',
    name: 'FLOTADOR INFABLE ARO 70CM',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '74491',
    price: 11300,
    salePrice: 9300,
    stock: 12,
    image: 'assets/products/deporte/flotador-infable-aro-70cm.jpg',
    description: 'DIFERENTES ESTILOS TRASLUCIDO'
  },
  {
    id: 'deporte-flotador-infable-aro-91cm',
    name: 'FLOTADOR INFABLE ARO 91CM',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '11907',
    price: 11900,
    stock: 15,
    image: 'assets/products/deporte/flotador-infable-aro-91cm.jpg',
    description: 'DIFERENTES ESTILOS TRASLUCIDO'
  },
  {
    id: 'deporte-funda-impermeable-xw',
    name: 'FUNDA IMPERMEABLE XW',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '93223',
    price: 25200,
    salePrice: 19400,
    stock: 5,
    image: 'assets/products/deporte/funda-impermeable-xw.jpg',
    description: ''
  },
  {
    id: 'deporte-gas-pimienta-grande-defensa-personal',
    name: 'GAS PIMIENTA GRANDE DEFENSA PERSONAL',
    category: 'deporte',
    categoryLabel: 'Deporte',
    extraCategories: ['hogar'],
    ref: '67110',
    price: 21800,
    salePrice: 16400,
    stock: 6,
    image: 'assets/products/deporte/gas-pimienta-grande-defensa-personal.jpg',
    description: '¡Tu seguridad es lo primero! Este potente gas pimienta te brinda una defensa instantánea y eficaz ante cualquier amenaza. Su tamaño grande asegura una protección duradera. ¿Listo para sentirte seguro en todo momento? ¡Descúbrelo ahora!'
  },
  {
    id: 'deporte-gorro-de-natacion',
    name: 'GORRO DE NATACION',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '65532',
    price: 7600,
    stock: 2,
    image: 'assets/products/deporte/gorro-de-natacion.jpg',
    description: 'PRODUCTO ALTAMANTE ROTACION'
  },
  {
    id: 'deporte-hombrera-termica-unisex',
    name: 'HOMBRERA TERMICA UNISEX',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '60302',
    price: 45600,
    salePrice: 36900,
    stock: 8,
    image: 'assets/products/deporte/hombrera-termica-unisex.jpg',
    description: '¡Adiós dolor de hombro! Descubre el calor terapéutico instantáneo con esta hombrera térmica unisex. Diseñada para tu máximo confort y alivio, te preguntarás cómo viviste sin ella. ¡Experimenta la diferencia y recupera tu libertad de movimiento!'
  },
  {
    id: 'deporte-juego-acuatico-beisbol-bate-pelota',
    name: 'JUEGO ACUATICO BEISBOL BATE + PELOTA',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '63401',
    price: 17400,
    salePrice: 11800,
    stock: 1,
    image: 'assets/products/deporte/juego-acuatico-beisbol-bate-pelota.jpg',
    description: ''
  },
  {
    id: 'deporte-lazo-para-saltar',
    name: 'LAZO PARA SALTAR',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '82178',
    price: 14800,
    stock: 10,
    image: 'assets/products/deporte/lazo-para-saltar.jpg',
    description: '¡Desata tu potencial y alcanza tu mejor versión! Este lazo para saltar es tu aliado perfecto para un entrenamiento explosivo y divertido. Siente la diferencia en cada salto, quema calorías y redefine tu cuerpo. ¡No esperes más para empezar a saltar hacia tus metas!'
  },
  {
    id: 'deporte-lentes-vision-nocturna',
    name: 'LENTES VISION NOCTURNA',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '28485',
    price: 28500,
    salePrice: 23700,
    stock: 4,
    image: 'assets/products/deporte/lentes-vision-nocturna.jpg',
    description: 'GAFAS HD VISION\n\n- Lentes de alta definición.\n\n-Mejora la claridad y el color.\n\n-Peso ligero.\n\n-Protección Uv.\n\ngafas de uso cotidiano que se pueden usar encima de tus gafas recetadas por el medico.\n\nLas gafas son un accesorio importante que marcan un estilo diferente en el rostro de las personas. Pueden ser utilizadas en cualquier temporada, desde el verano hasta el invierno y sólo tú decides el momento de usarlas. Mejora tu visión y cuida tus ojos con lo último en tecnología de alta definición. Las Gafas HD Vision se caracterizan por contar con novedosos lentes que aumentan la claridad y el color de su entorno, reduciendo al mínimo el deslumbramiento y dar un 100% de protección contra Rayos Ultravioletas.'
  },
  {
    id: 'deporte-mancuerna-elastica',
    name: 'MANCUERNA ELASTICA',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '66444',
    price: 32500,
    stock: 3,
    image: 'assets/products/deporte/mancuerna-elastica.jpg',
    gallery: [
      'assets/products/deporte/mancuerna-elastica-1.jpg'
    ],
    description: ''
  },
  {
    id: 'deporte-mancuerna-elastica-pies',
    name: 'MANCUERNA ELASTICA PIES',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '19674',
    price: 37000,
    stock: 2,
    image: 'assets/products/deporte/mancuerna-elastica-pies.jpg',
    gallery: [
      'assets/products/deporte/mancuerna-elastica-pies-1.jpg',
      'assets/products/deporte/mancuerna-elastica-pies-2.jpg',
      'assets/products/deporte/mancuerna-elastica-pies-3.jpg'
    ],
    description: ''
  },
  {
    id: 'deporte-masajeador-electrico-pies',
    name: 'MASAJEADOR ELECTRICO PIES',
    category: 'deporte',
    categoryLabel: 'Deporte',
    extraCategories: ['hogar'],
    ref: '87047',
    price: 19000,
    stock: 20,
    image: 'assets/products/deporte/masajeador-electrico-pies.jpg',
    description: 'Descubre el masajeador electrónico de pies que transforma cualquier momento de descanso en una experiencia de alivio y bienestar. Diseñado para brindar una sensación cómoda y relajante, este equipo ayuda a estimular la planta de los pies mediante impulsos eléctricos que favorecen la relajación después de un día pesado.\n\nSu diseño es práctico, ligero y fácil de usar. Solo debes colocar los pies sobre la superficie y elegir la intensidad o el programa con su control remoto inalámbrico. En pocos minutos podrás disfrutar de una sensación de descanso ideal para el hogar, la oficina o cualquier espacio.'
  },
  {
    id: 'deporte-masajeadora-electrica-largo-4-cabezales-recargable',
    name: 'MASAJEADORA ELÉCTRICA LARGO 4 CABEZALES RECARGABLE',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '78229',
    price: 68700,
    salePrice: 45300,
    stock: 1,
    image: 'assets/products/deporte/masajeadora-electrica-largo-4-cabezales-recargable.jpg',
    description: '- Potente masaje de percusión para aliviar tensiones y rigidez muscular.\n\n- Control de velocidad con 5 niveles de intensidad.\n\n- Mango curvo ergonómico para un agarre cómodo.\n\n- Cuatro cabezales intercambiables para diferentes zonas de aplicación.\n\n- Diseño portátil y recargable para usar en cualquier lugar.\n\n- Tecnología de vibración para mejorar la recuperación muscular.'
  },
  {
    id: 'deporte-mini-masajeador-a1',
    name: 'MINI MASAJEADOR A1',
    category: 'deporte',
    categoryLabel: 'Deporte',
    extraCategories: ['hogar'],
    ref: '92465',
    price: 15800,
    stock: 11,
    image: 'assets/products/deporte/mini-masajeador-a1.jpg',
    description: 'elajación Portátil A Tu Alcance El Masajeador Mini USB XY-3199 es tu solución ideal para aliviar tensiones musculares donde y cuando lo necesites. Diseñado para adaptarse a tu estilo de vida, este dispositivo combina practicidad con eficacia en un formato compacto y moderno.'
  },
  {
    id: 'deporte-set-pelotras-de-pin-pong-x12',
    name: 'SET PELOTRAS DE PIN PONG X12',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '94089',
    price: 18900,
    salePrice: 16300,
    stock: 1,
    image: 'assets/products/deporte/set-pelotras-de-pin-pong-x12.jpg',
    description: ''
  },
  {
    id: 'deporte-set-pelotras-de-pin-pong-x6',
    name: 'SET PELOTRAS DE PIN PONG X6',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '60258',
    price: 7400,
    stock: 2,
    image: 'assets/products/deporte/set-pelotras-de-pin-pong-x6.jpg',
    description: ''
  },
  {
    id: 'deporte-soporte-rodilla-fina',
    name: 'SOPORTE RODILLA FINA',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '21960',
    price: 26000,
    stock: 0,
    image: 'assets/products/deporte/soporte-rodilla-fina.jpg',
    description: '¡Libera tu movimiento! Este soporte de rodilla fina ofrece **soporte avanzado y alivio instantáneo**. Diseñado para tu máximo confort y seguridad, te permite vivir sin límites. Descubre la diferencia.'
  },
  {
    id: 'deporte-talonera-de-seguridad-luz-x1-unidad',
    name: 'TALONERA DE SEGURIDAD LUZ X1 UNIDAD',
    category: 'deporte',
    categoryLabel: 'Deporte',
    ref: '23797',
    price: 15000,
    salePrice: 11200,
    stock: 2,
    image: 'assets/products/deporte/talonera-de-seguridad-luz-x1-unidad.jpg',
    description: 'RECOMENDABLE COBRAR EL PAR!\n\nEXCELENTE PRODUCTO\n\n2 MODOS FLASH INTERMITENTE – FIJO (LUZ ROJA)\n\nTIEMPO de duración hasta 150 HORAS.\n\nRESISTENTE AL AGUA Y LIVIANA.\n\nSISTEMA DE AJUSTE DINAMICO Y FÁCIL DE DESMONTAR permite poner y quitar del TOBILLO.\n\nPar de Luces para Pantalon/ Calzado de alta luminosidad para mejorar tu seguridad vial, sistema de ajuste tipo diadema\n\nVer Video del Producto'
  },

  /* ---------- Hogar ---------- */
  {
    id: 'hogar-juego-de-cocina-x3pcs',
    name: 'JUEGO DE COCINA X3PCS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '99744',
    price: 16700,
    stock: 24,
    image: 'assets/products/hogar/1/juego-de-cocina-x3pcs.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'hogar-afilador-de-cuchillos',
    name: 'AFILADOR DE CUCHILLOS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '12912',
    price: 12400,
    salePrice: 6600,
    stock: 12,
    image: 'assets/products/hogar/1/afilador-de-cuchillos.jpg',
    description: '**¡Revoluciona tu cocina!** Descubre el secreto de un corte perfecto y sin esfuerzo. Con nuestro afilador, tus cuchillos volverán a la vida en segundos, garantizando **más filo y precisión** en cada preparación. ¡Prepárate para cortar como un profesional!'
  },
  {
    id: 'hogar-aliviador-de-picadoras-de-mosquitos',
    name: 'ALIVIADOR DE PICADORAS DE MOSQUITOS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '31689',
    price: 43800,
    salePrice: 23200,
    stock: 1,
    image: 'assets/products/hogar/1/aliviador-de-picadoras-de-mosquitos.jpg',
    description: 'ALIVIADOR DE PICADURAS DE INSECTOS Alivio de los síntomas: el sanador de picaduras de insectos ayuda a combatir la picazón y la hinchazón después de las picaduras de insectos mediante el uso de calor para acelerar el proceso de curación: alivio para las picaduras de mosquitos, avispas, insectos y abejas. ALIVIO INSTANTÁNEO Sin químicos: no tóxico y seguro de usar\n\nel bolígrafo para picaduras de insectos depende únicamente del calor. Es adecuado para mujeres embarazadas, lo que le permite mantenerse alejado de las cremas o aerosoles para picaduras de insectos a base de químicos. Coloca el bolígrafo de picadura de insectos en el área afectada, luego presiona el botón y espera de 15 a 30 segundos hasta que escuches el pitido y la calefacción se detenga. Súper simple y fácil de usar. El sanador de picaduras de insectos funciona con pilas, compacto y ligero, por lo que es el accesorio perfecto para viajes, campamento y otras actividades al aire libre. Está listo cuando lo necesite, y vale la pena mencionar que no requiere baterías; es recargable a través de un cable tipo C. Este dispositivo es excelente para las personas que sufren de picaduras de insectos durante el verano, especialmente de mosquitos,'
  },
  {
    id: 'hogar-almohada-masajeadora',
    name: 'ALMOHADA MASAJEADORA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '20945',
    price: 91200,
    salePrice: 61100,
    stock: 5,
    image: 'assets/products/hogar/1/almohada-masajeadora.jpg',
    description: 'Nueva almohada con diseño ultra fino y ligero; aspecto elegante; Incorporado con cuatro cabezales de masaje para disfrutar en tu casa de buenos masajes en diferentes partes del cuerpo o si también lo deseas mientras estas en tu carro gracias a su cargador para autos incorporado.\n\nESPALDA CUELLO Y ESPALDA'
  },
  {
    id: 'hogar-anti-ronquidos',
    name: 'ANTI RONQUIDOS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '99845',
    price: 12500,
    salePrice: 10100,
    stock: 6,
    image: 'assets/products/hogar/1/anti-ronquidos.jpg',
    description: 'Con nuestro Anti Ronquidos mejora la calidad de tu sueño, ayuda a reducir los ronquidos y protege tus dientes del rechinamiento nocturno. Es práctico, cómodo y viene con estuche para llevarlo donde quieras.\n\nDuerme mejor. Descansa más. Despierta renovado.'
  },
  {
    id: 'hogar-arbol-luz-con-flores-50cm',
    name: 'ARBOL LUZ CON FLORES 50CM',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '96561',
    price: 69800,
    stock: 1,
    image: 'assets/products/hogar/1/arbol-luz-con-flores-50cm.jpg',
    gallery: [
      'assets/products/hogar/1/arbol-luz-con-flores-50cm-1.jpg',
      'assets/products/hogar/1/arbol-luz-con-flores-50cm-2.jpg'
    ],
    description: 'HERMOSO ARBOLITO PARA AMBIENTAR TU HOGAR\n\n50 CM UN TAMAÑO CONSIDERABLE PARA LLAMAR LA ATENCION EN TU HOGAR\n\nFUNCIONA CON 3 PILAS AA\n\nVIENE CON ENTRADA DE CABLE'
  },
  {
    id: 'hogar-armario-3-cuerpos',
    name: 'ARMARIO 3 CUERPOS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '81160',
    price: 118800,
    salePrice: 76000,
    stock: 2,
    image: 'assets/products/hogar/1/armario-3-cuerpos.jpg',
    description: '¡Adiós al desorden! Descubre el ARMARIO 3 CUERPOS: tu aliado perfecto para organizar toda tu ropa con estilo. ¡Espacio, orden y elegancia en un solo mueble! ¿Listo para transformar tu habitación?'
  },
  {
    id: 'hogar-aspiradora-mini-usb',
    name: 'ASPIRADORA MINI USB',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '10544',
    price: 22400,
    salePrice: 11400,
    stock: 2,
    image: 'assets/products/hogar/1/aspiradora-mini-usb.jpg',
    description: '-\n\nTipo de conexión USB\n\n-\n\nBoquilla de succión plana\n\n-\n\nBoquilla tipo cepillo\n\n-\n\nIdeal para aspirar teclados de computador o áreas reducidas.\n\n-\n\nFácil y práctico de llevarlo a todos lados.\n\n-\n\nMaterial plástico'
  },
  {
    id: 'hogar-aspiradora-portatil-3-en-1',
    name: 'ASPIRADORA PORTATIL 3 EN 1',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '49043',
    price: 38100,
    salePrice: 32000,
    stock: 12,
    image: 'assets/products/hogar/1/aspiradora-portatil-3-en-1.jpg',
    description: '¡Adiós suciedad en segundos! Descubre la **ASPIRADORA PORTÁTIL 3 EN 1**: tu aliada perfecta para el coche, la oficina y el hogar. Su potencia y diseño versátil te sorprenderán. ¿Listo para una limpieza impecable? ¡No querrás vivir sin ella!'
  },
  {
    id: 'hogar-audifono-para-sordera',
    name: 'AUDIFONO PARA SORDERA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '34006',
    price: 21700,
    stock: 11,
    image: 'assets/products/hogar/1/audifono-para-sordera.jpg',
    description: 'Audífonos para sordera, dispositivo amplificador de voz sordo para ancianos, potenciador de sonido ajustable, tono de piel auditiva'
  },
  {
    id: 'hogar-batidor-manual-portatil',
    name: 'BATIDOR MANUAL PORTATIL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '92175',
    price: 16300,
    salePrice: 10100,
    stock: 13,
    image: 'assets/products/hogar/1/batidor-manual-portatil.jpg',
    description: ''
  },
  {
    id: 'hogar-batidora-espumadora-electrica',
    name: 'BATIDORA ESPUMADORA ELECTRICA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '76820',
    price: 29000,
    stock: 0,
    image: 'assets/products/hogar/1/batidora-espumadora-electrica.jpg',
    description: 'Batidor eléctrico recargable USB, ideal para preparar café, capuchino, chocolate, leche espumada, salsas y mezclas rápidas en casa.\n\nIncluye diferentes cabezales para batir y espumar con mayor facilidad. Su diseño ligero, moderno y portátil permite usarlo cómodamente en la cocina, oficina o cafetería.\n\nPráctico, elegante y fácil de cargar.\n\nPerfecto para lograr bebidas más cremosas en segundos.'
  },
  {
    id: 'hogar-bolso-anti-robo',
    name: 'BOLSO ANTI ROBO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '85968',
    price: 55700,
    salePrice: 41200,
    stock: 0,
    image: 'assets/products/hogar/1/bolso-anti-robo.jpg',
    description: '¡Olvídate de las preocupaciones! Este bolso anti robo con candado de seguridad y puerto USB integrado es tu compañero ideal. Diseñado para mantener tus pertenencias seguras y tu estilo impecable. Descubre la tranquilidad y la comodidad en cada aventura.'
  },
  {
    id: 'hogar-camara-de-bombillo-app3',
    name: 'CAMARA DE BOMBILLO APP3',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '49675',
    price: 61300,
    salePrice: 33700,
    stock: 3,
    image: 'assets/products/hogar/1/camara-de-bombillo-app3.jpg',
    description: 'Cámara Inteligente WiFi 360°\n\nVigila tu hogar o negocio en tiempo real desde tu celular. Cuenta con rotación 360°, visión nocturna, detección de movimiento y audio bidireccional para escuchar y hablar a distancia. Ideal para seguridad interior o exterior, con instalación sencilla y control total desde la app.'
  },
  {
    id: 'hogar-cepillo-alisador-y-secador-de-cabello',
    name: 'CEPILLO ALISADOR Y SECADOR DE CABELLO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '94966',
    price: 39800,
    stock: 6,
    image: 'assets/products/hogar/1/cepillo-alisador-y-secador-de-cabello.jpg',
    description: ''
  },
  {
    id: 'hogar-cepillo-electrico-irrigador-dental',
    name: 'CEPILLO ELECTRICO + IRRIGADOR DENTAL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '62112',
    price: 59800,
    stock: 2,
    image: 'assets/products/hogar/1/cepillo-electrico-irrigador-dental.jpg',
    description: 'MUY BUENA CALIDAD'
  },
  {
    id: 'hogar-cepillo-limpiador-5-en-1',
    name: 'CEPILLO LIMPIADOR 5 EN 1',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '91848',
    price: 47200,
    salePrice: 26400,
    stock: 3,
    image: 'assets/products/hogar/1/cepillo-limpiador-5-en-1.jpg',
    gallery: [
      'assets/products/hogar/1/cepillo-limpiador-5-en-1-1.jpg',
      'assets/products/hogar/1/cepillo-limpiador-5-en-1-2.jpg'
    ],
    description: 'El cepillo de limpieza eléctrico portátil está diseñado para ser IPX6 impermeable, ligero y duradero. El cuerpo puede mojarse con agua sin que ello afecte a su eficacia.\n\nEl cepillo de limpieza incluye un cabezal de cepillo de PP, un cabezal de cepillo de esponja y un cabezal de cepillo de cachemira para un total de tres cabezales de cepillo, que pueden limpiar todo tipo de rincones pequeños para su comodidad.\n\nEl limpiador rotativo eléctrico es fácil de usar, con un solo botón para usarlo. Velocidad de rotación rápida y lo suficientemente potente como para limpiar todos los rincones, coloque el limpiador y úselo para obtener un mejor efecto de limpieza.'
  },
  {
    id: 'hogar-cesta-ropa-sucia-4-divisiones',
    name: 'CESTA ROPA SUCIA 4 DIVISIONES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '11542',
    price: 85300,
    salePrice: 64800,
    stock: 10,
    image: 'assets/products/hogar/1/cesta-ropa-sucia-4-divisiones.jpg',
    gallery: [
      'assets/products/hogar/1/cesta-ropa-sucia-4-divisiones-1.jpg',
      'assets/products/hogar/1/cesta-ropa-sucia-4-divisiones-2.jpg'
    ],
    description: '🧺 CESTA PARA ROPA SUCIA DE 4 DIVISIONES\n\n¡Organiza tu ropa desde el momento en que la depositas!\n\nOlvídate de tener toda la ropa mezclada. Esta práctica cesta cuenta con 4 compartimentos independientes que te permiten separar fácilmente:\n\n✨ ¿Por qué te va a encantar?✅ 4 divisiones para clasificar mejor la ropa\n\n✅ Diseño moderno en blanco y negro\n\n✅ Estructura metálica firme\n\n✅ Aprovecha el espacio vertical\n\n✅ Ideal para lavandería, baño o habitación\n\n✅ Facilita el día de lavado al tener la ropa previamente separada'
  },
  {
    id: 'hogar-cinturon-masajeador-colicos',
    name: 'CINTURON MASAJEADOR COLICOS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '40133',
    price: 56300,
    salePrice: 29300,
    stock: 0,
    image: 'assets/products/hogar/1/cinturon-masajeador-colicos.jpg',
    description: 'ALIVIO ANTICOLICOS'
  },
  {
    id: 'hogar-cobertor-de-sofa',
    name: 'COBERTOR DE SOFA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '99225',
    price: 55400,
    salePrice: 48800,
    stock: 10,
    image: 'assets/products/hogar/1/cobertor-de-sofa.jpg',
    gallery: [
      'assets/products/hogar/1/cobertor-de-sofa-1.jpg'
    ],
    description: '• Cobertor para sofá doble faz\n\n• Ideal para proteger tu sofá de las mascotas\n\n• Perfecto para sofás de sala de estar o dormitorio\n\n• Cubre el asiento, brazos y respaldo\n\n• Fácil de limpiar\n\n• (No se recomienda planchar)\n\nCOLOR CAFE'
  },
  {
    id: 'hogar-cortador-de-vidrio',
    name: 'CORTADOR DE VIDRIO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '54408',
    price: 8800,
    stock: 10,
    image: 'assets/products/hogar/1/cortador-de-vidrio.jpg',
    description: '¡Transforma tus proyectos! Este cortador de vidrio dorado, con su diseño elegante y precisión inigualable, te permite cortar con facilidad y estilo. ¡Descubre el arte de dar forma al vidrio con un solo trazo!\n\n**Haz clic aquí para saber cómo.**'
  },
  {
    id: 'hogar-cubeta-de-hielo-gde',
    name: 'CUBETA DE HIELO GDE',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '77332',
    price: 4200,
    stock: 36,
    image: 'assets/products/hogar/1/cubeta-de-hielo-gde.jpg',
    description: '¡Sorprende a tus invitados! Estas cubetas de hielo XL garantizan bebidas perfectas por más tiempo. Colores vibrantes y diseño práctico. ¡Tu verano acaba de mejorar! Descubre la diferencia que hacen los cubos grandes.'
  },
  {
    id: 'hogar-cuchara-metal-x12',
    name: 'CUCHARA METAL X12',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '33214',
    price: 12000,
    stock: 8,
    image: 'assets/products/hogar/1/cuchara-metal-x12.jpg',
    description: 'CUCHARA GRANDE METAL'
  },
  {
    id: 'hogar-cucharones-x6-unidades',
    name: 'CUCHARONES X6 UNIDADES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '46985',
    price: 13500,
    stock: 1,
    image: 'assets/products/hogar/1/cucharones-x6-unidades.jpg',
    description: ''
  },
  {
    id: 'hogar-cuchillo-con-estuche-a5',
    name: 'CUCHILLO CON ESTUCHE A5',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '39812',
    price: 3900,
    stock: 0,
    image: 'assets/products/hogar/1/cuchillo-con-estuche-a5.jpg',
    description: 'PRODUCTO COLOMBIANO'
  },
  {
    id: 'hogar-cuchillo-mesa-sierra',
    name: 'CUCHILLO MESA SIERRA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '38865',
    price: 1900,
    stock: 0,
    image: 'assets/products/hogar/1/cuchillo-mesa-sierra.jpg',
    description: 'PROMOCION'
  },
  {
    id: 'hogar-cuchillo-sierra',
    name: 'CUCHILLO SIERRA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '76524',
    price: 4600,
    salePrice: 2300,
    stock: 37,
    image: 'assets/products/hogar/1/cuchillo-sierra.jpg',
    description: '**¿Cansado de batallar al cortar?** Descubre la precisión del Cuchillo Sierra Concorde. Su filo dentado y protección antibacterial transforman cada corte en una experiencia suave y segura. ¡Eleva tu cocina al siguiente nivel y deslumbra a todos!'
  },
  {
    id: 'hogar-curitas-cubreland-x100-unidades',
    name: 'CURITAS CUBRELAND X100 UNIDADES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '81043',
    price: 13000,
    stock: 9,
    image: 'assets/products/hogar/1/curitas-cubreland-x100-unidades.jpg',
    description: ''
  },
  {
    id: 'hogar-desmenuzador-de-carne-manual',
    name: 'DESMENUZADOR DE CARNE MANUAL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '29473',
    price: 47600,
    salePrice: 40000,
    stock: 5,
    image: 'assets/products/hogar/1/desmenuzador-de-carne-manual.jpg',
    description: '¡Olvídate de batallar! Desmenuza carne jugosa y perfecta en segundos. Imagina pulled pork, pollo deshebrado o tacos irresistibles al instante. Transforma tus asados y comidas de forma rápida y sin esfuerzo. ¿Listo para sorprender?'
  },
  {
    id: 'hogar-dispensador-crema-dental-soporte-esterilizador-de-cepillos',
    name: 'DISPENSADOR CREMA DENTAL + SOPORTE ESTERILIZADOR DE CEPILLOS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '88704',
    price: 25000,
    stock: 10,
    image: 'assets/products/hogar/1/dispensador-crema-dental-soporte-esterilizador-de-cepillos.jpg',
    description: 'Dispensador Crema Dental + Soporte Esterilizador De Cepillos\n\nEsterilizador de cepillo de dientes multifuncional, inteligente con soporte de función de esterilización ultravioleta y a la vez dispensador de crema dental.\n\nProteja sus cepillos de dientes del polvo\n\nAhorre espacio en el estante de su baño\n\nObtenga la cantidad correcta de pasta de dientes cada vez\n\nCARACTERÍSTICAS:\n\nCarga solar, vida duradera, sin necesidad de continuar cargando más tranquilidad. También carga usb durante 6 horas.\n\nSensor infrarrojo inteligente, sensor infrarrojo sensible, inducción dentro del rango de 2m, indicador de iluminación.'
  },
  {
    id: 'hogar-esponja-para-loza',
    name: 'ESPONJA PARA LOZA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '94484',
    price: 7000,
    stock: 1,
    image: 'assets/products/hogar/1/esponja-para-loza.jpg',
    gallery: [
      'assets/products/hogar/1/esponja-para-loza-1.jpg'
    ],
    description: ''
  },
  {
    id: 'hogar-estacion-de-desayuno-2-en-1',
    name: 'ESTACION DE DESAYUNO 2 EN 1',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '90231',
    price: 246500,
    salePrice: 175000,
    stock: 10,
    image: 'assets/products/hogar/1/estacion-de-desayuno-2-en-1.jpg',
    gallery: [
      'assets/products/hogar/1/estacion-de-desayuno-2-en-1-1.jpg'
    ],
    description: '¡Imagina mañanas sin estrés y desayunos deliciosos! Esta estación 2 en 1 revoluciona tu cocina. ¿Listo para crear tus platos favoritos con un solo toque? Descubre la magia de la comodidad y el sabor. ¡Te va a encantar!\n\nOptimiza tus mañanas y prepara diferentes alimentos al mismo tiempo con una solución práctica diseñada para ahorrar espacio y simplificar la rutina diaria. Su sistema multifuncional permite cocinar distintas preparaciones de manera rápida y eficiente, ofreciendo mayor comodidad en cada uso. Cuenta con controles independientes que facilitan ajustar cada área según la necesidad, brindando mejores resultados y mayor versatilidad al cocinar. Además, su diseño compacto y moderno la convierte en una excelente opción para quienes buscan practicidad, estilo y funcionalidad en un solo equipo.'
  },
  {
    id: 'hogar-estufa-de-lena-plegable-portatil',
    name: 'ESTUFA DE LEÑA PLEGABLE PORTATIL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '40009',
    price: 60000,
    stock: 3,
    image: 'assets/products/hogar/1/estufa-de-lena-plegable-portatil.jpg',
    gallery: [
      'assets/products/hogar/1/estufa-de-lena-plegable-portatil-1.jpg',
      'assets/products/hogar/1/estufa-de-lena-plegable-portatil-2.jpg'
    ],
    description: '-\n\nhecha de acero inoxidable 430 de alta calidad\n\n-\n\nparrilla de acero inoxidable 304\n\n-\n\npuede plegarse en su propia bolsa\n\n-\n\nMULTIUSOS: para acampar, pescar, hacer picnic, acampar,\n\n-\n\nDimensiones de la mini estufa 21 × 14 × 14 cm\n\nMINI ESTUFA PORTATIL'
  },
  {
    id: 'hogar-estufa-electrica-1-puesto',
    name: 'ESTUFA ELECTRICA 1 PUESTO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '32715',
    price: 56000,
    salePrice: 40300,
    stock: 4,
    image: 'assets/products/hogar/1/estufa-electrica-1-puesto.jpg',
    description: 'Estufa Eléctrica 1 puesto Portátil, diseño moderno y diferenciado, el cual te brinda practicidad a la hora de llevarlo a la mesa. Disfruta de tus mejores inventos culinarios en tu hogar, calienta la comida y cocina lo que quieras, con nuestro fogón de inmejorable calidad.\n\nExterior de hierro reforzado\n\nQuemador fabricado en acero inoxidable duradero\n\nControl de termostato\n\nFácil de limpiar\n\nLuz de funcionamiento\n\nCuenta termostato para ahorro de energía\n\nCaracterísticas:\n\nPotencia: 1000w\n\nVoltaje nominal: 110V\n\nFrecuencia nominal: 50-60hz'
  },
  {
    id: 'hogar-extension-3-metros-electrica',
    name: 'EXTENSION 3 METROS ELECTRICA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '15607',
    price: 12000,
    stock: 6,
    image: 'assets/products/hogar/1/extension-3-metros-electrica.jpg',
    description: 'SOPORTA CARGA ESTANDAR PARA MULTIPLES DISPOSITIVOS\n\nIDEAL PARA USO DOMESTICO, OFICINAS, TALLERES O EXTERIORES'
  },
  {
    id: 'hogar-flor-eterna-decoracion',
    name: 'FLOR ETERNA DECORACION',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '50646',
    price: 36200,
    salePrice: 24600,
    stock: 3,
    image: 'assets/products/hogar/1/flor-eterna-decoracion.jpg',
    description: 'INCLUIDA BATERIA'
  },
  {
    id: 'hogar-fuente-chocolate',
    name: 'FUENTE CHOCOLATE',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '53635',
    price: 118100,
    salePrice: 103900,
    stock: 5,
    image: 'assets/products/hogar/1/fuente-chocolate.jpg',
    description: '¡Desata la magia del chocolate en tu hogar! Esta fuente crea una cascada tentadora para bañar tus frutas favoritas. Transforma tus reuniones en un festín inolvidable. ¿Listo para saborear el paraíso?'
  },
  {
    id: 'hogar-gorrito-led-magico',
    name: 'GORRITO LED MAGICO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '99281',
    price: 31900,
    salePrice: 26200,
    stock: 9,
    image: 'assets/products/hogar/1/gorrito-led-magico.jpg',
    gallery: [
      'assets/products/hogar/1/gorrito-led-magico-1.jpg'
    ],
    description: 'El accesorio que todos van a querer 😍💖. Súper suave, tierno y con luces LED multicolor que lo hacen aún más divertido.\n\n🌟 Ideal para:\n\n🎁 Regalos y sorpresas\n\n🎉 Fiestas y celebraciones\n\n📸 Fotos y videos increíbles\n\n❄️ Mantenerte abrigado con mucho estilo\n\nSus largas orejitas y su diseño de conejito lo hacen adorable y llamativo, perfecto para niños, jóvenes y amantes de lo kawaii. 🥰\n\n🔥 ¡Sorprende a alguien especial o consiéntete con el tuyo!'
  },
  {
    id: 'hogar-gorro-migrana',
    name: 'GORRO MIGRAÑA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '16068',
    price: 26900,
    salePrice: 16700,
    stock: 18,
    image: 'assets/products/hogar/1/gorro-migrana.jpg',
    gallery: [
      'assets/products/hogar/1/gorro-migrana-1.jpg',
      'assets/products/hogar/1/gorro-migrana-2.jpg',
      'assets/products/hogar/1/gorro-migrana-3.jpg',
      'assets/products/hogar/1/gorro-migrana-4.jpg'
    ],
    description: 'GORRO DE GEL PARA MIGRAÑA ANTIFAZ FRÍO Y CALOR REUTILIZABLE ALIVIO DE DOLOR DE CABEZA ESTRÉS SINUSA\n\nEsta máscara de gel para aliviar el dolor de cabeza reutilizable y portátil para migrañas ayuda a la inflamación\n\nFácil de usar y reutilizar. Simplemente congela durante 2 horas y si es caliente de 20 a 30 minutos en el micro ondas.'
  },
  {
    id: 'hogar-hacha-profesional',
    name: 'HACHA PROFESIONAL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '67543',
    price: 14400,
    stock: 1,
    image: 'assets/products/hogar/1/hacha-profesional.jpg',
    description: 'Hacha profesional de acero inoxidable, diseñada para cortes fuertes, precisos y seguros.\n\nSu hoja resistente permite cortar carne, huesos y alimentos duros con facilidad, mientras su mango ergonómico de madera ofrece firmeza y control en cada uso.\n\nIdeal para cocina, parrilla, carnicería o uso diario en casa. Una herramienta duradera, práctica y confiable para quienes buscan potencia en cada corte.'
  },
  {
    id: 'hogar-hervidor-de-agua-electrico-portable-a4',
    name: 'HERVIDOR DE AGUA ELECTRICO PORTABLE A4',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '12334',
    price: 51900,
    stock: 1,
    image: 'assets/products/hogar/1/hervidor-de-agua-electrico-portable-a4.jpg',
    description: ''
  },
  {
    id: 'hogar-hervidor-de-huevos-gallinita',
    name: 'HERVIDOR DE HUEVOS GALLINITA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '59528',
    price: 48000,
    stock: 6,
    image: 'assets/products/hogar/1/hervidor-de-huevos-gallinita.jpg',
    gallery: [
      'assets/products/hogar/1/hervidor-de-huevos-gallinita-1.jpg'
    ],
    description: '¡Prepara huevos duros o tibios sin complicaciones y con mucho estilo en menos de 10 minutos\n\nCocina hasta varios huevos de forma rápida, práctica y segura.\n\nFunciona con solo presionar un botón: cocción al vapor perfecta cada vez.\n\nDiseño divertido en forma de gallina, ideal para tu cocina.\n\nBajo consumo de energía y fácil de limpiar.\n\nAltura: 16 cm'
  },
  {
    id: 'hogar-hervidora-de-agua-scarlett',
    name: 'HERVIDORA DE AGUA SCARLETT',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '73932',
    price: 64000,
    stock: 6,
    image: 'assets/products/hogar/1/hervidora-de-agua-scarlett.jpg',
    description: '¡Agua hirviendo en segundos! Descubre la eficiencia y el estilo del Hervidor Eléctrico PRO. Su diseño vanguardista y potencia te esperan para transformar tus mañanas y antojos. ¿Listo para simplificar tu vida? ¡No querrás dejar de usarlo!'
  },
  {
    id: 'hogar-hielera-con-bocina-luces-rgb',
    name: 'HIELERA CON BOCINA LUCES RGB',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '29941',
    price: 119800,
    stock: 2,
    image: 'assets/products/hogar/1/hielera-con-bocina-luces-rgb.jpg',
    description: 'PRODUCTO NOVEDOSO PARA TODA EPOCA.\n\nANIMA TUS REUNIONES O FIESTAS CON ESTA EXCELENTE HIELERA CON LUCES LED , ADEMAS TRAE UN PARLANTE QUE PODES CONECTAR A TU CELULAR'
  },
  {
    id: 'hogar-humidificador-nave-espacial',
    name: 'HUMIDIFICADOR NAVE ESPACIAL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '55477',
    price: 40000,
    stock: 4,
    image: 'assets/products/hogar/1/humidificador-nave-espacial.jpg',
    description: ''
  },
  {
    id: 'hogar-humidificador-ultrasonico-uv',
    name: 'HUMIDIFICADOR ULTRASONICO UV',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '24521',
    price: 29800,
    stock: 84,
    image: 'assets/products/hogar/1/humidificador-ultrasonico-uv.jpg',
    description: '**¡Transforma tu espacio en un oasis de bienestar!** El Humidificador Ultrasónico UV no solo refresca el aire, sino que crea un ambiente mágico con su luz LED. Experimenta un confort inigualable y un descanso profundo. ¡Descubre la serenidad que te mereces!'
  },
  {
    id: 'hogar-humificador-bombillo-lampara-rgb',
    name: 'HUMIFICADOR BOMBILLO LAMPARA RGB',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '67964',
    price: 31000,
    stock: 2,
    image: 'assets/products/hogar/1/humificador-bombillo-lampara-rgb.jpg',
    gallery: [
      'assets/products/hogar/1/humificador-bombillo-lampara-rgb-1.jpg'
    ],
    description: 'Hermosa lámpara de bombillo para decorar tu mesa de noche o sala de estar. Es una hermosa pieza difusora de aromas que llenará tu espacio con un olor especial y agradable.\n\n- Material: Plástico.\n\n- Tamaño Aprox. Producto: 16 x 10 x 10 cm / Largo del cable USB: 1 m.\n\n- Tamaño Aprox. Empaque: 16.5 x 9 x 9 cm\n\n- Tiempo de operación: 6 horas.\n\n- Funcionamiento: Cable USB.\n\n- Capacidad: 400 ml.\n\n- Potencia: 2 W.\n\n- Peso: 77 g.\n\n- Hermoso diseño retro de un bombillo convencional el cual cuenta con una mini palmera y piedras decorativas.\n\n- Por medio del botón podrás encender las luces y el humidificador, el cual proyectará en efecto desvanecido luces RGB.\n\n- Un artículo decorativo hermoso el cual se robará las miradas de tus visitantes y tu familia.\n\n- Modo de uso:\n\n- Retira la tapa superior.\n\n- Remoja el filtro unos segundos en agua e insértalo en el dispositivo.\n\n- Introduce 400 ml de agua aproximadamente.\n\n- Inserta nuevamente la tapa con el filtro.\n\n- Enciende el humificador y las luces por medio del botón.\n\n- Contenido del paquete:\n\n- 1 humidificador de bombillo.\n\n- 1 Cable USB tipo C.\n\n- 1 Palmera.\n\n- 1 Bolsa de piedras decorativas.\n\n- 1 Filtro.\n\n- 100 % Nuevo.\n\nX1 UNIDAD'
  },
  {
    id: 'hogar-humificador-gl600',
    name: 'HUMIFICADOR GL600',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '82726',
    price: 39000,
    stock: 1,
    image: 'assets/products/hogar/1/humificador-gl600.jpg',
    description: 'Dale un toque colorido y funcional a tu espacio con este humidificador floral. Humedece el ambiente, ayuda a mantener una sensación de frescura y también funciona como decoración moderna. Su diseño compacto con conexión USB lo hace práctico para el hogar, oficina o escritorio.'
  },
  {
    id: 'hogar-humificador-gx-414',
    name: 'HUMIFICADOR GX-414',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '55381',
    price: 61000,
    salePrice: 48800,
    stock: 1,
    image: 'assets/products/hogar/1/humificador-gx-414.jpg',
    description: 'RGB'
  },
  {
    id: 'hogar-humificador-qh106',
    name: 'HUMIFICADOR QH106',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '87749',
    price: 33600,
    stock: 7,
    image: 'assets/products/hogar/1/humificador-qh106.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'hogar-impermeable-maleta',
    name: 'IMPERMEABLE MALETA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '23122',
    price: 34000,
    salePrice: 30600,
    stock: 16,
    image: 'assets/products/hogar/1/impermeable-maleta.jpg',
    description: 'colores al azar se envian'
  },
  {
    id: 'hogar-irrigador-dental',
    name: 'IRRIGADOR DENTAL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '51393',
    price: 44000,
    stock: 3,
    image: 'assets/products/hogar/1/irrigador-dental.jpg',
    description: 'Descubre el poder de una limpieza dental profesional en la comodidad de tu hogar con el irrigador bucal portátil. Su diseño elegante y recargable, junto con cuatro boquillas intercambiables y tres modos de presión, elimina la placa donde el cepillo no llega, protegiendo encías y dientes. Compacto, resistente al agua y fácil de usar, es tu aliado diario para una sonrisa más limpia, fresca y saludable.'
  },
  {
    id: 'hogar-irrigador-dental-ch555',
    name: 'IRRIGADOR DENTAL ch555',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '14208',
    price: 38000,
    stock: 5,
    image: 'assets/products/hogar/1/irrigador-dental-ch555.jpg',
    gallery: [
      'assets/products/hogar/1/irrigador-dental-ch555-1.jpg'
    ],
    description: '¡Despídete del sarro y da la bienvenida a una sonrisa deslumbrante! Con el irrigador dental ch555, transforma tus dientes amarillos en un blanco radiante. ¡Descubre el secreto de una limpieza profesional en casa y maravíllate con los resultados!'
  },
  {
    id: 'hogar-lampara-3d',
    name: 'LAMPARA 3D',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '78185',
    price: 26000,
    stock: 2,
    image: 'assets/products/hogar/1/lampara-3d.jpg',
    description: 'Luz nocturna 3D, color cálido, material de base en ABS, Fuente de alimentación USB. Diferentes patrones y tamaño ( tamaño de base de 14x4x10 cm)\n\nFIGURAS AL AZAR O PREGUNTAR'
  },
  {
    id: 'hogar-lampara-antimosquitos-r8',
    name: 'LAMPARA ANTIMOSQUITOS R8',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '65865',
    price: 30700,
    salePrice: 22700,
    stock: 8,
    image: 'assets/products/hogar/1/lampara-antimosquitos-r8.jpg',
    description: '¡Dile adiós a los molestos mosquitos! La Lámpara Antimotitos R8, con su luz UV y descarga eléctrica, elimina insectos de forma segura y silenciosa. Disfruta de noches tranquilas sin químicos. ¡Descubre el poder de la tecnología para tu hogar!'
  },
  {
    id: 'hogar-lampara-decorativa-a66',
    name: 'LAMPARA DECORATIVA A66',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '66232',
    price: 36600,
    salePrice: 19800,
    stock: 1,
    image: 'assets/products/hogar/1/lampara-decorativa-a66.jpg',
    description: ''
  },
  {
    id: 'hogar-lampara-giratoria-mandala',
    name: 'LAMPARA GIRATORIA MANDALA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '69282',
    price: 43200,
    stock: 6,
    image: 'assets/products/hogar/1/lampara-giratoria-mandala.jpg',
    gallery: [
      'assets/products/hogar/1/lampara-giratoria-mandala-1.jpg',
      'assets/products/hogar/1/lampara-giratoria-mandala-2.jpg'
    ],
    description: ''
  },
  {
    id: 'hogar-lampara-led-sensor-de-movimiento',
    name: 'LAMPARA LED SENSOR DE MOVIMIENTO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '74827',
    price: 29800,
    stock: 1,
    image: 'assets/products/hogar/1/lampara-led-sensor-de-movimiento.jpg',
    description: 'Ilumina automáticamente al detectar movimiento en la oscuridad. Ideal para habitaciones, escaleras, pasillos, clósets y más.\n\nSensor de movimiento inteligente\n\nEncendido automático\n\nLuz cálida y suave\n\nBatería recargable\n\nFácil instalación magnética\n\nDiseño moderno y elegante'
  },
  {
    id: 'hogar-lampara-repelente-de-mosquitos',
    name: 'LAMPARA REPELENTE DE MOSQUITOS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '94881',
    price: 9400,
    salePrice: 6100,
    stock: 11,
    image: 'assets/products/hogar/1/lampara-repelente-de-mosquitos.jpg',
    description: ''
  },
  {
    id: 'hogar-lampara-solar',
    name: 'LAMPARA SOLAR',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '62086',
    price: 33200,
    stock: 3,
    image: 'assets/products/hogar/1/lampara-solar.jpg',
    description: '¡Ilumina tu hogar con elegancia y ahorra energía! Descubre esta lámpara solar de diseño único que crea un ambiente acogedor al anochecer. ¡Solo necesita sol para brillar! ¿Quieres saber cómo transforma tu espacio?'
  },
  {
    id: 'hogar-lavadora-portatil-mini',
    name: 'LAVADORA PORTATIL MINI',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '28263',
    price: 128000,
    stock: 2,
    image: 'assets/products/hogar/1/lavadora-portatil-mini.jpg',
    gallery: [
      'assets/products/hogar/1/lavadora-portatil-mini-1.jpg',
      'assets/products/hogar/1/lavadora-portatil-mini-2.jpg'
    ],
    description: 'Compacta y portátil: la mini lavadora plegable portátil adopta inteligentemente un diseño plegable, 11.6 x 11.6 x 5.7 pulgadas cuando está plegada. Fácil de almacenar. Lavadora plegable con función de deshidratación, luz azul, cesta de drenaje y tubo de drenaje. Fuerte eliminación de manchas: esta mini lavadora portátil con pulsador ultrasónico de avance y retroceso, lavado de manos biónico, no daña la ropa, viene con rayos azules, es realmente adecuada para lavar ropa interior o ropa de bebé. Fácil de operar: la lavadora plegable tiene una función de limpieza semiautomática con 3 botones de temporizador de modo para 2 minutos, 10 minutos y 15 minutos, y se restablece automáticamente cuando termina, por lo que puedes completar fácilmente tus diversos requisitos de lavado. Adecuado para: esta mini lavadora plegable de 8 litros tiene un tamaño mini, puede lavar ropa de bebé, ropa interior, toallas, camisetas, calcetines u otros artículos pequeños, hasta 4.4 lbs, es más saludable lavar ropa íntima por separado.'
  },
  {
    id: 'hogar-licuadora-portatil-de-750-ml',
    name: 'LICUADORA PORTATIL DE 750 ML',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '24541',
    price: 96100,
    salePrice: 83600,
    stock: 3,
    image: 'assets/products/hogar/1/licuadora-portatil-de-750-ml.jpg',
    description: '¡Imagina jugos y smoothies frescos al instante! Esta licuadora portátil de 750 ml con potente motor y diseño elegante es tu aliada perfecta. Descubre la facilidad de preparar tus bebidas favoritas en cualquier lugar. ¡Tu dosis de salud y sabor te espera!\n\n✅ Capacidad de 750 ml\n\n✅ Cuchillas de acero de precisión\n\n✅ Apta para triturar hielo\n\n✅ Motor de alta potencia\n\n✅ Pantalla digital\n\n✅ Fácil de usar y limpiar\n\n✅ Disponible en varios colores'
  },
  {
    id: 'hogar-linterna-portable-usb',
    name: 'LINTERNA PORTABLE USB',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '28175',
    price: 9100,
    stock: 4,
    image: 'assets/products/hogar/1/linterna-portable-usb.jpg',
    description: ''
  },
  {
    id: 'hogar-llavero-metalico-figura-bala',
    name: 'LLAVERO METALICO FIGURA BALA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '38310',
    price: 4800,
    stock: 8,
    image: 'assets/products/hogar/1/llavero-metalico-figura-bala.jpg',
    description: ''
  },
  {
    id: 'hogar-lonchera-electrica-portatil',
    name: 'LONCHERA ELECTRICA PORTATIL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '80556',
    price: 52000,
    stock: 3,
    image: 'assets/products/hogar/1/lonchera-electrica-portatil.jpg',
    description: 'DETALLE DEL PRODUCTO\n\nCalienta los alimentos de manera segura evitando el horno microondas.\n\nLigera y fácil de usar.\n\nTapa con sellado hermético que evita derrames.\n\nResistencia a la humedad.\n\nMínimo consumo de electricidad 40 watts.\n\nHigiénica, inolora.\n\nManija para transportarla fácil.\n\nIncluye recipiente para sopa o ensaladas con tapa.\n\nIncluye depósito con cuchara.\n\nCapacidad 1,05 L (0.6L Principal + 0.45L Recipiente)\n\nLa Lonchera Eléctrica Porta Comida calentador facilita el transporte de sus alimentos, asi como calentarlos y consumirlos.\n\nIdeal para llevar los alimentos a la oficina, al colegio o la universidad.\n\nCalienta la comida sin riesgo de quemaduras, cuenta con una manija que facilita llevarla a cualquier lugar.\n\nCuenta con una tapa de gran sellado que no permite derrames, es higiénica y no genera olores.\n\nEl consumo de energía es muy bajo, el material que está elaborada es seguro y resistente a altas temperaturas.\n\nSi tu día transcurre en diferentes ambientes donde no estás seguro si hay o no donde calentar tu almuerzo, ya no tendrás inconvenientes, solo necesitas una toma eléctrica cerca y listo.'
  },
  {
    id: 'hogar-luces-rgb-5metros',
    name: 'LUCES RGB 5METROS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '76251',
    price: 35200,
    salePrice: 21100,
    stock: 10,
    image: 'assets/products/hogar/1/luces-rgb-5metros.jpg',
    gallery: [
      'assets/products/hogar/1/luces-rgb-5metros-1.jpg'
    ],
    description: 'LUCES PLEGABLES'
  },
  {
    id: 'hogar-maquina-coser-manual-portatil',
    name: 'MAQUINA COSER MANUAL PORTATIL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '32025',
    price: 31800,
    stock: 3,
    image: 'assets/products/hogar/1/maquina-coser-manual-portatil.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'hogar-maquina-de-coser-mas-tabla',
    name: 'MAQUINA DE COSER MAS TABLA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '26095',
    price: 93200,
    salePrice: 46600,
    stock: 6,
    image: 'assets/products/hogar/1/maquina-de-coser-mas-tabla.jpg',
    gallery: [
      'assets/products/hogar/1/maquina-de-coser-mas-tabla-1.jpg'
    ],
    description: '-\n\nMini maquina de coser\n\n-\n\nCuenta con Bombilla en zona de costura\n\n-\n\nVoltaje: 110V/220V\n\n-\n\nModo Mecánica\n\n-\n\nAdecuado para tejidos ligeros\n\n-\n\nLargo y ancho de puntada ajustables\n\n-\n\nTiene un cortador de líneas.\n\n-\n\nCon función de retroceso\n\n-\n\nCorriente tipo continua o batería\n\n-\n\nAccesorios incluidos: pedal\n\n-\n\nIdeal para cortar y confeccionar'
  },
  {
    id: 'hogar-maquina-de-desayuno-3-en-1-sokany',
    name: 'MAQUINA DE DESAYUNO 3 EN 1 SOKANY',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '61215',
    price: 299800,
    stock: 5,
    image: 'assets/products/hogar/1/maquina-de-desayuno-3-en-1-sokany.jpg',
    description: '¡Despierta tus mañanas con la MAQUINA DE DESAYUNO 3 EN 1 SOKANY! Prepara café fresco, asa tus tostadas y cocina tus huevos y salchichas simultáneamente. El desayuno perfecto, listo en minutos. ¡Tu tiempo es oro, y tus mañanas, deliciosas!'
  },
  {
    id: 'hogar-maquina-de-embutidos-salchicha',
    name: 'MAQUINA DE EMBUTIDOS SALCHICHA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '68929',
    price: 37600,
    stock: 2,
    image: 'assets/products/hogar/1/maquina-de-embutidos-salchicha.jpg',
    description: 'Prepara tus propias salchichas en casa de forma fácil y profesional.\n\nEste embutidor deincreible calidad es resistente, práctico y fácil de usar. Incluye boquilla intercambiable para diferentes tamaños y permite un llenado uniforme sin esfuerzo.\n\nMás control, mejor calidad y sabor casero en cada preparación.'
  },
  {
    id: 'hogar-maquina-empanaditas-automatica',
    name: 'MAQUINA EMPANADITAS AUTOMATICA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '46282',
    price: 36000,
    stock: 4,
    image: 'assets/products/hogar/1/maquina-empanaditas-automatica.jpg',
    description: 'En segundos tendrás dumplings perfectos, iguales a los de restaurante.\n\nOlvídate del trabajo manual y prepara dumplings en solo 4 pasos súper fáciles:\n\nColoca la masa.\n\nAgrega tu relleno favorito (carne, pollo, verduras o lo que quieras).\n\nUnta un poco de aceite comestible.\n\nPresiona el botón y ¡listo!'
  },
  {
    id: 'hogar-masajeador-electrico',
    name: 'MASAJEADOR ELECTRICO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '47423',
    price: 12100,
    salePrice: 9900,
    stock: 40,
    image: 'assets/products/hogar/1/masajeador-electrico.jpg',
    gallery: [
      'assets/products/hogar/1/masajeador-electrico-1.jpg'
    ],
    description: '• Ideal para masajes en los brazos, piernas, espalda y el abdomen\n\n• Apagado automático después de 15 min.\n\n• Masajeador eléctrico\n\n• Cable de carga tipo V8\n\n• 8 modos\n\n• 19 velocidades'
  },
  {
    id: 'hogar-mini-licuadora-portatil',
    name: 'MINI LICUADORA PORTATIL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '90196',
    price: 24000,
    stock: 200,
    image: 'assets/products/hogar/2/mini-licuadora-portatil.jpg',
    gallery: [
      'assets/products/hogar/2/mini-licuadora-portatil-1.jpg',
      'assets/products/hogar/2/mini-licuadora-portatil-2.jpg',
      'assets/products/hogar/2/mini-licuadora-portatil-3.jpg'
    ],
    description: 'Licuadora Portátil Recargable\n\nPrepara tus jugos, batidos y smoothies favoritos en cualquier lugar de forma rápida y práctica.\n\nEsta licuadora portátil es ideal para llevar al trabajo, gimnasio, universidad, viajes o tener en casa. Su diseño compacto permite usarla fácilmente sin ocupar mucho espacio, y al ser recargable, puedes utilizarla sin necesidad de estar conectada todo el tiempo.\n\nCuenta con capacidad de 380 ml, tamaño perfecto para una porción personal. Es práctica, ligera y fácil de usar, ideal para preparar bebidas frescas con frutas, agua, leche o suplementos.\n\nCaracterísticas principales:\n\nLicuadora portátil y recargable\n\nCapacidad de 380 ml\n\nDiseño compacto y fácil de transportar\n\nIdeal para jugos, batidos y smoothies\n\nFácil de usar y limpiar\n\nPerfecta para casa, oficina, gimnasio o viajes\n\nColor rosa llamativo y moderno\n\nUna excelente opción para quienes quieren cuidarse, ahorrar tiempo y disfrutar bebidas frescas en cualquier momento.\n\nLlévala contigo y prepara tus bebidas favoritas donde quieras.'
  },
  {
    id: 'hogar-molde-de-empanadas-sencilla',
    name: 'MOLDE DE EMPANADAS SENCILLA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '77048',
    price: 15900,
    salePrice: 10200,
    stock: 11,
    image: 'assets/products/hogar/2/molde-de-empanadas-sencilla.jpg',
    description: 'PRODUCTO ALTAMENNTE ROTATIVO'
  },
  {
    id: 'hogar-molde-hamburguesas',
    name: 'MOLDE HAMBURGUESAS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '76238',
    price: 19000,
    stock: 1,
    image: 'assets/products/hogar/2/molde-hamburguesas.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'hogar-olla-arrocera-electrica-sokany-blanca-2-2l',
    name: 'OLLA ARROCERA ELECTRICA SOKANY BLANCA 2.2L',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '68328',
    price: 302500,
    salePrice: 199600,
    stock: 3,
    image: 'assets/products/hogar/2/olla-arrocera-electrica-sokany-blanca-2-2l.jpg',
    description: '¡Dile adiós a las esperas! Con la arrocera eléctrica Sokany 2.2L, tendrás el arroz perfecto en tiempo récord y sin esfuerzo. Descubre la comodidad y el sabor que transformarán tus comidas. ¡No te quedes sin la tuya!\n\nDIMENSION GRANDE'
  },
  {
    id: 'hogar-organizador-de-bano-3-niveles',
    name: 'ORGANIZADOR DE BAÑO 3 NIVELES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '56481',
    price: 52000,
    stock: 6,
    image: 'assets/products/hogar/2/organizador-de-bano-3-niveles.jpg',
    description: '¡Tu baño nunca lució tan impecable! Descubre el **Organizador de Baño 3 Niveles** y transforma el desorden en elegancia. Maximiza tu espacio y ten todo a mano. ¿Listo para el antes y después? ¡Te encantará!'
  },
  {
    id: 'hogar-organizador-de-bano-metalico-fino',
    name: 'ORGANIZADOR DE BAÑO METALICO FINO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '79028',
    price: 118400,
    salePrice: 101800,
    stock: 2,
    image: 'assets/products/hogar/2/organizador-de-bano-metalico-fino.jpg',
    gallery: [
      'assets/products/hogar/2/organizador-de-bano-metalico-fino-1.jpg'
    ],
    description: '¡Transforma tu baño en un oasis de orden! Descubre cómo este organizador metálico fino maximiza tu espacio, con estilo y durabilidad inigualables. ¡Todo a tu alcance, cada día más cómodo! ¿Listo para el cambio?\n\neste producto esta excepto de envio gratis debido a su gran tamaño'
  },
  {
    id: 'hogar-pele-papa-x2-combo',
    name: 'PELE PAPA X2 COMBO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '56621',
    price: 5200,
    stock: 6,
    image: 'assets/products/hogar/2/pele-papa-x2-combo.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'hogar-pilas-aa-alcalina-x4-unidades',
    name: 'PILAS AA ALCALINA X4 UNIDADES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '72930',
    price: 6000,
    stock: 62,
    image: 'assets/products/hogar/2/pilas-aa-alcalina-x4-unidades.jpg',
    description: 'PACK DE 4 PILAS INCLUIDAS\n\nPack de 4 baterías alcalinas AA marca Kingever, perfectas para controles, linternas, juguetes, radios y más.\n\nTipo AA 1.5V\n\nExtra Heavy Duty (uso prolongado)\n\nNo recargables\n\nBlíster sellado para mayor seguridad y conservación\n\nAlta durabilidad y rendimiento confiable'
  },
  {
    id: 'hogar-pilas-aaa-alcalina-x4-unidades',
    name: 'PILAS AAA ALCALINA X4 UNIDADES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '65725',
    price: 6800,
    salePrice: 5000,
    stock: 30,
    image: 'assets/products/hogar/2/pilas-aaa-alcalina-x4-unidades.jpg',
    description: 'PACK DE 4 PILAS INCLUIDAS\n\n-\n\nPack de 4 baterías alcalinas AA marca Kingever, perfectas para controles, linternas, juguetes, radios y más.\n\n-\n\nTipo AAA 1.5V\n\n-\n\nExtra Heavy Duty (uso prolongado)\n\n-\n\nNo recargables\n\n-\n\nBlíster sellado para mayor seguridad y conservación\n\n-\n\nAlta durabilidad y rendimiento confiable'
  },
  {
    id: 'hogar-pisador-de-papa',
    name: 'PISADOR DE PAPA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '30146',
    price: 6000,
    salePrice: 3200,
    stock: 6,
    image: 'assets/products/hogar/2/pisador-de-papa.jpg',
    description: ''
  },
  {
    id: 'hogar-pistola-hidrolavadora-portatil-con-dos-baterias',
    name: 'PISTOLA HIDROLAVADORA PORTATIL CON DOS BATERIAS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '44899',
    price: 138000,
    salePrice: 82800,
    stock: 6,
    image: 'assets/products/hogar/2/pistola-hidrolavadora-portatil-con-dos-baterias.jpg',
    gallery: [
      'assets/products/hogar/2/pistola-hidrolavadora-portatil-con-dos-baterias-1.jpg',
      'assets/products/hogar/2/pistola-hidrolavadora-portatil-con-dos-baterias-2.jpg'
    ],
    description: '¡Libera tu coche del polvo y la suciedad al instante! Con esta hidrolavadora portátil, dos baterías y múltiples usos, la limpieza se vuelve un placer. ¿Listo para el brillo perfecto sin complicaciones? ¡Descúbrelo ahora!\n\n- Accesorio incluido'
  },
  {
    id: 'hogar-pistola-sopladora-potente',
    name: 'PISTOLA SOPLADORA POTENTE',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '90493',
    price: 119800,
    stock: 0,
    image: 'assets/products/hogar/2/pistola-sopladora-potente.jpg',
    description: '¡Despídete del polvo y la suciedad! Esta pistola sopladora de alta potencia, con su impresionante fuerza de aire, dejará tus espacios impecables al instante. Descubre cómo la limpieza se vuelve fácil y rápida. ¡Te sorprenderá su poder!\n\npistola sopladora inalámbrica de alta potencia (marca HVVCA, modelo Storm Machine), equipada con una batería de litio de 48Vy diseñada para limpiar polvo en el hogar o secar y detallar autos'
  },
  {
    id: 'hogar-plancha-electrica',
    name: 'PLANCHA ELECTRICA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '59943',
    price: 66000,
    stock: 2,
    image: 'assets/products/hogar/2/plancha-electrica.jpg',
    description: '¡Dile adiós a las arrugas de forma rápida y fácil! Con su potente vapor y suela antiadherente, esta plancha eléctrica dejará tu ropa impecable en segundos. ¡Descubre un planchado sin esfuerzo y resultados profesionales!'
  },
  {
    id: 'hogar-plancha-para-cabello-3d',
    name: 'PLANCHA PARA CABELLO 3D',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '33567',
    price: 54500,
    salePrice: 38200,
    stock: 3,
    image: 'assets/products/hogar/2/plancha-para-cabello-3d.jpg',
    description: ''
  },
  {
    id: 'hogar-porta-huevos-plastico-apilable-2-piezas-15-unidades',
    name: 'PORTA HUEVOS PLASTICO APILABLE / 2 PIEZAS /   15 UNIDADES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '79935',
    price: 22600,
    salePrice: 19900,
    stock: 3,
    image: 'assets/products/hogar/2/porta-huevos-plastico-apilable-2-piezas-15-unidades.jpg',
    description: 'Organiza tus huevos de forma práctica, segura y elegante.\n\nCon nuestro porta huevos plástico apilable, podrás mantener tu nevera mucho más ordenada y aprovechar mejor el espacio.\n\nBeneficios principales:\n\nCapacidad para 15 huevos\n\nDiseño apilable, ideal para ahorrar espacio\n\nTapa resistente con ventilación\n\nProtege los huevos y evita que se rueden o se rompan\n\nMaterial plástico práctico, liviano y fácil de limpiar\n\nPerfecto para el hogar, negocios, restaurantes o emprendimientos\n\nSu diseño moderno permite tener los huevos siempre visibles, organizados y protegidos dentro de la nevera.\n\nUn producto útil, económico y de alta rotación para tus clientes.\n\nHaz que tu cocina se vea más ordenada y funcional con este práctico porta huevos.'
  },
  {
    id: 'hogar-portabebes-portatil',
    name: 'PORTABEBES PORTATIL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '34368',
    price: 34800,
    salePrice: 19100,
    stock: 4,
    image: 'assets/products/hogar/2/portabebes-portatil.jpg',
    description: 'PRODUCTO ALTAMENTE ROTATIVO'
  },
  {
    id: 'hogar-rayador-de-verduras-vegetales',
    name: 'RAYADOR DE VERDURAS VEGETALES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '78943',
    price: 50100,
    salePrice: 38100,
    stock: 0,
    image: 'assets/products/hogar/2/rayador-de-verduras-vegetales.jpg',
    description: 'Ahorra tiempo en la cocina con este rallador y cortador multifuncional.\n\nCon diferentes cuchillas intercambiables, puedes rallar, rebanar y cortar verduras en segundos de forma rápida y segura. Su diseño compacto y fácil de usar lo hace ideal para el día a día.\n\nMás práctico, más rápido y sin esfuerzo en cada preparación.'
  },
  {
    id: 'hogar-reloj-rgb-despertador',
    name: 'RELOJ RGB DESPERTADOR',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '44439',
    price: 26000,
    stock: 6,
    image: 'assets/products/hogar/2/reloj-rgb-despertador.jpg',
    gallery: [
      'assets/products/hogar/2/reloj-rgb-despertador-1.jpg'
    ],
    description: '• Ilumina con 7 colores diferentes para crear un ambiente.\n\n• Muestra hora, fecha, día, mes, semana y temperatura.\n\n• Funciona como luz constante para dormir.\n\n• Tamaño 8x8x8 cm, ligero y fácil de colocar en espacio.\n\n• Funciona con 3 pilas AAA (no incluidas).'
  },
  {
    id: 'hogar-roceador-de-aceite-profesional',
    name: 'ROCEADOR DE ACEITE PROFESIONAL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '58096',
    price: 26000,
    salePrice: 21100,
    stock: 5,
    image: 'assets/products/hogar/2/roceador-de-aceite-profesional.jpg',
    description: 'Botella Rociadora Multifuncional\n\n- Rociado fino y uniforme para mejor control\n\n- Ahorra aceite y evita desperdicios\n\n- Ideal para cocina, air fryer y limpieza\n\n- Sistema anti-derrames con bloqueo\n\n- Material resistente y duradero\n\n- Diseño práctico y fácil de usar\n\nPerfecta para una cocina más eficiente y saludable'
  },
  {
    id: 'hogar-saca-corchos-con-destapador',
    name: 'SACA CORCHOS CON DESTAPADOR',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '97070',
    price: 4400,
    stock: 9,
    image: 'assets/products/hogar/2/saca-corchos-con-destapador.jpg',
    gallery: [
      'assets/products/hogar/2/saca-corchos-con-destapador-1.jpg'
    ],
    description: '¡El dúo perfecto para tus celebraciones! Abre tus vinos y cervezas al instante con este indispensable sacacorchos 2 en 1. ¡Prepárate para disfrutar sin esperas ni complicaciones! ¿Listo para el brindis?'
  },
  {
    id: 'hogar-secador-de-ropa-portatil',
    name: 'SECADOR DE ROPA PORTATIL',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '81652',
    price: 70000,
    stock: 2,
    image: 'assets/products/hogar/2/secador-de-ropa-portatil.jpg',
    description: 'PORTATIL\n\nNO RESISTE AL AGUA'
  },
  {
    id: 'hogar-secador-de-zapatos-r8',
    name: 'SECADOR DE ZAPATOS R8',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '58108',
    price: 36400,
    stock: 6,
    image: 'assets/products/hogar/2/secador-de-zapatos-r8.jpg',
    description: ''
  },
  {
    id: 'hogar-secador-zapatos-economico',
    name: 'SECADOR ZAPATOS ECONOMICO',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '75575',
    price: 33600,
    salePrice: 23200,
    stock: 7,
    image: 'assets/products/hogar/2/secador-zapatos-economico.jpg',
    description: ''
  },
  {
    id: 'hogar-secadora-de-unas',
    name: 'SECADORA DE UÑAS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '50819',
    price: 87900,
    salePrice: 64200,
    stock: 7,
    image: 'assets/products/hogar/2/secadora-de-unas.jpg',
    description: 'LAMPARA UV FUNCIONAL PEDICURE\n\nCABLE INCLUIDO\n\n3 OPCIONES DE CALOR Y DURABALIDAD'
  },
  {
    id: 'hogar-sello-bajo-puerta',
    name: 'SELLO BAJO PUERTA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '31532',
    price: 9800,
    stock: 0,
    image: 'assets/products/hogar/2/sello-bajo-puerta.jpg',
    gallery: [
      'assets/products/hogar/2/sello-bajo-puerta-1.jpg'
    ],
    description: '¡Detén las corrientes de aire y el ruido de forma instantánea! Este ingenioso **Sello Bajo Puerta** se adapta a cualquier espacio, creando una barrera infranqueable. Descubre cómo transforma tu hogar en un oasis de paz y confort. ¡No te quedes sin el tuyo!\n\n✅ Bloquea el paso del aire frío y caliente.\n\n✅ Evita la entrada de polvo, insectos, bichos y ayuda a impedir el paso de ratones pequeños.\n\n✅ Reduce el ruido exterior.\n\n✅ Material de espuma flexible, resistente y duradero.\n\n✅ Fácil de instalar y se puede cortar a la medida de la puerta.\n\n✅ Ideal para hogares, oficinas, locales y apartamentos.'
  },
  {
    id: 'hogar-set-cocina-utencilios',
    name: 'SET COCINA UTENCILIOS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '23581',
    price: 31200,
    salePrice: 20600,
    stock: 15,
    image: 'assets/products/hogar/2/set-cocina-utencilios.jpg',
    gallery: [
      'assets/products/hogar/2/set-cocina-utencilios-1.jpg'
    ],
    description: 'Set de Cocina Multifuncional 4 en 1\n\nUn kit práctico y elegante para tu cocina que incluye:\n\nTabla de cortar resistente y fácil de limpiar.\n\nCuchillo multiusos de hoja afilada, ideal para carnes, frutas y verduras.\n\nTijeras de cocina robustas para cortar alimentos o empaques.\n\nPelador ergonómico para frutas y vegetales.'
  },
  {
    id: 'hogar-set-cocina-x4',
    name: 'SET COCINA X4',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '44569',
    price: 6200,
    stock: 1,
    image: 'assets/products/hogar/2/set-cocina-x4.jpg',
    description: ''
  },
  {
    id: 'hogar-set-cuchillos-x13-und',
    name: 'SET CUCHILLOS X13 UND',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '49061',
    price: 100300,
    salePrice: 62200,
    stock: 1,
    image: 'assets/products/hogar/2/set-cuchillos-x13-und.jpg',
    description: '¡Eleva tu cocina a otro nivel! Descubre la precisión y el estilo con este espectacular SET DE CUCHILLOS X13. Diseñado para cortar, filetear y picar con la máxima facilidad y un toque profesional. ¿Listo para deslumbrar con tus creaciones culinarias? ¡No esperes más!'
  },
  {
    id: 'hogar-set-de-cocina-x4',
    name: 'SET DE COCINA X4',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '47610',
    price: 39800,
    stock: 4,
    image: 'assets/products/hogar/2/set-de-cocina-x4.jpg',
    description: 'Set de utensilios de cocina en acero inoxidable, práctico y resistente para el uso diario.\n\nIncluye tijeras, pelador, cuchillo y hacha de cocina, todo en un solo empaque. Sus mangos de colores ofrecen buen agarre y comodidad, mientras que sus hojas de acero ayudan a cortar, pelar y preparar alimentos con mayor facilidad.\n\nIdeal para tener una cocina más completa, ordenada y funcional.'
  },
  {
    id: 'hogar-set-de-jarra-con-6-vasos-7-piezas',
    name: 'SET DE JARRA CON 6 VASOS – 7 PIEZAS',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '50356',
    price: 84300,
    salePrice: 44700,
    stock: 2,
    image: 'assets/products/hogar/2/set-de-jarra-con-6-vasos-7-piezas.jpg',
    description: 'Ideal para servir agua, jugos, limonadas y tus bebidas favoritas. 🥤🍋\n\n✅ Incluye 1 jarra + 6 vasos\n\n✅ Jarra con tapa y asa lateral\n\n✅ Diseño transparente acanalado\n\n✅ Medida jarra: 24 × 11 cm aprox.\n\n✅ Medida vasos: 9 × 8 cm aprox.\n\n✅ Práctico para el hogar, reuniones y celebraciones'
  },
  {
    id: 'hogar-set-morral-totto-x3-unidades',
    name: 'SET MORRAL TOTTO X3 UNIDADES',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '86739',
    price: 119800,
    stock: 5,
    image: 'assets/products/hogar/2/set-morral-totto-x3-unidades.jpg',
    description: '¡Prepárate para robar miradas! Este SET MORRAL TOTTO X3 es la combinación perfecta de estilo vibrante y calidad inigualable. ¡Descubre cómo tus aventuras cobran vida con este trío indispensable! ¿Listo para llevarlo todo con Totto?'
  },
  {
    id: 'hogar-set-morral-totto-x3-unidades-a1',
    name: 'SET MORRAL TOTTO X3 UNIDADES A1',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '28654',
    price: 136000,
    salePrice: 89800,
    stock: 3,
    image: 'assets/products/hogar/2/set-morral-totto-x3-unidades-a1.jpg',
    description: '¡Prepárate para deslumbrar! Este set Totto X3 es la combinación perfecta de estilo y funcionalidad. Con materiales de alta calidad, diseño moderno y durabilidad que te acompaña siempre, ¿listo para llevar tu día al siguiente nivel? ¡No te quedes sin el tuyo!'
  },
  {
    id: 'hogar-set-morral-totto-x3-unidades-a3',
    name: 'SET MORRAL TOTTO X3 UNIDADES A3',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '69977',
    price: 137200,
    salePrice: 83700,
    stock: 3,
    image: 'assets/products/hogar/2/set-morral-totto-x3-unidades-a3.jpg',
    description: '¡Prepárate para el éxito! Este set Totto x3 te ofrece estilo, calidad y resistencia en cada aventura. Diseños modernos que te harán destacar. ¿Listo para llevarlo todo con la máxima durabilidad? ¡Descubre más!'
  },
  {
    id: 'hogar-set-x3-cuchillos-cocina',
    name: 'SET X3 CUCHILLOS COCINA',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '38242',
    price: 10300,
    salePrice: 9200,
    stock: 15,
    image: 'assets/products/hogar/2/set-x3-cuchillos-cocina.jpg',
    description: ''
  },
  {
    id: 'hogar-silla-modular',
    name: 'SILLA MODULAR',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '98929',
    price: 13800,
    stock: 10,
    image: 'assets/products/hogar/2/silla-modular.jpg',
    description: '¡Imagina un espacio que se transforma contigo! La Silla Modular es la solución vibrante y adaptable que estabas esperando. Rediseña tu entorno con estilo y funcionalidad. ¿Listo para jugar y crear? ¡Descubre su potencial!'
  },
  {
    id: 'hogar-soporte-decodificador-tv',
    name: 'SOPORTE DECODIFICADOR TV',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '14339',
    price: 22500,
    stock: 10,
    image: 'assets/products/hogar/2/soporte-decodificador-tv.jpg',
    description: '¡Adiós al desorden! Este soporte revolucionario eleva tu experiencia TV, organizando tu decodificador y router con estilo. Diseño elegante, fácil instalación y máxima capacidad. ¡Transforma tu entretenimiento en segundos!'
  },
  {
    id: 'hogar-taser-autodefensa-taser',
    name: 'TASER AUTODEFENSA TASER',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '60716',
    price: 33800,
    salePrice: 22300,
    stock: 0,
    image: 'assets/products/hogar/2/taser-autodefensa-taser.jpg',
    description: 'LINTERNA AUTODEFENSA TIPO 800: compacta, potente y fácil de llevar. Cuenta con linterna de alta intensidad y sistema de descarga eléctrica para mayor seguridad y protección personal en cualquier momento. Ideal para tener tranquilidad donde vayas.'
  },
  {
    id: 'hogar-utensilios-cocina-x12-und',
    name: 'UTENSILIOS COCINA X12 UND',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '51178',
    price: 56000,
    stock: 3,
    image: 'assets/products/hogar/2/utensilios-cocina-x12-und.jpg',
    description: '¡Transforma tu cocina! Este set de 12 utensilios esenciales, con elegantes mangos de madera, te invita a crear platos increíbles. ¿Listo para elevar tus habilidades culinarias? ¡Descúbrelos todos!'
  },
  {
    id: 'hogar-ventilador-ja-4c',
    name: 'VENTILADOR JA-4C',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '63513',
    price: 27600,
    salePrice: 14100,
    stock: 0,
    image: 'assets/products/hogar/2/ventilador-ja-4c.jpg',
    description: '-\n\nVentilador 5 aspas\n\n-\n\n1 Velocidad\n\n-\n\nConexión tipo USB\n\n-\n\nVoltaje DC: 4V\n\n-\n\nGiro 360°\n\n-\n\n1 Adhesivo'
  },
  {
    id: 'hogar-ventilador-mini-recargable-usb',
    name: 'VENTILADOR MINI RECARGABLE USB',
    category: 'hogar',
    categoryLabel: 'Hogar',
    ref: '82253',
    price: 31600,
    salePrice: 17700,
    stock: 2,
    image: 'assets/products/hogar/2/ventilador-mini-recargable-usb.jpg',
    description: 'Se trata de un mini ventilador portátil y recargable de color verde brillante. En su base cuenta con un panel de control que incluye botones de encendido y apagado, junto con luces indicadoras para el nivel de batería y las diferentes velocidades del aire. La rejilla frontal tiene un diseño circular con un copo de nieve en el centro, y se presenta junto a su caja de empaque, la cual es blanca con un patron de líneas curvas verdes.'
  }
];

// refs ya usadas (para no repetir al agregar productos nuevos): 84213, 93810, 24592, 13278, 52445, 29772, 61750, 95319, 16328, 19494, 80239, 22337, 57931, 86387, 17602, 62950, 59906, 36224, 88569, 33435, 40180, 42562, 27464, 21348, 42918, 60209, 79574, 99693, 80599, 16863, 45084, 21427, 63377, 44937, 24116, 71615, 33816, 85805, 49813, 36240, 63751, 44763, 79885, 42134, 35342, 45985, 31109, 26800, 83560, 23999, 30106, 43478, 63970, 35161, 40059, 68437, 68405, 58312, 85433, 45367, 54059, 80475, 15239, 68417, 97553, 91558, 81733, 46048, 42098, 39256, 28289, 23434, 98696, 81482, 21395, 87397, 65302, 14165, 13905, 22280, 38657, 40495, 76237, 88907, 61064, 88838, 47875, 25839, 24974, 20221, 53666, 23576, 10160, 94316, 85603, 54336, 47639, 86606, 45046, 24045, 92670, 97302, 37484, 93381, 75313, 56422, 64509, 79118, 90694, 38590, 50570, 81281, 53285, 78072, 19787, 37050, 13478, 70001, 70002, 70003, 70004, 70005, 70006, 70007, 70008, 70009, 70010, 70011, 70012, 70013, 70014, 70015, 70016, 70017, 70018, 70019, 70020, 70021, 70022, 70023, 70024, 70025, 70026, 70027, 70028, 70029, 70030, 70031, 70032, 70033, 70034, 70035, 70036, 70037, 70038, 70039, 70040, 70041, 70042, 70043, 70044, 70045, 70046, 70047, 70048, 70049, 70050, 80001, 80002, 80003, 80004, 80005, 80006, 80007, 80008, 80009, 80010, 80011, 80012, 80013, 80014, 80015, 80016, 80017, 80018, 80019, 80020, 80021, 80022, 80023, 80024, 80025, 80026, 80027, 80028, 80029, 80030, 80031, 80032, 80033, 80034, 80035, 80036, 80037, 80038, 80039, 80040, 80041, 80042, 80043, 80044, 80045, 80046, 80047, 80048, 80049, 80050, 80051, 80052, 80053, 80054, 80055, 80056, 80057, 80058, 80059, 80060, 80061, 80062, 80063, 80064, 80065, 80066, 80067, 80068

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
