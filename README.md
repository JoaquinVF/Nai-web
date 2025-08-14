# Nai-web

Este sitio está configurado para desplegarse en [Netlify](https://www.netlify.com/).

## Caché de recursos

Se añadió `netlify.toml` para servir las imágenes desde `/imgs/` con cabeceras `Cache-Control` de larga duración (`max-age=31536000, immutable`). Esto permite que los recursos se mantengan en la caché del navegador durante un año.

Las demás rutas mantienen `Cache-Control: max-age=0, must-revalidate` para asegurar actualizaciones inmediatas del contenido.

## Verificar el uso de la caché

1. Despliegue el sitio en Netlify.
2. Abra las herramientas de desarrollo del navegador y vaya a la pestaña **Network**.
3. Recargue la página.
4. Vuelva a recargarla y verifique que los recursos bajo `/imgs/` indiquen que se sirven desde la caché (por ejemplo, "from memory cache" o "from disk cache").

