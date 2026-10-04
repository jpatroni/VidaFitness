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

function Formacion({ items, className = '' }) {
  if (!items?.length) return null;
  return (
    <ul className={`formacion ${className}`.trim()} aria-label="Formación">
      {items.map((item) => (
        <li key={item}>
          <span className="formacion__check" aria-hidden="true">
            <Icon name="check" size={14} />
          </span>
          {item}
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
        <p className="spotlight__eyebrow">Conocenos</p>
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

        <h4 className="spotlight__subtitle">Formación</h4>
        <Formacion items={profesor.formacion} className="spotlight__formacion" />

        <TagsDisciplinas programas={programas} />

        {t.cita && <blockquote className="spotlight__quote">“{t.cita}”</blockquote>}

        <a className="btn btn--primary" href={reservaUrl} target="_blank" rel="noopener">
          <Icon name={canal} size={20} /> Entrená con {profesor.titulo}
        </a>
      </Reveal>
    </article>
  );
}

function CoachCard({ profesor, programas, reservaUrl, canal, delay }) {
  const conFoto = Boolean(profesor.foto);

  return (
    <Reveal as="li" className={`coach-card ${conFoto ? 'coach-card--foto' : ''}`.trim()} delay={delay}>
      {conFoto ? (
        <figure className="coach-card__media">
          <img
            src={asset(profesor.foto)}
            alt={`${profesor.titulo}, ${profesor.roles.join(', ')}`}
            width="600"
            height="800"
            loading="lazy"
          />
          {profesor.especialidad && (
            <figcaption className="coach-card__badge">
              <Icon name="run" size={18} /> {profesor.especialidad}
            </figcaption>
          )}
        </figure>
      ) : (
        <div className="coach-card__avatar" aria-hidden="true">
          {profesor.nombre.charAt(0)}
        </div>
      )}
      <div className="coach-card__body">
        <h3 className="coach-card__name">{profesor.titulo}</h3>
        <ul className="coach-card__roles">
          {profesor.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {profesor.formacion.length > 0 && <h4 className="spotlight__subtitle">Formación</h4>}
        <Formacion items={profesor.formacion} className="coach-card__formacion" />
        <TagsDisciplinas programas={programas} />
        {reservaUrl && (
          <a className="btn btn--ghost coach-card__btn" href={reservaUrl} target="_blank" rel="noopener">
            <Icon name={canal} size={18} /> Entrená con {profesor.titulo}
          </a>
        )}
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
                reservaUrl={reservaUrlPorProfesor[profesor.id]}
                canal={canal}
                delay={i * 100}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
