/**
 * CAPA DE DATOS · Fuente estática
 * Disciplinas / programas que ofrece el gimnasio.
 */
export const programasData = [
  {
    id: 'funcional',
    nombre: 'Entrenamiento Funcional',
    modalidad: 'Clases grupales',
    descripcion:
      'Trabajo dinámico que combina fuerza, resistencia, coordinación y movilidad para mejorar el rendimiento físico general.',
    beneficios: [
      'Mejora la condición física',
      'Aumenta la fuerza y resistencia',
      'Ayuda a tonificar el cuerpo',
      'Previene lesiones',
      'Mejora la movilidad y coordinación',
    ],
    profesorId: 'noe',
    icono: 'group',
  },
  {
    id: 'personalizado',
    nombre: 'Entrenamiento Personalizado',
    modalidad: 'Presencial o virtual',
    descripcion:
      'Cada rutina adaptada a vos: a tus objetivos, tu nivel y tus tiempos, con seguimiento profesional.',
    beneficios: [],
    profesorId: 'noe',
    icono: 'person',
  },
  {
    id: 'running',
    nombre: 'Running',
    modalidad: 'Grupos de running',
    descripcion:
      'Mejorá tu resistencia y tus tiempos corriendo en grupo, con planificación y acompañamiento.',
    beneficios: [],
    profesorId: 'tobi',
    icono: 'run',
  },
  {
    id: 'pilates',
    nombre: 'Pilates Mat / Stretching',
    modalidad: 'Clases grupales',
    descripcion:
      'Movilidad, flexibilidad y control del cuerpo para complementar tu entrenamiento.',
    beneficios: [],
    profesorId: 'tobi',
    icono: 'mat',
  },
];
