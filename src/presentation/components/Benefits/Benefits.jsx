/**
 * CAPA DE PRESENTACIÓN · Beneficios del entrenamiento funcional
 */
import { Icon } from '../Icon.jsx';
import { asset } from '../../utils/asset.js';
import { Reveal } from '../Reveal.jsx';
import './Benefits.css';

/**
 * @param {{
 *   programa?: import('@domain/entities/Programa.js').Programa,
 *   medios?: import('@domain/entities/Medio.js').Medio[],  [0] principal, [1] chica superpuesta
 * }} props
 */
export function Benefits({ programa, medios = [] }) {
  if (!programa?.tieneBeneficios) return null;
  const [principal, secundaria] = medios;

  return (
    <section className="section benefits" aria-labelledby="benefits-title">
      <div className="container benefits__inner">
        <Reveal as="figure" className="benefits__media">
          {principal && (
            <img
              src={asset(principal.imagen)}
              alt={principal.alt}
              loading="lazy"
              style={{ objectPosition: principal.posicion }}
            />
          )}
          {secundaria && (
            <img
              className="benefits__media-sm"
              src={asset(secundaria.imagen)}
              alt={secundaria.alt}
              loading="lazy"
              style={{ objectPosition: secundaria.posicion }}
            />
          )}
        </Reveal>

        <Reveal className="benefits__content">
          <p className="section__eyebrow">{programa.nombre}</p>
          <h2 className="section__title" id="benefits-title">
            Entrená <em>para la vida</em>
          </h2>
          <p className="section__lead">{programa.descripcion}</p>

          <ul className="benefits__list">
            {programa.beneficios.map((b) => (
              <li key={b}>
                <span className="benefits__check">
                  <Icon name="check" size={18} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
