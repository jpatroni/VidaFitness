/**
 * CAPA DE APLICACIÓN · Contacto
 * Genera los links de reserva/consulta. Si no hay WhatsApp configurado,
 * deriva al mensaje privado de Instagram (como hoy se reserva el lugar).
 *
 * Se construye con `ContactService.create()` (async, lee el repositorio una vez)
 * y después sus métodos son sincrónicos: así se pueden usar dentro de un click
 * sin que el navegador bloquee la ventana nueva.
 */
import { DIAS } from '@domain/constants.js';

export class ContactService {
  static async create({ gymRepository }) {
    return new ContactService(await gymRepository.get());
  }

  constructor(gym) {
    this.gym = gym;
  }

  get canal() {
    return this.gym.whatsapp ? 'whatsapp' : 'instagram';
  }

  getInstagramUrl() {
    return `https://instagram.com/${this.gym.instagram}`;
  }

  getInstagramDmUrl() {
    return `https://ig.me/m/${this.gym.instagram}`;
  }

  /**
   * Link de reserva, opcionalmente con un mensaje prearmado para una clase.
   * @param {{ programa?: import('@domain/entities/Programa.js').Programa, clase?: import('@domain/entities/Clase.js').Clase, profesor?: import('@domain/entities/Profesor.js').Profesor }} [sel]
   */
  getReservaUrl({ programa, clase, profesor } = {}) {
    if (!this.gym.whatsapp) return this.getInstagramDmUrl();

    let mensaje = `¡Hola ${this.gym.nombre}! Quiero consultar disponibilidad`;
    if (programa) mensaje += ` para ${programa.nombre}`;
    if (profesor && !programa) mensaje += ` para entrenar con ${profesor.titulo}`;
    if (clase) {
      const dia = DIAS.find((d) => d.id === clase.dia).label.toLowerCase();
      mensaje += ` el ${dia} a las ${clase.horaLabel}`;
    }
    const texto = encodeURIComponent(mensaje + '.');
    return `https://wa.me/${this.gym.whatsapp}?text=${texto}`;
  }
}
