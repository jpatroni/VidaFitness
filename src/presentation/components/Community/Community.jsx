/**
 * CAPA DE PRESENTACIÓN · Comunidad
 * Invita a seguir a Vida Fitness en Instagram.
 */
import { Icon } from '../Icon.jsx';
import { Reveal } from '../Reveal.jsx';
import './Community.css';

/** Mosaico estilo feed; `pos` = object-position para centrar a la persona en el recorte cuadrado */
const FOTOS = [
  { src: '/img/hero-poster.jpg', alt: 'Entrenamiento con battle ropes', pos: '30% center' },
  { src: '/img/kettlebell.jpg', alt: 'Swing con kettlebell', pos: '58% center' },
  { src: '/img/trineo.jpg', alt: 'Empuje de trineo con discos', pos: '45% center' },
  { src: '/img/trx.jpg', alt: 'Remo con bandas de suspensión', pos: '50% center' },
  { src: '/img/noe.jpg', alt: 'Profe Noe', pos: 'center 30%' },
  { src: '/img/wallball.jpg', alt: 'Lanzamiento de balón medicinal', pos: '40% center' },
];

const PILARES = ['Rutinas y tips', 'Novedades y horarios', 'La energía de cada clase'];

export function Community({ gym, instagramUrl }) {
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
            {FOTOS.map((f) => (
              <span className="community__tile" key={f.src}>
                <img src={f.src} alt={f.alt} loading="lazy" style={{ objectPosition: f.pos }} />
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
