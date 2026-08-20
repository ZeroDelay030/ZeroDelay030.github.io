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

  const COLOR_A = '176, 0, 255';   // púrpura
  const COLOR_B = '0, 217, 255';   // cian
  const LINK_DIST = 130;
  const MOUSE_LINK_DIST = 200;

  function particleCount() {
    // menos partículas en pantallas pequeñas para mantener buen rendimiento
    if (width < 420) return 14;
    if (width < 600) return 20;
    if (width < 1000) return 40;
    return 58;
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

    // líneas entre partículas cercanas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < LINK_DIST) {
          const opacity = (1 - dist / LINK_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${COLOR_B}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // líneas y destello hacia el cursor
    if (mouse.active) {
      particles.forEach((p) => {
        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        if (dist < MOUSE_LINK_DIST) {
          const opacity = (1 - dist / MOUSE_LINK_DIST) * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${COLOR_A}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 60);
      glow.addColorStop(0, `rgba(${COLOR_A}, 0.35)`);
      glow.addColorStop(1, `rgba(${COLOR_A}, 0)`);
      ctx.beginPath();
      ctx.fillStyle = glow;
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

  function initVisibilityPause() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (paused) {
            paused = false;
            rafId = requestAnimationFrame(step);
          }
        } else {
          paused = true;
        }
      });
    }, { threshold: 0 });
    observer.observe(hero);
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
// Logos flotantes del hero: en cada carga se eligen al azar
// cuáles aparecen y en qué posición, con un movimiento orgánico
// (deriva + rotación leve, no solo subir/bajar) y desincronizado
// entre sí para que se vea vivo, no repetitivo ni estático.
// ============================================================
(function () {
  // marcas reconocibles (se excluyen las más regionales/menos conocidas)
  const LOGO_POOL = [
    { id: 'netflix', name: 'Netflix', logo: 'assets/logos/netflix.png' },
    { id: 'disney', name: 'Disney+', logo: 'assets/logos/disney.jpg' },
    { id: 'chatgpt', name: 'ChatGPT Plus', logo: 'assets/logos/chatgpt.jpeg' },
    { id: 'hbomax', name: 'MAX (HBO)', logo: 'assets/logos/hbomax.jpg' },
    { id: 'spotify', name: 'Spotify Premium', logo: 'assets/logos/spotify.jpg' },
    { id: 'primevideo', name: 'Prime Video', logo: 'assets/logos/primevideo.jpg' },
    { id: 'capcut', name: 'CapCut Pro', logo: 'assets/logos/capcut.png' },
    { id: 'gemini', name: 'Gemini PRO', logo: 'assets/logos/gemini.jpg' },
    { id: 'canva', name: 'Canva Pro', logo: 'assets/logos/canva.jpg' },
    { id: 'appletv', name: 'Apple TV+', logo: 'assets/logos/appletv.png' },
    { id: 'office365', name: 'Microsoft Office 365', logo: 'assets/logos/office365.png' },
    { id: 'paramount', name: 'Paramount+', logo: 'assets/logos/paramount.png' },
    { id: 'crunchyroll', name: 'Crunchyroll', logo: 'assets/logos/crunchyroll.jpg' },
    { id: 'youtube', name: 'YouTube Premium', logo: 'assets/logos/youtube.png' },
    { id: 'universal', name: 'Universal+', logo: 'assets/logos/universal.jpg' },
    { id: 'plex', name: 'Plex Premium', logo: 'assets/logos/plex.jpg' },
    { id: 'vix', name: 'ViX+', logo: 'assets/logos/vix.jpg' },
    { id: 'duolingo', name: 'Duolingo Pro', logo: 'assets/logos/duolingo.jpg' }
  ];

  // posiciones posibles alrededor del título (más de las que se usan a la vez,
  // así también varía cuáles se ocupan cada vez que se entra a la página)
  const SLOTS = [
    { top: '14%', left: '7%', size: 52 },
    { top: '66%', left: '11%', size: 44 },
    { top: '20%', right: '8%', size: 52 },
    { top: '70%', right: '12%', size: 46 },
    { top: '44%', right: '3%', size: 40 },
    { top: '5%', left: '30%', size: 38 },
    { top: '87%', right: '28%', size: 40 },
    { top: '38%', left: '2%', size: 36 },
    { top: '6%', right: '24%', size: 36 },
    { top: '80%', left: '25%', size: 38 },
    { top: '55%', left: '18%', size: 34 },
    { top: '30%', right: '20%', size: 34 }
  ];

  function zdShuffleArr(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function buildHeroFloatingLogos() {
    const wrap = document.getElementById('heroFloatingLogos');
    if (!wrap) return;

    const count = Math.min(8, LOGO_POOL.length, SLOTS.length);
    const logos = zdShuffleArr(LOGO_POOL).slice(0, count);
    const slots = zdShuffleArr(SLOTS).slice(0, count);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    logos.forEach((platform, i) => {
      const slot = slots[i];
      const img = document.createElement('img');
      img.src = platform.logo;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      img.className = 'hero-float-logo';
      img.dataset.platform = platform.name;

      img.style.top = slot.top;
      if (slot.left) img.style.left = slot.left;
      if (slot.right) img.style.right = slot.right;
      img.style.width = `${slot.size}px`;
      img.style.height = `${slot.size}px`;

      if (!prefersReducedMotion) {
        // movimiento orgánico: cada logo deriva en una dirección/tamaño/
        // duración distinta, y con retraso propio para desincronizar
        img.style.setProperty('--float-x', `${rand(-16, 16).toFixed(1)}px`);
        img.style.setProperty('--float-y', `${rand(-24, -14).toFixed(1)}px`);
        img.style.setProperty('--float-rot', `${rand(-9, 9).toFixed(1)}deg`);
        img.style.animationDuration = `${rand(5, 8.5).toFixed(2)}s`;
        img.style.animationDelay = `-${rand(0, 8).toFixed(2)}s`;
      }

      wrap.appendChild(img);
    });

    // click: abre el catálogo con esa plataforma ya buscada
    wrap.querySelectorAll('.hero-float-logo').forEach((logo) => {
      logo.addEventListener('click', () => {
        const platformName = logo.dataset.platform;
        if (typeof window.zdOpenPanel === 'function') window.zdOpenPanel('panelCatalogo');
        setTimeout(() => {
          const input = document.getElementById('catalogSearchInput');
          if (input && platformName) {
            input.value = platformName;
            input.dispatchEvent(new Event('input'));
          }
        }, 380);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', buildHeroFloatingLogos);
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
