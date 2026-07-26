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
  let mouse = { x: null, y: null, active: false };
  let rafId = null;

  const COLOR_A = '176, 0, 255';   // púrpura
  const COLOR_B = '0, 217, 255';   // cian
  const LINK_DIST = 130;
  const MOUSE_LINK_DIST = 200;

  function particleCount() {
    // menos partículas en pantallas pequeñas para mantener buen rendimiento
    if (width < 600) return 34;
    if (width < 1000) return 55;
    return 80;
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

    rafId = requestAnimationFrame(step);
  }

  function handlePointerMove(e) {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  }

  function handlePointerLeave() {
    mouse.active = false;
  }

  function init() {
    resize();
    hero.addEventListener('mousemove', handlePointerMove);
    hero.addEventListener('mouseleave', handlePointerLeave);
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
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
