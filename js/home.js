// ============================================================
// ZERO DELAY — home.js
// Inicio (rediseño 2026-10): tarjetas del hero (plataformas con su
// precio y productos con foto), cuadrícula de categorías con imágenes que
// van rotando, filas que avanzan solas (se frenan al tocarlas y se pueden
// arrastrar), barra fija inferior del celular y enlaces directos a cada sección o
// producto (#producto/<id>, #combos, #categoria/<slug>, ...).
// Todo sale de data.js: al cambiar precios o productos, el inicio se
// actualiza solo.
// ============================================================

const ZD_HOME_HERO_PLATFORMS = ['netflix', 'disney', 'hbomax', 'spotify', 'primevideo', 'chatgpt'];

// productos del hero: el slug "relojeria" agrupa original y réplica (ver products.js)
const ZD_HOME_HERO_PRODUCTS = [
  { slug: 'perfumeria', label: 'Perfumes' },
  { slug: 'relojeria', label: 'Relojes' },
  { slug: 'tecnologia', label: 'Tecnología' }
];

// foto que representa cada categoría (si el producto deja de existir,
// se usa el primero de la categoría)
const ZD_HOME_CATEGORY_PHOTOS = {
  perfumeria: 'perfume-jpg-le-male-elixir',
  relojeria: 'reloj-kairos-mecanico-al8038-303',
  'relojeria-original': 'reloj-kairos-mecanico-al8038-303',
  'relojeria-replica': 'reloj-rolex-submarine-f11',
  tecnologia: 'tecno-airpods-max-aimantada-1-1',
  hogar: 'hogar-almohada-masajeadora',
  belleza: 'belleza-cepillo-secador-bt028',
  joyeria: 'joya-anillo-van-cleef-azul',
  deporte: 'deporte-balon-voleybol-caucho',
  'camisas-futbol': 'camisa-barcelona-2026',
  mascotas: 'mascota-comedero-mascota-portatil',
  vape: 'vape-beyond'
};

const ZD_HOME_CATEGORY_ORDER = ['perfumeria', 'relojeria-original', 'relojeria-replica', 'tecnologia', 'hogar', 'belleza', 'joyeria', 'camisas-futbol', 'deporte', 'mascotas', 'vape'];

const ZD_HOME_ROW_SIZE = 12;

/* ---------- Utilidades ---------- */
function zdHomeEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function zdHomeProductsOf(slug) {
  return ZD_PRODUCTS.filter((p) => zdProductInCategory(p, slug));
}

function zdHomeCategoryPhoto(slug) {
  const wanted = ZD_PRODUCTS.find((p) => p.id === ZD_HOME_CATEGORY_PHOTOS[slug]);
  const product = wanted || zdHomeProductsOf(slug)[0];
  return product ? zdThumb(product.image) : null;
}

function zdHomeOpenCategory(slug) {
  if (typeof window.zdCloseAllPanels === 'function') window.zdCloseAllPanels();
  window.zdOpenPanel('panelProductos');
  window.zdFilterProductsGrid(slug || null);
}

function zdHomeOpenPlatform(platformId) {
  if (typeof window.zdCloseAllPanels === 'function') window.zdCloseAllPanels();
  window.zdOpenPanel('panelCatalogo');
  setTimeout(() => window.zdExpandCardById('#catalogGrid', platformId), 120);
}

