/**
 * CAPA DE PRESENTACIÓN · Inyección de dependencias
 * Los servicios de aplicación llegan a los componentes por Context;
 * ningún componente los instancia ni sabe de dónde salen los datos.
 */
import { createContext, useContext } from 'react';

const ServicesContext = createContext(null);

export function ServicesProvider({ services, children }) {
  return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>;
}

/** @returns {{ gym, catalogService, scheduleService, contactService }} */
export function useServices() {
  const services = useContext(ServicesContext);
  if (!services) throw new Error('useServices debe usarse dentro de <ServicesProvider>');
  return services;
}
