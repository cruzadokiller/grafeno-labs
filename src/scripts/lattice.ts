// Fondo de nodos animado. Desactivado en movil para no bloquear el hilo principal.
const canvas = document.getElementById("lattice") as HTMLCanvasElement | null;
const ctx = canvas?.getContext("2d");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && ctx && innerWidth >= 768) {
  const dpr = devicePixelRatio || 1;
  const COUNT = 72;
  const SPEED = 0.18;
  const LINK = 160;
  type Node = { x: number; y: number; vx: number; vy: number };
  let nodes: Node[] = [];
  let w = 0;
  let h = 0;

  const size = () => {
    w = innerWidth;
    h = innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(120,170,225,${(1 - d / LINK) * 0.16})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.fillStyle = "rgba(150,190,235,.5)";
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.1 * dpr, 0, 7);
      ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  };

  size();
  addEventListener("resize", size);
  draw();
}
