// ============================================================
// ZERO DELAY — catalog.js
// Renderiza el catálogo/combos como tarjetas tipo acordeón,
// y maneja el estado básico del carrito (agregar + contador).
// El panel completo del carrito (listado + WhatsApp) llega en el Paso 3.
// ============================================================

const ZD_CART_KEY = 'zd_cart_v1';

function zdFormatCOP(amount) {
  return '$' + amount.toLocaleString('es-CO');
}

/* ---------- Miniatura liviana (WebP, en assets/thumbs/) de una foto de
   producto, combo o Dox, para listados, filas del inicio y carrito. La
   ficha de producto sigue usando la foto grande. Las miniaturas se
   generan con herramientas/generar_miniaturas.mjs; si una todavía no
   existe (producto recién subido), la imagen vuelve sola a la original. ---------- */
function zdThumb(src) {
  if (!src || !/^assets\/(products|combos|dox)\//.test(src)) return src;
  return src.replace(/^assets\//, 'assets/thumbs/').replace(/\.(jpe?g|png|webp)$/i, '.webp');
}

function zdSetThumb(img, src) {
  const thumb = zdThumb(src);
  if (thumb !== src) {
    img.addEventListener('error', () => {
      if (!img.dataset.fallback) { img.dataset.fallback = '1'; img.src = src; }
    }, { once: true });
  }
  img.src = thumb;
}

/* ---------- Render por tandas: muestra las primeras `pageSize` tarjetas y
   agrega más a medida que el cliente baja (o con el botón "Ver más"),
   en vez de construir cientos de tarjetas de golpe. ---------- */
function zdRenderProgressive(grid, items, buildFn, pageSize) {
  pageSize = pageSize || 24;
  if (grid.zdProgressiveObserver) grid.zdProgressiveObserver.disconnect();
  const oldMore = grid.parentElement.querySelector(`.zd-more-btn[data-for="${grid.id}"]`);
  if (oldMore) oldMore.remove();

  let shown = 0;
  const moreBtn = document.createElement('button');
  moreBtn.type = 'button';
  moreBtn.className = 'zd-more-btn';
  moreBtn.dataset.for = grid.id;

  function renderNext() {
    const next = items.slice(shown, shown + pageSize);
    next.forEach((item) => { const card = buildFn(item); if (card) grid.appendChild(card); });
    shown += next.length;
    const left = items.length - shown;
    moreBtn.hidden = left <= 0;
    moreBtn.textContent = `Ver más (${left})`;
    zdUpdateCartBadges();
    zdObserveCardAnimations(grid);
  }

  renderNext();
  grid.insertAdjacentElement('afterend', moreBtn);
  moreBtn.addEventListener('click', renderNext);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting) && shown < items.length) renderNext();
    }, { rootMargin: '600px 0px' });
    observer.observe(moreBtn);
    grid.zdProgressiveObserver = observer;
  }
}

