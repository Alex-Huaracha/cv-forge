import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-pdf/renderer': '@react-pdf/renderer/dist/react-pdf.es.js',
    },
  },
});
