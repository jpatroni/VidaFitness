/**
 * CAPA DE PRESENTACIÓN · Íconos SVG inline
 * Los trazos usan stroke = currentColor; los logos de marca, fill = currentColor.
 * Los paths son constantes del proyecto (no datos de usuario), por eso es seguro
 * inyectarlos con dangerouslySetInnerHTML.
 */
const PATHS = {
  group:
    '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><path d="M15 14.2c2.6-.4 4.8 1.2 5.5 4.3"/>',
  person: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-4 3.6-6 7-6s6.2 2 7 6"/>',
  run: '<circle cx="15" cy="4.5" r="1.8"/><path d="M8 21l3-6 3 2.5V22"/><path d="M6 12l3-4h5l2 3.5 3 1"/><path d="M11 15l1.5-5"/>',
  mat: '<path d="M4 17.5C4 19 5 20 6.5 20H20V8H6.5C5 8 4 9 4 10.5z"/><path d="M4 10.5C4 9 5 8 6.5 8S9 9 9 10.5V20"/>',
  heartPulse:
    '<path d="M12 20s-7-4.4-8.6-9.1C2.3 7.6 4.5 4.5 7.7 4.5c1.9 0 3.3 1 4.3 2.5 1-1.5 2.4-2.5 4.3-2.5 3.2 0 5.4 3.1 4.3 6.4C19 15.6 12 20 12 20z"/><path d="M5 12h3.5l1.5-2.5 2 5 1.5-2.5H19"/>',
  check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  pin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  instagram:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor"/>',
  arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  sunset: '<path d="M7 17a5 5 0 0 1 10 0"/><path d="M12 6.5v3M4.5 11l2 1.5M19.5 11l-2 1.5M3 17h18M7 20.5h10"/>',
  moon: '<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>',
};

/** Logos de marca: relleno sólido */
const BRAND_PATHS = {
  whatsapp:
    '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.25-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41z"/>',
};

export const TURNO_ICON = { manana: 'sun', tarde: 'sunset', noche: 'moon' };

export function Icon({ name, size = 24 }) {
  const brandPaths = BRAND_PATHS[name];
  const common = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true };

  if (brandPaths) {
    return <svg {...common} fill="currentColor" dangerouslySetInnerHTML={{ __html: brandPaths }} />;
  }
  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: PATHS[name] ?? '' }}
    />
  );
}
