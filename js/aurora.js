// ============================================================
// ZERO DELAY — aurora.js
// Fondo de "aurora" en el hero: hilos de luz curvos, finos y
// gruesos, que ondulan como si fluyeran (tipo agua/fibra óptica),
// con núcleo brillante + resplandor neón (shadowBlur + 'lighter'),
// más algunas chispas/partículas flotando. Todo en canvas nativo,
// sin librerías externas.
//
// Cuidados de rendimiento (importante en este proyecto):
// - Resolución del canvas limitada (cap de devicePixelRatio)
// - Pocos hilos/chispas, menos aún en pantallas chicas
// - Se pausa por completo cuando el hero sale de pantalla
// - Con prefers-reduced-motion: se dibuja un solo cuadro estático
// ============================================================

(function () {
  const canvas = document.getElementById('heroAuroraCanvas');
  if (!canvas) return;

  const hero = canvas.closest('.hero');
  const ctx = canvas.getContext('2d', { alpha: true });
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const PURPLE = '176, 0, 255';
  const MAGENTA = '255, 46, 159';
  const WHITE = '255, 255, 255';

  let width = 0;
  let height = 0;
  let dpr = 1;
  let threads = [];
  let sparks = [];
  let rafId = null;
  let paused = false;
  let onScreen = true;
  let obstructedByPanel = false;
  let startTime = performance.now();

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  // mezcla un color "r, g, b" hacia blanco (amt 0..1) — se precalcula
  // una sola vez por hilo en vez de hacerlo cada cuadro, para tener un
  // tono "núcleo brillante" sin necesitar una pasada de trazo aparte
  function mixWithWhite(rgbStr, amt) {
    const parts = rgbStr.split(',').map((n) => parseInt(n.trim(), 10));
    return parts.map((v) => Math.round(v + (255 - v) * amt)).join(', ');
  }

  function threadCount() {
    if (width < 480) return 2;
    if (width < 900) return 3;
    return 4;
  }

  function sparkCount() {
    if (width < 480) return 6;
    if (width < 900) return 12;
    return 18;
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 1.25);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildThreads();
    buildSparks();
  }

  // formas base de onda (S y U) muestreadas en 5 puntos a lo largo del
  // ancho del hilo — son los factores (-1..1) que se multiplican por la
  // amplitud de cada hilo. U = un solo arco grande; S = una ondulación
  // completa (sube y baja), para que no todos los hilos se vean iguales.
  const SHAPE_U = [0.1, -0.95, -1.3, -0.95, 0.1];
  const SHAPE_S = [0, 1.1, 0, -1.1, 0];

  // cada hilo se define por una forma de onda (S o U) que recorre todo
  // el ancho del hero, más una ligera ondulación con el tiempo encima
  // para que fluya en vez de quedar estática
  function buildThreads() {
    const count = threadCount();
    threads = new Array(count).fill(0).map((_, i) => {
      const t = count > 1 ? i / (count - 1) : 0;
      return {
        baseY0: height * (0.02 + t * 0.22),
        baseY1: height * (0.6 + t * 0.32),
        shape: i % 2 === 0 ? SHAPE_U : SHAPE_S,
        amp: height * rand(0.16, 0.26),
        rippleAmp: height * rand(0.02, 0.045),
        freq: rand(0.1, 0.22),
        breathFreq: rand(0.05, 0.09),
        phase: rand(0, Math.PI * 2),
        width: i % 2 === 0 ? rand(1.3, 2.2) : rand(2.8, 4.6),
        color: i % 4 === 0 ? MAGENTA : PURPLE,
        coreAlpha: rand(0.4, 0.65)
      };
    });
    threads.forEach((th) => { th.coreColor = mixWithWhite(th.color, 0.45); });
  }

  function buildSparks() {
    const count = sparkCount();
    sparks = new Array(count).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: rand(0.6, 1.8),
      vy: -rand(0.04, 0.16),
      vx: rand(-0.04, 0.04),
      phase: rand(0, Math.PI * 2),
      speed: rand(0.6, 1.4)
    }));
  }

  const ANCHOR_FRACS = [-0.1, 0.22, 0.5, 0.78, 1.1];

  // calcula los 5 puntos de anclaje de la curva de un hilo en un
  // instante "t" — se reutiliza tanto para el trazo principal como
  // para las copias "fantasma" (estela) en instantes anteriores
  function threadPointsAt(th, t) {
    // la amplitud del arco "respira" lentamente para que la forma no
    // quede congelada, y cada punto lleva además un pequeño rizado
    // individual (fluir tipo agua) encima de la silueta S/U
    const ampNow = th.amp * (1 + 0.18 * Math.sin(t * th.breathFreq + th.phase));

    return ANCHOR_FRACS.map((frac, i) => {
      const x = frac * width;
      const diag = th.baseY0 + (th.baseY1 - th.baseY0) * ((frac + 0.1) / 1.2);
      const wave = th.shape[i] * ampNow;
      const ripple = Math.sin(t * th.freq + th.phase + i * 0.8) * th.rippleAmp;
      return { x, y: diag + wave + ripple };
    });
  }

  // dibuja una curva suave que pasa por todos los puntos (spline tipo
  // Catmull-Rom convertida a segmentos bezier) — barato: solo un poco
  // de aritmética por punto, sigue siendo un único trazo por pasada
  function buildSmoothPath(points) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    const n = points.length;
    for (let i = 0; i < n - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
    }
  }

  function strokeThreadPath(pts) {
    buildSmoothPath(pts);
    ctx.stroke();
  }

  // estela: 1 sola copia tenue de la misma curva, "congelada" en un
  // instante levemente anterior — como la curva ya ondula con el
  // tiempo, esa copia queda un poco desfasada de la actual y da
  // sensación de estar fluyendo. Un único trazo delgado por hilo.
  const TRAIL_STEP = 0.12;

  function drawThreadTrail(th, time) {
    ctx.lineCap = 'round';
    const pts = threadPointsAt(th, time - TRAIL_STEP);
    ctx.lineWidth = th.width * 0.85;
    ctx.strokeStyle = `rgba(${th.color}, ${th.coreAlpha * 0.22})`;
    strokeThreadPath(pts);
  }

  function drawThread(th, time) {
    const pts = threadPointsAt(th, time);

    ctx.lineCap = 'round';

    // "resplandor" simulado con 2 pasadas del mismo trazo (ancha y
    // tenue, luego el núcleo ya en un tono claro premezclado) — en vez
    // de shadowBlur (carísimo de recalcular cada cuadro) y sin apilar
    // más pasadas de las necesarias, que es lo que ponía lenta la página
    ctx.lineWidth = th.width * 3.4;
    ctx.strokeStyle = `rgba(${th.color}, ${th.coreAlpha * 0.16})`;
    strokeThreadPath(pts);

    ctx.lineWidth = th.width;
    ctx.strokeStyle = `rgba(${th.coreColor}, ${th.coreAlpha})`;
    ctx.stroke();
  }

  function drawSpark(s, time) {
    const alpha = Math.max(0.15 + Math.sin(time * s.speed + s.phase) * 0.28, 0);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * 2.4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${PURPLE}, ${alpha * 0.25})`;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${WHITE}, ${alpha})`;
    ctx.fill();

    s.x += s.vx;
    s.y += s.vy;
    if (s.y < -8) s.y = height + 8;
    if (s.x < -8) s.x = width + 8;
    if (s.x > width + 8) s.x = -8;
  }

  function step(now) {
    const time = (now - startTime) / 1000;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    threads.forEach((th) => {
      drawThreadTrail(th, time);
      drawThread(th, time);
    });
    sparks.forEach((s) => drawSpark(s, time));

    ctx.globalCompositeOperation = 'source-over';

    if (!paused) {
      rafId = requestAnimationFrame(step);
    }
  }

  function initVisibilityPause() {
    // dos motivos para pausar: el hero salió de la pantalla al hacer scroll
    // (IntersectionObserver), o quedó tapado por completo por un panel
    // abierto encima (evento disparado desde main.js) — cualquiera de los
    // dos basta para no seguir dibujando algo que no se ve
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

  function init() {
    resize();

    window.addEventListener('resize', () => {
      clearTimeout(window.__zdAuroraResizeTimer);
      window.__zdAuroraResizeTimer = setTimeout(resize, 200);
    });

    if (prefersReducedMotion) {
      step(startTime); // un solo cuadro estático, sin animar
      cancelAnimationFrame(rafId);
    } else {
      rafId = requestAnimationFrame(step);
      initVisibilityPause();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