/* ---------- Hero: plataformas con precio ---------- */
function zdHomeRenderHero() {
  const platformsWrap = document.getElementById('heroPlatformTiles');
  if (platformsWrap) {
    ZD_HOME_HERO_PLATFORMS.forEach((id) => {
      const platform = ZD_CATALOG.find((p) => p.id === id);
      if (!platform) return;
      const cheapest = platform.variants.reduce((a, b) => (b.price < a.price ? b : a));
      const tile = zdHomeEl('button', 'hero-tile');
      tile.type = 'button';
      const img = zdHomeEl('img');
      img.src = platform.logo;
      img.alt = '';
      img.width = 40;
      img.height = 40;
      tile.appendChild(img);
      tile.appendChild(zdHomeEl('span', 'hero-tile-name', platform.name.replace(' (HBO)', '').replace('MAX', 'Max')));
      tile.appendChild(zdHomeEl('span', 'hero-tile-note', platform.variants.length > 1 ? 'desde' : cheapest.label));
      tile.appendChild(zdHomeEl('span', 'hero-tile-price', zdFormatCOP(cheapest.price)));
      tile.addEventListener('click', () => zdHomeOpenPlatform(platform.id));
      platformsWrap.appendChild(tile);
    });
  }

  // precio más bajo de todo el streaming, para la etiqueta del grupo
  const minPrice = Math.min(...ZD_CATALOG.flatMap((p) => p.variants.map((v) => v.price)));
  const platformsLabel = document.getElementById('heroPlatformsLabel');
  if (platformsLabel) platformsLabel.textContent = `Streaming desde ${zdFormatCOP(minPrice)}`;

  const productsWrap = document.getElementById('heroProductTiles');
  if (productsWrap) {
    ZD_HOME_HERO_PRODUCTS.forEach(({ slug, label }) => {
      const count = zdHomeProductsOf(slug).length;
      if (!count) return;
      const tile = zdHomeEl('button', 'hero-tile hero-tile--product');
      tile.type = 'button';
      const photo = zdHomeCategoryPhoto(slug);
      if (photo) {
        const img = zdHomeEl('img');
        img.src = photo;
        img.alt = '';
        img.width = 120;
        img.height = 120;
        tile.appendChild(img);
      }
      tile.appendChild(zdHomeEl('span', 'hero-tile-name', label));
      tile.appendChild(zdHomeEl('span', 'hero-tile-note', `${count} productos`));
      tile.addEventListener('click', () => zdHomeOpenCategory(slug));
      productsWrap.appendChild(tile);
    });
  }

  // mayor ahorro entre los combos, para el enlace del hero
  const maxSavings = Math.max(0, ...ZD_COMBOS.map((c) => zdComboPricing(c).savings));
  const combosLink = document.getElementById('heroCombosLink');
  if (combosLink && maxSavings > 0) combosLink.textContent = `Combos: ahorra hasta ${zdFormatCOP(maxSavings)}`;
}

/* ---------- Cuadrícula de categorías: cada recuadro va mostrando, uno
   tras otro, fotos o logos de lo que hay adentro ---------- */
const ZD_HOME_DUOS = [['netflix', 'spotify'], ['disney', 'hbomax'], ['primevideo', 'crunchyroll'], ['chatgpt', 'canva'], ['youtube', 'paramount']];

function zdHomeLogo(id) {
  const platform = ZD_CATALOG.find((p) => p.id === id);
  return platform ? platform.logo : null;
}

function zdHomeCategorySlides(slug) {
  // solo productos cuya categoría principal es esta (los que llegan por
  // extraCategories, p. ej. un cepillo secador en Hogar, confunden en la foto)
  const all = zdHomeProductsOf(slug);
  const own = all.filter((p) => p.category === slug);
  const list = own.length >= 3 ? own : all;
  const featured = ZD_PRODUCTS.find((p) => p.id === ZD_HOME_CATEGORY_PHOTOS[slug]);
  const rest = [...list.filter((p) => p.salePrice), ...list.filter((p) => !p.salePrice)].filter((p) => p !== featured);
  return [featured, ...rest].filter(Boolean).slice(0, 6).map((p) => ({ src: zdThumb(p.image) }));
}

function zdHomeTileSlides(kind) {
  if (kind === 'streaming') {
    return ['netflix', 'disney', 'hbomax', 'spotify', 'primevideo', 'chatgpt', 'crunchyroll', 'youtube']
      .map(zdHomeLogo).filter(Boolean).map((src) => ({ src, cover: true }));
  }
  if (kind === 'combos') {
    return [...ZD_COMBOS].map((c) => ({ c, s: zdComboPricing(c).savings })).sort((a, b) => b.s - a.s)
      .slice(0, 6).filter((x) => x.c.image).map((x) => ({ src: zdThumb(x.c.image), cover: true }));
  }
  if (kind === 'ofertas') {
    return ZD_PRODUCTS.filter((p) => p.salePrice)
      .map((p) => ({ p, pct: Math.round((1 - p.salePrice / p.price) * 100) }))
      .sort((a, b) => b.pct - a.pct).slice(0, 8)
      .map((x) => ({ src: zdThumb(x.p.image), badge: `-${x.pct}%` }));
  }
  if (kind === 'arma') {
    return ZD_HOME_DUOS.map((pair) => ({ duo: pair.map(zdHomeLogo).filter(Boolean) })).filter((x) => x.duo.length === 2);
  }
  return [];
}

