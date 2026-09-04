// ============================================================
// ZERO DELAY — products.js
// Catálogo de productos físicos (ZD_PRODUCTS, definido en data.js):
// tarjetas tipo tienda (imagen, precio, stock, agregar al carrito),
// filtro por categoría reutilizando el menú de Categorías, y una
// ficha de producto dinámica con pedido directo por WhatsApp.
// ============================================================

let zdProductsCurrentFilter = null; // null = todas las categorías

/* ---------- Tarjeta de producto (estilo tienda) ---------- */
function zdBuildProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;
  card.dataset.category = product.category;
  card.dataset.searchName = zdNormalize(product.name);

  const media = document.createElement('button');
  media.type = 'button';
  media.className = 'product-card-media';
  media.setAttribute('aria-label', `Ver ${product.name}`);

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;
  img.loading = 'lazy';
  img.decoding = 'async';
  media.appendChild(img);

  if (product.salePrice) {
    const pct = Math.round((1 - product.salePrice / product.price) * 100);
    const badge = document.createElement('span');
    badge.className = 'product-card-badge';
    badge.textContent = `-${pct}%`;
    media.appendChild(badge);
  }

  media.addEventListener('click', () => zdOpenProductDetail(product.id));
  card.appendChild(media);

  const name = document.createElement('button');
  name.type = 'button';
  name.className = 'product-card-name';
  name.textContent = product.name;
  name.addEventListener('click', () => zdOpenProductDetail(product.id));
  card.appendChild(name);

  const priceRow = document.createElement('div');
  priceRow.className = 'product-card-price-row';
  if (product.salePrice) {
    const original = document.createElement('span');
    original.className = 'product-card-price-original';
    original.textContent = zdFormatCOP(product.price);
    priceRow.appendChild(original);

    const sale = document.createElement('span');
    sale.className = 'product-card-price-sale';
    sale.textContent = zdFormatCOP(product.salePrice);
    priceRow.appendChild(sale);
  } else {
    const price = document.createElement('span');
    price.className = 'product-card-price-sale';
    price.textContent = zdFormatCOP(product.price);
    priceRow.appendChild(price);
  }
  card.appendChild(priceRow);

  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.className = 'variant-add-btn product-card-add-btn';
  addBtn.textContent = 'Agregar al carrito';
  addBtn.addEventListener('click', () => {
    zdAddToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price
    });
    zdShowAddedToast(addBtn);
  });
  card.appendChild(addBtn);

  return card;
}

/* ---------- Grilla de productos, con filtro opcional por categoría ---------- */
function zdBuildProductsGrid(resetFilter) {
  if (resetFilter) zdProductsCurrentFilter = null;
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const items = zdProductsCurrentFilter
    ? ZD_PRODUCTS.filter((p) => p.category === zdProductsCurrentFilter)
    : ZD_PRODUCTS;

  const title = document.getElementById('productsTitle');
  const lead = document.getElementById('productsLead');
  if (zdProductsCurrentFilter) {
    const label = items[0] ? items[0].categoryLabel : zdProductsCurrentFilter;
    if (title) title.textContent = `📦 ${label}`;
    if (lead) lead.textContent = `Productos de la categoría ${label}, con envío hasta tu domicilio.`;
  } else {
    if (title) title.textContent = '📦 Productos ZERO DELAY';
    if (lead) lead.textContent = 'Perfumería, tecnología, joyería y más — con envío hasta tu domicilio.';
  }

  if (items.length === 0) {
    grid.innerHTML = '<div class="catalog-card catalog-card--placeholder"><div class="placeholder-shimmer"></div><p class="placeholder-label">Aún no hay productos en esta categoría. ¡Vuelve pronto!</p></div>';
    return;
  }

  items.forEach((product) => grid.appendChild(zdBuildProductCard(product)));
  zdUpdateCartBadges();
}
window.zdBuildProductCard = zdBuildProductCard;
window.zdBuildProductsGrid = zdBuildProductsGrid;

