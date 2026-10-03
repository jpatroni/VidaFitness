/**
 * CAPA DE PRESENTACIÓN · Equipo de profes
 * Los profes con trayectoria cargada se muestran destacados (foto + bio);
 * el resto, como tarjetas.
 */
import { Icon } from '../Icon.jsx';
import { asset } from '../../utils/asset.js';
import { Reveal } from '../Reveal.jsx';
import './Coaches.css';

function TagsDisciplinas({ programas = [] }) {
  return (
    <ul className="coach-card__tags" aria-label="Disciplinas">
      {programas.map((prog) => (
        <li key={prog.id} style={{ '--prog-color': `var(--prog-${prog.id})` }}>
          {prog.nombre.replace('Entrenamiento ', '')}
        </li>
      ))}
    </ul>
  );
}

function Spotlight({ profesor, programas, reservaUrl, canal }) {
  const { trayectoria: t } = profesor;
  const headingId = `spotlight-${profesor.id}`;

  return (
    <article className="spotlight" aria-labelledby={headingId}>
      <Reveal as="figure" className="spotlight__media">
        <img
          src={asset(profesor.foto)}
          alt={`${profesor.nombreCompleto}, ${profesor.roles.join(' y ')}`}
          width="900"
          height="1200"
          loading="lazy"
        />
        <figcaption className="spotlight__badge">
          <Icon name="heartPulse" size={20} /> {profesor.titulo}
        </figcaption>
      </Reveal>

      <Reveal className="spotlight__content">
        <p className="spotlight__eyebrow">Conocé a tu profe</p>
        <h3 className="spotlight__name" id={headingId}>
          {profesor.nombreCompleto}
        </h3>
        <p className="spotlight__roles">{profesor.roles.join(' · ')}</p>

        <h4 className="spotlight__title">{t.titulo}</h4>
        {t.parrafos.map((p) => (
          <p key={p} className="spotlight__text">
            {p}
          </p>
        ))}

        {t.destacados.length > 0 && (
          <ul className="spotlight__stats">
            {t.destacados.map((d) => (
              <li key={d.label}>
                <strong>{d.valor}</strong>
                <span>{d.label}</span>
              </li>
            ))}
          </ul>
        )}

        <TagsDisciplinas programas={programas} />

        {t.cita && <blockquote className="spotlight__quote">“{t.cita}”</blockquote>}

        <a className="btn btn--primary" href={reservaUrl} target="_blank" rel="noopener">
          <Icon name={canal} size={20} /> Entrená con {profesor.titulo}
        </a>
      </Reveal>
    </article>
  );
}

function CoachCard({ profesor, programas, delay }) {
  return (
    <Reveal as="li" className="coach-card" delay={delay}>
      {profesor.foto ? (
        <img className="coach-card__avatar coach-card__avatar--photo" src={asset(profesor.foto)} alt="" loading="lazy" />
      ) : (
        <div className="coach-card__avatar" aria-hidden="true">
          {profesor.nombre.charAt(0)}
        </div>
      )}
      <div>
        <h3 className="coach-card__name">{profesor.titulo}</h3>
        <ul className="coach-card__roles">
          {profesor.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <TagsDisciplinas programas={programas} />
      </div>
    </Reveal>
  );
}

/**
 * @param {{
 *   profesores: Array,
 *   programasPorProfesor: Record<string, Array>,
 *   reservaUrlPorProfesor: Record<string, string>,
 *   canal: 'whatsapp' | 'instagram',
 * }} props
 */
export function Coaches({ profesores, programasPorProfesor, reservaUrlPorProfesor, canal }) {
  const destacados = profesores.filter((p) => p.tieneTrayectoria);
  const resto = profesores.filter((p) => !p.tieneTrayectoria);

  return (
    <section className="section coaches" id="profes">
      <div className="container">
        <Reveal as="header" className="coaches__header">
          <p className="section__eyebrow">Te acompañamos en cada paso</p>
          <h2 className="section__title">
            Nuestros <em>profes</em>
          </h2>
        </Reveal>

        {destacados.map((profesor) => (
          <Spotlight
            key={profesor.id}
            profesor={profesor}
            programas={programasPorProfesor[profesor.id]}
            reservaUrl={reservaUrlPorProfesor[profesor.id]}
            canal={canal}
          />
        ))}

        {resto.length > 0 && (
          <ul className="coaches__grid">
            {resto.map((profesor, i) => (
              <CoachCard
                key={profesor.id}
                profesor={profesor}
                programas={programasPorProfesor[profesor.id]}
                delay={i * 100}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
