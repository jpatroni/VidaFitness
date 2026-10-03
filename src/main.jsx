/**
 * PUNTO DE ENTRADA · Composition root
 * Único lugar donde se "cablean" las capas:
 *   datos (repositorios) → aplicación (servicios) → presentación (React)
 * Para cambiar la fuente de datos (API, CMS, JSON remoto) sólo se
 * reemplazan los repositorios acá.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CatalogService } from '@application/CatalogService.js';
import { ContactService } from '@application/ContactService.js';
import { ScheduleService } from '@application/ScheduleService.js';
import {
  StaticClaseRepository,
  StaticCreditoRepository,
  StaticGymRepository,
  StaticProfesorRepository,
  StaticProgramaRepository,
} from '@data/repositories/StaticRepositories.js';
import { App } from '@presentation/App.jsx';
import { ServicesProvider } from '@presentation/context/ServicesContext.jsx';

// --- Capa de datos ---
const gymRepository = new StaticGymRepository();
const creditoRepository = new StaticCreditoRepository();
const profesorRepository = new StaticProfesorRepository();
const programaRepository = new StaticProgramaRepository();
const claseRepository = new StaticClaseRepository();

// --- Capa de aplicación ---
const catalogService = new CatalogService({ programaRepository, profesorRepository });
const scheduleService = new ScheduleService({ claseRepository, programaRepository, profesorRepository });

// --- Capa de presentación ---
async function bootstrap() {
  const [gym, contactService] = await Promise.all([
    gymRepository.get(),
    ContactService.create({ gymRepository, creditoRepository }),
  ]);
  const services = { gym, catalogService, scheduleService, contactService };

  createRoot(document.getElementById('app')).render(
    <StrictMode>
      <ServicesProvider services={services}>
        <App />
      </ServicesProvider>
    </StrictMode>,
  );
}

bootstrap().catch((error) => {
  console.error('[VidaFitness] No se pudo iniciar la página', error);
});
