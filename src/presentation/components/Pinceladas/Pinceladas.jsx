/**
 * CAPA DE PRESENTACIÓN · Pinceladas de la marca
 * Trazos diagonales naranja/gris en las esquinas (como en el logo).
 * Decorativo: se ubica en absoluto dentro de un contenedor con position: relative.
 */
import './Pinceladas.css';

/** @param {{ esquinas?: Array<'sup' | 'inf'> }} props */
export function Pinceladas({ esquinas = ['sup', 'inf'] }) {
  return (
    <span className="pinceladas" aria-hidden="true">
      {esquinas.map((e) => (
        <span key={e} className={`pinceladas__trazo pinceladas__trazo--${e}`} />
      ))}
    </span>
  );
}