function zdHomeBuildSlide(slide, index) {
  const el = zdHomeEl('span', `home-cat-slide${slide.cover ? ' home-cat-slide--cover' : ''}${index === 0 ? ' is-active' : ''}`);
  const addImg = (src, parent) => {
    const img = zdHomeEl('img');
    img.alt = '';
    img.width = 120;
    img.height = 120;
    img.decoding = 'async';
    // solo la primera imagen se descarga de entrada; las demás, justo antes de mostrarse
    if (index === 0) { img.src = src; img.loading = 'lazy'; } else img.dataset.src = src;
    parent.appendChild(img);
  };
  if (slide.duo) {
    el.classList.add('home-cat-slide--duo');
    addImg(slide.duo[0], el);
    el.appendChild(zdHomeEl('span', 'home-cat-duo-plus', '+'));
    addImg(slide.duo[1], el);
  } else {
    addImg(slide.src, el);
  }
  if (slide.badge) el.appendChild(zdHomeEl('span', 'home-cat-badge', slide.badge));
  return el;
}

function zdHomeLoadSlide(slide) {
  if (!slide) return;
  slide.querySelectorAll('img[data-src]').forEach((img) => { img.src = img.dataset.src; img.removeAttribute('data-src'); });
}

function zdHomeRenderCategories() {
  const grid = document.getElementById('homeCategoryGrid');
  if (!grid) return;

  const open = (panelId) => () => { window.zdCloseAllPanels(); window.zdOpenPanel(panelId); };
  const digital = [
    { label: 'Streaming', note: `${ZD_CATALOG.length} plataformas`, slides: zdHomeTileSlides('streaming'), action: open('panelCatalogo') },
    { label: 'Combos', note: `${ZD_COMBOS.length} combos`, slides: zdHomeTileSlides('combos'), action: open('panelCombos') },
    { label: 'Ofertas', note: 'combos y productos', slides: zdHomeTileSlides('ofertas'), hot: true, action: open('panelOfertas') },
    { label: 'Arma tu combo', note: 'hasta 15% menos', slides: zdHomeTileSlides('arma'), build: true, action: open('panelCustomCombo') }
  ];
  const physical = ZD_HOME_CATEGORY_ORDER
    .map((slug) => ({ slug, count: zdHomeProductsOf(slug).length }))
    .filter((c) => c.count > 0)
    .map(({ slug, count }) => ({ label: zdCategoryLabel(slug), note: `${count} productos`, slides: zdHomeCategorySlides(slug), action: () => zdHomeOpenCategory(slug) }));

  const tiles = [];
  [...digital, ...physical].forEach((cat) => {
    const tile = zdHomeEl('button', `home-cat${cat.hot ? ' home-cat--hot' : ''}${cat.build ? ' home-cat--build' : ''}`);
    tile.type = 'button';
    const media = zdHomeEl('span', 'home-cat-media');
    cat.slides.forEach((slide, i) => media.appendChild(zdHomeBuildSlide(slide, i)));
    tile.appendChild(media);
    tile.appendChild(zdHomeEl('span', 'home-cat-name', cat.label));
    tile.appendChild(zdHomeEl('span', 'home-cat-note', cat.note));
    tile.addEventListener('click', cat.action);
    grid.appendChild(tile);
    if (cat.slides.length > 1) tiles.push(media);
  });

  zdHomeStartRotation(grid, tiles);
}

/* cada recuadro cambia de imagen cada ~3 s, en momentos distintos para que
   no cambien todos a la vez; solo mientras la cuadrícula está a la vista */
function zdHomeStartRotation(grid, tiles) {
  if (!tiles.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  tiles.forEach((media) => zdHomeLoadSlide(media.children[1])); // la siguiente de cada uno, ya lista
  let inView = false;
  let tick = 0;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => { inView = entries[0].isIntersecting; }, { threshold: 0.1 }).observe(grid);
  } else {
    inView = true;
  }
  setInterval(() => {
    if (!inView || document.body.dataset.topPanel || document.visibilityState !== 'visible') return;
    tick += 1;
    tiles.forEach((media, i) => {
      if ((tick + i) % 4 !== 0) return;
      const slides = media.children;
      const current = [...slides].findIndex((s) => s.classList.contains('is-active'));
      const next = (current + 1) % slides.length;
      zdHomeLoadSlide(slides[next]);
      zdHomeLoadSlide(slides[(next + 1) % slides.length]);
      slides[current].classList.remove('is-active');
      slides[next].classList.add('is-active');
    });
  }, 750);
}

/* ---------- Filas del inicio: avanzan solas (zdAutoRow, en effects.js);
   se frenan con el mouse y se pueden arrastrar con el dedo ---------- */
