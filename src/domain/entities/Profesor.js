/**
 * CAPA DE DOMINIO · Entidad Profesor
 */
export class Profesor {
  constructor({ id, nombre, nombreCompleto, roles = [], foto = null, trayectoria = null }) {
    if (!id || !nombre) throw new Error('Profesor: id y nombre son obligatorios');
    this.id = id;
    this.nombre = nombre;
    this.nombreCompleto = nombreCompleto ?? nombre;
    this.roles = [...roles];
    this.foto = foto;
    this.trayectoria = trayectoria
      ? Object.freeze({
          titulo: trayectoria.titulo,
          parrafos: [...(trayectoria.parrafos ?? [])],
          destacados: [...(trayectoria.destacados ?? [])],
          cita: trayectoria.cita ?? null,
        })
      : null;
    Object.freeze(this);
  }

  get titulo() {
    return `Profe ${this.nombre}`;
  }

  get tieneTrayectoria() {
    return this.trayectoria !== null;
  }
}
