/**
 * CAPA DE PRESENTACIÓN · Disciplinas
 */
import { Icon } from '../Icon.jsx';
import { Reveal } from '../Reveal.jsx';
import './Programs.css';

/**
 * @param {{ items: Array<{ programa, profesor }>, onVerHorarios: (programaId: string) => void }} props
 */
export function Programs({ items, onVerHorarios }) {
  return (
    <section className="section programs" id="disciplinas">
      <div className="container">
        <Reveal as="header" className="programs__header">
          <p className="section__eyebrow">Elegí cómo entrenar</p>
          <h2 className="section__title">
            Nuestras <em>disciplinas</em>
          </h2>
          <p className="section__lead">
            Podés combinar distintos tipos de entrenamiento para armar la semana que mejor se adapte a vos.
          </p>
        </Reveal>

        <ul className="programs__grid">
          {items.map(({ programa, profesor }, i) => (
            <Reveal
              as="li"
              key={programa.id}
              className="program-card"
              delay={i * 80}
              style={{ '--prog-color': `var(--prog-${programa.id})` }}
            >
              <span className="program-card__icon">
                <Icon name={programa.icono} size={30} />
              </span>
              <p className="program-card__modalidad">{programa.modalidad}</p>
              <h3 className="program-card__title">{programa.nombre}</h3>
              <p className="program-card__desc">{programa.descripcion}</p>
              {profesor && <p className="program-card__profe">Con {profesor.titulo}</p>}
              <a className="program-card__link" href="#horarios" onClick={() => onVerHorarios(programa.id)}>
                Ver horarios <Icon name="arrow" size={16} />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
