/**
 * CAPA DE PRESENTACIÓN · Navbar fija con menú mobile
 */
import { useEffect, useState } from 'react';
import { useBodyScrollLock, useScrolled } from '../../hooks/dom.js';
import { Icon } from '../Icon.jsx';
import { asset } from '../../utils/asset.js';
import './Navbar.css';

const LINKS = [
  { href: '#disciplinas', label: 'Disciplinas' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#profes', label: 'Profes' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar({ gym, reservaUrl }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const className = ['navbar', scrolled && 'is-scrolled', open && 'is-open'].filter(Boolean).join(' ');

  return (
    <header className={className}>
      <nav className="navbar__inner container" aria-label="Principal">
        <a className="navbar__brand" href="#inicio" aria-label={`${gym.nombre} – inicio`}>
          <img src={asset('img/logo.png')} alt={gym.nombre} width="132" height="80" />
        </a>

        <ul className="navbar__links" id="navbar-menu">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a className="btn btn--primary" href={reservaUrl} target="_blank" rel="noopener" onClick={close}>
              Reservá tu lugar
            </a>
          </li>
        </ul>

        <a className="btn btn--primary navbar__cta" href={reservaUrl} target="_blank" rel="noopener">
          Reservá
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-controls="navbar-menu"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={28} />
        </button>
      </nav>
    </header>
  );
}
