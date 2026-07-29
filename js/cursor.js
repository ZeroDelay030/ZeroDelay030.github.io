// ============================================================
// ZERO DELAY — cursor.js
// Cursor personalizado (punto + anillo con brillo) que sigue al mouse
// con un suave efecto de "retraso" (lerp). Solo se activa en
// dispositivos con mouse real — nunca en táctiles.
// ============================================================

(function () {
  const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!isDesktopPointer || prefersReducedMotion) return;

  function init() {
    const dot = document.createElement('div');
    dot.className = 'zd-cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'zd-cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add('zd-custom-cursor');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    });

    window.addEventListener('mousedown', () => ring.classList.add('is-clicking'));
    window.addEventListener('mouseup', () => ring.classList.remove('is-clicking'));

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });

    function loop() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
