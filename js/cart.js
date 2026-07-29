// ============================================================
// ZERO DELAY — cart.js
// Renderiza el contenido del carrito (lista, cantidades, total)
// y genera el mensaje de WhatsApp al finalizar.
// Depende de zdGetCart / zdSaveCart / zdUpdateCartBadges / zdFormatCOP,
// definidas en catalog.js.
// ============================================================

const ZD_WHATSAPP_NUMBER = '573106422020';
const ZD_PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let zdPrevTotal = 0;

function zdCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/* ---------- D) Animación de conteo para números (total, badges) ---------- */
function zdAnimateNumber(el, from, to, formatFn) {
  if (!el) return;
  if (ZD_PREFERS_REDUCED_MOTION || from === to) {
    el.textContent = formatFn(to);
    return;
  }
  const duration = 400;
  const start = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = formatFn(from + (to - from) * eased);
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = formatFn(to);
  }
  requestAnimationFrame(tick);
}

/* ---------- C) Barra de carrito flotante en móvil ---------- */
function zdUpdateMobileCartBar() {
  const bar = document.getElementById('mobileCartBar');
  const countEl = document.getElementById('mobileCartCount');
  const totalEl = document.getElementById('mobileCartTotal');
  if (!bar || !countEl || !totalEl) return;

  const cart = zdGetCart();
  const qty = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = zdCartTotal(cart);

  countEl.textContent = qty;
  totalEl.textContent = zdFormatCOP(total);
  bar.classList.toggle('has-items', qty > 0);
}
window.zdUpdateMobileCartBar = zdUpdateMobileCartBar;


function zdChangeQty(id, delta) {
  let cart = zdGetCart();
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  zdSaveCart(cart);
  zdUpdateCartBadges();
  zdRenderCartDrawer();
}

function zdRemoveItem(id) {
  const cart = zdGetCart().filter((i) => i.id !== id);
  zdSaveCart(cart);
  zdUpdateCartBadges();
  zdRenderCartDrawer();
}

function zdClearCart() {
  zdSaveCart([]);
  zdUpdateCartBadges();
  zdRenderCartDrawer();
}

/* ---------- Mensaje dinámico de WhatsApp ----------
   Nota técnica: se evitan a propósito los emojis "astrales" (los que
   ocupan 4 bytes en UTF-8, como 😊 🚀 🛒) porque el enlace de WhatsApp
   los corrompe en algunos navegadores/dispositivos, mostrando el
   símbolo "�". Por eso el mensaje usa solo texto y símbolos seguros. */
const ZD_EMOJI_CART = '\u{1F6D2}'; // carrito de compras (uso solo en la interfaz, no en el mensaje de WhatsApp)

function zdBuildWhatsAppMessage(cart) {
  const lines = cart.map((item) => {
    const qtyText = item.qty > 1 ? ` x${item.qty}` : '';
    return `• ${item.name}${qtyText} — ${zdFormatCOP(item.price)}`;
  });
  const total = zdFormatCOP(zdCartTotal(cart));

  return [
    'Hola, vengo de la página de ZERO DELAY.',
    'Me interesa lo siguiente:',
    '',
    lines.join('\n'),
    '',
    `Total: ${total}`,
    '',
    '¿Me confirman si está disponible? Muchas gracias.'
  ].join('\n');
}

/* ---------- Render del panel del carrito ---------- */
function zdRenderCartDrawer() {
  const body = document.getElementById('cartDrawerBody');
  const footer = document.getElementById('cartDrawerFooter');
  if (!body || !footer) return;

  const cart = zdGetCart();

  if (cart.length === 0) {
    body.innerHTML = `<p class="cart-empty">Tu carrito está vacío. Explora el catálogo o los combos para agregar productos. ${ZD_EMOJI_CART}</p>`;
    footer.innerHTML = '';
    footer.classList.remove('is-active');
    zdPrevTotal = 0;
    zdUpdateMobileCartBar();
    return;
  }

  footer.classList.add('is-active');

  body.innerHTML = `<div class="cart-items">${cart.map((item) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-unit">${zdFormatCOP(item.price)} c/u</span>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Restar">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Sumar">+</button>
          <button class="cart-item-remove" data-action="remove" data-id="${item.id}" aria-label="Quitar producto">&times;</button>
        </div>
      </div>
    `).join('')}</div>`;

  const total = zdCartTotal(cart);
  const nonComboCount = cart.filter((item) => !item.name.startsWith('Combo ')).length;
  const showNudge = nonComboCount >= 2;

  footer.innerHTML = `
    ${showNudge ? `
      <div class="cart-nudge">
        <span>💡 ¿Sabías que combinando productos puedes ahorrar?</span>
        <button class="cart-nudge-btn" id="cartNudgeBtn">Ver combos</button>
      </div>
    ` : ''}
    <div class="cart-total-row">
      <span>Total</span>
      <span class="cart-total-value" id="cartTotalValue">${zdFormatCOP(zdPrevTotal)}</span>
    </div>
    <button class="btn btn--primary cart-whatsapp-btn" id="cartWhatsappBtn">Finalizar por WhatsApp</button>
    <button class="cart-clear-btn" id="cartClearBtn">Vaciar carrito</button>
  `;

  zdAnimateNumber(document.getElementById('cartTotalValue'), zdPrevTotal, total, zdFormatCOP);
  zdPrevTotal = total;
  zdUpdateMobileCartBar();

  const nudgeBtn = document.getElementById('cartNudgeBtn');
  if (nudgeBtn) {
    nudgeBtn.addEventListener('click', () => {
      if (typeof window.zdCloseCart === 'function') window.zdCloseCart();
      if (typeof window.zdOpenPanel === 'function') window.zdOpenPanel('panelCombos');
    });
  }

  body.querySelectorAll('[data-action="increase"]').forEach((btn) =>
    btn.addEventListener('click', () => zdChangeQty(btn.dataset.id, 1))
  );
  body.querySelectorAll('[data-action="decrease"]').forEach((btn) =>
    btn.addEventListener('click', () => zdChangeQty(btn.dataset.id, -1))
  );
  body.querySelectorAll('[data-action="remove"]').forEach((btn) =>
    btn.addEventListener('click', () => zdRemoveItem(btn.dataset.id))
  );

  const clearBtn = document.getElementById('cartClearBtn');
  if (clearBtn) clearBtn.addEventListener('click', zdClearCart);

  const waBtn = document.getElementById('cartWhatsappBtn');
  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      if (typeof window.zdConfettiBurst === 'function') {
        const rect = waBtn.getBoundingClientRect();
        window.zdConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
      const message = zdBuildWhatsAppMessage(zdGetCart());
      const url = `https://wa.me/${ZD_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  zdRenderCartDrawer();
  document.querySelectorAll('[data-open-cart]').forEach((btn) =>
    btn.addEventListener('click', zdRenderCartDrawer)
  );
});
