import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Nexuscart-/',
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    rollupOptions: {
      // This tells Vite/Rollup how to handle the Supabase sub-module
      external: [], 
    },
    // CommonJS options help fix dependency resolution issues in 2026
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  optimizeDeps: {
    // Force Vite to pre-bundle Supabase to avoid resolution errors
    include: ['@supabase/supabase-js', '@supabase/functions-js'],
  },
});
