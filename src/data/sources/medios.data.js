/**
 * CAPA DE DATOS · Fuente estática
 * Fotos y videos reales del gimnasio, agrupados por colección (dónde se muestran).
 * Rutas relativas a /public. Para sumar contenido: copiar el archivo a
 * public/multimedia/fotos/galeria o public/multimedia/videos (con su -poster.jpg)
 * y agregar una entrada acá.
 */
const foto = (id, alt, posicion) => ({ id, tipo: 'foto', src: `multimedia/fotos/galeria/${id}.jpg`, alt, posicion });
const reel = (id, alt) => ({
  id: `reel-${id}`,
  tipo: 'video',
  src: `multimedia/videos/${id}.mp4`,
  poster: `multimedia/videos/${id}-poster.jpg`,
  alt,
});

export const mediosData = {
  /** Portada: video que se repite de fondo */
  hero: [reel('kettlebell', 'Clase funcional en Vida Fitness: peso muerto con kettlebell')],

  /** Sección "Beneficios": [0] imagen principal, [1] imagen chica superpuesta */
  beneficios: [
    foto('clase-trx-kettlebell', 'Clase funcional con TRX y kettlebell en Vida Fitness', 'center 60%'),
    foto('equipamiento', 'Cajón de salto, steps y discos del gimnasio', 'center'),
  ],

  /** Sección "Así entrenamos" */
  espacio: [
    reel('movilidad', 'Ejercicios de movilidad y elongación'),
    foto('clase-grupal', 'Clase grupal de entrenamiento funcional', 'center'),
    foto('espacio', 'El espacio de entrenamiento preparado para la clase', 'center'),
    { id: 'noe', tipo: 'foto', src: 'multimedia/fotos/profes/noe.jpg', alt: 'Profe Noe', posicion: 'center 35%' },
  ],

  /** Mosaico de la sección "Comunidad" (estilo feed de Instagram) */
  comunidad: [
    foto('posteo-movimiento', 'Posteo: Cuerpo, mente y energía. Los tres necesitan movimiento', 'center 40%'),
    foto('remera-one-more-rep', 'Remera Vida Fitness "One more rep"', 'center 35%'),
    foto('espacio-estructura', 'Estructura de entrenamiento con TRX y balones medicinales', 'center 65%'),
    { id: 'reel-kettlebell-poster', tipo: 'foto', src: 'multimedia/videos/kettlebell-poster.jpg', alt: 'Clase funcional con kettlebell', posicion: 'center 40%' },
    { id: 'reel-movilidad-poster', tipo: 'foto', src: 'multimedia/videos/movilidad-poster.jpg', alt: 'Movilidad sobre colchoneta', posicion: 'center 45%' },
    foto('clase-grupal', 'Clase grupal en el espacio de Vida Fitness', 'center 55%'),
  ],
};
