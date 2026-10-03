import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

const src = (dir) => fileURLToPath(new URL(`./src/${dir}`, import.meta.url));

export default defineConfig({
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
});