function zdHomePickProducts(list) {
  // primero los que están en oferta, en un orden distinto en cada visita
  const onSale = zdShuffleArray(list.filter((p) => p.salePrice));
  const regular = zdShuffleArray(list.filter((p) => !p.salePrice));
  return [...onSale, ...regular].slice(0, ZD_HOME_ROW_SIZE);
}

function zdHomeBuildRow({ title, items, build, moreLabel, onMore, extra }) {
  if (!items.length) return null;
  const section = zdHomeEl('section', 'home-row');
  const inner = zdHomeEl('div', 'section-inner');

  const head = zdHomeEl('div', 'home-row-head');
  head.appendChild(zdHomeEl('h2', 'home-row-title', title));
  const more = zdHomeEl('button', 'home-row-more', moreLabel || 'Ver todo');
  more.type = 'button';
  more.addEventListener('click', onMore);
  head.appendChild(more);
  inner.appendChild(head);

  const wrap = zdHomeEl('div', 'home-row-wrap');
  const track = zdHomeEl('div', 'home-row-track');
  wrap.appendChild(track);
  let ctrl = null;
  if (typeof window.zdAutoRow === 'function') ctrl = window.zdAutoRow(wrap, track, items, build);
  else items.forEach((item) => { const card = build(item); if (card) track.appendChild(card); });

  // flechas para quien navega con mouse (en celular se arrastra con el dedo)
  ['prev', 'next'].forEach((dir) => {
    const arrow = zdHomeEl('button', `home-row-arrow home-row-arrow--${dir}`, dir === 'prev' ? '‹' : '›');
    arrow.type = 'button';
    arrow.setAttribute('aria-label', dir === 'prev' ? `Anteriores en ${title}` : `Siguientes en ${title}`);
    arrow.addEventListener('click', () => {
      const dist = wrap.clientWidth * 0.8;
      if (ctrl) ctrl.nudge(dir === 'prev' ? dist : -dist);
      else track.scrollBy({ left: dir === 'prev' ? -dist : dist, behavior: 'smooth' });
    });
    wrap.appendChild(arrow);
  });
  inner.appendChild(wrap);

  if (extra) inner.appendChild(extra);
  section.appendChild(inner);
  return section;
}

