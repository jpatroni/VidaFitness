/**
 * CAPA DE PRESENTACIÓN · Carga de datos de la página
 * Pide a los servicios todo lo que la landing necesita, una sola vez.
 */
import { useEffect, useState } from 'react';
import { useServices } from '../context/ServicesContext.jsx';

export function useLandingData() {
  const { catalogService, scheduleService } = useServices();
  const [state, setState] = useState({ status: 'loading', data: null, error: null });

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      catalogService.getProgramas(),
      catalogService.getProfesores(),
      catalogService.getProgramasPorProfesor(),
      scheduleService.getGrilla(),
    ])
      .then(([programas, profesores, programasPorProfesor, grilla]) => {
        if (!cancelled) {
          setState({ status: 'ready', data: { programas, profesores, programasPorProfesor, grilla }, error: null });
        }
      })
      .catch((error) => {
        if (!cancelled) setState({ status: 'error', data: null, error });
      });

    return () => {
      cancelled = true;
    };
  }, [catalogService, scheduleService]);

  return state;
}
