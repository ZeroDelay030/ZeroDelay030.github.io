// ============================================================
// ZERO DELAY — products.js
// Catálogo de productos físicos (ZD_PRODUCTS, definido en data.js):
// tarjetas tipo tienda (imagen, precio, stock, agregar al carrito),
// filtro por categoría reutilizando el menú de Categorías, y una
// ficha de producto dinámica con pedido directo por WhatsApp.
// ============================================================

let zdProductsCurrentFilter = null; // null = todas las categorías
let zdProductsQuery = ''; // texto del buscador del panel, ya normalizado

// "relojeria" agrupa Relojería Original y Relojería Réplica (fila y
// accesos del inicio); el resto de filtros son las categorías de data.js
const ZD_PRODUCT_GROUPS = {
  relojeria: { label: 'Relojería', match: (p) => p.category.startsWith('relojeria-') }
};

// textos de confianza de la ficha (aprobados por Manuel el 2026-10-23)
const ZD_PRODUCT_BENEFITS = [
  { icon: '🚚', text: 'Envíos a todo el país' },
  { icon: '💳', text: 'Paga con Nequi, Llaves o Bre-B' },
  { icon: '🛡️', text: 'Garantía según el producto: consúltala por WhatsApp' }
];

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
  img.alt = product.name;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.width = 360;
  img.height = 360;
  zdSetThumb(img, product.image);
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
  // con tallas, la talla se elige en la ficha antes de agregar
  if (product.sizes && product.sizes.length) {
    addBtn.textContent = 'Elegir talla';
    addBtn.addEventListener('click', () => zdOpenProductDetail(product.id));
    card.appendChild(addBtn);
    return card;
  }
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

/* ---------- ¿El producto pertenece a la categoría? (principal o extra) ---------- */
function zdProductInCategory(product, categorySlug) {
  if (ZD_PRODUCT_GROUPS[categorySlug]) return ZD_PRODUCT_GROUPS[categorySlug].match(product);
  return product.category === categorySlug
    || (product.extraCategories || []).includes(categorySlug);
}

/* ---------- Nombre visible de una categoría (o grupo) ---------- */
function zdCategoryLabel(categorySlug) {
  if (ZD_PRODUCT_GROUPS[categorySlug]) return ZD_PRODUCT_GROUPS[categorySlug].label;
  // el nombre visible sale de un producto cuya categoría PRINCIPAL es
  // esta (el primero de la lista puede venir por extraCategories)
  const owner = ZD_PRODUCTS.find((p) => p.category === categorySlug);
  return owner ? owner.categoryLabel : categorySlug;
}
window.zdCategoryLabel = zdCategoryLabel;
window.zdProductInCategory = zdProductInCategory;

/* ---------- Grilla de productos: filtro por categoría + buscador, y
   render por tandas de 24 (con ~750 productos ya no se construyen todas
   las tarjetas de golpe) ---------- */
function zdBuildProductsGrid(resetFilter) {
  if (resetFilter) {
    zdProductsCurrentFilter = null;
    zdProductsQuery = '';
    const input = document.getElementById('productsSearchInput');
    if (input) input.value = '';
  }
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let items = zdProductsCurrentFilter
    ? ZD_PRODUCTS.filter((p) => zdProductInCategory(p, zdProductsCurrentFilter))
    : ZD_PRODUCTS;
  if (zdProductsQuery) items = items.filter((p) => zdNormalize(p.name).includes(zdProductsQuery));

  const title = document.getElementById('productsTitle');
  const lead = document.getElementById('productsLead');
  if (zdProductsCurrentFilter) {
    const label = zdCategoryLabel(zdProductsCurrentFilter);
    if (title) title.textContent = label;
    if (lead) lead.textContent = `${items.length} productos con envíos a todo el país.`;
  } else {
    if (title) title.textContent = 'Productos ZERO DELAY';
    if (lead) lead.textContent = 'Perfumes, relojes, tecnología, hogar y más, con envíos a todo el país.';
  }

  // chip activo de la categoría elegida
  document.querySelectorAll('#panelProductos .panel-chip[data-filter-category]').forEach((chip) => {
    const on = (chip.dataset.filterCategory || null) === zdProductsCurrentFilter;
    chip.classList.toggle('is-active', on);
    if (on) chip.setAttribute('aria-current', 'true'); else chip.removeAttribute('aria-current');
  });

  const emptyEl = zdEnsureEmptyState(grid, 'No encontramos productos que coincidan con tu búsqueda.');
  emptyEl.hidden = items.length !== 0;

  zdRenderProgressive(grid, items, zdBuildProductCard);
  if (typeof window.zdSyncRoute === 'function') window.zdSyncRoute();
}
window.zdBuildProductCard = zdBuildProductCard;
window.zdBuildProductsGrid = zdBuildProductsGrid;

