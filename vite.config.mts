import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Nexuscart-/',
  resolve: {
    preserveSymlinks: true, // Recommended for pnpm in some environments
  },
});
