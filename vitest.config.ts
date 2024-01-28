import tsconfigPaths from 'vite-tsconfig-paths'; // sólo si estas utilizando rutas personalizadas en tsconfig
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [tsconfigPaths()], // sólo si estas utilizando rutas personalizadas en tsconfig
});