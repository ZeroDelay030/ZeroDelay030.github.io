// ============================================================
// ZERO DELAY — cart.js
// Renderiza el contenido del carrito (lista, cantidades, total)
// y genera el mensaje de WhatsApp al finalizar.
// Depende de zdGetCart / zdSaveCart / zdUpdateCartBadges / zdFormatCOP,
// definidas en catalog.js.
// ============================================================

const ZD_WHATSAPP_NUMBER = '573106422020';

function zdCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

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

  footer.innerHTML = `
    <div class="cart-total-row">
      <span>Total</span>
      <span class="cart-total-value">${zdFormatCOP(total)}</span>
    </div>
    <button class="btn btn--primary cart-whatsapp-btn" id="cartWhatsappBtn">Finalizar por WhatsApp</button>
    <button class="cart-clear-btn" id="cartClearBtn">Vaciar carrito</button>
  `;

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
    waBtn.addEventListener('click', () => {
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