/* ---------- Filtrar por categoría (usado por el menú de Categorías) ---------- */
function zdFilterProductsGrid(categorySlug) {
  zdProductsCurrentFilter = categorySlug || null;
  zdBuildProductsGrid();
  const grid = document.getElementById('productsGrid');
  if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.zdFilterProductsGrid = zdFilterProductsGrid;

/* ---------- Ficha de producto (contenido dinámico) ---------- */
function zdRenderProductDetail(productId) {
  const product = ZD_PRODUCTS.find((p) => p.id === productId);
  const body = document.getElementById('productDetailBody');
  if (!product || !body) return;

  body.dataset.productId = product.id;

  const descriptionHtml = product.description
    .split('\n\n')
    .map((para) => `<p>${para}</p>`)
    .join('');

  const priceHtml = product.salePrice
    ? `<span class="pd-price-original">${zdFormatCOP(product.price)}</span>
       <span class="pd-price-sale">${zdFormatCOP(product.salePrice)}</span>`
    : `<span class="pd-price-sale">${zdFormatCOP(product.price)}</span>`;

  body.innerHTML = `
    <p class="pd-breadcrumb">
      <a href="#" data-go-home>Inicio</a> /
      <a href="#" data-switch-panel="panelProductos">Catálogo</a> /
      <span>${product.name}</span>
    </p>
    <div class="pd-layout">
      <div class="pd-media">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="pd-info">
        <h1 class="pd-name">${product.name}</h1>
        <p class="pd-ref">Ref: ${product.ref}</p>
        <div class="pd-price-row">${priceHtml}</div>
        <div class="pd-description">${descriptionHtml}</div>

        <label class="pd-qty-label" for="pdQtyInput">Cantidad:</label>
        <input type="number" id="pdQtyInput" class="pd-qty-input" value="1" min="1" step="1" inputmode="numeric">

        <div class="pd-actions">
          <a href="#" id="pdWhatsappBtn" class="btn-pd btn-pd--whatsapp" target="_blank" rel="noopener">
            Pedir por WhatsApp
            <svg viewBox="0 0 24 24" fill="currentColor" class="pd-whatsapp-icon"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.1 9 9.7 8 9.5 7.5c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.2 1 1-3.1-.2-.3C3.7 15 3.2 13.5 3.2 12c0-4.8 3.9-8.7 8.8-8.7 4.8 0 8.7 3.9 8.7 8.7s-3.9 8.7-8.7 8.7z"/></svg>
          </a>
          <button type="button" id="pdAddToCartBtn" class="btn-pd btn-pd--cart">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  `;

  const qtyInput = document.getElementById('pdQtyInput');
  const whatsappBtn = document.getElementById('pdWhatsappBtn');
  const addToCartBtn = document.getElementById('pdAddToCartBtn');

  function currentQty() {
    const n = parseInt(qtyInput.value, 10);
    return Number.isFinite(n) && n > 0 ? n : 1;
  }

  function updateWhatsappHref() {
    const qty = currentQty();
    const unitPrice = product.salePrice || product.price;
    // usa el mismo formato que el carrito (zdBuildWhatsAppMessage), con
    // un "carrito" temporal de un solo producto — así el pedido directo
    // desde la ficha del producto queda igual de consistente
    const tempCart = [{ id: product.id, name: product.name, price: unitPrice, qty }];
    const message = zdBuildWhatsAppMessage(tempCart);
    whatsappBtn.href = `https://wa.me/${ZD_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  qtyInput.addEventListener('input', () => {
    if (qtyInput.value !== '' && currentQty() < 1) qtyInput.value = 1;
    updateWhatsappHref();
  });

  addToCartBtn.addEventListener('click', () => {
    zdAddToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price
    }, currentQty());
    zdShowAddedToast(addToCartBtn);
  });

  updateWhatsappHref();

  // re-conecta los data-go-home / data-switch-panel recién insertados,
  // ya que el listener global solo se registró al cargar la página
  body.querySelectorAll('[data-go-home]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof window.zdGoHome === 'function') window.zdGoHome();
    });
  });
  body.querySelectorAll('[data-switch-panel]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof window.zdSwitchPanel === 'function') {
        window.zdSwitchPanel('panelProductDetail', btn.dataset.switchPanel);
      }
    });
  });
}
window.zdRenderProductDetail = zdRenderProductDetail;

/* ---------- Abrir la ficha de un producto ---------- */
function zdOpenProductDetail(productId) {
  zdRenderProductDetail(productId);
  if (typeof window.zdOpenPanel === 'function') window.zdOpenPanel('panelProductDetail');
}
window.zdOpenProductDetail = zdOpenProductDetail;

/* ---------- Buscador (filtra letra por letra sobre la grilla ya
   construida, igual que en los demás paneles del sitio) ---------- */
function zdInitProductsSearch() {
  const grid = document.getElementById('productsGrid');
  const input = document.getElementById('productsSearchInput');
  if (!grid || !input) return;

  let emptyEl = grid.parentElement.querySelector('.catalog-empty-state');
  if (!emptyEl) {
    emptyEl = document.createElement('p');
    emptyEl.className = 'catalog-empty-state';
    emptyEl.textContent = 'No encontramos productos que coincidan con tu búsqueda.';
    emptyEl.hidden = true;
    grid.insertAdjacentElement('afterend', emptyEl);
  }

  input.addEventListener('input', () => {
    const query = zdNormalize(input.value.trim());
    let visible = 0;
    grid.querySelectorAll('.product-card').forEach((card) => {
      const matches = query === '' || card.dataset.searchName.includes(query);
      card.classList.toggle('is-search-hidden', !matches);
      if (matches) visible += 1;
    });
    emptyEl.hidden = visible !== 0;
  });
}

/* ---------- Conexiones de la interfaz (filtro por categoría, "ver todas") ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-filter-category]').forEach((btn) => {
    btn.addEventListener('click', () => {
      zdFilterProductsGrid(btn.dataset.filterCategory);
    });
  });

  const showAllBtn = document.getElementById('productsShowAllBtn');
  if (showAllBtn) {
    showAllBtn.addEventListener('click', () => zdFilterProductsGrid(null));
  }

  zdInitProductsSearch();
});
