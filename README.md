# Grafeno Labs

Sitio de [grafenolabs.cl](https://grafenolabs.cl), construido con [Astro](https://astro.build) y desplegado en Vercel.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # revisa tipos (astro check) y genera el build
```

## Variables de entorno

- `RESEND_API_KEY`: clave de Resend para el formulario de contacto.
- `CONTACT_FROM_EMAIL` (opcional): remitente verificado en Resend.

Se configuran en Vercel. Para probar el formulario en local, crea un `.env` con esas variables (está en `.gitignore`).
