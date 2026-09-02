// ============================================================
// ZERO DELAY — hero-fx.js
// Fondo interactivo tipo "red neuronal/circuito" para el hero.
// Partículas que se conectan entre sí y con el cursor del mouse.
// Se desactiva automáticamente si el usuario prefiere menos movimiento.
// ============================================================

(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const hero = canvas.closest('.hero');
  const ctx = canvas.getContext('2d');

  let width = 0;
  let height = 0;
  let particles = [];
  let bursts = [];
  let mouse = { x: null, y: null, active: false };
  let rafId = null;

  const LINK_BUCKETS = 5;
  const MOUSE_BUCKETS = 3;
  const linkBuckets = Array.from({ length: LINK_BUCKETS }, () => []);
  const mouseBuckets = Array.from({ length: MOUSE_BUCKETS }, () => []);
  let cachedGlow = null;
  let cachedGlowX = null;
  let cachedGlowY = null;

  const COLOR_A = '176, 0, 255';   // púrpura
  const COLOR_B = '0, 217, 255';   // cian
  const LINK_DIST = 130;
  const MOUSE_LINK_DIST = 200;

  function particleCount() {
    // menos partículas en pantallas pequeñas para mantener buen rendimiento
    // (bajado un poco más porque ahora corre junto al canvas de la aurora)
    if (width < 420) return 10;
    if (width < 600) return 15;
    if (width < 1000) return 28;
    return 40;
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    buildParticles();
  }

  function buildParticles() {
    const count = particleCount();
    particles = new Array(count).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
      hue: Math.random() > 0.5 ? COLOR_A : COLOR_B
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    // mover y dibujar partículas
    particles.forEach((p) => {
      // atracción suave hacia el mouse si está cerca
      if (mouse.active) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_LINK_DIST && dist > 0) {
          const force = (1 - dist / MOUSE_LINK_DIST) * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }

      // fricción para que no se acelere indefinidamente
      p.vx *= 0.985;
      p.vy *= 0.985;

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue}, 0.85)`;
      ctx.fill();
    });

    // líneas entre partículas cercanas — agrupadas por "cubetas" de
    // opacidad similar y dibujadas con un solo trazo por cubeta, en
    // vez de una llamada a stroke() por cada línea (con muchas
    // partículas eso podía ser cientos de stroke() por cuadro, el
    // costo real detrás de la lentitud)
    for (let k = 0; k < LINK_BUCKETS; k++) linkBuckets[k].length = 0;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < LINK_DIST) {
          const t = 1 - dist / LINK_DIST;
          const bucket = Math.min(LINK_BUCKETS - 1, Math.floor(t * LINK_BUCKETS));
          linkBuckets[bucket].push(a.x, a.y, b.x, b.y);
        }
      }
    }

    ctx.lineWidth = 1;
    for (let k = 0; k < LINK_BUCKETS; k++) {
      const segs = linkBuckets[k];
      if (!segs.length) continue;
      const alpha = ((k + 1) / LINK_BUCKETS) * 0.35;
      ctx.beginPath();
      for (let s = 0; s < segs.length; s += 4) {
        ctx.moveTo(segs[s], segs[s + 1]);
        ctx.lineTo(segs[s + 2], segs[s + 3]);
      }
      ctx.strokeStyle = `rgba(${COLOR_B}, ${alpha})`;
      ctx.stroke();
    }

    // líneas y destello hacia el cursor (mismo criterio: un trazo por
    // cubeta de opacidad, no uno por partícula)
    if (mouse.active) {
      for (let k = 0; k < MOUSE_BUCKETS; k++) mouseBuckets[k].length = 0;

      particles.forEach((p) => {
        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        if (dist < MOUSE_LINK_DIST) {
          const t = 1 - dist / MOUSE_LINK_DIST;
          const bucket = Math.min(MOUSE_BUCKETS - 1, Math.floor(t * MOUSE_BUCKETS));
          mouseBuckets[bucket].push(p.x, p.y);
        }
      });

      for (let k = 0; k < MOUSE_BUCKETS; k++) {
        const pts = mouseBuckets[k];
        if (!pts.length) continue;
        const alpha = ((k + 1) / MOUSE_BUCKETS) * 0.5;
        ctx.beginPath();
        for (let s = 0; s < pts.length; s += 2) {
          ctx.moveTo(pts[s], pts[s + 1]);
          ctx.lineTo(mouse.x, mouse.y);
        }
        ctx.strokeStyle = `rgba(${COLOR_A}, ${alpha})`;
        ctx.stroke();
      }

      // el gradiente del destello se recalcula solo si el cursor se
      // movió lo suficiente desde el cuadro anterior (crear un
      // gradiente nuevo cada cuadro, aunque el mouse esté quieto, es
      // un gasto innecesario)
      if (
        !cachedGlow ||
        Math.abs(mouse.x - cachedGlowX) > 2 ||
        Math.abs(mouse.y - cachedGlowY) > 2
      ) {
        cachedGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 60);
        cachedGlow.addColorStop(0, `rgba(${COLOR_A}, 0.35)`);
        cachedGlow.addColorStop(1, `rgba(${COLOR_A}, 0)`);
        cachedGlowX = mouse.x;
        cachedGlowY = mouse.y;
      }
      ctx.beginPath();
      ctx.fillStyle = cachedGlow;
      ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
      ctx.fill();
    }

    // ráfaga de partículas al hacer click
    if (bursts.length) {
      bursts.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.96;
        b.vy *= 0.96;
        b.life -= 1;

        const t = Math.max(b.life / b.maxLife, 0);
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * t, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${b.color}, ${t * 0.9})`;
        ctx.fill();
      });
      bursts = bursts.filter((b) => b.life > 0);
    }

    if (!paused) {
      rafId = requestAnimationFrame(step);
    }
  }

  let paused = false;
  let onScreen = true;
  let obstructedByPanel = false;

  function initVisibilityPause() {
    // igual que en aurora.js: se pausa si el hero sale de pantalla al
    // hacer scroll, o si queda tapado por completo por un panel abierto
    function applyPauseState() {
      const shouldPause = !onScreen || obstructedByPanel;
      if (shouldPause) {
        paused = true;
      } else if (paused) {
        paused = false;
        rafId = requestAnimationFrame(step);
      }
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          onScreen = entry.isIntersecting;
          applyPauseState();
        });
      }, { threshold: 0 });
      observer.observe(hero);
    }

    window.addEventListener('zd:panel-visibility', (e) => {
      obstructedByPanel = e.detail.open;
      applyPauseState();
    });
  }

  function spawnBurst(x, y) {
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
      const speed = 1.5 + Math.random() * 2.5;
      bursts.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 2 + Math.random() * 2,
        life: 40,
        maxLife: 40,
        color: Math.random() > 0.5 ? COLOR_A : COLOR_B
      });
    }
  }

  function handlePointerMove(e) {
    const rect = hero.getBoundingClientRect();
    const inside = e.clientX >= rect.left && e.clientX <= rect.right &&
                   e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inside) {
      mouse.active = false;
      return;
    }
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  }

  function handlePointerLeave() {
    mouse.active = false;
  }

  function init() {
    resize();
    // Se escucha en toda la ventana (con chequeo de límites) en vez de
    // solo en el hero, para evitar cualquier caso donde algún elemento
    // encima bloquee la propagación del evento en un navegador puntual.
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget) handlePointerLeave();
    });

    hero.addEventListener('click', (e) => {
      // no disparar la ráfaga si el click fue sobre un botón/enlace del hero
      if (e.target.closest('a, button')) return;
      const rect = hero.getBoundingClientRect();
      spawnBurst(e.clientX - rect.left, e.clientY - rect.top);
    });
    hero.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        const rect = hero.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    }, { passive: true });
    hero.addEventListener('touchend', handlePointerLeave);

    window.addEventListener('resize', () => {
      clearTimeout(window.__zdHeroResizeTimer);
      window.__zdHeroResizeTimer = setTimeout(resize, 200);
    });

    if (prefersReducedMotion) {
      // dibuja un solo cuadro estático, sin animar ni escuchar al mouse
      step();
      cancelAnimationFrame(rafId);
    } else {
      step();
      initVisibilityPause();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();

// ============================================================
// Carrusel de testimonios (sección al final de la página)
// Usa deslizamiento total (sin superposición de texto) para
// evitar el problema de letras mezcladas que tuvimos antes.
// ============================================================
(function () {
  const TESTIMONIALS = [
    'La entrega fue inmediata, en menos de 10 minutos ya tenía acceso a mi cuenta.',
    'Llevo meses comprando aquí y nunca he tenido un problema con ningún servicio.',
    'Los precios son los mejores que he encontrado, y la atención por WhatsApp es excelente.',
    'Armé mi propio combo y el descuento se aplicó automáticamente, súper fácil.',
    'Tuve una duda sobre mi cuenta y me respondieron en minutos, muy buen soporte.',
    'Pedí un combo de streaming y me llegó todo organizado y funcionando de una vez.',
    'La variedad de plataformas es impresionante, encontré todo lo que buscaba en un solo lugar.',
    'Cambié de proveedor por los precios, y me quedé por la seriedad del servicio.',
    'Renové mi plan sin ningún inconveniente, proceso muy rápido y claro.',
    'Recomendado 100%, cumplen con lo que ofrecen y a tiempo.',
    'El catálogo se actualiza constantemente con nuevas plataformas y combos.',
    'Nunca pensé que combinar varias plataformas fuera tan fácil y económico.',
    'Excelente comunicación desde el primer mensaje hasta la entrega.',
    'He recomendado ZERO DELAY a toda mi familia, todos quedaron satisfechos.',
    'Un servicio serio, rápido y con precios que realmente valen la pena.'
  ];
  const ROTATE_EVERY = 5500;
  const TRANSITION_MS = 500;

  function initTestimonialsCarousel() {
    const quoteWrap = document.getElementById('testimonialQuote');
    const dotsWrap = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    if (!quoteWrap || !dotsWrap) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let index = 0;
    let timer = null;

    let current = document.createElement('span');
    current.className = 'testimonial-line is-current';
    current.textContent = `"${TESTIMONIALS[0]}"`;
    quoteWrap.appendChild(current);

    TESTIMONIALS.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'testimonial-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', `Ver testimonio ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    function updateDots() {
      dotsWrap.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });
    }

    function goTo(newIndex) {
      index = (newIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
      updateDots();

      if (prefersReducedMotion) {
        current.textContent = `"${TESTIMONIALS[index]}"`;
        return;
      }

      const next = document.createElement('span');
      next.className = 'testimonial-line is-entering';
      next.textContent = `"${TESTIMONIALS[index]}"`;
      quoteWrap.appendChild(next);

      void next.offsetWidth; // fuerza reflow antes de animar

      current.classList.add('is-leaving');
      current.classList.remove('is-current');
      next.classList.remove('is-entering');
      next.classList.add('is-current');

      const toRemove = current;
      setTimeout(() => toRemove.remove(), TRANSITION_MS + 50);

      current = next;
    }

    function restartTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(() => goTo(index + 1), ROTATE_EVERY);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(index - 1); restartTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(index + 1); restartTimer(); });
    dotsWrap.addEventListener('click', restartTimer);

    restartTimer();
  }

  document.addEventListener('DOMContentLoaded', initTestimonialsCarousel);
})();
