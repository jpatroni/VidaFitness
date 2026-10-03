/**
 * CAPA DE PRESENTACIÓN · Footer
 */
import { Icon } from '../Icon.jsx';
import './Footer.css';

export function Footer({ gym, instagramUrl }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img className="footer__logo" src="/img/logo.png" alt={gym.nombre} width="160" height="97" loading="lazy" />

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
      <p className="footer__copy">
        © {new Date().getFullYear()} {gym.nombre}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
