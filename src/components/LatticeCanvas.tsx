"use client";

import { useEffect, useRef } from "react";

export default function LatticeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = window.devicePixelRatio || 1;
    const COUNT = 72;
    const SPEED = 0.18;
    const LINK = 160;

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    let animId: number;

    function size() {
      w = canvas!.offsetWidth;
      h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
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
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const al = (1 - d / LINK) * 0.16;
            ctx!.strokeStyle = `rgba(120,170,225,${al})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx!.fillStyle = "rgba(150,190,235,.5)";
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.1 * dpr, 0, 7);
        ctx!.fill();
      }
      if (!mq) animId = requestAnimationFrame(draw);
    }

    size();
    window.addEventListener("resize", size);
    draw();

    return () => {
      window.removeEventListener("resize", size);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="lattice"
      className="fixed inset-0 -z-20 pointer-events-none opacity-55 w-full h-full"
    />
  );
}