/* ---------- Filtrar por categoría (menú, chips del panel y accesos del inicio) ---------- */
function zdFilterProductsGrid(categorySlug) {
  zdProductsCurrentFilter = categorySlug || null;
  zdBuildProductsGrid();
  const panel = document.getElementById('panelProductos');
  if (panel) panel.scrollTop = 0;
}
window.zdFilterProductsGrid = zdFilterProductsGrid;

/* ---------- Carrusel de imágenes de la ficha (solo cuando hay más de
   una imagen) — flechas, puntos y deslizar con el dedo/mouse ---------- */
function zdInitProductCarousel(slideCount) {
  const track = document.getElementById('pdCarouselTrack');
  if (!track || slideCount <= 1) return;

  const prevBtn = document.getElementById('pdCarouselPrev');
  const nextBtn = document.getElementById('pdCarouselNext');
  const dots = Array.from(document.querySelectorAll('.pd-carousel-dot'));
  let index = 0;

  function goTo(i) {
    index = (i + slideCount) % slideCount;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, di) => dot.classList.toggle('is-active', di === index));
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => goTo(Number(dot.dataset.index))));

  // deslizar con el dedo (táctil) o arrastrando con el mouse
  let startX = 0;
  let dragging = false;
  const carousel = document.getElementById('pdCarousel');

  function dragStart(x) { dragging = true; startX = x; track.style.transition = 'none'; }
  function dragMove(x) {
    if (!dragging) return;
    const delta = x - startX;
    track.style.transform = `translateX(calc(-${index * 100}% + ${delta}px))`;
  }
  function dragEnd(x) {
    if (!dragging) return;
    dragging = false;
    track.style.transition = '';
    const delta = x - startX;
    if (delta > 50) goTo(index - 1);
    else if (delta < -50) goTo(index + 1);
    else goTo(index);
  }

  carousel.addEventListener('touchstart', (e) => dragStart(e.touches[0].clientX), { passive: true });
  carousel.addEventListener('touchmove', (e) => dragMove(e.touches[0].clientX), { passive: true });
  carousel.addEventListener('touchend', (e) => dragEnd(e.changedTouches[0].clientX));

  // el mouse solo se escucha en window MIENTRAS se arrastra (y se
  // desconecta apenas se suelta) — evita acumular listeners en window
  // cada vez que se abre la ficha de un producto con carrusel
  function onMouseMove(e) { dragMove(e.clientX); }
  function onMouseUp(e) {
    dragEnd(e.clientX);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }
  carousel.addEventListener('mousedown', (e) => {
    e.preventDefault();
    dragStart(e.clientX);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });
}

