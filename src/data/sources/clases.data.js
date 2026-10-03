/**
 * CAPA DE DATOS · Fuente estática
 * Calendario de clases (vigente desde el 21 de septiembre).
 * Cada registro es una clase semanal: programa + día + hora + profe.
 */
const c = (programaId, dia, hora, profesorId) => ({ programaId, dia, hora, profesorId });

export const clasesData = [
  // Lunes
  c('running', 'lunes', '08:00', 'tobi'),
  c('pilates', 'lunes', '09:00', 'tobi'),
  c('personalizado', 'lunes', '16:00', 'noe'),
  c('personalizado', 'lunes', '17:00', 'noe'),
  c('personalizado', 'lunes', '18:00', 'noe'),
  c('funcional', 'lunes', '19:00', 'noe'),
  c('funcional', 'lunes', '20:00', 'noe'),

  // Martes
  c('funcional', 'martes', '19:00', 'noe'),
  c('running', 'martes', '20:00', 'tobi'),

  // Miércoles
  c('running', 'miercoles', '08:00', 'tobi'),
  c('pilates', 'miercoles', '09:00', 'tobi'),
  c('funcional', 'miercoles', '19:20', 'noe'),
  c('funcional', 'miercoles', '20:20', 'noe'),

  // Jueves
  c('personalizado', 'jueves', '16:00', 'noe'),
  c('personalizado', 'jueves', '17:00', 'noe'),
  c('personalizado', 'jueves', '18:00', 'noe'),
  c('funcional', 'jueves', '19:00', 'noe'),
  c('running', 'jueves', '20:00', 'tobi'),

  // Viernes
  c('running', 'viernes', '08:00', 'tobi'),
  c('pilates', 'viernes', '09:00', 'tobi'),
  c('personalizado', 'viernes', '16:00', 'noe'),
  c('personalizado', 'viernes', '17:00', 'noe'),
  c('personalizado', 'viernes', '18:00', 'noe'),
  c('funcional', 'viernes', '19:00', 'noe'),
  c('funcional', 'viernes', '20:00', 'noe'),
];
