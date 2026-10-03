/**
 * CAPA DE APLICACIÓN · Horarios
 * Arma la grilla semanal (turno × día) lista para que la presentación la dibuje.
 */
import { DIAS, TURNOS } from '@domain/constants.js';

export class ScheduleService {
  constructor({ claseRepository, programaRepository, profesorRepository }) {
    this.claseRepository = claseRepository;
    this.programaRepository = programaRepository;
    this.profesorRepository = profesorRepository;
  }

  /**
   * @returns {{ dias, turnos, programas, celdas: Record<string, Record<string, Array>> }}
   *   celdas[turnoId][diaId] = [{ clase, programa, profesor }] ordenadas por hora
   */
  async getGrilla() {
    const [clases, programas, profesores] = await Promise.all([
      this.claseRepository.getAll(),
      this.programaRepository.getAll(),
      this.profesorRepository.getAll(),
    ]);
    const programaPorId = new Map(programas.map((p) => [p.id, p]));
    const profesorPorId = new Map(profesores.map((p) => [p.id, p]));

    const celdas = Object.fromEntries(
      TURNOS.map((t) => [t.id, Object.fromEntries(DIAS.map((d) => [d.id, []]))]),
    );

    [...clases]
      .sort((a, b) => a.minutos - b.minutos)
      .forEach((clase) => {
        celdas[clase.turno][clase.dia].push({
          clase,
          programa: programaPorId.get(clase.programaId),
          profesor: profesorPorId.get(clase.profesorId),
        });
      });

    return { dias: DIAS, turnos: TURNOS, programas, celdas };
  }
}
