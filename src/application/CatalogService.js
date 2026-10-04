/**
 * CAPA DE APLICACIÓN · Catálogo
 * Casos de uso: listar programas (con su profe), el equipo y las fotos/videos.
 */
export class CatalogService {
  constructor({ programaRepository, profesorRepository, medioRepository }) {
    this.programaRepository = programaRepository;
    this.profesorRepository = profesorRepository;
    this.medioRepository = medioRepository;
  }

  /**
   * Fotos y videos de varias colecciones a la vez.
   * @param {string[]} colecciones
   * @returns {Promise<Record<string, import('@domain/entities/Medio.js').Medio[]>>}
   */
  async getMedios(colecciones) {
    const listas = await Promise.all(colecciones.map((c) => this.medioRepository.getColeccion(c)));
    return Object.fromEntries(colecciones.map((c, i) => [c, listas[i]]));
  }

  async getProfesores() {
    return this.profesorRepository.getAll();
  }

  /** Programas con la entidad Profesor resuelta */
  async getProgramas() {
    const [programas, profesores] = await Promise.all([
      this.programaRepository.getAll(),
      this.profesorRepository.getAll(),
    ]);
    const porId = new Map(profesores.map((p) => [p.id, p]));
    return programas.map((programa) => ({ programa, profesor: porId.get(programa.profesorId) }));
  }

  /** Programas que cada profe dicta, indexado por id de profe */
  async getProgramasPorProfesor() {
    const items = await this.getProgramas();
    return items.reduce((acc, { programa }) => {
      (acc[programa.profesorId] ??= []).push(programa);
      return acc;
    }, {});
  }
}
