// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// Define your environment variables here
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:8000';
const BUILD_PATH = process.env.REACT_APP_BUILD_PATH || '/home/kamal/Documents/zebrawork/school-blog/public/client';

export default defineConfig({
  plugins: [react()],
  // ... other Vite configuration options

  env: {
    REACT_APP_BASE_API_URL: BASE_API_URL,
  },
  build: {
    emptyOutDir: true,
    outDir: BUILD_PATH,
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  }
});