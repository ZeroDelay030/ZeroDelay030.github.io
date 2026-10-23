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

  /* ---------- F bis) Brillo metálico del lockup de marca en el hero ---------- */
  function initBrandmarkShine() {
    if (prefersReducedMotion) return;
    if (!window.matchMedia('(hover: hover)').matches) return; // solo escritorio/mouse

    const brandmark = document.querySelector('.hero-brandmark');
    if (!brandmark) return;

    let pendingEvent = null;
    let ticking = false;

    function apply(e) {
      const rect = brandmark.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width) * 100;
      const relY = ((e.clientY - rect.top) / rect.height) * 100;
      brandmark.style.setProperty('--mx', `${relX}%`);
      brandmark.style.setProperty('--my', `${relY}%`);
    }

    brandmark.addEventListener('mousemove', (e) => {
      pendingEvent = e;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (pendingEvent) apply(pendingEvent);
          ticking = false;
        });
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
  // (también el botón del carrito de la barra inferior del celular)
  function bumpCartIcon() {
    document.querySelectorAll('.cart-btn, #zdBottomBarCart').forEach((btn) => {
      btn.classList.remove('is-bumped');
      void btn.offsetWidth; // reflow para reiniciar la animación
      btn.classList.add('is-bumped');
    });
  }
  window.zdBumpCartIcon = bumpCartIcon;

  /* ---------- Filas que avanzan solas (inicio y "También te puede gustar") ----------
     Avanzan en bucle; con el mouse encima van más lento; mientras el
     cliente las arrastra (dedo o mouse) se quedan quietas y retoman al
     soltar; se pausan fuera de la pantalla o si otro panel las tapa.
     Devuelve { nudge(px) } para las flechas de escritorio. */
  function zdAutoRow(wrap, track, items, build, opts) {
    opts = opts || {};
    const BASE_SPEED = opts.speed || 34; // px por segundo
    const REDUCED_SPEED = 12; // más lento, pero nunca detenido del todo (igual que el carrusel de antes)

    let list = items.slice();
    if (!list.length) return null;
    while (list.length < (opts.min || 8)) list = list.concat(items);
    track.innerHTML = '';
    // 2 copias para el bucle infinito; cada tarjeta se construye de nuevo
    // (no se clona) para que sus botones "Agregar" funcionen en ambas
    [0, 1].forEach(() => list.forEach((it) => { const card = build(it); if (card) track.appendChild(card); }));
    wrap.classList.add('is-auto');

    let offset = 0;
    let setWidth = 0;
    let dragging = false;
    let hovering = false;
    let startX = 0;
    let startOffset = 0;
    let moved = 0;
    let lastTime = null;
    let nudge = 0;
    let resumeAt = 0;
    let inView = false;
    let paused = true;
    let wasConnected = false;
    // la ficha de producto se vuelve a armar en cada apertura: cuando la
    // fila vieja sale de la página, se sueltan sus listeners
    const life = new AbortController();
    const listen = { signal: life.signal };
    const alive = () => {
      if (wrap.isConnected) { wasConnected = true; return true; }
      if (wasConnected) { life.abort(); paused = true; return false; }
      return true;
    };

    const measure = () => { setWidth = track.scrollWidth / 2; };
    const wrapOffset = () => {
      if (setWidth <= 0) return;
      while (offset <= -setWidth) offset += setWidth;
      while (offset > 0) offset -= setWidth;
    };
    // la fila corre solo si su panel es el que está a la vista ('' = el inicio)
    const onTop = () => (document.body.dataset.topPanel || '') === (opts.panelId || '');

    function frame(time) {
      if (lastTime === null) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      if (!dragging) {
        if (nudge) {
          const step = nudge * Math.min(1, dt * 7);
          offset += step;
          nudge -= step;
          if (Math.abs(nudge) < 0.5) nudge = 0;
        } else if (time >= resumeAt) {
          const base = prefersReducedMotion ? REDUCED_SPEED : BASE_SPEED;
          offset -= (hovering ? base * 0.35 : base) * dt;
        }
      }
      wrapOffset();
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      if (!paused && alive()) requestAnimationFrame(frame);
    }

    function sync() {
      if (!alive()) return;
      const run = inView && onTop() && document.visibilityState === 'visible';
      wrap.classList.toggle('is-running', run); // el reflejo de las fotos solo corre si la fila está a la vista
      if (run && paused) { paused = false; lastTime = null; requestAnimationFrame(frame); }
      else if (!run) paused = true;
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => { inView = entries[0].isIntersecting; sync(); }, { threshold: 0 });
      io.observe(wrap);
      life.signal.addEventListener('abort', () => io.disconnect());
    } else {
      inView = true;
    }
    window.addEventListener('zd:panel-visibility', sync, listen);
    document.addEventListener('visibilitychange', sync, listen);

    // con el mouse encima avanza más despacio (en celular el toque no cuenta como "encima")
    wrap.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hovering = true; });
    wrap.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') hovering = false; });
    wrap.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      moved = 0;
      nudge = 0;
      startX = e.clientX;
      startOffset = offset;
    });
    window.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const delta = e.clientX - startX;
      moved = Math.max(moved, Math.abs(delta));
      offset = startOffset + delta;
      if (moved > 6) wrap.classList.add('is-dragging');
      if (paused) { wrapOffset(); track.style.transform = `translate3d(${offset}px, 0, 0)`; }
    }, listen);
    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      wrap.classList.remove('is-dragging');
      resumeAt = performance.now() + 1500; // una pausa corta antes de seguir solo
    };
    window.addEventListener('pointerup', endDrag, listen);
    window.addEventListener('pointercancel', endDrag, listen);
    // si fue un arrastre, el "clic" del final no debe abrir ni agregar nada
    wrap.addEventListener('click', (e) => {
      if (moved > 6) { e.preventDefault(); e.stopPropagation(); }
      moved = 0;
    }, true);
    // no arrastrar las imágenes como archivos
    wrap.addEventListener('dragstart', (e) => e.preventDefault());

    window.addEventListener('resize', () => {
      clearTimeout(wrap.zdResizeTimer);
      wrap.zdResizeTimer = setTimeout(measure, 200);
    }, listen);
    requestAnimationFrame(() => { measure(); offset = -setWidth / 2; sync(); });

    return { nudge: (px) => { nudge += px; resumeAt = performance.now() + 2500; } };
  }
  window.zdAutoRow = zdAutoRow;

  /* ---------- Al agregar al carrito: la foto del producto "vuela" hasta
     el carrito (el del header, o el de la barra inferior en celular) ---------- */
  let zdLastPressed = null;
  let zdLastPressedAt = 0;
  document.addEventListener('pointerdown', (e) => { zdLastPressed = e.target; zdLastPressedAt = performance.now(); }, true);

  // de dónde sale la foto: la del producto si se ve en pantalla; si no
  // (p. ej. la barra fija de la ficha), sale del botón que se tocó
  function zdFlySource(el) {
    if (!el || !el.closest) return null;
    const card = el.closest('.product-card, .catalog-card, #productDetailBody');
    if (!card) return null;
    const imgs = [...(card.matches('#productDetailBody')
      ? card.querySelectorAll('.pd-media img')
      : card.querySelectorAll('.product-card-media img, .combo-card-media img, .logo-frame img'))];
    if (!imgs.length) return null;
    // en la ficha con carrusel, la foto que se está viendo
    const seen = imgs.find((img) => {
      const r = img.getBoundingClientRect();
      return r.width > 0 && r.right > 0 && r.left < window.innerWidth && r.bottom > 0 && r.top < window.innerHeight;
    });
    const img = seen || imgs[0];
    const button = el.closest('button, a') || el;
    return { src: img.currentSrc || img.src, rect: (seen || button).getBoundingClientRect() };
  }

  function zdFlyTarget() {
    const bar = document.getElementById('zdBottomBarCart');
    if (bar && bar.offsetParent !== null && getComputedStyle(document.getElementById('zdBottomBar')).display !== 'none') return bar;
    return document.getElementById('cartBtn');
  }

  function zdFlyToCart(source) {
    const target = zdFlyTarget();
    if (!target) { bumpCartIcon(); return; }
    const from = source.rect;
    const to = target.getBoundingClientRect();
    const size = Math.min(72, Math.max(40, from.width * 0.5));
    const clone = document.createElement('img');
    clone.src = source.src;
    clone.alt = '';
    clone.className = 'zd-fly';
    clone.style.width = clone.style.height = `${size}px`;
    clone.style.left = `${from.left + from.width / 2 - size / 2}px`;
    clone.style.top = `${from.top + from.height / 2 - size / 2}px`;
    document.body.appendChild(clone);
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    const anim = clone.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${dx * 0.55}px, ${dy * 0.55 - 70}px) scale(0.75)`, opacity: 0.95, offset: 0.55 },
      { transform: `translate(${dx}px, ${dy}px) scale(0.2)`, opacity: 0.3 }
    ], { duration: 700, easing: 'cubic-bezier(0.45, 0, 0.7, 1)' });
    anim.onfinish = () => { clone.remove(); bumpCartIcon(); };
  }

  window.addEventListener('zd:cart-add', () => {
    const recent = performance.now() - zdLastPressedAt < 1500; // con teclado no hay toque reciente: solo rebota
    const source = prefersReducedMotion || !recent ? null : zdFlySource(zdLastPressed);
    if (source && source.src) zdFlyToCart(source); // el carrito rebota cuando llega la foto
    else bumpCartIcon();
  });

  // el rebote ahora lo dispara cada agregado real al carrito (evento
  // zd:cart-add), no cualquier clic en un botón "Agregar"
  function initCartBump() {}

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
    initBrandmarkShine();
    initCartBump();
    initRipple();
    setTimeout(initImageFade, 50);
  });
})();
