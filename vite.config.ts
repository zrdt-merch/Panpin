import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// Deployed to https://zrdt-merch.github.io/Panpin/ (GitHub Pages project site).
// The base path is case-sensitive and must match the repository name.
export default defineConfig({
  base: '/Panpin/',
  plugins: [react(), tailwindcss()],
});
