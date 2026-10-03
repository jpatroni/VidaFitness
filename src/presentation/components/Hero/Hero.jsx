/**
 * CAPA DE PRESENTACIÓN · Hero con video de fondo en loop
 */
import { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from '../../hooks/dom.js';
import { Icon } from '../Icon.jsx';
import './Hero.css';

/** Reproduce el video sólo si está en pantalla y no se pidió reducir movimiento */
function useBackgroundVideo() {
  const videoRef = useRef(null);
  const [sectionRef, inView] = useInView();
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && !reduced) video.play().catch(() => {});
    else video.pause();
  }, [inView, reduced]);

  return { sectionRef, videoRef, autoPlay: !reduced };
}

export function Hero({ gym, reservaUrl }) {
  const { sectionRef, videoRef, autoPlay } = useBackgroundVideo();

  return (
    <section className="hero" id="inicio" aria-label="Presentación" ref={sectionRef}>
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/hero-poster.jpg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <p className="hero__badge">
          <Icon name="pin" size={16} /> {gym.ubicacion}
          <span className="hero__badge-sep" />
          Cupos limitados
        </p>

        <h1 className="hero__title">
          <span className="hero__title-line">Pasión por el</span>
          <span className="hero__title-line hero__title-line--accent">entrenamiento</span>
        </h1>

        <p className="hero__script">{gym.claim}</p>

        <p className="hero__lead">
          Funcional, entrenamiento personalizado, running y pilates. Encontrá tu horario y entrená con profes
          que te acompañan en cada paso.
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

      <a className="hero__scroll" href="#disciplinas" aria-label="Bajar a disciplinas">
        <span />
      </a>
    </section>
  );
}
