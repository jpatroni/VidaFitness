/**
 * CAPA DE PRESENTACIÓN · Comunidad
 * Invita a seguir a Vida Fitness en Instagram.
 */
import { Icon } from '../Icon.jsx';
import { asset } from '../../utils/asset.js';
import { Reveal } from '../Reveal.jsx';
import './Community.css';

const PILARES = ['Rutinas y tips', 'Novedades y horarios', 'La energía de cada clase'];

/**
 * @param {{ gym, instagramUrl: string, medios?: import('@domain/entities/Medio.js').Medio[] }} props
 *   medios: mosaico estilo feed (se recortan en cuadrado; `posicion` encuadra a la persona)
 */
export function Community({ gym, instagramUrl, medios = [] }) {
  return (
    <section className="section community" id="comunidad" aria-labelledby="community-title">
      <div className="container community__inner">
        <Reveal className="community__content">
          <p className="section__eyebrow">Somos una comunidad</p>
          <h2 className="section__title" id="community-title">
            Unite a nuestra <em>comunidad</em>
          </h2>
          <p className="section__lead">
            En Vida Fitness no entrenás solo: compartimos el esfuerzo, los logros y las ganas de ir por más.
            Seguinos en Instagram y sumate.
          </p>

          <ul className="community__pilares">
            {PILARES.map((p) => (
              <li key={p}>
                <Icon name="heartPulse" size={18} /> {p}
              </li>
            ))}
          </ul>

          <a className="btn community__btn" href={instagramUrl} target="_blank" rel="noopener">
            <Icon name="instagram" size={22} />
            Seguinos en Instagram
          </a>
          <p className="community__handle">@{gym.instagram}</p>
        </Reveal>

        <Reveal className="community__feed-wrap">
          <a
            className="community__feed"
            href={instagramUrl}
            target="_blank"
            rel="noopener"
            aria-label={`Ver el Instagram de ${gym.nombre} (@${gym.instagram})`}
          >
            {medios.map((m) => (
              <span className="community__tile" key={m.id}>
                <img src={asset(m.imagen)} alt={m.alt} loading="lazy" style={{ objectPosition: m.posicion }} />
                <span className="community__tile-overlay" aria-hidden="true">
                  <Icon name="instagram" size={26} />
                </span>
              </span>
            ))}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
