/**
 * CAPA DE DOMINIO · Entidad Clase
 * Una clase semanal recurrente. Conoce su turno a partir de la hora.
 */
import { DIAS, TURNOS } from '../constants.js';

const HORA_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;

export class Clase {
  constructor({ programaId, dia, hora, profesorId }) {
    if (!DIAS.some((d) => d.id === dia)) throw new Error(`Clase: día inválido "${dia}"`);
    if (!HORA_REGEX.test(hora)) throw new Error(`Clase: hora inválida "${hora}"`);
    this.programaId = programaId;
    this.dia = dia;
    this.hora = hora;
    this.profesorId = profesorId;
    Object.freeze(this);
  }

  /** Minutos desde las 00:00, útil para ordenar */
  get minutos() {
    const [h, m] = this.hora.split(':').map(Number);
    return h * 60 + m;
  }

  get turno() {
    return TURNOS.find((t) => this.minutos >= t.desde && this.minutos < t.hasta).id;
  }

  /** "08:00" → "8:00 hs" */
  get horaLabel() {
    return `${this.hora.replace(/^0/, '')} hs`;
  }
}
