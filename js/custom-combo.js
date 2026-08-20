// ============================================================
// ZERO DELAY — custom-combo.js
// "Arma tu combo a tu gusto": el cliente elige libremente planes
// de cualquier plataforma (mínimo 2, sin máximo) y recibe un
// descuento automático (10% desde 2, 15% desde 4), respetando
// los precios mínimos definidos en ZD_CUSTOM_COMBO_PRICE_FLOORS.
// ============================================================

let zdCustomComboSelection = [];
let zdCustomComboLastPercent = 0;
let zdCustomComboJustAdded = false;
let zdCustomComboLastRemoved = null;

const ZD_CUSTOM_COMBO_STORAGE_KEY = 'zd_custom_combo_v1';

// Plataformas más buscadas — usadas como respaldo cuando no hay nada
// seleccionado todavía con qué relacionar una recomendación
const ZD_CUSTOM_COMBO_POPULAR_IDS = ['netflix', 'primevideo', 'disney', 'hbomax', 'chatgpt', 'capcut'];

// Qué plataformas recomendar según la última que el cliente agregó,
// agrupadas por afinidad real (streaming con streaming, IA con
// herramientas creativas, TV en vivo con TV en vivo, etc.)
const ZD_CUSTOM_COMBO_RELATED = {
  netflix: ['disney', 'hbomax', 'primevideo'],
  disney: ['netflix', 'primevideo', 'appletv'],
  hbomax: ['netflix', 'primevideo', 'paramount'],
  primevideo: ['disney', 'netflix', 'appletv'],
  appletv: ['disney', 'primevideo', 'netflix'],
  paramount: ['hbomax', 'universal', 'disney'],
  universal: ['paramount', 'netflix', 'hbomax'],
  mubi: ['plex', 'primevideo', 'netflix'],
  crunchyroll: ['netflix', 'primevideo', 'hbomax'],
  vix: ['telelatino', 'plex', 'netflix'],
  plex: ['mubi', 'vix', 'netflix'],
  directvgo: ['paramount', 'hbomax', 'magistv'],
  telelatino: ['magistv', 'iptvgold', 'flujotv'],
  flujotv: ['magistv', 'iptvgold', 'telelatino'],
  iptvgold: ['magistv', 'telelatino', 'flujotv'],
  magistv: ['iptvgold', 'telelatino', 'flujotv'],
  youtube: ['netflix', 'spotify', 'disney'],
  spotify: ['netflix', 'chatgpt', 'youtube'],
  chatgpt: ['capcut', 'gemini', 'canva'],
  gemini: ['chatgpt', 'capcut', 'canva'],
  capcut: ['canva', 'chatgpt', 'gemini'],
  canva: ['capcut', 'chatgpt', 'gemini'],
  office365: ['chatgpt', 'gemini', 'duolingo'],
  duolingo: ['chatgpt', 'office365', 'gemini']
};

/* ---------- Guardar / cargar selección (sobrevive a recargas) ---------- */
function zdSaveCustomComboSelection() {
  try {
    localStorage.setItem(ZD_CUSTOM_COMBO_STORAGE_KEY, JSON.stringify(zdCustomComboSelection));
  } catch (e) { /* almacenamiento no disponible: no es crítico */ }
}

function zdLoadCustomComboSelection() {
  try {
    const raw = localStorage.getItem(ZD_CUSTOM_COMBO_STORAGE_KEY);
    zdCustomComboSelection = raw ? JSON.parse(raw) : [];
  } catch (e) {
    zdCustomComboSelection = [];
  }
}

/* ---------- Utilidad: encontrar plataforma+plan por id de variante ---------- */
function zdFindPlatformVariant(variantId) {
  for (const platform of ZD_CATALOG) {
    const variant = platform.variants.find((v) => v.id === variantId);
    if (variant) return { platform, variant };
  }
  return null;
}