function zdHomeRenderRows() {
  const container = document.getElementById('homeRows');
  if (!container) return;

  const combosByS = [...ZD_COMBOS]
    .map((c) => ({ c, s: zdComboPricing(c).savings }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 8)
    .map((x) => x.c);

  // aviso de "Arma tu combo" debajo de la fila de combos
  const build = zdHomeEl('button', 'home-build-combo');
  build.type = 'button';
  build.innerHTML = '<span class="home-build-combo-icon" aria-hidden="true">✨</span><span><b>Arma tu propio combo</b><span>10% de descuento con 2 plataformas y 15% con 4 o más.</span></span>';
  build.addEventListener('click', () => window.zdOpenPanel('panelCustomCombo'));

  const offers = ZD_PRODUCTS
    .filter((p) => p.salePrice)
    .sort((a, b) => (b.price - b.salePrice) / b.price - (a.price - a.salePrice) / a.price)
    .slice(0, 40);

  const rows = [
    { title: 'Combos que más ahorran', items: combosByS, build: zdBuildComboCard, moreLabel: `Ver los ${ZD_COMBOS.length}`, onMore: () => window.zdOpenPanel('panelCombos'), extra: build },
    { title: 'Perfumes', items: zdHomePickProducts(zdHomeProductsOf('perfumeria')), build: zdBuildProductCard, onMore: () => zdHomeOpenCategory('perfumeria') },
    { title: 'Relojes', items: zdHomePickProducts(zdHomeProductsOf('relojeria')), build: zdBuildProductCard, onMore: () => zdHomeOpenCategory('relojeria') },
    { title: 'Ofertas en productos', items: zdShuffleArray(offers).slice(0, ZD_HOME_ROW_SIZE), build: zdBuildProductCard, onMore: () => window.zdOpenPanel('panelOfertas') },
    { title: 'Tecnología y hogar', items: zdHomePickProducts([...zdHomeProductsOf('tecnologia'), ...zdHomeProductsOf('hogar')]), build: zdBuildProductCard, onMore: () => zdHomeOpenCategory('tecnologia') },
    { title: 'Para tus mascotas', items: zdHomePickProducts(zdHomeProductsOf('mascotas')), build: zdBuildProductCard, onMore: () => zdHomeOpenCategory('mascotas') }
  ];

  rows.forEach((row) => {
    const el = zdHomeBuildRow(row);
    if (el) container.appendChild(el);
  });
  zdUpdateCartBadges();
}

/* ---------- Barra fija inferior del celular ---------- */
function zdHomeInitBottomBar() {
  const cartBtn = document.getElementById('zdBottomBarCart');
  if (!cartBtn) return;
  cartBtn.addEventListener('click', () => {
    if (cartBtn.classList.contains('has-items')) {
      if (typeof zdRenderCartDrawer === 'function') zdRenderCartDrawer();
      if (typeof window.zdOpenCart === 'function') window.zdOpenCart();
    } else {
      window.zdCloseAllPanels();
      window.zdOpenPanel('panelCatalogoGeneral');
    }
  });
  if (typeof window.zdUpdateMobileCartBar === 'function') window.zdUpdateMobileCartBar();
}

/* ---------- Enlaces directos ----------
   Cada panel deja su dirección en la barra del navegador (sin recargar),
   así se puede copiar y mandar por WhatsApp o TikTok:
   #streaming  #combos  #ofertas  #productos  #arma-tu-combo  #catalogo
   #categoria/<slug>  #producto/<id>  #combo/<id>  #plataforma/<id>   */
const ZD_ROUTE_BY_PANEL = {
  panelCatalogo: 'streaming',
  panelCombos: 'combos',
  panelOfertas: 'ofertas',
  panelCustomCombo: 'arma-tu-combo',
  panelCatalogoGeneral: 'catalogo',
  panelCatalogoTodo: 'todo',
  panelDoxDesigns: 'paginas-web'
};

function zdCurrentRoute() {
  const top = document.body.dataset.topPanel || '';
  if (!top) return '';
  if (top === 'panelProductDetail') {
    const id = document.getElementById('productDetailBody')?.dataset.productId;
    return id ? `producto/${id}` : '';
  }
  if (top === 'panelProductos') {
    return typeof zdProductsCurrentFilter !== 'undefined' && zdProductsCurrentFilter ? `categoria/${zdProductsCurrentFilter}` : 'productos';
  }
  return ZD_ROUTE_BY_PANEL[top] || '';
}

let zdApplyingRoute = false;

function zdSyncRoute() {
  if (zdApplyingRoute) return;
  const route = zdCurrentRoute();
  const target = route ? `#${route}` : location.pathname + location.search;
  if ((route && location.hash !== `#${route}`) || (!route && location.hash && location.hash.length > 1 && zdIsPanelHash(location.hash))) {
    history.replaceState(null, '', target);
  }
}
window.zdSyncRoute = zdSyncRoute;

function zdIsPanelHash(hash) {
  const h = hash.replace(/^#/, '');
  return Object.values(ZD_ROUTE_BY_PANEL).includes(h) || h === 'productos' || /^(producto|categoria|combo|plataforma)\//.test(h);
}

function zdApplyRoute(hash) {
  const h = decodeURIComponent((hash || '').replace(/^#/, ''));
  if (!h || !zdIsPanelHash(`#${h}`)) return;
  zdApplyingRoute = true;
  try {
    window.zdCloseAllPanels();
    const [kind, id] = h.split('/');
    if (kind === 'producto' && ZD_PRODUCTS.some((p) => p.id === id)) {
      window.zdOpenProductDetail(id);
    } else if (kind === 'categoria') {
      window.zdOpenPanel('panelProductos');
      window.zdFilterProductsGrid(id);
    } else if (kind === 'combo') {
      window.zdOpenPanel('panelCombos');
      setTimeout(() => window.zdExpandCardById('#combosGrid', id), 150);
    } else if (kind === 'plataforma') {
      window.zdOpenPanel('panelCatalogo');
      setTimeout(() => window.zdExpandCardById('#catalogGrid', id), 150);
    } else if (kind === 'productos') {
      window.zdOpenPanel('panelProductos');
    } else {
      const panelId = Object.keys(ZD_ROUTE_BY_PANEL).find((k) => ZD_ROUTE_BY_PANEL[k] === kind);
      if (panelId) window.zdOpenPanel(panelId);
    }
  } finally {
    zdApplyingRoute = false;
  }
  zdSyncRoute();
}

document.addEventListener('DOMContentLoaded', () => {
  zdHomeRenderHero();
  zdHomeRenderCategories();
  zdHomeRenderRows();
  zdHomeInitBottomBar();

  window.addEventListener('zd:panel-visibility', zdSyncRoute);
  window.addEventListener('hashchange', () => zdApplyRoute(location.hash));
  // al llegar con un enlace directo, se abre lo que indica (después de
  // que los demás módulos terminaron de prepararse)
  if (location.hash) setTimeout(() => zdApplyRoute(location.hash), 0);
});
