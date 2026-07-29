// ============================================================
// ZERO DELAY — main.js (Paso 1: solo interacciones de esqueleto)
// La lógica del carrito y del catálogo interactivo se añadirán
// en los siguientes pasos del proyecto.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Intro de carga: breve destello del logo ---------- */
  const loader = document.getElementById('zdLoader');
  if (loader) {
    const hideLoader = () => loader.classList.add('is-hidden');
    window.addEventListener('load', () => setTimeout(hideLoader, 450));
    setTimeout(hideLoader, 2000); // respaldo: nunca dejarlo pegado más de 2s
  }

  /* ---------- Menú móvil ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const navOverlay = document.getElementById('navOverlay');

  function openMobileNav() {
    mainNav.classList.add('is-open');
    navToggle.classList.add('is-active');
    navOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('is-open');
      isOpen ? closeMobileNav() : openMobileNav();
    });

    // cerrar el menú al elegir cualquier opción (scroll o apertura de panel)
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });

    // cerrar tocando el fondo oscurecido
    if (navOverlay) navOverlay.addEventListener('click', closeMobileNav);

    // cerrar automáticamente si la pantalla deja de ser "móvil"
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) closeMobileNav();
    });
  }

  /* ---------- Acordeón de FAQ ---------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // cerrar todos los demás (acordeón exclusivo)
      faqItems.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Carrito (drawer) — solo apertura/cierre visual por ahora ---------- */
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartOpenBtns = document.querySelectorAll('[data-open-cart]');

  function openCart() {
    cartDrawer.classList.add('is-open');
    cartOverlay.classList.add('is-active');
    cartDrawer.setAttribute('aria-hidden', 'false');
  }

  function closeCart() {
    cartDrawer.classList.remove('is-open');
    cartOverlay.classList.remove('is-active');
    cartDrawer.setAttribute('aria-hidden', 'true');
  }

  window.zdCloseCart = closeCart;
  window.zdOpenCart = openCart;

  cartOpenBtns.forEach((btn) => btn.addEventListener('click', openCart));
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  /* ---------- Paneles de pantalla completa (Catálogo / Combos) ---------- */
  const openPanelBtns = document.querySelectorAll('[data-open-panel]');
  const closePanelBtns = document.querySelectorAll('[data-close-panel]');

  function openPanel(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    panel.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    const gridByPanel = { panelCatalogo: '#catalogGrid', panelCombos: '#combosGrid' };
    if (gridByPanel[id] && typeof zdPlayGridEntrance === 'function') {
      zdPlayGridEntrance(gridByPanel[id]);
    }

    if (typeof window.zdResetPanelSearch === 'function') {
      window.zdResetPanelSearch(id);
    }
  }

  // Exponer para que otros módulos (ej. el carrusel de la home) puedan abrir paneles
  window.zdOpenPanel = openPanel;

  function closePanel(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function closeAllPanels() {
    document.querySelectorAll('.fullscreen-panel.is-open').forEach((panel) => {
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  openPanelBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPanel(btn.dataset.openPanel);
    });
  });

  closePanelBtns.forEach((btn) => {
    btn.addEventListener('click', () => closePanel(btn.dataset.closePanel));
  });

  /* ---------- Cambiar rápido entre paneles (Catálogo <-> Combos) ---------- */
  document.querySelectorAll('[data-switch-panel]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.querySelector('.fullscreen-panel.is-open');
      if (current) closePanel(current.id);
      openPanel(btn.dataset.switchPanel);
    });
  });

  /* ---------- Volver al inicio desde cualquier panel ---------- */
  document.querySelectorAll('[data-go-home]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllPanels();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  /* ---------- Tecla Escape: cierra carrito y paneles ---------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeAllPanels();
    }
  });

});
