/**
 * CAPA DE DOMINIO · Entidad Programa (disciplina)
 */
export class Programa {
  constructor({ id, nombre, modalidad, descripcion, beneficios = [], profesorId, icono }) {
    if (!id || !nombre) throw new Error('Programa: id y nombre son obligatorios');
    this.id = id;
    this.nombre = nombre;
    this.modalidad = modalidad;
    this.descripcion = descripcion;
    this.beneficios = [...beneficios];
    this.profesorId = profesorId;
    this.icono = icono;
    Object.freeze(this);
  }

  get tieneBeneficios() {
    return this.beneficios.length > 0;
  }
}
