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

function zdAddToCart(item) {
  const cart = zdGetCart();
  const existing = cart.find((i) => i.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
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
function zdBuildPlatformCard(platform) {
  const card = document.createElement('div');
  card.className = 'catalog-card';
  card.dataset.id = platform.id;
  card.dataset.searchName = zdNormalize(platform.name);

  const face = document.createElement('button');
  face.className = 'catalog-card-face';
  face.appendChild(zdBuildLogoFrame(platform.logo, platform.name));

  const nameEl = document.createElement('span');
  nameEl.className = 'catalog-card-name';
  nameEl.textContent = platform.name;
  face.appendChild(nameEl);

  const chevron = document.createElement('span');
  chevron.className = 'catalog-card-chevron';
  chevron.textContent = '+';
  face.appendChild(chevron);

  card.appendChild(face);

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

  face.addEventListener('click', () => zdToggleCard(card, '#catalogGrid'));

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

function zdBuildComboCard(combo) {
  const card = document.createElement('div');
  card.className = 'catalog-card catalog-card--combo';
  card.dataset.id = combo.id;
  card.dataset.searchIncludes = zdNormalize(combo.includes.join(' '));

  const face = document.createElement('button');
  face.className = 'catalog-card-face';

  let orbit;
  if (combo.image) {
    orbit = zdBuildLogoFrame(combo.image, combo.name);
    orbit.querySelector('.logo-frame').classList.add('logo-frame--combo-img');
    orbit.classList.add('logo-orbit--combo-img');
  } else {
    orbit = document.createElement('div');
    orbit.className = 'logo-orbit';
    const icon = document.createElement('div');
    icon.className = 'logo-frame logo-frame--combo';
    icon.innerHTML = '<span>◈</span>';
    orbit.appendChild(icon);
  }
  face.appendChild(orbit);

  // Emparejar cada "incluye" con su plataforma/plan real, para el ahorro y los mini-logos
  const matches = combo.includes.map((inc) => zdMatchIncludeToVariant(inc)).filter(Boolean);
  const allMatched = matches.length === combo.includes.length;
  const individualTotal = matches.reduce((sum, m) => sum + m.variant.price, 0);
  const savings = allMatched ? individualTotal - combo.price : 0;

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
        img.alt = m.platform.name;
        img.loading = 'lazy';
        thumb.appendChild(img);
      } else {
        thumb.textContent = m.platform.name.charAt(0);
      }
      miniLogos.appendChild(thumb);
    });
    face.appendChild(miniLogos);
  }

  const nameEl = document.createElement('span');
  nameEl.className = 'catalog-card-name';
  nameEl.textContent = combo.name;
  face.appendChild(nameEl);

  const priceEl = document.createElement('span');
  priceEl.className = 'catalog-card-price';
  priceEl.textContent = zdFormatCOP(combo.price);
  face.appendChild(priceEl);

  if (savings > 0) {
    const savingsBadge = document.createElement('span');
    savingsBadge.className = 'combo-savings-badge';
    savingsBadge.textContent = `Ahorras ${zdFormatCOP(savings)}`;
    face.appendChild(savingsBadge);
  }

  const chevron = document.createElement('span');
  chevron.className = 'catalog-card-chevron';
  chevron.textContent = '+';
  face.appendChild(chevron);

  card.appendChild(face);

  const variantsWrap = document.createElement('div');
  variantsWrap.className = 'catalog-card-variants';

  const includesList = document.createElement('ul');
  includesList.className = 'combo-includes';
  combo.includes.forEach((inc) => {
    const li = document.createElement('li');
    li.textContent = inc;
    includesList.appendChild(li);
  });

  const addBtn = document.createElement('button');
  addBtn.className = 'variant-add-btn variant-add-btn--combo';
  addBtn.textContent = 'Agregar al carrito';
  addBtn.addEventListener('click', (e) => {
    zdAddToCart({ id: combo.id, name: `Combo ${combo.name}`, price: combo.price });
    zdShowAddedToast(addBtn);
  });

  variantsWrap.appendChild(includesList);
  variantsWrap.appendChild(addBtn);
  card.appendChild(variantsWrap);

  face.addEventListener('click', () => zdToggleCard(card, '#combosGrid'));

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
function zdRenderCatalog() {
  const catalogGrid = document.getElementById('catalogGrid');
  const combosGrid = document.getElementById('combosGrid');

  if (catalogGrid) {
    catalogGrid.innerHTML = '';
    ZD_CATALOG.forEach((platform) => catalogGrid.appendChild(zdBuildPlatformCard(platform)));
  }

  if (combosGrid) {
    combosGrid.innerHTML = '';
    ZD_COMBOS.forEach((combo) => combosGrid.appendChild(zdBuildComboCard(combo)));
  }

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
  const inputIdByPanel = { panelCatalogo: 'catalogSearchInput', panelCombos: 'combosSearchInput' };
  const inputId = inputIdByPanel[panelId];
  if (!inputId) return;

  const input = document.getElementById(inputId);
  if (!input) return;

  input.value = '';
  input.dispatchEvent(new Event('input'));
}

window.zdResetPanelSearch = zdResetPanelSearch;

document.addEventListener('DOMContentLoaded', zdRenderCatalog);
