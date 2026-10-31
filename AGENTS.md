# Grafeno Labs: sitio en Astro

El sitio está construido con **Astro 7** (no Next.js). Antes de escribir código, consulta la documentación actual de Astro: la API cambia entre versiones mayores.

- Páginas en `src/pages` (estáticas). La única ruta de servidor es `src/pages/api/contacto.ts` (`prerender = false`, adaptador `@astrojs/vercel`).
- Estilos en una sola hoja: `src/styles/global.css`. No hay Tailwind.
- La interactividad es JavaScript simple en `<script>` de cada componente o en `src/scripts/`. No hay React: no agregues frameworks de UI sin evaluar el impacto en performance.
- Secretos (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`) vía `astro:env/server`, definidos en `astro.config.mjs`.
- Verificación: `npm run build` (incluye `astro check`).