function zdCustomComboAddVariant(platform, variant) {
  zdCustomComboSelection.push({
    uid: `${variant.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    variantId: variant.id,
    platformId: platform.id,
    name: `${platform.name} — ${variant.label}`,
    normalPrice: variant.price
  });
  zdSaveCustomComboSelection();
  zdRenderCustomComboSummary();
}

/* ---------- Construcción del selector de plataformas ---------- */
function zdBuildCustomComboPicker() {
  const picker = document.getElementById('customComboPicker');
  if (!picker || picker.dataset.built === 'true') return;

  picker.innerHTML = '';

  ZD_CATALOG.forEach((platform) => {
    const card = document.createElement('div');
    card.className = 'catalog-card';
    card.dataset.searchName = zdNormalize(platform.name);
    card.dataset.platformId = platform.id;

    const face = document.createElement('button');
    face.className = 'catalog-card-face';
    face.appendChild(zdBuildLogoFrame(platform.logo, platform.name));

    const selectedBadge = document.createElement('span');
    selectedBadge.className = 'custom-combo-card-badge';
    selectedBadge.textContent = '✓ En tu combo';
    face.appendChild(selectedBadge);

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
      addBtn.addEventListener('click', () => {
        zdCustomComboAddVariant(platform, variant);
        zdShowAddedToast(addBtn);
      });

      row.appendChild(info);
      row.appendChild(addBtn);
      variantsList.appendChild(row);
    });

    variantsWrap.appendChild(variantsList);
    card.appendChild(variantsWrap);
    face.addEventListener('click', () => zdToggleCard(card, '#customComboPicker'));

    picker.appendChild(card);
  });

  picker.dataset.built = 'true';
  zdObserveCardAnimations(picker);
  zdMarkSelectedPickerCards();
}

/* ---------- Marcar en el selector qué plataformas ya tienen algo agregado (D) ---------- */
function zdMarkSelectedPickerCards() {
  const picker = document.getElementById('customComboPicker');
  if (!picker) return;
  const selectedIds = new Set(zdCustomComboSelection.map((i) => i.platformId));
  picker.querySelectorAll('.catalog-card').forEach((card) => {
    card.classList.toggle('has-selection', selectedIds.has(card.dataset.platformId));
  });
}

/* ---------- Búsqueda dentro del armador ---------- */
function zdInitCustomComboSearch() {
  const picker = document.getElementById('customComboPicker');
  const input = document.getElementById('customComboSearchInput');
  if (!picker || !input || input.dataset.wired === 'true') return;

  const emptyEl = zdEnsureEmptyState(picker, 'No encontramos plataformas que coincidan con tu búsqueda.');
  input.addEventListener('input', () => {
    const query = zdNormalize(input.value.trim());
    const fn = (card) => card.dataset.searchName.includes(query);
    fn.query = query;
    zdFilterGrid(picker, emptyEl, fn);
  });
  input.dataset.wired = 'true';
}

/* ---------- Mensaje de progreso hacia el siguiente nivel de descuento (A) ---------- */
function zdCustomComboProgressMessage(count) {
  if (count === 1) return 'Agrega 1 plan más para desbloquear 10% de descuento';
  if (count >= 2 && count < 4) return `Agrega ${4 - count} más para subir a 15% de descuento`;
  if (count >= 4) return '🎉 ¡Tienes el descuento máximo del 15%!';
  return '';
}

/* ---------- Recomendaciones relacionadas con lo que ya agregó (B, L) ---------- */
function zdRenderCustomComboRelated(container) {
  if (!zdCustomComboSelection.length) {
    container.innerHTML = '';
    return;
  }

  const excludeIds = new Set(zdCustomComboSelection.map((i) => i.platformId));
  const lastAdded = zdCustomComboSelection[zdCustomComboSelection.length - 1];
  const relatedIds = ZD_CUSTOM_COMBO_RELATED[lastAdded.platformId] || ZD_CUSTOM_COMBO_POPULAR_IDS;

  // si las relacionadas ya están todas agregadas, buscamos respaldo en las populares
  let candidateIds = relatedIds.filter((id) => !excludeIds.has(id));
  if (candidateIds.length < 3) {
    const backup = ZD_CUSTOM_COMBO_POPULAR_IDS.filter((id) => !excludeIds.has(id) && !candidateIds.includes(id));
    candidateIds = candidateIds.concat(backup);
  }

  const options = candidateIds.slice(0, 3)
    .map((id) => ZD_CATALOG.find((p) => p.id === id))
    .filter(Boolean);

  if (!options.length) {
    container.innerHTML = '';
    return;
  }

  const lastPlatformName = lastAdded.name.split(' — ')[0];

  container.innerHTML = `
    <p class="custom-combo-suggest-label">🔗 Como agregaste ${lastPlatformName}, te recomendamos:</p>
    <div class="custom-combo-preset-row">
      ${options.map((p) => `<button class="custom-combo-preset-btn" data-quickadd="${p.id}">+ ${p.name}</button>`).join('')}
    </div>
  `;
  container.querySelectorAll('[data-quickadd]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const platform = ZD_CATALOG.find((p) => p.id === btn.dataset.quickadd);
      if (!platform) return;
      const cheapest = platform.variants.reduce((a, b) => (b.price < a.price ? b : a));
      zdCustomComboAddVariant(platform, cheapest);
    });
  });
}

/* ---------- Resumen en vivo: total, ahorro, lista de seleccionados ---------- */
function zdRenderCustomComboSummary() {
  const list = document.getElementById('customComboSelectedList');
  const totalsBox = document.getElementById('customComboTotals');
  const discountLabel = document.getElementById('customComboDiscountLabel');
  const savingsEl = document.getElementById('customComboSavings');
  const totalEl = document.getElementById('customComboTotal');
  const addBtn = document.getElementById('customComboAddBtn');
  const clearBtn = document.getElementById('customComboClearBtn');
  const shareBtn = document.getElementById('customComboShareBtn');
  const progressEl = document.getElementById('customComboProgress');
  const suggestBox = document.getElementById('customComboSuggestBox');
  const floatBar = document.getElementById('customComboFloatBar');
  if (!list || !addBtn) return;

  zdMarkSelectedPickerCards();

  const count = zdCustomComboSelection.length;

  if (count === 0) {
    if (zdCustomComboJustAdded) {
      list.innerHTML = '<p class="custom-combo-empty custom-combo-empty--success">🎉 ¡Combo agregado a tu carrito! ¿Armamos otro combo personalizado?</p>';
      zdCustomComboJustAdded = false;
    } else {
      list.innerHTML = '<p class="custom-combo-empty">Aún no has agregado ningún plan. Elige al menos 2 para armar tu combo.</p>';
    }
    if (suggestBox) suggestBox.innerHTML = '';
    totalsBox.hidden = true;
    if (progressEl) progressEl.textContent = '';
    addBtn.disabled = true;
    addBtn.textContent = 'Agrega mínimo 2 planes';
    clearBtn.hidden = true;
    if (shareBtn) shareBtn.hidden = true;
    if (floatBar) floatBar.classList.remove('is-visible');
    zdCustomComboLastPercent = 0;
    return;
  }

  const percent = zdCustomComboDiscountPercent(count);
  let normalTotal = 0;
  let finalTotal = 0;

  list.innerHTML = zdCustomComboSelection.map((item) => {
    const price = zdCustomComboItemPrice(item.variantId, item.normalPrice, count);
    const hasDiscount = price < item.normalPrice;
    normalTotal += item.normalPrice;
    finalTotal += price;
    return `
      <div class="custom-combo-selected-item">
        <div class="custom-combo-selected-info">
          <span class="custom-combo-selected-name">${item.name}</span>
          <span class="custom-combo-selected-price-row">
            ${hasDiscount ? `<span class="custom-combo-selected-original">${zdFormatCOP(item.normalPrice)}</span>` : ''}
            <span class="custom-combo-selected-price">${zdFormatCOP(price)}</span>
          </span>
        </div>
        <button class="cart-item-remove" data-uid="${item.uid}" aria-label="Quitar">&times;</button>
      </div>
    `;
  }).join('');

  list.querySelectorAll('[data-uid]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = zdCustomComboSelection.findIndex((i) => i.uid === btn.dataset.uid);
      if (idx === -1) return;
      zdCustomComboLastRemoved = { item: zdCustomComboSelection[idx], index: idx };
      zdCustomComboSelection = zdCustomComboSelection.filter((i) => i.uid !== btn.dataset.uid);
      zdSaveCustomComboSelection();
      zdRenderCustomComboSummary();
      zdShowUndoToast();
    });
  });

  // recomendaciones relacionadas con la última plataforma agregada
  if (suggestBox) zdRenderCustomComboRelated(suggestBox);

  const savings = normalTotal - finalTotal;

  totalsBox.hidden = false;
  discountLabel.textContent = percent > 0 ? `${Math.round(percent * 100)}%` : '0%';
  savingsEl.textContent = zdFormatCOP(savings);
  totalEl.textContent = zdFormatCOP(finalTotal);

  if (progressEl) progressEl.textContent = zdCustomComboProgressMessage(count);

  clearBtn.hidden = false;
  if (shareBtn) shareBtn.hidden = count < 2;

  if (floatBar) {
    floatBar.classList.toggle('is-visible', true);
    const floatCount = floatBar.querySelector('#customComboFloatCount');
    const floatTotal = floatBar.querySelector('#customComboFloatTotal');
    if (floatCount) floatCount.textContent = count;
    if (floatTotal) floatTotal.textContent = zdFormatCOP(finalTotal);
  }

  if (count < 2) {
    addBtn.disabled = true;
    addBtn.textContent = 'Agrega 1 plan más';
  } else {
    addBtn.disabled = false;
    addBtn.textContent = `Agregar combo personalizado — ${zdFormatCOP(finalTotal)}`;
  }

  // celebración (I): al cruzar justo al 15% de descuento
  if (percent === 0.15 && zdCustomComboLastPercent !== 0.15 && typeof window.zdConfettiBurst === 'function') {
    const rect = discountLabel.getBoundingClientRect();
    window.zdConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }
  zdCustomComboLastPercent = percent;
}

/* ---------- Toast de "Deshacer" al quitar un producto (K) ---------- */
function zdShowUndoToast() {
  const existing = document.getElementById('customComboUndoToast');
  if (existing) existing.remove();

  const removed = zdCustomComboLastRemoved;
  if (!removed) return;

  const toast = document.createElement('div');
  toast.id = 'customComboUndoToast';
  toast.className = 'custom-combo-undo-toast';
  toast.innerHTML = `<span>Producto quitado</span><button type="button">Deshacer</button>`;

  toast.querySelector('button').addEventListener('click', () => {
    const arr = zdCustomComboSelection.slice();
    arr.splice(Math.min(removed.index, arr.length), 0, removed.item);
    zdCustomComboSelection = arr;
    zdCustomComboLastRemoved = null;
    zdSaveCustomComboSelection();
    zdRenderCustomComboSummary();
    toast.remove();
  });

  document.body.appendChild(toast);
  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 4500);
}

/* ---------- Compartir el combo armado (F) ---------- */
function zdInitCustomComboShare() {
  const shareBtn = document.getElementById('customComboShareBtn');
  if (!shareBtn || shareBtn.dataset.wired === 'true') return;

  shareBtn.addEventListener('click', async () => {
    const count = zdCustomComboSelection.length;
    if (count < 2) return;
    const percent = zdCustomComboDiscountPercent(count);
    let total = 0;
    const lines = zdCustomComboSelection.map((item) => {
      const price = zdCustomComboItemPrice(item.variantId, item.normalPrice, count);
      total += price;
      return `• ${item.name} — ${zdFormatCOP(price)}`;
    });
    const text = [
      'Mi combo personalizado ZERO DELAY:',
      '',
      lines.join('\n'),
      '',
      `Descuento: ${Math.round(percent * 100)}%`,
      `Total: ${zdFormatCOP(total)}`
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      const original = shareBtn.textContent;
      shareBtn.textContent = '¡Copiado! ✓';
      setTimeout(() => { shareBtn.textContent = original; }, 1600);
    } catch (e) {
      // portapapeles no disponible: no hacemos nada más, el botón simplemente no confirma
    }
  });

  shareBtn.dataset.wired = 'true';
}

/* ---------- Agregar el combo armado al carrito ---------- */
function zdInitCustomComboActions() {
  const addBtn = document.getElementById('customComboAddBtn');
  const clearBtn = document.getElementById('customComboClearBtn');
  if (!addBtn || addBtn.dataset.wired === 'true') return;

  addBtn.addEventListener('click', () => {
    const count = zdCustomComboSelection.length;
    if (count < 2) return;

    const percent = zdCustomComboDiscountPercent(count);
    let finalTotal = 0;
    const breakdown = zdCustomComboSelection.map((item) => {
      const price = zdCustomComboItemPrice(item.variantId, item.normalPrice, count);
      finalTotal += price;
      return { name: item.name, price };
    });

    const detail = zdCustomComboSelection.map((item) => item.name).join(', ');

    zdAddToCart({
      id: `custom-combo-${Date.now()}`,
      name: 'Combo personalizado',
      price: finalTotal,
      detail,
      breakdown,
      discountPercent: Math.round(percent * 100)
    });

    if (typeof window.zdBumpCartIcon === 'function') window.zdBumpCartIcon();

    zdCustomComboSelection = [];
    zdSaveCustomComboSelection();
    zdCustomComboJustAdded = true;
    zdRenderCustomComboSummary();

    if (typeof window.zdOpenCart === 'function') {
      window.zdOpenCart();
      if (typeof zdRenderCartDrawer === 'function') zdRenderCartDrawer();
    }
  });

  clearBtn.addEventListener('click', () => {
    zdCustomComboSelection = [];
    zdSaveCustomComboSelection();
    zdRenderCustomComboSummary();
  });

  addBtn.dataset.wired = 'true';
}

/* ---------- Barra flotante de resumen (G) ---------- */
function zdInitCustomComboFloatBar() {
  const floatBar = document.getElementById('customComboFloatBar');
  const summary = document.querySelector('.custom-combo-summary');
  if (!floatBar || floatBar.dataset.wired === 'true') return;

  floatBar.addEventListener('click', () => {
    if (summary) summary.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  floatBar.dataset.wired = 'true';
}

document.addEventListener('DOMContentLoaded', () => {
  zdLoadCustomComboSelection();
  zdRenderCustomComboSummary();
  zdInitCustomComboActions();
  zdInitCustomComboShare();
  zdInitCustomComboFloatBar();
});

window.zdBuildCustomComboPicker = zdBuildCustomComboPicker;
window.zdInitCustomComboSearch = zdInitCustomComboSearch;
