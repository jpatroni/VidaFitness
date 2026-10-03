/**
 * CAPA DE PRESENTACIÓN · Banner de llamada a la acción
 */
import { Icon } from '../Icon.jsx';
import { Reveal } from '../Reveal.jsx';
import './CtaBanner.css';

export function CtaBanner({ gym, reservaUrl, canal }) {
  return (
    <section className="cta" id="contacto">
      <div className="container">
        <Reveal className="cta__box">
          <p className="cta__script">{gym.lema}</p>
          <h2 className="cta__title">
            Consultá disponibilidad · <em>cupos limitados</em>
          </h2>
          <p className="cta__text">Escribinos y armamos juntos tu semana de entrenamiento en {gym.ubicacion}.</p>
          <a className="btn btn--primary cta__btn" href={reservaUrl} target="_blank" rel="noopener">
            <Icon name={canal} size={20} />
            {canal === 'whatsapp' ? 'Escribinos por WhatsApp' : 'Escribinos por Instagram'}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
