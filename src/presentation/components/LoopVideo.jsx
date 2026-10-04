/**
 * CAPA DE PRESENTACIÓN · Video en loop, sin sonido
 * - Sólo se reproduce mientras está en pantalla (ahorra batería y datos).
 * - Si el usuario pidió "reducir movimiento", queda el poster fijo.
 * - Fuerza `muted` por JS: Safari (iOS) y Chrome sólo permiten autoplay sin sonido.
 */
import { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from '../hooks/dom.js';
import { asset } from '../utils/asset.js';

/** @param {{ medio: import('@domain/entities/Medio.js').Medio, className?: string, decorativo?: boolean }} props */
export function LoopVideo({ medio, className = '', decorativo = false }) {
  const videoRef = useRef(null);
  const [wrapRef, inView] = useInView({ threshold: 0.1 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    if (inView && !reduced) video.play().catch(() => {});
    else video.pause();
  }, [inView, reduced]);

  return (
    <div ref={wrapRef} className={className}>
      <video
        ref={videoRef}
        src={asset(medio.src)}
        poster={asset(medio.poster)}
        muted
        loop
        playsInline
        autoPlay={!reduced}
        preload="metadata"
        aria-hidden={decorativo || undefined}
        aria-label={decorativo ? undefined : medio.alt}
        style={{ objectPosition: medio.posicion }}
      />
    </div>
  );
}
