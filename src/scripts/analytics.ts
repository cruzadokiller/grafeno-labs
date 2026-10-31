import { inject } from "@vercel/analytics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-H775WZY614";
const CLARITY_ID = "x4ha9fvvfi";

// Vercel Analytics es liviano: se carga siempre.
inject();

// gtag queda definido desde el inicio para encolar eventos (ej. generate_lead del formulario)
// aunque gtag.js todavia no haya cargado.
window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() {
  // gtag.js espera el objeto `arguments`, no un array.
  window.dataLayer.push(arguments);
};
window.gtag("js", new Date());
window.gtag("config", GA_ID);

// GA y Clarity pesan (~240 ms de bloqueo en movil). Se cargan en la primera interaccion
// o a los 5 s, lo que ocurra primero, para no competir con la carga inicial.
const EVENTS = ["scroll", "pointerdown", "keydown", "touchstart"] as const;
let loaded = false;

function addScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadAnalytics() {
  if (loaded) return;
  loaded = true;
  clearTimeout(timer);
  for (const ev of EVENTS) removeEventListener(ev, loadAnalytics);

  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);

  // Cola de Clarity, igual al snippet oficial.
  type ClarityFn = { (...args: unknown[]): void; q?: unknown[] };
  const w = window as unknown as { clarity?: ClarityFn };
  w.clarity =
    w.clarity ||
    function clarity() {
      const fn = w.clarity as ClarityFn;
      (fn.q = fn.q || []).push(arguments);
    };
  addScript(`https://www.clarity.ms/tag/${CLARITY_ID}?ref=bwt`);
}

const timer = setTimeout(loadAnalytics, 5000);
for (const ev of EVENTS) addEventListener(ev, loadAnalytics, { once: true, passive: true });