/* ---------- Normaliza texto para búsqueda: minúsculas y sin acentos ---------- */
function zdNormalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function zdGetCart() {
  try {
    const raw = localStorage.getItem(ZD_CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function zdSaveCart(cart) {
  try {
    localStorage.setItem(ZD_CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error('No se pudo guardar el carrito', e);
  }
}

/* ---------- Limpiar carritos guardados: planes retirados y precios viejos de combos ---------- */
// Planes que ya no se venden. El nombre es el que se guardó en el carrito o en un combo personalizado.
const ZD_REMOVED_VARIANTS = [
  { id: 'netflix-13', name: 'Netflix — 13 días' }
];

function zdSanitizeSavedCart() {
  const cart = zdGetCart();
  if (!cart.length) return;

  const removedIds = ZD_REMOVED_VARIANTS.map((v) => v.id);
  const removedNames = ZD_REMOVED_VARIANTS.map((v) => v.name);
  let changed = false;

  const clean = cart.filter((item) => {
    const isRemovedPlan = removedIds.includes(item.id);
    // un combo personalizado con un plan retirado se quita completo (su descuento ya no aplica)
    const hasRemovedPlan = Array.isArray(item.breakdown) && item.breakdown.some((b) => removedNames.includes(b.name));
    if (isRemovedPlan || hasRemovedPlan) changed = true;
    return !isRemovedPlan && !hasRemovedPlan;
  });

  // los combos fijos toman siempre su precio actual
  clean.forEach((item) => {
    const combo = ZD_COMBOS.find((c) => c.id === item.id);
    if (combo && item.price !== combo.price) {
      item.price = combo.price;
      changed = true;
    }
  });

  if (changed) zdSaveCart(clean);
}

zdSanitizeSavedCart();

let zdPrevBadgeQty = 0;

function zdUpdateCartBadges() {
  const cart = zdGetCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  document.querySelectorAll('.cart-badge').forEach((badge) => {
    if (typeof zdAnimateNumber === 'function') {
      zdAnimateNumber(badge, zdPrevBadgeQty, totalQty, (n) => Math.round(n).toString());
    } else {
      badge.textContent = totalQty;
    }
  });
  zdPrevBadgeQty = totalQty;

  if (typeof window.zdUpdateMobileCartBar === 'function') {
    window.zdUpdateMobileCartBar();
  }
}

function zdAddToCart(item, qty) {
  qty = qty || 1;
  const cart = zdGetCart();
  const existing = cart.find((i) => i.id === item.id);
  if (existing) {
    existing.qty += qty;
  } else {
    const entry = { id: item.id, name: item.name, price: item.price, qty };
    if (item.detail) entry.detail = item.detail;
    if (item.breakdown) entry.breakdown = item.breakdown;
    if (item.discountPercent !== undefined) entry.discountPercent = item.discountPercent;
    cart.push(entry);
  }
  zdSaveCart(cart);
  zdUpdateCartBadges();
}

/* ---------- Confirmación visual al agregar ---------- */
const ZD_EMOJI_CHECK = '\u2713'; // marca de verificación

function zdShowAddedToast(button) {
  const original = button.textContent;
  button.classList.add('is-added');
  button.textContent = `Agregado ${ZD_EMOJI_CHECK}`;
  setTimeout(() => {
    button.classList.remove('is-added');
    button.textContent = original;
  }, 1100);
}

/* ---------- Construcción del "logo frame" (real o placeholder de texto) ---------- */
function zdBuildLogoFrame(logoPath, name) {
  const orbit = document.createElement('div');
  orbit.className = 'logo-orbit';

  const frame = document.createElement('div');
  frame.className = 'logo-frame';

  if (logoPath) {
    const img = document.createElement('img');
    img.src = logoPath;
    img.alt = name;
    img.loading = 'lazy';
    img.decoding = 'async';
    frame.appendChild(img);
  } else {
    frame.classList.add('logo-frame--text');
    const span = document.createElement('span');
    span.textContent = name;
    frame.appendChild(span);
  }

  orbit.appendChild(frame);
  return orbit;
}

/* ---------- Tarjetas de plataforma (catálogo) ---------- */
const ZD_NEW_ITEM_IDS = new Set(['youtube', 'combo-vieja-escuela']);

function zdBuildPlatformCard(platform, gridSelector) {
  gridSelector = gridSelector || '#catalogGrid';
  const card = document.createElement('div');
  card.className = 'catalog-card';
  card.dataset.id = platform.id;
  card.dataset.searchName = zdNormalize(platform.name);

  const face = document.createElement('button');
  face.className = 'catalog-card-face';
  face.appendChild(zdBuildLogoFrame(platform.logo, platform.name));

  if (ZD_NEW_ITEM_IDS.has(platform.id)) {
    const newBadge = document.createElement('span');
    newBadge.className = 'catalog-new-badge';
    newBadge.textContent = '🆕 Nuevo';
    face.appendChild(newBadge);
  }

  const nameEl = document.createElement('span');
  nameEl.className = 'catalog-card-name';
  nameEl.textContent = platform.name;
  face.appendChild(nameEl);

  // precio de referencia a la vista; los planes se despliegan al tocar la tarjeta
  const cheapest = Math.min(...platform.variants.map((v) => v.price));
  const fromEl = document.createElement('span');
  fromEl.className = 'catalog-card-price';
  fromEl.textContent = platform.variants.length > 1 ? `Desde ${zdFormatCOP(cheapest)}` : zdFormatCOP(cheapest);
  face.appendChild(fromEl);

  const chevron = document.createElement('span');
  chevron.className = 'catalog-card-chevron';
  chevron.textContent = '+';
  face.appendChild(chevron);

  card.appendChild(face);

  const crossBadge = document.createElement('button');
  crossBadge.className = 'catalog-cross-badge';
  crossBadge.type = 'button';
  crossBadge.textContent = '💡 Combínala y ahorra';
  crossBadge.addEventListener('click', (e) => {
    e.stopPropagation();
    if (typeof window.zdOpenPanel === 'function') window.zdOpenPanel('panelCustomCombo');
  });
  card.appendChild(crossBadge);

  const variantsWrap = document.createElement('div');
  variantsWrap.className = 'catalog-card-variants';

  const variantsList = document.createElement('div');
  variantsList.className = 'variant-list';

  const cheapestPrice = platform.variants.length > 1
    ? Math.min(...platform.variants.map((v) => v.price))
    : null;

  platform.variants.forEach((variant) => {
    const row = document.createElement('div');
    row.className = 'variant-row';

    const isBestPrice = cheapestPrice !== null && variant.price === cheapestPrice;

    const info = document.createElement('div');
    info.className = 'variant-info';
    info.innerHTML = `<span class="variant-label">${variant.label}${isBestPrice ? ' <span class="best-price-badge">Mejor precio</span>' : ''}</span><span class="variant-price">${zdFormatCOP(variant.price)}</span>`;

    const addBtn = document.createElement('button');
    addBtn.className = 'variant-add-btn';
    addBtn.textContent = 'Agregar al carrito';
    addBtn.addEventListener('click', (e) => {
      zdAddToCart({ id: variant.id, name: `${platform.name} — ${variant.label}`, price: variant.price });
      zdShowAddedToast(addBtn);
    });

    row.appendChild(info);
    row.appendChild(addBtn);
    variantsList.appendChild(row);
  });

  variantsWrap.appendChild(variantsList);
  card.appendChild(variantsWrap);

  face.addEventListener('click', () => zdToggleCard(card, gridSelector));

  return card;
}

/* ---------- Tarjetas de combo ---------- */
/* ---------- Emparejar un texto de "incluye" (ej: "Netflix 13 días") con su plataforma y plan real ---------- */
function zdPlatformKeyword(name) {
  return zdNormalize(name.replace(/[()]/g, ' ')).split(/\s+/).filter((w) => w.length > 1)[0] || '';
}

function zdMatchIncludeToVariant(includeText) {
  const norm = zdNormalize(includeText);
  let result = null;
  let bestScore = -1;

  ZD_CATALOG.forEach((platform) => {
    const platformNorm = zdNormalize(platform.name);
    const keyword = zdPlatformKeyword(platform.name);
    // coincide si el texto trae el nombre completo, o al menos la palabra clave principal
    // (cubre casos como "CapCut" vs "CapCut Pro", o "HBO Max" vs "MAX (HBO)")
    const nameMatches = norm.includes(platformNorm) || (keyword.length > 2 && norm.includes(keyword));
    if (!nameMatches) return;

    // buscar el plan cuyo texto coincida mejor con las palabras del "incluye"
    let platformBestVariant = null;
    let platformBestScore = 0;
    platform.variants.forEach((variant) => {
      const labelWords = zdNormalize(variant.label).split(/\s+/).filter((w) => w.length > 1);
      const score = labelWords.filter((w) => norm.includes(w)).length;
      if (score > platformBestScore) {
        platformBestScore = score;
        platformBestVariant = variant;
      }
    });

    // si no se especifica plan en el texto, usar el plan más económico como referencia conservadora
    if (!platformBestVariant) {
      platformBestVariant = platform.variants.reduce((a, b) => (b.price < a.price ? b : a));
    }

    // preferir la plataforma cuyo nombre coincida de forma más específica (nombre más largo = más precisa)
    const specificity = platformNorm.length + platformBestScore;
    if (specificity > bestScore) {
      bestScore = specificity;
      result = { platform, variant: platformBestVariant };
    }
  });

  return result;
}

/* ---------- Precio de un combo frente a comprar cada plan por separado ---------- */
function zdComboPricing(combo) {
  // Emparejar cada "incluye" con su plataforma/plan real, para el ahorro y los mini-logos
  const matches = combo.includes.map((inc) => zdMatchIncludeToVariant(inc)).filter(Boolean);
  const allMatched = matches.length === combo.includes.length;
  const individualTotal = matches.reduce((sum, m) => sum + m.variant.price, 0);
  const savings = allMatched ? individualTotal - combo.price : 0;
  return { matches, individualTotal, savings };
}

/* Tarjeta con la imagen del combo, lo que incluye, el precio suelto
   tachado junto al precio del combo y el ahorro, todo a la vista. */
function zdBuildComboCard(combo) {
  const card = document.createElement('div');
  card.className = 'catalog-card catalog-card--combo catalog-card--combo-v2';
  card.dataset.id = combo.id;
  card.dataset.searchIncludes = zdNormalize(combo.includes.join(' '));

  const { matches, individualTotal, savings } = zdComboPricing(combo);

  const media = document.createElement('div');
  media.className = 'combo-card-media';
  if (combo.image) {
    const img = document.createElement('img');
    img.alt = `Combo ${combo.name}`;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 480;
    img.height = 262;
    zdSetThumb(img, combo.image);
    media.appendChild(img);
  }
  if (ZD_NEW_ITEM_IDS.has(combo.id)) {
    const newBadge = document.createElement('span');
    newBadge.className = 'catalog-new-badge';
    newBadge.textContent = 'Nuevo';
    media.appendChild(newBadge);
  }
  card.appendChild(media);

  const body = document.createElement('div');
  body.className = 'combo-card-body';

  const nameEl = document.createElement('h3');
  nameEl.className = 'catalog-card-name';
  nameEl.textContent = combo.name;
  body.appendChild(nameEl);

  if (matches.length) {
    const miniLogos = document.createElement('div');
    miniLogos.className = 'combo-mini-logos';
    const seen = new Set();
    matches.forEach((m) => {
      if (seen.has(m.platform.id)) return;
      seen.add(m.platform.id);
      const thumb = document.createElement('div');
      thumb.className = 'combo-mini-logo';
      if (m.platform.logo) {
        const img = document.createElement('img');
        img.src = m.platform.logo;
        img.alt = '';
        img.loading = 'lazy';
        img.decoding = 'async';
        thumb.appendChild(img);
      } else {
        thumb.textContent = m.platform.name.charAt(0);
      }
      miniLogos.appendChild(thumb);
    });
    body.appendChild(miniLogos);
  }

  const includesList = document.createElement('ul');
  includesList.className = 'combo-includes';
  combo.includes.forEach((inc) => {
    const li = document.createElement('li');
    li.textContent = inc;
    includesList.appendChild(li);
  });
  body.appendChild(includesList);

  const priceRow = document.createElement('div');
  priceRow.className = 'combo-card-prices';
  if (savings > 0) {
    const was = document.createElement('span');
    was.className = 'combo-card-was';
    was.textContent = zdFormatCOP(individualTotal);
    was.setAttribute('aria-label', `Por separado ${zdFormatCOP(individualTotal)}`);
    priceRow.appendChild(was);
  }
  const priceEl = document.createElement('span');
  priceEl.className = 'catalog-card-price';
  priceEl.textContent = zdFormatCOP(combo.price);
  priceRow.appendChild(priceEl);
  body.appendChild(priceRow);

  if (savings > 0) {
    const savingsBadge = document.createElement('span');
    savingsBadge.className = 'combo-savings-badge';
    savingsBadge.textContent = `Ahorras ${zdFormatCOP(savings)}`;
    body.appendChild(savingsBadge);
  }

  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.className = 'variant-add-btn variant-add-btn--combo';
  addBtn.textContent = 'Agregar al carrito';
  addBtn.setAttribute('aria-label', `Agregar combo ${combo.name} al carrito`);
  addBtn.addEventListener('click', () => {
    zdAddToCart({ id: combo.id, name: `Combo ${combo.name}`, price: combo.price });
    zdShowAddedToast(addBtn);
  });
  body.appendChild(addBtn);

  card.appendChild(body);
  return card;
}

/* ---------- Acordeón exclusivo por grid ---------- */
function zdToggleCard(card, gridSelector) {
  const grid = document.querySelector(gridSelector);
  const wasOpen = card.classList.contains('is-expanded');

  grid.querySelectorAll('.catalog-card.is-expanded').forEach((other) => {
    other.classList.remove('is-expanded');
    other.style.gridColumn = '';
  });

  if (!wasOpen) {
    card.classList.add('is-expanded');
    card.style.gridColumn = '1 / -1';
  }
}

/* ---------- Expandir una tarjeta específica por id (ej. al llegar desde el carrusel) ---------- */
function zdExpandCardById(gridSelector, id) {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;

  const card = grid.querySelector(`.catalog-card[data-id="${id}"]`);
  if (!card) return;

  // las tarjetas de combos ya muestran todo: solo se resalta un momento
  // y se lleva a la vista
  if (card.classList.contains('catalog-card--combo-v2')) {
    grid.querySelectorAll('.catalog-card.is-highlighted').forEach((other) => other.classList.remove('is-highlighted'));
    card.classList.add('is-highlighted');
    setTimeout(() => card.classList.remove('is-highlighted'), 2200);
    requestAnimationFrame(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    return;
  }

  grid.querySelectorAll('.catalog-card.is-expanded').forEach((other) => {
    if (other !== card) {
      other.classList.remove('is-expanded');
      other.style.gridColumn = '';
    }
  });

  card.classList.add('is-expanded');
  card.style.gridColumn = '1 / -1';

  requestAnimationFrame(() => {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

window.zdExpandCardById = zdExpandCardById;

/* ---------- Entrada animada y escalonada de las tarjetas ---------- */
function zdPlayGridEntrance(gridSelector) {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;
  const cards = grid.querySelectorAll('.catalog-card');

  cards.forEach((card, i) => {
    card.classList.remove('card-animate-in');
    void card.offsetWidth; // fuerza reflow para poder reiniciar la animación
    card.style.animationDelay = `${Math.min(i * 45, 420)}ms`;
    card.classList.add('card-animate-in');
  });
}

/* ---------- Render inicial ---------- */
function zdObserveCardAnimations(grid) {
  if (!('IntersectionObserver' in window)) return;
  // un solo observador por grilla (las grillas por tandas lo llaman en cada tanda)
  if (!grid.zdOrbitObserver) {
    grid.zdOrbitObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-anim-paused', !entry.isIntersecting);
      });
    }, { rootMargin: '150px', threshold: 0 });
  }
  grid.querySelectorAll('.logo-orbit').forEach((el) => grid.zdOrbitObserver.observe(el));
}

function zdBuildPlatformsGrid() {
  const catalogGrid = document.getElementById('catalogGrid');
  if (!catalogGrid || catalogGrid.dataset.built === 'true') return;
  catalogGrid.innerHTML = '';
  ZD_CATALOG.forEach((platform) => catalogGrid.appendChild(zdBuildPlatformCard(platform)));
  catalogGrid.dataset.built = 'true';
  zdUpdateCartBadges();
  zdObserveCardAnimations(catalogGrid);
}

function zdBuildCombosGrid() {
  const combosGrid = document.getElementById('combosGrid');
  if (!combosGrid || combosGrid.dataset.built === 'true') return;
  combosGrid.innerHTML = '';
  const sortedCombos = [...ZD_COMBOS].sort((a, b) => a.price - b.price);
  sortedCombos.forEach((combo) => combosGrid.appendChild(zdBuildComboCard(combo)));
  combosGrid.dataset.built = 'true';
  zdUpdateCartBadges();
}

/* ---------- Baraja un array (Fisher-Yates), sin mutar el original ---------- */
function zdShuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- Catálogo completo (Banner superior → "Catálogo"): mezcla
   aleatoria de plataformas y combos (más adelante, productos físicos
   también). Se reconstruye cada vez que se abre, para que el orden
   cambie en cada visita, como se pidió. ---------- */
function zdBuildCatalogoTodoGrid() {
  const grid = document.getElementById('catalogTodoGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const mixed = zdShuffleArray([
    ...ZD_CATALOG.map((p) => ({ kind: 'platform', data: p })),
    ...ZD_COMBOS.map((c) => ({ kind: 'combo', data: c }))
  ]);

  zdRenderProgressive(grid, mixed, (entry) => (entry.kind === 'combo'
    ? zdBuildComboCard(entry.data)
    : zdBuildPlatformCard(entry.data, '#catalogTodoGrid')));
}

/* ---------- Ofertas (botón "🔥 Ofertas" del hero): por ahora son los
   combos (todos traen descuento por diseño). El día que se marquen
   variantes individuales en oferta (agregar `onSale: true` a esa
   variante dentro de ZD_CATALOG en data.js), aparecerán aquí también
   automáticamente, sin tocar este código. ---------- */
function zdBuildOfertasGrid() {
  const grid = document.getElementById('ofertasGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const comboItems = ZD_COMBOS.map((data) => ({ kind: 'combo', data }));
  const discountedPlatforms = ZD_CATALOG
    .filter((p) => p.variants.some((v) => v.onSale === true))
    .map((data) => ({ kind: 'platform', data }));
  // productos físicos en oferta (cualquiera con salePrice, sin importar
  // la categoría) — se agregan automáticamente, sin tocar este código,
  // cada vez que un producto nuevo trae salePrice en data.js
  const discountedProducts = (typeof ZD_PRODUCTS !== 'undefined' ? ZD_PRODUCTS : [])
    .filter((p) => p.salePrice)
    .map((data) => ({ kind: 'product', data }));

  if (comboItems.length === 0 && discountedPlatforms.length === 0 && discountedProducts.length === 0) {
    grid.innerHTML = '<div class="catalog-card catalog-card--placeholder"><div class="placeholder-shimmer"></div><p class="placeholder-label">Aún no hay ofertas activas. ¡Vuelve pronto!</p></div>';
    return;
  }

  // mezclados entre sí (no por bloques de combos/plataformas/productos),
  // y en un orden distinto cada vez que se abre el panel
  const mixed = zdShuffleArray([...comboItems, ...discountedPlatforms, ...discountedProducts]);
  zdRenderProgressive(grid, mixed, (entry) => {
    if (entry.kind === 'combo') return zdBuildComboCard(entry.data);
    if (entry.kind === 'platform') return zdBuildPlatformCard(entry.data, '#ofertasGrid');
    return typeof window.zdBuildProductCard === 'function' ? window.zdBuildProductCard(entry.data) : null;
  });
}

window.zdBuildPlatformsGrid = zdBuildPlatformsGrid;
window.zdBuildCombosGrid = zdBuildCombosGrid;
window.zdBuildCatalogoTodoGrid = zdBuildCatalogoTodoGrid;
window.zdBuildOfertasGrid = zdBuildOfertasGrid;

function zdRenderCatalog() {
  // El catálogo y los combos ya NO se construyen aquí de entrada: se
  // difiere hasta que el cliente abre cada panel por primera vez, para
  // no cargar ~2000 elementos del DOM que quizás nunca llegue a ver.
  zdUpdateCartBadges();
  zdInitPanelSearch();
}

/* ---------- Búsqueda dentro de los paneles ---------- */
function zdEnsureEmptyState(grid, message) {
  let empty = grid.parentElement.querySelector('.catalog-empty-state');
  if (!empty) {
    empty = document.createElement('p');
    empty.className = 'catalog-empty-state';
    empty.textContent = message;
    empty.hidden = true;
    grid.insertAdjacentElement('afterend', empty);
  }
  return empty;
}

function zdFilterGrid(grid, emptyEl, matchFn) {
  const query = matchFn.query;
  let visibleCount = 0;

  grid.querySelectorAll('.catalog-card').forEach((card) => {
    const matches = query === '' || matchFn(card);
    card.classList.toggle('is-search-hidden', !matches);
    if (matches) visibleCount += 1;
  });

  emptyEl.hidden = visibleCount !== 0;
}

function zdInitPanelSearch() {
  const catalogGrid = document.getElementById('catalogGrid');
  const combosGrid = document.getElementById('combosGrid');
  const catalogInput = document.getElementById('catalogSearchInput');
  const combosInput = document.getElementById('combosSearchInput');

  if (catalogGrid && catalogInput) {
    const emptyEl = zdEnsureEmptyState(catalogGrid, 'No encontramos plataformas que coincidan con tu búsqueda.');
    catalogInput.addEventListener('input', () => {
      const query = zdNormalize(catalogInput.value.trim());
      const fn = (card) => card.dataset.searchName.includes(query);
      fn.query = query;
      zdFilterGrid(catalogGrid, emptyEl, fn);
    });
  }

  if (combosGrid && combosInput) {
    const emptyEl = zdEnsureEmptyState(combosGrid, 'No encontramos combos que incluyan esa plataforma.');
    combosInput.addEventListener('input', () => {
      const query = zdNormalize(combosInput.value.trim());
      const fn = (card) => card.dataset.searchIncludes.includes(query);
      fn.query = query;
      zdFilterGrid(combosGrid, emptyEl, fn);
    });
  }
}

/* ---------- Reiniciar la búsqueda cada vez que se abre un panel ---------- */
function zdResetPanelSearch(panelId) {
  const inputIdByPanel = { panelCatalogo: 'catalogSearchInput', panelCombos: 'combosSearchInput', panelCustomCombo: 'customComboSearchInput', panelProductos: 'productsSearchInput' };
  const inputId = inputIdByPanel[panelId];
  if (!inputId) return;

  const input = document.getElementById(inputId);
  if (!input) return;

  input.value = '';
  input.dispatchEvent(new Event('input'));
}

window.zdResetPanelSearch = zdResetPanelSearch;

document.addEventListener('DOMContentLoaded', zdRenderCatalog);
