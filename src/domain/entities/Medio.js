/**
 * CAPA DE DOMINIO · Entidad Medio
 * Una foto o un video del gimnasio. Las rutas son relativas a /public.
 */
const TIPOS = ['foto', 'video'];

export class Medio {
  constructor({ id, tipo = 'foto', src, poster = null, alt, posicion = 'center' }) {
    if (!id || !src) throw new Error('Medio: id y src son obligatorios');
    if (!TIPOS.includes(tipo)) throw new Error(`Medio: tipo inválido "${tipo}"`);
    if (tipo === 'video' && !poster) throw new Error(`Medio "${id}": un video necesita poster`);
    this.id = id;
    this.tipo = tipo;
    this.src = src;
    this.poster = poster;
    this.alt = alt ?? '';
    /** object-position para encuadrar el recorte */
    this.posicion = posicion;
    Object.freeze(this);
  }

  get esVideo() {
    return this.tipo === 'video';
  }

  /** Imagen fija que representa al medio (la foto, o el poster del video) */
  get imagen() {
    return this.esVideo ? this.poster : this.src;
  }
}
