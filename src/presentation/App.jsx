/**
 * CAPA DE PRESENTACIÓN · Página
 * Pide los datos a los servicios (vía Context), compone las secciones
 * y mantiene el estado compartido entre ellas (filtro de disciplina).
 */
// Los estilos globales van PRIMERO: así el CSS de cada componente
// (que se importa después) puede sobrescribirlos, p. ej. ocultar un .btn en mobile.
import './styles/tokens.css';
import './styles/base.css';
import { useCallback, useMemo, useState } from 'react';
import { Benefits } from './components/Benefits/Benefits.jsx';
import { Coaches } from './components/Coaches/Coaches.jsx';
import { Community } from './components/Community/Community.jsx';
import { CtaBanner } from './components/CtaBanner/CtaBanner.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Gallery } from './components/Gallery/Gallery.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Programs } from './components/Programs/Programs.jsx';
import { FILTRO_TODAS, Schedule } from './components/Schedule/Schedule.jsx';
import { WhatsAppFab } from './components/WhatsAppFab/WhatsAppFab.jsx';
import { useServices } from './context/ServicesContext.jsx';
import { useLandingData } from './hooks/useLandingData.js';

export function App() {
  const { gym, contactService } = useServices();
  const { status, data, error } = useLandingData();
  const [filtro, setFiltro] = useState(FILTRO_TODAS);

  const reservaUrl = contactService.getReservaUrl();
  const canal = contactService.canal;

  const reservaUrlPorProfesor = useMemo(
    () =>
      Object.fromEntries(
        (data?.profesores ?? []).map((profesor) => [profesor.id, contactService.getReservaUrl({ profesor })]),
      ),
    [data, contactService],
  );

  const reservarClase = useCallback(
    ({ programa, clase }) => {
      window.open(contactService.getReservaUrl({ programa, clase }), '_blank', 'noopener');
    },
    [contactService],
  );

  if (status === 'error') {
    console.error('[VidaFitness] No se pudieron cargar los datos', error);
    return (
      <p className="container section">
        No pudimos cargar la página. <a href={reservaUrl}>Escribinos</a> y te pasamos la info.
      </p>
    );
  }
  if (status === 'loading') return null;

  const { programas, profesores, programasPorProfesor, grilla, medios } = data;
  const funcional = programas.find(({ programa }) => programa.id === 'funcional')?.programa;

  return (
    <>
      <Navbar gym={gym} reservaUrl={reservaUrl} />
      <main>
        <Hero gym={gym} reservaUrl={reservaUrl} video={medios.hero[0]} />
        <Programs items={programas} onVerHorarios={setFiltro} />
        <Benefits programa={funcional} medios={medios.beneficios} />
        <Gallery medios={medios.espacio} />
        <Schedule grilla={grilla} filtro={filtro} onFiltroChange={setFiltro} onReservar={reservarClase} />
        <Coaches
          profesores={profesores}
          programasPorProfesor={programasPorProfesor}
          reservaUrlPorProfesor={reservaUrlPorProfesor}
          canal={canal}
        />
        <Community gym={gym} instagramUrl={contactService.getInstagramUrl()} medios={medios.comunidad} />
        <CtaBanner gym={gym} reservaUrl={reservaUrl} canal={canal} />
      </main>
      <Footer gym={gym} instagramUrl={contactService.getInstagramUrl()} credito={contactService.getCredito()} />
      {canal === 'whatsapp' && <WhatsAppFab url={reservaUrl} />}
    </>
  );
}
