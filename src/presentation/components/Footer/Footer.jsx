/**
 * CAPA DE PRESENTACIÓN · Footer
 */
import { Icon } from '../Icon.jsx';
import { asset } from '../../utils/asset.js';
import './Footer.css';

/**
 * @param {{ gym, instagramUrl: string, credito: { nombre: string, url: string | null } | null }} props
 */
export function Footer({ gym, instagramUrl, credito }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img
          className="footer__logo"
          src={asset(gym.marca.logoVertical)}
          alt={`${gym.nombre} — ${gym.tagline}`}
          width="820"
          height="329"
          loading="lazy"
        />

        <div className="footer__info">
          <p>
            <Icon name="pin" size={18} /> {gym.ubicacion}
          </p>
          <a href={instagramUrl} target="_blank" rel="noopener">
            <Icon name="instagram" size={18} /> @{gym.instagram}
          </a>
        </div>

        <p className="footer__lema">
          {gym.lema} <span aria-hidden="true">🧡</span>
        </p>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} {gym.nombre}. Todos los derechos reservados.
        </p>
        {credito && (
          <p className="footer__credit">
            Powered by{' '}
            {credito.url ? (
              <a
                className="footer__credit-link"
                href={credito.url}
                target="_blank"
                rel="noopener"
                aria-label={`${credito.nombre}: consultá por WhatsApp por el desarrollo de tu landing page`}
                title="¿Querés tu landing page? Escribinos por WhatsApp"
              >
                {credito.nombre}
              </a>
            ) : (
              <strong>{credito.nombre}</strong>
            )}
          </p>
        )}
      </div>
    </footer>
  );
}
