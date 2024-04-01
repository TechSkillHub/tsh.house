import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({refresh: true,})],
  resolve: {
    alias: 
      {
        // '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` // just variables loaded globally
        @import "./src/assets/scss/main";
        `
      }
    }
  },
  server: {
    port: 8082,
    watch: {
      usePolling: true,
    }
  },
})
