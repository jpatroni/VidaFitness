/**
 * CAPA DE DOMINIO · Constantes del negocio
 */
export const DIAS = Object.freeze([
  { id: 'lunes', label: 'Lunes', corto: 'Lun' },
  { id: 'martes', label: 'Martes', corto: 'Mar' },
  { id: 'miercoles', label: 'Miércoles', corto: 'Mié' },
  { id: 'jueves', label: 'Jueves', corto: 'Jue' },
  { id: 'viernes', label: 'Viernes', corto: 'Vie' },
]);

/** Franjas horarias: [desde, hasta) en minutos desde las 00:00 */
export const TURNOS = Object.freeze([
  { id: 'manana', label: 'Mañana', desde: 0, hasta: 12 * 60 },
  { id: 'tarde', label: 'Tarde', desde: 12 * 60, hasta: 19 * 60 },
  { id: 'noche', label: 'Noche', desde: 19 * 60, hasta: 24 * 60 },
]);
