/**
 * CAPA DE PRESENTACIÓN · Hero con video real en loop
 * - Mobile: el video vertical ocupa toda la pantalla.
 * - Desktop: texto a la izquierda + el video en formato "reel" a la derecha,
 *   con el mismo video desenfocado de fondo (el original es vertical y de baja
 *   resolución: estirado a pantalla completa se vería pixelado).
 */
import { Icon } from '../Icon.jsx';
import { LoopVideo } from '../LoopVideo.jsx';
import { Pinceladas } from '../Pinceladas/Pinceladas.jsx';
import { asset } from '../../utils/asset.js';
import './Hero.css';

/** @param {{ gym, reservaUrl: string, video?: import('@domain/entities/Medio.js').Medio }} props */
export function Hero({ gym, reservaUrl, video }) {
  return (
    <section className="hero" id="inicio" aria-label="Presentación">
      <div
        className="hero__media"
        aria-hidden="true"
        style={video ? { backgroundImage: `url(${asset(video.poster)})` } : undefined}
      >
        {video && <LoopVideo medio={video} className="hero__video" decorativo />}
        <div className="hero__overlay" />
      </div>
      <Pinceladas />

      <div className="hero__content container">
        <div className="hero__text">
          <p className="hero__badge">
            <Icon name="pin" size={16} /> {gym.ubicacion}
            <span className="hero__badge-sep" />
            Cupos limitados
          </p>

          <h1 className="hero__logo">
            <img
              src={asset(gym.marca.logoVertical)}
              alt={`${gym.nombre} — ${gym.tagline}`}
              width="820"
              height="329"
              fetchPriority="high"
            />
          </h1>

          <p className="hero__title">
            Pasión por el <em>entrenamiento</em>
          </p>

          <p className="hero__lead">
            {gym.claim}. Funcional, entrenamiento personalizado, running y pilates con profes que te acompañan
            en cada paso.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={reservaUrl} target="_blank" rel="noopener">
              Reservá tu lugar <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--ghost" href="#horarios">
              Ver horarios
            </a>
          </div>
        </div>

        {video && (
          <figure className="hero__reel">
            <LoopVideo medio={video} className="hero__reel-video" />
            <figcaption className="hero__reel-tag">
              <span className="hero__reel-dot" aria-hidden="true" /> Así entrenamos
            </figcaption>
          </figure>
        )}
      </div>

      <a className="hero__scroll" href="#disciplinas" aria-label="Bajar a disciplinas">
        <span />
      </a>
    </section>
  );
}
