// ============================================================
// ZERO DELAY — home.js
// Inicio (rediseño 2026-10): tarjetas del hero (plataformas con su
// precio y productos con foto), cuadrícula de categorías, filas que el
// cliente desliza con el dedo (reemplazan los carruseles automáticos),
// barra fija inferior del celular y enlaces directos a cada sección o
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

/* ---------- Cuadrícula de categorías ---------- */
function zdHomeRenderCategories() {
  const grid = document.getElementById('homeCategoryGrid');
  if (!grid) return;

  const digital = [
    { label: 'Streaming', note: `${ZD_CATALOG.length} plataformas`, img: ZD_CATALOG.find((p) => p.id === 'netflix')?.logo, action: () => { window.zdCloseAllPanels(); window.zdOpenPanel('panelCatalogo'); } },
    { label: 'Combos', note: `${ZD_COMBOS.length} combos`, img: zdThumb(ZD_COMBOS.find((c) => c.id === 'combo-zero-delay')?.image), action: () => { window.zdCloseAllPanels(); window.zdOpenPanel('panelCombos'); } },
    { label: 'Ofertas', note: 'combos y productos', icon: '🔥', hot: true, action: () => { window.zdCloseAllPanels(); window.zdOpenPanel('panelOfertas'); } },
    { label: 'Arma tu combo', note: 'hasta 15% menos', icon: '✨', action: () => { window.zdCloseAllPanels(); window.zdOpenPanel('panelCustomCombo'); } }
  ];
  const physical = ZD_HOME_CATEGORY_ORDER
    .map((slug) => ({ slug, count: zdHomeProductsOf(slug).length }))
    .filter((c) => c.count > 0)
    .map(({ slug, count }) => ({ label: zdCategoryLabel(slug), note: `${count} productos`, img: zdHomeCategoryPhoto(slug), action: () => zdHomeOpenCategory(slug) }));

  [...digital, ...physical].forEach((cat) => {
    const tile = zdHomeEl('button', `home-cat${cat.hot ? ' home-cat--hot' : ''}`);
    tile.type = 'button';
    const media = zdHomeEl('span', 'home-cat-media');
    if (cat.img) {
      const img = zdHomeEl('img');
      img.src = cat.img;
      img.alt = '';
      img.loading = 'lazy';
      img.width = 120;
      img.height = 120;
      media.appendChild(img);
    } else {
      media.textContent = cat.icon || '';
      media.classList.add('home-cat-media--icon');
    }
    tile.appendChild(media);
    tile.appendChild(zdHomeEl('span', 'home-cat-name', cat.label));
    tile.appendChild(zdHomeEl('span', 'home-cat-note', cat.note));
    tile.addEventListener('click', cat.action);
    grid.appendChild(tile);
  });
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
