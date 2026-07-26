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

function zdUpdateCartBadges() {
  const cart = zdGetCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach((badge) => {
    badge.textContent = totalQty;
  });
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

  platform.variants.forEach((variant) => {
    const row = document.createElement('div');
    row.className = 'variant-row';

    const info = document.createElement('div');
    info.className = 'variant-info';
    info.innerHTML = `<span class="variant-label">${variant.label}</span><span class="variant-price">${zdFormatCOP(variant.price)}</span>`;

    const addBtn = document.createElement('button');
    addBtn.className = 'variant-add-btn';
    addBtn.textContent = 'Agregar';
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();
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
function zdBuildComboCard(combo) {
  const card = document.createElement('div');
  card.className = 'catalog-card catalog-card--combo';
  card.dataset.id = combo.id;

  const face = document.createElement('button');
  face.className = 'catalog-card-face';

  let orbit;
  if (combo.image) {
    orbit = zdBuildLogoFrame(combo.image, combo.name);
    orbit.querySelector('.logo-frame').classList.add('logo-frame--combo-img');
  } else {
    orbit = document.createElement('div');
    orbit.className = 'logo-orbit';
    const icon = document.createElement('div');
    icon.className = 'logo-frame logo-frame--combo';
    icon.innerHTML = '<span>◈</span>';
    orbit.appendChild(icon);
  }
  face.appendChild(orbit);

  const nameEl = document.createElement('span');
  nameEl.className = 'catalog-card-name';
  nameEl.textContent = combo.name;
  face.appendChild(nameEl);

  const priceEl = document.createElement('span');
  priceEl.className = 'catalog-card-price';
  priceEl.textContent = zdFormatCOP(combo.price);
  face.appendChild(priceEl);

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
  addBtn.textContent = `Agregar combo — ${zdFormatCOP(combo.price)}`;
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
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
}

document.addEventListener('DOMContentLoaded', zdRenderCatalog);
