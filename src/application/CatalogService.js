/**
 * CAPA DE APLICACIÓN · Catálogo
 * Casos de uso: listar programas (con su profe) y el equipo.
 */
export class CatalogService {
  constructor({ programaRepository, profesorRepository }) {
    this.programaRepository = programaRepository;
    this.profesorRepository = profesorRepository;
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
