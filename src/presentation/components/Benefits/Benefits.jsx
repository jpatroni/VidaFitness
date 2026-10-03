/**
 * CAPA DE PRESENTACIÓN · Beneficios del entrenamiento funcional
 */
import { Icon } from '../Icon.jsx';
import { Reveal } from '../Reveal.jsx';
import './Benefits.css';

/** @param {{ programa?: import('@domain/entities/Programa.js').Programa }} props */
export function Benefits({ programa }) {
  if (!programa?.tieneBeneficios) return null;

  return (
    <section className="section benefits" aria-labelledby="benefits-title">
      <div className="container benefits__inner">
        <Reveal as="figure" className="benefits__media">
          <img src="/img/trx.jpg" alt="Entrenamiento con bandas de suspensión (TRX)" loading="lazy" />
          <img
            className="benefits__media-sm"
            src="/img/wallball.jpg"
            alt="Lanzamiento de balón medicinal contra la pared"
            loading="lazy"
          />
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