/* ---------- Ficha de producto (contenido dinámico) ---------- */
function zdRenderProductDetail(productId) {
  const product = ZD_PRODUCTS.find((p) => p.id === productId);
  const body = document.getElementById('productDetailBody');
  if (!product || !body) return;

  body.dataset.productId = product.id;

  const descriptionHtml = (product.description || '')
    .split('\n\n')
    .filter((para) => para.trim() !== '')
    .map((para) => `<p>${para}</p>`)
    .join('');

  // Tallas (opcional): el cliente debe elegir una antes de pedir
  const sizes = product.sizes || [];
  const sizesHtml = sizes.length
    ? `<p class="pd-sizes-label" id="pdSizesLabel">Talla:</p>
       <div class="pd-sizes" role="radiogroup" aria-labelledby="pdSizesLabel">
         ${sizes.map((s) => `<button type="button" class="pd-size-btn" role="radio" aria-checked="false" data-size="${s}">${s}</button>`).join('')}
       </div>
       <p class="pd-sizes-hint" id="pdSizesHint" hidden>Elige una talla para continuar.</p>`
    : '';

  const finalPrice = product.salePrice || product.price;
  const pct = product.salePrice ? Math.round((1 - product.salePrice / product.price) * 100) : 0;
  const priceHtml = product.salePrice
    ? `<span class="pd-price-original">${zdFormatCOP(product.price)}</span>
       <span class="pd-price-sale">${zdFormatCOP(product.salePrice)}</span>
       <span class="pd-price-off">-${pct}%</span>`
    : `<span class="pd-price-sale">${zdFormatCOP(product.price)}</span>`;

  // Carrusel: solo se arma si el producto trae imágenes extra en
  // `gallery` (además de `image`, la principal). El listado siempre
  // muestra únicamente `image`; el carrusel es exclusivo de esta ficha.
  const slides = [product.image, ...(product.gallery || [])];
  const mediaHtml = slides.length > 1
    ? `<div class="pd-carousel" id="pdCarousel">
         <div class="pd-carousel-track" id="pdCarouselTrack">
           ${slides.map((src, i) => `<img src="${src}" alt="${product.name}" ${i === 0 ? '' : 'loading="lazy"'}>`).join('')}
         </div>
         <button type="button" class="pd-carousel-arrow pd-carousel-arrow--prev" id="pdCarouselPrev" aria-label="Imagen anterior">‹</button>
         <button type="button" class="pd-carousel-arrow pd-carousel-arrow--next" id="pdCarouselNext" aria-label="Imagen siguiente">›</button>
         <div class="pd-carousel-dots" id="pdCarouselDots">
           ${slides.map((_, i) => `<button type="button" class="pd-carousel-dot${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-label="Ver imagen ${i + 1}"></button>`).join('')}
         </div>
       </div>`
    : `<img src="${product.image}" alt="${product.name}">`;

  const whatsappIcon = '<svg viewBox="0 0 24 24" fill="currentColor" class="pd-whatsapp-icon" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.1 9 9.7 8 9.5 7.5c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.2 1 1-3.1-.2-.3C3.7 15 3.2 13.5 3.2 12c0-4.8 3.9-8.7 8.8-8.7 4.8 0 8.7 3.9 8.7 8.7s-3.9 8.7-8.7 8.7z"/></svg>';
  const cartIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 3H5L5.4 5M5.4 5H21L18 14H7L5.4 5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="19" r="1.4" stroke="currentColor" stroke-width="1.4"/><circle cx="17" cy="19" r="1.4" stroke="currentColor" stroke-width="1.4"/></svg>';

  body.innerHTML = `
    <p class="pd-breadcrumb">
      <a href="#" data-go-home>Inicio</a> /
      <a href="#" data-switch-panel="panelProductos">Productos</a> /
      <a href="#" data-pd-category>${product.categoryLabel}</a>
    </p>
    <div class="pd-layout">
      <div class="pd-media">
        ${mediaHtml}
      </div>
      <div class="pd-info">
        <h1 class="pd-name">${product.name}</h1>
        <p class="pd-ref">Ref: ${product.ref}</p>
        <div class="pd-price-row">${priceHtml}</div>
        ${sizesHtml}

        <div class="pd-qty">
          <label class="pd-qty-label" for="pdQtyInput">Cantidad:</label>
          <div class="pd-qty-stepper">
            <button type="button" class="pd-qty-btn" data-qty="-1" aria-label="Restar uno">−</button>
            <input type="number" id="pdQtyInput" class="pd-qty-input" value="1" min="1" step="1" inputmode="numeric">
            <button type="button" class="pd-qty-btn" data-qty="1" aria-label="Sumar uno">+</button>
          </div>
        </div>

        <div class="pd-actions" id="pdActions">
          <a href="#" id="pdWhatsappBtn" class="btn-pd btn-pd--whatsapp" target="_blank" rel="noopener">
            Pedir por WhatsApp ${whatsappIcon}
          </a>
          <button type="button" id="pdAddToCartBtn" class="btn-pd btn-pd--cart">
            Agregar al carrito
          </button>
        </div>

        <ul class="pd-benefits">
          ${ZD_PRODUCT_BENEFITS.map((b) => `<li><span aria-hidden="true">${b.icon}</span> ${b.text}</li>`).join('')}
        </ul>

        <button type="button" class="pd-share-btn" id="pdShareBtn">Compartir este producto</button>

        <div class="pd-description" id="pdDescription">${descriptionHtml}</div>
        <button type="button" class="pd-desc-toggle" id="pdDescToggle" hidden>Ver más</button>
      </div>
    </div>

    <section class="pd-related" id="pdRelatedSection" aria-label="Productos relacionados">
      <div class="home-row-head"><h2 class="home-row-title">También te puede gustar</h2></div>
      <div class="home-row-track" id="pdRelated"></div>
    </section>

    <div class="pd-sticky-bar" id="pdStickyBar">
      <span class="pd-sticky-price">${zdFormatCOP(finalPrice)}</span>
      <button type="button" class="pd-sticky-cart" id="pdStickyCart" aria-label="Agregar al carrito">${cartIcon}</button>
      <a href="#" class="pd-sticky-wa" id="pdStickyWa" target="_blank" rel="noopener">${whatsappIcon} Pedir</a>
    </div>
  `;

  const qtyInput = document.getElementById('pdQtyInput');
  const whatsappBtn = document.getElementById('pdWhatsappBtn');
  const addToCartBtn = document.getElementById('pdAddToCartBtn');
  const stickyWa = document.getElementById('pdStickyWa');
  const stickyCart = document.getElementById('pdStickyCart');

  function currentQty() {
    const n = parseInt(qtyInput.value, 10);
    return Number.isFinite(n) && n > 0 ? n : 1;
  }

  let selectedSize = null;
  const sizesHint = document.getElementById('pdSizesHint');

  // ítem del carrito: con talla, cada talla es una línea distinta
  function cartItem() {
    const item = { id: product.id, name: product.name, price: finalPrice };
    if (selectedSize) {
      item.id = `${product.id}--${selectedSize}`;
      item.detail = `Talla: ${selectedSize}`;
    }
    return item;
  }

  function needsSize() {
    if (!sizes.length || selectedSize) return false;
    if (sizesHint) {
      sizesHint.hidden = false;
      sizesHint.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return true;
  }

  function updateWhatsappHref() {
    // usa el mismo formato que el carrito (zdBuildWhatsAppMessage), con
    // un "carrito" temporal de un solo producto — así el pedido directo
    // desde la ficha del producto queda igual de consistente
    const tempCart = [{ ...cartItem(), qty: currentQty() }];
    const message = zdBuildWhatsAppMessage(tempCart);
    const href = `https://wa.me/${ZD_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    whatsappBtn.href = href;
    stickyWa.href = href;
  }

  function addToCart(btn) {
    if (needsSize()) return;
    zdAddToCart(cartItem(), currentQty());
    zdShowAddedToast(btn);
  }

  body.querySelectorAll('.pd-size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedSize = btn.dataset.size;
      body.querySelectorAll('.pd-size-btn').forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-selected', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
      if (sizesHint) sizesHint.hidden = true;
      updateWhatsappHref();
    });
  });

  [whatsappBtn, stickyWa].forEach((link) => link.addEventListener('click', (e) => {
    if (needsSize()) e.preventDefault();
  }));

  qtyInput.addEventListener('input', () => {
    if (qtyInput.value !== '' && currentQty() < 1) qtyInput.value = 1;
    updateWhatsappHref();
  });
  body.querySelectorAll('.pd-qty-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      qtyInput.value = Math.max(1, currentQty() + Number(btn.dataset.qty));
      qtyInput.dispatchEvent(new Event('input'));
    });
  });

  addToCartBtn.addEventListener('click', () => addToCart(addToCartBtn));
  stickyCart.addEventListener('click', () => {
    if (needsSize()) return;
    zdAddToCart(cartItem(), currentQty());
    stickyCart.classList.add('is-added');
    setTimeout(() => stickyCart.classList.remove('is-added'), 1100);
  });

  // descripción larga: se muestra recortada con "Ver más"
  const descEl = document.getElementById('pdDescription');
  const descToggle = document.getElementById('pdDescToggle');
  requestAnimationFrame(() => {
    if (descEl.scrollHeight > 260) {
      descEl.classList.add('is-collapsed');
      descToggle.hidden = false;
    }
  });
  descToggle.addEventListener('click', () => {
    const collapsed = descEl.classList.toggle('is-collapsed');
    descToggle.textContent = collapsed ? 'Ver más' : 'Ver menos';
  });

  // compartir: enlace directo a esta ficha (#producto/<id>)
  const shareBtn = document.getElementById('pdShareBtn');
  shareBtn.addEventListener('click', async () => {
    const url = `${location.origin}${location.pathname}#producto/${product.id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: product.name, text: `${product.name} — ${zdFormatCOP(finalPrice)}`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      shareBtn.textContent = 'Enlace copiado ✓';
    } catch (e) {
      shareBtn.textContent = url;
    }
    setTimeout(() => { shareBtn.textContent = 'Compartir este producto'; }, 2200);
  });

  // la migaja de la categoría abre el listado ya filtrado
  const catLink = body.querySelector('[data-pd-category]');
  if (catLink) {
    catLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof window.zdSwitchPanel === 'function') window.zdSwitchPanel('panelProductDetail', 'panelProductos');
      zdFilterProductsGrid(product.category);
    });
  }

  // relacionados: misma categoría, primero los que están en oferta
  const related = zdShuffleArray(ZD_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id))
    .sort((a, b) => (b.salePrice ? 1 : 0) - (a.salePrice ? 1 : 0))
    .slice(0, 10);
  const relatedTrack = document.getElementById('pdRelated');
  if (related.length) related.forEach((p) => relatedTrack.appendChild(zdBuildProductCard(p)));
  else document.getElementById('pdRelatedSection').hidden = true;

  // barra fija inferior (celular): aparece cuando los botones de compra salen de la vista
  const stickyBar = document.getElementById('pdStickyBar');
  const actions = document.getElementById('pdActions');
  if ('IntersectionObserver' in window && stickyBar && actions) {
    const observer = new IntersectionObserver((entries) => {
      stickyBar.classList.toggle('is-visible', !entries[0].isIntersecting);
    });
    observer.observe(actions);
  }

  updateWhatsappHref();
  zdInitProductCarousel(slides.length);

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

/* ---------- Buscador del panel: busca en TODOS los productos de la
   categoría elegida (no solo en las tarjetas ya dibujadas) ---------- */
function zdInitProductsSearch() {
  const input = document.getElementById('productsSearchInput');
  if (!input) return;
  let timer = null;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const query = zdNormalize(input.value.trim());
      if (query === zdProductsQuery) return;
      zdProductsQuery = query;
      zdBuildProductsGrid();
    }, 160);
  });
}

/* ---------- Conexiones de la interfaz (filtro por categoría) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-filter-category]').forEach((btn) => {
    btn.addEventListener('click', () => {
      zdFilterProductsGrid(btn.dataset.filterCategory);
    });
  });

  zdInitProductsSearch();
});
