/**
 * CAPA DE PRESENTACIÓN · Botón flotante de WhatsApp
 * Fijo en la esquina inferior derecha: acompaña todo el scroll.
 */
import { useEffect, useState } from 'react';
import { Icon } from '../Icon.jsx';
import './WhatsAppFab.css';

const TOOLTIP_DESDE_MS = 2500;
const TOOLTIP_HASTA_MS = 8000;

export function WhatsAppFab({ url }) {
  const [ready, setReady] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    // Aparece con animación tras la carga; el tooltip se muestra unos segundos
    const frame = requestAnimationFrame(() => setReady(true));
    const show = setTimeout(() => setTooltip(true), TOOLTIP_DESDE_MS);
    const hide = setTimeout(() => setTooltip(false), TOOLTIP_HASTA_MS);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  const className = ['wa-fab', ready && 'is-ready', tooltip && 'show-tooltip'].filter(Boolean).join(' ');

  return (
    <a className={className} href={url} target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">
      <span className="wa-fab__tooltip" aria-hidden="true">
        ¿Consultas? <strong>Escribinos</strong>
      </span>
      <span className="wa-fab__btn">
        <Icon name="whatsapp" size={32} />
      </span>
    </a>
  );
}
