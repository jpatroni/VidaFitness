/**
 * CAPA DE PRESENTACIÓN · Calendario de clases
 * Desktop: grilla turno × día. Mobile: pestañas por día.
 * Filtro por disciplina y click en una clase → reserva.
 */
import { Fragment, useState } from 'react';
import { Icon, TURNO_ICON } from '../Icon.jsx';
import { Reveal } from '../Reveal.jsx';
import './Schedule.css';

const DIA_JS_A_ID = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
export const FILTRO_TODAS = 'todas';

const progColor = (id) => ({ '--prog-color': `var(--prog-${id})` });

function diaInicial(dias) {
  const hoy = DIA_JS_A_ID[new Date().getDay()];
  return dias.some((d) => d.id === hoy) ? hoy : dias[0].id;
}

function ClaseItem({ item, dimmed, onReservar }) {
  const { clase, programa, profesor } = item;
  return (
    <li>
      <button
        type="button"
        className={`schedule__item ${dimmed ? 'is-dimmed' : ''}`}
        style={progColor(programa.id)}
        title="Consultar disponibilidad"
        onClick={() => onReservar(item)}
      >
        <span className="schedule__item-hora">{clase.horaLabel}</span>
        <span className="schedule__item-nombre">{programa.nombre}</span>
        <span className="schedule__item-profe">{profesor.titulo}</span>
      </button>
    </li>
  );
}

/**
 * @param {{
 *   grilla: Awaited<ReturnType<import('@application/ScheduleService.js').ScheduleService['getGrilla']>>,
 *   filtro: string,
 *   onFiltroChange: (id: string) => void,
 *   onReservar: (item: { clase, programa, profesor }) => void,
 * }} props
 */
export function Schedule({ grilla, filtro, onFiltroChange, onReservar }) {
  const { dias, turnos, programas, celdas } = grilla;
  const [diaActivo, setDiaActivo] = useState(() => diaInicial(dias));

  const chips = [{ id: FILTRO_TODAS, label: 'Todas' }].concat(
    programas.map((p) => ({ id: p.id, label: p.nombre.replace('Entrenamiento ', '') })),
  );

  return (
    <section className="section schedule" id="horarios">
      <div className="container">
        <Reveal as="header" className="schedule__header">
          <div>
            <p className="section__eyebrow">Elegí tu momento, alcanzá tu objetivo</p>
            <h2 className="section__title">
              Calendario de <em>clases</em>
            </h2>
            <p className="section__lead">Tocá una clase para consultar disponibilidad. ¡Cupos limitados!</p>
          </div>

          <div className="schedule__filters" role="group" aria-label="Filtrar por disciplina">
            {chips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                className={`chip ${filtro === chip.id ? 'is-active' : ''}`}
                style={chip.id === FILTRO_TODAS ? undefined : progColor(chip.id)}
                aria-pressed={filtro === chip.id}
                onClick={() => onFiltroChange(chip.id)}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="schedule__tabs" role="tablist" aria-label="Día de la semana">
          {dias.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              className="schedule__tab"
              aria-selected={diaActivo === d.id}
              onClick={() => setDiaActivo(d.id)}
            >
              {d.corto}
            </button>
          ))}
        </div>

        <Reveal className="schedule__grid" data-active-dia={diaActivo}>
          <div className="schedule__corner" aria-hidden="true" />
          {dias.map((d) => (
            <div key={d.id} className="schedule__day">
              {d.label}
            </div>
          ))}

          {turnos.map((t) => (
            <Fragment key={t.id}>
              <div className="schedule__turno">
                <Icon name={TURNO_ICON[t.id]} size={22} />
                <span>{t.label}</span>
              </div>
              {dias.map((d) => (
                <ul key={d.id} className="schedule__cell" data-dia={d.id} aria-label={`${d.label}, ${t.label}`}>
                  {celdas[t.id][d.id].map((item) => (
                    <ClaseItem
                      key={`${item.clase.dia}-${item.clase.hora}-${item.programa.id}`}
                      item={item}
                      dimmed={filtro !== FILTRO_TODAS && item.programa.id !== filtro}
                      onReservar={onReservar}
                    />
                  ))}
                </ul>
              ))}
            </Fragment>
          ))}
        </Reveal>

        <p className="schedule__note">
          <Icon name="heartPulse" size={18} /> ¡Podés combinar ambos tipos de entrenamiento! Confirmá tu lugar
          por privado.
        </p>
      </div>
    </section>
  );
}
