import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

const src = (dir) => fileURLToPath(new URL(`./src/${dir}`, import.meta.url));

// En GitHub Pages el sitio vive en https://<usuario>.github.io/VidaFitness/
// En desarrollo se sirve desde la raíz. Se puede sobrescribir con BASE_PATH.
const BASE_PRODUCCION = process.env.BASE_PATH ?? '/VidaFitness/';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? BASE_PRODUCCION : '/',
  plugins: [react()],
  resolve: {
    // Un alias por capa: los imports entre capas quedan explícitos
    // (ver regla de dependencias en el README).
    alias: {
      '@domain': src('domain'),
      '@data': src('data'),
      '@application': src('application'),
      '@presentation': src('presentation'),
    },
  },
}));
