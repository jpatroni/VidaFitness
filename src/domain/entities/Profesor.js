/**
 * CAPA DE DOMINIO · Entidad Profesor
 * - roles: cómo se presenta (ej. "Personal Trainer")
 * - especialidad (opcional): lo que se destaca sobre su foto (ej. "Profe de Running")
 * - formacion: títulos, certificaciones y estudios en curso
 * - trayectoria (opcional): texto de presentación; si existe, el profe sale destacado
 */
export class Profesor {
  constructor({ id, nombre, nombreCompleto, roles = [], especialidad = null, formacion = [], foto = null, trayectoria = null }) {
    if (!id || !nombre) throw new Error('Profesor: id y nombre son obligatorios');
    this.id = id;
    this.nombre = nombre;
    this.nombreCompleto = nombreCompleto ?? nombre;
    this.roles = [...roles];
    this.especialidad = especialidad;
    this.formacion = [...formacion];
    this.foto = foto;
    this.trayectoria = trayectoria
      ? Object.freeze({
          titulo: trayectoria.titulo,
          parrafos: [...(trayectoria.parrafos ?? [])],
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
