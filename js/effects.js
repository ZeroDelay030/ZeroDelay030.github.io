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

  /* ---------- G) Los separadores de velocidad se "dibujan" al aparecer ---------- */
  function initSpeedDividers() {
    const dividers = document.querySelectorAll('.speed-divider');
    if (!dividers.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      dividers.forEach((el) => el.classList.add('is-drawn'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-drawn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    dividers.forEach((el) => observer.observe(el));
  }

  /* ---------- C) Barra de progreso + D) Header reactivo + E) Botón subir arriba ---------- */
  function initScrollProgressAndHeader() {
    const progressBar = document.getElementById('scrollProgress');
    const header = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTopBtn');
    const heroBg = document.querySelector('.hero-bg');
    const heroFloatingLogos = document.querySelector('.hero-floating-logos');
    const hero = document.querySelector('.hero');
    let ticking = false;

    let heroHeight = hero ? hero.offsetHeight : 0;
    if (hero) {
      window.addEventListener('resize', () => {
        heroHeight = hero.offsetHeight;
      });
    }

    function update() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBar) progressBar.style.width = `${pct}%`;
      if (header) header.classList.toggle('is-scrolled', scrollTop > 30);
      if (backToTop) backToTop.classList.toggle('is-visible', scrollTop > 600);

      // F) profundidad (parallax): el fondo del hero se mueve más lento
      // que el contenido mientras el hero sigue en pantalla
      if (hero && heroBg && !prefersReducedMotion) {
        if (scrollTop < heroHeight) {
          const offset = scrollTop * 0.35;
          heroBg.style.transform = `translateY(${offset}px)`;
          if (heroFloatingLogos) heroFloatingLogos.style.transform = `translateY(${offset * 0.6}px)`;
        }
      }

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    update();
  }

  /* ---------- E) Tilt 3D en tarjetas (delegado, funciona con tarjetas creadas dinámicamente) ---------- */
  function initTilt() {
    if (prefersReducedMotion) return;

    const TILT_SELECTOR = '.quick-card, .catalog-card';
    const MAX_TILT = 7; // grados

    let pendingEvent = null;
    let ticking = false;

    function processMove(e) {
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

    function handleMove(e) {
      pendingEvent = e;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (pendingEvent) processMove(pendingEvent);
          ticking = false;
        });
      }
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

  // Ráfaga de partículas de celebración (ej. al finalizar por WhatsApp)
  function zdConfettiBurst(x, y) {
    if (prefersReducedMotion) return;
    const colors = ['#B000FF', '#00D9FF', '#FF2E9F', '#F1F0F7'];
    const count = 18;

    for (let i = 0; i < count; i++) {
      const piece = document.createElement('span');
      piece.className = 'zd-confetti';
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const distance = 60 + Math.random() * 70;
      piece.style.setProperty('--zd-dx', `${Math.cos(angle) * distance}px`);
      piece.style.setProperty('--zd-dy', `${Math.sin(angle) * distance}px`);
      piece.style.left = `${x}px`;
      piece.style.top = `${y}px`;
      piece.style.background = colors[i % colors.length];
      document.body.appendChild(piece);
      piece.addEventListener('animationend', () => piece.remove());
    }
  }
  window.zdConfettiBurst = zdConfettiBurst;

  // Rebote del ícono del carrito cada vez que se agrega un producto
  function bumpCartIcon() {
    document.querySelectorAll('.cart-btn').forEach((btn) => {
      btn.classList.remove('is-bumped');
      void btn.offsetWidth; // reflow para reiniciar la animación
      btn.classList.add('is-bumped');
    });
  }
  window.zdBumpCartIcon = bumpCartIcon;

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

  /* ---------- B) Aparición suave de imágenes al cargar ---------- */
  function initImageFade() {
    // se ejecuta un poco después para dar tiempo a que catalog.js/marquee.js
    // ya hayan insertado sus imágenes dinámicas en el DOM
    document.querySelectorAll('img').forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        return; // ya estaba en caché, no hace falta animar
      }
      img.classList.add('zd-img-fade');
      img.addEventListener('load', () => img.classList.add('zd-img-loaded'), { once: true });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initSpeedDividers();
    initScrollProgressAndHeader();
    initTilt();
    initCartBump();
    initRipple();
    setTimeout(initImageFade, 50);
  });
})();
