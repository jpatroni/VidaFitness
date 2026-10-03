/**
 * CAPA DE DATOS · Fuente estática
 * Equipo de profesores.
 * `trayectoria` es opcional: si existe, el profe tiene su sección destacada.
 */
export const profesoresData = [
  {
    id: 'noe',
    nombre: 'Noe',
    nombreCompleto: 'Noelia',
    roles: ['Profesora Universitaria de Educación Física', 'Personal Trainer'],
    foto: '/img/noe.jpg',
    trayectoria: {
      titulo: 'Formación profesional al servicio de tu entrenamiento',
      parrafos: [
        'Noelia es Profesora Universitaria de Educación Física y Personal Trainer. Su formación académica es la base de cada clase: entiende cómo se mueve el cuerpo, cómo progresar de forma segura y cómo adaptar cada ejercicio a la persona que lo hace.',
        'En Vida Fitness está a cargo del Entrenamiento Funcional y del Entrenamiento Personalizado, en modalidad presencial o virtual. Arma rutinas a medida de tus objetivos, tu nivel y tus tiempos, y te acompaña en cada etapa del proceso.',
      ],
      destacados: [
        { valor: 'Prof.', label: 'Universitaria de Educación Física' },
        { valor: 'PT', label: 'Personal Trainer' },
        { valor: '1 a 1', label: 'Rutinas presenciales o virtuales' },
      ],
      cita: 'Un día a la vez, siempre hacia adelante.',
    },
  },
  {
    id: 'tobi',
    nombre: 'Tobi',
    roles: ['Personal Trainer', 'Profe de Running'],
  },
];
