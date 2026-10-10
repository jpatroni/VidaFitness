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
    formacion: [
      'Profesora Universitaria de Educación Física',
      'Personal Trainer',
      'Instructora de Entrenamiento Funcional',
      'Instructora de Pilates Mat y Esferodinamia',
      'Estudiante de Kinesiología',
    ],
    foto: 'multimedia/fotos/profes/noe.jpg', // ruta relativa a /public
    trayectoria: {
      titulo: 'Vida Fitness nació de una idea: ayudarte a sentirte mejor a través del movimiento.',
      parrafos: [
        'Soy Noelia, Profesora Universitaria de Educación Física y Personal Trainer, y estoy detrás de Vida Fitness.',
        'Este proyecto nació con el objetivo de crear un espacio donde cada persona pueda entrenar de acuerdo con sus objetivos, su nivel y sus posibilidades, sintiéndose acompañada durante todo el proceso.',
        'Planifico y superviso cada entrenamiento para que puedas progresar de manera segura, desafiarte y disfrutar de cada paso.',
      ],
      cita: 'Porque para mí, entrenar no se trata de compararte con los demás. Se trata de superarte a vos misma, un día a la vez.',
    },
  },
  {
    id: 'tobi',
    nombre: 'Tobi',
    roles: ['Profe de Running', 'Preparador Físico', 'Personal Trainer'],
    especialidad: 'Profe de Running',
    formacion: ['Estudiante del Profesorado de Educación Física', 'Estudiante de Kinesiología'],
    foto: 'multimedia/fotos/profes/tobi.jpg', // ruta relativa a /public
  },
];
