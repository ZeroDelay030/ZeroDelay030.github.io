// ============================================================
// ZERO DELAY — effects.js
// Efectos visuales de pulido: revelado por scroll, barra de progreso,
// header reactivo, tilt 3D en tarjetas/botones, y micro-animaciones
// de feedback (carrito, ripple en botones).
// Respeta prefers-reduced-motion: si está activo, todo se muestra
// directo sin animar.
// ============================================================

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- A) Revelado al hacer scroll ---------- */
  function initScrollReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in-view'));
      return;
    }

    document.body.classList.add('reveal-ready');

    items.forEach((el) => {
      const delay = el.getAttribute('data-reveal-delay');
      if (delay) el.style.transitionDelay = `${delay}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach((el) => observer.observe(el));
  }

  /* ---------- C) Barra de progreso + D) Header reactivo ---------- */
  function initScrollProgressAndHeader() {
    const progressBar = document.getElementById('scrollProgress');
    const header = document.getElementById('siteHeader');
    let ticking = false;

    function update() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBar) progressBar.style.width = `${pct}%`;
      if (header) header.classList.toggle('is-scrolled', scrollTop > 30);

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  /* ---------- E) Tilt 3D en tarjetas (delegado, funciona con tarjetas creadas dinámicamente) ---------- */
  function initTilt() {
    if (prefersReducedMotion) return;

    const TILT_SELECTOR = '.quick-card, .catalog-card';
    const MAX_TILT = 7; // grados

    function handleMove(e) {
      const card = e.target.closest(TILT_SELECTOR);
      if (!card) return;
      if (card.classList.contains('is-expanded')) return; // no inclinar cuando está expandida

      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;

      const rotateY = (relX - 0.5) * MAX_TILT * 2;
      const rotateX = (0.5 - relY) * MAX_TILT * 2;

      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      card.style.setProperty('--mx', `${relX * 100}%`);
      card.style.setProperty('--my', `${relY * 100}%`);
    }

    function handleLeave(e) {
      const card = e.target.closest(TILT_SELECTOR);
      if (!card) return;
      card.style.transform = '';
    }

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', (e) => {
      document.querySelectorAll(TILT_SELECTOR).forEach((card) => { card.style.transform = ''; });
    }, true);

    // también resetear al salir de una tarjeta individual
    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest(TILT_SELECTOR);
      if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = '';
      }
    });
  }

  /* ---------- G) Micro-animaciones de feedback ---------- */

  // Rebote del ícono del carrito cada vez que se agrega un producto
  function bumpCartIcon() {
    document.querySelectorAll('.cart-btn').forEach((btn) => {
      btn.classList.remove('is-bumped');
      void btn.offsetWidth; // reflow para reiniciar la animación
      btn.classList.add('is-bumped');
    });
  }

  function initCartBump() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.variant-add-btn')) {
        bumpCartIcon();
      }
    });
  }

  // Efecto ripple al hacer click en botones principales
  function createRipple(e, el) {
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height) * 1.4;

    ripple.className = 'zd-ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    el.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }

  function initRipple() {
    if (prefersReducedMotion) return;
    const RIPPLE_SELECTOR = '.btn, .variant-add-btn, .cart-whatsapp-btn, .quick-card';

    document.addEventListener('click', (e) => {
      const el = e.target.closest(RIPPLE_SELECTOR);
      if (!el) return;
      el.classList.add('zd-ripple-host');
      createRipple(e, el);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initScrollProgressAndHeader();
    initTilt();
    initCartBump();
    initRipple();
  });
})();
