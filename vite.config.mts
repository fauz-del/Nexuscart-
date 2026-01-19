import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * The base path must match your GitHub repository name exactly.
   * For the URL: https://fauz-del.github.io
   * The base must be '/Nexuscart-/'
   */
  base: '/Nexuscart-/', 

  plugins: [react()],
  
  resolve: {
    // Necessary for some monorepo or Termux environments to resolve symlinks
    preserveSymlinks: true,
  },

  build: {
    // Assets smaller than this (in bytes) will be inlined as base64 strings
    assetsInlineLimit: 4096, 
    rollupOptions: {
      external: [], 
    },
    commonjsOptions: {
      // Ensures compatibility with older CommonJS modules in 2026
      include: [/node_modules/],
    },
  },

  optimizeDeps: {
    // Pre-bundles these dependencies for faster cold starts in development
    include: [
      '@supabase/supabase-js', 
      '@supabase/functions-js',
      'react-paystack'
    ],
  },

  server: {
    // Allows serving files from one level up (common in local dev environments)
    fs: {
      allow: ['..'],
    },
    // Optional: useful if running in specific environments like Termux
    host: true,
  },
});
