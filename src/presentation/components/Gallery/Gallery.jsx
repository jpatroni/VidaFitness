/**
 * CAPA DE PRESENTACIÓN · "Así entrenamos": fotos y reels reales del espacio
 * Desktop: tarjetas verticales en fila. Mobile: carrusel con scroll-snap.
 */
import { LoopVideo } from '../LoopVideo.jsx';
import { Reveal } from '../Reveal.jsx';
import { asset } from '../../utils/asset.js';
import './Gallery.css';

/** @param {{ medios: import('@domain/entities/Medio.js').Medio[] }} props */
export function Gallery({ medios }) {
  if (!medios?.length) return null;

  return (
    <section className="section gallery" id="espacio" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal as="header" className="gallery__header">
          <div>
            <p className="section__eyebrow">Nuestro espacio</p>
            <h2 className="section__title" id="gallery-title">
              Así <em>entrenamos</em>
            </h2>
            <p className="section__lead">
              Un espacio al aire libre en Villa de Mayo, pensado para entrenar en grupos reducidos y con
              acompañamiento en cada ejercicio.
            </p>
          </div>

          <blockquote className="gallery__quote">
            <p>
              Tu única competencia <em>sos vos</em>
            </p>
            <footer>Entrená por vos.</footer>
          </blockquote>
        </Reveal>
      </div>

      <ul className="gallery__track" aria-label="Fotos y videos del espacio">
        {medios.map((medio, i) => (
          <Reveal as="li" key={medio.id} className="gallery__item" delay={i * 90}>
            {medio.esVideo ? (
              <>
                <LoopVideo medio={medio} className="gallery__media" />
                <span className="gallery__badge">Video</span>
              </>
            ) : (
              <img
                className="gallery__media"
                src={asset(medio.src)}
                alt={medio.alt}
                loading="lazy"
                style={{ objectPosition: medio.posicion }}
              />
            )}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
