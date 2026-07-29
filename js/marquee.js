// ============================================================
// ZERO DELAY — marquee.js
// Una sola fila de carrusel infinito, con plataformas y combos
// intercalados, en flujo constante e ininterrumpido.
// Se puede arrastrar con mouse o dedo; hacer click abre el panel
// correspondiente (Catálogo/Combos).
//
// Nota: a diferencia de otras animaciones del sitio, este carrusel
// NO se detiene por completo con "prefers-reduced-motion" — solo
// baja la velocidad — porque el movimiento es el propósito central
// de este elemento, no un adorno.
// ============================================================

function zdMarqueeMinPrice(variants) {
  return Math.min(...variants.map((v) => v.price));
}

function zdMarqueeBuildItems() {
  const platformItems = (typeof ZD_CATALOG !== 'undefined' ? ZD_CATALOG : []).map((p) => ({
    id: p.id,
    panel: 'panelCatalogo',
    name: p.name,
    logo: p.logo,
    rect: false,
    priceLabel: `Desde ${zdFormatCOP(zdMarqueeMinPrice(p.variants))}`
  }));

  const comboItems = (typeof ZD_COMBOS !== 'undefined' ? ZD_COMBOS : []).map((c) => ({
    id: c.id,
    panel: 'panelCombos',
    name: c.name,
    logo: c.image,
    rect: true,
    priceLabel: zdFormatCOP(c.price)
  }));

  const mixed = [];
  const maxLen = Math.max(platformItems.length, comboItems.length);
  for (let i = 0; i < maxLen; i++) {
    if (platformItems[i]) mixed.push(platformItems[i]);
    if (comboItems[i]) mixed.push(comboItems[i]);
  }
  return mixed;
}

function zdMarqueeCardHTML(item) {
  const hasLogo = Boolean(item.logo);
  const frameClasses = ['logo-frame'];
  if (item.rect) frameClasses.push('logo-frame--combo-img');
  if (!hasLogo) frameClasses.push('logo-frame--text');

  const orbitClass = item.rect ? 'logo-orbit logo-orbit--combo-img' : 'logo-orbit';
  const logoInner = hasLogo
    ? `<img src="${item.logo}" alt="${item.name}" loading="lazy">`
    : `<span>${item.name}</span>`;

  return `
    <div class="marquee-card" data-panel="${item.panel}" data-id="${item.id}" tabindex="0" role="button" aria-label="Ver ${item.name}">
      <div class="${orbitClass}">
        <div class="${frameClasses.join(' ')}">${logoInner}</div>
      </div>
      <div class="marquee-info">
        <span class="marquee-name">${item.name}</span>
        <span class="marquee-price">${item.priceLabel}</span>
      </div>
    </div>
  `;
}

function initMarquee() {
  const viewport = document.getElementById('marqueeViewport1');
  const track = document.getElementById('marqueeTrack1');
  if (!viewport || !track) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BASE_SPEED = 60; // px por segundo
  const REDUCED_SPEED = 14; // más lento, pero nunca detenido del todo

  const items = zdMarqueeBuildItems();
  if (!items.length) return;

  const setHTML = items.map(zdMarqueeCardHTML).join('');
  track.innerHTML = setHTML + setHTML + setHTML; // 3 copias para poder arrastrar con margen de sobra

  let offset = 0;
  let singleSetWidth = 0;
  let dragging = false;
  let hovering = false;
  let startX = 0;
  let startOffset = 0;
  let moved = 0;
  let lastTime = null;
  let ready = false;

  function measure() {
    singleSetWidth = track.scrollWidth / 3;
    if (!ready) {
      offset = -singleSetWidth; // arrancar en la copia del medio
      ready = true;
    }
  }

  function wrapOffset() {
    if (singleSetWidth <= 0) return;
    while (offset <= -singleSetWidth * 2) offset += singleSetWidth;
    while (offset > 0) offset -= singleSetWidth;
  }

  function applyTransform() {
    track.style.transform = `translate3d(${offset}px, 0, 0)`;
  }

  function frame(time) {
    try {
      if (lastTime === null) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!dragging) {
        const base = prefersReducedMotion ? REDUCED_SPEED : BASE_SPEED;
        const speed = hovering ? base * 0.4 : base;
        offset -= speed * dt;
      }
      wrapOffset();
      applyTransform();
    } catch (err) {
      // Si algo falla en un frame puntual, no queremos que la animación
      // se congele para siempre: seguimos pidiendo el próximo frame igual.
      console.error('zd-marquee frame error:', err);
    }
    if (!paused) requestAnimationFrame(frame);
  }

  let paused = false;
  if ('IntersectionObserver' in window) {
    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (paused) {
            paused = false;
            lastTime = null;
            requestAnimationFrame(frame);
          }
        } else {
          paused = true;
        }
      });
    }, { threshold: 0 });
    visibilityObserver.observe(viewport);
  }

  function getClientX(e) {
    if (e.touches && e.touches.length) return e.touches[0].clientX;
    if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0].clientX;
    return e.clientX;
  }

  function onDragStart(e) {
    dragging = true;
    moved = 0;
    startX = getClientX(e);
    startOffset = offset;
    track.classList.add('is-dragging');
  }

  function onDragMove(e) {
    if (!dragging) return;
    const x = getClientX(e);
    const delta = x - startX;
    moved = Math.abs(delta);
    offset = startOffset + delta;
  }

  function onDragEnd() {
    dragging = false;
    track.classList.remove('is-dragging');
  }

  viewport.addEventListener('mouseenter', () => { hovering = true; });
  viewport.addEventListener('mouseleave', () => { hovering = false; onDragEnd(); });

  viewport.addEventListener('mousedown', onDragStart);
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup', onDragEnd);

  viewport.addEventListener('touchstart', onDragStart, { passive: true });
  viewport.addEventListener('touchmove', onDragMove, { passive: true });
  viewport.addEventListener('touchend', onDragEnd);

  function activateCard(card) {
    const panelId = card.dataset.panel;
    const itemId = card.dataset.id;
    if (panelId && typeof window.zdOpenPanel === 'function') {
      window.zdOpenPanel(panelId);
    }

    // Esperar a que el panel abra y termine su animación de entrada
    // antes de expandir la tarjeta correspondiente y llevarla a la vista.
    if (itemId && typeof window.zdExpandCardById === 'function') {
      const gridSelector = panelId === 'panelCatalogo' ? '#catalogGrid' : '#combosGrid';
      setTimeout(() => {
        window.zdExpandCardById(gridSelector, itemId);
      }, 420);
    }
  }

  track.addEventListener('click', (e) => {
    if (moved > 6) return; // fue un arrastre, no un click real
    const card = e.target.closest('.marquee-card');
    if (!card) return;
    activateCard(card);
  });

  // accesibilidad de teclado: Enter o Espacio activan la tarjeta enfocada
  track.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.marquee-card');
    if (!card) return;
    e.preventDefault();
    activateCard(card);
  });

  window.addEventListener('resize', () => {
    clearTimeout(viewport.__zdResizeTimer);
    viewport.__zdResizeTimer = setTimeout(measure, 200);
  });

  requestAnimationFrame(() => {
    measure();
    requestAnimationFrame(frame);
  });
}

document.addEventListener('DOMContentLoaded', initMarquee);
