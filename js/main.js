// ============================================================
// ZERO DELAY — main.js (Paso 1: solo interacciones de esqueleto)
// La lógica del carrito y del catálogo interactivo se añadirán
// en los siguientes pasos del proyecto.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Modo claro/oscuro (claro es el modo por defecto) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const applyThemeLabel = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const label = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
    };
    applyThemeLabel();

    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem('zd_theme', 'light'); } catch (e) {}
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('zd_theme', 'dark'); } catch (e) {}
      }
      applyThemeLabel();
    });
  }

  /* ---------- Intro de carga: breve destello del logo ---------- */
  const loader = document.getElementById('zdLoader');
  if (loader) {
    const hideLoader = () => {
      loader.classList.add('is-hidden');
      setTimeout(() => loader.remove(), 650); // se quita del DOM del todo tras la transición
    };
    window.addEventListener('load', () => setTimeout(hideLoader, 450));
    setTimeout(hideLoader, 2000); // respaldo: nunca dejarlo pegado más de 2s
  }

  /* ---------- Menú de categorías: hover en escritorio, toque en móvil
     (reutilizable — hay una instancia en el header y otra dentro del
     panel de Productos ZERO DELAY) ---------- */
  function initCategoriesDropdown(navId, triggerId, opts) {
    opts = opts || {};
    const navCategories = document.getElementById(navId);
    const categoriesTrigger = document.getElementById(triggerId);
    if (!navCategories || !categoriesTrigger) return;

    const closeCategories = () => {
      navCategories.classList.remove('is-open');
      categoriesTrigger.setAttribute('aria-expanded', 'false');
    };
    const openCategories = () => {
      navCategories.classList.add('is-open');
      categoriesTrigger.setAttribute('aria-expanded', 'true');
    };

    const hoverCapable = window.matchMedia('(hover: hover)').matches;

    if (hoverCapable) {
      // en dispositivos con mouse, el hover ya abre/cierra el menú;
      // el clic con mouse siempre llega justo después de un mouseenter
      // (así es como funcionan los eventos del mouse), así que si el
      // clic también hiciera toggle, cerraría el menú apenas se abrió.
      // El clic con mouse aquí solo evita la navegación; para teclado
      // (Enter/Espacio, que no dispara mouseenter) sí hace toggle.
      categoriesTrigger.addEventListener('click', (e) => e.preventDefault());
      categoriesTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navCategories.classList.contains('is-open') ? closeCategories() : openCategories();
        }
      });

      let closeTimer = null;
      navCategories.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        openCategories();
      });
      navCategories.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(closeCategories, 150);
      });
    } else {
      // táctil: el toque abre/cierra, sin hover de por medio
      categoriesTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        navCategories.classList.contains('is-open') ? closeCategories() : openCategories();
      });
    }

    document.addEventListener('click', (e) => {
      if (!navCategories.contains(e.target)) closeCategories();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCategories();
    });

    navCategories.querySelectorAll('.categories-menu-item:not(:disabled)').forEach((item) => {
      item.addEventListener('click', () => {
        closeCategories();
        if (opts.closesMobileNav) closeMobileNav();
      });
    });
  }

  initCategoriesDropdown('navCategories', 'categoriesTrigger', { closesMobileNav: true });
  initCategoriesDropdown('navCategoriesProducts', 'categoriesTriggerProducts', { closesMobileNav: false });

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

    if (id === 'panelCatalogo' && typeof window.zdBuildPlatformsGrid === 'function') {
      window.zdBuildPlatformsGrid();
    }
    if (id === 'panelCombos' && typeof window.zdBuildCombosGrid === 'function') {
      window.zdBuildCombosGrid();
    }
    // estos dos se reconstruyen SIEMPRE que se abren (no una sola vez),
    // para que el orden aleatorio del catálogo cambie en cada visita
    if (id === 'panelCatalogoTodo' && typeof window.zdBuildCatalogoTodoGrid === 'function') {
      window.zdBuildCatalogoTodoGrid();
    }
    if (id === 'panelOfertas' && typeof window.zdBuildOfertasGrid === 'function') {
      window.zdBuildOfertasGrid();
    }
    if (id === 'panelProductos' && typeof window.zdBuildProductsGrid === 'function') {
      window.zdBuildProductsGrid(true);
    }
    if (id === 'panelCustomCombo') {
      if (typeof window.zdBuildCustomComboPicker === 'function') window.zdBuildCustomComboPicker();
      if (typeof window.zdInitCustomComboSearch === 'function') window.zdInitCustomComboSearch();
    }

    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    panel.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    if (id === 'panelCustomCombo' && typeof window.zdRenderCustomComboSummary === 'function') {
      window.zdRenderCustomComboSummary();
    }

    const gridByPanel = {
      panelCatalogo: '#catalogGrid',
      panelCombos: '#combosGrid',
      panelCustomCombo: '#customComboPicker',
      panelCatalogoTodo: '#catalogTodoGrid',
      panelOfertas: '#ofertasGrid',
      panelProductos: '#productsGrid'
    };
    if (gridByPanel[id] && typeof zdPlayGridEntrance === 'function') {
      zdPlayGridEntrance(gridByPanel[id]);
    }

    if (typeof window.zdResetPanelSearch === 'function') {
      window.zdResetPanelSearch(id);
    }

    zdSyncPanelObstruction();
  }

  // Exponer para que otros módulos (ej. el carrusel de la home) puedan abrir paneles
  window.zdOpenPanel = openPanel;

  /* ---------- Pausa las animaciones pesadas del Hero (aurora + red de
     partículas) mientras hay un panel abierto tapándolo por completo —
     no tiene sentido gastar CPU/GPU dibujando algo que no se ve.
     aurora.js y hero-fx.js escuchan este evento. ---------- */
  function zdSyncPanelObstruction() {
    const isOpen = document.querySelector('.fullscreen-panel.is-open') !== null;
    document.body.classList.toggle('has-open-panel', isOpen);
    window.dispatchEvent(new CustomEvent('zd:panel-visibility', { detail: { open: isOpen } }));
  }

  function closePanel(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (id === 'panelCustomCombo' && typeof window.zdRenderCustomComboSummary === 'function') {
      window.zdRenderCustomComboSummary();
    }
    zdSyncPanelObstruction();
  }

  function closeAllPanels() {
    document.querySelectorAll('.fullscreen-panel.is-open').forEach((panel) => {
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
    if (typeof window.zdRenderCustomComboSummary === 'function') {
      window.zdRenderCustomComboSummary();
    }
    zdSyncPanelObstruction();
  }

  // se exponen para reutilizarlos desde contenido insertado dinámicamente
  // después del DOMContentLoaded (ej. la ficha de producto en products.js)
  window.zdClosePanel = closePanel;
  window.zdCloseAllPanels = closeAllPanels;
  window.zdGoHome = function () {
    closeAllPanels();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.zdSwitchPanel = function (fromId, toId) {
    closePanel(fromId);
    openPanel(toId);
  };

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
