/**
 * CAPA DE PRESENTACIÓN · Rutas a archivos de /public
 * Antepone la base del sitio (`/` en desarrollo, `/VidaFitness/` en GitHub Pages),
 * así las imágenes y el video funcionan aunque el sitio viva en una subcarpeta.
 *
 * asset('img/logo.png') → '/VidaFitness/img/logo.png'
 */
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
