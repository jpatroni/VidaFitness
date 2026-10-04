/**
 * CAPA DE DATOS · Repositorios
 * Traducen los datos crudos a entidades del dominio.
 * Son asíncronos a propósito: mañana se pueden reemplazar por repositorios
 * que lean de una API o CMS sin tocar la capa de aplicación ni la de presentación.
 */
import { Clase } from '@domain/entities/Clase.js';
import { Medio } from '@domain/entities/Medio.js';
import { Profesor } from '@domain/entities/Profesor.js';
import { Programa } from '@domain/entities/Programa.js';
import { clasesData } from '../sources/clases.data.js';
import { creditoData } from '../sources/credito.data.js';
import { gymData } from '../sources/gym.data.js';
import { mediosData } from '../sources/medios.data.js';
import { profesoresData } from '../sources/profesores.data.js';
import { programasData } from '../sources/programas.data.js';

export class StaticGymRepository {
  async get() {
    return Object.freeze({ ...gymData });
  }
}

export class StaticCreditoRepository {
  async get() {
    return Object.freeze({ ...creditoData });
  }
}

export class StaticProfesorRepository {
  async getAll() {
    return profesoresData.map((p) => new Profesor(p));
  }
}

export class StaticProgramaRepository {
  async getAll() {
    return programasData.map((p) => new Programa(p));
  }
}

export class StaticMedioRepository {
  /** @param {string} coleccion  ej. 'hero', 'beneficios', 'espacio', 'comunidad' */
  async getColeccion(coleccion) {
    return (mediosData[coleccion] ?? []).map((m) => new Medio(m));
  }
}

export class StaticClaseRepository {
  async getAll() {
    return clasesData.map((c) => new Clase(c));
  }
}
