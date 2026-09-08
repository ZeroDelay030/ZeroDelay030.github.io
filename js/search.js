// ============================================================
// ZERO DELAY — search.js
// Buscador universal: plataformas de streaming, combos armados y
// productos físicos (todas las categorías), accesible desde el ícono
// de lupa del header en cualquier sección del sitio.
// ============================================================

const ZD_SEARCH_KIND_LABEL = { platform: 'Streaming', combo: 'Combo', product: 'Producto' };

/* ---------- Índice unificado: se arma una sola vez, la primera vez
   que el usuario abre el buscador ---------- */
function zdBuildSearchIndex() {
  const index = [];

  (typeof ZD_CATALOG !== 'undefined' ? ZD_CATALOG : []).forEach((platform) => {
    const minPrice = Math.min(...platform.variants.map((v) => v.price));
    index.push({
      kind: 'platform',
      id: platform.id,
      name: platform.name,
      image: platform.logo || null,
      priceLabel: `Desde ${zdFormatCOP(minPrice)}`,
      priceOriginal: null,
      haystack: zdNormalize(platform.name + ' ' + platform.variants.map((v) => v.label).join(' '))
    });
  });

  (typeof ZD_COMBOS !== 'undefined' ? ZD_COMBOS : []).forEach((combo) => {
    index.push({
      kind: 'combo',
      id: combo.id,
      name: combo.name,
      image: combo.image || null,
      priceLabel: zdFormatCOP(combo.price),
      priceOriginal: null,
      haystack: zdNormalize(combo.name + ' ' + combo.includes.join(' '))
    });
  });

  (typeof ZD_PRODUCTS !== 'undefined' ? ZD_PRODUCTS : []).forEach((product) => {
    index.push({
      kind: 'product',
      id: product.id,
      name: product.name,
      image: product.image || null,
      priceLabel: zdFormatCOP(product.salePrice || product.price),
      priceOriginal: product.salePrice ? zdFormatCOP(product.price) : null,
      haystack: zdNormalize(product.name + ' ' + (product.categoryLabel || ''))
    });
  });

  return index;
}

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('searchOverlay');
  const backdrop = document.getElementById('searchOverlayBackdrop');
  const input = document.getElementById('universalSearchInput');
  const resultsEl = document.getElementById('universalSearchResults');
  const triggerBtn = document.getElementById('searchTriggerBtn');
  const closeBtn = document.getElementById('searchOverlayClose');
  if (!overlay || !input || !resultsEl || !triggerBtn) return;

  let searchIndex = null;
  function getIndex() {
    if (!searchIndex) searchIndex = zdBuildSearchIndex();
    return searchIndex;
  }

  const HINT_HTML = '<p class="search-panel-hint">Escribe para buscar en todo el catálogo: plataformas, combos y productos.</p>';
  const EMPTY_HTML = '<p class="search-panel-empty">No encontramos resultados para tu búsqueda.</p>';
  let currentMatches = [];

  function renderResults(query) {
    if (query === '') {
      currentMatches = [];
      resultsEl.innerHTML = HINT_HTML;
      return;
    }

    currentMatches = getIndex().filter((item) => item.haystack.includes(query)).slice(0, 40);

    if (!currentMatches.length) {
      resultsEl.innerHTML = EMPTY_HTML;
      return;
    }

    resultsEl.innerHTML = currentMatches.map((item, i) => {
      const thumbClass = item.image ? 'search-result-thumb is-photo' : 'search-result-thumb';
      const thumbInner = item.image
        ? `<img src="${item.image}" alt="" loading="lazy">`
        : `<span>${item.name.charAt(0)}</span>`;
      const originalHtml = item.priceOriginal
        ? `<span class="search-result-price-original">${item.priceOriginal}</span>`
        : '';
      return `
        <button type="button" class="search-result-item" data-index="${i}">
          <span class="${thumbClass}">${thumbInner}</span>
          <span class="search-result-info">
            <span class="search-result-name">${item.name}</span>
            <span class="search-result-meta"><span class="search-result-kind">${ZD_SEARCH_KIND_LABEL[item.kind]}</span></span>
          </span>
          <span class="search-result-price">${originalHtml}${item.priceLabel}</span>
        </button>
      `;
    }).join('');

    resultsEl.querySelectorAll('.search-result-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        goToResult(currentMatches[Number(btn.dataset.index)]);
      });
    });
  }

  /* ---------- Navega al resultado elegido: cierra cualquier panel que
     estuviera abierto (incluida la búsqueda) y abre el destino correcto
     — la ficha de producto para productos, o el catálogo/combos con la
     tarjeta correspondiente ya expandida y centrada en pantalla. ---------- */
  function goToResult(item) {
    if (!item) return;
    closeSearch();
    if (typeof window.zdCloseAllPanels === 'function') window.zdCloseAllPanels();

    if (item.kind === 'product') {
      if (typeof window.zdOpenProductDetail === 'function') window.zdOpenProductDetail(item.id);
      return;
    }

    const panelId = item.kind === 'platform' ? 'panelCatalogo' : 'panelCombos';
    const gridSelector = item.kind === 'platform' ? '#catalogGrid' : '#combosGrid';
    if (typeof window.zdOpenPanel === 'function') window.zdOpenPanel(panelId);
    setTimeout(() => {
      if (typeof window.zdExpandCardById === 'function') window.zdExpandCardById(gridSelector, item.id);
    }, 420);
  }

  function openSearch() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    renderResults(zdNormalize(input.value.trim()));
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
  }
  window.zdCloseSearch = closeSearch;

  triggerBtn.addEventListener('click', openSearch);
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);
  if (backdrop) backdrop.addEventListener('click', closeSearch);

  input.addEventListener('input', () => {
    renderResults(zdNormalize(input.value.trim()));
  });

  // Escape cierra el buscador primero, en fase de captura, para que no
  // dispare a la vez el cierre de carrito/paneles que maneja main.js
  // con la misma tecla.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeSearch();
      e.stopPropagation();
    }
  }, true);
});
